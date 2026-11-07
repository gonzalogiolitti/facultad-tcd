# PROGRESO — TPI AquaMonitor (rama `stack-catedra`)

Registro de lo que se hizo, cómo se probó y qué falta. No contiene secretos.
Stack de la cátedra: **Node-RED (npm, local) → InfluxDB Cloud (SQL) → Grafana Cloud + mail (Gmail)**.
Lo anterior (simulador de Python, EMQX/MQTT, QuestDB, Docker, Telegram) quedó como **respaldo**, sin borrar.

Última actualización: 07/11/2026 (≈ 20:45, hora Argentina). Presentación: 12/11/2026.

## Estado de las fases

| Fase | Estado | Resumen |
|---|---|---|
| 0. Auditoría y plan | hecho | aprobada |
| 1. Entorno | hecho | aprobada (SELECT y mail verificados por el usuario) |
| 2. Generador de datos | **hecho** | 15 variables, 5 fallas provocables, modo normal 120 s / demo 15 s |
| 3. Indicadores (KPIs) | **hecho con reservas** | cambió una decisión de diseño aprobada (ver abajo) y falta ver cerrar turno/día/semana reales |
| 4. Avisos por mail y eventos | **hecho con reservas** | los 9 mails los tenés que confirmar vos; el reporte de las 06:00 todavía no corrió solo |
| 5. Análisis en SQL | **hecho** | tendencia, anomalías y correlación con datos reales |
| 6. Tablero de Grafana | **hecho con reservas** | JSON generado y 32 consultas probadas; **la importación en Grafana no se pudo probar** |
| 7. Documentación y prueba desde cero | **hecho con reservas** | prueba desde cero hecha en WSL; Windows nativo sin probar |

## ⚠️ Decisión de diseño que cambió respecto de lo aprobado (leer primero)

**Qué se había aprobado:** calcular los KPIs en Node-RED y *reescribir la misma fila* del período en curso hasta que cierre ("una sola fila por período, sobrescribiendo la misma clave").
**Qué se encontró:** en InfluxDB Cloud, escribir varias veces la misma clave (mismo `measurement + tags + time`) *sí* deja la última versión (se probó aislado), **pero al leer datos recién reescritos el motor puede devolver una versión vieja**, y la devuelve de forma intermitente. Medición real: la misma consulta repetida 8 veces devolvió `(5 muestras, abierto)` y `(7 muestras, cerrado)` para la misma fila. Una hora ya cerrada seguía devolviendo versiones viejas 10 minutos después de cerrar. Un campo `version` no sirve: el motor elimina las repetidas *antes* de que el SQL las vea.
**Qué se hizo (variante mínima, dentro del "Plan B" que aprobaste):**
1. Node-RED sigue calculando los 6 KPIs con acumuladores en memoria guardados en disco, pero **escribe cada período una sola vez, cuando cierra** (cero filas repetidas → lectura determinista).
2. El **período en curso** (lo que se mostraba "en vivo") lo calcula el **tablero con SQL** sobre `raw_variables` (`date_bin`), que es el Plan B aprobado.
3. Esto está probado: el SQL y Node-RED dan **los mismos valores** (cruce de 24/24, ver Fase 3).
**Cómo explicarlo:** "InfluxDB no garantiza que una fila reescrita se lea siempre con su última versión. Por eso cada indicador se escribe una sola vez, al cerrar el período; mientras el período está abierto se calcula con una consulta SQL sobre las mediciones."
Si preferís volver al diseño original o pasar todo a SQL, decímelo; los cambios están acotados a `nodered/src/funciones/kpi_calcular.js` y a los paneles de indicadores.

## Herramientas de verificación (sin mostrar secretos)

- `herramientas/consulta_sql.py`: SQL contra InfluxDB (Flight SQL) con el token de `.env`. `.venv/bin/python herramientas/consulta_sql.py "SELECT ..."`. `.venv/` está dentro del proyecto (ignorado por git). Se eligió la opción (a) pedida: **funcionó**, no hizo falta DBRP/InfluxQL.
- `herramientas/construir_dashboard.py --probar N`: regenera el dashboard y **ejecuta cada consulta contra la base real**.
- `herramientas/cruzar_kpis.py`: cruza los KPIs de Node-RED contra un recálculo independiente sobre `raw_variables`.
- `nodered/pruebas/probar.js`: 56 pruebas de la lógica con reloj simulado (sin red): generador, KPIs en 9 días simulados, bomba, EQ02/EQ03, reporte, interruptores.

## Hallazgos técnicos que conviene saber (comprobados contra la base real)

