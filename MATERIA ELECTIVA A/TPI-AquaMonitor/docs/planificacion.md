# Planificación del TPI — AquaMonitor

**Materia:** Ciencia de Datos en Sistemas Industriales
**Trabajo Práctico Integrador** — sistema IIoT end-to-end para monitoreo de una
planta de tratamiento de aguas industriales bajo norma ISA-95.

---

## 1. Objetivo

Diseñar e implementar una cadena completa de datos industrial:

> instrumentación (simulada) → MQTT → orquestación → base de datos de series
> temporales → analítica → visualización → alertas y reportes.

demostrando la aplicación de la pirámide de automatización ISA-95 y de técnicas
de análisis de datos (KPIs, detección de anomalías, tendencia, correlación).

## 2. Arquitectura

```
┌───────────────┐   MQTT/TLS    ┌───────────────┐   ILP/HTTP   ┌───────────────┐
│  Simulador    │──────────────▶│   EMQX Cloud  │─────────────▶│   Node-RED    │
│  Python       │  AQM/PTEF/#   │   (broker)    │              │ (4 flows)     │
│  3 equipos    │               └───────────────┘              └──────┬────────┘
│  15 variables │                                                     │ ILP/SQL
└───────────────┘                                                     ▼
        ▲                                                     ┌───────────────┐
        │ inyección de anomalías                              │  QuestDB      │
        │ (VIB_HIGH, PH_SPIKE, ...)                           │  Cloud        │
        │                                                     │  raw_variables│
┌───────────────┐        SQL (pg wire)        ┌───────────────┤  kpi_values   │
│  Análisis     │◀───────────────────────────▶│  Grafana Cloud│  events       │
│  Python       │   Z-score, tendencia,       │  3 dashboards │               │
│  (batch)      │   correlación               └───────────────┴───────────────┘
└───────────────┘
```

## 3. Alcance por componente

| Componente | Entregable | Estado |
|---|---|---|
| Estructura del repo | Árbol de carpetas + archivos base | ✔ |
| Simulador | `simulador/` — 3 modelos, inyector, `simulator.py` (MQTT/TLS) | ✔ |
| Esquema QuestDB | `questdb/schema.sql` (3 tablas, WAL, particionado DAY) | ✔ |
| Queries analíticas | `questdb/queries/` — 6 archivos SQL comentados | ✔ |
| Node-RED | `nodered/flows/` — 4 flows + `flows.json` combinado | ✔ |
| Análisis Python | `analisis/` — anomalías, tendencia, correlación | ✔ |
| Grafana | `grafana/dashboards/` — 3 dashboards JSON | ✔ |
| Documentación | `docs/` + `README.md` + `.env.example` | ✔ |
| Presentación | `presentacion/README.md` — guion de defensa | ✔ |

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

## 6. Técnicas de análisis

1. **Detección de anomalías** — Z-score con ventana deslizante de 20 puntos
   (umbral 3σ) y Bandas de Bollinger (2σ). Ver
   [`metodologia_anomalias.md`](metodologia_anomalias.md).
2. **Tendencia** — regresión lineal (`numpy.polyfit`, grado 1) sobre 24 h para
   vibración EQ01 y presión diferencial EQ02, con proyección a 24 h.
3. **Correlación** — matriz de Pearson entre variables re-muestreadas a 5 min;
   pares clave: caudal↔corriente, pH↔OD, presión diferencial↔eficiencia.

## 7. Anomalías inyectables (demo)

| Nombre | Equipo | Efecto | Duración por defecto |
|---|---|---|---|
| `VIB_HIGH` | EQ01 | Vibración crítica creciente (>7.1 mm/s) | 15 ciclos |
| `CAUDAL_DROP` | EQ01 | Caída brusca de caudal / cavitación | 10 ciclos |
| `PH_SPIKE` | EQ03 | Excursión de pH fuera de rango | 8 ciclos |
| `FILTER_SAT` | EQ02 | Colmatación acelerada del filtro | 20 ciclos |

## 8. Cronograma sugerido de implementación

| Fase | Tareas | Duración |
|---|---|---|
| 1 | Repo, `config.py`, modelos, simulador en `--dry-run` | 1 día |
| 2 | Alta de EMQX Cloud + QuestDB Cloud, `schema.sql`, publicación MQTT real | 1 día |
| 3 | Import de flows Node-RED, ingesta a `raw_variables`, verificación | 1 día |
| 4 | Queries de KPIs, flow 02, tabla `kpi_values` | 1 día |
| 5 | Flow 03 (alertas + email) y flow 04 (reporte diario) | 1 día |
| 6 | Scripts de análisis Python, tabla `events` | 1 día |
| 7 | Datasource + 3 dashboards Grafana, ajuste de umbrales | 1 día |
| 8 | Documentación final y ensayo de presentación | 1 día |

## 9. Riesgos y mitigaciones

| Riesgo | Mitigación |
|---|---|
| Límites del free tier (mensajes/almacenamiento) | Intervalo de 120 s, retención corta, particionado por día |
| Credenciales expuestas | Todo por `.env` + `.gitignore`; `.env.example` sin secretos |
| Diferencias de dialecto SQL en QuestDB | Uso de `SAMPLE BY`, `ALIGN TO CALENDAR`, funciones de ventana probadas |
| Node-RED sin nodo email | `node-red-node-email` documentado como dependencia a instalar |
| Falsos positivos de anomalías | Umbral 3σ + severidad escalonada + complemento con tendencia |
