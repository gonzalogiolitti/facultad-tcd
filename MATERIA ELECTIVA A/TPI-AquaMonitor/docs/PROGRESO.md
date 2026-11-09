# PROGRESO — TPI AquaMonitor (rama `stack-catedra`)

Registro de lo que se hizo, cómo se probó y qué falta. No contiene secretos.
Stack de la cátedra: **Node-RED (npm, local) → InfluxDB Cloud (SQL) → Grafana Cloud + mail (Gmail)**.
Lo anterior (simulador de Python, EMQX/MQTT, QuestDB, Docker, Telegram) quedó como **respaldo**, sin borrar.

Última actualización: 08/11/2026 (≈ 20:40, hora Argentina). Presentación: 12/11/2026.

## Estado de las fases

| Fase | Estado | Resumen |
|---|---|---|
| 0. Auditoría y plan | hecho | aprobada |
| 1. Entorno | hecho | aprobada (SELECT y mail verificados por el usuario) |
| 2. Generador de datos | **hecho** | 15 variables, 5 fallas provocables, modo normal 120 s / demo 15 s |
| 3. Indicadores (KPIs) | **hecho con reservas** | cambió una decisión de diseño aprobada (ver abajo); regla de calidad = 0 desde el 08/11; ya cerraron períodos reales (hora, turno y día, parciales por el corte); falta ver una semana cerrar |
| 4. Avisos por mail y eventos | **hecho con reservas** | los 9 mails los tenés que confirmar vos; el reporte de las 06:00 todavía no corrió solo |
| 5. Análisis en SQL | **hecho** | tendencia, anomalías y correlación con datos reales |
| 6. Tablero de Grafana | **hecho con reservas** | importado por el usuario; corregidos los paneles de texto, las columnas y el eje de «Fallas por hora» (hay que **reimportar** el JSON); 32 consultas probadas contra la base |
| 7. Documentación y prueba desde cero | **hecho con reservas** | prueba desde cero hecha en WSL; Windows nativo sin probar |

## Reorganización del repositorio (08/11, Fase B)

Se reordenó la carpeta para que sea fácil de recorrer y de migrar. **No cambió ninguna lógica del sistema.** Tag de seguridad: `antes-de-reorganizar` (commit `15b9f5a`); rama de trabajo: `reorganizar`; movimientos con `git mv` (historia conservada).

| Antes | Ahora |
|---|---|
| `nodered/{arrancar,parar,corrida_continua}.sh`, `arrancar.ps1` | `scripts/` |
| `herramientas/*` (`consulta_sql`, `construir_dashboard`, `reconstruir_kpis`, `_motor_kpi.js`) | `scripts/` |
| `nodered/pruebas/probar.js`, `herramientas/cruzar_kpis.py` | `pruebas/` |
| `PROGRESO.md`, `presentacion/README.md` | `docs/PROGRESO.md`, `docs/presentacion.md` |
| `simulador/`, `analisis/`, `questdb/`, `docker-compose.yml`, `nodered/Dockerfile`, `nodered/flows*`, `grafana/dashboards/`, entregas sueltas de la alerta con Telegram, `.env.example.questdb`, `.txt`, `docs/respaldo_stack_anterior.md` | `_archivo/stack_anterior/` |
| (nuevo) | `sql/` (11 consultas de verificación), `docs/MAPA_DEL_REPO.md` |
| `nodered/userdir/`, `nodered/src/`, `nodered/construir_flows.js`, `grafana/aquamonitor_dashboard.json` | sin cambios de lugar |

