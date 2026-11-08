"""Genera grafana/aquamonitor_dashboard.json (dashboard importable en Grafana Cloud).

    python3 herramientas/construir_dashboard.py            # solo genera el JSON
    .venv/bin/python herramientas/construir_dashboard.py --probar [HORAS]
                                                           # genera el JSON y ejecuta CADA consulta contra InfluxDB

Todas las consultas son SQL de InfluxDB 3 y estan definidas aca, en un solo lugar.
Los umbrales de colores salen de nodered/userdir/aqm/catalogo.js (fuente unica).
Reglas que se comprobaron contra la base real (ver PROGRESO.md):
  - hora Argentina = time - INTERVAL '3 hours' (AT TIME ZONE NO convierte en InfluxDB 3);
  - los macros de Grafana usados son solo $__timeFilter(time) y la variable $periodo.
No lleva credenciales: solo el UID de la fuente de datos (fg3ly9z1iz668b, "influxdb").
"""
import json
import subprocess
import sys
from pathlib import Path

RAIZ = Path(__file__).resolve().parent.parent
SALIDA = RAIZ / "grafana" / "aquamonitor_dashboard.json"
DS = {"type": "influxdb", "uid": "fg3ly9z1iz668b"}
FMT_ART = "'%d/%m/%Y %H:%M:%S'"
ART = "INTERVAL '3 hours'"

CAT = json.loads(subprocess.check_output(
    ["node", "-e", "console.log(JSON.stringify(require('./nodered/userdir/aqm/catalogo.js')))"], cwd=RAIZ, text=True))

CONSULTAS = []   # (titulo, sql) para --probar
_id = [0]
VERDE, NARANJA, ROJO = "green", "orange", "red"


def nuevo_id():
    _id[0] += 1
    return _id[0]


def objetivo(sql, formato):
    return [{
        "datasource": DS, "refId": "A",
        # El modelo de consulta de la fuente InfluxDB (SQL) usa query/rawQuery/resultFormat; se incluyen tambien
        # rawSql/format por compatibilidad entre versiones del plugin (los campos desconocidos se ignoran).
        "query": sql, "rawQuery": True, "resultFormat": formato, "rawSql": sql, "format": formato,
    }]


def grid(x, y, w, h):
    return {"x": x, "y": y, "w": w, "h": h}


def pasos(rangos, un_solo_lado_bueno=None):
    """Umbrales de Grafana a partir de los rangos [min, max] de warning y critical del catalogo."""
    w = rangos.get("warning") or [None, None]
    c = rangos.get("critical") or [None, None]
    cortes = []   # (valor, color_desde_ese_valor)
    if c[0] is not None:
        cortes.append((c[0], NARANJA if w[0] is not None else VERDE))
    if w[0] is not None:
        cortes.append((w[0], VERDE))
    if w[1] is not None:
        cortes.append((w[1], NARANJA))
    if c[1] is not None:
        cortes.append((c[1], ROJO))
    base = ROJO if c[0] is not None else (NARANJA if w[0] is not None else VERDE)
    return [{"color": base, "value": None}] + [{"color": col, "value": val} for val, col in cortes]


def panel_fila(titulo, y):
    return {"id": nuevo_id(), "type": "row", "title": titulo, "collapsed": False, "gridPos": grid(0, y, 24, 1), "panels": []}


def panel_stat(titulo, sql, pos, unidad=None, umbrales=None, texto="value", overrides=None, mapeos=None, descripcion="", color_modo="background", campos="", sin_datos=None):
    CONSULTAS.append((titulo, sql))
    return {
        "id": nuevo_id(), "type": "stat", "title": titulo, "description": descripcion, "datasource": DS, "gridPos": pos,
        "targets": objetivo(sql, "table"),
        "fieldConfig": {"defaults": {
            "unit": unidad or "none", "decimals": 2, "mappings": mapeos or [],
            "color": {"mode": "thresholds"},
            "thresholds": {"mode": "absolute", "steps": umbrales or [{"color": "blue", "value": None}]},
            **({"noValue": sin_datos} if sin_datos else {}),
        }, "overrides": overrides or []},
        # `campos` = expresion regular de los campos a mostrar. Un Stat solo muestra por defecto los campos NUMERICOS:
        # para un texto (fecha en hora Argentina) hay que pedirlo con "/.*/".
        "options": {"reduceOptions": {"calcs": ["lastNotNull"], "fields": campos, "values": False}, "colorMode": color_modo,
                    "graphMode": "none", "textMode": texto, "justifyMode": "center", "orientation": "auto"},
    }


