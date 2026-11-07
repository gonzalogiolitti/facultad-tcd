// INDICADORES (KPIs): por cada ciclo del generador acumula las muestras buenas (calidad 2) en
// los 4 periodos abiertos (hora, turno, dia, semana) y escribe en InfluxDB una fila por
// KPI y periodo.
//  - La marca de tiempo de la fila es el INICIO del periodo (en UTC), calculado en hora Argentina.
//  - Mientras el periodo esta abierto la fila se reescribe (misma clave = se pisa): queda UNA sola.
//  - Cuando empieza el periodo siguiente, la fila del anterior se escribe por ultima vez con cerrado=true.
// Los acumuladores se guardan en el contexto global (en disco), asi que sobreviven a un reinicio.
const A = global.get('aqm');
const lecturas = msg.lecturas, ts = msg.ts;
if (!lecturas || !ts) return null;

const estado = global.get('kpi_estado') || {};
const cerrados = global.get('kpi_cerrados') || { dia: {} };   // KPIs de los dias ya cerrados (los usa el reporte diario)
const lineas = [];
let nCerrados = 0;

A.GRANULARIDADES.forEach((g) => {
    const inicio = A.inicioPeriodo(g, ts);
    let p = estado[g];
    if (p && p.inicio !== inicio) {                            // cambio de periodo: se cierra el anterior
        const kpisFinal = A.calcularKpis(g, p.acc);
        A.lineasKpi(g, p.inicio, kpisFinal, true).forEach((l) => lineas.push(l));
        nCerrados += 1;
        if (g === 'dia') {
            cerrados.dia[p.inicio] = kpisFinal;
            Object.keys(cerrados.dia).sort().slice(0, -10).forEach((k) => delete cerrados.dia[k]);   // guarda los ultimos 10 dias
        }
        p = null;
    }
    if (!p) p = estado[g] = { inicio, acc: {} };
    lecturas.forEach((l) => A.acumular(p.acc, l));
    A.lineasKpi(g, inicio, A.calcularKpis(g, p.acc), false).forEach((l) => lineas.push(l));   // periodo en curso
});

global.set('kpi_estado', estado);
global.set('kpi_cerrados', cerrados);
node.status({ fill: 'green', shape: 'dot', text: lineas.length + ' filas' + (nCerrados ? ' | cerro ' + nCerrados + ' periodo(s)' : '') });
return { payload: lineas.join('\n'), medida: 'kpi_values' };
