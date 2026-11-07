#!/usr/bin/env node
/**
 * Arma nodered/userdir/flows.json a partir del codigo de nodered/src/funciones/*.js.
 *   node nodered/construir_flows.js
 * Asi el codigo de cada nodo "function" vive en un archivo normal (se puede leer, versionar
 * y probar con nodered/pruebas/probar.js) y el flows.json siempre sale igual.
 * Despues de regenerarlo hay que reiniciar Node-RED (o hacer Deploy si se importa).
 */
const fs = require('fs');
const path = require('path');

const FUNCIONES = path.join(__dirname, 'src', 'funciones');
const SALIDA = path.join(__dirname, 'userdir', 'flows.json');
const codigo = (nombre) => fs.readFileSync(path.join(FUNCIONES, nombre + '.js'), 'utf8');

const nodos = [];
const add = (n) => { nodos.push(n); return n; };

// ---------------- helpers para crear nodos ----------------
const tab = (id, label, info) => add({ id, type: 'tab', label, disabled: false, info: info || '' });
const comentario = (z, id, name, info, x, y) => add({ id, type: 'comment', z, name, info: info || '', x, y, wires: [] });
const fn = (z, id, name, archivo, outputs, x, y, wires) => add({
    id, type: 'function', z, name, func: codigo(archivo), outputs, timeout: 0, noerr: 0,
    initialize: '', finalize: '', libs: [], x, y, wires: wires || Array.from({ length: outputs }, () => [])
});
const boton = (z, id, name, accion, x, y, wires, extra) => add(Object.assign({
    id, type: 'inject', z, name, props: [{ p: 'accion', v: accion, vt: 'str' }], repeat: '', crontab: '',
    once: false, onceDelay: 0.1, topic: '', x, y, wires: [wires]
}, extra || {}));
const linkOut = (z, id, name, destinos, x, y) => add({ id, type: 'link out', z, name, mode: 'link', links: destinos, x, y, wires: [] });
const linkIn = (z, id, name, origenes, x, y, wires) => add({ id, type: 'link in', z, name, links: origenes, x, y, wires: [wires] });
const http = (z, id, name, x, y, wires) => add({
    id, type: 'http request', z, name, method: 'use', ret: 'txt', paytoqs: 'ignore', url: '', tls: '',
    persist: false, proxy: '', insecureHTTPParser: false, authType: '', senderr: false, headers: [], x, y, wires: [wires]
});
const demora = (z, id, name, segundos, x, y, wires) => add({
    id, type: 'delay', z, name, pauseType: 'delay', timeout: String(segundos), timeoutUnits: 'seconds', rate: '1',
    nbRateUnits: '1', rateUnits: 'second', randomFirst: '1', randomLast: '5', randomUnits: 'seconds', drop: false,
    allowrate: false, outputs: 1, x, y, wires: [wires]
});

// =====================================================================================
//  00  Prueba de conexion (Fase 1): escribe un punto en el measurement prueba_conexion
// =====================================================================================
tab('t_prueba', '00 Prueba de conexión InfluxDB', 'Escribe 1 punto en el measurement prueba_conexion (NO en raw_variables). Sirve para verificar token, organización y bucket.');
add({ id: 'inj_influx', type: 'inject', z: 't_prueba', name: 'Escribir dato de prueba en InfluxDB', props: [{ p: 'payload' }], repeat: '', crontab: '', once: false, onceDelay: 0.1, topic: '', payload: '', payloadType: 'date', x: 210, y: 80, wires: [['fn_influx']] });
add({
    id: 'fn_influx', type: 'function', z: 't_prueba', name: 'Armar línea de escritura', outputs: 1, timeout: 0, noerr: 0, initialize: '', finalize: '', libs: [], x: 470, y: 80, wires: [['http_influx']],
    func: "const url = env.get('INFLUX_URL'), org = env.get('INFLUX_ORG'), bucket = env.get('INFLUX_BUCKET'), token = env.get('INFLUX_TOKEN');\n" +
        "if (!url || !org || !bucket || !token) { node.error('Faltan variables INFLUX_* en el entorno'); return null; }\n" +
        "msg.method = 'POST';\n" +
        "msg.url = url + '/api/v2/write?org=' + encodeURIComponent(org) + '&bucket=' + encodeURIComponent(bucket) + '&precision=ms';\n" +
        "msg.headers = { 'Authorization': 'Token ' + token, 'Content-Type': 'text/plain; charset=utf-8' };\n" +
        "msg.payload = 'prueba_conexion,origen=nodered valor=1.5,contador=1i ' + Date.now();\n" +
        "return msg;\n"
});
http('t_prueba', 'http_influx', 'POST InfluxDB /api/v2/write', 740, 80, ['dbg_influx']);
add({ id: 'dbg_influx', type: 'debug', z: 't_prueba', name: 'Respuesta InfluxDB (204 = escrito)', active: true, tosidebar: true, console: true, tostatus: true, complete: 'statusCode', targetType: 'msg', statusVal: 'statusCode', statusType: 'auto', x: 1010, y: 80, wires: [] });

