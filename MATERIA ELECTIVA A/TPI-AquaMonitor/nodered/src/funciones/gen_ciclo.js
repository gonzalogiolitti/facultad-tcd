// GENERADOR DE DATOS: simula los 3 equipos (15 variables) y arma un "ciclo" de mediciones.
// Es el reemplazo en Node-RED del simulador de Python (mismas formulas, mismos rangos).
// Este nodo se ejecuta cada 5 s, pero solo genera un ciclo cuando toca segun el modo:
//   normal = una medicion cada 120 s   |   demo = una cada 15 s
// Salida 1 -> escritura en InfluxDB (medicion cruda + eventos de fallas provocadas)
// Salida 2 -> lecturas del ciclo para los indicadores y las alertas
const A = global.get('aqm');
const C = A.CATALOGO;
const ahora = Date.now();

// ---------- modo e intervalo ----------
const modo = global.get('gen_modo') || 'normal';
const intervaloS = modo === 'demo'
    ? Number(env.get('GEN_INTERVALO_DEMO_S') || C.GENERADOR.intervalo_demo_s)
    : Number(env.get('GEN_INTERVALO_S') || C.GENERADOR.intervalo_normal_s);

if (global.get('gen_pausa') === true) {
    node.status({ fill: 'yellow', shape: 'ring', text: 'PAUSADO' });
    return null;
}

// ---------- ¿toca generar un ciclo? ----------
const ultimoTs = global.get('gen_ultimo_ts') || 0;
const tramo = Math.floor(ahora / (intervaloS * 1000)) * intervaloS * 1000;   // inicio del tramo actual (17:04:00, 17:06:00, ...)
let ts = tramo;
if (global.get('gen_forzar') === true) {                                  // al provocar una falla se mide enseguida
    ts = Math.floor(ahora / 1000) * 1000;
    if (ts <= ultimoTs) ts = ultimoTs + 1000;
    global.set('gen_forzar', false);
} else if (tramo <= ultimoTs) {                                           // ya se midio en este tramo
    return null;
} else if (ahora - tramo > 15000) {                                       // tramo nuevo pero se llega tarde (recien arrancado): hora real
    ts = Math.floor(ahora / 1000) * 1000;
}

// ---------- estado interno de los equipos (persistente) ----------
function nuevoEstado() {
    const fase = () => Math.random() * 2 * Math.PI;
    return {
        EQ01: { ciclo: 0, fase: fase(), anom: {}, enMarcha: true },
        EQ02: { ciclo: 0, fase: fase(), anom: {}, colmatacion: 0 },
        EQ03: { ciclo: 0, fase: fase(), anom: {}, phDesvio: 0, phDesvioCiclos: 0 }
    };
}
const st = global.get('gen_estado') || nuevoEstado();

// ---------- fallas: las pedidas por botones y las aleatorias ----------
const inyectadas = [];
(global.get('gen_cola_fallas') || []).forEach((t) => {
    st[C.ANOMALIAS[t].equipo].anom[t] = C.ANOMALIAS[t].ciclos_default;
    inyectadas.push({ tipo: t, origen: 'manual' });
});
global.set('gen_cola_fallas', []);
if (global.get('gen_aleatorio') === true && Math.random() < C.GENERADOR.prob_falla_aleatoria) {
    const tipos = Object.keys(C.ANOMALIAS);
    const t = tipos[Math.floor(Math.random() * tipos.length)];
    const eq = C.ANOMALIAS[t].equipo;
    if (!((st[eq].anom[t] || 0) > 0)) {
        st[eq].anom[t] = C.ANOMALIAS[t].ciclos_default;
        inyectadas.push({ tipo: t, origen: 'aleatoria' });
    }
}

// ---------- utilidades de senal ----------
const gauss = (sigma) => {
    let u = 0;
    while (u === 0) u = Math.random();
    return sigma * Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * Math.random());
};
const uni = (a, b) => a + (b - a) * Math.random();
const sinus = (e, amp, periodo, desf) => (periodo <= 0 ? 0 : amp * Math.sin((2 * Math.PI / periodo) * e.ciclo + e.fase + (desf || 0)));
const activa = (e, t) => (e.anom[t] || 0) > 0;
const clip = (v, lo, hi) => Math.max(lo, Math.min(hi, v));
const r3 = (v) => Math.round(v * 1000) / 1000;

// Calidad del dato: 2 = bueno, 1 = dudoso (muy fuera del rango de operacion), 0 = inverosimil.
function calidad(eq, variable, v) {
    const cfg = C.EQUIPOS[eq].variables[variable];
    const lo = cfg.min_op, hi = cfg.max_op;
    const span = hi > lo ? hi - lo : 1;
    if (v >= lo - 0.5 * span && v <= hi + 0.5 * span) return 2;
    if (v >= lo - 1.5 * span && v <= hi + 1.5 * span) return 1;
    return 0;
}

