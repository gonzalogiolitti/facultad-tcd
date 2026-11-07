// Interruptor de los mails: con "marcar [PRUEBA]" activado (valor por defecto) todos los avisos y reportes
// llevan [PRUEBA] en el asunto. Para la presentacion se desactiva con el boton correspondiente.
global.set('marcar_prueba', msg.accion === 'marcar_on');
node.status({ fill: 'blue', shape: 'dot', text: 'mails ' + (global.get('marcar_prueba') ? 'marcados [PRUEBA]' : 'SIN marca [PRUEBA]') });
return null;
