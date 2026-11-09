-- Filas de kpi_values SIN tag regla: son de la etapa de desarrollo o de la regla de calidad vieja.
-- El tablero NO las usa (filtra regla = 'q0'). Se pueden ignorar o borrar desde InfluxDB.
SELECT periodo, cerrado, to_char(time - INTERVAL '3 hours', '%d/%m %H:%M') AS inicio_ART, count(*) AS filas,
       min(muestras) AS muestras_min, max(muestras) AS muestras_max
FROM kpi_values
WHERE regla IS NULL
GROUP BY periodo, cerrado, time
ORDER BY time, periodo
