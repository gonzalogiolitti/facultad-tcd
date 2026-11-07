#!/usr/bin/env node
/**
 * Pruebas automaticas de la logica de los flows (sin Node-RED y sin red).
 *   node nodered/pruebas/probar.js
 * Carga flows.json, toma el codigo de cada nodo "function" y lo ejecuta con un contexto
 * simulado y un reloj simulado. Sirve para comprobar en segundos cosas que en vivo tardan
 * horas (cierre de turnos/dias/semanas, maquina de estados de la bomba, cooldown, etc.).
 */
const path = require('path');
const assert = require('assert');
const flows = require(path.join(__dirname, '..', 'userdir', 'flows.json'));
const A = require(path.join(__dirname, '..', 'userdir', 'aqm', 'aqm.js'));
const C = A.CATALOGO;

let ok = 0, fallos = 0;
function prueba(nombre, f) {
    try { f(); ok++; console.log('  OK   ' + nombre); }
    catch (e) { fallos++; console.log('  FALLA ' + nombre + '\n       ' + String(e.message).split('\n')[0]); }
}

// ---------- entorno simulado de un nodo function ----------
const RELOJ = { ahora: Date.UTC(2026, 10, 7, 20, 0, 0) };
const DateReal = Date;
function fijarReloj() {
    global.Date = class extends DateReal {
        constructor(...a) { if (a.length) super(...a); else super(RELOJ.ahora); }
        static now() { return RELOJ.ahora; }
    };
}
function restaurarReloj() { global.Date = DateReal; }

function nuevoMundo(envVars) {
    const ctx = () => { const m = new Map(); return { get: (k) => (m.has(k) ? m.get(k) : undefined), set: (k, v) => { m.set(k, v === null ? undefined : JSON.parse(JSON.stringify(v === undefined ? null : v))); } }; };
    const glob = ctx();
    const base = new Map([['aqm', A]]);
    const global_ = { get: (k) => (base.has(k) ? base.get(k) : glob.get(k)), set: (k, v) => glob.set(k, v) };
    const log = { warns: [], errors: [], status: {} };
    const nodoDe = (id) => ({
        status: (s) => { log.status[id] = s; }, warn: (m) => log.warns.push(String(m)), error: (m) => log.errors.push(String(m)), log: () => {}
    });
    const env = { get: (k) => (envVars || {})[k] };
    const funcs = {};
    flows.filter((n) => n.type === 'function').forEach((n) => {
        const f = new Function('msg', 'node', 'context', 'flow', 'global', 'env', n.func);
        const ctxNodo = ctx();
        funcs[n.id] = (msg) => f(msg, nodoDe(n.id), ctxNodo, ctx(), global_, env);
    });
    return { run: funcs, global: global_, log };
}

const lineasDe = (msg) => (msg && msg.payload ? String(msg.payload).split('\n') : []);
const dividirFuera = (txt, sep) => {   // separa por `sep` sin cortar lo que esta entre comillas
    const out = []; let cur = '', q = false;
    for (let i = 0; i < txt.length; i++) { const c = txt[i]; if (c === '\\') { cur += c + txt[++i]; continue; } if (c === '"') q = !q; if (c === sep && !q) { out.push(cur); cur = ''; } else cur += c; }
    out.push(cur); return out;
};
const parseLP = (l) => {            // measurement,tags campos ts
    const partes = dividirFuera(l, ' ');
    const ts = Number(partes.pop()); const campTxt = partes.pop(); const cab = partes.join(' ');
    const [medida, ...tg] = cab.split(',');
    const tags = {}; tg.forEach((t) => { const i = t.indexOf('='); tags[t.slice(0, i)] = t.slice(i + 1); });
    const campos = {}; dividirFuera(campTxt, ',').forEach((t) => { const i = t.indexOf('='); campos[t.slice(0, i)] = t.slice(i + 1); });
    return { medida, tags, campos, ts };
};

