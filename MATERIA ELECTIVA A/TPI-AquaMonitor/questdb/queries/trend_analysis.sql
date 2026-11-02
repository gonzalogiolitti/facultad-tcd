-- =============================================================================
--  Análisis de tendencia (regresión lineal aproximada) — TPI-AquaMonitor
-- =============================================================================
--  Ajusta una recta y = a + b*x por mínimos cuadrados sobre una ventana de 24 h,
--  usando la media horaria de la variable como serie (x = horas desde el inicio
--  de la ventana).  QuestDB no tiene un agregado de regresión, así que se
--  calcula con las sumas clásicas:
--
--      b (pendiente)  = (n*Σxy - Σx*Σy) / (n*Σx² - (Σx)²)
--      a (intercepto) = (Σy - b*Σx) / n
--      valor_proyectado_24h = a + b * (x_max + 24)
--
--  Variables analizadas:
--    * EQ01 / VIBRACION  (mm/s)  -> detección temprana de desgaste de rodamiento
--    * EQ02 / PRES_DIF   (mbar)  -> velocidad de colmatación del filtro
--
--  Interpretación de `pendiente_por_hora`:
--    > 0  tendencia ascendente | ~0 estable | < 0 descendente
-- =============================================================================

-- --- EQ01 / VIBRACIÓN ------------------------------------------------------
WITH serie_vib AS (
    SELECT ts, avg(value) AS y
    FROM raw_variables
    WHERE equipo = 'EQ01' AND variable = 'VIBRACION'
      AND ts >= dateadd('h', -24, now())
      AND quality = 2
    SAMPLE BY 1h ALIGN TO CALENDAR
),
base_vib AS (SELECT min(ts) AS t0 FROM serie_vib),
pts_vib AS (
    SELECT datediff('h', base_vib.t0, serie_vib.ts) AS x, serie_vib.y AS y
    FROM serie_vib CROSS JOIN base_vib
    WHERE serie_vib.y IS NOT NULL
),
agg_vib AS (
    SELECT count(*) AS n, sum(x) AS sx, sum(y) AS sy,
           sum(x * y) AS sxy, sum(x * x) AS sxx, max(x) AS xmax
    FROM pts_vib
)
SELECT
    'EQ01' AS equipo,
    'VIBRACION' AS variable,
    'mm/s' AS unit,
    n AS n_horas,
    round((n * sxy - sx * sy) / nullif(n * sxx - sx * sx, 0), 5) AS pendiente_por_hora,
    round((sy - ((n * sxy - sx * sy) / nullif(n * sxx - sx * sx, 0)) * sx) / n, 4) AS intercepto,
    round(
        (sy - ((n * sxy - sx * sy) / nullif(n * sxx - sx * sx, 0)) * sx) / n
        + ((n * sxy - sx * sy) / nullif(n * sxx - sx * sx, 0)) * (xmax + 24),
        4
    ) AS valor_proyectado_24h
FROM agg_vib

UNION ALL

-- --- EQ02 / PRESIÓN DIFERENCIAL -----------------------------------------
SELECT * FROM (
    WITH serie_pd AS (
        SELECT ts, avg(value) AS y
        FROM raw_variables
        WHERE equipo = 'EQ02' AND variable = 'PRES_DIF'
          AND ts >= dateadd('h', -24, now())
          AND quality = 2
        SAMPLE BY 1h ALIGN TO CALENDAR
    ),
    base_pd AS (SELECT min(ts) AS t0 FROM serie_pd),
    pts_pd AS (
        SELECT datediff('h', base_pd.t0, serie_pd.ts) AS x, serie_pd.y AS y
        FROM serie_pd CROSS JOIN base_pd
        WHERE serie_pd.y IS NOT NULL
    ),
    agg_pd AS (
        SELECT count(*) AS n, sum(x) AS sx, sum(y) AS sy,
               sum(x * y) AS sxy, sum(x * x) AS sxx, max(x) AS xmax
        FROM pts_pd
    )
    SELECT
        'EQ02' AS equipo,
        'PRES_DIF' AS variable,
        'mbar' AS unit,
        n AS n_horas,
        round((n * sxy - sx * sy) / nullif(n * sxx - sx * sx, 0), 5) AS pendiente_por_hora,
        round((sy - ((n * sxy - sx * sy) / nullif(n * sxx - sx * sx, 0)) * sx) / n, 4) AS intercepto,
        round(
            (sy - ((n * sxy - sx * sy) / nullif(n * sxx - sx * sx, 0)) * sx) / n
            + ((n * sxy - sx * sy) / nullif(n * sxx - sx * sx, 0)) * (xmax + 24),
            4
        ) AS valor_proyectado_24h
    FROM agg_pd
);
