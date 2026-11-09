-- Últimos 30 eventos (fallas de la bomba, normalizaciones, alertas de EQ02/EQ03 y fallas provocadas).
SELECT to_char(time - INTERVAL '3 hours', '%d/%m/%Y %H:%M:%S') AS hora_ART,
       event_type AS evento, severity AS severidad, equipo, motivo, detalle
FROM events
ORDER BY time DESC
LIMIT 30
