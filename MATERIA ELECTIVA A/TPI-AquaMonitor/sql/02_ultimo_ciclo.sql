-- ¿Está midiendo ahora? Hora (Argentina) del último ciclo y segundos transcurridos.
-- En modo normal tiene que ser menor a ~150 s; en modo demo, menor a ~30 s.
SELECT to_char(max(time) - INTERVAL '3 hours', '%d/%m/%Y %H:%M:%S') AS ultimo_ciclo_ART,
       round(date_part('epoch', now()) - date_part('epoch', max(time))) AS segundos_desde_el_ultimo
FROM raw_variables
WHERE time > now() - INTERVAL '3 days'
