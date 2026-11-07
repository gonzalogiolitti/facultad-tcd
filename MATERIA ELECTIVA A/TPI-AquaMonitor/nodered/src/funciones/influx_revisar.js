// Revisa la respuesta de InfluxDB: 204 = escrito. Si falla, reintenta hasta 2 veces (cada 10 s).
// Salida 1 -> reintento | salida 2 -> nada (queda el estado del nodo)
const ok = msg.statusCode === 204 || msg.statusCode === 200;
if (ok) {
    const n = (context.get('escrituras') || 0) + 1;
    context.set('escrituras', n);
    node.status({ fill: 'green', shape: 'dot', text: msg.nLineas + ' filas (' + msg.medida + ') | total ' + n });
    return [null, null];
}
node.status({ fill: 'red', shape: 'ring', text: 'HTTP ' + msg.statusCode + ' (' + msg.medida + ')' });
node.error('InfluxDB respondio ' + msg.statusCode + ' al escribir ' + msg.medida + ': ' + String(msg.payload).slice(0, 300));
if ((msg._reintento || 0) < 2 && msg.statusCode !== 400 && msg.statusCode !== 401 && msg.statusCode !== 403) {
    return [{ payload: msg.lp, medida: msg.medida, _reintento: (msg._reintento || 0) + 1 }, null];
}
return [null, null];