// =====================================================================================
//  01  Generador de datos
// =====================================================================================
tab('t_gen', '01 Generador de datos', 'Simula los 3 equipos (15 variables). Reemplaza al simulador de Python y a MQTT.');
comentario('t_gen', 'c_gen1', '1) Cada 5 s se revisa si toca medir: modo normal = cada 120 s, modo demo = cada 15 s',
    'El intervalo normal (120 s) cumple la consigna (2 a 5 minutos). El modo demo (15 s) es solo para mostrar el sistema en vivo.', 330, 40);
add({ id: 'gen_tick', type: 'inject', z: 't_gen', name: 'revisar cada 5 s', props: [{ p: 'payload' }], repeat: '5', crontab: '', once: true, onceDelay: 3, topic: '', payload: '', payloadType: 'date', x: 150, y: 100, wires: [['gen_ciclo']] });
fn('t_gen', 'gen_ciclo', 'Generar ciclo de mediciones', 'gen_ciclo', 2, 400, 100, [['lo_influx_gen'], ['lo_lecturas']]);
linkOut('t_gen', 'lo_influx_gen', '→ InfluxDB', ['li_influx'], 650, 80);
linkOut('t_gen', 'lo_lecturas', '→ lecturas (KPIs y alertas)', ['li_lect_kpi', 'li_lect_bomba', 'li_lect_umbral'], 650, 130);

comentario('t_gen', 'c_gen2', '2) Botones de control (sin editar código)', 'Cambiar de modo, pausar y activar las fallas aleatorias. Todo pasa por el nodo "Controles del generador".', 330, 200);
boton('t_gen', 'inj_modo_normal', 'Modo NORMAL (120 s)', 'modo_normal', 160, 240, ['gen_controles']);
boton('t_gen', 'inj_modo_demo', 'Modo DEMO (15 s)', 'modo_demo', 150, 280, ['gen_controles']);
boton('t_gen', 'inj_pausa', 'Pausar generador', 'pausa', 150, 320, ['gen_controles']);
boton('t_gen', 'inj_reanudar', 'Reanudar generador', 'reanudar', 150, 360, ['gen_controles']);
boton('t_gen', 'inj_aleatorio_on', 'Fallas aleatorias ON', 'aleatorio_on', 150, 400, ['gen_controles']);
boton('t_gen', 'inj_aleatorio_off', 'Fallas aleatorias OFF', 'aleatorio_off', 150, 440, ['gen_controles']);
boton('t_gen', 'inj_reiniciar', 'Reiniciar estado de los equipos', 'reiniciar_estado', 170, 480, ['gen_controles']);
comentario('t_gen', 'c_gen3', '3) Provocar fallas (se ven en la próxima medición, que se hace al instante)', 'VIB_HIGH: vibración > 7,1 mm/s | CAUDAL_DROP: cae el caudal | PARADA_BOMBA: ESTADO = 0 | PH_SPIKE: pH fuera de rango | FILTER_SAT: se tapa el filtro', 330, 540);
boton('t_gen', 'inj_f_vib', 'Falla VIB_HIGH (vibración alta)', 'falla:VIB_HIGH', 180, 580, ['gen_controles']);
boton('t_gen', 'inj_f_caudal', 'Falla CAUDAL_DROP (cae el caudal)', 'falla:CAUDAL_DROP', 190, 620, ['gen_controles']);
boton('t_gen', 'inj_f_parada', 'Falla PARADA_BOMBA (ESTADO = 0)', 'falla:PARADA_BOMBA', 190, 660, ['gen_controles']);
boton('t_gen', 'inj_f_ph', 'Falla PH_SPIKE (pH fuera de rango)', 'falla:PH_SPIKE', 190, 700, ['gen_controles']);
boton('t_gen', 'inj_f_filtro', 'Falla FILTER_SAT (filtro saturado)', 'falla:FILTER_SAT', 190, 740, ['gen_controles']);
fn('t_gen', 'gen_controles', 'Controles del generador', 'gen_controles', 1, 520, 400);