def panel_serie(titulo, sql, pos, unidad="none", overrides=None, descripcion="", estilo="line", minimo=None, relleno=8, decimales=None):
    CONSULTAS.append((titulo, sql))
    defaults = {"unit": unidad, "custom": {"drawStyle": estilo, "lineWidth": 2, "fillOpacity": relleno, "showPoints": "auto", "spanNulls": True},
                "color": {"mode": "palette-classic"}}
    if minimo is not None:
        defaults["min"] = minimo
    if decimales is not None:
        defaults["decimals"] = decimales
    return {
        "id": nuevo_id(), "type": "timeseries", "title": titulo, "description": descripcion, "datasource": DS, "gridPos": pos,
        "targets": objetivo(sql, "time_series"),
        "fieldConfig": {"defaults": defaults, "overrides": overrides or []},
        "options": {"legend": {"displayMode": "list", "placement": "bottom", "showLegend": True}, "tooltip": {"mode": "multi", "sort": "none"}},
    }


def panel_tabla(titulo, sql, pos, descripcion="", overrides=None, anchos=None):
    """anchos = {columna: pixeles}: evita que los titulos y valores largos se vean cortados."""
    CONSULTAS.append((titulo, sql))
    overrides = list(overrides or []) + [{"matcher": {"id": "byName", "options": c}, "properties": [{"id": "custom.width", "value": w}]} for c, w in (anchos or {}).items()]
    return {
        "id": nuevo_id(), "type": "table", "title": titulo, "description": descripcion, "datasource": DS, "gridPos": pos,
        "targets": objetivo(sql, "table"),
        "fieldConfig": {"defaults": {"custom": {"align": "auto", "minWidth": 90, "cellOptions": {"type": "auto", "wrapText": True}}}, "overrides": overrides},
        "options": {"showHeader": True, "cellHeight": "sm"},
    }


def panel_barras(titulo, sql, pos, descripcion="", tipo="barchart"):
    CONSULTAS.append((titulo, sql))
    return {
        "id": nuevo_id(), "type": tipo, "title": titulo, "description": descripcion, "datasource": DS, "gridPos": pos,
        "targets": objetivo(sql, "table"),
        "fieldConfig": {"defaults": {"color": {"mode": "fixed", "fixedColor": ROJO}, "decimals": 0, "min": 0}, "overrides": []},
        "options": ({"orientation": "auto", "xTickLabelRotation": 0, "showValue": "auto", "legend": {"showLegend": False}} if tipo == "barchart"
                    else {"orientation": "horizontal", "displayMode": "gradient", "showUnfilled": True,
                          "reduceOptions": {"calcs": ["lastNotNull"], "fields": "", "values": True}}),
    }


# ------------------------------------------------------------------------------------------------
#  Consultas
# ------------------------------------------------------------------------------------------------
def sql_vivo(eq):
    vs = CAT["EQUIPOS"][eq]["variables"]
    cols = ",\n  ".join("max(CASE WHEN variable='%s' THEN value END) AS \"%s\"" % (v, etiqueta(eq, v)) for v in vs)
    return ("SELECT\n  " + cols + "\nFROM raw_variables\nWHERE equipo='@EQ@' AND time > now() - INTERVAL '1 day'\n"
            "  AND time = (SELECT max(time) FROM raw_variables WHERE equipo='@EQ@' AND time > now() - INTERVAL '1 day')").replace("@EQ@", eq)


def etiqueta(eq, v):
    cfg = CAT["EQUIPOS"][eq]["variables"][v]
    nombre = {"CAUDAL": "Caudal", "PRESION": "Presión", "CORRIENTE": "Corriente", "VIBRACION": "Vibración", "ESTADO": "Estado",
              "TURB_IN": "Turbidez entrada", "TURB_OUT": "Turbidez salida", "PRES_DIF": "Presión diferencial", "CAUDAL_FILT": "Caudal filtrado",
              "EFICIENCIA": "Eficiencia", "PH": "pH", "OD": "Oxígeno disuelto", "TEMP": "Temperatura", "CONDUCT": "Conductividad", "NIVEL": "Nivel"}[v]
    u = cfg["unit"]
    return nombre if u in ("bool", "pH") else "%s (%s)" % (nombre, u)


def sql_serie(eq, variables, limites=None):
    cols = ["max(CASE WHEN variable='%s' THEN value END) AS \"%s\"" % (v, etiqueta(eq, v)) for v in variables]
    for nombre, valor in (limites or []):
        cols.append("%s AS \"%s\"" % (valor, nombre))
    return ("SELECT time,\n  " + ",\n  ".join(cols) + "\nFROM raw_variables\nWHERE equipo='@EQ@' AND $__timeFilter(time)\nGROUP BY time\nORDER BY time").replace("@EQ@", eq)


def sql_kpi(eq, kpis):
    """Indicadores CERRADOS (filas de kpi_values, una por periodo) del equipo, para el periodo elegido en $periodo."""
    cols = ["max(CASE WHEN kpi='%s' THEN value END) AS \"%s\"" % (k, n) for k, n in kpis]
    return ("SELECT time,\n  " + ",\n  ".join(cols) + "\nFROM kpi_values\nWHERE equipo='@EQ@' AND periodo='$periodo' AND cerrado = true AND $__timeFilter(time)\n"
            "GROUP BY time\nORDER BY time").replace("@EQ@", eq)


