"""Utilidades compartidas para hablar con QuestDB desde los scripts de análisis.

QuestDB expone un endpoint HTTP ``/exec`` que acepta SQL (SELECT e INSERT) y
devuelve JSON. Estas funciones encapsulan la autenticación por token, el manejo
de errores y la conversión a ``pandas.DataFrame``.
"""
from __future__ import annotations

import logging
import os
from typing import Any

import pandas as pd
import requests

try:
    from dotenv import load_dotenv
except ImportError:  # pragma: no cover
    def load_dotenv(*_a: Any, **_kw: Any) -> bool:  # type: ignore[misc]
        return False

logger = logging.getLogger(__name__)

# Timeout (segundos) para todas las llamadas HTTP a QuestDB.
_HTTP_TIMEOUT = 30


def cargar_entorno() -> dict[str, Any]:
    """Lee de ``.env`` la configuración necesaria para los scripts de análisis."""
    load_dotenv()
    return {
        "questdb_url": os.getenv("QUESTDB_HTTP_URL", "http://localhost:9000").rstrip("/"),
        "questdb_token": os.getenv("QUESTDB_TOKEN", "").strip() or None,
        "window": int(os.getenv("ANALISIS_WINDOW", "20")),
        "zscore_threshold": float(os.getenv("ANALISIS_ZSCORE_THRESHOLD", "3.0")),
        "lookback_horas": int(os.getenv("ANALISIS_LOOKBACK_HORAS", "2")),
    }


def _headers(token: str | None) -> dict[str, str]:
    """Construye las cabeceras HTTP, incluyendo el Bearer token si existe."""
    headers = {"Accept": "application/json"}
    if token:
        headers["Authorization"] = f"Bearer {token}"
    return headers


def ejecutar_sql(questdb_url: str, query: str, token: str | None = None) -> dict[str, Any]:
    """Ejecuta una sentencia SQL cualquiera y devuelve la respuesta JSON cruda.

    Args:
        questdb_url: URL base del endpoint HTTP de QuestDB (sin ``/exec``).
        query: Sentencia SQL (SELECT, INSERT, DDL...).
        token: Token de autenticación (opcional).

    Returns:
        El cuerpo JSON de la respuesta de QuestDB.

    Raises:
        requests.HTTPError: Si QuestDB responde con un código de error.
        RuntimeError: Si la respuesta contiene un error de SQL.
    """
    resp = requests.get(
        f"{questdb_url}/exec",
        params={"query": query},
        headers=_headers(token),
        timeout=_HTTP_TIMEOUT,
    )
    resp.raise_for_status()
    data = resp.json()
    if "error" in data:
        raise RuntimeError(f"Error SQL de QuestDB: {data['error']} | query={query!r}")
    return data


def consultar_df(questdb_url: str, query: str, token: str | None = None) -> pd.DataFrame:
    """Ejecuta un SELECT y devuelve el resultado como ``pandas.DataFrame``.

    Convierte automáticamente la primera columna ``TIMESTAMP`` a
    ``datetime64[ns, UTC]`` y la usa como índice si se llama ``ts``.
    """
    data = ejecutar_sql(questdb_url, query, token)
    columnas = [c["name"] for c in data.get("columns", [])]
    filas = data.get("dataset", [])
    df = pd.DataFrame(filas, columns=columnas)
    if "ts" in df.columns:
        df["ts"] = pd.to_datetime(df["ts"], utc=True, errors="coerce")
    logger.debug("Query devolvió %d filas / %d columnas", len(df), len(columnas))
    return df


def _sql_str(valor: str) -> str:
    """Escapa una cadena para interpolarla de forma segura en SQL (comillas simples)."""
    return "'" + valor.replace("'", "''") + "'"


def insertar_evento(
    questdb_url: str,
    *,
    ts_iso: str,
    equipo: str,
    tag: str,
    event_type: str,
    description: str,
    severity: str,
    value: float | None = None,
    token: str | None = None,
) -> None:
    """Inserta una fila en la tabla ``events`` de QuestDB vía SQL INSERT.

    Args:
        ts_iso: Marca temporal en ISO-8601 (ej: ``2026-08-29T14:00:00.000000Z``).
        equipo: Identificador del equipo (EQ01/EQ02/EQ03).
        tag: Tag ISA-95 plano de la variable.
        event_type: Tipo de evento (ej: ``ANOMALY_ZSCORE``).
        description: Texto libre.
        severity: ``info`` | ``warning`` | ``critical``.
        value: Valor numérico asociado (opcional).
        token: Token de autenticación (opcional).
    """
    val_sql = "null" if value is None else repr(float(value))
    query = (
        "INSERT INTO events (ts, equipo, tag, event_type, description, severity, value) "
        f"VALUES (to_timestamp({_sql_str(ts_iso)}, 'yyyy-MM-ddTHH:mm:ss.SSSUUUZ'), "
        f"{_sql_str(equipo)}, {_sql_str(tag)}, {_sql_str(event_type)}, "
        f"{_sql_str(description)}, {_sql_str(severity)}, {val_sql})"
    )
    ejecutar_sql(questdb_url, query, token)