// =====================================================================================
//  02  Indicadores (KPIs)
// =====================================================================================
tab('t_kpi', '02 Indicadores (KPIs)', '6 indicadores (2 por equipo) por hora, turno, día y semana. Una fila por período en kpi_values.');
comentario('t_kpi', 'c_kpi1', 'Por cada medición: acumula las muestras buenas (calidad 2) en los 4 períodos abiertos y escribe una fila por KPI y período',
    'ts = inicio del período en UTC (calculado en hora Argentina). Mientras el período está abierto la fila se pisa (cerrado=false); al empezar el siguiente se escribe por última vez con cerrado=true. Turnos: T1 06-14, T2 14-22, T3 22-06 (hora Argentina).', 400, 40);
linkIn('t_kpi', 'li_lect_kpi', 'lecturas', ['lo_lecturas'], 140, 100, ['kpi_calcular']);
fn('t_kpi', 'kpi_calcular', 'Acumular y calcular KPIs', 'kpi_calcular', 1, 400, 100, [['lo_influx_kpi']]);
linkOut('t_kpi', 'lo_influx_kpi', '→ InfluxDB', ['li_influx'], 650, 100);
comentario('t_kpi', 'c_kpi2', 'PRUEBA: calcula ahora los 4 períodos abiertos y los escribe en kpi_values_prueba (no toca kpi_values)', 'Sirve para ver las 4 granularidades sin esperar a que cierre un turno, un día o una semana.', 330, 200);
add({ id: 'inj_kpi_prueba', type: 'inject', z: 't_kpi', name: 'Calcular KPIs de PRUEBA ahora', props: [{ p: 'accion', v: 'kpi_prueba', vt: 'str' }], repeat: '', crontab: '', once: false, onceDelay: 0.1, topic: '', x: 190, y: 250, wires: [['kpi_prueba']] });
fn('t_kpi', 'kpi_prueba', 'KPIs de prueba (períodos abiertos)', 'kpi_prueba', 1, 460, 250, [['lo_influx_kpi']]);

// =====================================================================================
//  03  Alerta de la bomba EQ01
// =====================================================================================
tab('t_bomba', '03 Alerta bomba EQ01', 'Un mail cuando la bomba pasa de normal a falla y otro cuando se normaliza. Cada evento se guarda en events.');
comentario('t_bomba', 'c_b1', 'Falla = vibración > 7,1 | caudal < 70 o > 175 | presión < 2,5 o > 6,5 | corriente > 65 | ESTADO < 0,5',
    'Los límites salen del catálogo (nodered/userdir/aqm/catalogo.js). Calidad 1 y 2 valen; la 0 se descarta. Sin cooldown: dos fallas seguidas (con la bomba normal al menos ALERTA_REARME_S entre medio) mandan dos mails.', 460, 40);