- `AT TIME ZONE 'America/Argentina/Buenos_Aires'` **no convierte** en InfluxDB 3 (devolvió la misma hora UTC). Argentina es UTC−3 sin horario de verano: la hora argentina en SQL es `time - INTERVAL '3 hours'`. Funciones SQL verificadas: `date_bin` (con origen 03:00 UTC = medianoche argentina), `stddev`, `corr`, `regr_slope`, ventanas (`avg() OVER`, `WINDOW w AS (...)`), `last_value(x ORDER BY y)`, `to_char`, `date_part('epoch', ...)`, `now() - INTERVAL`.
- InfluxDB fija el tipo de cada columna con la primera escritura (`value` decimal, `quality` entero): no se pueden mezclar.
- Un bug propio, encontrado por las pruebas y corregido: el generador podía escribir un ciclo cada 5 s si la regla de "llegué tarde" se evaluaba antes de chequear el tramo. Se alcanzó a escribir durante ≈ 1 minuto (**4 ciclos fuera de grilla**, 19:57 ART). Ver "Datos de desarrollo en la base".

---

## Fase 2 — Generador de datos (hecho)

**Qué se hizo:** Node-RED genera cada 120 s (modo normal) o 15 s (modo demo) las 15 variables de los 3 equipos, port fiel de `simulador/models/*.py` (mismas fórmulas, ruido, calidad 0/1/2). Catálogo en un solo archivo (`nodered/userdir/aqm/catalogo.js`). Botones: modo normal/demo, pausar/reanudar, fallas aleatorias on/off, y las 5 fallas (`VIB_HIGH`, `CAUDAL_DROP`, `PARADA_BOMBA`, `PH_SPIKE`, `FILTER_SAT`). `PARADA_BOMBA` es nueva (el simulador de Python no tenía una parada propia). Cada falla provocada se registra en `events` (`ANOMALIA_INYECTADA`).

**Qué se probó de verdad:**
- Corrida limpia desde 19:58:09 ART: 5 ciclos exactos de 120 s (19:58, 20:00, 20:02, 20:04, 20:06), **15 variables × 5 filas = 75 filas**, calidad mínima 2, valores dentro de los rangos del catálogo.
- Cada falla provocada una vez, comparada con la operación normal (promedio / máximo):

| Falla | Variable | Normal | Durante la falla |
|---|---|---|---|
| `VIB_HIGH` | vibración (mm/s) | 2,70 – 3,34 | 7,47 – 10,93 (crítico > 7,1; llega a calidad 1 y 0) |
| `PH_SPIKE` | pH | 7,20 – 7,53 | 5,48 – 9,20 (alterna lado ácido y alcalino) |
| `FILTER_SAT` | presión diferencial (mbar) | 361 – 396 | 574 – 817 (advertencia > 600, crítico > 800) |
| `FILTER_SAT` | turbidez de salida (NTU) | 0,83 – 0,94 | 1,24 – 2,05 |
| `PARADA_BOMBA` | caudal (m³/h) / `ESTADO` | 114 – 119 / 1 | ≈ 0 / 0 durante 8 ciclos |
| `CAUDAL_DROP` | caudal / corriente | 114 – 119 / 43 – 45 | en esta corrida la protección paró la bomba en el primer ciclo (10 % por ciclo, igual que el simulador original): caudal ≈ 0,3, corriente ≈ 0,3, `ESTADO` = 0 |

**Qué NO se probó:** el generador no corrió "varias horas seguidas" todavía (solo ≈ 1 hora acumulada con interrupciones). Que la PC se suspenda y deje huecos no se simuló.
**Cómo explicarlo:** "Node-RED simula los 3 equipos con las mismas fórmulas del simulador anterior: un valor nominal, una oscilación lenta y ruido. Si una variable se sale del rango, se le asigna calidad 1 o 0. Las fallas son interruptores que cambian las fórmulas durante algunas mediciones. Todo sale del catálogo, que es un solo archivo."

## Fase 3 — Indicadores (hecho con reservas)

**Qué se hizo:** 6 KPIs (2 por equipo) en hora, turno, día y semana, calculados en hora Argentina (turnos T1 06-14, T2 14-22, T3 22-06, documentados en `docs/planificacion.md` sección 5b). Fórmulas y unidades: README sección 9. Marca de tiempo = inicio del período en UTC. Ver la decisión de diseño de arriba.

