// Interruptores de los mails:
//  - marcar_on / marcar_off : con la marca activada (valor por defecto) todos los avisos y reportes llevan [PRUEBA]
//    en el asunto. Para la presentacion se desactiva.
//  - silenciar_on / silenciar_off : con "silenciar" NO se manda ningun mail (queda un aviso en el log). Sirve para
//    probar fallas sin llenar la bandeja. Despues de usarlo hay que volver a "silenciar_off".
if (msg.accion === 'marcar_on' || msg.accion === 'marcar_off') global.set('marcar_prueba', msg.accion === 'marcar_on');
if (msg.accion === 'silenciar_on' || msg.accion === 'silenciar_off') global.set('mail_silenciado', msg.accion === 'silenciar_on');
node.status({ fill: global.get('mail_silenciado') ? 'yellow' : 'blue', shape: 'dot',
    text: 'mails ' + (global.get('marcar_prueba') === false ? 'SIN marca' : 'marcados [PRUEBA]') + (global.get('mail_silenciado') ? ' | SILENCIADOS' : '') });
return null;
