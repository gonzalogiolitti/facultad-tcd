// ALERTAS DE EQ02 (filtro) y EQ03 (reactor). La bomba EQ01 NO pasa por aca (tiene su propio flow).
// Anti-spam:
//  - se registra/avisa solo cuando una variable ENTRA en critico o en advertencia (no en cada muestra);
//  - ademas, UN mail por equipo como maximo cada ALERTA_COOLDOWN_S (modo demo: ALERTA_COOLDOWN_DEMO_S, 60 s):
//    si otra variable del mismo equipo se pone critica dentro de ese lapso, igual queda registrada en events
//    (y se ve en el tablero) pero no genera otro mail;
//  - todos los criticos nuevos de un mismo ciclo van juntos en UN solo mail.
// Se aceptan lecturas de calidad 1 y 2; se descartan las de calidad 0.
// Salida 1 -> mail | salida 2 -> filas de events en InfluxDB
const A = global.get('aqm');
const C = A.CATALOGO;
const demo = msg.modo === 'demo';
const cooldownS = demo
    ? Number(env.get('ALERTA_COOLDOWN_DEMO_S') || C.ALERTAS.cooldown_demo_s)
    : Number(env.get('ALERTA_COOLDOWN_S') || C.ALERTAS.cooldown_normal_s);
const ts = msg.ts;
const estado = global.get('umbral_estado') || {};
const criticosNuevos = [];
const mailPorEquipo = global.get('umbral_ultimo_mail') || {};   // ultimo mail de cada equipo (para el cooldown)
const lineas = [];
const porDia = global.get('eventos_dia') || {};
const dia = A.fmtDia(ts);
porDia[dia] = porDia[dia] || {};

(msg.lecturas || []).filter((l) => l.equipo !== 'EQ01' && l.quality !== 0).forEach((l) => {
    const clave = l.equipo + '.' + l.variable;
    const prev = estado[clave] || { sev: null };
    const sev = A.severidad(l.equipo, l.variable, l.value);
    if (sev && sev !== prev.sev && !(prev.sev === 'critical' && sev === 'warning')) {   // entro en una zona peor
        const cfg = C.EQUIPOS[l.equipo].variables[l.variable];
        const rango = cfg[sev === 'critical' ? 'critical' : 'warning'];
        const detalle = cfg.etiqueta + ' ' + l.value + (cfg.unit === 'pH' ? '' : ' ' + cfg.unit) + ' fuera del límite ' + (sev === 'critical' ? 'crítico ' : 'de advertencia ') + A.rangoTexto(rango);
        const tipo = sev === 'critical' ? 'UMBRAL_CRITICO' : 'UMBRAL_ADVERTENCIA';
        lineas.push('events,equipo=' + l.equipo + ',event_type=' + tipo + ',severity=' + sev + ',motivo=' + l.variable +
            ' value=' + l.value + ',detalle="' + A.escStr(detalle) + '" ' + ts);
        porDia[dia][tipo] = (porDia[dia][tipo] || 0) + 1;
        if (sev === 'critical') criticosNuevos.push({ equipo: l.equipo, variable: l.variable, detalle });
    }
    prev.sev = sev;
    estado[clave] = prev;
});
global.set('umbral_estado', estado);
global.set('eventos_dia', porDia);

// cooldown por equipo: los criticos de un equipo que ya recibio mail hace menos de cooldownS solo se registran
const paraMail = criticosNuevos.filter((c) => ts - (mailPorEquipo[c.equipo] || 0) >= cooldownS * 1000);
paraMail.forEach((c) => { mailPorEquipo[c.equipo] = ts; });
global.set('umbral_ultimo_mail', mailPorEquipo);

let mail = null;
if (paraMail.length) {
    const marcar = global.get('marcar_prueba') !== false;
    const equipos = Array.from(new Set(paraMail.map((c) => c.equipo))).join(', ');
    mail = {
        topic: (marcar ? '[PRUEBA] ' : '') + 'ALERTA CRÍTICA: ' + equipos + ' - ' + paraMail.map((c) => c.variable).join(', '),
        payload: (marcar ? '[PRUEBA] ' : '') + 'ALERTA CRÍTICA\nHora: ' + A.fmtFecha(ts) + '\n' +
            paraMail.map((c) => '- ' + c.equipo + '/' + c.variable + ': ' + c.detalle).join('\n') +
            '\n\n(Un solo aviso por equipo; otras variables que se pongan críticas en los próximos ' + Math.round(cooldownS / 60 * 10) / 10 + ' min quedan registradas en el tablero pero no mandan otro mail.)',
        tipo: 'alerta'
    };
}
node.status({ fill: lineas.length ? 'yellow' : 'green', shape: 'dot', text: (lineas.length ? lineas.length + ' evento(s) | ' : 'sin eventos | ') + 'cooldown ' + cooldownS + ' s' });
return [mail, lineas.length ? { payload: lineas.join('\n'), medida: 'events' } : null];
