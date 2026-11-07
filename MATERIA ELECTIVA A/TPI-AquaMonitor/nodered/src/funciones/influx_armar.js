// Prepara la peticion de escritura a InfluxDB Cloud (ruta compatible v2, precision ms).
// El token se lee del entorno (.env) y viaja solo en el encabezado: no queda en ningun archivo.
const url = env.get('INFLUX_URL'), org = env.get('INFLUX_ORG'), bucket = env.get('INFLUX_BUCKET'), token = env.get('INFLUX_TOKEN');
if (!url || !org || !bucket || !token) { node.error('Faltan variables INFLUX_* en el entorno'); return null; }
const cuerpo = String(msg.payload || '').trim();
if (!cuerpo) return null;
return {
    method: 'POST',
    url: url.replace(/\/+$/, '') + '/api/v2/write?org=' + encodeURIComponent(org) + '&bucket=' + encodeURIComponent(bucket) + '&precision=ms',
    headers: { 'Authorization': 'Token ' + token, 'Content-Type': 'text/plain; charset=utf-8' },
    payload: cuerpo,
    lp: cuerpo,
    medida: msg.medida || '',
    nLineas: cuerpo.split('\n').length,
    _reintento: msg._reintento || 0
};
