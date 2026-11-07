// Si el envio falla por la red (por ejemplo ENETUNREACH al elegir una direccion IPv6 en WSL2), reintenta
// hasta 2 veces; el nodo de mail vuelve a resolver la direccion y suele elegir IPv4. Salida 1 -> espera 5 s -> reenvio.
const texto = String((msg.error && msg.error.message) || '');
if ((msg._reintento || 0) < 2 && /ENETUNREACH|ETIMEDOUT|ECONNRESET|ECONNREFUSED|EAI_AGAIN|EHOSTUNREACH/.test(texto)) {
    node.warn('Mail no enviado (' + texto.slice(0, 80) + '). Reintento ' + ((msg._reintento || 0) + 1) + ' de 2');
    return { to: msg.to, from: msg.from, topic: msg.topic, payload: msg.payload, _reintento: (msg._reintento || 0) + 1 };
}
node.error('Mail NO enviado: ' + texto.slice(0, 200));
return null;