linkIn('t_bomba', 'li_lect_bomba', 'lecturas', ['lo_lecturas'], 140, 100, ['bomba_detectar']);
fn('t_bomba', 'bomba_detectar', 'Detectar falla de bomba', 'bomba_detectar', 1, 400, 100, [['bomba_avisos']]);
fn('t_bomba', 'bomba_avisos', 'Armar mail y evento', 'bomba_avisos', 2, 660, 100, [['lo_mail_bomba'], ['lo_influx_bomba']]);
linkOut('t_bomba', 'lo_mail_bomba', '→ Mail', ['li_mail'], 890, 80);
linkOut('t_bomba', 'lo_influx_bomba', '→ InfluxDB (events)', ['li_influx'], 900, 130);
comentario('t_bomba', 'c_b2', 'Botones de prueba: mandan un mail [PRUEBA] sin escribir nada en la base', '', 400, 220);
boton('t_bomba', 'inj_prueba_falla', 'Probar mail de falla [PRUEBA]', 'prueba_falla', 180, 260, ['bomba_prueba']);
boton('t_bomba', 'inj_prueba_norm', 'Probar mail de normalización [PRUEBA]', 'prueba_normalizada', 200, 300, ['bomba_prueba_n']);
fn('t_bomba', 'bomba_prueba', 'Armar falla de prueba', 'bomba_prueba', 1, 460, 260, [['bomba_avisos']]);
add({
    id: 'bomba_prueba_n', type: 'function', z: 't_bomba', name: 'Armar normalización de prueba', outputs: 1, timeout: 0, noerr: 0, initialize: '', finalize: '', libs: [], x: 480, y: 300, wires: [['bomba_avisos']],
    func: "msg.tipo_prueba = 'normalizada';\n" + codigo('bomba_prueba')
});
comentario('t_bomba', 'c_b3', 'Interruptores: mails marcados [PRUEBA] (valor por defecto) o sin marca (presentación); y silenciar mails (solo pruebas)', '', 400, 360);
boton('t_bomba', 'inj_marcar_on', 'Mails CON marca [PRUEBA]', 'marcar_on', 170, 400, ['marcas']);
boton('t_bomba', 'inj_marcar_off', 'Mails SIN marca (presentación)', 'marcar_off', 180, 440, ['marcas']);
boton('t_bomba', 'inj_silenciar_on', 'SILENCIAR mails (solo para pruebas)', 'silenciar_on', 190, 480, ['marcas']);
boton('t_bomba', 'inj_silenciar_off', 'ACTIVAR mails (quitar silencio)', 'silenciar_off', 190, 520, ['marcas']);
fn('t_bomba', 'marcas', 'Interruptores de mail', 'marcas', 1, 460, 460);

// =====================================================================================
//  04  Alertas EQ02 / EQ03
// =====================================================================================
tab('t_umbral', '04 Alertas EQ02-EQ03', 'Alertas críticas del filtro y el reactor, sin spam: solo al entrar en la zona crítica y con cooldown.');
comentario('t_umbral', 'c_u1', 'Solo avisa cuando una variable ENTRA en crítico y respeta el cooldown (ALERTA_COOLDOWN_S; demo: 60 s)',
    'Los críticos nuevos de un mismo ciclo van juntos en un solo mail. La bomba EQ01 no pasa por acá.', 420, 40);
linkIn('t_umbral', 'li_lect_umbral', 'lecturas', ['lo_lecturas'], 140, 100, ['umbrales_detectar']);
fn('t_umbral', 'umbrales_detectar', 'Detectar umbrales EQ02/EQ03', 'umbrales_detectar', 2, 420, 100, [['lo_mail_umbral'], ['lo_influx_umbral']]);
linkOut('t_umbral', 'lo_mail_umbral', '→ Mail', ['li_mail'], 680, 80);
linkOut('t_umbral', 'lo_influx_umbral', '→ InfluxDB (events)', ['li_influx'], 690, 130);

