// REPORTE DIARIO (06:00 hora Argentina): KPIs del dia anterior y conteo de fallas, por mail.
// Los datos salen de la memoria de Node-RED (KPIs de los dias cerrados y contador de eventos por dia).
// Con msg.prueba = true arma el reporte con el DIA EN CURSO (para probar el formato) y lo marca [PRUEBA].
const A = global.get('aqm');
const ahora = Date.now();
const prueba = msg.prueba === true;
const marcar = prueba || global.get('marcar_prueba') !== false;
const diaIni = prueba ? A.inicioPeriodo('dia', ahora) : A.inicioPeriodo('dia', ahora) - 24 * 3600 * 1000;
const dia = A.fmtDia(diaIni);
const etiquetaDia = dia.split('-').reverse().join('/');

let kpis = ((global.get('kpi_cerrados') || { dia: {} }).dia || {})[diaIni];
let origenKpi = 'dia cerrado';
if (!kpis && prueba) {
    const p = (global.get('kpi_estado') || {}).dia;
    kpis = p ? A.calcularKpis('dia', p.acc) : null;
    origenKpi = 'dia en curso (parcial)';
}
kpis = kpis || [];
const ev = (global.get('eventos_dia') || {})[dia] || {};
const n = (k) => ev[k] || 0;

const filas = kpis.map((k) => '<tr><td>' + k.equipo + '</td><td>' + k.kpi + '</td><td style="text-align:right">' + String(k.value).replace('.', ',') +
    '</td><td>' + k.unit + '</td><td style="text-align:right">' + k.muestras + '</td></tr>').join('');
const tabla = kpis.length
    ? '<table border="1" cellpadding="5" cellspacing="0" style="border-collapse:collapse"><tr><th>Equipo</th><th>Indicador</th><th>Valor</th><th>Unidad</th><th>Muestras</th></tr>' + filas + '</table>'
    : '<p><i>No hay indicadores guardados para este día (Node-RED no estuvo midiendo o el día todavía no cerró).</i></p>';

const html = '<h2>Reporte diario AquaMonitor - ' + etiquetaDia + (marcar ? ' [PRUEBA]' : '') + '</h2>' +
    (prueba ? '<p><b>[PRUEBA]</b> Reporte armado con el día en curso (' + origenKpi + ').</p>' : '') +
    '<h3>Indicadores del día (por equipo)</h3>' + tabla +
    '<h3>Fallas y alertas del día</h3><ul>' +
    '<li>Fallas de la bomba EQ01: <b>' + n('BOMBA_FALLA') + '</b> (normalizaciones: ' + n('BOMBA_NORMALIZADA') + ')</li>' +
    '<li>Alertas críticas EQ02/EQ03: <b>' + n('UMBRAL_CRITICO') + '</b></li>' +
    '<li>Advertencias EQ02/EQ03: ' + n('UMBRAL_ADVERTENCIA') + '</li></ul>' +
    '<p style="color:#666">Generado el ' + A.fmtFecha(ahora) + ' (hora Argentina).</p>';
return { topic: (marcar ? '[PRUEBA] ' : '') + 'Reporte diario AquaMonitor - ' + etiquetaDia, payload: html, tipo: 'reporte' };
