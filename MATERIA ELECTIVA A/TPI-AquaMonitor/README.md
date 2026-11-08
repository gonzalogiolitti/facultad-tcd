# AquaMonitor

Sistema de monitoreo de una planta de tratamiento de aguas industriales, siguiendo la norma ISA-95.
Trabajo Práctico Integrador de *Ciencia de Datos en Sistemas Industriales* (materia electiva).

**Stack (el de la cátedra):** Node-RED (instalado con npm, local) → **InfluxDB Cloud** (consultas SQL) → **Grafana Cloud**, con avisos por **mail** (Gmail).
Node-RED genera los datos simulados de 3 equipos (15 variables), calcula los indicadores, avisa las fallas y escribe todo en InfluxDB. Grafana solo consulta.

> Lo anterior (simulador de Python, MQTT/EMQX, QuestDB, Docker, Telegram) **quedó como respaldo**, sin borrar: ver [`docs/respaldo_stack_anterior.md`](docs/respaldo_stack_anterior.md).

---

## 1. Qué pide la consigna y dónde está

| La consigna pide | Cómo se cumple |
|---|---|
| Servicio con Node-RED y una base a elección | Node-RED 5 local + InfluxDB Cloud Serverless |
| Tablero de control (PMV) | Dashboard de Grafana Cloud: [`grafana/aquamonitor_dashboard.json`](grafana/aquamonitor_dashboard.json) |
| Datos historizados en una base | Measurements `raw_variables`, `kpi_values` y `events` (sección 8) |
| Aviso o reporte por mail | Alertas de falla + reporte diario, con Gmail (sección 10) |
| Mediciones cada 2 a 5 minutos | **Modo normal: una medición cada 120 s (2 min)**. El modo demo (15 s) es solo para mostrar en vivo |
| Al menos 3 equipos con 5 variables | EQ01 Bomba de ingreso, EQ02 Filtro de arena, EQ03 Reactor biológico: 15 variables ([`docs/jerarquia_ISA95.md`](docs/jerarquia_ISA95.md)) |
| Al menos 2 indicadores por equipo, por hora, turno, día y semana | 6 indicadores (2 por equipo) en las 4 granularidades (sección 9) |
| Una metodología de análisis | Tendencia, anomalías (Z-score) y correlación, en SQL (sección 12) |

## 2. Arquitectura

```
 Node-RED (en tu PC, localhost:1880)                          nube
 ┌──────────────────────────────────────────────┐
 │ 01 Generador (3 equipos, 15 variables)       │        ┌────────────────────┐        ┌────────────────┐
 │ 02 Indicadores (6 KPIs x 4 períodos)         │ HTTPS  │  InfluxDB Cloud    │  SQL   │ Grafana Cloud  │
 │ 03 Alerta bomba EQ01      ─ mail ─▶ Gmail    │───────▶│  raw_variables     │◀───────│  tablero       │
 │ 04 Alertas EQ02/EQ03      ─ mail ─▶ Gmail    │ escribe│  kpi_values        │ consulta│  (refresco 5 s)│
 │ 05 Reporte diario 06:00   ─ mail ─▶ Gmail    │        │  events            │        └────────────────┘
 │ 06 Escritura en InfluxDB  │ 07 Envío de mail │        └────────────────────┘
 └──────────────────────────────────────────────┘
```

Node-RED **no lee** de InfluxDB: calcula todo con lo que él mismo genera y solo escribe. Grafana es quien consulta.
Pirámide ISA-95: instrumentación simulada (niveles 0-1) → Node-RED (nivel 2) → InfluxDB (nivel 3) → Grafana (nivel 4).

## 3. Estructura del repositorio

```
TPI-AquaMonitor/
├── README.md                    esta guía
├── PROGRESO.md                  registro de lo hecho, cómo se probó y qué falta
├── .env.example                 plantilla de variables (copiar a .env; el .env NO se sube)
├── nodered/
│   ├── arrancar.sh · parar.sh · corrida_continua.sh · arrancar.ps1     scripts de arranque y parada
│   ├── construir_flows.js       arma userdir/flows.json a partir de src/funciones/*.js
│   ├── src/funciones/*.js       el código de cada nodo "function" (legible y probado)
│   ├── pruebas/probar.js        pruebas automáticas de la lógica (sin red)
│   └── userdir/                 carpeta de Node-RED: settings.js, flows.json, aqm/catalogo.js (UNICA fuente de umbrales)
├── grafana/aquamonitor_dashboard.json   dashboard para importar en Grafana Cloud
├── herramientas/                consulta_sql.py, construir_dashboard.py, cruzar_kpis.py (necesitan Python, ver sección 13)
├── docs/                        planificación, jerarquía ISA-95, metodología, migración, respaldo del stack anterior
├── presentacion/README.md       guion y checklist de la defensa
└── (respaldo) simulador/ questdb/ analisis/ docker-compose.yml nodered/flows/ grafana/dashboards/
```