SQL_KPI_CERRADOS = """WITH ult AS (
  SELECT equipo, kpi, periodo, max(time) AS t FROM kpi_values WHERE cerrado = true GROUP BY equipo, kpi, periodo
)
SELECT k.equipo AS "Equipo", k.kpi AS "Indicador", max(k.unit) AS "Unidad",
  max(CASE WHEN k.periodo='hora' THEN k.value END) AS "Hora",
  max(CASE WHEN k.periodo='turno' THEN k.value END) AS "Turno",
  max(CASE WHEN k.periodo='dia' THEN k.value END) AS "Día",
  max(CASE WHEN k.periodo='semana' THEN k.value END) AS "Semana"
FROM kpi_values k JOIN ult u ON k.equipo=u.equipo AND k.kpi=u.kpi AND k.periodo=u.periodo AND k.time=u.t
WHERE k.cerrado = true
GROUP BY k.equipo, k.kpi
ORDER BY k.equipo, k.kpi"""

# Periodo EN CURSO: se calcula con SQL desde raw_variables (misma formula que el flow de Node-RED).
# date_bin con origen en hora Argentina: hora en punto | turno = 01:00/09:00/17:00 UTC (22/06/14 ART) |
# dia = 03:00 UTC (00:00 ART) | semana = lunes 03:00 UTC (1970-01-05 fue lunes).
CALIDAD_MIN = CAT["KPI"]["calidad_minima"]   # misma regla que usa Node-RED para los indicadores
_ARMS = [("hora", "1 hour", "1970-01-01T00:00:00Z"), ("turno", "8 hours", "1970-01-01T01:00:00Z"),
         ("dia", "1 day", "1970-01-01T03:00:00Z"), ("semana", "7 days", "1970-01-05T03:00:00Z")]
SQL_KPI_EN_CURSO = ("WITH b AS (\n" + "\n  UNION ALL\n".join(
    "  SELECT '%s' AS periodo, date_bin(INTERVAL '%s', time, TIMESTAMP '%s') AS inicio, equipo, variable, value, quality\n"
    "  FROM raw_variables WHERE time >= date_bin(INTERVAL '%s', now(), TIMESTAMP '%s')" % (n, i, o, i, o) for n, i, o in _ARMS) + """
)
SELECT periodo AS "Período", to_char(inicio - INTERVAL '3 hours', '%d/%m/%Y %H:%M') AS "Inicio (hora Argentina)",
  round(avg(CASE WHEN equipo='EQ01' AND variable='CAUDAL' AND quality >= @Q@ THEN value END)
        / nullif(avg(CASE WHEN equipo='EQ01' AND variable='CORRIENTE' AND quality >= @Q@ THEN value END), 0), 4) AS "EQ01 Efic. energética (m3h/A)",
  round(100.0 * sum(CASE WHEN equipo='EQ01' AND variable='ESTADO' AND quality >= @Q@ AND value >= 0.5 THEN 1 ELSE 0 END)
        / nullif(sum(CASE WHEN equipo='EQ01' AND variable='ESTADO' AND quality >= @Q@ THEN 1 ELSE 0 END), 0), 2) AS "EQ01 Disponibilidad (%)",
  round((avg(CASE WHEN equipo='EQ02' AND variable='TURB_IN' AND quality >= @Q@ THEN value END)
         - avg(CASE WHEN equipo='EQ02' AND variable='TURB_OUT' AND quality >= @Q@ THEN value END))
        / nullif(avg(CASE WHEN equipo='EQ02' AND variable='TURB_IN' AND quality >= @Q@ THEN value END), 0) * 100, 3) AS "EQ02 Efic. filtración (%)",
  round(avg(CASE WHEN equipo='EQ02' AND variable='PRES_DIF' AND quality >= @Q@ THEN value END), 2) AS "EQ02 Pres. dif. media (mbar)",
  round((CASE periodo WHEN 'hora' THEN 60 WHEN 'turno' THEN 480 WHEN 'dia' THEN 1440 ELSE 10080 END)
        * sum(CASE WHEN equipo='EQ03' AND variable='PH' AND quality >= @Q@ AND (value < 6.5 OR value > 8.0) THEN 1 ELSE 0 END)
        / nullif(sum(CASE WHEN equipo='EQ03' AND variable='PH' AND quality >= @Q@ THEN 1 ELSE 0 END), 0), 2) AS "EQ03 Tiempo pH fuera (min)",
  round(stddev(CASE WHEN equipo='EQ03' AND variable='PH' AND quality >= @Q@ THEN value END), 4) AS "EQ03 Desvío pH"
FROM b
GROUP BY periodo, inicio
ORDER BY CASE periodo WHEN 'hora' THEN 1 WHEN 'turno' THEN 2 WHEN 'dia' THEN 3 ELSE 4 END""")
SQL_KPI_EN_CURSO = SQL_KPI_EN_CURSO.replace("@Q@", str(CALIDAD_MIN))