// =====================================================================================
console.log('\n[1] Catalogo y horas (hora Argentina)');
prueba('15 variables en 3 equipos', () => {
    const n = Object.values(C.EQUIPOS).map((e) => Object.keys(e.variables).length);
    assert.deepStrictEqual(n, [5, 5, 5]);
});
prueba('formato de fecha 24 h: 07/11/2026 17:05:22', () => assert.strictEqual(A.fmtFecha(Date.UTC(2026, 10, 7, 20, 5, 22)), '07/11/2026 17:05:22'));
prueba('formato 24 h tambien a las 05:05:22 y 23:59:59 (sin am/pm)', () => {
    assert.strictEqual(A.fmtFecha(Date.UTC(2026, 10, 7, 8, 5, 22)), '07/11/2026 05:05:22');
    assert.strictEqual(A.fmtFecha(Date.UTC(2026, 10, 8, 2, 59, 59)), '07/11/2026 23:59:59');
});
prueba('turnos: 05:59 ART = T3, 06:00 = T1, 14:00 = T2, 22:00 = T3', () => {
    const t = (h, m) => A.turnoDe(Date.UTC(2026, 10, 7, h + 3, m, 0));
    assert.deepStrictEqual([t(5, 59), t(6, 0), t(13, 59), t(14, 0), t(21, 59), t(22, 0), t(0, 0)], ['T3', 'T1', 'T1', 'T2', 'T2', 'T3', 'T3']);
});
prueba('inicio de turno/dia/semana alineados a hora Argentina', () => {
    const ts = Date.UTC(2026, 10, 7, 20, 5, 22);          // sabado 07/11/2026 17:05:22 ART
    assert.strictEqual(A.fmtFecha(A.inicioPeriodo('turno', ts)), '07/11/2026 14:00:00');
    assert.strictEqual(A.fmtFecha(A.inicioPeriodo('dia', ts)), '07/11/2026 00:00:00');
    assert.strictEqual(A.fmtFecha(A.inicioPeriodo('semana', ts)), '02/11/2026 00:00:00');   // lunes
    assert.strictEqual(A.inicioPeriodo('dia', ts), Date.UTC(2026, 10, 7, 3, 0, 0));          // = 03:00 UTC
});

