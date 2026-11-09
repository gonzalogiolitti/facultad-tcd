# Presentación del TPI — AquaMonitor

Guion para la defensa oral (≈ 15 a 20 minutos, con demo en vivo) y checklist.
Stack: **Node-RED + InfluxDB Cloud + Grafana Cloud + mail (Gmail)**, el de la cátedra. Lo anterior (simulador de Python, MQTT, QuestDB, Docker) quedó como respaldo y no se presenta.

---

## 1. Apertura (2 min)

- **Problema:** muchas plantas de tratamiento de aguas industriales no tienen monitoreo continuo. Las fallas (una bomba que vibra, un filtro que se tapa, un pH fuera de norma) se descubren tarde y terminan en paradas no programadas o multas ambientales.
- **Qué hace el sistema:** historiza las variables de la planta, calcula indicadores por hora, turno, día y semana, avisa por mail cuando hay una falla y muestra todo en un tablero.
- **Qué decir:** "El trabajo cumple la consigna: 3 equipos con 5 variables cada uno, mediciones cada 2 minutos, 2 indicadores por equipo en cuatro períodos, un tablero, aviso por mail y una metodología de análisis."

## 2. Arquitectura (3 min)

Mostrar el diagrama del [`README.md`](../README.md) (sección 2) y las 8 pestañas de Node-RED (<http://localhost:1880>).

1. **Campo (simulado):** Node-RED genera los 15 valores de los 3 equipos cada 2 minutos, con ruido realista y fallas que se pueden provocar.
2. **Orquestación:** Node-RED también calcula los indicadores, detecta las fallas y arma los mails.
3. **Histórico:** InfluxDB Cloud guarda tres tipos de datos: mediciones, indicadores y eventos.
4. **Visualización:** Grafana Cloud consulta con SQL y se actualiza cada 5 segundos.
5. **Qué decir:** "Se eligió separar quién escribe de quién lee: Node-RED escribe, Grafana consulta. Así el tablero no puede romper la adquisición de datos."
   Mapeo ISA-95: instrumentación (niveles 0-1) → Node-RED (2) → InfluxDB (3) → Grafana (4).

## 3. Modelo de datos (2 min)

- Jerarquía ISA-95: empresa `AQM` → planta `PTEF` → área → equipo → variable. Ejemplo de tag: `AQM-PTEF-CAPT-EQ01-CAUDAL`.
- Las 15 variables con unidades y umbrales: [`docs/jerarquia_ISA95.md`](../docs/jerarquia_ISA95.md). Están en **un solo archivo** (`nodered/userdir/aqm/catalogo.js`) que leen el generador, las alertas y el tablero.
- Tres measurements en InfluxDB: `raw_variables`, `kpi_values`, `events`.
- **Qué decir:** "Se guardó la hora en UTC, como hace InfluxDB, y el tablero la muestra en hora de Argentina. Los períodos (turno, día, semana) también se calculan en hora argentina."

## 4. Demo en vivo (7 a 8 min)

### Antes de empezar (preparación, ver checklist)
Sistema andando desde el día anterior con `bash scripts/corrida_continua.sh --con-mails` (historial real de varias horas), y los mails **sin marca** `[PRUEBA]` (botón *Mails SIN marca (presentación)*, pestaña 03).

### Paso a paso

| # | Qué se hace | Qué hace el sistema | Qué decir |
|---|---|---|---|
| 1 | Mostrar el tablero de Grafana (zona horaria de Argentina, refresco 5 s). Señalar *Última medición* y *Antigüedad del dato* | Muestra la última medición y cuántos segundos pasaron | "En modo normal se mide cada 2 minutos, como pide la consigna. Por eso el dato cambia cada 2 minutos." |
| 2 | Node-RED, pestaña **01 Generador**: botón **Modo DEMO (15 s)** | Pasa a medir cada 15 segundos | "El modo demo es solo para mostrar el sistema en vivo; no es el modo de operación." |
| 3 | Bajar a *Sensores en vivo*: tres franjas de colores (bomba, filtro, reactor) | Cada sensor se pinta de verde, naranja o rojo según los umbrales del catálogo | "Verde es operación normal, naranja advertencia y rojo crítico." |
| 4 | Pestaña **01 Generador**: botón **Falla PARADA_BOMBA** (o *VIB_HIGH*) | Registra la falla provocada y mide al instante | "Se simula una parada imprevista de la bomba." |
| 5 | Volver a Grafana: caudal, presión y corriente caen a ~0; *Estado de la bomba* pasa a PARADA; sube *Fallas últimas 12 h* | El detector ve que `ESTADO < 0,5`, guarda el evento `BOMBA_FALLA` y manda **un solo mail** | "Se avisa una sola vez por falla, no una vez por cada medición." |
| 6 | Mostrar el mail recibido y la tabla de *Eventos* | El evento quedó con motivo y valor | "Cada falla queda registrada con su motivo, valor y hora." |
| 7 | Esperar (≈ 3 min en las pruebas) a que la bomba arranque de nuevo | Tras 60 s seguidos en normal, guarda `BOMBA_NORMALIZADA` y manda el segundo mail | "Cuando la bomba lleva un minuto estable se da la falla por terminada y se avisa." |
| 8 | Pestaña **03**: botón *Probar mail de falla [PRUEBA]* (opcional, si falla el mail real) | Manda un mail de prueba que no escribe en la base | — |

Mientras se espera el paso 7, mostrar los indicadores y el análisis (sección 5).

> **Tiempos medidos hoy (modo demo):** `PARADA_BOMBA` tardó ≈ 3 min entre el aviso de falla y el de normalización; `VIB_HIGH`, ≈ 3,5 min. Conviene provocar la falla temprano y hablar mientras tanto.

### Si algo falla durante la demo (plan B)
- **No llega el mail:** mostrar el evento en la tabla de *Eventos* del tablero (la falla igual quedó registrada) y el botón de prueba; revisar `nodered.log`. Es probable que los mails estén silenciados: botón *ACTIVAR mails*.
- **Grafana sin datos:** mirar *Antigüedad del dato*; si es grande, el generador está pausado o apagado (botón *Reanudar generador* o `bash scripts/corrida_continua.sh`).
- **Node-RED no abre:** `bash scripts/arrancar.sh` y esperar unos 10 segundos.

## 5. Indicadores y análisis (4 min)

- **Indicadores (2 por equipo):** selector *Período de los indicadores* (hora, turno, día, semana). Explicar los 6:
  eficiencia energética y disponibilidad de la bomba; eficiencia de filtración y presión diferencial media del filtro; tiempo con pH fuera de rango y desvío del pH.
  Turnos: T1 06-14, T2 14-22, T3 22-06 (hora argentina).
  *Qué decir:* "Cada período se guarda una sola vez, cuando cierra. El período en curso se calcula directamente con SQL sobre las mediciones. Se eligió así porque InfluxDB puede devolver una versión vieja de una fila reescrita."
- **Tendencia:** media móvil de la vibración y de la presión diferencial; tabla de pendientes. *"La presión diferencial sube a medida que el filtro se tapa: la tendencia anticipa el retrolavado."*
- **Anomalías:** gráfico con bandas de ±3 desvíos y tabla de anomalías. *"Cada valor se compara con las 20 muestras anteriores; si se aleja más de 3 desvíos se marca. La parada de la bomba aparece con un z-score de −50."*
- **Correlación:** tabla de r de Pearson. *"Caudal y corriente de la bomba tienen r ≈ 0,99: a más caudal, más corriente."*
Detalle en [`docs/metodologia_anomalias.md`](../docs/metodologia_anomalias.md).

## 6. Modelo de negocio (2 min)

Canvas resumido ([`docs/modelo_negocio_canvas.md`](../docs/modelo_negocio_canvas.md)): servicio por equipo monitoreado, despliegue rápido con servicios en la nube de plan gratuito o de bajo costo, alianzas con integradores de automatización.

## 7. Cierre (1 min)

- **Qué se logró:** cadena completa (generación → historización → indicadores → avisos → tablero → análisis), con pruebas automáticas de la lógica y verificación contra la base real.
- **Limitaciones (decirlas):** los datos son simulados; el tablero depende del plan gratuito de las herramientas; si la PC se suspende hay huecos en el historial.
- **Próximos pasos:** conectar equipos reales (OPC-UA/Modbus), alertas por otros canales, modelos de vida útil remanente para las bombas.

---

## Checklist previo a la defensa

**El día anterior**
- [ ] PC con Node.js ≥ 22.9, repositorio en la rama `stack-catedra`, `npm install` hecho en `nodered/userdir`.
- [ ] `.env` completo (se verifica sin mostrar valores: que `bash scripts/arrancar.sh` arranque y el botón de prueba de la pestaña 00 devuelva `204`).
- [ ] `node pruebas/probar.js` → "todo OK".
- [ ] `bash scripts/corrida_continua.sh --con-mails` arrancado **al menos 12 horas antes**, PC sin suspensión (configuración de energía en "nunca suspender").
- [ ] Una sola computadora generando contra el bucket (la otra, apagada o detenida con `bash scripts/parar.sh`).
- [ ] Dashboard importado en Grafana Cloud y mostrando datos; zona horaria Argentina; refresco 5 s.
- [ ] Mail de prueba recibido (botón *Probar mail de falla [PRUEBA]*) y bandeja a la vista.
- [ ] Botón *Mails SIN marca (presentación)* apretado y *ACTIVAR mails* si estaban silenciados.

**Justo antes**
- [ ] Panel *Antigüedad del dato* en verde (menos de ~2,5 minutos en modo normal).
- [ ] Panel *Fallas de la bomba en las últimas 12 h* con un número mayor que 0 (historial real de la corrida continua).
- [ ] Pestañas de Node-RED y de Grafana abiertas; ensayo del paso 4 de la demo.
- [ ] Plan B conocido (sección 4).

**Después**
- [ ] Revocar el token de InfluxDB y la contraseña de aplicación de Gmail ([`docs/migracion_otra_pc.md`](../docs/migracion_otra_pc.md), sección 5).
