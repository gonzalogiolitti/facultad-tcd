# TPI-AquaMonitor

Sistema **IIoT end-to-end** para el monitoreo de una planta de tratamiento de
aguas industriales, siguiendo la norma **ISA-95**.
Trabajo Práctico Integrador — *Ciencia de Datos en Sistemas Industriales*.

Simula 3 equipos (15 variables de proceso), publica por MQTT/TLS, orquesta con
Node-RED, persiste en QuestDB, analiza con Python (Z-score, Bollinger,
tendencia, correlación) y visualiza en Grafana.

---

## 1. Arquitectura

```
  ┌──────────────┐   MQTT/TLS    ┌────────────┐   ILP / HTTP   ┌──────────────┐
  │  Simulador   │──────────────▶│ EMQX Cloud │───────────────▶│   Node-RED   │
  │  Python      │ AQM/PTEF/#    │  (broker)  │                │   4 flows    │
  │  EQ01/02/03  │◀── anomalías  └────────────┘                └──────┬───────┘
  └──────────────┘                                                    │
                                                                      ▼
     ┌───────────────┐      SQL (PG wire, 8812)          ┌──────────────────────┐
     │   Grafana     │◀────────────────────────────────▶│      QuestDB Cloud    │
     │   Cloud       │                                   │  raw_variables       │
     │  3 dashboards │                                   │  kpi_values          │
     └───────────────┘                                   │  events              │
             ▲            SQL / HTTP                      └──────────┬───────────┘
             │                                                      │
     ┌───────┴────────┐   consulta 2 h / 24 h                       │
     │  Análisis      │◀───────────────────────────────────────────-┘
     │  Python (batch)│   -> inserta anomalías en events
     └────────────────┘
```

| Capa ISA-95 | Tecnología |
|---|---|
| Nivel 0–1 (campo/control) | Simulador Python (`simulador/`) |
| Transporte | MQTT sobre TLS — EMQX Cloud |
| Nivel 2 (SCADA/orquestación) | Node-RED (`nodered/`) |
| Nivel 3 (MES/histórico) | QuestDB Cloud (`questdb/`) + análisis Python (`analisis/`) |
| Nivel 4 (negocio) | Grafana Cloud (`grafana/`) |

## 2. Estructura del repositorio

```
TPI-AquaMonitor/
├── README.md                  Este archivo
├── .env.example               Plantilla de credenciales (copiar a .env)
├── .gitignore
├── docs/                      Documentación técnica y de negocio
│   ├── planificacion.md
│   ├── jerarquia_ISA95.md
│   ├── modelo_negocio_canvas.md
│   └── metodologia_anomalias.md
├── simulador/                 Simulador de datos (publica por MQTT)
│   ├── simulator.py           Script principal
│   ├── config.py              Equipos, tags ISA-95, unidades, umbrales
│   ├── anomaly_injector.py    Inyección de anomalías nombradas
│   ├── requirements.txt
│   └── models/                bomba.py · filtro.py · reactor.py · base.py
├── nodered/
│   ├── flows.json             Los 4 flows combinados (import único)
│   └── flows/                 Cada flow por separado
│       ├── 01_ingesta_mqtt.json
│       ├── 02_kpi_calculator.json
│       ├── 03_alertas.json
│       └── 04_reporte_diario.json
├── questdb/
│   ├── schema.sql             raw_variables · kpi_values · events
│   └── queries/               kpi_hourly/shift/daily/weekly · trend · anomaly
├── grafana/
│   └── dashboards/            operativo_realtime · kpis_temporales · analisis_avanzado
├── analisis/
│   ├── anomaly_detection.py   Z-score + Bollinger
│   ├── trend_analysis.py      Regresión lineal (numpy.polyfit)
│   ├── correlation_matrix.py  Matriz de Pearson -> outputs/correlaciones.csv
│   ├── qdb_utils.py           Cliente HTTP de QuestDB compartido
│   └── requirements.txt
└── presentacion/
    └── README.md              Guion de defensa del TPI
```

## 3. Requisitos previos

- Python 3.10+
- Node-RED 3.x o 4.x (con `node-red-node-email` para alertas y reportes)
- Cuenta gratuita en **EMQX Cloud** (broker MQTT con TLS)
- Cuenta gratuita en **QuestDB Cloud** (o QuestDB local vía Docker)
- Cuenta gratuita en **Grafana Cloud** (o Grafana local)

## 4. Instalación paso a paso

### 4.1 Clonar y configurar entorno

```bash
cd TPI-AquaMonitor
cp .env.example .env
# Editar .env con las credenciales reales (ver sección 8)
```

### 4.2 Simulador

```bash
python -m venv .venv && source .venv/bin/activate
pip install -r simulador/requirements.txt

# Prueba local sin broker (sólo genera y loguea datos):
python -m simulador.simulator --dry-run --once

# Prueba con inyección de anomalía:
python -m simulador.simulator --dry-run --inject VIB_HIGH --at 2 --interval 1
```

### 4.3 QuestDB — crear el esquema

Opción A (QuestDB Cloud / local, consola web): pegar y ejecutar
[`questdb/schema.sql`](questdb/schema.sql).

Opción B (curl):

```bash
source .env
curl -G "$QUESTDB_HTTP_URL/exec" \
  -H "Authorization: Bearer $QUESTDB_TOKEN" \
  --data-urlencode "query=$(cat questdb/schema.sql)"
```

QuestDB local rápido con Docker:

```bash
docker run -p 9000:9000 -p 8812:8812 questdb/questdb:latest
```

