"""Detección de anomalías sobre las series de la planta AquaMonitor.

Implementa dos métodos clásicos de análisis estadístico de series temporales:

* **Z-score con ventana deslizante**: marca como anómalo el punto cuyo desvío
  respecto de la media móvil supera ``threshold`` veces el desvío estándar móvil.
* **Bandas de Bollinger**: media móvil ± ``num_std`` desvíos; los puntos fuera de
  la banda se consideran atípicos.

El script, al ejecutarse, consulta las últimas horas de ``raw_variables`` en
QuestDB, aplica el Z-score a cada variable e inserta las anomalías detectadas en
la tabla ``events``.
"""
from __future__ import annotations

import logging

import numpy as np
import pandas as pd

from qdb_utils import (
    cargar_entorno,
    consultar_df,
    insertar_evento,
)

logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s | %(levelname)-8s | %(name)s | %(message)s",
    datefmt="%Y-%m-%d %H:%M:%S",
)
logger = logging.getLogger("anomaly_detection")


# ---------------------------------------------------------------------------
#  Métodos estadísticos
# ---------------------------------------------------------------------------
def zscore_anomaly(
    series: pd.Series,
    window: int = 20,
    threshold: float = 3.0,
) -> pd.Series:
    """Marca anomalías por Z-score sobre una ventana deslizante.

    Args:
        series: Serie temporal de valores (orden cronológico).
        window: Cantidad de puntos de la ventana móvil.
        threshold: Umbral de |Z| a partir del cual el punto es anómalo.

    Returns:
        Serie booleana del mismo índice que ``series``: ``True`` = anomalía.
        Los primeros ``window - 1`` puntos son ``False`` (ventana incompleta).
    """
    if series.empty:
        return pd.Series(dtype=bool)

    media_movil = series.rolling(window=window, min_periods=window).mean()
    desvio_movil = series.rolling(window=window, min_periods=window).std(ddof=0)

    # Evitar división por cero cuando la serie es constante en la ventana.
    z = (series - media_movil) / desvio_movil.replace(0.0, np.nan)
    anomalias = z.abs() > threshold
    return anomalias.fillna(False).astype(bool)


def bollinger_bands(
    series: pd.Series,
    window: int = 20,
    num_std: float = 2.0,
) -> dict[str, pd.Series]:
    """Calcula las bandas de Bollinger de una serie.

    Args:
        series: Serie temporal de valores.
        window: Ventana de la media/desvío móvil.
        num_std: Número de desvíos estándar para el ancho de la banda.

    Returns:
        Diccionario con las claves ``mean``, ``upper`` y ``lower``, cada una
        una ``pd.Series`` alineada con ``series``.
    """
    media = series.rolling(window=window, min_periods=window).mean()
    desvio = series.rolling(window=window, min_periods=window).std(ddof=0)
    return {
        "mean": media,
        "upper": media + num_std * desvio,
        "lower": media - num_std * desvio,
    }


def fuera_de_bandas(series: pd.Series, window: int = 20, num_std: float = 2.0) -> pd.Series:
    """Serie booleana: ``True`` donde el valor cae fuera de la banda de Bollinger."""
    bandas = bollinger_bands(series, window=window, num_std=num_std)
    fuera = (series > bandas["upper"]) | (series < bandas["lower"])
    return fuera.fillna(False).astype(bool)


# ---------------------------------------------------------------------------
#  Orquestación: consultar QuestDB, detectar y almacenar
# ---------------------------------------------------------------------------
def _consultar_ultimas_horas(questdb_url: str, horas: int, token: str | None) -> pd.DataFrame:
    """Trae de ``raw_variables`` las lecturas de las últimas ``horas`` horas."""
    query = (
        "SELECT ts, equipo, tag, variable, unit, value "
        "FROM raw_variables "
        f"WHERE ts >= dateadd('h', -{int(horas)}, now()) "
        "AND quality = 2 AND variable <> 'ESTADO' "
        "ORDER BY ts ASC"
    )
    return consultar_df(questdb_url, query, token)


