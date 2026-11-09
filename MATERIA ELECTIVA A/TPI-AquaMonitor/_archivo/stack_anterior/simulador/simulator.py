"""Simulador principal de la planta IIoT AquaMonitor.

Instancia los tres equipos (bomba de ingreso, filtro de arena y reactor
biológico), se conecta a un broker MQTT (por defecto con TLS) y publica cada
variable de proceso en su topic ``AQM/PTEF/{EQ_ID}/{PARAM}`` cada
``INTERVAL_SECONDS`` segundos.

Payload JSON publicado por variable::

    {
        "tag":     "AQM-PTEF-CAPT-EQ01-CAUDAL",
        "value":   118.42,
        "ts":      1717171717123,          # epoch en milisegundos
        "equipo":  "EQ01",
        "unit":    "m3/h",
        "quality": 2                        # 0=bad, 1=uncertain, 2=good
    }

Ejecución (desde la raíz del proyecto)::

    python -m simulador.simulator                 # bucle infinito con TLS
    python -m simulador.simulator --once          # un solo ciclo y sale
    python -m simulador.simulator --dry-run       # no conecta a MQTT, sólo loguea
    python -m simulador.simulator --inject VIB_HIGH --at 3
    python -m simulador.simulator --random        # anomalías esporádicas
"""
from __future__ import annotations

import argparse
import json
import logging
import os
import signal
import ssl
import sys
import time
from typing import Any

try:  # Dependencias externas (ver simulador/requirements.txt)
    import paho.mqtt.client as mqtt
except ImportError:  # pragma: no cover
    mqtt = None  # type: ignore[assignment]

try:
    import certifi
except ImportError:  # pragma: no cover
    certifi = None  # type: ignore[assignment]

try:
    from dotenv import load_dotenv
except ImportError:  # pragma: no cover
    def load_dotenv(*_a: Any, **_kw: Any) -> bool:  # type: ignore[misc]
        return False

from . import config
from .anomaly_injector import AnomalyInjector
from .models import BombaIngreso, FiltroArena, ReactorBiologico

logger = logging.getLogger("simulador")

# Bandera global para una parada ordenada ante SIGINT/SIGTERM.
_DETENER = False


def _manejar_senal(signum: int, _frame: Any) -> None:
    """Handler de señales: solicita el fin ordenado del bucle principal."""
    global _DETENER
    _DETENER = True
    logger.info("Señal %s recibida, finalizando de forma ordenada...", signum)


# ---------------------------------------------------------------------------
#  Configuración
# ---------------------------------------------------------------------------
def cargar_config_entorno() -> dict[str, Any]:
    """Lee la configuración de conexión desde variables de entorno (.env)."""
    load_dotenv()
    seed_raw = os.getenv("SIM_SEED", "").strip()
    return {
        "broker": os.getenv("MQTT_BROKER", "broker.emqx.io"),
        "port": int(os.getenv("MQTT_PORT", "8883")),
        "tls": os.getenv("MQTT_TLS", "true").lower() in {"1", "true", "yes", "si"},
        "ca_cert": os.getenv("MQTT_CA_CERT", "").strip() or None,
        "username": os.getenv("MQTT_USERNAME", "").strip() or None,
        "password": os.getenv("MQTT_PASSWORD", "").strip() or None,
        "client_id": os.getenv("MQTT_CLIENT_ID", "aqm-simulador-01"),
        "topic_base": os.getenv("MQTT_TOPIC_BASE", config.MQTT_TOPIC_BASE_DEFAULT),
        "qos": int(os.getenv("MQTT_QOS", "1")),
        "interval": int(os.getenv("INTERVAL_SECONDS", "120")),
        "seed": int(seed_raw) if seed_raw else None,
        "log_level": os.getenv("LOG_LEVEL", "INFO").upper(),
    }


def configurar_logging(nivel: str) -> None:
    """Configura el logging de consola del simulador."""
    logging.basicConfig(
        level=getattr(logging, nivel, logging.INFO),
        format="%(asctime)s | %(levelname)-8s | %(name)s | %(message)s",
        datefmt="%Y-%m-%d %H:%M:%S",
    )


