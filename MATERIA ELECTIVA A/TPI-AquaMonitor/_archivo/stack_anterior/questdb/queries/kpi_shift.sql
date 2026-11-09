-- =============================================================================
--  KPIs por turno (8 horas) — TPI-AquaMonitor
-- =============================================================================
--  Idéntico a kpi_hourly.sql pero agregando por turnos de 8 h.
--  Turnos de planta:  T1 = 06:00-14:00 | T2 = 14:00-22:00 | T3 = 22:00-06:00
--
--  Con `SAMPLE BY 8h ALIGN TO CALENDAR` los bloques comienzan a las 00:00,
--  08:00 y 16:00 UTC. Si la operación usa turnos que arrancan a las 06:00,
--  añadir un offset:  `SAMPLE BY 8h ALIGN TO CALENDAR WITH OFFSET '06:00'`.
--
--  KPIs calculados (period = 'shift'):
--    EQ01  eficiencia_energetica  [m3h_per_A]
--    EQ02  eficiencia_filtracion  [%]
--    EQ03  tiempo_fuera_rango_ph  [min]   (fracción fuera de rango * 480 min)
-- =============================================================================

WITH
eq01 AS (
    SELECT
        ts,
        avg(CASE WHEN variable = 'CAUDAL'    THEN value END) AS caudal_med,
        avg(CASE WHEN variable = 'CORRIENTE' THEN value END) AS corriente_med
    FROM raw_variables
    WHERE equipo = 'EQ01'
      AND variable IN ('CAUDAL', 'CORRIENTE')
      AND quality = 2
    SAMPLE BY 8h ALIGN TO CALENDAR WITH OFFSET '06:00'
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
    SAMPLE BY 8h ALIGN TO CALENDAR WITH OFFSET '06:00'
),
eq03 AS (
    SELECT
        ts,
        count(*)                                                    AS n_muestras,
        sum(CASE WHEN value < 6.5 OR value > 8.0 THEN 1 ELSE 0 END) AS n_fuera_rango
    FROM raw_variables
    WHERE equipo = 'EQ03'
      AND variable = 'PH'
      AND quality = 2
    SAMPLE BY 8h ALIGN TO CALENDAR WITH OFFSET '06:00'
)

SELECT
    ts, 'EQ01' AS equipo, 'eficiencia_energetica' AS kpi_name,
    round(caudal_med / corriente_med, 4) AS value,
    'shift' AS period, 'm3h_per_A' AS unit
FROM eq01
WHERE corriente_med > 0

UNION ALL

SELECT
    ts, 'EQ02' AS equipo, 'eficiencia_filtracion' AS kpi_name,
    round((turb_in_med - turb_out_med) / turb_in_med * 100.0, 3) AS value,
    'shift' AS period, '%' AS unit
FROM eq02
WHERE turb_in_med > 0

UNION ALL

SELECT
    ts, 'EQ03' AS equipo, 'tiempo_fuera_rango_ph' AS kpi_name,
    round(480.0 * n_fuera_rango / n_muestras, 2) AS value,
    'shift' AS period, 'min' AS unit
FROM eq03
WHERE n_muestras > 0;

-- Persistir:  INSERT INTO kpi_values (ts, equipo, kpi_name, value, period, unit) <consulta>;