**Verificado después de mover:** pruebas automáticas 67/67 (`node pruebas/probar.js`); el tablero regenerado con `scripts/construir_dashboard.py` es **idéntico byte a byte** al anterior (mismo UID `aquamonitor-planta`, 37 paneles, mismos títulos); las **32 consultas** ejecutan sin error contra InfluxDB; las 11 consultas de `sql/` ejecutan; `scripts/arrancar.sh`, `scripts/parar.sh` y `scripts/corrida_continua.sh` funcionan desde la nueva ubicación; todos los enlaces relativos de los `.md` apuntan a archivos que existen. En `nodered/userdir/` solo se cambiaron 3 líneas de **comentarios** (`settings.js`, `aqm/catalogo.js`); ningún estado ni credencial.
Se borró solo `herramientas/__pycache__` (caché regenerable). El `.gitignore` ya tenía `__pycache__/` y ahora ignora también `*:Zone.Identifier`. Las rutas de scripts, pruebas y documentos se actualizaron; el `docker-compose.yml` archivado apunta a `../../../.env`.
**Pendiente (Fase C, a pedido del usuario):** extraer el proyecto a un repo propio con `git filter-repo` (probado en una copia descartable el 08/11: 15 commits de `stack-catedra`, 82 archivos, sin credenciales en la historia).

## ⚠️ Decisión de diseño que cambió respecto de lo aprobado (leer primero)

**Qué se había aprobado:** calcular los KPIs en Node-RED y *reescribir la misma fila* del período en curso hasta que cierre ("una sola fila por período, sobrescribiendo la misma clave").
**Qué se encontró:** en InfluxDB Cloud, escribir varias veces la misma clave (mismo `measurement + tags + time`) *sí* deja la última versión (se probó aislado), **pero al leer datos recién reescritos el motor puede devolver una versión vieja**, y la devuelve de forma intermitente. Medición real: la misma consulta repetida 8 veces devolvió `(5 muestras, abierto)` y `(7 muestras, cerrado)` para la misma fila. Una hora ya cerrada seguía devolviendo versiones viejas 10 minutos después de cerrar. Un campo `version` no sirve: el motor elimina las repetidas *antes* de que el SQL las vea.
**Qué se hizo (variante mínima, dentro del "Plan B" que aprobaste):**
1. Node-RED sigue calculando los 6 KPIs con acumuladores en memoria guardados en disco, pero **escribe cada período una sola vez, cuando cierra** (cero filas repetidas → lectura determinista).
2. El **período en curso** (lo que se mostraba "en vivo") lo calcula el **tablero con SQL** sobre `raw_variables` (`date_bin`), que es el Plan B aprobado.
3. Esto está probado: el SQL y Node-RED dan **los mismos valores** (cruce de 24/24, ver Fase 3).
**Cómo explicarlo:** "InfluxDB no garantiza que una fila reescrita se lea siempre con su última versión. Por eso cada indicador se escribe una sola vez, al cerrar el período; mientras el período está abierto se calcula con una consulta SQL sobre las mediciones."
Si preferís volver al diseño original o pasar todo a SQL, decímelo; los cambios están acotados a `nodered/src/funciones/kpi_calcular.js` y a los paneles de indicadores.

## Revisión del tablero importado (07/11, noche)

El usuario importó el dashboard en Grafana Cloud y reportó cinco cosas. Resultado:

**1. «Última medición» y «Última falla» mostraban *No data*.** Causa: un panel Stat solo muestra por defecto campos **numéricos**, y estas consultas devuelven un **texto** (la fecha en hora Argentina). Arreglo: se pide el campo de texto en el panel (`reduceOptions.fields = "/.*/"`) y la consulta de la última falla ahora respeta el rango de tiempo elegido y devuelve `Sin fallas` si no hay (`COALESCE`). Probado contra la base: con fallas en el rango devuelve `07/11/2026 20:23:18`; sin fallas, `Sin fallas`. **No pude probar cómo lo dibuja Grafana**: hay que reimportar y mirar esos dos paneles.

