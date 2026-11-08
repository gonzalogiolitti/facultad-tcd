// Arma el mail con los datos del entorno (.env). Quien llama pone msg.topic (asunto), msg.payload (texto o
// HTML) y msg.tipo ('alerta' o 'reporte'). Los destinatarios y el remitente salen del entorno.
const para = msg.tipo === 'reporte' ? (env.get('REPORTE_MAIL_TO') || env.get('ALERT_MAIL_TO')) : env.get('ALERT_MAIL_TO');
if (!para) { node.error('Falta ALERT_MAIL_TO / REPORTE_MAIL_TO en el entorno'); return null; }
// Varios destinatarios: separados por coma. Se normalizan tambien ';' y los espacios (con solo espacios, nodemailer se queda con la
// PRIMERA direccion y descarta el resto sin avisar). Si hay nombres ("Ana <ana@x.com>") se respetan.
const destinatarios = String(para).replace(/;/g, ',').split(',').map((x) => x.trim()).filter(Boolean)
    .map((x) => (x.indexOf('<') === -1 ? x.split(/\s+/) : [x])).reduce((a, b) => a.concat(b), []).join(', ');
if (global.get('mail_silenciado') === true) {                 // modo pruebas sin mails (boton "Silenciar mails")
    node.warn('Mail SILENCIADO (no se envia): ' + msg.topic);
    node.status({ fill: 'yellow', shape: 'ring', text: 'mails SILENCIADOS' });
    return null;
}
const n = (global.get('mails_enviados') || 0) + 1;
global.set('mails_enviados', n);
node.status({ fill: 'blue', shape: 'dot', text: 'mails pedidos desde el arranque del contador: ' + n });
return { to: destinatarios, from: env.get('ALERT_MAIL_FROM') || undefined, topic: msg.topic, payload: msg.payload, _reintento: msg._reintento || 0 };
