-- =============================================================================
--  KPIs diarios — TPI-AquaMonitor
-- =============================================================================
--  Agrega por día (SAMPLE BY 1d ALIGN TO CALENDAR). period = 'day'.
--
--  Se añade un cuarto KPI de disponibilidad de la bomba (EQ01), relevante a
--  escala diaria:
--    EQ01  eficiencia_energetica  [m3h_per_A]
--    EQ01  disponibilidad_bomba   [%]   -> % de muestras con ESTADO = 1
--    EQ02  eficiencia_filtracion  [%]
--    EQ03  tiempo_fuera_rango_ph  [min] -> fracción fuera de rango * 1440 min
-- =============================================================================

WITH
eq01 AS (
    SELECT
        ts,
        avg(CASE WHEN variable = 'CAUDAL'    THEN value END) AS caudal_med,
        avg(CASE WHEN variable = 'CORRIENTE' THEN value END) AS corriente_med,
        count(CASE WHEN variable = 'ESTADO' THEN 1 END)      AS n_estado,
        sum(CASE WHEN variable = 'ESTADO' AND value >= 0.5 THEN 1 ELSE 0 END) AS n_marcha
    FROM raw_variables
    WHERE equipo = 'EQ01'
      AND variable IN ('CAUDAL', 'CORRIENTE', 'ESTADO')
      AND quality = 2
    SAMPLE BY 1d ALIGN TO CALENDAR
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
    SAMPLE BY 1d ALIGN TO CALENDAR
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
    SAMPLE BY 1d ALIGN TO CALENDAR
)

SELECT
    ts, 'EQ01' AS equipo, 'eficiencia_energetica' AS kpi_name,
    round(caudal_med / corriente_med, 4) AS value,
    'day' AS period, 'm3h_per_A' AS unit
FROM eq01
WHERE corriente_med > 0

UNION ALL

SELECT
    ts, 'EQ01' AS equipo, 'disponibilidad_bomba' AS kpi_name,
    round(100.0 * n_marcha / n_estado, 2) AS value,
    'day' AS period, '%' AS unit
FROM eq01
WHERE n_estado > 0

UNION ALL

SELECT
    ts, 'EQ02' AS equipo, 'eficiencia_filtracion' AS kpi_name,
    round((turb_in_med - turb_out_med) / turb_in_med * 100.0, 3) AS value,
    'day' AS period, '%' AS unit
FROM eq02
WHERE turb_in_med > 0

UNION ALL

SELECT
    ts, 'EQ03' AS equipo, 'tiempo_fuera_rango_ph' AS kpi_name,
    round(1440.0 * n_fuera_rango / n_muestras, 2) AS value,
    'day' AS period, 'min' AS unit
FROM eq03
WHERE n_muestras > 0;

-- Persistir:  INSERT INTO kpi_values (ts, equipo, kpi_name, value, period, unit) <consulta>;
