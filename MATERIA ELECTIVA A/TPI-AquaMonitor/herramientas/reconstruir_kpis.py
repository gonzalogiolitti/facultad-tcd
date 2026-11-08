"""Reconstruye el estado de los indicadores desde las mediciones guardadas en InfluxDB (raw_variables).

Cuando se cambia la regla de calidad de los KPIs (nodered/userdir/aqm/catalogo.js -> KPI.calidad_minima), o cuando Node-RED
estuvo apagado y perdio muestras, sirve para:
  1) reconstruir los ACUMULADORES de los periodos que estan abiertos (para que cierren con la regla nueva y con todas las
     muestras que hay en la base);
  2) calcular y escribir las filas de los periodos que YA cerraron (con el tag `regla` de la regla vigente).

    .venv/bin/python herramientas/reconstruir_kpis.py                      # solo muestra el plan (no escribe nada)
    .venv/bin/python herramientas/reconstruir_kpis.py --aplicar            # escribe (Node-RED tiene que estar DETENIDO)
    opciones: --desde 2026-11-07T23:00:00Z   primer instante a considerar para las filas de periodos cerrados

Usa el mismo codigo que Node-RED (herramientas/_motor_kpi.js -> aqm.js). El token se lee de .env y no se imprime.
"""
import argparse
import json
import os
import subprocess
import sys
import urllib.parse
import urllib.request
from datetime import datetime, timezone
from pathlib import Path

RAIZ = Path(__file__).resolve().parent.parent
sys.path.insert(0, str(Path(__file__).resolve().parent))
from consulta_sql import cargar_env, ejecutar  # noqa: E402

CONTEXTO = RAIZ / "nodered" / "userdir" / "context" / "global" / "global.json"
PIDFILE = RAIZ / "nodered" / "userdir" / ".nodered.pid"


def nodered_corriendo() -> bool:
    try:
        pid = int(PIDFILE.read_text().strip())
        return Path(f"/proc/{pid}/comm").read_text().strip() == "node-red"
    except (OSError, ValueError):
        return False


def iso_a_ms(iso: str) -> int:
    return int(datetime.fromisoformat(iso.replace("Z", "+00:00")).timestamp() * 1000)


def ms_a_art(ms: int) -> str:
    return datetime.fromtimestamp(ms / 1000 - 3 * 3600, timezone.utc).strftime("%d/%m %H:%M")


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("--aplicar", action="store_true")
    ap.add_argument("--desde", default="2026-11-07T23:00:00Z")
    a = ap.parse_args()
    cargar_env()

    estado = json.loads(CONTEXTO.read_text(encoding="utf-8"))
    abiertos = {g: p["inicio"] for g, p in estado["kpi_estado"].items()}
    desde = iso_a_ms(a.desde)
    inicio_min = min(list(abiertos.values()) + [desde])
    iso_min = datetime.fromtimestamp(inicio_min / 1000, timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ")
    tabla = ejecutar("SELECT equipo, variable, value, quality, time FROM raw_variables WHERE time >= '%s'" % iso_min)
    lecturas = [{"equipo": r["equipo"], "variable": r["variable"], "value": r["value"], "quality": r["quality"],
                 "ts": int(r["time"].timestamp() * 1000)} for r in tabla.to_pylist()]
    print("Mediciones leidas de raw_variables desde %s UTC: %d filas" % (iso_min, len(lecturas)))

    node = subprocess.run(["node", str(RAIZ / "herramientas" / "_motor_kpi.js")], input=json.dumps(
        {"lecturas": lecturas, "abiertos": abiertos, "desde": desde}), capture_output=True, text=True, cwd=RAIZ)
    if node.returncode != 0:
        print("ERROR en el motor de KPIs:", node.stderr[:400])
        return 1
    res = json.loads(node.stdout)

    print("\nPeriodos ABIERTOS (acumuladores a reconstruir):")
    for g, p in res["kpi_estado"].items():
        n = max([v["n"] for v in p["acc"].values()] or [0])
        antes = max([v["n"] for v in estado["kpi_estado"][g]["acc"].values()] or [0])
        print("  %-6s inicio %s ART | muestras: guardadas %d -> reconstruidas %d" % (g, ms_a_art(p["inicio"]), antes, n))
    print("\nPeriodos YA CERRADOS cuyas filas se escriben (tag regla de la regla vigente):")
    for c in res["cerradas"]:
        print("  %-6s inicio %s ART | %d lecturas" % (c["g"], ms_a_art(c["inicio"]), c["lecturas"]))
    print("  filas de line protocol: %d" % len(res["lineas"]))

    if not a.aplicar:
        print("\n(Modo plan: no se escribio nada. Agregar --aplicar con Node-RED detenido.)")
        return 0
    if nodered_corriendo():
        print("\nNode-RED esta corriendo: detenerlo primero con  bash nodered/parar.sh")
        return 2

    if res["lineas"]:
        url = os.environ["INFLUX_URL"].rstrip("/") + "/api/v2/write?" + urllib.parse.urlencode(
            {"org": os.environ["INFLUX_ORG"], "bucket": os.environ["INFLUX_BUCKET"], "precision": "ms"})
        req = urllib.request.Request(url, data="\n".join(res["lineas"]).encode(), method="POST",
                                     headers={"Authorization": "Token " + os.environ["INFLUX_TOKEN"], "Content-Type": "text/plain; charset=utf-8"})
        print("\nEscritura de filas cerradas en InfluxDB -> HTTP", urllib.request.urlopen(req, timeout=30).status)
    copia = CONTEXTO.with_name("global.json.respaldo-" + datetime.now().strftime("%Y%m%d-%H%M%S"))
    copia.write_text(CONTEXTO.read_text(encoding="utf-8"), encoding="utf-8")
    estado["kpi_estado"] = res["kpi_estado"]
    CONTEXTO.write_text(json.dumps(estado), encoding="utf-8")
    print("Acumuladores reconstruidos en %s (copia de seguridad: %s)" % (CONTEXTO.relative_to(RAIZ), copia.name))
    return 0


if __name__ == "__main__":
    sys.exit(main())