SQL_FALLAS_12H = "SELECT count(*) AS \"Fallas de la bomba (últimas 12 h)\" FROM events WHERE event_type='BOMBA_FALLA' AND time > now() - INTERVAL '12 hours'"
SQL_FALLAS_RANGO = "SELECT count(*) AS \"Fallas en el rango elegido\" FROM events WHERE event_type='BOMBA_FALLA' AND $__timeFilter(time)"
SQL_ULTIMA_FALLA = ("SELECT COALESCE(to_char(max(time) - %s, %s), 'Sin fallas') AS \"Última falla (hora Argentina)\"\n"
                    "FROM events WHERE event_type='BOMBA_FALLA' AND $__timeFilter(time)") % (ART, FMT_ART)
SQL_ULTIMA_MEDICION = ("SELECT to_char(max(time) - %s, %s) AS \"Última medición (hora Argentina)\" FROM raw_variables "
                       "WHERE time > now() - INTERVAL '1 day'") % (ART, FMT_ART)
SQL_EDAD = ("SELECT date_part('epoch', now()) - date_part('epoch', max(time)) AS \"Segundos desde la última medición\" FROM raw_variables "
            "WHERE time > now() - INTERVAL '1 day'")
SQL_FALLAS_POR_HORA = ("SELECT date_bin(INTERVAL '1 hour', time, TIMESTAMP '1970-01-01T00:00:00Z') AS time, count(*) AS \"Fallas\"\n"
                       "FROM events WHERE event_type='BOMBA_FALLA' AND $__timeFilter(time)\nGROUP BY 1\nORDER BY 1")
SQL_FALLAS_POR_MOTIVO = ("SELECT motivo AS \"Motivo\", count(*) AS \"Fallas\" FROM events WHERE event_type='BOMBA_FALLA' AND $__timeFilter(time)\n"
                         "GROUP BY motivo\nORDER BY 2 DESC")
SQL_EVENTOS = ("SELECT to_char(time - %s, %s) AS \"Hora (Argentina)\", event_type AS \"Evento\", severity AS \"Severidad\", equipo AS \"Equipo\",\n"
               "  motivo AS \"Motivo\", detalle AS \"Detalle\"\nFROM events WHERE $__timeFilter(time)\nORDER BY time DESC\nLIMIT 100") % (ART, FMT_ART)

# ---- Fase 5: analisis ----
def sql_media_movil(eq, variable, etiq):
    return ("SELECT time, value AS \"%s\",\n  avg(value) OVER (ORDER BY time ROWS BETWEEN 9 PRECEDING AND CURRENT ROW) AS \"Media móvil (10 muestras)\"\n"
            "FROM raw_variables\nWHERE equipo='%s' AND variable='%s' AND quality IN (1,2) AND $__timeFilter(time)\nORDER BY time") % (etiq, eq, variable)


SQL_TENDENCIA = """WITH t AS (
  SELECT equipo, variable, count(*) AS n, avg(value) AS media,
         regr_slope(value, date_part('epoch', time)) * 3600 AS pendiente_h
  FROM raw_variables
  WHERE quality = 2 AND variable <> 'ESTADO' AND $__timeFilter(time)
  GROUP BY equipo, variable
)
SELECT equipo AS "Equipo", variable AS "Variable", n AS "Muestras", round(media, 3) AS "Media",
  round(pendiente_h, 4) AS "Pendiente por hora",
  round(100 * pendiente_h / nullif(media, 0), 2) AS "Cambio % por hora",
  CASE WHEN abs(100 * pendiente_h / nullif(media, 0)) < 2 THEN 'estable'
       WHEN pendiente_h > 0 THEN 'ascendente' ELSE 'descendente' END AS "Tendencia"
FROM t
WHERE n >= 10
ORDER BY abs(100 * pendiente_h / nullif(media, 0)) DESC"""

SQL_ZSCORE_SERIE = """WITH s AS (
  SELECT time, value,
         avg(value) OVER w AS mu, stddev(value) OVER w AS sd, count(value) OVER w AS n
  FROM raw_variables
  WHERE equipo='EQ01' AND variable='VIBRACION' AND quality IN (1,2) AND $__timeFilter(time)
  WINDOW w AS (ORDER BY time ROWS BETWEEN 20 PRECEDING AND 1 PRECEDING)
)
SELECT time, value AS "Vibración (mm/s)",
  mu AS "Media de la ventana",
  mu + 3 * sd AS "Banda superior (+3σ)",
  mu - 3 * sd AS "Banda inferior (-3σ)",
  CASE WHEN n >= 10 AND sd > 0 AND abs((value - mu) / sd) > 3 THEN value END AS "Anomalía"
FROM s
ORDER BY time"""

