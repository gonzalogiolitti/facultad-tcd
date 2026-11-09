-- ¿Hubo cortes? Intervalos de más de 5 minutos sin ningún ciclo (últimas 72 h):
-- Node-RED apagado, PC suspendida, etc. Los períodos sin datos no generan indicadores.
WITH c AS (SELECT DISTINCT time FROM raw_variables WHERE time > now() - INTERVAL '72 hours'),
     d AS (SELECT time, lag(time) OVER (ORDER BY time) AS anterior FROM c)
SELECT to_char(anterior - INTERVAL '3 hours', '%d/%m %H:%M:%S') AS ultimo_dato_ART,
       to_char(time - INTERVAL '3 hours', '%d/%m %H:%M:%S') AS siguiente_dato_ART,
       round((date_part('epoch', time) - date_part('epoch', anterior)) / 60) AS minutos_sin_datos
FROM d
WHERE date_part('epoch', time) - date_part('epoch', anterior) > 300
ORDER BY time DESC
LIMIT 20
