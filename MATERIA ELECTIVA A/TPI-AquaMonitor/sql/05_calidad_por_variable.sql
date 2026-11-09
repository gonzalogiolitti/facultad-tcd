-- Calidad del dato por variable (2 = bueno, 1 = dudoso, 0 = inverosímil) en las últimas 24 h.
-- Con el generador, la calidad 1 y 0 aparecen en las excursiones del proceso (ver docs/PROGRESO.md).
SELECT equipo, variable, count(*) AS total,
       sum(CASE WHEN quality = 2 THEN 1 ELSE 0 END) AS q2,
       sum(CASE WHEN quality = 1 THEN 1 ELSE 0 END) AS q1,
       sum(CASE WHEN quality = 0 THEN 1 ELSE 0 END) AS q0
FROM raw_variables
WHERE time > now() - INTERVAL '24 hours'
GROUP BY equipo, variable
ORDER BY equipo, variable
