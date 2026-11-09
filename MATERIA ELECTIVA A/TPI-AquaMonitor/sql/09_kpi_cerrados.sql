-- Indicadores de períodos YA CERRADOS (regla de calidad vigente: tag regla = 'q0'), los 24 más recientes.
-- Si se cambia KPI.calidad_minima en nodered/userdir/aqm/catalogo.js, cambiar también 'q0' (q1, q2).
SELECT periodo, to_char(time - INTERVAL '3 hours', '%d/%m %H:%M') AS inicio_ART, equipo, kpi, unit AS unidad, value AS valor, muestras
FROM kpi_values
WHERE cerrado = true AND regla = 'q0'
ORDER BY time DESC, periodo, equipo, kpi
LIMIT 24
