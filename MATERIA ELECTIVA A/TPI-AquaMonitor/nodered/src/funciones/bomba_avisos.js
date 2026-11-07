// Convierte el evento de la bomba en: [1] mail, [2] fila en InfluxDB (measurement events).
// Los eventos de PRUEBA (boton) solo mandan mail, no escriben en la base.
const A = global.get('aqm');
const e = msg.evento;
if (!e) return null;
const marcar = e.prueba === true || global.get('marcar_prueba') !== false;   // por defecto los mails llevan [PRUEBA] mientras se desarrolla
const hora = A.fmtFecha(e.ts);
const quien = 'Bomba de ingreso EQ01 (planta PTEF, área CAPT)';
const v = e.valores || {};
const lectura = ['CAUDAL', 'PRESION', 'CORRIENTE', 'VIBRACION', 'ESTADO'].filter((k) => v[k] !== undefined).map((k) => k + ' ' + v[k]).join(' | ');

let asunto, texto, lineaEvento, clave;
if (e.tipo === 'falla') {
    const motivo = e.motivos[0].variable;
    asunto = 'FALLA: Bomba de ingreso EQ01';
    texto = 'FALLA DE BOMBA\n' + quien + '\nHora: ' + hora + '\nMotivo:\n' + e.motivos.map((m) => '- ' + m.texto).join('\n') +
        (lectura ? '\nÚltimos valores: ' + lectura : '');
    lineaEvento = 'events,equipo=EQ01,event_type=BOMBA_FALLA,severity=critical,motivo=' + A.escTag(motivo) +
        ' value=' + Number(e.motivos[0].valor) + ',detalle="' + A.escStr(e.motivos.map((m) => m.texto).join('; ')) + '" ' + e.ts;
    clave = 'BOMBA_FALLA';
} else {
    const dur = e.duracionS + ' segundos (' + Math.floor(e.duracionS / 60) + ' min ' + (e.duracionS % 60) + ' s)';
    asunto = 'NORMALIZADA: Bomba de ingreso EQ01';
    texto = 'BOMBA NORMALIZADA\n' + quien + '\nHora: ' + hora + '\nEstuvo en falla ' + dur + '.' + (lectura ? '\nÚltimos valores: ' + lectura : '');
    lineaEvento = 'events,equipo=EQ01,event_type=BOMBA_NORMALIZADA,severity=info value=' + Number(e.duracionS) +
        ',duracion_s=' + Math.round(e.duracionS) + 'i,detalle="' + A.escStr('estuvo en falla ' + e.duracionS + ' s') + '" ' + e.ts;
    clave = 'BOMBA_NORMALIZADA';
}
if (marcar) { asunto = '[PRUEBA] ' + asunto; texto = '[PRUEBA] ' + texto; }

let salidaEvento = null;
if (!e.prueba) {
    salidaEvento = { payload: lineaEvento, medida: 'events' };
    const porDia = global.get('eventos_dia') || {};
    const dia = A.fmtDia(e.ts);
    porDia[dia] = porDia[dia] || {};
    porDia[dia][clave] = (porDia[dia][clave] || 0) + 1;
    Object.keys(porDia).sort().slice(0, -10).forEach((k) => delete porDia[k]);
    global.set('eventos_dia', porDia);
}
return [{ topic: asunto, payload: texto, tipo: 'alerta' }, salidaEvento];
