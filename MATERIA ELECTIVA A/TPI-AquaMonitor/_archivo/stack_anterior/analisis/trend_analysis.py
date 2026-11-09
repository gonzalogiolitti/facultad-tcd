"""Análisis de tendencia de las series de la planta AquaMonitor.

Ajusta una recta por mínimos cuadrados (``numpy.polyfit`` de grado 1) sobre una
serie temporal y proyecta el valor a un horizonte configurable. Se aplica a las
variables cuya deriva es un indicador de mantenimiento:

* ``EQ01 / VIBRACION`` — desgaste de rodamiento / desbalanceo.
* ``EQ02 / PRES_DIF``  — colmatación del lecho filtrante.
"""
from __future__ import annotations

import logging

import numpy as np
import pandas as pd

from qdb_utils import cargar_entorno, consultar_df

logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s | %(levelname)-8s | %(name)s | %(message)s",
    datefmt="%Y-%m-%d %H:%M:%S",
)
logger = logging.getLogger("trend_analysis")

# Equipos/variables bajo seguimiento de tendencia y su recomendación asociada.
SERIES_SEGUIMIENTO: list[dict[str, str]] = [
    {
        "equipo": "EQ01",
        "variable": "VIBRACION",
        "unit": "mm/s",
        "recomendacion_alza": "revisar alineación y rodamientos de la bomba EQ01",
        "umbral_critico": "7.1",
    },
    {
        "equipo": "EQ02",
        "variable": "PRES_DIF",
        "unit": "mbar",
        "recomendacion_alza": "programar retrolavado / recambio de arena del filtro EQ02",
        "umbral_critico": "800",
    },
]


def tendencia_lineal(series: pd.Series, horizonte_puntos: int = 12) -> dict[str, float]:
    """Ajusta una recta a la serie y proyecta ``horizonte_puntos`` hacia adelante.

    Args:
        series: Serie temporal de valores (índice temporal, orden cronológico).
        horizonte_puntos: Cantidad de puntos futuros a proyectar (en la misma
            cadencia que la serie de entrada).

    Returns:
        Diccionario con:
            * ``pendiente``      — cambio de valor por punto.
            * ``intercepto``     — término independiente del ajuste.
            * ``valor_actual``   — último valor observado.
            * ``valor_proyectado`` — valor estimado a ``horizonte_puntos``.
            * ``r2``             — coeficiente de determinación del ajuste.
            * ``n``              — cantidad de puntos usados.

    Raises:
        ValueError: Si la serie tiene menos de 3 puntos válidos.
    """
    y = series.dropna().to_numpy(dtype=float)
    n = y.size
    if n < 3:
        raise ValueError(f"Se requieren al menos 3 puntos para ajustar tendencia (hay {n}).")

    x = np.arange(n, dtype=float)
    pendiente, intercepto = np.polyfit(x, y, deg=1)

    # Coeficiente de determinación R^2.
    y_ajustado = pendiente * x + intercepto
    ss_res = float(np.sum((y - y_ajustado) ** 2))
    ss_tot = float(np.sum((y - y.mean()) ** 2))
    r2 = 1.0 - ss_res / ss_tot if ss_tot > 0 else 0.0

    x_futuro = n - 1 + horizonte_puntos
    valor_proyectado = float(pendiente * x_futuro + intercepto)

    return {
        "pendiente": float(pendiente),
        "intercepto": float(intercepto),
        "valor_actual": float(y[-1]),
        "valor_proyectado": valor_proyectado,
        "r2": float(r2),
        "n": int(n),
    }


def _clasificar_tendencia(pendiente: float, escala: float) -> str:
    """Devuelve 'ascendente' / 'descendente' / 'estable' según la pendiente.

    ``escala`` es una magnitud de referencia (p. ej. valor medio de la serie)
    para relativizar la pendiente y decidir si es significativa.
    """
    umbral = 0.001 * max(abs(escala), 1e-6)
    if pendiente > umbral:
        return "ascendente"
    if pendiente < -umbral:
        return "descendente"
    return "estable"


def _serie_desde_questdb(
    questdb_url: str,
    equipo: str,
    variable: str,
    token: str | None,
    horas: int = 24,
) -> pd.Series:
    """Trae la media horaria de una variable en las últimas ``horas`` horas."""
    query = (
        "SELECT ts, avg(value) AS value "
        "FROM raw_variables "
        f"WHERE equipo = '{equipo}' AND variable = '{variable}' "
        f"AND ts >= dateadd('h', -{int(horas)}, now()) AND quality = 2 "
        "SAMPLE BY 1h ALIGN TO CALENDAR ORDER BY ts ASC"
    )
    df = consultar_df(questdb_url, query, token)
    if df.empty:
        return pd.Series(dtype=float)
    return df.set_index("ts")["value"].astype(float)


def analizar_todos_equipos(
    questdb_url: str,
    token: str | None = None,
    *,
    horas: int = 24,
    horizonte_puntos: int = 24,
) -> pd.DataFrame:
    """Corre el análisis de tendencia sobre todas las series bajo seguimiento.

    Imprime una interpretación en lenguaje natural por cada serie y devuelve un
    ``DataFrame`` resumen.

    Args:
        questdb_url: URL base del endpoint HTTP de QuestDB.
        token: Token de autenticación (opcional).
        horas: Ventana histórica a analizar (media horaria).
        horizonte_puntos: Horizonte de proyección en horas (1 punto = 1 h).

    Returns:
        ``DataFrame`` con una fila por serie analizada.
    """
    filas: list[dict] = []
    for cfg in SERIES_SEGUIMIENTO:
        equipo, variable, unit = cfg["equipo"], cfg["variable"], cfg["unit"]
        serie = _serie_desde_questdb(questdb_url, equipo, variable, token, horas=horas)
        if serie.size < 3:
            logger.warning("%s/%s: datos insuficientes (%d puntos).", equipo, variable, serie.size)
            continue

        res = tendencia_lineal(serie, horizonte_puntos=horizonte_puntos)
        direccion = _clasificar_tendencia(res["pendiente"], escala=serie.mean())

        # Interpretación en lenguaje natural.
        msg = (
            f"{variable} {equipo} en tendencia {direccion}. "
            f"Valor actual: {res['valor_actual']:.2f} {unit}. "
            f"Valor proyectado en {horizonte_puntos}h: {res['valor_proyectado']:.2f} {unit} "
            f"(pendiente {res['pendiente']:+.4f} {unit}/h, R²={res['r2']:.2f})."
        )
        if direccion == "ascendente":
            msg += f" Recomendación: {cfg['recomendacion_alza']} (umbral crítico {cfg['umbral_critico']} {unit})."
        logger.info(msg)

        filas.append(
            {
                "equipo": equipo,
                "variable": variable,
                "unit": unit,
                "direccion": direccion,
                **res,
                "horizonte_horas": horizonte_puntos,
            }
        )

    return pd.DataFrame(filas)


def main() -> None:
    """Ejecuta el análisis de tendencia con la configuración de ``.env``."""
    cfg = cargar_entorno()
    logger.info("Análisis de tendencia | QuestDB=%s", cfg["questdb_url"])
    try:
        resumen = analizar_todos_equipos(cfg["questdb_url"], cfg["questdb_token"])
        if resumen.empty:
            logger.warning("No se produjo ningún resultado de tendencia.")
    except Exception:  # noqa: BLE001
        logger.exception("Falló el análisis de tendencia")
        raise


if __name__ == "__main__":
    main()
