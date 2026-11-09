-- "En las últimas 12 horas la bomba falló X veces" (el mismo número que muestra el tablero).
SELECT count(*) AS fallas_ultimas_12h
FROM events
WHERE event_type = 'BOMBA_FALLA' AND time > now() - INTERVAL '12 hours'
