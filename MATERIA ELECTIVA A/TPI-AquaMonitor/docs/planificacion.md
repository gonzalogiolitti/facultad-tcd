# Planificación del TPI — AquaMonitor

> **Stack vigente (el de la cátedra):** Node-RED (npm, local) → InfluxDB Cloud (SQL) → Grafana Cloud, con avisos por mail.
> El stack del primer diseño (simulador de Python, MQTT/EMQX, QuestDB, Docker, Telegram) quedó como **respaldo**, sin borrar:
> ver [`respaldo_stack_anterior.md`](respaldo_stack_anterior.md). Donde este documento nombra esas piezas, se indica que son respaldo.

**Materia:** Ciencia de Datos en Sistemas Industriales
**Trabajo Práctico Integrador** — sistema IIoT end-to-end para monitoreo de una
planta de tratamiento de aguas industriales bajo norma ISA-95.

---

## 1. Objetivo

Diseñar e implementar una cadena completa de datos industrial:

> instrumentación (simulada por Node-RED) → orquestación (Node-RED) → base de datos de series
> temporales (InfluxDB Cloud) → analítica (SQL) → visualización (Grafana Cloud) → alertas y reportes por mail.

demostrando la aplicación de la pirámide de automatización ISA-95 y de técnicas
de análisis de datos (KPIs, detección de anomalías, tendencia, correlación).

## 2. Arquitectura

```
 Node-RED (local)                                              nube
 ┌───────────────────────────────────────────┐
 │ 01 Generador (3 equipos, 15 variables)    │       ┌───────────────────┐        ┌────────────────┐
 │ 02 Indicadores (6 KPIs x 4 períodos)      │ HTTPS │ InfluxDB Cloud    │  SQL   │ Grafana Cloud  │
 │ 03 Alerta bomba EQ01   ── mail ──▶ Gmail  │──────▶│ raw_variables     │◀───────│ tablero (5 s)  │
 │ 04 Alertas EQ02/EQ03   ── mail ──▶ Gmail  │escribe│ kpi_values        │consulta└────────────────┘
 │ 05 Reporte diario      ── mail ──▶ Gmail  │       │ events            │
 └───────────────────────────────────────────┘       └───────────────────┘
```

Node-RED genera los datos simulados, calcula los indicadores, detecta las fallas y escribe en InfluxDB (no lee de la base).
Grafana consulta con SQL. **Respaldo del primer diseño:** simulador de Python → MQTT/TLS (EMQX) → Node-RED → QuestDB → Grafana, con análisis en Python.

## 3. Alcance por componente

| Componente | Entregable | Estado |
|---|---|---|
| Generador de datos | `nodered/` — flow 01 (3 equipos, 15 variables, 5 fallas provocables, modo normal 120 s y demo 15 s) | ✔ |
| Catálogo único de variables y umbrales | `nodered/userdir/aqm/catalogo.js` | ✔ |
| Indicadores | flow 02 — 6 KPIs en hora, turno, día y semana | ✔ |
| Avisos por mail | flows 03, 04 y 05 — bomba EQ01, EQ02/EQ03 y reporte diario | ✔ |
| Base de datos | InfluxDB Cloud: `raw_variables`, `kpi_values`, `events` | ✔ |
| Análisis | SQL en Grafana: tendencia, anomalías (Z-score), correlación | ✔ |
| Tablero | `grafana/aquamonitor_dashboard.json` | ✔ (consultas probadas; importación sin probar) |
| Documentación | `README.md`, `docs/`, `PROGRESO.md` | ✔ |
| Presentación | `presentacion/README.md` — guion y checklist | ✔ |
| *(respaldo)* Simulador, QuestDB, análisis en Python, Docker | `simulador/`, `questdb/`, `analisis/`, `docker-compose.yml` | conservado |

## 4. Equipos y variables (resumen)

| Equipo | Área ISA-95 | Variables |
|---|---|---|
| EQ01 — Bomba de ingreso | CAPT | CAUDAL, PRESION, CORRIENTE, VIBRACION, ESTADO |
| EQ02 — Filtro de arena | FILT | TURB_IN, TURB_OUT, PRES_DIF, CAUDAL_FILT, EFICIENCIA |
| EQ03 — Reactor biológico | REAC | PH, OD, TEMP, CONDUCT, NIVEL |

Detalle de tags, unidades y umbrales en [`jerarquia_ISA95.md`](jerarquia_ISA95.md).

## 5. KPIs definidos (2 por equipo)

| Equipo | KPI | Fórmula | Unidad |
|---|---|---|---|
| EQ01 | `eficiencia_energetica` | caudal medio / corriente media | m³h/A |
| EQ01 | `disponibilidad_bomba` | % de muestras con ESTADO = 1 | % |
| EQ02 | `eficiencia_filtracion` | (TURB_IN − TURB_OUT) / TURB_IN · 100 | % |
| EQ02 | `presion_diferencial_media` | media de PRES_DIF (seguimiento de colmatación) | mbar |
| EQ03 | `tiempo_fuera_rango_ph` | fracción de muestras con pH∉[6.5, 8.0] · minutos del período | min |
| EQ03 | `desviacion_ph` | desvío estándar de pH en el período | pH |