SQL_ZSCORE_TABLA = ("""WITH s AS (
  SELECT time, equipo, variable, value,
         avg(value) OVER w AS mu, stddev(value) OVER w AS sd, count(value) OVER w AS n
  FROM raw_variables
  WHERE quality IN (1,2) AND variable <> 'ESTADO' AND $__timeFilter(time)
  WINDOW w AS (PARTITION BY equipo, variable ORDER BY time ROWS BETWEEN 20 PRECEDING AND 1 PRECEDING)
)
SELECT to_char(time - %s, %s) AS "Hora (Argentina)", equipo AS "Equipo", variable AS "Variable",
  value AS "Valor", round(mu, 3) AS "Media de la ventana", round((value - mu) / sd, 2) AS "Z-score"
FROM s
WHERE n >= 10 AND sd > 0 AND abs((value - mu) / sd) > 3
ORDER BY time DESC
LIMIT 100""") % (ART, FMT_ART)


def _pivot(nombre, eq, variables, filtro_calidad="quality IN (1,2)"):
    cols = ", ".join("max(CASE WHEN variable='%s' THEN value END) AS %s" % (v, a) for v, a in variables)
    return "%s AS (SELECT time, %s FROM raw_variables WHERE equipo='%s' AND %s AND $__timeFilter(time) GROUP BY time)" % (nombre, cols, eq, filtro_calidad)


PARES = [("EQ01", "b", "Caudal vs Corriente", "caudal", "corriente"), ("EQ01", "b", "Caudal vs Vibración", "caudal", "vibracion"),
         ("EQ01", "b", "Vibración vs Corriente", "vibracion", "corriente"), ("EQ01", "b", "Caudal vs Presión", "caudal", "presion"),
         ("EQ02", "f", "Turbidez entrada vs salida", "turb_in", "turb_out"), ("EQ02", "f", "Presión diferencial vs Eficiencia", "pres_dif", "eficiencia"),
         ("EQ03", "r", "pH vs Oxígeno disuelto", "ph", "od"), ("EQ03", "r", "Temperatura vs Oxígeno disuelto", "temp", "od")]
SQL_CORRELACION = ("WITH " + ",\n".join([
    _pivot("b", "EQ01", [("CAUDAL", "caudal"), ("CORRIENTE", "corriente"), ("PRESION", "presion"), ("VIBRACION", "vibracion")]),
    _pivot("f", "EQ02", [("TURB_IN", "turb_in"), ("TURB_OUT", "turb_out"), ("PRES_DIF", "pres_dif"), ("EFICIENCIA", "eficiencia")]),
    _pivot("r", "EQ03", [("PH", "ph"), ("OD", "od"), ("TEMP", "temp")]),
    "c AS (\n" + "\nUNION ALL\n".join("SELECT '%s' AS equipo, '%s' AS par, corr(%s, %s) AS r, count(*) AS n FROM %s" % (eq, par, x, y, t) for eq, t, par, x, y in PARES) + "\n)"
]) + """
SELECT equipo AS "Equipo", par AS "Par de variables", round(r, 3) AS "Correlación (r)", n AS "Muestras",
  CASE WHEN r IS NULL THEN 'sin datos'
       WHEN abs(r) >= 0.7 THEN 'fuerte' WHEN abs(r) >= 0.4 THEN 'moderada' ELSE 'débil o nula' END AS "Intensidad",
  CASE WHEN r IS NULL THEN '' WHEN r > 0 THEN 'positiva (suben juntas)' ELSE 'negativa (una sube, la otra baja)' END AS "Sentido"
FROM c
ORDER BY equipo, par""")

SQL_DISPERSION = ("SELECT max(CASE WHEN variable='CAUDAL' THEN value END) AS \"Caudal (m3/h)\",\n"
                  "       max(CASE WHEN variable='CORRIENTE' THEN value END) AS \"Corriente (A)\"\n"
                  "FROM raw_variables\nWHERE equipo='EQ01' AND quality IN (1,2) AND $__timeFilter(time)\nGROUP BY time")


# ------------------------------------------------------------------------------------------------
#  Armado del dashboard
# ------------------------------------------------------------------------------------------------
def stat_equipo(eq, y):
    vs = CAT["EQUIPOS"][eq]["variables"]
    overrides = []
    for v, cfg in vs.items():
        ov = {"matcher": {"id": "byName", "options": etiqueta(eq, v)}, "properties": []}
        if v == "ESTADO":
            ov["properties"] += [{"id": "mappings", "value": [{"type": "value", "options": {"0": {"text": "PARADA", "color": ROJO}, "1": {"text": "EN MARCHA", "color": VERDE}}}]},
                                 {"id": "thresholds", "value": {"mode": "absolute", "steps": [{"color": ROJO, "value": None}, {"color": VERDE, "value": 0.5}]}}]
        else:
            ov["properties"] += [{"id": "unit", "value": "suffix: " + cfg["unit"]}, {"id": "thresholds", "value": {"mode": "absolute", "steps": pasos(cfg)}}]
        overrides.append(ov)
    return panel_stat("%s - %s: valores del último ciclo (color: verde normal, naranja advertencia, rojo crítico)" % (eq, CAT["EQUIPOS"][eq]["nombre"]),
                      sql_vivo(eq), grid(0, y, 24, 4), overrides=overrides, texto="value_and_name",
                      descripcion="Última medición de cada sensor. Los colores salen de los umbrales del catálogo (warning y critical).")


