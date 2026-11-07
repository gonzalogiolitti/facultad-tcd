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
global.set('bomba_estado', est);
node.status(est.enFalla ? { fill: 'red', shape: 'dot', text: 'EN FALLA' + (est.okDesde ? ' (normalizando)' : '') } : { fill: 'green', shape: 'dot', text: 'normal | fallas: ' + est.fallas });
return evento ? { evento } : null;