**Qué se probó de verdad:**
- Pruebas con reloj simulado: 9 días seguidos (6.480 ciclos): ninguna clave repetida en toda la corrida; 215 horas, 27 turnos, 8 días y 1 semana cerrados; fórmulas coinciden con un cálculo independiente (hora, turno y día); un reinicio a mitad de período recupera el estado y cierra con todas las muestras.
- **Cálculo forzado de prueba con datos reales** (botón *Calcular KPIs de PRUEBA ahora*, escribe en `kpi_values_prueba`, **no** en `kpi_values`): las 24 combinaciones (6 KPIs × 4 períodos) de Node-RED **coinciden con un recálculo independiente** sobre `raw_variables` (`herramientas/cruzar_kpis.py`, corrida `1794094348867`). Ejemplo, turno T2: eficiencia energética 2,6174; disponibilidad 79,55 %; eficiencia de filtración 86,404 %; presión diferencial media 627,72 mbar; desvío del pH 0,1124.
- **Persistencia en disco:** tras varios reinicios (incluido uno ordenado medido a propósito), el turno abierto tiene **88 ciclos en la base y 88 muestras acumuladas** (diferencia 0).
- El SQL del período en curso (tablero) coincide con Python en los 6 KPIs.

**Qué NO se probó:** no se vio cerrar un período **real** en `kpi_values` (el primero cierra a las 21:00 ART; hay 0 filas cerradas hoy). El cierre de turno/día/semana solo se probó con reloj simulado. Cuando pase un rato: `SELECT periodo, equipo, kpi, to_char(time - INTERVAL '3 hours', '%d/%m %H:%M') AS inicio_ART, value, muestras FROM kpi_values WHERE cerrado = true ORDER BY time DESC LIMIT 12`.
**Cómo explicarlo:** "Node-RED va sumando las mediciones buenas de cada período abierto. Cuando el período termina (la hora, el turno, el día o la semana), calcula los dos indicadores de cada equipo y los guarda una sola vez. Las cuentas de turnos y días se hacen en hora argentina."

## Fase 4 — Avisos por mail y eventos (hecho con reservas)

**Qué se hizo:** alerta de la bomba (un mail por falla, otro al normalizar, rearme 60 s, `ESTADO < 0,5`, calidad 0 descartada); alertas de EQ02/EQ03 con anti-spam (**un mail por equipo cada `ALERTA_COOLDOWN_S`**, en demo 60 s; el cooldown *no* afecta a la bomba); reporte diario a las 06:00; botón de prueba `[PRUEBA]` que no escribe en la base; interruptores *marca [PRUEBA]* y *silenciar mails*; reintento ante errores de red del mail. Hora de los mails en **24 h hora Argentina** (`07/11/2026 17:05:22`). Telegram eliminado.

**Qué se probó de verdad (corrida en vivo, modo demo):**
- `VIB_HIGH`: `BOMBA_FALLA` a las 20:14:55 (motivo VIBRACION, valor 7,475), `BOMBA_NORMALIZADA` a las 20:18:30 (155 s).
- `PARADA_BOMBA` (segunda falla seguida): `BOMBA_FALLA` 20:18:45 (motivo CAUDAL, con presión y `ESTADO` en el detalle), `BOMBA_NORMALIZADA` 20:21:45 (120 s). **Dos fallas seguidas → dos mails.**
- `CAUDAL_DROP`: falla 20:23:18, normalizada 20:26:45 (con los mails silenciados a propósito).
- `PH_SPIKE`: un `UMBRAL_CRITICO` con el pH alternando 5,8 / 9,0 / 5,5: **un solo mail**, no uno por muestra.
- Los eventos están en `events` con motivo y valor (consultas: `SELECT ... FROM events WHERE event_type IN ('BOMBA_FALLA','BOMBA_NORMALIZADA') ORDER BY time`).
- Aceptan calidad 1 y 2: en `VIB_HIGH` la vibración salió con calidad 1 y disparó.
- Hora en 24 h: probada en pruebas automáticas y con el mail real.

**Cambio hecho por lo que se vio en vivo:** el cooldown era *por variable* y el filtro mandó 2 mails por el mismo incidente (turbidez a las 20:19:18 y presión a las 20:19:33). Se pasó a **un mail por equipo por ventana de cooldown**; probado con una prueba automática. Esos 2 mails existen igual en tu bandeja.