// ---------- EQ01: bomba de ingreso ----------
function leerBomba(e) {
    const n = C.EQUIPOS.EQ01.variables;
    if (activa(e, 'PARADA_BOMBA')) e.enMarcha = false;                       // parada imprevista provocada
    else if (activa(e, 'CAUDAL_DROP') && Math.random() < 0.10) e.enMarcha = false;   // a veces la proteccion para la bomba
    else if (!activa(e, 'CAUDAL_DROP')) e.enMarcha = true;
    if (!e.enMarcha) {                                                       // bomba parada: todo colapsa a ~0
        return {
            CAUDAL: [Math.abs(gauss(0.4)), 2], PRESION: [Math.abs(gauss(0.05)), 2],
            CORRIENTE: [Math.abs(gauss(0.3)), 2], VIBRACION: [Math.abs(gauss(0.05)), 2], ESTADO: [0, 2]
        };
    }
    let caudal = n.CAUDAL.normal + sinus(e, 6.0, 180) + gauss(1.8);
    if (activa(e, 'CAUDAL_DROP')) caudal *= uni(0.45, 0.65);
    const desv = (caudal - n.CAUDAL.normal) / n.CAUDAL.normal;
    let presion = n.PRESION.normal - 1.2 * desv * n.PRESION.normal * 0.15 + sinus(e, 0.08, 90, 1.0) + gauss(0.06);
    if (activa(e, 'CAUDAL_DROP')) presion *= uni(0.70, 0.85);
    let corriente = n.CORRIENTE.normal * (0.55 + 0.45 * caudal / n.CAUDAL.normal) + gauss(0.7);
    if (activa(e, 'CAUDAL_DROP')) { corriente *= uni(0.80, 0.92); corriente += gauss(2.5); }
    let vib = n.VIBRACION.normal + sinus(e, 0.25, 60, 0.5) + Math.abs(gauss(0.30));
    if (activa(e, 'VIB_HIGH')) {                                             // la falla avanza cuanto mas dura
        const avance = 1 - e.anom.VIB_HIGH / Math.max(C.ANOMALIAS.VIB_HIGH.ciclos_default, 1);
        vib += 4.5 + 4.0 * avance + Math.abs(gauss(0.6));
    }
    return {
        CAUDAL: [Math.max(caudal, 0), calidad('EQ01', 'CAUDAL', caudal)],
        PRESION: [Math.max(presion, 0), calidad('EQ01', 'PRESION', presion)],
        CORRIENTE: [Math.max(corriente, 0), calidad('EQ01', 'CORRIENTE', corriente)],
        VIBRACION: [Math.max(vib, 0), calidad('EQ01', 'VIBRACION', vib)],
        ESTADO: [1, 2]
    };
}

// ---------- EQ02: filtro de arena ----------
function leerFiltro(e) {
    const n = C.EQUIPOS.EQ02.variables;
    const col = e.colmatacion;
    const turbIn = n.TURB_IN.normal + sinus(e, 2.5, 200) + Math.abs(gauss(1.2));
    let turbOut = n.TURB_OUT.normal + 0.9 * col * n.TURB_OUT.normal + 0.02 * (turbIn - n.TURB_IN.normal) + Math.abs(gauss(0.05));
    if (activa(e, 'FILTER_SAT')) turbOut += 0.6 + Math.abs(gauss(0.15));
    let presDif = n.PRES_DIF.normal + 520.0 * col + sinus(e, 12.0, 70) + gauss(8.0);
    if (activa(e, 'FILTER_SAT')) presDif += 180.0;
    const caudalFilt = n.CAUDAL_FILT.normal * (1.0 - 0.18 * Math.min(col, 1.2)) + sinus(e, 4.0, 150, 0.7) + gauss(1.5);
    const ef = clip((turbIn - Math.max(turbOut, 1e-6)) / Math.max(turbIn, 1e-6) * 100 + gauss(0.6), 0, 100);
    return {
        TURB_IN: [Math.max(turbIn, 0), calidad('EQ02', 'TURB_IN', turbIn)],
        TURB_OUT: [Math.max(turbOut, 0), calidad('EQ02', 'TURB_OUT', turbOut)],
        PRES_DIF: [Math.max(presDif, 0), calidad('EQ02', 'PRES_DIF', presDif)],
        CAUDAL_FILT: [Math.max(caudalFilt, 0), calidad('EQ02', 'CAUDAL_FILT', caudalFilt)],
        EFICIENCIA: [ef, calidad('EQ02', 'EFICIENCIA', ef)]
    };
}

