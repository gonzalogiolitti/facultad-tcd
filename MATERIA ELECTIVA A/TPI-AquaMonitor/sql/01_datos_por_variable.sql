-- ¿Llegan las 15 variables? Filas por variable (en modo normal, 30 por hora y variable).
SELECT equipo, variable, unit AS unidad, count(*) AS filas,
       to_char(min(time) - INTERVAL '3 hours', '%d/%m/%Y %H:%M:%S') AS primera_ART,
       to_char(max(time) - INTERVAL '3 hours', '%d/%m/%Y %H:%M:%S') AS ultima_ART
FROM raw_variables
GROUP BY equipo, variable, unit
ORDER BY equipo, variable