// =====================================================================================
console.log('\n[2] Generador');
fijarReloj();
{
    const M = nuevoMundo({});
    const ciclos = [];
    const avanzar = (n, seg) => { for (let i = 0; i < n; i++) { RELOJ.ahora += (seg || 120) * 1000; const r = M.run.gen_ciclo({}); if (r) ciclos.push(r[1]); } };
    avanzar(300);
    prueba('un ciclo por cada paso de 120 s (300 pasos = 300 ciclos)', () => assert.strictEqual(ciclos.length, 300));
    prueba('cada ciclo trae las 15 variables con su equipo/unidad/calidad', () => {
        ciclos.forEach((c) => { assert.strictEqual(c.lecturas.length, 15); c.lecturas.forEach((l) => { assert.ok(Number.isFinite(l.value)); assert.ok([0, 1, 2].includes(l.quality)); assert.ok(l.unit); }); });
    });
    prueba('en operacion normal casi todo es calidad 2 y dentro del rango de operacion (>= 90 %)', () => {
        let total = 0, buenos = 0, enRango = 0;
        ciclos.forEach((c) => c.lecturas.forEach((l) => {
            const cfg = C.EQUIPOS[l.equipo].variables[l.variable]; total++;
            if (l.quality === 2) buenos++;
            if (l.value >= cfg.min_op - 0.1 * (cfg.max_op - cfg.min_op) && l.value <= cfg.max_op + 0.1 * (cfg.max_op - cfg.min_op)) enRango++;
        }));
        assert.ok(buenos / total >= 0.99, 'calidad 2: ' + buenos / total);
        assert.ok(enRango / total >= 0.90, 'en rango: ' + enRango / total);
    });
    prueba('marcas de tiempo alineadas a la grilla de 120 s y sin repetirse', () => {
        const ts = ciclos.map((c) => c.ts);
        ts.forEach((t) => assert.strictEqual(t % 120000, 0));
        assert.strictEqual(new Set(ts).size, ts.length);
    });
    prueba('line protocol de raw_variables: 15 lineas por ciclo con tags y campos del esquema', () => {
        RELOJ.ahora += 120000; const r = M.run.gen_ciclo({}); const ls = lineasDe(r[0]);
        assert.strictEqual(ls.length, 15);
        const p = parseLP(ls[0]);
        assert.strictEqual(p.medida, 'raw_variables');
        assert.deepStrictEqual(Object.keys(p.tags).sort(), ['area', 'equipo', 'tag', 'unit', 'variable', 'planta'].sort());
        assert.ok(/^[\d.]+$/.test(p.campos.value) && /^\d+i$/.test(p.campos.quality));
    });

    // --- cada falla provocada ---
    const efecto = (falla, ciclosN, medir) => {
        const W = nuevoMundo({});
        for (let i = 0; i < 20; i++) { RELOJ.ahora += 120000; W.run.gen_ciclo({}); }         // calentar en normal
        W.run.gen_controles({ accion: 'falla:' + falla });
        const out = [];
        for (let i = 0; i < ciclosN; i++) { RELOJ.ahora += (i === 0 ? 1000 : 120000); const r = W.run.gen_ciclo({}); if (r) out.push(r); }
        return { out, W };
    };
    const v = (c, eq, va) => c.lecturas.find((l) => l.equipo === eq && l.variable === va);
    prueba('VIB_HIGH: la vibracion supera 7,1 mm/s en la mayoria de los ciclos de la falla', () => {
        const { out } = efecto('VIB_HIGH', 10);
        const altos = out.filter((r) => v(r[1], 'EQ01', 'VIBRACION').value > 7.1).length;
        assert.ok(altos >= 8, 'ciclos con vib > 7,1: ' + altos + ' de ' + out.length);
    });
    prueba('PARADA_BOMBA: ESTADO = 0 y caudal ~0 durante la falla; la bomba arranca sola al terminar', () => {
        const { out } = efecto('PARADA_BOMBA', 12);
        const parados = out.filter((r) => v(r[1], 'EQ01', 'ESTADO').value === 0 && v(r[1], 'EQ01', 'CAUDAL').value < 3);
        assert.strictEqual(parados.length, C.ANOMALIAS.PARADA_BOMBA.ciclos_default);
        assert.strictEqual(v(out[out.length - 1][1], 'EQ01', 'ESTADO').value, 1);
    });
    prueba('CAUDAL_DROP: el caudal cae por debajo de 90 m3/h', () => {
        const { out } = efecto('CAUDAL_DROP', 8);
        assert.ok(out.filter((r) => v(r[1], 'EQ01', 'CAUDAL').value < 90).length >= 6);
    });
    prueba('PH_SPIKE: el pH sale de [6,5 ; 8,0]', () => {
        const { out } = efecto('PH_SPIKE', 8);
        assert.ok(out.filter((r) => { const p = v(r[1], 'EQ03', 'PH').value; return p < 6.5 || p > 8.0; }).length >= 6);
    });
    prueba('FILTER_SAT: sube la presion diferencial (> 600 mbar) y empeora la turbidez de salida', () => {
        const { out } = efecto('FILTER_SAT', 20);
        assert.ok(out.filter((r) => v(r[1], 'EQ02', 'PRES_DIF').value > 600).length >= 10);
        assert.ok(out.filter((r) => v(r[1], 'EQ02', 'TURB_OUT').value > 1.4).length >= 15);
    });
    prueba('la falla provocada queda registrada en events (ANOMALIA_INYECTADA)', () => {
        const W = nuevoMundo({}); RELOJ.ahora += 120000; W.run.gen_ciclo({});
        W.run.gen_controles({ accion: 'falla:VIB_HIGH' }); RELOJ.ahora += 1000;
        const ls = lineasDe(W.run.gen_ciclo({})[0]).filter((l) => l.startsWith('events,'));
        assert.strictEqual(ls.length, 1);
        assert.ok(/event_type=ANOMALIA_INYECTADA/.test(ls[0]) && /motivo=VIB_HIGH/.test(ls[0]));
    });
    prueba('modo demo: genera cada 15 s; volver a normal vuelve a 120 s', () => {
        const W = nuevoMundo({}); let n = 0;
        W.run.gen_controles({ accion: 'modo_demo' });
        for (let i = 0; i < 40; i++) { RELOJ.ahora += 5000; if (W.run.gen_ciclo({})) n++; }      // 200 s
        assert.ok(n >= 12 && n <= 15, 'ciclos en 200 s en demo: ' + n);
        W.run.gen_controles({ accion: 'modo_normal' }); n = 0;
        for (let i = 0; i < 48; i++) { RELOJ.ahora += 5000; if (W.run.gen_ciclo({})) n++; }      // 240 s
        assert.ok(n >= 2 && n <= 4, 'ciclos en 240 s en normal: ' + n);
    });
    prueba('pausa: no genera nada', () => {
        const W = nuevoMundo({}); W.run.gen_controles({ accion: 'pausa' });
        RELOJ.ahora += 300000; assert.strictEqual(W.run.gen_ciclo({}), null);
        W.run.gen_controles({ accion: 'reanudar' }); RELOJ.ahora += 300000; assert.ok(W.run.gen_ciclo({}));
    });
    prueba('fallas aleatorias: aparecen solas cuando estan activadas (3 % por ciclo)', () => {
        const W = nuevoMundo({}); W.run.gen_controles({ accion: 'aleatorio_on' });
        let conFalla = 0;
        for (let i = 0; i < 400; i++) { RELOJ.ahora += 120000; const r = W.run.gen_ciclo({}); if (r && r[1].fallasActivas.length) conFalla++; }
        assert.ok(conFalla > 20, 'ciclos con alguna falla activa: ' + conFalla);
    });
}

