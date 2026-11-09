# sql/ — consultas de verificación y operación

Cada archivo es **una consulta** SQL de InfluxDB 3 (hora de Argentina = `time - INTERVAL '3 hours'`).
Se ejecutan desde la raíz del proyecto, con el token de `.env` (nunca se imprime):

```bash
.venv/bin/python scripts/consulta_sql.py -f sql/01_datos_por_variable.sql
```

(El entorno virtual `.venv` se crea como indica el README, sección 13.)

| Archivo | Para qué sirve |
|---|---|
| `01_datos_por_variable.sql` | ¿llegan las 15 variables? |
| `02_ultimo_ciclo.sql` | ¿está midiendo ahora? |
| `03_ciclos_por_ventana.sql` | ¿hay un solo generador? (migración) |
| `04_huecos_de_medicion.sql` | ¿hubo cortes de medición? |
| `05_calidad_por_variable.sql` | calidad 2/1/0 por variable |
| `06_eventos_recientes.sql` | últimos eventos |
| `07_fallas_bomba_12h.sql` | "fallas de la bomba en las últimas 12 h" |
| `08_eventos_de_la_bomba.sql` | fallas y normalizaciones con su duración |
| `09_kpi_cerrados.sql` | indicadores de períodos cerrados |
| `10_kpi_filas_regla_vieja.sql` | filas de desarrollo / regla vieja (no las usa el tablero) |
| `11_prueba_conexion.sql` | resultado del botón de prueba de conexión |

Las consultas del **tablero** (incluido el período en curso, tendencias, Z-score y correlación) no están acá: se generan en `scripts/construir_dashboard.py`.