# ---------------------------------------------------------------------------
#  MQTT
# ---------------------------------------------------------------------------
def construir_cliente_mqtt(cfg: dict[str, Any]) -> "mqtt.Client":
    """Crea y configura el cliente MQTT (con TLS si corresponde).

    Args:
        cfg: Diccionario devuelto por :func:`cargar_config_entorno`.

    Returns:
        Cliente ``paho.mqtt.client.Client`` listo para conectar.

    Raises:
        RuntimeError: Si ``paho-mqtt`` no está instalado.
    """
    if mqtt is None:
        raise RuntimeError(
            "paho-mqtt no está instalado. Ejecutá: pip install -r simulador/requirements.txt"
        )

    cliente = mqtt.Client(
        mqtt.CallbackAPIVersion.VERSION2,
        client_id=cfg["client_id"],
        protocol=mqtt.MQTTv311,
    )

    if cfg["username"]:
        cliente.username_pw_set(cfg["username"], cfg["password"])

    if cfg["tls"]:
        ca = cfg["ca_cert"]
        if ca is None and certifi is not None:
            ca = certifi.where()
        cliente.tls_set(ca_certs=ca, cert_reqs=ssl.CERT_REQUIRED,
                        tls_version=ssl.PROTOCOL_TLS_CLIENT)

    def on_connect(_c: Any, _u: Any, _flags: Any, reason_code: Any,
                   _props: Any = None) -> None:
        if int(reason_code) == 0:
            logger.info("Conectado al broker MQTT %s:%s (TLS=%s)",
                        cfg["broker"], cfg["port"], cfg["tls"])
        else:
            logger.error("Fallo de conexión MQTT: %s", reason_code)

    def on_disconnect(_c: Any, _u: Any, _flags: Any, reason_code: Any,
                      _props: Any = None) -> None:
        logger.warning("Desconectado del broker MQTT (código=%s)", reason_code)

    cliente.on_connect = on_connect
    cliente.on_disconnect = on_disconnect
    return cliente


# ---------------------------------------------------------------------------
#  Publicación
# ---------------------------------------------------------------------------
def construir_payload(equipo_id: str, variable: str, lectura: dict[str, Any]) -> dict[str, Any]:
    """Arma el payload JSON de una variable a partir de su lectura."""
    cfg_var = config.EQUIPOS[equipo_id]["variables"][variable]
    return {
        "tag": config.tag_plano(equipo_id, variable),
        "value": lectura["value"],
        "ts": int(time.time() * 1000),
        "equipo": equipo_id,
        "unit": cfg_var["unit"],
        "quality": int(lectura["quality"]),
    }


def publicar_ciclo(
    cliente: "mqtt.Client | None",
    equipos: dict[str, Any],
    topic_base: str,
    qos: int,
    dry_run: bool,
) -> int:
    """Lee todos los equipos y publica cada variable en su topic.

    Returns:
        Cantidad de mensajes publicados en el ciclo.
    """
    publicados = 0
    for equipo_id, equipo in equipos.items():
        lecturas = equipo.leer()
        for variable, lectura in lecturas.items():
            topic = config.topic_mqtt(topic_base, equipo_id, variable)
            payload = construir_payload(equipo_id, variable, lectura)
            payload_json = json.dumps(payload, ensure_ascii=False)

            if not dry_run and cliente is not None:
                info = cliente.publish(topic, payload_json, qos=qos)
                if info.rc != mqtt.MQTT_ERR_SUCCESS:
                    logger.error("Error publicando en %s (rc=%s)", topic, info.rc)
                    continue

            publicados += 1
            logger.info(
                "PUB %-28s | %-9s = %10.3f %-6s | q=%d",
                topic, variable, payload["value"], payload["unit"], payload["quality"],
            )
        # Avanzar el estado interno del equipo un ciclo.
        equipo.paso()
    return publicados