// =====================================================================================
console.log('\n[3] Indicadores (KPIs)');
{
    const M = nuevoMundo({});
    const inicio = Date.UTC(2026, 10, 2, 3, 0, 0);                 // lunes 02/11/2026 00:00 ART
    const dias = 9;
    const filas = new Map();                                       // ultima escritura de cada clave
    const crudas = [];                                             // para recalcular por fuera
    const G = nuevoMundo({});
    RELOJ.ahora = inicio;
    for (let t = inicio; t < inicio + dias * 86400000; t += 120000) {
        RELOJ.ahora = t;
        const r = G.run.gen_ciclo({}); if (!r) continue;
        crudas.push(r[1]);
        const k = M.run.kpi_calcular({ lecturas: r[1].lecturas, ts: r[1].ts });
        lineasDe(k).forEach((l) => { const p = parseLP(l); filas.set([p.tags.equipo, p.tags.kpi, p.tags.periodo, p.ts].join('|'), p); });
    }
    const filasArr = Array.from(filas.values());
    prueba('hay filas de los 6 KPIs en las 4 granularidades', () => {
        const comb = new Set(filasArr.map((p) => p.tags.equipo + '/' + p.tags.kpi + '/' + p.tags.periodo));
        assert.strictEqual(comb.size, 6 * 4);
    });
    prueba('UNA sola fila por periodo (la clave equipo+kpi+periodo+inicio no se repite)', () => {
        // el Map ya pisa las repetidas; se comprueba que el nro de filas coincide con periodos x kpis
        const porPeriodo = (g) => new Set(filasArr.filter((p) => p.tags.periodo === g).map((p) => p.ts)).size;
        assert.strictEqual(porPeriodo('hora'), dias * 24);
        assert.strictEqual(porPeriodo('turno'), dias * 3 + 1);          // +1: a las 00:00 del lunes se arranca dentro del T3 que empezo el domingo 22:00
        assert.strictEqual(porPeriodo('dia'), dias);
        assert.strictEqual(porPeriodo('semana'), 2);                 // lunes 02/11 y lunes 09/11
    });
    prueba('el ts de cada fila es el INICIO del periodo (hora en punto; turnos 09/17/01 UTC; dias 03:00 UTC; semana lunes 03:00 UTC)', () => {
        filasArr.forEach((p) => {
            const d = new Date(p.ts);
            if (p.tags.periodo === 'hora') assert.strictEqual(p.ts % 3600000, 0);
            if (p.tags.periodo === 'turno') assert.ok([9, 17, 1].includes(d.getUTCHours()) && d.getUTCMinutes() === 0);
            if (p.tags.periodo === 'dia') assert.ok(d.getUTCHours() === 3 && d.getUTCMinutes() === 0);
            if (p.tags.periodo === 'semana') assert.ok(d.getUTCHours() === 3 && d.getUTCDay() === 1);
        });
    });
    prueba('los periodos ya terminados quedan cerrado=true y el ultimo (en curso) cerrado=false', () => {
        const porPer = (g) => filasArr.filter((p) => p.tags.periodo === g && p.tags.kpi === 'desviacion_ph');
        ['hora', 'turno', 'dia', 'semana'].forEach((g) => {
            const l = porPer(g).sort((a, b) => a.ts - b.ts);
            l.slice(0, -1).forEach((p) => assert.strictEqual(p.campos.cerrado, 'true'));
            assert.strictEqual(l[l.length - 1].campos.cerrado, 'false');
        });
    });
    prueba('los turnos llevan el tag turno (T1/T2/T3) y los demas periodos no', () => {
        filasArr.forEach((p) => { if (p.tags.periodo === 'turno') assert.ok(/^T[123]$/.test(p.tags.turno)); else assert.strictEqual(p.tags.turno, undefined); });
    });
    // --- recalculo independiente sobre las lecturas crudas ---
    const media = (a) => a.reduce((x, y) => x + y, 0) / a.length;
    const dsm = (a) => { const m = media(a); return Math.sqrt(a.reduce((s, x) => s + (x - m) ** 2, 0) / (a.length - 1)); };
    const buenas = (g, ini, eq, va) => crudas.filter((c) => A.inicioPeriodo(g, c.ts) === ini).map((c) => c.lecturas.find((l) => l.equipo === eq && l.variable === va)).filter((l) => l.quality === 2).map((l) => l.value);
    const valorFila = (g, ini, eq, kpi) => Number(filas.get([eq, kpi, g, ini].join('|')).campos.value);
    ['hora', 'turno', 'dia'].forEach((g) => {
        const ini = A.inicioPeriodo(g, inicio + 3 * 86400000 + 5 * 3600000 + 37 * 60000);   // un periodo ya cerrado, lejos de los bordes
        prueba('formulas de los 6 KPIs (' + g + ') coinciden con un calculo independiente', () => {
            const near = (a, b, tol) => assert.ok(Math.abs(a - b) <= tol, a + ' vs ' + b);
            near(valorFila(g, ini, 'EQ01', 'eficiencia_energetica'), media(buenas(g, ini, 'EQ01', 'CAUDAL')) / media(buenas(g, ini, 'EQ01', 'CORRIENTE')), 1e-4);
            const est = buenas(g, ini, 'EQ01', 'ESTADO'); near(valorFila(g, ini, 'EQ01', 'disponibilidad_bomba'), 100 * est.filter((x) => x >= 0.5).length / est.length, 0.01);
            const ti = media(buenas(g, ini, 'EQ02', 'TURB_IN')), to = media(buenas(g, ini, 'EQ02', 'TURB_OUT')); near(valorFila(g, ini, 'EQ02', 'eficiencia_filtracion'), (ti - to) / ti * 100, 1e-3);
            near(valorFila(g, ini, 'EQ02', 'presion_diferencial_media'), media(buenas(g, ini, 'EQ02', 'PRES_DIF')), 0.01);
            const ph = buenas(g, ini, 'EQ03', 'PH'); const min = { hora: 60, turno: 480, dia: 1440 }[g];
            near(valorFila(g, ini, 'EQ03', 'tiempo_fuera_rango_ph'), min * ph.filter((x) => x < 6.5 || x > 8.0).length / ph.length, 0.01);
            near(valorFila(g, ini, 'EQ03', 'desviacion_ph'), dsm(ph), 1e-4);
        });
    });
    prueba('los acumuladores (estado) se pueden guardar y recuperar como JSON (persistencia en disco)', () => {
        const est = M.global.get('kpi_estado'); assert.ok(est && est.hora && est.semana);
        assert.deepStrictEqual(JSON.parse(JSON.stringify(est)), est);
    });
    prueba('se guardan los KPIs de los dias cerrados (los usa el reporte diario)', () => {
        const cer = M.global.get('kpi_cerrados'); assert.strictEqual(Object.keys(cer.dia).length, dias - 1);
        Object.values(cer.dia).forEach((k) => assert.strictEqual(k.length, 6));
    });
    prueba('cambio de periodo: la fila del anterior sale con cerrado=true JUNTO con la del nuevo con cerrado=false', () => {
        const W = nuevoMundo({}); const t0 = Date.UTC(2026, 10, 7, 20, 58, 0);                  // 17:58 ART
        const mk = (ts) => ({ ts, lecturas: crudas[0].lecturas.map((l) => Object.assign({}, l, { ts })) });
        W.run.kpi_calcular(mk(t0)); W.run.kpi_calcular(mk(t0 + 60000));
        const ls = lineasDe(W.run.kpi_calcular(mk(Date.UTC(2026, 10, 7, 21, 0, 0)))).map(parseLP).filter((p) => p.tags.periodo === 'hora' && p.tags.kpi === 'disponibilidad_bomba');
        assert.deepStrictEqual(ls.map((p) => p.campos.cerrado).sort(), ['false', 'true']);
        assert.strictEqual(ls.find((p) => p.campos.cerrado === 'true').ts, Date.UTC(2026, 10, 7, 20, 0, 0));
        assert.strictEqual(ls.find((p) => p.campos.cerrado === 'false').ts, Date.UTC(2026, 10, 7, 21, 0, 0));
    });
    prueba('solo cuentan las lecturas de calidad 2', () => {
        const W = nuevoMundo({}); const ts = Date.UTC(2026, 10, 7, 20, 10, 0);
        const L = (v, q) => [{ equipo: 'EQ03', variable: 'PH', value: v, quality: q, ts }];
        W.run.kpi_calcular({ ts, lecturas: L(7.0, 2) });
        const ls = lineasDe(W.run.kpi_calcular({ ts: ts + 120000, lecturas: L(1.0, 1) })).map(parseLP).filter((p) => p.tags.periodo === 'hora' && p.tags.kpi === 'tiempo_fuera_rango_ph');
        assert.strictEqual(ls[0].campos.value, '0');                                                // el pH 1,0 de calidad 1 no cuenta
        assert.strictEqual(ls[0].campos.muestras, '1i');
    });
}

