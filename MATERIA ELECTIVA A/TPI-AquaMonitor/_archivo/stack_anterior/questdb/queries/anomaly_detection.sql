-- =============================================================================
--  Detección de anomalías por Z-score (ventana deslizante de 20 puntos)
--  TPI-AquaMonitor
-- =============================================================================
--  Para cada variable (identificada por `tag`) se calcula, sobre las últimas
--  N horas, la media y el desvío estándar móviles usando las 20 muestras
--  previas (incluida la actual) y luego el Z-score de la muestra:
--
--      z_i = (x_i - media_movil_i) / desvio_movil_i
--
--  Se marca ANOMALÍA cuando |z_i| supera el umbral (por defecto 3.0).
--
--  Requiere funciones de ventana (QuestDB >= 7.4):
--      avg(...)  OVER (PARTITION BY tag ORDER BY ts ROWS 19 PRECEDING)
--      stddev(...) OVER (...)
--
--  Ajustar el filtro temporal `ts >= dateadd('h', -2, now())` según necesidad.
-- =============================================================================

WITH ventana AS (
    SELECT
        ts,
        equipo,
        tag,
        variable,
        unit,
        value,
        avg(value) OVER (
            PARTITION BY tag ORDER BY ts
            ROWS BETWEEN 19 PRECEDING AND CURRENT ROW
        ) AS media_movil,
        stddev(value) OVER (
            PARTITION BY tag ORDER BY ts
            ROWS BETWEEN 19 PRECEDING AND CURRENT ROW
        ) AS desvio_movil,
        count(value) OVER (
            PARTITION BY tag ORDER BY ts
            ROWS BETWEEN 19 PRECEDING AND CURRENT ROW
        ) AS n_ventana
    FROM raw_variables
    WHERE ts >= dateadd('h', -2, now())
      AND quality = 2
      AND variable <> 'ESTADO'          -- variable binaria: el Z-score no aplica
),
zscore AS (
    SELECT
        ts, equipo, tag, variable, unit, value,
        round(media_movil, 4)  AS media_movil,
        round(desvio_movil, 4) AS desvio_movil,
        CASE
            WHEN desvio_movil IS NULL OR desvio_movil = 0 THEN 0.0
            ELSE round((value - media_movil) / desvio_movil, 3)
        END AS z_score
    FROM ventana
    WHERE n_ventana >= 20                -- sólo cuando la ventana está completa
)
SELECT
    ts, equipo, tag, variable, unit, value,
    media_movil, desvio_movil, z_score,
    CASE
        WHEN abs(z_score) > 3.0 THEN 'critical'
        WHEN abs(z_score) > 2.5 THEN 'warning'
        ELSE 'info'
    END AS severity
FROM zscore
WHERE abs(z_score) > 3.0                 -- <-- umbral; bajar a 2.5 para más sensibilidad
ORDER BY ts DESC;


-- =============================================================================
--  Variante para PERSISTIR las anomalías detectadas en la tabla `events`
--  (usada como referencia por analisis/anomaly_detection.py):
-- =============================================================================
-- INSERT INTO events (ts, equipo, tag, event_type, description, severity, value)
-- WITH ventana AS ( ... ), zscore AS ( ... )
-- SELECT
--     ts, equipo, tag,
--     'ANOMALY_ZSCORE' AS event_type,
--     concat('Z-score=', z_score, ' (media=', media_movil, ', sd=', desvio_movil, ')') AS description,
--     CASE WHEN abs(z_score) > 3.0 THEN 'critical' ELSE 'warning' END AS severity,
--     value
-- FROM zscore
-- WHERE abs(z_score) > 3.0;
