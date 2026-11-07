// PRUEBA: calcula los KPIs de los 4 periodos que estan ABIERTOS ahora (con los acumuladores de Node-RED) y los escribe en
// otro measurement, kpi_values_prueba, para no contaminar el historial real (kpi_values).
// Sirve para ver las 4 granularidades sin esperar a que cierre un turno, un dia o una semana, y para comparar
// el calculo de Node-RED contra el de SQL (que usa el tablero para el periodo en curso).
// Cada pulsacion lleva su propio tag `corrida` para no pisar las anteriores.
const A = global.get('aqm');
const estado = global.get('kpi_estado') || {};
const ahora = Date.now();
const lineas = [];
A.GRANULARIDADES.forEach((g) => {
    const p = estado[g];
    if (!p) return;
    A.lineasKpi(g, p.inicio, A.calcularKpis(g, p.acc)).forEach((l) =>
        lineas.push(l.replace(/^kpi_values,/, 'kpi_values_prueba,corrida=' + ahora + ',').replace(/cerrado=true /, 'cerrado=false,calculado_en=' + ahora + 'i ')));
});
node.warn('KPIs de PRUEBA: ' + lineas.length + ' filas -> kpi_values_prueba');
return lineas.length ? { payload: lineas.join('\n'), medida: 'kpi_values_prueba' } : null;