**Mails de prueba enviados: 9 de 10** (los que tenés que revisar en la bandeja, hora Argentina):
1. 17:05 mail de la Fase 1.
2. 20:14:58 `[PRUEBA] FALLA: Bomba de ingreso EQ01` (vibración).
3. 20:14:59 `[PRUEBA] ALERTA CRÍTICA: EQ03 - PH`.
4. 20:18:33 `[PRUEBA] NORMALIZADA: Bomba de ingreso EQ01`.
5. 20:18:48 `[PRUEBA] FALLA: Bomba de ingreso EQ01` (parada).
6. 20:19:18 `[PRUEBA] ALERTA CRÍTICA: EQ02 - TURB_OUT`.
7. 20:19:33 `[PRUEBA] ALERTA CRÍTICA: EQ02 - PRES_DIF`.
8. 20:21:49 `[PRUEBA] NORMALIZADA: Bomba de ingreso EQ01`.
9. 20:27:51 `[PRUEBA] Reporte diario AquaMonitor` (reporte de prueba con el día en curso).
El log de Node-RED confirmó `250 2.0.0 OK` de Gmail en los 8 de esta tanda; **la llegada a la bandeja la confirmás vos**. El ENETUNREACH por IPv6 **no reapareció**; igual está el reintento automático (hasta 2 veces).

**Qué NO se probó:** el reporte de las **06:00 automático** (solo el botón de prueba); mail con el modo *sin marca [PRUEBA]* en vivo (sí en pruebas automáticas); que Gmail no bloquee la cuenta con más volumen.
**Cómo explicarlo:** "El detector mira las 5 variables de la bomba en cada medición. Si alguna pasa un límite crítico y antes estaba normal, avisa una vez. Cuando lleva un minuto estable, avisa que se normalizó. Cada aviso queda guardado como evento. Para el filtro y el reactor se evita el spam: un mail por equipo cada 30 minutos."

## Fase 5 — Análisis en SQL (hecho)

**Qué se hizo:** tres métodos con consultas de InfluxDB (también son paneles del tablero): **tendencia** (media móvil de 10 muestras y pendiente `regr_slope` por hora), **anomalías** (Z-score con las 20 muestras anteriores, |z| > 3, bandas ±3σ) y **correlación** (`corr`, r de Pearson, 8 pares de variables).
**Qué se probó de verdad (datos reales, rango de 2 h con fallas provocadas):**
- Anomalías: 28 puntos marcados; la parada de la bomba aparece con z ≈ −54 a −60 (caudal, corriente, presión); el pH forzado con z ≈ −3,9; hubo también algunos puntos normales marcados (p. ej. pH 7,028, z = −3,1): son los falsos positivos esperables de una ventana corta.
- Correlación: caudal–corriente r = 0,999; caudal–presión 0,998; caudal–vibración 0,646; presión diferencial–eficiencia −0,49; pH–OD 0,109.
- Tendencia: con fallas en el rango, las pendientes salen grandes (por ejemplo, la presión diferencial sube 126 %/h); en operación normal el filtro muestra la subida lenta por colmatación.
**Qué NO se probó:** una ventana de varias horas en operación normal; calidad de los umbrales (3σ, ventana 20) con datos reales de planta (los datos son simulados).
**Cómo explicarlo:** ver `docs/metodologia_anomalias.md`, sección 0 (explicación simple de cada método).

## Fase 6 — Tablero de Grafana Cloud (hecho con reservas)

**Qué se hizo:** `grafana/aquamonitor_dashboard.json` (37 paneles), generado por `herramientas/construir_dashboard.py`; fuente `influxdb` (UID `fg3ly9z1iz668b`), zona horaria `America/Argentina/Buenos_Aires`, refresco 5 s, selector *Período de los indicadores*. Contenido: estado general; sensores en vivo de los 3 equipos (colores por umbrales del catálogo); indicadores (período en curso por SQL y último cerrado); fallas de la bomba (últimas 12 h, rango, por hora, por motivo, última falla, tabla de eventos); análisis.
**Qué se probó de verdad:** **las 32 consultas SQL ejecutadas contra la base real: 0 con error** (`--probar 6`, última corrida con 98 puntos de datos). La hora de los textos usa `time - INTERVAL '3 hours'`.
**Qué NO se probó (importante):** no tengo acceso a tu Grafana. **No se verificó** que (1) el import acepte el JSON tal cual; (2) el modelo de consulta del plugin de InfluxDB (SQL) reconozca los campos `query`/`rawQuery`/`resultFormat` (se incluyeron también `rawSql`/`format` por compatibilidad); (3) el macro `$__timeFilter(time)` esté soportado en tu versión; (4) el panel de dispersión (`xychart`) y los colores se vean como se espera. Si un panel sale con error: *Edit* → pegar la consulta del panel en el editor SQL; las consultas son SQL estándar de InfluxDB 3.
**Qué te toca:** importarlo (README sección 11) y avisar qué panel falla.

