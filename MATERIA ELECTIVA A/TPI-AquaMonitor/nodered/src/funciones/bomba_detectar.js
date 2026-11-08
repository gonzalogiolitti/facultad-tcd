// ALERTA DE BOMBA EQ01 - detector de "normal -> falla" y "falla -> normal".
// Falla critica: vibracion > 7,1 | caudal < 70 o > 175 | presion < 2,5 o > 6,5 | corriente > 65 | ESTADO < 0,5
// (los limites salen del catalogo). Se descartan solo las lecturas con calidad 0; calidad 1 y 2 valen.
// Avisa UNA vez cuando empieza la falla y UNA vez cuando se normaliza: la falla se da por terminada cuando
// la bomba estuvo ALERTA_REARME_S segundos seguidos en valores normales (por defecto 60).
// NO hay cooldown en la bomba: una falla nueva, despues de normalizarse, siempre avisa.
const A = global.get('aqm');
const rearmeS = Number(env.get('ALERTA_REARME_S') || A.CATALOGO.ALERTAS.rearme_s);
const ts = msg.ts;
const r = A.motivosBomba(msg.lecturas || []);

const est = global.get('bomba_estado') || { enFalla: false, desde: null, okDesde: null, fallas: 0 };
const eventos = [];

// CORTE DE LA MEDICION: si pasaron mas de corte_medicion_s entre dos mediciones (Node-RED apagado o PC suspendida) y la bomba
// estaba en falla, no se sabe cuando termino. Se cierra con la duracion REALMENTE observada (hasta la ultima medicion antes
// del corte) y se marca como "interrumpido"; asi no se informa una falla de 23 horas que en realidad no se observo.
const corteS = A.CATALOGO.ALERTAS.corte_medicion_s;
if (est.enFalla && est.ultimoTs && ts - est.ultimoTs > corteS * 1000) {
    eventos.push({ tipo: 'normalizada', ts: est.ultimoTs, duracionS: Math.round((est.ultimoTs - est.desde) / 1000), interrumpido: true,
                   corteS: Math.round((ts - est.ultimoTs) / 1000), valores: {} });
    est.enFalla = false; est.desde = null; est.okDesde = null;
}
est.ultimoTs = ts;

let evento = null;
if (r.motivos.length > 0) {
    est.okDesde = null;
    if (!est.enFalla) {                                         // paso de normal a falla: AVISAR
        est.enFalla = true;
        est.desde = ts;
        est.fallas = (est.fallas || 0) + 1;
        evento = { tipo: 'falla', ts, motivos: r.motivos, valores: r.valores };
    }
} else if (est.enFalla) {                                       // esta normal, pero venia en falla
    if (est.okDesde === null) est.okDesde = ts;
    if (ts - est.okDesde >= rearmeS * 1000) {                   // normal sostenido: cerrar la falla
        evento = { tipo: 'normalizada', ts, duracionS: Math.round((est.okDesde - est.desde) / 1000), valores: r.valores };
        est.enFalla = false;
        est.desde = null;
        est.okDesde = null;
    }
}
if (evento) eventos.push(evento);
global.set('bomba_estado', est);
node.status(est.enFalla ? { fill: 'red', shape: 'dot', text: 'EN FALLA' + (est.okDesde ? ' (normalizando)' : '') } : { fill: 'green', shape: 'dot', text: 'normal | fallas: ' + est.fallas });
if (!eventos.length) return null;
return [eventos.map((e) => ({ evento: e }))];     // uno o dos mensajes (cierre por corte + falla nueva si sigue fallando)