**2. pH: el gráfico muestra el pico (9,2) y la caída (5,5) pero `tiempo_fuera_rango_ph = 0`.** Causa comprobada con SQL sobre `raw_variables`: **las 8 muestras de la excursión tienen calidad 0 o 1** (5,48 a 9,20) y los indicadores usan **solo calidad 2**, así que las descartan. No es la ventana de tiempo ni un bug del cierre de períodos (probado: con la secuencia real de pH, la lógica de Node-RED da exactamente lo que dice la regla). La causa de fondo es del **modelo de calidad del generador** (heredado del simulador de Python y documentado en `docs/jerarquia_ISA95.md` §4): la calidad 2 cubre solo ±50 % del ancho del rango de operación y la 1 hasta ±150 %; los valores en **zona de alarma** (en el pH, calidad 2 llega hasta 6,4–8,0, cuando el crítico es 6,0–8,5) salen con calidad 1 o 0. Con la regla «solo calidad 2» el indicador de tiempo fuera de rango es prácticamente 0 por construcción.
Para el turno T2 (14:00 ART en adelante), mismas lecturas de pH, según la regla:

| Regla de calidad | Muestras | Fuera de rango | `tiempo_fuera_rango_ph` | `desviacion_ph` |
|---|---|---|---|---|
| A) solo calidad 2 (**actual**) | 100 | 0 | 0,0 min | 0,1024 |
| B) calidad 1 y 2 (como las alertas) | 102 | 2 | 9,41 min | 0,2262 |
| C) todas (0, 1 y 2) | 108 | 8 | 35,56 min | 0,4747 |

**Decisión (resuelta el 08/11: se aplicó `calidad_minima = 0`, ver «Decisiones aplicadas el 08/11»).** Planteo original: dejé un único parámetro en el catálogo, `KPI.calidad_minima` (hoy `2`, sin cambio de comportamiento). El tablero (período en curso) y Node-RED leen el mismo parámetro. Recomiendo `0`, porque este generador no simula sensores fallados: su calidad 0/1 marca excursiones del proceso, justo lo que los indicadores deben medir. Diff mínimo:
```diff
--- nodered/userdir/aqm/catalogo.js
-    KPI: { calidad_minima: 2 },
+    KPI: { calidad_minima: 0 },
```
Después: reiniciar Node-RED, `python3 scripts/construir_dashboard.py` y reimportar el JSON. Las filas ya cerradas (hoy 20:00–21:00) quedan con la regla vieja. Alternativa de fondo: cambiar el modelo de calidad del generador para que marque solo fallas de sensor (cambia el comportamiento aprobado en la Fase 2).

**3. VIBRACION 90 muestras vs 105 en las otras variables.** Causa comprobada: el panel «Tendencia de todas las variables» usa solo calidad 2, y durante `VIB_HIGH` la vibración salió con **calidad 1 (9 muestras) y calidad 0 (6 muestras)**: 15 en total, exactamente la diferencia 105 − 90. **No es la parada de la bomba**: en una parada todas las variables salen con calidad 2 (el modelo las fuerza). En `raw_variables` la vibración tiene las mismas filas que las demás (101 de 101 en la consulta del momento).
¿Se pierde información en los KPIs? **La vibración no entra en ningún KPI**, así que por ella no. Pero **sí hay pérdida en otras dos variables**: en la misma consulta, `PH` tiene 8 muestras fuera de calidad 2 (de 101) y `PRES_DIF` 1; las demás variables, ninguna. En la primera hora real cerrada se ve: `desviacion_ph` y `tiempo_fuera_rango_ph` con 92 muestras, `presion_diferencial_media` con 99, el resto con 100. Es el mismo asunto del punto 2.

**4. Cosmético (aplicado).** «Tendencia de todas las variables» pasó a ancho completo (la columna *Pendiente por hora* estaba cortada); correlación, KPIs, anomalías y eventos tienen anchos de columna fijos y nombres de columna más cortos; «Fallas por hora» ahora es un gráfico de barras con eje de tiempo (se veía «2026» porque el gráfico de barras trataba la hora como categoría). Sin probar en Grafana.