def detect_and_store(
    questdb_url: str,
    token: str | None = None,
    *,
    window: int = 20,
    threshold: float = 3.0,
    lookback_horas: int = 2,
    dry_run: bool = False,
) -> pd.DataFrame:
    """Detecta anomalías por Z-score en las últimas horas y las guarda en ``events``.

    Args:
        questdb_url: URL base del endpoint HTTP de QuestDB.
        token: Token de autenticación (opcional).
        window: Ventana del Z-score.
        threshold: Umbral de |Z|.
        lookback_horas: Horas hacia atrás a analizar.
        dry_run: Si es ``True``, no inserta en ``events`` (sólo reporta).

    Returns:
        ``DataFrame`` con las anomalías detectadas (una fila por punto anómalo).
    """
    df = _consultar_ultimas_horas(questdb_url, lookback_horas, token)
    if df.empty:
        logger.warning("Sin datos en las últimas %d h; nada para analizar.", lookback_horas)
        return df

    detecciones: list[dict] = []
    for tag, grupo in df.sort_values("ts").groupby("tag"):
        serie = grupo.set_index("ts")["value"].astype(float)
        if len(serie) < window:
            logger.debug("Tag %s: sólo %d puntos (< %d), se omite.", tag, len(serie), window)
            continue

        marca = zscore_anomaly(serie, window=window, threshold=threshold)
        media_movil = serie.rolling(window, min_periods=window).mean()
        desvio_movil = serie.rolling(window, min_periods=window).std(ddof=0)

        for ts_i in serie.index[marca.values]:
            valor = float(serie.loc[ts_i])
            media = float(media_movil.loc[ts_i])
            sd = float(desvio_movil.loc[ts_i])
            z = (valor - media) / sd if sd else 0.0
            fila_ctx = grupo.loc[grupo["ts"] == ts_i].iloc[0]
            severidad = "critical" if abs(z) > threshold + 1.0 else "warning"
            descripcion = (
                f"Z-score={z:.2f} supera umbral {threshold} "
                f"(media_movil={media:.3f}, sd_movil={sd:.3f}, ventana={window})"
            )
            detecciones.append(
                {
                    "ts": ts_i,
                    "equipo": fila_ctx["equipo"],
                    "tag": tag,
                    "variable": fila_ctx["variable"],
                    "unit": fila_ctx["unit"],
                    "value": valor,
                    "z_score": round(z, 3),
                    "severity": severidad,
                    "description": descripcion,
                }
            )

    resultado = pd.DataFrame(detecciones)
    if resultado.empty:
        logger.info("No se detectaron anomalías por Z-score (umbral=%.1f).", threshold)
        return resultado

    logger.info("Anomalías detectadas: %d", len(resultado))
    for _, r in resultado.iterrows():
        logger.info(
            "  %s | %s | value=%.3f %s | z=%.2f | %s",
            r["ts"], r["tag"], r["value"], r["unit"], r["z_score"], r["severity"],
        )
        if not dry_run:
            ts_iso = pd.Timestamp(r["ts"]).strftime("%Y-%m-%dT%H:%M:%S.%f") + "Z"
            insertar_evento(
                questdb_url,
                ts_iso=ts_iso,
                equipo=str(r["equipo"]),
                tag=str(r["tag"]),
                event_type="ANOMALY_ZSCORE",
                description=str(r["description"]),
                severity=str(r["severity"]),
                value=float(r["value"]),
                token=token,
            )
    if dry_run:
        logger.info("dry-run: no se insertó nada en la tabla events.")
    else:
        logger.info("Se insertaron %d eventos en la tabla events.", len(resultado))
    return resultado


# ---------------------------------------------------------------------------
#  Entry point
# ---------------------------------------------------------------------------
def main() -> None:
    """Ejecuta la detección con la configuración de ``.env``."""
    cfg = cargar_entorno()
    logger.info(
        "Detección de anomalías | QuestDB=%s | ventana=%d | umbral=%.1f | lookback=%dh",
        cfg["questdb_url"], cfg["window"], cfg["zscore_threshold"], cfg["lookback_horas"],
    )
    try:
        detect_and_store(
            cfg["questdb_url"],
            cfg["questdb_token"],
            window=cfg["window"],
            threshold=cfg["zscore_threshold"],
            lookback_horas=cfg["lookback_horas"],
        )
    except Exception:  # noqa: BLE001
        logger.exception("Falló la detección de anomalías")
        raise


if __name__ == "__main__":
    main()