Granularidades: `hour` (SAMPLE BY 1h), `shift` (8h), `day`, `week`.

> **Actualización stack de la cátedra:** en el stack final los indicadores los calcula Node-RED y se guardan en el measurement `kpi_values` de InfluxDB (campo `periodo` = `hora`, `turno`, `dia`, `semana`). Ver la sección 5b.

## 5b. Turnos de la planta (hora Argentina)

La planta trabaja 24 h con **3 turnos de 8 horas**, en hora de Argentina (America/Argentina/Buenos_Aires, UTC-3, sin horario de verano):

| Turno | Desde | Hasta | En UTC |
|---|---|---|---|
| T1 | 06:00 | 14:00 | 09:00 a 17:00 |
| T2 | 14:00 | 22:00 | 17:00 a 01:00 |
| T3 | 22:00 | 06:00 (día siguiente) | 01:00 a 09:00 |

Los otros períodos también se calculan en hora Argentina: la **hora** es en punto, el **día** va de 00:00 a 24:00 y la **semana** empieza el lunes a las 00:00. InfluxDB guarda todo en UTC: la marca de tiempo de cada indicador es el **inicio del período**, convertido a UTC (por ejemplo, el día 07/11 empieza a las 03:00 UTC). Los turnos están definidos en un solo lugar: `nodered/userdir/aqm/catalogo.js`.

## 6. Técnicas de análisis

Se resuelven con **consultas SQL en Grafana** (ver [`metodologia_anomalias.md`](metodologia_anomalias.md)):

1. **Detección de anomalías** — Z-score con ventana deslizante de 20 muestras previas (umbral 3σ) y bandas de ±3σ sobre la vibración.
2. **Tendencia** — media móvil de 10 muestras y pendiente de una regresión lineal (`regr_slope`) por hora.
3. **Correlación** — `corr` (r de Pearson) entre pares de variables; pares clave: caudal↔corriente, caudal↔vibración,
   pH↔OD, presión diferencial↔eficiencia.

*(Respaldo: la versión en Python con Bollinger, `numpy.polyfit` y matriz de correlación está en `analisis/`.)*

## 7. Fallas que se pueden provocar (demo)

Botones de la pestaña *01 Generador de datos* de Node-RED:

| Nombre | Equipo | Efecto | Duración por defecto |
|---|---|---|---|
| `VIB_HIGH` | EQ01 | Vibración crítica creciente (> 7,1 mm/s) | 15 mediciones |
| `CAUDAL_DROP` | EQ01 | Caída brusca de caudal / cavitación (a veces la protección para la bomba) | 10 mediciones |
| `PARADA_BOMBA` | EQ01 | Parada imprevista: `ESTADO = 0` y las demás variables de la bomba a ~0 | 8 mediciones |
| `PH_SPIKE` | EQ03 | Excursión de pH fuera de rango | 8 mediciones |
| `FILTER_SAT` | EQ02 | Colmatación acelerada del filtro | 20 mediciones |

## 8. Cronograma de implementación

| Fase | Tareas | Estado |
|---|---|---|
| 0 | Auditoría del diseño anterior, plan y esquema de datos de InfluxDB | hecho |
| 1 | Entorno: Node-RED con npm, escritura en InfluxDB, mail de prueba | hecho |
| 2 | Generador de datos en Node-RED (15 variables, fallas provocables, modos normal/demo) | hecho |
| 3 | Indicadores (6 KPIs x 4 períodos) | hecho |
| 4 | Avisos por mail y registro de eventos | hecho |
| 5 | Análisis en SQL | hecho |
| 6 | Tablero de Grafana Cloud | consultas probadas; importación a cargo del usuario |
| 7 | Documentación, prueba desde cero y guía de migración | hecho |

El detalle y la evidencia de cada fase están en [`PROGRESO.md`](../PROGRESO.md).

## 9. Riesgos y mitigaciones

| Riesgo | Mitigación |
|---|---|
| Límites del plan gratuito de InfluxDB / Grafana (escritura, consulta, retención) | Una medición cada 120 s; los indicadores se escriben una vez por período; consultas acotadas |
| Credenciales expuestas | Todo por `.env` + `.gitignore`; `.env.example` sin secretos; guía de rotación en `docs/migracion_otra_pc.md` |
| InfluxDB puede devolver una versión vieja de una fila reescrita | Cada indicador se escribe **una sola vez**, al cerrar el período; el período en curso se calcula por SQL |
| Gmail puede bloquear la cuenta si se mandan muchos mails | Anti-spam (un mail por falla, cooldown por equipo), interruptor para silenciar, y pocos mails en pruebas |
| La PC se suspende y el historial queda con huecos | Dejar la PC encendida; la corrida continua está pensada para eso |
| Dos computadoras generando datos a la vez | Procedimiento de migración: detener una antes de arrancar la otra |
| Falsos positivos de anomalías | Umbral 3σ sobre ventana de 20 muestras, más la media móvil y la tendencia como contexto |