**5. Falsos positivos del Z-score: propuesta (aplicada el 08/11, ver abajo).** Con datos de las últimas 6 h: la regla actual marca 4 anomalías en el pH, 2 de ellas por desvíos de ~0,11 unidades (pH 7,028 y 7,29 contra una media de ~7,15 y un desvío de 0,035). Propuesta: usar como desvío `max(sd de la ventana, 1 % de la media de la ventana)`. Resultado real: elimina exactamente esas 2 y **conserva todas las fallas reales** (presión diferencial del filtro z = 12, turbidez z = 22, caudal de la bomba z = 57, vibración z = 21, pH forzado z = 10); con un piso del 2 % empieza a descartar anomalías dudosas (nivel y temperatura), por eso se propone 1 %. El diff está en el chat y el archivo con la propuesta quedó en el scratchpad de la sesión; el repositorio no se tocó.

**Períodos cerrados reales (verificado después de las 21:03 ART).** `kpi_values` ya tiene la primera hora real: **hora 20:00–21:00 ART, 6 filas (una por KPI), `cerrado = true`**, escritas una sola vez: disponibilidad de la bomba 82,0 %, eficiencia energética 2,6353 m³h/A, eficiencia de filtración 86,268 %, presión diferencial media 674,1 mbar, desvío del pH 0,0723, tiempo fuera de rango del pH 0,0 min. Los paneles «Indicadores del último período CERRADO» y «[hora] indicadores» devuelven esas filas (consultas ejecutadas). Turno, día y semana todavía no cerraron: el turno T2 cierra a las 22:00 ART.

Pruebas automáticas: 59/59 (se agregaron 3 con la secuencia real de pH). Consultas del tablero: 32/32 sin error.

## Decisiones aplicadas el 08/11 (noche)

**1. `KPI.calidad_minima = 0`** (catálogo). Los indicadores usan todas las muestras. Cada fila nueva de `kpi_values` lleva el tag **`regla`** (`q0`) con la regla con la que se calculó.
- **Las alertas siguen descartando calidad 0** (la regla aprobada en la Fase 4 no cambia). Por qué no es una contradicción: un **aviso** se dispara con **una sola lectura**, y una lectura de calidad 0 («inverosímil») podría ser un sensor fallado: un mail por un dato basura es un falso aviso. Un **indicador**, en cambio, resume muchas lecturas (hasta 4.200 en una semana) y existe justamente para reflejar cuánto tiempo estuvo el proceso fuera de rango; con este generador la calidad 0/1 no marca sensores fallados sino **cuán lejos del rango de operación** está el valor, así que descartarla vuelve ciego al indicador (el pH 9,2 es calidad 0).
- **Limitación a conocer:** una lectura que «salta» directo a calidad 0 no dispara el aviso de EQ02/EQ03; el aviso sale en la primera lectura de calidad 1 o 2 de la misma excursión (como mucho un ciclo después). En las pruebas reales el `PH_SPIKE` avisó en el primer ciclo (5,799, calidad 1).
- Efecto medido en la **misma hora (20:00–21:00 ART del 07/11, pH forzado)**:

| Regla | Muestras | `tiempo_fuera_rango_ph` | `desviacion_ph` |
|---|---|---|---|
| vieja (calidad 2, sin tag) | 92 | 0,0 min | 0,0723 |
| nueva (`regla = q0`) | 100 | 4,8 min (8/100 × 60) | 0,488 |

- Probado: 67 pruebas automáticas (incluye la secuencia real de pH y el tag `regla`).

**2. Piso del 1 % en el Z-score** (`scripts/construir_dashboard.py`): el desvío efectivo es `max(sd de la ventana, 1 % de la media de la ventana)`. Verificado con datos reales (40 h): el panel de anomalías pasa a **2 anomalías de pH** (antes aparecían las de desvíos de centésimas) y conserva las fallas reales.

