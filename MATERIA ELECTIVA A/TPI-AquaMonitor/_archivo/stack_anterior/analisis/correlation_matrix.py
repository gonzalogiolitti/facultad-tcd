"""Matriz de correlación entre variables de proceso de la planta AquaMonitor.

Calcula la correlación de Pearson entre variables a partir de la tabla
``raw_variables`` de QuestDB, re-muestreando todas las series a una grilla
temporal común (por defecto 5 min) para poder alinearlas.

Correlaciones de interés para el TPI:
    * EQ01: CAUDAL  vs CORRIENTE   (curva de la bomba)
    * EQ03: PH      vs OD          (estado del proceso biológico)
    * EQ02: PRES_DIF vs EFICIENCIA (colmatación vs performance de filtrado)

Salida: ``analisis/outputs/correlaciones.csv``.
"""
from __future__ import annotations

import logging
import os

import pandas as pd

from qdb_utils import cargar_entorno, consultar_df

logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s | %(levelname)-8s | %(name)s | %(message)s",
    datefmt="%Y-%m-%d %H:%M:%S",
)
logger = logging.getLogger("correlation_matrix")

# Ruta del CSV de salida (relativa a este archivo).
_DIR_BASE = os.path.dirname(os.path.abspath(__file__))
RUTA_SALIDA = os.path.join(_DIR_BASE, "outputs", "correlaciones.csv")

# Pares de variables cuya correlación se reporta explícitamente.
PARES_CLAVE: list[tuple[str, str]] = [
    ("EQ01_CAUDAL", "EQ01_CORRIENTE"),
    ("EQ03_PH", "EQ03_OD"),
    ("EQ02_PRES_DIF", "EQ02_EFICIENCIA"),
]


def calcular_correlaciones(df: pd.DataFrame) -> pd.DataFrame:
    """Devuelve la matriz de correlación de Pearson de un ``DataFrame`` ancho.

    Args:
        df: ``DataFrame`` con una columna por variable (formato ancho) y una
            fila por instante de la grilla temporal.

    Returns:
        Matriz de correlación (``DataFrame`` cuadrado) redondeada a 4 decimales.
    """
    return df.corr(method="pearson", numeric_only=True).round(4)


def _traer_datos_anchos(
    questdb_url: str,
    token: str | None,
    horas: int,
    regla_remuestreo: str,
) -> pd.DataFrame:
    """Consulta QuestDB y pivotea a formato ancho (columna = ``EQUIPO_VARIABLE``)."""
    query = (
        "SELECT ts, equipo, variable, value "
        "FROM raw_variables "
        f"WHERE ts >= dateadd('h', -{int(horas)}, now()) AND quality = 2 "
        "ORDER BY ts ASC"
    )
    largo = consultar_df(questdb_url, query, token)
    if largo.empty:
        return pd.DataFrame()

    largo["col"] = largo["equipo"].astype(str) + "_" + largo["variable"].astype(str)
    largo["value"] = pd.to_numeric(largo["value"], errors="coerce")

    ancho = (
        largo.pivot_table(index="ts", columns="col", values="value", aggfunc="mean")
        .sort_index()
        .resample(regla_remuestreo)
        .mean()
        .interpolate(limit_direction="both")
        .dropna(how="all")
    )
    return ancho


def generar_reporte(
    questdb_url: str,
    token: str | None = None,
    *,
    horas: int = 24,
    regla_remuestreo: str = "5min",
    ruta_salida: str = RUTA_SALIDA,
) -> pd.DataFrame:
    """Genera la matriz de correlación, la exporta a CSV y loguea los pares clave.

    Returns:
        La matriz de correlación completa.
    """
    ancho = _traer_datos_anchos(questdb_url, token, horas, regla_remuestreo)
    if ancho.empty:
        logger.warning("Sin datos en las últimas %d h; no se genera reporte.", horas)
        return pd.DataFrame()

    matriz = calcular_correlaciones(ancho)

    os.makedirs(os.path.dirname(ruta_salida), exist_ok=True)
    matriz.to_csv(ruta_salida, encoding="utf-8")
    logger.info("Matriz de correlación (%d variables) exportada a %s",
                matriz.shape[0], ruta_salida)

    logger.info("--- Correlaciones clave (Pearson) ---")
    for a, b in PARES_CLAVE:
        if a in matriz.columns and b in matriz.columns:
            r = matriz.loc[a, b]
            logger.info("  %-18s vs %-18s : r = %+.3f  (%s)", a, b, r, _interpretar_r(r))
        else:
            logger.warning("  %s / %s: alguna variable no está presente en los datos.", a, b)

    return matriz


def _interpretar_r(r: float) -> str:
    """Traduce el valor de r a una etiqueta cualitativa."""
    ar = abs(r)
    fuerza = (
        "muy fuerte" if ar >= 0.9 else
        "fuerte" if ar >= 0.7 else
        "moderada" if ar >= 0.4 else
        "débil" if ar >= 0.2 else
        "despreciable"
    )
    signo = "positiva" if r > 0 else "negativa"
    return f"correlación {signo} {fuerza}"


def main() -> None:
    """Ejecuta la generación del reporte con la configuración de ``.env``."""
    cfg = cargar_entorno()
    logger.info("Matriz de correlación | QuestDB=%s", cfg["questdb_url"])
    try:
        generar_reporte(cfg["questdb_url"], cfg["questdb_token"])
    except Exception:  # noqa: BLE001
        logger.exception("Falló la generación de la matriz de correlación")
        raise


if __name__ == "__main__":
    main()
