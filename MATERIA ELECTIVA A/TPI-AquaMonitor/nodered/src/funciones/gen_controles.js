// CONTROLES DEL GENERADOR: todos los botones (inject) pasan por aca con msg.accion.
//   modo_normal | modo_demo | pausa | reanudar | aleatorio_on | aleatorio_off | falla:<NOMBRE> | reiniciar_estado
// Cambiar de modo NO requiere editar codigo ni reiniciar: se guarda en el contexto global.
const A = global.get('aqm');
const C = A.CATALOGO;
const accion = String(msg.accion || '');

if (accion === 'modo_normal' || accion === 'modo_demo') {
    global.set('gen_modo', accion === 'modo_demo' ? 'demo' : 'normal');
    global.set('gen_forzar', true);             // mide enseguida con el nuevo intervalo
    node.warn('Modo del generador: ' + global.get('gen_modo'));
} else if (accion === 'pausa') {
    global.set('gen_pausa', true);
} else if (accion === 'reanudar') {
    global.set('gen_pausa', false);
} else if (accion === 'aleatorio_on') {
    global.set('gen_aleatorio', true);
} else if (accion === 'aleatorio_off') {
    global.set('gen_aleatorio', false);
} else if (accion === 'reiniciar_estado') {
    global.set('gen_estado', null);
} else if (accion.indexOf('falla:') === 0) {
    const tipo = accion.slice(6);
    if (!C.ANOMALIAS[tipo]) { node.error('Falla desconocida: ' + tipo); return null; }
    const cola = global.get('gen_cola_fallas') || [];
    cola.push(tipo);
    global.set('gen_cola_fallas', cola);
    global.set('gen_forzar', true);             // la falla se ve en la siguiente medicion (no hay que esperar 2 minutos)
    node.warn('Falla provocada: ' + tipo + ' (' + C.ANOMALIAS[tipo].descripcion + ')');
} else {
    node.error('Accion desconocida: ' + accion);
    return null;
}

const modo = global.get('gen_modo') || 'normal';
node.status({
    fill: 'blue', shape: 'dot',
    text: 'modo ' + modo + (global.get('gen_pausa') ? ' | PAUSADO' : '') + (global.get('gen_aleatorio') ? ' | fallas aleatorias' : '')
});
return null;
