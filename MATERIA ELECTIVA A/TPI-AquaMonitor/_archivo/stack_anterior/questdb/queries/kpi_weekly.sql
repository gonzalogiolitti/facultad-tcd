-- =============================================================================
--  KPIs semanales — TPI-AquaMonitor
-- =============================================================================
--  Agrega por semana (SAMPLE BY 7d ALIGN TO CALENDAR). period = 'week'.
--  Los bloques de 7 días arrancan alineados al epoch; para alinear a lunes usar
--  `WITH OFFSET` según corresponda a la zona horaria de la planta.
--
--  KPIs (period = 'week'):
--    EQ01  eficiencia_energetica  [m3h_per_A]
--    EQ01  disponibilidad_bomba   [%]
--    EQ02  eficiencia_filtracion  [%]
--    EQ02  presion_diferencial_media [mbar]   (seguimiento de colmatación)
--    EQ03  tiempo_fuera_rango_ph  [min]  (fracción fuera de rango * 10080 min)
--    EQ03  desviacion_ph          [pH]   (stddev del pH en la semana)
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
    SAMPLE BY 7d ALIGN TO CALENDAR
),
eq02 AS (
    SELECT
        ts,
        avg(CASE WHEN variable = 'TURB_IN'  THEN value END) AS turb_in_med,
        avg(CASE WHEN variable = 'TURB_OUT' THEN value END) AS turb_out_med,
        avg(CASE WHEN variable = 'PRES_DIF' THEN value END) AS pres_dif_med
    FROM raw_variables
    WHERE equipo = 'EQ02'
      AND variable IN ('TURB_IN', 'TURB_OUT', 'PRES_DIF')
      AND quality = 2
    SAMPLE BY 7d ALIGN TO CALENDAR
),
eq03 AS (
    SELECT
        ts,
        count(*)                                                    AS n_muestras,
        sum(CASE WHEN value < 6.5 OR value > 8.0 THEN 1 ELSE 0 END) AS n_fuera_rango,
        stddev_samp(value)                                          AS desv_ph
    FROM raw_variables
    WHERE equipo = 'EQ03'
      AND variable = 'PH'
      AND quality = 2
    SAMPLE BY 7d ALIGN TO CALENDAR
)

SELECT
    ts, 'EQ01' AS equipo, 'eficiencia_energetica' AS kpi_name,
    round(caudal_med / corriente_med, 4) AS value,
    'week' AS period, 'm3h_per_A' AS unit
FROM eq01
WHERE corriente_med > 0

UNION ALL

SELECT
    ts, 'EQ01' AS equipo, 'disponibilidad_bomba' AS kpi_name,
    round(100.0 * n_marcha / n_estado, 2) AS value,
    'week' AS period, '%' AS unit
FROM eq01
WHERE n_estado > 0

UNION ALL

SELECT
    ts, 'EQ02' AS equipo, 'eficiencia_filtracion' AS kpi_name,
    round((turb_in_med - turb_out_med) / turb_in_med * 100.0, 3) AS value,
    'week' AS period, '%' AS unit
FROM eq02
WHERE turb_in_med > 0

UNION ALL

SELECT
    ts, 'EQ02' AS equipo, 'presion_diferencial_media' AS kpi_name,
    round(pres_dif_med, 2) AS value,
    'week' AS period, 'mbar' AS unit
FROM eq02
WHERE pres_dif_med IS NOT NULL

UNION ALL

SELECT
    ts, 'EQ03' AS equipo, 'tiempo_fuera_rango_ph' AS kpi_name,
    round(10080.0 * n_fuera_rango / n_muestras, 2) AS value,
    'week' AS period, 'min' AS unit
FROM eq03
WHERE n_muestras > 0

UNION ALL

SELECT
    ts, 'EQ03' AS equipo, 'desviacion_ph' AS kpi_name,
    round(desv_ph, 4) AS value,
    'week' AS period, 'pH' AS unit
FROM eq03
WHERE n_muestras > 0;

-- Persistir:  INSERT INTO kpi_values (ts, equipo, kpi_name, value, period, unit) <consulta>;
