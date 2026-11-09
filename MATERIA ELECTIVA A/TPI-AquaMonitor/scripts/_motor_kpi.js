// Usa EXACTAMENTE el mismo codigo de los indicadores que Node-RED (nodered/userdir/aqm/aqm.js).
// Entrada (stdin, JSON): { lecturas: [{equipo, variable, value, quality, ts}], abiertos: {hora: inicioMs, ...}, desde: ms }
// Salida (stdout, JSON): { kpi_estado: {g: {inicio, acc}}, lineas: [line protocol], cerradas: [{g, inicio, n}] }
const A = require('../nodered/userdir/aqm/aqm.js');
let txt = '';
process.stdin.on('data', (d) => { txt += d; });
process.stdin.on('end', () => {
    const { lecturas, abiertos, desde } = JSON.parse(txt);
    lecturas.sort((a, b) => a.ts - b.ts);
    const kpi_estado = {}, cerr = {}, lineas = [], cerradas = [];
    A.GRANULARIDADES.forEach((g) => {
        kpi_estado[g] = { inicio: abiertos[g], acc: {} };
        lecturas.forEach((l) => {
            const ini = A.inicioPeriodo(g, l.ts);
            if (ini === abiertos[g]) A.acumular(kpi_estado[g].acc, l);                                  // periodo abierto: se reconstruye el acumulador
            else if (ini < abiertos[g] && ini >= desde) {                                               // periodo ya terminado: se calcula su fila final
                const k = g + '|' + ini; cerr[k] = cerr[k] || { g, ini, acc: {}, n: 0 };
                A.acumular(cerr[k].acc, l); cerr[k].n += 1;
            }
        });
    });
    Object.keys(cerr).sort().forEach((k) => {
        const c = cerr[k];
        A.lineasKpi(c.g, c.ini, A.calcularKpis(c.g, c.acc)).forEach((l) => lineas.push(l));
        cerradas.push({ g: c.g, inicio: c.ini, lecturas: c.n });
    });
    process.stdout.write(JSON.stringify({ kpi_estado, lineas, cerradas }));
});