## Fase 7 — Documentación y prueba desde cero (hecho con reservas)

**Qué se hizo:** `README.md` nuevo (guía única), `docs/migracion_otra_pc.md`, `presentacion/README.md` (guion, demo paso a paso, plan B, checklist), `docs/planificacion.md`, `docs/jerarquia_ISA95.md`, `docs/metodologia_anomalias.md`, `docs/modelo_negocio_canvas.md` actualizados, y el README viejo conservado en `docs/respaldo_stack_anterior.md`. Scripts: `arrancar.sh`, `parar.sh` (por PID, sin `pkill`), `corrida_continua.sh`, `arrancar.ps1`. El `.gitignore` deja versionados flows, scripts, dashboards y docs, y deja afuera `.env`, `*_cred.json`, `context/`, `node_modules/`, `.venv/`.
**Qué se probó de verdad:** copia limpia (`git archive` de la rama, 80 archivos) siguiendo el README: `npm install` (277 paquetes, mismas versiones), pruebas 56/56, arranque (con el generador pausado y en otro puerto, por seguridad), 8 pestañas cargadas, `flows_cred.json` creado solo desde la plantilla, escritura de prueba a InfluxDB `204`, `parar.sh`. Los scripts `corrida_continua.sh` / `parar.sh` / doble arranque también probados.
**Problemas que mostró esa prueba (ya corregidos):** (1) en una PC nueva el nodo de mail arrancaría sin usuario ni contraseña (`flows_cred.json` está ignorado): se agregó la plantilla `flows_cred.plantilla.json` y `arrancar.sh` la copia; (2) el README no decía cómo conseguir el código: se agregó; (3) `parar.sh` rechazaba el PID correcto porque Node-RED cambia el título del proceso a `node-red`: corregido.
**Qué NO se probó:** Windows nativo (`arrancar.ps1`); el mail desde la copia limpia (la credencial es idéntica a la ya probada); la migración real a la PC del compañero.

---

## Datos de desarrollo que quedaron en la base (no se borró nada)

- `prueba_conexion`: tuya, queda como está.
- `prueba_sobrescritura`: 2 filas de la prueba aislada de sobreescritura.
- `kpi_values_prueba`: ≈ 48 filas de las dos corridas de *KPIs de prueba* (no se usan en el tablero).
- `raw_variables`: 4 ciclos de más a las 19:57 ART (marcas fuera de grilla, por el bug ya corregido) y un ciclo a las 19:54 ART adelantado al arranque; más las fallas provocadas de hoy. Son datos simulados.
- `kpi_values`: algunas filas de la etapa con reescritura (hora 22:00 UTC y períodos abiertos), con versiones mezcladas. Las consultas del tablero filtran `cerrado = true`, pero la hora 22:00 UTC de hoy puede aparecer con valores parciales. Se pueden ignorar o borrar desde InfluxDB si querés el historial limpio.
- `events`: eventos de las fallas de hoy (también simuladas).

## Lo que queda corriendo ahora

Una instancia de Node-RED arrancada con `corrida_continua.sh` (modo normal 120 s, fallas aleatorias **activadas**, mails **silenciados** para cuidar la cuenta de Gmail). Se detiene con `bash nodered/parar.sh`. Antes de generar desde otra PC hay que detener ésta.

## Qué te toca a vos

1. **Importar el dashboard** en Grafana Cloud y decirme qué paneles fallan (sección Fase 6).
2. **Confirmar en la bandeja los 9 mails** de la lista (Fase 4) y que los de falla/normalización llegaron, uno por evento.
3. **Subir la rama** (`git push -u origin stack-catedra`): el script de descargas de la facultad solo sube `main`, y sin eso tu compañero no puede clonar esta rama. No lo hice yo porque publica el código.
4. **Probar en la PC del compañero** con `docs/migracion_otra_pc.md` (y detener ésta antes).
5. **Dejar la corrida continua ≥ 12 h antes del 12/11** (`bash nodered/corrida_continua.sh --con-mails` si querés mails en el historial) y, el día de la defensa, apretar *Mails SIN marca (presentación)*.
6. **Revisar la decisión de diseño de los KPIs** (arriba) y decirme si la aceptás.
7. **Después de la presentación:** revocar el token de InfluxDB y la contraseña de aplicación de Gmail (`docs/migracion_otra_pc.md`, sección 5).
8. Un archivo suelto: hay un `.txt` versionado en esta carpeta (copia del `.env.example` viejo, sin secretos, que subió el script de descargas). No lo toqué; podés borrarlo.