### 4.4 Node-RED — importar los flows

1. Instalar el nodo de email:
   ```bash
   cd ~/.node-red && npm install node-red-node-email
   ```
2. Exportar las variables de entorno **antes** de arrancar Node-RED (el runtime
   sólo lee `process.env` al iniciar):
   ```bash
   set -a && source /ruta/a/TPI-AquaMonitor/.env && set +a
   node-red
   ```
3. En la UI: **☰ → Import →** pegar el contenido de
   [`nodered/flows.json`](nodered/flows.json) (los 4 flows a la vez) o cada
   archivo de `nodered/flows/` por separado.
4. Completar las **credenciales** de los nodos `mqtt-broker` (usuario/clave de
   EMQX) y `e-mail` (usuario/clave SMTP) — no viajan en el JSON.
5. **Deploy**.

Flujo de datos resultante:

| Flow | Qué hace |
|---|---|
| `01_ingesta_mqtt` | `AQM/PTEF/#` → enriquece ISA-95 → ILP → `POST /write` a `raw_variables` |
| `02_kpi_calculator` | cada 60 s → consulta agregados 1 h → calcula 6 KPIs → `kpi_values` |
| `03_alertas` | evalúa umbrales → email en `critical` → registra en `events` |
| `04_reporte_diario` | 06:00 → resumen del día anterior → email HTML |

### 4.5 Grafana — datasource y dashboards

1. **Connections → Data sources → Add → PostgreSQL**:
   - Host: `$QUESTDB_PG_HOST:8812`  ·  Database: `qdb`
   - User: `$QUESTDB_PG_USER`  ·  Password: `$QUESTDB_PG_PASSWORD`
   - TLS/SSL Mode: `require` (Cloud) o `disable` (local)
   - Version: 15.x  ·  (opcional) nombrar el uid `questdb`
2. **Dashboards → Import** cada archivo de
   [`grafana/dashboards/`](grafana/dashboards/).
3. Al importar, seleccionar el datasource PostgreSQL creado (variable
   `${datasource}` del dashboard).

### 4.6 Análisis Python (batch)

```bash
pip install -r analisis/requirements.txt
cd analisis

python anomaly_detection.py     # Z-score últimas 2 h -> inserta en events
python trend_analysis.py        # tendencia 24 h de VIBRACION EQ01 y PRES_DIF EQ02
python correlation_matrix.py    # -> analisis/outputs/correlaciones.csv
```

Para ejecución periódica, agendar con `cron` (p. ej. `anomaly_detection.py`
cada 15 min).

## 5. Cómo correr una demo completa

```bash
# Terminal 1 — simulador con anomalías esporádicas
python -m simulador.simulator --random --interval 30

# Terminal 2 — Node-RED corriendo (flows deployados)

# Terminal 3 — cada tanto:
cd analisis && python anomaly_detection.py && python trend_analysis.py
```

Abrir Grafana → dashboard *Operativo Tiempo Real* (refresh 30 s).

## 6. Convenciones ISA-95

- **Tag plano:** `AQM-PTEF-<AREA>-<EQ>-<VARIABLE>`
- **Topic MQTT:** `AQM/PTEF/<EQ>/<VARIABLE>`
- Áreas: `CAPT` (EQ01), `FILT` (EQ02), `REAC` (EQ03)

Detalle completo en [`docs/jerarquia_ISA95.md`](docs/jerarquia_ISA95.md).

## 7. Payload MQTT

```json
{ "tag": "AQM-PTEF-CAPT-EQ01-CAUDAL", "value": 118.42,
  "ts": 1717171717123, "equipo": "EQ01", "unit": "m3/h", "quality": 2 }
```

## 8. Variables de entorno

Todas se definen en `.env` (ver [`.env.example`](.env.example)). Resumen:

| Grupo | Variables |
|---|---|
| MQTT | `MQTT_BROKER`, `MQTT_PORT`, `MQTT_TLS`, `MQTT_USERNAME`, `MQTT_PASSWORD`, `MQTT_CLIENT_ID`, `MQTT_TOPIC_BASE`, `MQTT_QOS` |
| Simulador | `INTERVAL_SECONDS`, `SIM_SEED`, `LOG_LEVEL` |
| QuestDB | `QUESTDB_HTTP_URL`, `QUESTDB_TOKEN`, `QUESTDB_PG_HOST/PORT/DATABASE/USER/PASSWORD` |
| SMTP | `SMTP_HOST`, `SMTP_PORT`, `SMTP_SECURE`, `SMTP_USER`, `SMTP_PASSWORD`, `ALERT_MAIL_FROM`, `ALERT_MAIL_TO`, `REPORTE_MAIL_TO` |
| Análisis | `ANALISIS_WINDOW`, `ANALISIS_ZSCORE_THRESHOLD`, `ANALISIS_LOOKBACK_HORAS` |

> **Nunca** se versiona `.env`. El repo sólo contiene `.env.example` sin secretos.

## 9. Documentación

- [`docs/planificacion.md`](docs/planificacion.md) — objetivo, alcance, cronograma, riesgos
- [`docs/jerarquia_ISA95.md`](docs/jerarquia_ISA95.md) — 15 variables, tags, niveles, umbrales
- [`docs/metodologia_anomalias.md`](docs/metodologia_anomalias.md) — Z-score y Bollinger
- [`docs/modelo_negocio_canvas.md`](docs/modelo_negocio_canvas.md) — Business Model Canvas SaaS
- [`presentacion/README.md`](presentacion/README.md) — guion de defensa
