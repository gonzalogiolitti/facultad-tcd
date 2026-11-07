# PROGRESO - TPI AquaMonitor (rama `stack-catedra`)

Registro de lo que se hizo, cómo se probó y qué falta. No contiene secretos.
Stack de la cátedra: **Node-RED (npm, local) → InfluxDB Cloud (SQL) → Grafana Cloud + mail (Gmail)**.
Lo anterior (simulador de Python, EMQX/MQTT, QuestDB, Docker, Telegram) queda como **respaldo**, sin borrar.

Última actualización: 07/11/2026.

## Resumen de estado

| Fase | Estado | Nota corta |
|---|---|---|
| 0. Auditoría y plan | hecho | aprobada |
| 1. Entorno | hecho | aprobada (SELECT y mail verificados por el usuario) |
| 2. Generador de datos | en curso | ver abajo |
| 3. Indicadores (KPIs) | en curso | ver abajo |
| 4. Avisos por mail y eventos | pendiente | ver abajo |
| 5. Análisis en SQL | pendiente | |
| 6. Dashboard de Grafana | pendiente | |
| 7. Documentación y prueba desde cero | pendiente | |

Mails de prueba enviados hasta ahora: **1** de 10 (el de la Fase 1; el primer intento de esa fase falló por red y no salió).

## Herramientas que se usan para verificar (sin mostrar secretos)

- `herramientas/consulta_sql.py`: ejecuta SQL contra InfluxDB (Flight SQL) con el token de `.env`. Uso: `.venv/bin/python herramientas/consulta_sql.py "SELECT ..."`. El entorno virtual `.venv/` está dentro del proyecto (ignorado por git) y tiene `influxdb3-python`.
- `nodered/pruebas/probar.js`: pruebas automáticas de la lógica de los flows (sin red y con reloj simulado). `node nodered/pruebas/probar.js`.

## Sobre la lectura de InfluxDB (lo que no se podía en la Fase 1)

Se probó primero la opción (a): cliente de Python para InfluxDB 3 por Flight SQL. **Funcionó**, no hizo falta DBRP/InfluxQL.
Funciones SQL comprobadas en la base: `date_bin` (con origen en 03:00 UTC = medianoche argentina), `stddev`, `corr`, `regr_slope`, funciones de ventana (`avg() OVER`, `stddev() OVER`) y `now() - INTERVAL`.

