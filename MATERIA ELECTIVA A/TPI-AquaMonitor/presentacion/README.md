# Presentación del TPI — AquaMonitor

Guion sugerido para la defensa (15–20 min + demo).

---

## 1. Apertura (2 min)

- **Problema:** las PyMEs industriales operan plantas de tratamiento de aguas sin
  monitoreo continuo; las fallas (bomba, filtro colmatado, pH fuera de norma) se
  detectan tarde → multas ambientales y paradas no programadas.
- **Solución:** AquaMonitor, cadena de datos IIoT end-to-end sobre norma ISA-95,
  desplegable sobre servicios gratuitos/low-cost.

## 2. Arquitectura (3 min)

Mostrar el diagrama del [`README.md`](../README.md) y recorrer las 5 capas:

1. **Campo (simulado):** 3 equipos, 15 variables, `simulador/`.
2. **Transporte:** MQTT sobre TLS (EMQX Cloud), topics `AQM/PTEF/#`.
3. **Orquestación:** Node-RED, 4 flows.
4. **Histórico:** QuestDB Cloud, 3 tablas particionadas por día con WAL.
5. **Negocio:** Grafana Cloud, 3 dashboards + modelo SaaS.

Enfatizar el **mapeo a la pirámide de automatización** (Nivel 0 a Nivel 4).

## 3. Modelo de datos ISA-95 (2 min)

- Tag plano `AQM-PTEF-<AREA>-<EQ>-<VARIABLE>` y su equivalente jerárquico.
- Tabla de las 15 variables con unidades y umbrales
  ([`docs/jerarquia_ISA95.md`](../docs/jerarquia_ISA95.md)).
- Payload MQTT y campo `quality` (0/1/2).

## 4. Demo en vivo (6 min)

```bash
# 1) Simulador en régimen normal
python -m simulador.simulator --interval 15

# 2) Mostrar en Grafana el dashboard "Operativo Tiempo Real"
#    (caudal, pH, OD, turbidez, estado de bomba)

# 3) Inyectar una anomalía crítica de vibración
#    (Ctrl+C y relanzar, o segunda instancia)
python -m simulador.simulator --interval 15 --inject VIB_HIGH --at 2

# 4) En Node-RED: ver el flow 03_alertas disparando la alerta critical
#    -> email + fila en la tabla events

# 5) Correr el análisis batch
cd analisis
python anomaly_detection.py    # detecta el pico por Z-score, lo inserta en events
python trend_analysis.py       # "VIBRACION EQ01 en tendencia ascendente..."
python correlation_matrix.py   # matriz de Pearson -> outputs/correlaciones.csv

# 6) Grafana dashboard "Análisis Avanzado": banda de Bollinger + tabla de anomalías
```

## 5. Analítica (3 min)

- **KPIs** (2 por equipo, 4 granularidades): mostrar `kpi_hourly.sql` y el
  dashboard *KPIs Temporales* con la variable `$period`.
- **Detección de anomalías:** Z-score (ventana 20, 3σ) y Bollinger (2σ).
  Justificar la ventana y el umbral
  ([`docs/metodologia_anomalias.md`](../docs/metodologia_anomalias.md)).
- **Tendencia:** regresión lineal a 24 h → mantenimiento predictivo.
- **Correlación:** caudal↔corriente (curva de bomba), pH↔OD (proceso biológico),
  presión diferencial↔eficiencia (colmatación).

## 6. Modelo de negocio (2 min)

Canvas resumido ([`docs/modelo_negocio_canvas.md`](../docs/modelo_negocio_canvas.md)):
SaaS por equipo monitorizado (USD 25 / 45 / 70 por equipo/mes), márgenes > 75 %,
alianzas con integradores de automatización.

## 7. Cierre (1 min)

- Qué se logró: cadena completa, reproducible, documentada, sobre free tiers.
- Próximos pasos: conectores OPC-UA/Modbus reales, alertas por webhook, modelos
  ML de RUL (vida útil remanente) para bombas.

---

## Checklist previo a la defensa

- [ ] `.env` completo con credenciales reales de EMQX, QuestDB y SMTP.
- [ ] `python -m simulador.simulator --dry-run --once` corre sin errores.
- [ ] Esquema creado en QuestDB (`SELECT count(*) FROM raw_variables;` responde).
- [ ] Los 4 flows importados y **deployados** en Node-RED, con credenciales.
- [ ] Datasource PostgreSQL de Grafana apuntando a QuestDB (test OK).
- [ ] Los 3 dashboards importados y mostrando datos.
- [ ] Al menos 1 h de datos históricos para que los KPIs y las bandas tengan sentido.
- [ ] Prueba de email (alerta y reporte) recibida en la casilla configurada.