// =====================================================================================
console.log('\n[4] Alerta de la bomba EQ01');
{
    const mkLect = (ts, o) => {
        const base = { CAUDAL: 120, PRESION: 4.5, CORRIENTE: 45, VIBRACION: 2.8, ESTADO: 1 };
        const v = Object.assign({}, base, o.v || {});
        return Object.keys(v).map((k) => ({ equipo: 'EQ01', variable: k, value: v[k], quality: (o.q && o.q[k] !== undefined) ? o.q[k] : 2, ts }));
    };
    // secuencia de ciclos: cada paso = [valores, repeticiones]
    const correr = (M, pasos, dt) => {
        const eventos = []; let ts = Date.UTC(2026, 10, 7, 20, 0, 0);
        pasos.forEach(([o, n]) => { for (let i = 0; i < n; i++) { ts += (dt || 120) * 1000; const r = M.run.bomba_detectar({ lecturas: mkLect(ts, o), ts }); if (r) { const av = M.run.bomba_avisos(r); eventos.push({ tipo: r.evento.tipo, ts, mail: av[0], evento: av[1] }); } } });
        return eventos;
    };
    const VIB = { v: { VIBRACION: 8.4 } }, OK = {}, PARADA = { v: { CAUDAL: 0.3, PRESION: 0.04, CORRIENTE: 0.2, VIBRACION: 0.03, ESTADO: 0 } };
    prueba('una falla larga manda UN solo aviso (no uno por muestra) y otro al normalizarse', () => {
        const ev = correr(nuevoMundo({}), [[OK, 3], [VIB, 15], [OK, 5]]);
        assert.deepStrictEqual(ev.map((e) => e.tipo), ['falla', 'normalizada']);
    });
    prueba('DOS fallas seguidas (con la bomba normal entre medio) mandan DOS mails de falla y dos de normalizacion', () => {
        const ev = correr(nuevoMundo({}), [[OK, 3], [VIB, 5], [OK, 3], [PARADA, 4], [OK, 3]]);
        assert.deepStrictEqual(ev.map((e) => e.tipo), ['falla', 'normalizada', 'falla', 'normalizada']);
        assert.ok(/VIBRACION|vibración/.test(ev[0].mail.payload) && /ESTADO|parada/.test(ev[2].mail.payload));
    });
    prueba('sin cooldown: una segunda falla justo despues de normalizar avisa de nuevo (modo demo, ciclos de 15 s)', () => {
        const ev = correr(nuevoMundo({}), [[VIB, 2], [OK, 5], [VIB, 2], [OK, 5]], 15);
        assert.deepStrictEqual(ev.map((e) => e.tipo), ['falla', 'normalizada', 'falla', 'normalizada']);
    });
    prueba('rearme: un parpadeo normal de menos de 60 s NO cierra la falla (no hay aviso doble)', () => {
        const ev = correr(nuevoMundo({}), [[VIB, 2], [OK, 2], [VIB, 2], [OK, 6]], 15);       // 2 ciclos de 15 s = 30 s < 60 s
        assert.deepStrictEqual(ev.map((e) => e.tipo), ['falla', 'normalizada']);
    });
    prueba('criterio unico de ESTADO: 0,4 (< 0,5) es falla; 0,5 no lo es', () => {
        assert.deepStrictEqual(correr(nuevoMundo({}), [[{ v: { ESTADO: 0.4 } }, 1]]).map((e) => e.tipo), ['falla']);
        assert.deepStrictEqual(correr(nuevoMundo({}), [[{ v: { ESTADO: 0.5 } }, 3]]).map((e) => e.tipo), []);
    });
    prueba('calidad 1 dispara la falla; calidad 0 se descarta', () => {
        assert.deepStrictEqual(correr(nuevoMundo({}), [[{ v: { VIBRACION: 9 }, q: { VIBRACION: 1 } }, 1]]).map((e) => e.tipo), ['falla']);
        assert.deepStrictEqual(correr(nuevoMundo({}), [[{ v: { VIBRACION: 9 }, q: { VIBRACION: 0 } }, 3]]).map((e) => e.tipo), []);
    });
    prueba('cada limite critico dispara: caudal < 70 y > 175, presion < 2,5 y > 6,5, corriente > 65', () => {
        [{ CAUDAL: 69 }, { CAUDAL: 176 }, { PRESION: 2.4 }, { PRESION: 6.6 }, { CORRIENTE: 66 }].forEach((v) =>
            assert.deepStrictEqual(correr(nuevoMundo({}), [[{ v }, 1]]).map((e) => e.tipo), ['falla'], JSON.stringify(v)));
        [{ CAUDAL: 70 }, { CAUDAL: 175 }, { PRESION: 2.5 }, { PRESION: 6.5 }, { CORRIENTE: 65 }, { VIBRACION: 7.1 }].forEach((v) =>
            assert.deepStrictEqual(correr(nuevoMundo({}), [[{ v }, 2]]).map((e) => e.tipo), [], JSON.stringify(v)));
    });
    prueba('el evento de falla se escribe en events con motivo y valor; la normalizacion con duracion', () => {
        const ev = correr(nuevoMundo({}), [[VIB, 3], [OK, 4]]);
        const f = parseLP(lineasDe(ev[0].evento)[0]), n = parseLP(lineasDe(ev[1].evento)[0]);
        assert.deepStrictEqual([f.tags.event_type, f.tags.motivo, f.tags.severity, f.campos.value], ['BOMBA_FALLA', 'VIBRACION', 'critical', '8.4']);
        assert.strictEqual(n.tags.event_type, 'BOMBA_NORMALIZADA');
        assert.strictEqual(n.campos.duracion_s, '360i');                                         // 3 ciclos de 120 s en falla
    });
    prueba('el mail usa hora Argentina de 24 h y lleva [PRUEBA] por defecto', () => {
        const ev = correr(nuevoMundo({}), [[VIB, 1]]);
        assert.ok(/Hora: \d\d\/\d\d\/\d{4} \d\d:\d\d:\d\d/.test(ev[0].mail.payload), ev[0].mail.payload);
        assert.ok(/^\[PRUEBA\] FALLA/.test(ev[0].mail.topic));
    });
    prueba('el boton de prueba manda mail marcado [PRUEBA] y NO escribe en la base', () => {
        const M = nuevoMundo({}); RELOJ.ahora = Date.UTC(2026, 10, 7, 20, 5, 22);
        const av = M.run.bomba_avisos(M.run.bomba_prueba({}));
        assert.ok(/^\[PRUEBA\]/.test(av[0].topic) && av[1] === null);
        assert.ok(/Hora: 07\/11\/2026 17:05:22/.test(av[0].payload));
    });
    prueba('interruptor: sin marca [PRUEBA] el asunto queda limpio', () => {
        const M = nuevoMundo({}); M.run.marcas({ accion: 'marcar_off' });
        const r = M.run.bomba_detectar({ lecturas: mkLect(1e12, VIB), ts: 1e12 }); const av = M.run.bomba_avisos(r);
        assert.strictEqual(av[0].topic, 'FALLA: Bomba de ingreso EQ01');
    });
}

