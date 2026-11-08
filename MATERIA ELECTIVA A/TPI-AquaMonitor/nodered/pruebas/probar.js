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
    prueba('al arrancar tarde dentro del tramo (a las :40 de una grilla de 120 s) la marca es la hora real, no una hora pasada', () => {
        const W = nuevoMundo({}); RELOJ.ahora = Date.UTC(2026, 10, 9, 12, 0, 40);
        const r = W.run.gen_ciclo({});
        assert.strictEqual(r[1].ts, RELOJ.ahora);
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
    const todas = [];                                              // TODAS las filas escritas (para detectar claves repetidas)
    const crudas = [];                                             // lecturas, para recalcular por fuera
    const G = nuevoMundo({});
    RELOJ.ahora = inicio;
    for (let t = inicio; t < inicio + dias * 86400000; t += 120000) {
        RELOJ.ahora = t;
        const r = G.run.gen_ciclo({}); if (!r) continue;
        crudas.push(r[1]);
        const k = M.run.kpi_calcular({ lecturas: r[1].lecturas, ts: r[1].ts });
        lineasDe(k).forEach((l) => todas.push(parseLP(l)));
    }
    const clave = (p) => [p.tags.equipo, p.tags.kpi, p.tags.periodo, p.ts].join('|');
    const filas = new Map(todas.map((p) => [clave(p), p]));
    const filasArr = Array.from(filas.values());
    prueba('hay filas de los 6 KPIs en las 4 granularidades', () => {
        const comb = new Set(filasArr.map((p) => p.tags.equipo + '/' + p.tags.kpi + '/' + p.tags.periodo));
        assert.strictEqual(comb.size, 6 * 4);
    });
    prueba('cada periodo se escribe UNA sola vez: ninguna clave (equipo+kpi+periodo+inicio) se repite en toda la corrida', () => {
        assert.strictEqual(todas.length, filas.size, 'filas escritas: ' + todas.length + ', claves distintas: ' + filas.size);
    });
    prueba('se escriben solo periodos CERRADOS: 9 dias = 215 horas, 27 turnos, 8 dias y 1 semana (el ultimo de cada tipo sigue abierto)', () => {
        const porPeriodo = (g) => new Set(filasArr.filter((p) => p.tags.periodo === g).map((p) => p.ts)).size;
        assert.strictEqual(porPeriodo('hora'), dias * 24 - 1);
        assert.strictEqual(porPeriodo('turno'), dias * 3 + 1 - 1);   // +1: a las 00:00 del lunes se arranca dentro del T3 del domingo 22:00; -1: el ultimo sigue abierto
        assert.strictEqual(porPeriodo('dia'), dias - 1);
        assert.strictEqual(porPeriodo('semana'), 1);
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
    prueba('todas las filas llevan cerrado=true y muestras; los turnos llevan el tag turno (T1/T2/T3) y los demas periodos no', () => {
        filasArr.forEach((p) => {
            assert.strictEqual(p.campos.cerrado, 'true'); assert.ok(/^\d+i$/.test(p.campos.muestras));
            if (p.tags.periodo === 'turno') assert.ok(/^T[123]$/.test(p.tags.turno)); else assert.strictEqual(p.tags.turno, undefined);
        });
    });
    // --- recalculo independiente sobre las lecturas crudas ---
    const media = (a) => a.reduce((x, y) => x + y, 0) / a.length;
    const dsm = (a) => { const m = media(a); return Math.sqrt(a.reduce((s, x) => s + (x - m) ** 2, 0) / (a.length - 1)); };
    const buenas = (g, ini, eq, va) => crudas.filter((c) => A.inicioPeriodo(g, c.ts) === ini).map((c) => c.lecturas.find((l) => l.equipo === eq && l.variable === va)).filter((l) => l.quality >= C.KPI.calidad_minima).map((l) => l.value);
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
    prueba('reinicio a mitad de periodo: se recupera el estado guardado y el periodo cierra con TODAS las muestras', () => {
        const W = nuevoMundo({}); const t0 = Date.UTC(2026, 10, 7, 20, 50, 0);
        const mk = (ts) => ({ ts, lecturas: crudas[0].lecturas.map((l) => Object.assign({}, l, { ts })) });
        W.run.kpi_calcular(mk(t0)); W.run.kpi_calcular(mk(t0 + 120000));
        const guardado = JSON.parse(JSON.stringify(W.global.get('kpi_estado')));     // lo que quedo en disco
        const W2 = nuevoMundo({}); W2.global.set('kpi_estado', guardado);             // "Node-RED reinicia" y lo recupera
        W2.run.kpi_calcular(mk(t0 + 240000));
        const ls = lineasDe(W2.run.kpi_calcular(mk(Date.UTC(2026, 10, 7, 21, 0, 0)))).map(parseLP).filter((p) => p.tags.periodo === 'hora' && p.tags.kpi === 'disponibilidad_bomba');
        assert.strictEqual(ls.length, 1); assert.strictEqual(ls[0].campos.muestras, '3i');
    });
    prueba('cambio de periodo: sale UNA fila por KPI con el inicio del periodo que termino', () => {
        const W = nuevoMundo({}); const t0 = Date.UTC(2026, 10, 7, 20, 56, 0);                  // 17:56 ART
        const mk = (ts) => ({ ts, lecturas: crudas[0].lecturas.map((l) => Object.assign({}, l, { ts })) });
        assert.strictEqual(W.run.kpi_calcular(mk(t0)), null);                                   // nada se escribe mientras el periodo esta abierto
        assert.strictEqual(W.run.kpi_calcular(mk(t0 + 120000)), null);
        const ls = lineasDe(W.run.kpi_calcular(mk(Date.UTC(2026, 10, 7, 21, 0, 0)))).map(parseLP).filter((p) => p.tags.periodo === 'hora');
        assert.strictEqual(ls.length, 6);
        assert.ok(ls.every((p) => p.ts === Date.UTC(2026, 10, 7, 20, 0, 0) && p.campos.cerrado === 'true'));
    });
    // Secuencia REAL de pH del 07/11/2026 (hora UTC 23:14:35 a 23:17:30), con su calidad tal como quedo en InfluxDB (PH_SPIKE provocado)
    const PH_REAL = [[35, 7.241, 2], [45, 7.322, 2], [55, 5.799, 1], [60, 8.988, 0], [75, 5.484, 0], [90, 8.825, 0], [105, 5.55, 0], [120, 9.199, 0],
                     [135, 5.712, 1], [150, 9.047, 0], [165, 7.257, 2], [180, 7.28, 2], [195, 7.305, 2], [210, 7.198, 2]];
    const cerrarConPhReal = (calidadMinima) => {
        const previa = C.KPI.calidad_minima; C.KPI.calidad_minima = calidadMinima;
        try {
            const W = nuevoMundo({}); const base = Date.UTC(2026, 10, 7, 23, 14, 0);
            PH_REAL.forEach(([s, v, q]) => { const ts = base + s * 1000; W.run.kpi_calcular({ ts, lecturas: [{ equipo: 'EQ03', variable: 'PH', value: v, quality: q, ts }] }); });
            const cierre = Date.UTC(2026, 10, 8, 0, 0, 0);       // cruza la hora: cierra el periodo 23:00 UTC
            const filas = lineasDe(W.run.kpi_calcular({ ts: cierre, lecturas: [{ equipo: 'EQ03', variable: 'PH', value: 7.2, quality: 2, ts: cierre }] })).map(parseLP)
                .filter((p) => p.tags.periodo === 'hora');
            const g = (k) => filas.find((p) => p.tags.kpi === k).campos;
            return { fuera: Number(g('tiempo_fuera_rango_ph').value), sd: Number(g('desviacion_ph').value), n: Number(g('desviacion_ph').muestras.replace('i', '')) };
        } finally { C.KPI.calidad_minima = previa; }
    };
    prueba('pH real con la regla actual (solo calidad 2): las 8 muestras de la excursion se descartan -> tiempo fuera de rango = 0 (no es un bug del cierre)', () => {
        const r = cerrarConPhReal(2);
        assert.strictEqual(r.n, 6); assert.strictEqual(r.fuera, 0);
    });
    prueba('pH real con calidad_minima = 0 (todas las muestras): cuentan las 8 de la excursion -> 60 * 8 / 14 = 34,29 min', () => {
        const r = cerrarConPhReal(0);
        assert.strictEqual(r.n, 14); assert.ok(Math.abs(r.fuera - 60 * 8 / 14) < 0.01, 'tiempo fuera = ' + r.fuera);
        assert.ok(r.sd > 1, 'el desvio refleja la excursion: ' + r.sd);
    });
    prueba('pH real con calidad_minima = 1: entran solo las 2 de calidad 1 -> 60 * 2 / 8 = 15 min', () => {
        const r = cerrarConPhReal(1);
        assert.strictEqual(r.n, 8); assert.ok(Math.abs(r.fuera - 15) < 0.01, 'tiempo fuera = ' + r.fuera);
    });
    prueba('con calidad_minima = 2 solo cuentan las lecturas de calidad 2 (regla original)', () => {
        const previa = C.KPI.calidad_minima; C.KPI.calidad_minima = 2;
        try {
        const W = nuevoMundo({}); const ts = Date.UTC(2026, 10, 7, 20, 10, 0);
        const L = (v, q) => [{ equipo: 'EQ03', variable: 'PH', value: v, quality: q, ts }];
        W.run.kpi_calcular({ ts, lecturas: L(7.0, 2) });
        W.run.kpi_calcular({ ts: ts + 120000, lecturas: L(1.0, 1) });                          // pH 1,0 de calidad 1: no cuenta
        const ls = lineasDe(W.run.kpi_calcular({ ts: Date.UTC(2026, 10, 7, 21, 0, 0), lecturas: L(7.0, 2) })).map(parseLP).filter((p) => p.tags.periodo === 'hora' && p.tags.kpi === 'tiempo_fuera_rango_ph');
        assert.strictEqual(ls[0].campos.value, '0'); assert.strictEqual(ls[0].campos.muestras, '1i');
        } finally { C.KPI.calidad_minima = previa; }
    });
    prueba('la regla vigente del catalogo es calidad_minima = 0 y cada fila de KPI lleva el tag regla=q0', () => {
        assert.strictEqual(C.KPI.calidad_minima, 0);
        const W = nuevoMundo({}); const t0 = Date.UTC(2026, 10, 7, 20, 56, 0);
        const mk = (ts, q) => ({ ts, lecturas: [{ equipo: 'EQ03', variable: 'PH', value: 9.0, quality: q, ts }] });
        W.run.kpi_calcular(mk(t0, 0)); W.run.kpi_calcular(mk(t0 + 120000, 0));
        const ls = lineasDe(W.run.kpi_calcular(mk(Date.UTC(2026, 10, 7, 21, 0, 0), 2))).map(parseLP).filter((p) => p.tags.periodo === 'hora');
        assert.ok(ls.length === 2 && ls.every((p) => p.tags.regla === 'q0'));
        assert.strictEqual(ls.find((p) => p.tags.kpi === 'tiempo_fuera_rango_ph').campos.muestras, '2i');   // las 2 muestras de calidad 0 SI cuentan
    });
    // ---- Node-RED apagado (o PC suspendida) mientras un periodo cierra ----
    const lectOk = (ts) => { const L = []; Object.keys(C.EQUIPOS).forEach((eq) => Object.keys(C.EQUIPOS[eq].variables).forEach((va) => L.push({ equipo: eq, variable: va, value: C.EQUIPOS[eq].variables[va].normal, quality: 2, ts }))); return L; };
    prueba('apagado varias horas: el periodo abierto cierra CON LAS MUESTRAS QUE TENIA al primer ciclo despues; los periodos sin ningun dato no generan filas', () => {
        const W = nuevoMundo({});
        W.run.kpi_calcular({ ts: Date.UTC(2026, 10, 7, 23, 56, 0), lecturas: lectOk(0) });                    // 20:56 ART
        W.run.kpi_calcular({ ts: Date.UTC(2026, 10, 7, 23, 58, 0), lecturas: lectOk(0) });                    // 20:58 ART
        // ... Node-RED apagado de 21:00 a 23:09 ART (se saltean las horas 21:00 y 22:00 enteras) ...
        const ls = lineasDe(W.run.kpi_calcular({ ts: Date.UTC(2026, 10, 8, 2, 10, 0), lecturas: lectOk(0) })).map(parseLP);   // 23:10 ART
        const hora = ls.filter((p) => p.tags.periodo === 'hora');
        assert.strictEqual(new Set(hora.map((p) => p.ts)).size, 1, 'solo cierra la hora 20:00 (las horas 21:00 y 22:00 no tienen datos)');
        assert.strictEqual(hora[0].ts, Date.UTC(2026, 10, 7, 23, 0, 0));
        assert.ok(hora.every((p) => p.campos.muestras === '2i'), 'cierra con las 2 muestras que tenia');
        const turno = ls.filter((p) => p.tags.periodo === 'turno');                                            // T2 (14-22) cierra; T3 (22-06) en curso
        assert.ok(turno.length === 6 && turno.every((p) => p.tags.turno === 'T2'));
        assert.strictEqual(W.global.get('kpi_estado').hora.inicio, Date.UTC(2026, 10, 8, 2, 0, 0));          // la hora 23:00 ART queda abierta
    });
    prueba('apagado a traves de la medianoche: el dia anterior cierra parcial al volver y el reporte de las 06:00 lo usa', () => {
        const W = nuevoMundo({ REPORTE_MAIL_TO: 'r@x' });
        W.run.kpi_calcular({ ts: Date.UTC(2026, 10, 8, 2, 50, 0), lecturas: lectOk(0) });                     // 07/11 23:50 ART
        W.run.kpi_calcular({ ts: Date.UTC(2026, 10, 8, 8, 0, 0), lecturas: lectOk(0) });                      // vuelve a las 05:00 ART del 08/11
        RELOJ.ahora = Date.UTC(2026, 10, 8, 9, 0, 0);                                                          // 06:00 ART: corre el reporte
        const r = W.run.reporte_armar({ prueba: false });
        assert.ok(/07\/11\/2026/.test(r.topic) && /eficiencia_energetica/.test(r.payload), 'el reporte del 07/11 trae KPIs (parciales)');
    });
    prueba('si Node-RED esta apagado a las 06:00 el reporte de ese dia NO se manda despues (no hay recuperacion automatica)', () => {
        // el reporte lo dispara solo el cron de las 06:00: la funcion no tiene memoria de "pendientes"
        const src = flows.find((n) => n.id === 'reporte_armar').func;
        assert.ok(!/pendiente|reintento|ultimo_reporte/i.test(src));
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
        pasos.forEach(([o, n]) => { for (let i = 0; i < n; i++) { ts += (dt || 120) * 1000; const r = M.run.bomba_detectar({ lecturas: mkLect(ts, o), ts }); if (r) r[0].forEach((m) => { const av = M.run.bomba_avisos(m); eventos.push({ tipo: m.evento.tipo, ts, mail: av[0], evento: av[1] }); }); } });
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
    prueba('CORTE de la medicion con la bomba en falla (Node-RED apagado 23,5 h): se cierra con la duracion OBSERVADA, no con 23,5 h', () => {
        const M = nuevoMundo({}); const T = Date.UTC(2026, 10, 7, 23, 0, 0);
        const paso = (ts, o) => { const r = M.run.bomba_detectar({ lecturas: mkLect(ts, o), ts }); return r ? r[0].map((m) => ({ ev: m.evento, av: M.run.bomba_avisos(m) })) : []; };
        const e0 = paso(T, VIB); paso(T + 120000, VIB);                                    // falla 2 ciclos (240 s observados)
        const vuelta = T + 23.5 * 3600 * 1000;                                              // ... Node-RED apagado ...
        const e1 = paso(vuelta, OK);
        assert.strictEqual(e0.length, 1); assert.strictEqual(e1.length, 1);
        assert.ok(e1[0].ev.interrumpido && e1[0].ev.duracionS === 120, 'duracion observada: ' + e1[0].ev.duracionS + ' s');
        assert.ok(/SIN DATOS/.test(e1[0].av[0].topic) && /no se pudo observar/.test(e1[0].av[0].payload));
        assert.ok(/duracion_s=120i/.test(e1[0].av[1].payload) && /fin no observado/.test(e1[0].av[1].payload));
        // despues del corte la bomba esta normal y sin falla abierta: no hay otro aviso
        assert.strictEqual(paso(vuelta + 120000, OK).length, 0);
    });
    prueba('CORTE con la bomba que SIGUE en falla al volver: cierra la anterior (interrumpida) y avisa una falla NUEVA', () => {
        const M = nuevoMundo({}); const T = Date.UTC(2026, 10, 7, 23, 0, 0);
        const paso = (ts, o) => { const r = M.run.bomba_detectar({ lecturas: mkLect(ts, o), ts }); return r ? r[0].map((m) => m.evento) : []; };
        paso(T, VIB);
        const ev = paso(T + 5 * 3600 * 1000, VIB);
        assert.deepStrictEqual(ev.map((e) => e.tipo + (e.interrumpido ? '*' : '')), ['normalizada*', 'falla']);
    });
    prueba('un corte corto (menos de 30 min) NO cierra la falla: es el funcionamiento normal', () => {
        const M = nuevoMundo({}); const T = Date.UTC(2026, 10, 7, 23, 0, 0);
        const paso = (ts, o) => { const r = M.run.bomba_detectar({ lecturas: mkLect(ts, o), ts }); return r ? r[0].map((m) => m.evento.tipo) : []; };
        paso(T, VIB);
        assert.deepStrictEqual(paso(T + 20 * 60000, VIB), []);
    });
    prueba('el boton de prueba manda mail marcado [PRUEBA] y NO escribe en la base', () => {
        const M = nuevoMundo({}); RELOJ.ahora = Date.UTC(2026, 10, 7, 20, 5, 22);
        const av = M.run.bomba_avisos(M.run.bomba_prueba({}));
        assert.ok(/^\[PRUEBA\]/.test(av[0].topic) && av[1] === null);
        assert.ok(/Hora: 07\/11\/2026 17:05:22/.test(av[0].payload));
    });
    prueba('interruptor: sin marca [PRUEBA] el asunto queda limpio', () => {
        const M = nuevoMundo({}); M.run.marcas({ accion: 'marcar_off' });
        const r = M.run.bomba_detectar({ lecturas: mkLect(1e12, VIB), ts: 1e12 }); const av = M.run.bomba_avisos(r[0][0]);
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
    prueba('cooldown POR EQUIPO: otra variable del mismo equipo que se pone critica en un ciclo posterior se registra pero NO manda otro mail; otro equipo si', () => {
        const M = nuevoMundo({}); const L = (ts, o) => Object.keys(o).map((k) => ({ equipo: k.split('.')[0], variable: k.split('.')[1], value: o[k], quality: 2, ts }));
        const r1 = M.run.umbrales_detectar({ lecturas: L(T0, { 'EQ02.TURB_OUT': 2.5 }), ts: T0, modo: 'normal' });
        const r2 = M.run.umbrales_detectar({ lecturas: L(T0 + 15000, { 'EQ02.TURB_OUT': 2.5, 'EQ02.PRES_DIF': 900 }), ts: T0 + 15000, modo: 'normal' });
        const r3 = M.run.umbrales_detectar({ lecturas: L(T0 + 30000, { 'EQ02.TURB_OUT': 2.5, 'EQ02.PRES_DIF': 900, 'EQ03.PH': 9.0 }), ts: T0 + 30000, modo: 'normal' });
        assert.ok(r1[0], 'el primer critico manda mail');
        assert.ok(r2[0] === null && /UMBRAL_CRITICO/.test(r2[1].payload) && /PRES_DIF/.test(r2[1].payload), 'el segundo se registra pero no manda mail');
        assert.ok(r3[0] && /EQ03/.test(r3[0].topic) && !/EQ02/.test(r3[0].topic), 'otro equipo si manda mail');
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
console.log('\n[5b] Interruptor de silencio de mails');
prueba('con "silenciar" el mail no se envia; al activar vuelve a enviarse', () => {
    const M = nuevoMundo({ ALERT_MAIL_TO: 'x@y.z' });
    M.run.marcas({ accion: 'silenciar_on' });
    assert.strictEqual(M.run.mail_preparar({ topic: 'a', payload: 'b', tipo: 'alerta' }), null);
    M.run.marcas({ accion: 'silenciar_off' });
    assert.strictEqual(M.run.mail_preparar({ topic: 'a', payload: 'b', tipo: 'alerta' }).to, 'x@y.z');
});
prueba('varios destinatarios: coma, punto y coma, solo espacios y nombres se normalizan a una lista separada por comas', () => {
    const para = (v) => nuevoMundo({ ALERT_MAIL_TO: v }).run.mail_preparar({ topic: 'a', payload: 'b', tipo: 'alerta' }).to;
    assert.strictEqual(para('uno@x.com,dos@y.org'), 'uno@x.com, dos@y.org');
    assert.strictEqual(para('uno@x.com; dos@y.org'), 'uno@x.com, dos@y.org');
    assert.strictEqual(para('uno@x.com dos@y.org'), 'uno@x.com, dos@y.org');       // antes: se perdia la segunda
    assert.strictEqual(para(' uno@x.com , dos@y.org , '), 'uno@x.com, dos@y.org');
    assert.strictEqual(para('Ana Perez <uno@x.com>, dos@y.org'), 'Ana Perez <uno@x.com>, dos@y.org');
    assert.strictEqual(para('solo@x.com'), 'solo@x.com');
});
prueba('el reporte va a REPORTE_MAIL_TO y las alertas a ALERT_MAIL_TO', () => {
    const M = nuevoMundo({ ALERT_MAIL_TO: 'alerta@x', REPORTE_MAIL_TO: 'reporte@x', ALERT_MAIL_FROM: 'de@x' });
    assert.strictEqual(M.run.mail_preparar({ topic: 'a', payload: 'b', tipo: 'alerta' }).to, 'alerta@x');
    assert.strictEqual(M.run.mail_preparar({ topic: 'a', payload: 'b', tipo: 'reporte' }).to, 'reporte@x');
});

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