# ---------------------------------------------------------------------------
#  Bucle principal
# ---------------------------------------------------------------------------
def ejecutar(args: argparse.Namespace) -> int:
    """Punto de entrada de la lógica del simulador."""
    cfg = cargar_config_entorno()
    if args.interval is not None:
        cfg["interval"] = args.interval
    configurar_logging(cfg["log_level"])

    logger.info("=== Simulador AquaMonitor (planta %s) ===", config.PLANTA)
    logger.info("Equipos: %s | Variables totales: %d | Intervalo: %ds | dry-run=%s",
                ", ".join(config.EQUIPOS), config.TOTAL_VARIABLES,
                cfg["interval"], args.dry_run)

    # --- Instanciar equipos ------------------------------------------------
    equipos: dict[str, Any] = {
        "EQ01": BombaIngreso(seed=cfg["seed"]),
        "EQ02": FiltroArena(seed=cfg["seed"]),
        "EQ03": ReactorBiologico(seed=cfg["seed"]),
    }

    # --- Inyector de anomalías ------------------------------------------
    injector = AnomalyInjector(
        equipos, modo_aleatorio=args.random, seed=cfg["seed"],
    )
    if args.inject:
        injector.programar(args.at, args.inject, args.duration)
        logger.info("Anomalía %s agendada para el ciclo %d (duración=%s)",
                    args.inject, args.at, args.duration or "default")

    # --- Conexión MQTT ------------------------------------------------
    cliente: "mqtt.Client | None" = None
    if not args.dry_run:
        cliente = construir_cliente_mqtt(cfg)
        try:
            cliente.connect(cfg["broker"], cfg["port"], keepalive=60)
        except Exception as exc:  # noqa: BLE001  (queremos loguear cualquier fallo)
            logger.error("No se pudo conectar al broker MQTT: %s", exc)
            return 1
        cliente.loop_start()

    # --- Señales para parada ordenada -------------------------------
    signal.signal(signal.SIGINT, _manejar_senal)
    signal.signal(signal.SIGTERM, _manejar_senal)

    # --- Bucle -----------------------------------------------------
    ciclo = 0
    try:
        while not _DETENER:
            ciclo += 1
            injector.tick(ciclo)
            activas = injector.anomalias_activas()
            if activas:
                logger.warning("Anomalías activas en ciclo %d: %s", ciclo, activas)

            t0 = time.time()
            n = publicar_ciclo(
                cliente, equipos, cfg["topic_base"], cfg["qos"], args.dry_run,
            )
            logger.info("Ciclo %d completo: %d mensajes en %.2fs",
                        ciclo, n, time.time() - t0)

            if args.once:
                break

            # Espera interrumpible por señal.
            restante = cfg["interval"]
            while restante > 0 and not _DETENER:
                time.sleep(min(1.0, restante))
                restante -= 1.0
    finally:
        if cliente is not None:
            cliente.loop_stop()
            cliente.disconnect()
        logger.info("Simulador detenido tras %d ciclos.", ciclo)
        if injector.historial:
            logger.info("Anomalías inyectadas en la corrida: %d",
                        len(injector.historial))
    return 0


def parse_args(argv: list[str] | None = None) -> argparse.Namespace:
    """Define y parsea los argumentos de línea de comandos."""
    p = argparse.ArgumentParser(
        prog="simulador.simulator",
        description="Simulador IIoT de la planta AquaMonitor (publica por MQTT).",
    )
    p.add_argument("--interval", type=int, default=None,
                   help="Segundos entre ciclos (sobrescribe INTERVAL_SECONDS).")
    p.add_argument("--once", action="store_true",
                   help="Ejecuta un único ciclo y termina.")
    p.add_argument("--dry-run", action="store_true",
                   help="No conecta a MQTT; sólo genera y loguea los datos.")
    p.add_argument("--random", action="store_true",
                   help="Habilita la aparición esporádica de anomalías.")
    p.add_argument("--inject", choices=sorted(config.ANOMALIAS),
                   help="Programa la inyección de una anomalía nombrada.")
    p.add_argument("--at", type=int, default=2,
                   help="Ciclo en el que se dispara la anomalía de --inject (default: 2).")
    p.add_argument("--duration", type=int, default=None,
                   help="Duración en ciclos de la anomalía de --inject.")
    return p.parse_args(argv)


def main(argv: list[str] | None = None) -> int:
    """Entry point para ``python -m simulador.simulator``."""
    return ejecutar(parse_args(argv))


if __name__ == "__main__":  # pragma: no cover
    sys.exit(main())