// =====================================================================================
console.log('\n[5] Alertas EQ02 / EQ03 (deduplicacion y cooldown)');
{
    const lect = (ts, ph, extra) => [{ equipo: 'EQ03', variable: 'PH', value: ph, quality: 2, ts }, { equipo: 'EQ01', variable: 'VIBRACION', value: 9, quality: 2, ts }].concat(extra || []);
    const paso = (M, ts, ph, modo, extra) => M.run.umbrales_detectar({ lecturas: lect(ts, ph, extra), ts, modo: modo || 'normal' });
    const T0 = Date.UTC(2026, 10, 7, 20, 0, 0);
    prueba('una excursion de pH de 8 ciclos manda UN mail (no 8) y registra 1 evento critico', () => {
        const M = nuevoMundo({}); let mails = 0, eventos = 0;
        for (let i = 0; i < 12; i++) { const r = paso(M, T0 + i * 120000, i >= 2 && i < 10 ? 9.0 : 7.2); if (r && r[0]) mails++; if (r && r[1]) eventos += lineasDe(r[1]).filter((l) => /UMBRAL_CRITICO/.test(l)).length; }
        assert.strictEqual(mails, 1); assert.strictEqual(eventos, 1);
    });
    prueba('la bomba EQ01 NO genera mails en este flow (aunque la vibracion sea 9)', () => {
        const M = nuevoMundo({}); const r = paso(M, T0, 7.2); assert.ok(!r || (!r[0] && !(r[1] && /EQ01/.test(r[1].payload))));
    });
    prueba('cooldown normal (1800 s): una segunda excursion a los 10 min registra el evento pero NO manda otro mail', () => {
        const M = nuevoMundo({}); const mails = [];
        const seq = [[0, 9.0], [120, 7.2], [240, 7.2], [720, 9.0], [840, 7.2], [3600, 9.0]];     // seg desde T0
        seq.forEach(([s, ph]) => { const r = paso(M, T0 + s * 1000, ph); if (r && r[0]) mails.push(s); });
        assert.deepStrictEqual(mails, [0, 3600]);                                                // el de 720 s cae dentro del cooldown
    });
    prueba('en modo demo el cooldown es corto (60 s): la misma secuencia manda mail a los 0 y 70 s', () => {
        const M = nuevoMundo({}); const mails = [];
        [[0, 9.0], [15, 7.2], [30, 7.2], [70, 9.0]].forEach(([s, ph]) => { const r = paso(M, T0 + s * 1000, ph, 'demo'); if (r && r[0]) mails.push(s); });
        assert.deepStrictEqual(mails, [0, 70]);
    });
    prueba('el cooldown es configurable por entorno (ALERTA_COOLDOWN_DEMO_S=300)', () => {
        const M = nuevoMundo({ ALERTA_COOLDOWN_DEMO_S: '300' }); const mails = [];
        [[0, 9.0], [15, 7.2], [70, 9.0], [400, 7.2], [410, 9.0]].forEach(([s, ph]) => { const r = paso(M, T0 + s * 1000, ph, 'demo'); if (r && r[0]) mails.push(s); });
        assert.deepStrictEqual(mails, [0, 410]);
    });
    prueba('varios criticos nuevos del mismo ciclo viajan en UN solo mail', () => {
        const M = nuevoMundo({}); const ex = [{ equipo: 'EQ02', variable: 'PRES_DIF', value: 900, quality: 2, ts: T0 }, { equipo: 'EQ02', variable: 'TURB_OUT', value: 2.5, quality: 2, ts: T0 }];
        const r = paso(M, T0, 9.0, 'normal', ex);
        assert.ok(r[0] && /PRES_DIF/.test(r[0].payload) && /TURB_OUT/.test(r[0].payload) && /PH/.test(r[0].payload));
    });
    prueba('calidad 0 se descarta y calidad 1 cuenta', () => {
        const M = nuevoMundo({});
        const r0 = M.run.umbrales_detectar({ lecturas: [{ equipo: 'EQ03', variable: 'PH', value: 9.0, quality: 0, ts: T0 }], ts: T0, modo: 'normal' });
        assert.ok(r0[0] === null && r0[1] === null);
        const r = M.run.umbrales_detectar({ lecturas: [{ equipo: 'EQ03', variable: 'PH', value: 9.0, quality: 1, ts: T0 }], ts: T0, modo: 'normal' });
        assert.ok(r && r[0]);
    });
}

