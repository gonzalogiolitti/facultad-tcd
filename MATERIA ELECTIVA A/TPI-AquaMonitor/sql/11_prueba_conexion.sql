-- Después de apretar el botón "Escribir dato de prueba en InfluxDB" (pestaña 00 de Node-RED).
SELECT to_char(time - INTERVAL '3 hours', '%d/%m/%Y %H:%M:%S') AS hora_ART, origen, valor, contador
FROM prueba_conexion
ORDER BY time DESC
LIMIT 5
