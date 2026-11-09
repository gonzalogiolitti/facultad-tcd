-- Fallas y normalizaciones de la bomba EQ01 con su duración (últimos 3 días).
-- Una normalización con "fin no observado" es una falla que quedó abierta cuando se cortó la medición.
SELECT to_char(time - INTERVAL '3 hours', '%d/%m %H:%M:%S') AS hora_ART,
       event_type AS evento, motivo, duracion_s, detalle
FROM events
WHERE event_type IN ('BOMBA_FALLA', 'BOMBA_NORMALIZADA') AND time > now() - INTERVAL '3 days'
ORDER BY time DESC
LIMIT 40
