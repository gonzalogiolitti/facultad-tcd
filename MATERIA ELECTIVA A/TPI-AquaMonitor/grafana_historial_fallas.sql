-- RESPALDO (QuestDB): estas consultas son del stack anterior. Las equivalentes en SQL de InfluxDB (events, BOMBA_FALLA)
-- estan en herramientas/construir_dashboard.py y en grafana/aquamonitor_dashboard.json.
-- Historial de fallas de la bomba EQ01 en Grafana (datasource PostgreSQL apuntando a QuestDB, puerto 8812)
-- La tabla eventos_bomba la crea sola QuestDB cuando llega el primer evento desde Node-RED (flow "05 Alerta bomba EQ01").
-- Si preferís crearla antes (para que los paneles no den error con la base vacía):
CREATE TABLE IF NOT EXISTS eventos_bomba (
  timestamp TIMESTAMP,
  equipo SYMBOL,
  tipo SYMBOL,      -- 'falla' o 'recuperada'
  motivo SYMBOL,    -- VIBRACION, CAUDAL, PRESION, CORRIENTE, ESTADO, NORMALIZADA
  valor DOUBLE,
  detalle STRING
) TIMESTAMP(timestamp) PARTITION BY MONTH;

-- PANEL 1 (Stat): fallas en las últimas 12 horas
SELECT count() AS "Fallas últimas 12 h"
FROM eventos_bomba
WHERE tipo = 'falla' AND timestamp > dateadd('h', -12, now());

-- PANEL 2 (Stat): fallas en el rango de tiempo elegido en Grafana
SELECT count() AS "Fallas en el rango"
FROM eventos_bomba
WHERE tipo = 'falla' AND $__timeFilter(timestamp);

-- PANEL 3 (Bar chart): fallas por hora
SELECT timestamp AS time, count() AS fallas
FROM eventos_bomba
WHERE tipo = 'falla' AND $__timeFilter(timestamp)
SAMPLE BY 1h ALIGN TO CALENDAR;

-- PANEL 4 (Bar gauge): fallas por motivo
SELECT motivo, count() AS fallas
FROM eventos_bomba
WHERE tipo = 'falla' AND $__timeFilter(timestamp)
GROUP BY motivo
ORDER BY fallas DESC;

-- PANEL 5 (Stat): hora de la última falla
SELECT max(timestamp) AS "Última falla"
FROM eventos_bomba
WHERE tipo = 'falla';

-- PANEL 6 (Table): detalle de eventos
SELECT timestamp AS "Hora", tipo AS "Evento", motivo AS "Motivo", detalle AS "Detalle"
FROM eventos_bomba
WHERE $__timeFilter(timestamp)
ORDER BY timestamp DESC
LIMIT 50;