// ---------- EQ03: reactor biologico ----------
function leerReactor(e) {
    const n = C.EQUIPOS.EQ03.variables;
    const temp = n.TEMP.normal + sinus(e, 3.0, 720) + gauss(0.25);
    let ph = n.PH.normal + sinus(e, 0.08, 110) + e.phDesvio + gauss(0.04);
    if (activa(e, 'PH_SPIKE')) ph += (e.ciclo % 2 === 0 ? 1 : -1) * (1.4 + Math.abs(gauss(0.2)));
    const od = n.OD.normal - 0.06 * (temp - n.TEMP.normal) + sinus(e, 0.35, 95, 1.3) + gauss(0.12);
    const cond = n.CONDUCT.normal + sinus(e, 120.0, 260) + 0.05 * e.ciclo + gauss(25.0);
    const nivel = clip(n.NIVEL.normal + sinus(e, 5.0, 130, 0.4) + gauss(0.8), 0, 100);
    return {
        PH: [ph, calidad('EQ03', 'PH', ph)],
        OD: [Math.max(od, 0), calidad('EQ03', 'OD', od)],
        TEMP: [temp, calidad('EQ03', 'TEMP', temp)],
        CONDUCT: [Math.max(cond, 0), calidad('EQ03', 'CONDUCT', cond)],
        NIVEL: [nivel, calidad('EQ03', 'NIVEL', nivel)]
    };
}

// ---------- avanzar el estado un ciclo (igual que EquipoBase.paso del simulador) ----------
function paso(e, extra) {
    e.ciclo += 1;
    Object.keys(e.anom).forEach((t) => { e.anom[t] -= 1; if (e.anom[t] <= 0) delete e.anom[t]; });
    if (extra) extra(e);
}
const pasoFiltro = (e) => {
    e.colmatacion += (1.0 / 240) * (activa(e, 'FILTER_SAT') ? 6.0 : 1.0);   // retrolavado cada 240 ciclos
    if (e.ciclo % 240 === 0) e.colmatacion = 0;
};
const pasoReactor = (e) => {
    if (e.phDesvioCiclos > 0) { e.phDesvioCiclos -= 1; if (e.phDesvioCiclos === 0) e.phDesvio = 0; }
    else if (Math.random() < 0.03) { e.phDesvio = uni(-0.35, 0.35); e.phDesvioCiclos = 3 + Math.floor(Math.random() * 6); }
};

// ---------- ciclo ----------
const modelos = { EQ01: [leerBomba, null], EQ02: [leerFiltro, pasoFiltro], EQ03: [leerReactor, pasoReactor] };
const lecturas = [];
const fallasActivas = [];
Object.keys(modelos).forEach((eq) => {
    const e = st[eq];
    Object.keys(e.anom).forEach((t) => fallasActivas.push(t));
    const crudo = modelos[eq][0](e);
    Object.keys(crudo).forEach((variable) => {
        lecturas.push({
            equipo: eq, area: C.EQUIPOS[eq].area, variable, unit: C.EQUIPOS[eq].variables[variable].unit,
            value: r3(crudo[variable][0]), quality: crudo[variable][1], ts
        });
    });
    paso(e, modelos[eq][1]);
});
global.set('gen_estado', st);
global.set('gen_ultimo_ts', ts);
global.set('gen_ciclos_total', (global.get('gen_ciclos_total') || 0) + 1);

// ---------- escritura en InfluxDB (line protocol, precision ms) ----------
const lineas = lecturas.map((l) =>
    'raw_variables,planta=' + C.PLANTA + ',area=' + l.area + ',equipo=' + l.equipo + ',variable=' + l.variable +
    ',unit=' + A.escTag(l.unit) + ',tag=' + [C.EMPRESA, C.PLANTA, l.area, l.equipo, l.variable].join('-') +
    ' value=' + l.value + ',quality=' + l.quality + 'i ' + l.ts);
inyectadas.forEach((i) => {
    const an = C.ANOMALIAS[i.tipo];
    lineas.push('events,equipo=' + an.equipo + ',event_type=ANOMALIA_INYECTADA,severity=info,motivo=' + i.tipo +
        ' value=' + an.ciclos_default + ',detalle="' + A.escStr(an.descripcion + ' (origen: ' + i.origen + ')') + '" ' + ts);
});

node.status({
    fill: fallasActivas.length ? 'red' : 'green', shape: 'dot',
    text: modo + ' ' + intervaloS + ' s | ciclo ' + global.get('gen_ciclos_total') + (fallasActivas.length ? ' | falla: ' + fallasActivas.join(',') : '') +
        (global.get('gen_aleatorio') ? ' | aleatorias' : '')
});

return [
    { payload: lineas.join('\n'), medida: 'raw_variables', ts },
    { lecturas, ts, modo, intervaloS, fallasActivas }
];
