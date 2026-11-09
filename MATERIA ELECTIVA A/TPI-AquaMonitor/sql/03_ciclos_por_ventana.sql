-- ¿Hay UN solo generador? Ciclos distintos por ventana de 10 minutos (última hora).
-- Modo normal (120 s): 5 por ventana. Si da el doble, hay dos computadoras generando contra el mismo bucket.
SELECT to_char(date_bin(INTERVAL '10 minutes', time) - INTERVAL '3 hours', '%d/%m %H:%M') AS ventana_ART,
       count(DISTINCT time) AS ciclos
FROM raw_variables
WHERE time > now() - INTERVAL '1 hour'
GROUP BY date_bin(INTERVAL '10 minutes', time)
ORDER BY date_bin(INTERVAL '10 minutes', time)
