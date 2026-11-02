-- =============================================================================
--  KPIs horarios — TPI-AquaMonitor
-- =============================================================================
--  Calcula, agrupando por hora (SAMPLE BY 1h), los KPIs operativos principales:
--
--    EQ01  eficiencia_energetica  = caudal medio / corriente media   [m3h_per_A]
--          (proxy de m3 tratados por kWh consumido)
--    EQ02  eficiencia_filtracion  = (TURB_IN - TURB_OUT) / TURB_IN * 100   [%]
--    EQ03  tiempo_fuera_rango_ph  = minutos con pH fuera de [6.5 , 8.0]    [min]
--
--  El resultado ya tiene la forma de la tabla `kpi_values`, por lo que puede
--  insertarse directamente (ver bloque INSERT al final).
--
--  Uso típico: ejecutar cada hora desde Node-RED (flow 02_kpi_calculator) o
--  mediante un cron que haga POST a $QUESTDB_HTTP_URL/exec.
-- =============================================================================

WITH
-- --- Pivot horario de las variables necesarias -------------------------------
-- QuestDB no tiene PIVOT: se usa agregación condicional sobre el formato largo.
eq01 AS (
    SELECT
        ts,
        avg(CASE WHEN variable = 'CAUDAL'    THEN value END) AS caudal_med,
        avg(CASE WHEN variable = 'CORRIENTE' THEN value END) AS corriente_med
    FROM raw_variables
    WHERE equipo = 'EQ01'
      AND variable IN ('CAUDAL', 'CORRIENTE')
      AND quality = 2                     -- sólo datos buenos
    SAMPLE BY 1h ALIGN TO CALENDAR
),
eq02 AS (
    SELECT
        ts,
        avg(CASE WHEN variable = 'TURB_IN'  THEN value END) AS turb_in_med,
        avg(CASE WHEN variable = 'TURB_OUT' THEN value END) AS turb_out_med
    FROM raw_variables
    WHERE equipo = 'EQ02'
      AND variable IN ('TURB_IN', 'TURB_OUT')
      AND quality = 2
    SAMPLE BY 1h ALIGN TO CALENDAR
),
eq03 AS (
    SELECT
        ts,
        count(*)                                                       AS n_muestras,
        sum(CASE WHEN value < 6.5 OR value > 8.0 THEN 1 ELSE 0 END)    AS n_fuera_rango
    FROM raw_variables
    WHERE equipo = 'EQ03'
      AND variable = 'PH'
      AND quality = 2
    SAMPLE BY 1h ALIGN TO CALENDAR
)

-- --- KPI 1: eficiencia energética EQ01 -------------------------------------
SELECT
    ts,
    'EQ01'                          AS equipo,
    'eficiencia_energetica'         AS kpi_name,
    round(caudal_med / corriente_med, 4) AS value,
    'hour'                          AS period,
    'm3h_per_A'                     AS unit
FROM eq01
WHERE corriente_med > 0

UNION ALL

-- --- KPI 2: eficiencia de filtración EQ02 --------------------------------
SELECT
    ts,
    'EQ02'                         AS equipo,
    'eficiencia_filtracion'        AS kpi_name,
    round((turb_in_med - turb_out_med) / turb_in_med * 100.0, 3) AS value,
    'hour'                         AS period,
    '%'                            AS unit
FROM eq02
WHERE turb_in_med > 0

UNION ALL

-- --- KPI 3: tiempo fuera de rango de pH EQ03 ---------------------------
-- Fracción de muestras fuera de rango * 60 min => minutos del período afectados.
SELECT
    ts,
    'EQ03'                         AS equipo,
    'tiempo_fuera_rango_ph'        AS kpi_name,
    round(60.0 * n_fuera_rango / n_muestras, 2) AS value,
    'hour'                         AS period,
    'min'                          AS unit
FROM eq03
WHERE n_muestras > 0;


-- =============================================================================
--  Para PERSISTIR el resultado en kpi_values, envolver la consulta anterior:
-- =============================================================================
-- INSERT INTO kpi_values (ts, equipo, kpi_name, value, period, unit)
-- WITH eq01 AS ( ... ), eq02 AS ( ... ), eq03 AS ( ... )
-- SELECT ... UNION ALL SELECT ... UNION ALL SELECT ... ;