def construir():
    P = []
    y = 0
    P.append(panel_fila("Estado general", y)); y += 1
    P.append(panel_stat("Última medición (hora Argentina)", SQL_ULTIMA_MEDICION, grid(0, y, 6, 4), texto="value", color_modo="value", campos="/.*/", sin_datos="Sin datos"))
    P.append(panel_stat("Antigüedad del dato", SQL_EDAD, grid(6, y, 4, 4), unidad="s",
                        umbrales=[{"color": VERDE, "value": None}, {"color": NARANJA, "value": 400}, {"color": ROJO, "value": 900}],
                        descripcion="Segundos desde la última medición. En modo normal se mide cada 120 s; en demo, cada 15 s."))
    P.append(panel_stat("Fallas de la bomba en las últimas 12 h", SQL_FALLAS_12H, grid(10, y, 6, 4),
                        umbrales=[{"color": VERDE, "value": None}, {"color": ROJO, "value": 1}]))
    P.append(panel_stat("Última falla de la bomba (en el rango elegido)", SQL_ULTIMA_FALLA, grid(16, y, 8, 4), texto="value", color_modo="value", campos="/.*/", sin_datos="Sin fallas")); y += 4

    P.append(panel_fila("Sensores en vivo (actualiza cada 5 s)", y)); y += 1
    for eq in ("EQ01", "EQ02", "EQ03"):
        P.append(stat_equipo(eq, y)); y += 4
        if eq == "EQ01":
            P.append(panel_serie("Bomba: caudal y corriente", sql_serie(eq, ["CAUDAL", "CORRIENTE"]), grid(0, y, 8, 7),
                                 overrides=[{"matcher": {"id": "byName", "options": etiqueta(eq, "CORRIENTE")}, "properties": [{"id": "custom.axisPlacement", "value": "right"}]}]))
            P.append(panel_serie("Bomba: presión", sql_serie(eq, ["PRESION"], [("Límite crítico alto", 6.5), ("Límite crítico bajo", 2.5)]), grid(8, y, 8, 7)))
            P.append(panel_serie("Bomba: vibración (límite crítico 7,1 mm/s)", sql_serie(eq, ["VIBRACION"], [("Límite crítico", 7.1), ("Advertencia", 4.5)]), grid(16, y, 8, 7))); y += 7
        elif eq == "EQ02":
            P.append(panel_serie("Filtro: turbidez de entrada y salida", sql_serie(eq, ["TURB_IN", "TURB_OUT"]), grid(0, y, 8, 7),
                                 overrides=[{"matcher": {"id": "byName", "options": etiqueta(eq, "TURB_OUT")}, "properties": [{"id": "custom.axisPlacement", "value": "right"}]}]))
            P.append(panel_serie("Filtro: presión diferencial (advertencia 600 mbar)", sql_serie(eq, ["PRES_DIF"], [("Advertencia", 600), ("Crítico", 800)]), grid(8, y, 8, 7)))
            P.append(panel_serie("Filtro: caudal filtrado y eficiencia", sql_serie(eq, ["CAUDAL_FILT", "EFICIENCIA"]), grid(16, y, 8, 7),
                                 overrides=[{"matcher": {"id": "byName", "options": etiqueta(eq, "EFICIENCIA")}, "properties": [{"id": "custom.axisPlacement", "value": "right"}]}])); y += 7
        else:
            P.append(panel_serie("Reactor: pH (normal 6,8 a 7,6)", sql_serie(eq, ["PH"], [("Crítico alto", 8.5), ("Crítico bajo", 6.0)]), grid(0, y, 8, 7)))
            P.append(panel_serie("Reactor: oxígeno disuelto y temperatura", sql_serie(eq, ["OD", "TEMP"]), grid(8, y, 8, 7),
                                 overrides=[{"matcher": {"id": "byName", "options": etiqueta(eq, "TEMP")}, "properties": [{"id": "custom.axisPlacement", "value": "right"}]}]))
            P.append(panel_serie("Reactor: conductividad y nivel", sql_serie(eq, ["CONDUCT", "NIVEL"]), grid(16, y, 8, 7),
                                 overrides=[{"matcher": {"id": "byName", "options": etiqueta(eq, "NIVEL")}, "properties": [{"id": "custom.axisPlacement", "value": "right"}]}])); y += 7

    P.append(panel_fila("Indicadores (KPIs) por hora, turno, día y semana", y)); y += 1
    r_der = lambda n: [{"matcher": {"id": "byName", "options": n}, "properties": [{"id": "custom.axisPlacement", "value": "right"}]}]
    P.append(panel_serie("Bomba EQ01 - indicadores [$periodo]", sql_kpi("EQ01", [("eficiencia_energetica", "Eficiencia energética (m3h/A)"), ("disponibilidad_bomba", "Disponibilidad (%)")]),
                         grid(0, y, 8, 8), overrides=r_der("Disponibilidad (%)"), estilo="points",
                         descripcion="Períodos CERRADOS. El selector 'Período de los indicadores' (arriba) elige hora, turno, día o semana. Cada punto es UN período (marca = inicio del período). Para turno/día/semana ampliar el rango de tiempo del tablero."))
    P.append(panel_serie("Filtro EQ02 - indicadores [$periodo]", sql_kpi("EQ02", [("eficiencia_filtracion", "Eficiencia de filtración (%)"), ("presion_diferencial_media", "Presión diferencial media (mbar)")]),
                         grid(8, y, 8, 8), overrides=r_der("Presión diferencial media (mbar)"), estilo="points"))
    P.append(panel_serie("Reactor EQ03 - indicadores [$periodo]", sql_kpi("EQ03", [("tiempo_fuera_rango_ph", "Tiempo con pH fuera de rango (min)"), ("desviacion_ph", "Desvío del pH")]),
                         grid(16, y, 8, 8), overrides=r_der("Desvío del pH"), estilo="points")); y += 8
    P.append(panel_tabla("Indicadores del período EN CURSO (parcial: se calcula con SQL sobre las mediciones)", SQL_KPI_EN_CURSO, grid(0, y, 24, 6),
                         anchos={"Período": 90, "Inicio (hora Argentina)": 190, "EQ01 Efic. energética (m3h/A)": 220, "EQ01 Disponibilidad (%)": 190, "EQ02 Efic. filtración (%)": 190, "EQ02 Pres. dif. media (mbar)": 220, "EQ03 Tiempo pH fuera (min)": 200, "EQ03 Desvío pH": 140},
                         descripcion="Una fila por período abierto. Hora = hora en punto; Turno = T1 06-14, T2 14-22, T3 22-06; Día = 00:00 a 24:00; Semana = lunes a domingo (hora Argentina). El valor cambia hasta que el período cierra."))
    y += 6
    P.append(panel_tabla("Indicadores del último período CERRADO (los guarda Node-RED al cerrar cada período)", SQL_KPI_CERRADOS, grid(0, y, 24, 8),
                         anchos={"Equipo": 90, "Indicador": 260, "Unidad": 110, "Hora": 120, "Turno": 120, "Día": 120, "Semana": 120},
                         descripcion="Cada período cerrado se guarda una sola vez en la base (measurement kpi_values), con la marca de tiempo del INICIO del período.")); y += 8

    P.append(panel_fila("Fallas de la bomba EQ01", y)); y += 1
    P.append(panel_stat("Fallas en el rango de tiempo elegido", SQL_FALLAS_RANGO, grid(0, y, 5, 8), umbrales=[{"color": VERDE, "value": None}, {"color": ROJO, "value": 1}]))
    P.append(panel_serie("Fallas por hora", SQL_FALLAS_POR_HORA, grid(5, y, 10, 8), estilo="bars", relleno=80, minimo=0, decimales=0,
                         overrides=[{"matcher": {"id": "byName", "options": "Fallas"}, "properties": [{"id": "color", "value": {"mode": "fixed", "fixedColor": ROJO}}]}],
                         descripcion="Cada barra es una hora (hora Argentina) con la cantidad de fallas de la bomba."))
    P.append(panel_barras("Fallas por motivo", SQL_FALLAS_POR_MOTIVO, grid(15, y, 9, 8), tipo="bargauge")); y += 8
    P.append(panel_tabla("Eventos (fallas, normalizaciones, alertas y fallas provocadas)", SQL_EVENTOS, grid(0, y, 24, 9),
                         anchos={"Hora (Argentina)": 180, "Evento": 200, "Severidad": 110, "Equipo": 90, "Motivo": 130})); y += 9

    P.append(panel_fila("Análisis (SQL): tendencia, anomalías y correlación", y)); y += 1
    P.append(panel_serie("Tendencia: vibración de la bomba con media móvil", sql_media_movil("EQ01", "VIBRACION", "Vibración (mm/s)"), grid(0, y, 12, 8),
                         descripcion="La media móvil (promedio de las últimas 10 muestras) suaviza el ruido y deja ver hacia dónde va la variable."))
    P.append(panel_serie("Tendencia: presión diferencial del filtro con media móvil", sql_media_movil("EQ02", "PRES_DIF", "Presión diferencial (mbar)"), grid(12, y, 12, 8),
                         descripcion="En un filtro de arena, la presión diferencial sube a medida que el lecho se tapa.")); y += 8
    P.append(panel_tabla("Tendencia de todas las variables (pendiente en el rango elegido)", SQL_TENDENCIA, grid(0, y, 24, 9),
                         anchos={"Equipo": 90, "Variable": 140, "Muestras": 110, "Media": 110, "Pendiente por hora": 170, "Cambio % por hora": 170, "Tendencia": 140},
                         descripcion="Pendiente de la recta de ajuste (regresión lineal) por hora, con las muestras de calidad 2. Si el cambio relativo es menor al 2 % por hora se considera estable.")); y += 9
    P.append(panel_serie("Anomalías: vibración con bandas de ±3 desvíos (ventana de 20 muestras)", SQL_ZSCORE_SERIE, grid(0, y, 12, 9),
                         overrides=[{"matcher": {"id": "byName", "options": "Anomalía"}, "properties": [{"id": "custom.drawStyle", "value": "points"},
                                    {"id": "custom.pointSize", "value": 10}, {"id": "color", "value": {"mode": "fixed", "fixedColor": ROJO}}]},
                                    {"matcher": {"id": "byRegexp", "options": "Banda.*"}, "properties": [{"id": "custom.lineStyle", "value": {"fill": "dash", "dash": [6, 6]}},
                                    {"id": "custom.fillOpacity", "value": 0}]}],
                         descripcion="Cada valor se compara con la media y el desvío de las 20 muestras anteriores. Si se aleja más de 3 desvíos (|z| > 3) se marca como anomalía."))
    P.append(panel_tabla("Anomalías detectadas (|z| > 3) en todas las variables", SQL_ZSCORE_TABLA, grid(12, y, 12, 9),
                         anchos={"Hora (Argentina)": 180, "Equipo": 90, "Variable": 130, "Valor": 100, "Media de la ventana": 170, "Z-score": 100})); y += 9
    P.append(panel_tabla("Correlación entre variables (r de Pearson)", SQL_CORRELACION, grid(0, y, 24, 8),
                         anchos={"Equipo": 90, "Par de variables": 290, "Correlación (r)": 150, "Muestras": 110, "Intensidad": 150, "Sentido": 290},
                         descripcion="r va de -1 a 1. Cerca de 1: suben juntas; cerca de -1: una sube cuando la otra baja; cerca de 0: no hay relación lineal.")); y += 8
    CONSULTAS.append(("Dispersión caudal vs corriente", SQL_DISPERSION))
    P.append({"id": nuevo_id(), "type": "xychart", "title": "Dispersión: caudal vs corriente de la bomba", "datasource": DS, "gridPos": grid(0, y, 12, 9),
              "targets": objetivo(SQL_DISPERSION, "table"),
              "fieldConfig": {"defaults": {"custom": {"show": "points", "pointSize": {"fixed": 6}}}, "overrides": []},
              "options": {"mapping": "auto", "series": [{}], "legend": {"showLegend": False}},
              "description": "Cada punto es una medición. Si forman una línea inclinada, caudal y corriente están correlacionados."}); y += 9

    return {
        "title": "AquaMonitor - Planta de tratamiento",
        "uid": "aquamonitor-planta",
        "description": "Tablero de AquaMonitor: sensores en vivo, indicadores por hora/turno/día/semana, fallas de la bomba y análisis (SQL de InfluxDB).",
        "tags": ["aquamonitor", "influxdb"], "timezone": "America/Argentina/Buenos_Aires",
        "refresh": "5s", "time": {"from": "now-6h", "to": "now"}, "schemaVersion": 39, "version": 1, "editable": True,
        "graphTooltip": 1, "fiscalYearStartMonth": 0, "liveNow": False, "weekStart": "monday",
        "timepicker": {"refresh_intervals": ["5s", "15s", "30s", "1m", "5m"]},
        "templating": {"list": [{
            "name": "periodo", "label": "Período de los indicadores", "type": "custom", "query": "hora,turno,dia,semana",
            "current": {"selected": True, "text": "hora", "value": "hora"},
            "options": [{"selected": i == 0, "text": t, "value": t} for i, t in enumerate(["hora", "turno", "dia", "semana"])],
            "multi": False, "includeAll": False, "hide": 0,
        }]},
        "annotations": {"list": []},
        "panels": P,
    }


def probar(horas):
    sys.path.insert(0, str(RAIZ / "herramientas"))
    from consulta_sql import ejecutar  # noqa: E402
    malas = 0
    for titulo, sql in CONSULTAS:
        try:
            t = ejecutar(sql.replace("$periodo", "hora"), horas)
            print("  OK   %-78s %d filas, %d columnas" % (titulo[:78], t.num_rows, t.num_columns))
        except RuntimeError as exc:
            malas += 1
            print("  ERROR %-77s %s" % (titulo[:77], str(exc)[:260]))
    print("\n%d consultas, %d con error" % (len(CONSULTAS), malas))
    return malas


if __name__ == "__main__":
    dash = construir()
    SALIDA.parent.mkdir(exist_ok=True)
    SALIDA.write_text(json.dumps(dash, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print("dashboard escrito: %s (%d paneles, %d consultas)" % (SALIDA.relative_to(RAIZ), len(dash["panels"]), len(CONSULTAS)))
    if "--probar" in sys.argv:
        i = sys.argv.index("--probar")
        horas = sys.argv[i + 1] if len(sys.argv) > i + 1 else "6"
        sys.exit(1 if probar(horas) else 0)