// =====================================================================================
//  05  Reporte diario
// =====================================================================================
tab('t_reporte', '05 Reporte diario', 'Mail diario a las 06:00 (hora Argentina) con los KPIs del día anterior y el conteo de fallas.');
add({ id: 'inj_reporte_cron', type: 'inject', z: 't_reporte', name: '06:00 todos los días', props: [{ p: 'prueba', v: 'false', vt: 'bool' }], repeat: '', crontab: '00 06 * * *', once: false, onceDelay: 0.1, topic: '', x: 170, y: 100, wires: [['reporte_armar']] });
add({ id: 'inj_reporte_prueba', type: 'inject', z: 't_reporte', name: 'Enviar reporte de prueba AHORA [PRUEBA] (día en curso)', props: [{ p: 'prueba', v: 'true', vt: 'bool' }], repeat: '', crontab: '', once: false, onceDelay: 0.1, topic: '', x: 250, y: 160, wires: [['reporte_armar']] });
fn('t_reporte', 'reporte_armar', 'Armar reporte HTML', 'reporte_armar', 1, 560, 120, [['lo_mail_reporte']]);
linkOut('t_reporte', 'lo_mail_reporte', '→ Mail', ['li_mail'], 780, 120);

// =====================================================================================
//  06  Escritura en InfluxDB (todos los flows escriben por acá)
// =====================================================================================
tab('t_influx', '06 Escritura en InfluxDB', 'Un solo lugar para escribir: arma la petición con el token del entorno, escribe y reintenta si falla.');
linkIn('t_influx', 'li_influx', 'filas a escribir', ['lo_influx_gen', 'lo_influx_kpi', 'lo_influx_bomba', 'lo_influx_umbral'], 140, 100, ['influx_armar']);
fn('t_influx', 'influx_armar', 'Armar petición (token del entorno)', 'influx_armar', 1, 400, 100, [['http_escritura']]);
http('t_influx', 'http_escritura', 'POST InfluxDB /api/v2/write', 680, 100, ['influx_revisar']);
fn('t_influx', 'influx_revisar', 'Revisar respuesta (204 = escrito)', 'influx_revisar', 2, 930, 100, [['demora_influx'], []]);
demora('t_influx', 'demora_influx', 'esperar 10 s y reintentar', 10, 930, 180, ['influx_armar']);

// =====================================================================================
//  07  Envio de mail (todos los avisos salen por acá)
// =====================================================================================
tab('t_mail', '07 Envío de mail', 'Un solo lugar para enviar: usuario y contraseña de aplicación salen del entorno (.env). Si falla la red, reintenta.');
linkIn('t_mail', 'li_mail', 'mails a enviar', ['lo_mail_bomba', 'lo_mail_umbral', 'lo_mail_reporte'], 140, 100, ['mail_preparar']);
fn('t_mail', 'mail_preparar', 'Preparar mail (destinatarios del entorno)', 'mail_preparar', 1, 420, 100, [['mail_node']]);
add({ id: 'mail_node', type: 'e-mail', z: 't_mail', server: '${SMTP_HOST}', port: '${SMTP_PORT}', authtype: 'BASIC', saslformat: true, token: 'oauth2Response.access_token', secure: false, tls: true, name: '', dname: 'Mail (STARTTLS, SMTP_* del entorno)', x: 740, y: 100, wires: [] });
add({ id: 'catch_mail', type: 'catch', z: 't_mail', name: 'errores de envío', scope: ['mail_node'], uncaught: false, x: 160, y: 200, wires: [['mail_reintento']] });
fn('t_mail', 'mail_reintento', 'Reintentar si es error de red', 'mail_reintento', 1, 440, 200, [['demora_mail']]);
demora('t_mail', 'demora_mail', 'esperar 5 s', 5, 700, 200, ['mail_node']);

fs.writeFileSync(SALIDA, JSON.stringify(nodos, null, 2) + '\n', 'utf8');
console.log('flows.json escrito: ' + nodos.length + ' nodos, ' + nodos.filter((n) => n.type === 'tab').length + ' pestañas -> ' + path.relative(process.cwd(), SALIDA));
