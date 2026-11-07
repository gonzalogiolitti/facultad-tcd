// INDICADORES (KPIs): por cada ciclo del generador acumula las muestras buenas (calidad 2) en
// los 4 periodos abiertos (hora, turno, dia, semana) y, cuando un periodo TERMINA, escribe en InfluxDB
// una fila por KPI con el resultado final.
//  - La marca de tiempo de la fila es el INICIO del periodo (en UTC), calculado en hora Argentina.
//  - Cada fila se escribe UNA sola vez, al cerrar el periodo (no se reescribe): asi no hay filas repetidas que
//    InfluxDB pueda devolver en versiones distintas.
//  - El periodo EN CURSO no se escribe: el tablero lo calcula con SQL desde raw_variables.
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
        A.lineasKpi(g, p.inicio, kpisFinal).forEach((l) => lineas.push(l));
        nCerrados += 1;
        if (g === 'dia') {
            cerrados.dia[p.inicio] = kpisFinal;
            Object.keys(cerrados.dia).sort().slice(0, -10).forEach((k) => delete cerrados.dia[k]);   // guarda los ultimos 10 dias
        }
        p = null;
    }
    if (!p) p = estado[g] = { inicio, acc: {} };
    lecturas.forEach((l) => A.acumular(p.acc, l));
});

global.set('kpi_estado', estado);
global.set('kpi_cerrados', cerrados);
const ultimo = global.get('kpi_filas_escritas') || 0;
global.set('kpi_filas_escritas', ultimo + lineas.length);
node.status({ fill: 'green', shape: 'dot', text: 'periodos abiertos: ' + A.GRANULARIDADES.map((g) => g + ' ' + A.fmtFecha(estado[g].inicio).slice(0, 16)).join(' | ').slice(0, 60) + ' | filas escritas: ' + (ultimo + lineas.length) });
return lineas.length ? { payload: lineas.join('\n'), medida: 'kpi_values' } : null;