**3. Filas de `kpi_values` con la regla vieja y cómo no ensucian el tablero.** Hay **30 filas sin tag `regla`** (todas de la etapa de desarrollo o de la regla vieja):
| Período (hora ART) | Estado | Filas | Muestras | Origen |
|---|---|---|---|---|
| hora 07/11 19:00 | abierto | 6 | 6–7 | diseño anterior (reescritura), con versiones mezcladas |
| turno 07/11 14:00 | abierto | 6 | 13–14 | ídem |
| día 07/11 | abierto | 6 | 14 | ídem |
| semana 02/11 | abierto | 6 | 14 | ídem |
| hora 07/11 20:00 | **cerrado** | 6 | 92–100 | **regla vieja** (calidad 2) |
- **Cómo se evita:** (a) las consultas del tablero que leen `kpi_values` filtran `regla = 'q0'` (la regla vigente, tomada del catálogo; si algún día cambia, el tablero muestra solo las filas de la regla nueva); (b) como el tag cambia la **clave**, las filas nuevas **no pueden chocar** con las viejas. Esto importaba: las filas viejas del turno 14:00, día 07/11 y semana 02/11 tenían exactamente la misma clave que las filas definitivas que Node-RED escribe al cerrar esos períodos, y con claves repetidas vuelve el problema de lecturas inestables. No se borró nada; la alternativa, si se quiere la tabla limpia, es borrarlas desde InfluxDB (filas sin `regla`).
- Se eligió el **tag** en vez de una fecha de corte porque una fecha no sirve para turno, día y semana (sus filas nuevas tienen marcas de tiempo anteriores a cualquier corte razonable) y además no evita el choque de claves.

**4. Reconstrucción de acumuladores (`scripts/reconstruir_kpis.py`).** Al cambiar la regla, los períodos que estaban abiertos tenían acumuladores calculados con la regla vieja. Con Node-RED detenido, la herramienta los reconstruyó desde `raw_variables` con el **mismo código de Node-RED** (`aqm.js`) y escribió la fila de la hora 20:00 con la regla nueva. Coincidencia de muestras al reconstruir: hora 23, turno 130, día 130, semana 130 (igual a lo guardado). Copia de seguridad del estado en `nodered/userdir/context/global/global.json.respaldo-*`.

## Verificaciones pedidas

**(1) `ALERT_MAIL_TO` con varias direcciones.** Resuelto y probado (sin enviar mails, con el parser real de `nodemailer` y direcciones de ejemplo): **coma funciona** (`a@x, b@y` → 2 destinatarios en el sobre SMTP), también `;` y nombres (`Ana <a@x>`). **Con solo espacios se pierde la segunda dirección sin avisar** (`nodemailer` se queda con la primera). Se blindó: `mail_preparar` normaliza `;` y espacios a comas (prueba automática). Aplica igual a `REPORTE_MAIL_TO`. El `.env` actual tiene una sola dirección en `ALERT_MAIL_TO` (se comprobó solo la presencia de coma, no el valor).

**(2) Período que cierra con Node-RED apagado o PC suspendida.** Ocurrió de verdad: Node-RED murió el **07/11 21:42** (al terminar la sesión) y volvió el **08/11 20:30** (**22 h 48 min** sin medir). Qué pasó y qué hace el sistema:
- **Períodos abiertos:** cierran **al primer ciclo después del corte**, con **las muestras que tenían** (se ve en `muestras`): día 07/11 con 130, turno T2 con 130 (le faltaron las 21:42–22:00), hora 21:00 con 23. Los períodos **sin ningún dato** (todas las horas entre el corte y la vuelta) **no generan filas**: no hay filas inventadas ni en cero. La semana siguió abierta (corta lunes).
- **Aviso al usuario de los indicadores parciales:** `tiempo_fuera_rango_ph` se **extrapola** a la duración completa del período (fórmula definida), así que un día con 130 muestras da 88,6 min; hay que leerlo junto con `muestras`.
- **Bomba en falla al apagarse (corregido hoy):** el detector habría informado «normalizada, estuvo en falla 23,5 horas». Ahora, si pasan más de 30 min entre dos mediciones (`ALERTAS.corte_medicion_s`), la falla abierta se cierra con la **duración observada** (20 min en el caso real) marcada «fin no observado» y un aviso `SIN DATOS: se cortó la medición con la bomba EQ01 en falla`; si la bomba sigue en falla al volver, avisa una falla nueva. Evidencia real en `events` (`08/11 20:30`, `duracion_s = 1200`, «corte de 82080 s»). Tres pruebas automáticas.
- **Reporte de las 06:00:** si Node-RED está apagado a esa hora, **ese reporte no se manda después** (lo dispara solo el cron; no hay recuperación). Si vuelve más tarde, el día anterior cierra parcial y el reporte del día siguiente lo incluye (probado).
- **El generador:** el primer ciclo tras el corte usa la hora real (regla de «llegué tarde»); no se rellenan los ciclos perdidos (**quedan huecos en `raw_variables`**).
- **Para no depender de esto en la demo:** dejar la PC sin suspenderse y usar `corrida_continua.sh` (ver README).