## 4. Requisitos y cuentas

- **Node.js 22.9 o superior** (la versión LTS actual, 24, funciona). Con [nvm](https://github.com/nvm-sh/nvm): `nvm install --lts`.
- **InfluxDB Cloud (Serverless)**: cuenta gratuita, un *bucket* llamado `aquamonitor` y un **token de API con permiso de escritura** sobre ese bucket (menú *Load Data → API Tokens*). Para las herramientas de la sección 13 hace falta además lectura.
- **Grafana Cloud**: cuenta gratuita y una fuente de datos **InfluxDB** con lenguaje **SQL** y base `aquamonitor` (ya conectada: se llama `influxdb`).
- **Gmail** con *verificación en 2 pasos* y una **contraseña de aplicación** de 16 letras (Cuenta de Google → Seguridad → Contraseñas de aplicaciones). No sirve la contraseña normal.
- Windows: se recomienda **WSL (Ubuntu)**, que es donde se desarrolló y probó todo. Windows nativo: ver 5.3.

## 5. Instalación paso a paso

### 5.1 Conseguir el código e instalar Node-RED

El proyecto vive en la carpeta `MATERIA ELECTIVA A/TPI-AquaMonitor` del repositorio de la facultad, en la rama **`stack-catedra`**:

```bash
git clone <URL del repositorio> && cd <repositorio>
git checkout stack-catedra            # si la rama no aparece, quien la creó tiene que subirla antes: git push -u origin stack-catedra
cd "MATERIA ELECTIVA A/TPI-AquaMonitor"
```

Después, instalar Node-RED:

```bash
cd nodered/userdir
npm install            # instala Node-RED 5.0.9 y el nodo de mail con las versiones fijadas
```

### 5.2 Cargar las variables (.env)

```bash
cd TPI-AquaMonitor
cp .env.example .env   # y completar los valores con un editor de texto
```

| Variable | Qué es |
|---|---|
| `INFLUX_URL` | URL de tu región de InfluxDB Cloud, sin barra final |
| `INFLUX_ORG` | nombre de la organización |
| `INFLUX_BUCKET` | `aquamonitor` |
| `INFLUX_TOKEN` | **secreto**: token de API con permiso de escritura |
| `SMTP_HOST` / `SMTP_PORT` / `SMTP_SECURE` | `smtp.gmail.com` / `587` / `false` (STARTTLS). El nodo de mail está configurado para el 587 |
| `SMTP_USER` | tu cuenta de Gmail que envía los avisos |
| `SMTP_PASSWORD` | **secreto**: contraseña de aplicación de 16 letras |
| `ALERT_MAIL_FROM` / `ALERT_MAIL_TO` / `REPORTE_MAIL_TO` | remitente, destinatario(s) de las alertas y del reporte. **Varias direcciones: separadas por coma** (`a@x.com, b@y.com`) |
| `GEN_INTERVALO_S`, `GEN_INTERVALO_DEMO_S`, `ALERTA_REARME_S`, `ALERTA_COOLDOWN_S`, `ALERTA_COOLDOWN_DEMO_S` | opcionales (valores por defecto: 120, 15, 60, 1800, 60) |

`.env` está en `.gitignore`: **nunca** se sube a GitHub. Los dos secretos solo viven ahí.

### 5.3 Arrancar

```bash
bash nodered/arrancar.sh                 # queda en esta terminal; Ctrl+C lo detiene
```

Abrir <http://localhost:1880> (para usar otro puerto: `PORT=1881 bash nodered/arrancar.sh`). Se ven 8 pestañas (00 a 07). El generador empieza solo a los pocos segundos.
Windows nativo: `powershell -ExecutionPolicy Bypass -File nodered\arrancar.ps1` (**no probado**: se desarrolló en WSL).

Detener desde otra terminal, de forma segura (guarda el estado en disco): `bash nodered/parar.sh`.

### 5.4 Comprobar que escribe en InfluxDB y que manda mail

1. Pestaña **00 Prueba de conexión**: botón *Escribir dato de prueba en InfluxDB* → el nodo de abajo debe mostrar `204`.
   En el *Data Explorer* de InfluxDB (modo SQL, base `aquamonitor`): `SELECT * FROM prueba_conexion ORDER BY time DESC LIMIT 5`.
2. Pestaña **03 Alerta bomba EQ01**: botón *Probar mail de falla [PRUEBA]* → llega un mail marcado `[PRUEBA]` (no escribe nada en la base).
3. Ver los datos reales: `SELECT equipo, variable, count(*) FROM raw_variables GROUP BY equipo, variable` (hay 15 filas).

## 6. El generador: modo normal, modo demo y fallas

- **Modo normal (por defecto): una medición cada 120 s.** Cumple la consigna (2 a 5 minutos).
- **Modo demo: una cada 15 s.** Solo para mostrar el sistema en vivo; **no** cumple el intervalo de la consigna.
- Cambiar de modo **sin tocar código**: pestaña *01 Generador de datos* → botones `Modo NORMAL (120 s)` / `Modo DEMO (15 s)`. Hay también *Pausar* y *Reanudar*.
- **Provocar fallas** (botones de la misma pestaña; se ven en la siguiente medición, que se hace al instante):

| Botón | Qué simula | Efecto en los datos |
|---|---|---|
| `VIB_HIGH` | vibración alta (desbalanceo del rodamiento) | vibración de ~3 a más de 7,1 mm/s |
| `CAUDAL_DROP` | cavitación / obstrucción | el caudal cae; a veces la protección para la bomba (`ESTADO = 0`) |
| `PARADA_BOMBA` | parada imprevista | `ESTADO = 0`, caudal, presión y corriente ~0 |
| `PH_SPIKE` | excursión del pH | pH fuera de [6,5 ; 8,0] |
| `FILTER_SAT` | filtro que se tapa | sube la presión diferencial y empeora la turbidez de salida |

- **Fallas aleatorias**: botones `Fallas aleatorias ON/OFF` (≈3 % por medición).
- Cada falla provocada queda registrada en `events` como `ANOMALIA_INYECTADA`.
- La calidad del dato (`quality`): 2 = bueno, 1 = dudoso, 0 = inverosímil. Los indicadores usan solo calidad 2; las alertas aceptan 1 y 2.

## 7. Corrida continua (dejar el sistema generando varias horas)

```bash
bash nodered/corrida_continua.sh              # modo normal, fallas aleatorias, SIN mails
bash nodered/corrida_continua.sh --con-mails  # igual, pero con los avisos por mail
bash nodered/parar.sh                         # detener
```

Corre en segundo plano (log en `nodered/userdir/nodered.log`). Hay que dejar la PC **encendida y sin suspenderse** (si se suspende, el historial queda con huecos) y recordar que **solo una computadora puede generar datos a la vez contra el mismo bucket**.

## 8. Qué se guarda en InfluxDB

| Measurement | Qué es | Tags | Campos | `time` |
|---|---|---|---|---|
| `raw_variables` | una fila por variable y por medición (15 por ciclo) | `planta`, `area`, `equipo`, `variable`, `unit`, `tag` | `value` (decimal), `quality` (entero 0/1/2) | instante de la medición |
| `kpi_values` | un indicador de un período **ya cerrado** | `equipo`, `kpi`, `periodo` (hora/turno/dia/semana), `regla` (q0/q1/q2: calidad mínima usada), `unit`, `turno` (T1/T2/T3, solo en turnos) | `value`, `muestras`, `cerrado` | **inicio del período** |
| `events` | fallas, normalizaciones, alertas y fallas provocadas | `equipo`, `event_type`, `severity`, `motivo` | `value`, `detalle`, `duracion_s` | instante del evento |

`event_type`: `BOMBA_FALLA`, `BOMBA_NORMALIZADA`, `UMBRAL_CRITICO`, `UMBRAL_ADVERTENCIA`, `ANOMALIA_INYECTADA`.
(`prueba_conexion` y `kpi_values_prueba` son mediciones de prueba; no se usan en el tablero.)

**Zona horaria:** InfluxDB guarda en **UTC**. Argentina es UTC−3 todo el año (sin horario de verano), así que en SQL la hora argentina es `time - INTERVAL '3 hours'`. (Se comprobó que `AT TIME ZONE` **no** convierte en InfluxDB 3.) Grafana muestra el tablero con `America/Argentina/Buenos_Aires`.

Ejemplo: fallas de la bomba en las últimas 12 horas

```sql
SELECT count(*) FROM events WHERE event_type = 'BOMBA_FALLA' AND time > now() - INTERVAL '12 hours'
```

## 9. Indicadores (KPIs)

Dos por equipo, calculados por Node-RED con las muestras de calidad `>= KPI.calidad_minima` (hoy **0**, es decir todas, en `nodered/userdir/aqm/catalogo.js`; las **alertas** siguen descartando la calidad 0; motivo en `PROGRESO.md`):

| Equipo | Indicador | Fórmula | Unidad |
|---|---|---|---|
| EQ01 | `eficiencia_energetica` | media(CAUDAL) / media(CORRIENTE) | m³h/A |
| EQ01 | `disponibilidad_bomba` | 100 · muestras con ESTADO ≥ 0,5 / muestras de ESTADO | % |
| EQ02 | `eficiencia_filtracion` | (media TURB_IN − media TURB_OUT) / media TURB_IN · 100 | % |
| EQ02 | `presion_diferencial_media` | media(PRES_DIF) | mbar |
| EQ03 | `tiempo_fuera_rango_ph` | duración del período en minutos · muestras con pH fuera de [6,5 ; 8,0] / muestras de pH | min |
| EQ03 | `desviacion_ph` | desvío estándar muestral del pH | pH |

**Períodos (hora Argentina):** hora en punto · turno (T1 06-14, T2 14-22, T3 22-06) · día (00:00 a 24:00) · semana (lunes a domingo).
**Cómo se guardan:** Node-RED va acumulando las muestras de cada período abierto (el acumulador se guarda en disco: sobrevive a un reinicio) y, **cuando el período termina, escribe una fila por indicador, una sola vez**, con la hora de *inicio* del período. El **período en curso** lo calcula el tablero con SQL directamente sobre `raw_variables` (con `date_bin`).
**Si Node-RED está apagado (o la PC suspendida):** los períodos abiertos cierran al primer ciclo después de volver, con las muestras que tenían (ver la columna `muestras`); los períodos sin datos no generan filas; el reporte de las 06:00 de ese día no se manda; y una falla de la bomba abierta se cierra con la duración observada como `SIN DATOS`. Quedan huecos en `raw_variables`.
*Por qué así:* InfluxDB no permite reescribir una fila de forma confiable; al leer datos recién reescritos puede devolver una versión vieja. Escribir cada período una sola vez evita el problema (ver `PROGRESO.md`).

## 10. Avisos por mail

| Aviso | Cuándo | Anti-spam |
|---|---|---|
| **Falla de la bomba EQ01** | pasa de normal a falla: vibración > 7,1 mm/s, caudal < 70 o > 175 m³/h, presión < 2,5 o > 6,5 bar, corriente > 65 A o `ESTADO < 0,5` | **un solo mail por falla**; otro cuando se normaliza (60 s seguidos en normal, `ALERTA_REARME_S`). Sin cooldown: dos fallas separadas mandan dos mails |
| **Alerta crítica EQ02 / EQ03** | una variable entra en zona crítica | un mail por equipo cada `ALERTA_COOLDOWN_S` (30 min; en demo 60 s); las demás quedan registradas en `events` |
| **Reporte diario** | todos los días 06:00 (hora Argentina) | KPIs del día anterior y conteo de fallas |

Cada falla y normalización se guarda en `events`. Interruptores (pestaña *03 Alerta bomba EQ01*):
- `Mails CON marca [PRUEBA]` (valor por defecto) / `SIN marca (presentación)`;
- `SILENCIAR mails` / `ACTIVAR mails`: para probar fallas sin llenar la bandeja. **Acordarse de activarlos de nuevo.**
- Si el envío falla por red (en WSL2 puede pasar con IPv6: `ENETUNREACH`), el sistema **reintenta solo hasta 2 veces**.
- Gmail puede bloquear la cuenta si se mandan demasiados mails: en pruebas, no pasar de unos pocos.

## 11. Dashboard de Grafana Cloud

1. En Grafana Cloud: *Dashboards → New → Import → Upload dashboard JSON file* y elegir [`grafana/aquamonitor_dashboard.json`](grafana/aquamonitor_dashboard.json) → *Import*.
2. Las consultas usan la fuente `influxdb` (UID `fg3ly9z1iz668b`, lenguaje SQL, base `aquamonitor`). Si los paneles dicen *datasource not found*, abrir *Dashboard settings → JSON Model* y reemplazar ese UID por el de tu fuente de datos.
3. El tablero se abre con zona horaria `America/Argentina/Buenos_Aires` y refresco de **5 s**. El selector **Período de los indicadores** (arriba) elige hora, turno, día o semana.

Contiene: estado general; sensores en vivo de los 3 equipos (colores según los umbrales); indicadores (período en curso por SQL y último período cerrado); fallas de la bomba (últimas 12 h, por hora, por motivo, última falla, tabla de eventos); y el análisis (sección 12).
Todas las consultas SQL se probaron contra la base real con `herramientas/construir_dashboard.py --probar`. **La importación en Grafana no se pudo probar desde acá** (no hay acceso a tu Grafana): ver `PROGRESO.md`.

## 12. Análisis (en SQL, dentro de Grafana)

- **Tendencia:** media móvil de las últimas 10 muestras y pendiente de una recta ajustada (`regr_slope`) por hora.
- **Anomalías:** Z-score; cada valor se compara con la media y el desvío de las 20 muestras anteriores; si se aleja más de 3 desvíos se marca. Bandas de ±3σ en el gráfico de la vibración.
- **Correlación:** `corr` (r de Pearson) entre pares de variables (caudal–corriente, caudal–vibración, pH–oxígeno, etc.).
Explicación sencilla de cada método: [`docs/metodologia_anomalias.md`](docs/metodologia_anomalias.md).

## 13. Pruebas y herramientas de verificación (opcionales)

```bash
node nodered/pruebas/probar.js           # pruebas de la lógica (generador, KPIs, alertas), con reloj simulado
node nodered/construir_flows.js          # regenera flows.json si se editó nodered/src/funciones/*.js (después reiniciar)
python3 -m venv .venv && .venv/bin/pip install influxdb3-python
.venv/bin/python herramientas/consulta_sql.py "SELECT count(*) FROM raw_variables"      # SQL contra InfluxDB (lee el token de .env)
.venv/bin/python herramientas/construir_dashboard.py --probar 6                         # regenera el dashboard y prueba sus 32 consultas
.venv/bin/python herramientas/cruzar_kpis.py                                             # cruza los KPIs de Node-RED con un recálculo independiente
.venv/bin/python herramientas/reconstruir_kpis.py [--aplicar]                            # reconstruye acumuladores y períodos cerrados desde raw_variables (Node-RED detenido)
```

## 14. Pasar el sistema a otra computadora

Ver [`docs/migracion_otra_pc.md`](docs/migracion_otra_pc.md) (qué se copia, cómo pasar el `.env` en privado, qué estado se pierde y cómo rotar las credenciales).

## 15. Problemas frecuentes

| Síntoma | Causa y solución |
|---|---|
| `Falta .env` al arrancar | copiar `.env.example` a `.env` y completarlo |
| Escritura con `401` / `403` | token mal copiado o sin permiso de escritura sobre el bucket |
| Escritura con `404` | `INFLUX_ORG` o `INFLUX_BUCKET` mal escritos |
| El mail falla con `Invalid login` | hay que usar la **contraseña de aplicación** (16 letras), con verificación en 2 pasos activada |
| Mail con `ENETUNREACH` | IPv6 en WSL2; el sistema reintenta solo. Si persiste, reiniciar Node-RED |
| El puerto 1880 está ocupado | queda corriendo otra copia de Node-RED (o el contenedor Docker del respaldo): `bash nodered/parar.sh` o `docker compose stop nodered` |
| No llegan mails de fallas | mails silenciados: apretar `ACTIVAR mails` (o arrancar sin `--con-mails`) |
| Los paneles de Grafana dicen *No data* | el generador está pausado o apagado; ver el panel *Antigüedad del dato* |
| Hay datos duplicados / raros | hay **dos** computadoras generando contra el mismo bucket; dejar solo una |
| Un panel de Grafana da error de consulta | abrirlo con *Edit* y ejecutar su SQL; compararlo con `herramientas/construir_dashboard.py` |

## 16. Seguridad

- El token de InfluxDB y la contraseña de aplicación **solo** están en `.env` (ignorado por git). Nunca en `flows.json`, ni en mails, ni en chats.
- `flows_cred.json` solo contiene marcadores `${SMTP_USER}` / `${SMTP_PASSWORD}` y también está ignorado.
- El editor de Node-RED solo escucha en `127.0.0.1`.
- Después de la presentación: revocar el token en InfluxDB y la contraseña de aplicación en Google (ver `docs/migracion_otra_pc.md`).
