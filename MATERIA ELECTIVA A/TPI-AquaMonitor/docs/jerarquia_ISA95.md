# Jerarquía ISA-95 y catálogo de variables — TPI-AquaMonitor

## 1. Jerarquía de equipamiento (ISA-95 / IEC 62264)

| Nivel ISA-95 | Elemento | Código | Descripción |
|---|---|---|---|
| Enterprise | Empresa | `AQM` | AquaMonitor S.A. |
| Site | Planta | `PTEF` | Planta de Tratamiento de Efluentes / Aguas Industriales |
| Area | Área de proceso | `CAPT` / `FILT` / `REAC` | Captación y bombeo / Filtración / Tratamiento biológico |
| Work Unit | Equipo | `EQ01` / `EQ02` / `EQ03` | Bomba de ingreso / Filtro de arena / Reactor biológico |
| Property | Variable de proceso | ver tabla §3 | 15 variables instrumentadas |

**Tag jerárquico:** `AQM.PTEF.<AREA>.<EQ>.<VARIABLE>`
**Tag plano (payload / base de datos):** `AQM-PTEF-<AREA>-<EQ>-<VARIABLE>`
**Topic MQTT:** `AQM/PTEF/<EQ>/<VARIABLE>` (suscripción global: `AQM/PTEF/#`)

## 2. Niveles de la pirámide de automatización

| Nivel | Nombre | En este TPI |
|---|---|---|
| Nivel 0 | Campo (instrumentación: sensores y actuadores) | 13 variables medidas directamente por instrumento |
| Nivel 1 | Control (PLC / DCS) | `ESTADO` (comando/estado lógico) y `EFICIENCIA` (variable calculada en el control) |
| Nivel 2 | SCADA / HMI | Node-RED (orquestación e ingesta) |
| Nivel 3 | MES / Operaciones | QuestDB + KPIs + reportes |
| Nivel 4 | ERP / Negocio | Grafana (tableros de gestión) + modelo de negocio SaaS |

## 3. Catálogo completo de las 15 variables

| # | Equipo | Área | Variable | Tag ISA-95 plano | Nivel | Unidad | Rango normal | Warning | Critical |
|---|---|---|---|---|---|---|---|---|---|
| 1 | EQ01 | CAPT | CAUDAL | `AQM-PTEF-CAPT-EQ01-CAUDAL` | 0 | m³/h | 95 – 150 | <90 ó >155 | <70 ó >175 |
| 2 | EQ01 | CAPT | PRESION | `AQM-PTEF-CAPT-EQ01-PRESION` | 0 | bar | 3.8 – 5.2 | <3.5 ó >5.5 | <2.5 ó >6.5 |
| 3 | EQ01 | CAPT | CORRIENTE | `AQM-PTEF-CAPT-EQ01-CORRIENTE` | 0 | A | 38 – 52 | >55 | >65 |
| 4 | EQ01 | CAPT | VIBRACION | `AQM-PTEF-CAPT-EQ01-VIBRACION` | 0 | mm/s | 0.5 – 4.5 | >4.5 | >7.1 |
| 5 | EQ01 | CAPT | ESTADO | `AQM-PTEF-CAPT-EQ01-ESTADO` | 1 | bool | 1 (en marcha) | — | =0 (parada imprevista) |
| 6 | EQ02 | FILT | TURB_IN | `AQM-PTEF-FILT-EQ02-TURB_IN` | 0 | NTU | 3 – 15 | >15 | >25 |
| 7 | EQ02 | FILT | TURB_OUT | `AQM-PTEF-FILT-EQ02-TURB_OUT` | 0 | NTU | 0.2 – 1.5 | >1.5 | >2.0 |
| 8 | EQ02 | FILT | PRES_DIF | `AQM-PTEF-FILT-EQ02-PRES_DIF` | 0 | mbar | 150 – 600 | >600 | >800 |
| 9 | EQ02 | FILT | CAUDAL_FILT | `AQM-PTEF-FILT-EQ02-CAUDAL_FILT` | 0 | m³/h | 90 – 140 | <90 | <70 |
| 10 | EQ02 | FILT | EFICIENCIA | `AQM-PTEF-FILT-EQ02-EFICIENCIA` | 1 | % | 80 – 99 | <80 | <70 |
| 11 | EQ03 | REAC | PH | `AQM-PTEF-REAC-EQ03-PH` | 0 | pH | 6.8 – 7.6 | <6.5 ó >8.0 | <6.0 ó >8.5 |
| 12 | EQ03 | REAC | OD | `AQM-PTEF-REAC-EQ03-OD` | 0 | mg/L | 1.8 – 3.5 | <1.5 ó >4.0 | <1.0 ó >5.0 |
| 13 | EQ03 | REAC | TEMP | `AQM-PTEF-REAC-EQ03-TEMP` | 0 | °C | 16 – 28 | <15 ó >30 | <10 ó >35 |
| 14 | EQ03 | REAC | CONDUCT | `AQM-PTEF-REAC-EQ03-CONDUCT` | 0 | µS/cm | 800 – 1800 | >1800 | >2200 |
| 15 | EQ03 | REAC | NIVEL | `AQM-PTEF-REAC-EQ03-NIVEL` | 0 | % | 45 – 88 | <40 ó >90 | <20 ó >95 |

> Los umbrales están codificados en [`simulador/config.py`](../simulador/config.py) (`EQUIPOS[...]["variables"]`) y replicados en el flow [`nodered/flows/03_alertas.json`](../nodered/flows/03_alertas.json). Cualquier cambio debe hacerse en ambos lugares.

## 4. Calidad del dato (`quality`)

| Código | Significado | Criterio en el simulador |
|---|---|---|
| 2 | GOOD | Valor dentro de tolerancia física plausible |
| 1 | UNCERTAIN | Valor entre 50 % y 150 % fuera del rango de operación |
| 0 | BAD | Valor físicamente inverosímil (sensor en falla) |

## 5. Estructura del payload MQTT

```json
{
  "tag": "AQM-PTEF-CAPT-EQ01-CAUDAL",
  "value": 118.42,
  "ts": 1717171717123,
  "equipo": "EQ01",
  "unit": "m3/h",
  "quality": 2
}
```

Node-RED (flow 01) enriquece este payload con `planta`, `area`, `variable` y una
`firma` (hash djb2 del payload original) antes de escribir en `raw_variables`.