**(3) ¿El tablero filtraba las filas de desarrollo?** **No lo hacía** (solo excluía los períodos abiertos con `cerrado = true`, y una hora de desarrollo con `cerrado = true` podía aparecer). **Ahora sí para `kpi_values`**, con `regla = 'q0'` (punto 3 de arriba). **Para `raw_variables` y `events` no se filtra**: los datos del 07/11 (4 ciclos fuera de grilla a las 19:57, fallas provocadas y mails de prueba) son datos simulados que solo se ven si el rango incluye esa tarde; con el rango por defecto (6 h) y el conteo de 12 h ya no aparecen el 12/11.

**Corrida continua:** la instancia que dejé corriendo el 07/11 **no sobrevivió** al fin de la sesión (murió a las 21:42). Se relanzó el 08/11 a las 20:30 con `corrida_continua.sh` (modo normal, fallas aleatorias, mails silenciados). Para el 12/11 hay que dejarla corriendo en la PC de la presentación y sin suspender.

## Herramientas de verificación (sin mostrar secretos)

- `scripts/consulta_sql.py`: SQL contra InfluxDB (Flight SQL) con el token de `.env`. `.venv/bin/python scripts/consulta_sql.py "SELECT ..."`. `.venv/` está dentro del proyecto (ignorado por git). Se eligió la opción (a) pedida: **funcionó**, no hizo falta DBRP/InfluxQL.
- `scripts/construir_dashboard.py --probar N`: regenera el dashboard y **ejecuta cada consulta contra la base real**.
- `pruebas/cruzar_kpis.py`: cruza los KPIs de Node-RED contra un recálculo independiente sobre `raw_variables`.
- `scripts/reconstruir_kpis.py`: reconstruye los acumuladores de los períodos abiertos y escribe las filas de los cerrados desde `raw_variables` (con Node-RED detenido; sin `--aplicar` solo muestra el plan).
- `pruebas/probar.js`: 56 pruebas de la lógica con reloj simulado (sin red): generador, KPIs en 9 días simulados, bomba, EQ02/EQ03, reporte, interruptores.

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
- **Cálculo forzado de prueba con datos reales** (botón *Calcular KPIs de PRUEBA ahora*, escribe en `kpi_values_prueba`, **no** en `kpi_values`): las 24 combinaciones (6 KPIs × 4 períodos) de Node-RED **coinciden con un recálculo independiente** sobre `raw_variables` (`pruebas/cruzar_kpis.py`, corrida `1794094348867`). Ejemplo, turno T2: eficiencia energética 2,6174; disponibilidad 79,55 %; eficiencia de filtración 86,404 %; presión diferencial media 627,72 mbar; desvío del pH 0,1124.
- **Persistencia en disco:** tras varios reinicios (incluido uno ordenado medido a propósito), el turno abierto tiene **88 ciclos en la base y 88 muestras acumuladas** (diferencia 0).
- El SQL del período en curso (tablero) coincide con Python en los 6 KPIs.