// =====================================================================================
console.log('\n[6] Reporte diario');
{
    const M = nuevoMundo({});
    const lectOk = (ts) => { const L = []; Object.keys(C.EQUIPOS).forEach((eq) => Object.keys(C.EQUIPOS[eq].variables).forEach((va) => L.push({ equipo: eq, variable: va, value: C.EQUIPOS[eq].variables[va].normal, quality: 2, ts }))); return L; };
    const ini = Date.UTC(2026, 10, 6, 3, 0, 0);                                  // 06/11 00:00 ART
    for (let t = ini; t < ini + 2 * 86400000; t += 600000) M.run.kpi_calcular({ ts: t, lecturas: lectOk(t) });
    RELOJ.ahora = Date.UTC(2026, 10, 7, 9, 0, 0);                                // 07/11 06:00 ART
    M.run.bomba_avisos({ evento: { tipo: 'falla', ts: ini + 3600000, motivos: [{ variable: 'VIBRACION', valor: 8, texto: 'x' }], valores: {} } });
    prueba('el reporte del dia anterior trae sus KPIs reales y el conteo de fallas de ESE dia', () => {
        const r = M.run.reporte_armar({ prueba: false });
        assert.ok(/06\/11\/2026/.test(r.topic), r.topic);
        assert.ok(/eficiencia_energetica/.test(r.payload) && /desviacion_ph/.test(r.payload));
        assert.ok(/Fallas de la bomba EQ01: <b>1<\/b>/.test(r.payload));
    });
    prueba('el reporte de prueba usa el dia en curso y se marca [PRUEBA]', () => {
        const r = M.run.reporte_armar({ prueba: true });
        assert.ok(/^\[PRUEBA\]/.test(r.topic) && /07\/11\/2026/.test(r.topic));
    });
}
restaurarReloj();

console.log('\n' + (fallos ? 'RESULTADO: ' + fallos + ' FALLA(S), ' + ok + ' ok' : 'RESULTADO: todo OK (' + ok + ' pruebas)'));
process.exit(fallos ? 1 : 0);
