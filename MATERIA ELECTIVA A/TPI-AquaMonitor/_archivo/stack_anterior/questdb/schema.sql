-- =============================================================================
--  TPI-AquaMonitor — Esquema de base de datos (QuestDB Cloud)
-- =============================================================================
--  Motor:   QuestDB (time-series, SQL columnar)
--  Ingesta: ILP sobre HTTP desde Node-RED  ->  tabla raw_variables
--  Consulta: PostgreSQL wire protocol (puerto 8812) desde Grafana / Python
--
--  Convenciones:
--   * Toda tabla tiene una columna designada TIMESTAMP y se particiona por DAY.
--   * WAL habilitado (obligatorio en QuestDB Cloud y recomendado para ingesta
--     concurrente + consultas).
--   * Los campos de baja cardinalidad se declaran SYMBOL (índice interno,
--     almacenamiento eficiente): planta, area, equipo, tag, variable, unit...
--   * Los textos de cardinalidad alta o libres se declaran STRING (description).
--
--  Ejecutar este script una sola vez en la consola web de QuestDB o vía:
--     curl -G "$QUESTDB_HTTP_URL/exec" --data-urlencode "query=$(cat schema.sql)"
-- =============================================================================


-- -----------------------------------------------------------------------------
--  1) raw_variables — series crudas de todas las variables de proceso
-- -----------------------------------------------------------------------------
--  Una fila por (variable, instante). Es la tabla de hechos principal.
--  Se alimenta desde el flow 01_ingesta_mqtt de Node-RED.
--
--  Columna  | Tipo       | Descripción
--  ---------+------------+------------------------------------------------------
--  ts       | TIMESTAMP  | Marca temporal de la lectura (precisión ms)
--  firma    | SYMBOL     | Hash corto del payload original (trazabilidad/integridad)
--  planta   | SYMBOL     | Nivel ISA-95 "Site"  (ej: PTEF)
--  area     | SYMBOL     | Nivel ISA-95 "Area"  (ej: CAPT, FILT, REAC)
--  equipo   | SYMBOL     | Nivel ISA-95 "Work Unit" (ej: EQ01, EQ02, EQ03)
--  tag      | SYMBOL     | Tag ISA-95 plano completo (ej: AQM-PTEF-CAPT-EQ01-CAUDAL)
--  variable | SYMBOL     | Nombre de la variable (ej: CAUDAL, PH, VIBRACION)
--  value    | DOUBLE     | Valor numérico de la lectura
--  unit     | SYMBOL     | Unidad de ingeniería (ej: m3/h, bar, mm/s, pH)
--  quality  | INT        | Calidad del dato: 0=bad, 1=uncertain, 2=good
-- -----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS raw_variables (
    ts       TIMESTAMP,
    firma    SYMBOL CAPACITY 4096 NOCACHE,
    planta   SYMBOL CAPACITY 16,
    area     SYMBOL CAPACITY 32,
    equipo   SYMBOL CAPACITY 64,
    tag      SYMBOL CAPACITY 256,
    variable SYMBOL CAPACITY 64,
    value    DOUBLE,
    unit     SYMBOL CAPACITY 32,
    quality  INT
) TIMESTAMP(ts) PARTITION BY DAY WAL
  DEDUP UPSERT KEYS(ts, tag);
--  DEDUP evita filas duplicadas si Node-RED reintenta una publicación:
--  la clave (ts, tag) identifica de forma única cada lectura.


-- -----------------------------------------------------------------------------
--  2) kpi_values — indicadores calculados (agregaciones por período)
-- -----------------------------------------------------------------------------
--  Se alimenta desde el flow 02_kpi_calculator de Node-RED y/o desde las
--  queries de questdb/queries/kpi_*.sql ejecutadas de forma programada.
--
--  Columna   | Tipo       | Descripción
--  ----------+------------+-----------------------------------------------------
--  ts        | TIMESTAMP  | Inicio del período al que corresponde el KPI
--  equipo    | SYMBOL     | Equipo al que pertenece el KPI (EQ01/EQ02/EQ03)
--  kpi_name  | SYMBOL     | Identificador del KPI (ej: eficiencia_energetica)
--  value     | DOUBLE     | Valor del KPI en ese período
--  period    | SYMBOL     | Granularidad: 'hour' | 'shift' | 'day' | 'week'
--  unit      | SYMBOL     | Unidad del KPI (ej: %, m3/kWh, min)
-- -----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS kpi_values (
    ts       TIMESTAMP,
    equipo   SYMBOL CAPACITY 64,
    kpi_name SYMBOL CAPACITY 64,
    value    DOUBLE,
    period   SYMBOL CAPACITY 8,
    unit     SYMBOL CAPACITY 16
) TIMESTAMP(ts) PARTITION BY DAY WAL
  DEDUP UPSERT KEYS(ts, equipo, kpi_name, period);


-- -----------------------------------------------------------------------------
--  3) events — eventos discretos: alertas de umbral y anomalías detectadas
-- -----------------------------------------------------------------------------
--  Se alimenta desde:
--   * flow 03_alertas de Node-RED       (event_type = 'THRESHOLD')
--   * analisis/anomaly_detection.py     (event_type = 'ANOMALY_ZSCORE')
--   * simulador (opcional, para marcar anomalías inyectadas: 'ANOMALY_INJECTED')
--
--  Columna     | Tipo       | Descripción
--  ------------+------------+---------------------------------------------------
--  ts          | TIMESTAMP  | Instante del evento
--  equipo      | SYMBOL     | Equipo afectado
--  tag         | SYMBOL     | Tag de la variable involucrada
--  event_type  | SYMBOL     | Tipo de evento (THRESHOLD, ANOMALY_ZSCORE, ...)
--  description | STRING     | Texto libre explicativo del evento
--  severity    | SYMBOL     | 'info' | 'warning' | 'critical'
--  value       | DOUBLE     | Valor que disparó el evento (si aplica)
-- -----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS events (
    ts          TIMESTAMP,
    equipo      SYMBOL CAPACITY 64,
    tag         SYMBOL CAPACITY 256,
    event_type  SYMBOL CAPACITY 16,
    description STRING,
    severity    SYMBOL CAPACITY 8,
    value       DOUBLE
) TIMESTAMP(ts) PARTITION BY DAY WAL;


-- -----------------------------------------------------------------------------
--  Consultas de verificación rápida (ejecutar tras crear las tablas)
-- -----------------------------------------------------------------------------
-- SELECT count(*) FROM raw_variables;
-- SELECT * FROM raw_variables LIMIT -20;              -- últimas 20 filas
-- SELECT table_name, partitionBy, walEnabled FROM tables();