**Qué NO se probó:** el cierre **real** de turno, día y semana (la primera hora real ya cerró a las 21:00 ART: 6 filas; el turno T2 cierra a las 22:00 ART, el día a las 00:00 y la semana el lunes). Esos tres solo se probaron con reloj simulado. Cuando pase un rato: `SELECT periodo, equipo, kpi, to_char(time - INTERVAL '3 hours', '%d/%m %H:%M') AS inicio_ART, value, muestras FROM kpi_values WHERE cerrado = true ORDER BY time DESC LIMIT 12`.
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

**Qué se hizo:** `grafana/aquamonitor_dashboard.json` (37 paneles), generado por `scripts/construir_dashboard.py`; fuente `influxdb` (UID `fg3ly9z1iz668b`), zona horaria `America/Argentina/Buenos_Aires`, refresco 5 s, selector *Período de los indicadores*. Contenido: estado general; sensores en vivo de los 3 equipos (colores por umbrales del catálogo); indicadores (período en curso por SQL y último cerrado); fallas de la bomba (últimas 12 h, rango, por hora, por motivo, última falla, tabla de eventos); análisis.
**Qué se probó de verdad:** **las 32 consultas SQL ejecutadas contra la base real: 0 con error** (`--probar 6`, última corrida con 98 puntos de datos). La hora de los textos usa `time - INTERVAL '3 hours'`.
**Qué NO se probó (importante):** no tengo acceso a tu Grafana. El usuario importó el JSON y reportó los problemas de la sección «Revisión del tablero»; **de lo que no se informó nada, no está verificado**. En particular no se verificó que (1) el import acepte el JSON tal cual; (2) el modelo de consulta del plugin de InfluxDB (SQL) reconozca los campos `query`/`rawQuery`/`resultFormat` (se incluyeron también `rawSql`/`format` por compatibilidad); (3) el macro `$__timeFilter(time)` esté soportado en tu versión; (4) el panel de dispersión (`xychart`) y los colores se vean como se espera. Si un panel sale con error: *Edit* → pegar la consulta del panel en el editor SQL; las consultas son SQL estándar de InfluxDB 3.
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

Una instancia de Node-RED arrancada con `corrida_continua.sh` (modo normal 120 s, fallas aleatorias **activadas**, mails **silenciados** para cuidar la cuenta de Gmail). Se detiene con `bash scripts/parar.sh`. Antes de generar desde otra PC hay que detener ésta.

## Qué te toca a vos

1. **Importar el dashboard** en Grafana Cloud y decirme qué paneles fallan (sección Fase 6).
2. **Confirmar en la bandeja los 9 mails** de la lista (Fase 4) y que los de falla/normalización llegaron, uno por evento.
3. **Subir la rama** (`git push -u origin stack-catedra`): el script de descargas de la facultad solo sube `main`, y sin eso tu compañero no puede clonar esta rama. No lo hice yo porque publica el código.
4. **Probar en la PC del compañero** con `docs/migracion_otra_pc.md` (y detener ésta antes).
5. **Dejar la corrida continua ≥ 12 h antes del 12/11** (`bash scripts/corrida_continua.sh --con-mails` si querés mails en el historial) y, el día de la defensa, apretar *Mails SIN marca (presentación)*.
6. **Revisar la decisión de diseño de los KPIs** (arriba) y decirme si la aceptás.
7. **Reimportar el JSON** del tablero (mismo UID: Grafana ofrece reemplazarlo) después de los cambios del 08/11.
8. **Después de la presentación:** revocar el token de InfluxDB y la contraseña de aplicación de Gmail (`docs/migracion_otra_pc.md`, sección 5).
9. Un archivo suelto: hay un `.txt` versionado en esta carpeta (copia del `.env.example` viejo, sin secretos, que subió el script de descargas). No lo toqué; podés borrarlo.
