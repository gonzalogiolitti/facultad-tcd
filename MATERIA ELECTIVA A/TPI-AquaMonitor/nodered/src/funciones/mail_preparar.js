// Arma el mail con los datos del entorno (.env). Quien llama pone msg.topic (asunto), msg.payload (texto o
// HTML) y msg.tipo ('alerta' o 'reporte'). Los destinatarios y el remitente salen del entorno.
const para = msg.tipo === 'reporte' ? (env.get('REPORTE_MAIL_TO') || env.get('ALERT_MAIL_TO')) : env.get('ALERT_MAIL_TO');
if (!para) { node.error('Falta ALERT_MAIL_TO / REPORTE_MAIL_TO en el entorno'); return null; }
const n = (global.get('mails_enviados') || 0) + 1;
global.set('mails_enviados', n);
node.status({ fill: 'blue', shape: 'dot', text: 'mails pedidos desde el arranque del contador: ' + n });
return { to: para, from: env.get('ALERT_MAIL_FROM') || undefined, topic: msg.topic, payload: msg.payload, _reintento: msg._reintento || 0 };
