"""Cruza los KPIs que calcula Node-RED (ultima corrida de kpi_values_prueba) con un recalculo independiente
hecho en Python sobre las mediciones crudas (raw_variables) guardadas en InfluxDB, hasta el mismo instante.

    1) En Node-RED, boton "Calcular KPIs de PRUEBA ahora" (pestaña 02 Indicadores)
    2) .venv/bin/python pruebas/cruzar_kpis.py
"""
import datetime
import statistics
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent.parent / "scripts"))
from consulta_sql import ejecutar  # noqa: E402

import json
import subprocess
RAIZ = Path(__file__).resolve().parent.parent
CALIDAD_MIN = json.loads(subprocess.check_output(
    ["node", "-e", "console.log(JSON.stringify(require('./nodered/userdir/aqm/catalogo.js').KPI))"], cwd=RAIZ, text=True))["calidad_minima"]
DURACION_MIN = {"hora": 60, "turno": 480, "dia": 1440, "semana": 10080}


def main() -> int:
    filas = ejecutar("SELECT periodo, equipo, kpi, value, muestras, calculado_en, corrida, time FROM kpi_values_prueba WHERE corrida IS NOT NULL").to_pylist()
    if not filas:
        print("No hay filas en kpi_values_prueba: apretar primero el boton de prueba en Node-RED.")
        return 2
    corrida = max(str(f["corrida"]) for f in filas)
    filas = [f for f in filas if str(f["corrida"]) == corrida]
    corte = datetime.datetime.fromtimestamp(max(f["calculado_en"] for f in filas) / 1000, datetime.timezone.utc)
    corte_iso = corte.strftime("%Y-%m-%dT%H:%M:%SZ")
    print("Corrida %s: lecturas con time <= %s UTC\n" % (corrida, corte_iso))
    print("%-7s %-34s %-10s %-10s %s" % ("Período", "Indicador", "Node-RED", "Recálculo", "resultado"))
    todo_ok = True
    for g in ("hora", "turno", "dia", "semana"):
        ini = [f["time"] for f in filas if f["periodo"] == g][0].strftime("%Y-%m-%dT%H:%M:%SZ")
        raw = ejecutar("SELECT equipo, variable, value, quality FROM raw_variables WHERE time >= '%s' AND time <= '%s' AND quality >= %d" % (ini, corte_iso, CALIDAD_MIN)).to_pylist()
        v = lambda e, va: [r["value"] for r in raw if r["equipo"] == e and r["variable"] == va]
        m = statistics.mean
        esperado = {
            ("EQ01", "eficiencia_energetica"): m(v("EQ01", "CAUDAL")) / m(v("EQ01", "CORRIENTE")),
            ("EQ01", "disponibilidad_bomba"): 100 * sum(x >= 0.5 for x in v("EQ01", "ESTADO")) / len(v("EQ01", "ESTADO")),
            ("EQ02", "eficiencia_filtracion"): (m(v("EQ02", "TURB_IN")) - m(v("EQ02", "TURB_OUT"))) / m(v("EQ02", "TURB_IN")) * 100,
            ("EQ02", "presion_diferencial_media"): m(v("EQ02", "PRES_DIF")),
            ("EQ03", "tiempo_fuera_rango_ph"): DURACION_MIN[g] * sum(x < 6.5 or x > 8.0 for x in v("EQ03", "PH")) / len(v("EQ03", "PH")),
            ("EQ03", "desviacion_ph"): statistics.stdev(v("EQ03", "PH")),
        }
        for (eq, kpi), val in esperado.items():
            nr = [f for f in filas if f["periodo"] == g and f["equipo"] == eq and f["kpi"] == kpi][0]
            ok = abs(nr["value"] - val) <= 0.002 * max(1.0, abs(val))
            todo_ok &= ok
            print("%-7s %-34s %-10s %-10.4f %s" % (g, eq + " " + kpi, nr["value"], val, "coincide" if ok else "DIFIERE"))
    print("\nRESULTADO:", "Node-RED y el recálculo coinciden en los 24 valores" if todo_ok else "HAY DIFERENCIAS")
    return 0 if todo_ok else 1


if __name__ == "__main__":
    sys.exit(main())
