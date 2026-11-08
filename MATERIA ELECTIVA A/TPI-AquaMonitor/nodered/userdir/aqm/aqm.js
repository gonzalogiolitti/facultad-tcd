/**
 * Funciones compartidas por los flows de AquaMonitor (se usan desde los nodos "function"
 * con:  const A = global.get('aqm');).
 * Todo el manejo de horas es en hora Argentina (UTC-3, sin horario de verano) y las
 * marcas de tiempo viajan siempre como milisegundos UTC.
 */
const CATALOGO = require('./catalogo');

const H = 3600000;
const D = 24 * H;
const OFF = -CATALOGO.ZONA.offset_h * H;      // 3 h: pasa de UTC a hora Argentina restando OFF

const DURACION_MS = { hora: H, turno: 8 * H, dia: D, semana: 7 * D };
const GRANULARIDADES = ['hora', 'turno', 'dia', 'semana'];

const pad = (n) => String(n).padStart(2, '0');

/** "07/11/2026 17:05:22": 24 horas, hora Argentina. */
function fmtFecha(ts) {
    const d = new Date(ts - OFF);
    return pad(d.getUTCDate()) + '/' + pad(d.getUTCMonth() + 1) + '/' + d.getUTCFullYear() + ' ' +
        pad(d.getUTCHours()) + ':' + pad(d.getUTCMinutes()) + ':' + pad(d.getUTCSeconds());
}

/** "2026-11-07": el dia en hora Argentina (clave para contar eventos por dia). */
function fmtDia(ts) {
    const d = new Date(ts - OFF);
    return d.getUTCFullYear() + '-' + pad(d.getUTCMonth() + 1) + '-' + pad(d.getUTCDate());
}

/**
 * Inicio (en ms UTC) del periodo de la granularidad `g` que contiene a `ts`.
 *  hora   : cada hora en punto
 *  turno  : 06:00, 14:00 y 22:00 hora Argentina
 *  dia    : 00:00 hora Argentina
 *  semana : lunes 00:00 hora Argentina
 */
function inicioPeriodo(g, ts) {
    const loc = ts - OFF;                       // "reloj de pared" argentino expresado como si fuera UTC
    const dia = Math.floor(loc / D);
    switch (g) {
        case 'hora': return Math.floor(ts / H) * H;
        case 'dia': return dia * D + OFF;
        case 'semana': {
            const dow = (((dia + 3) % 7) + 7) % 7;   // 0 = lunes (el 1/1/1970 fue jueves)
            return (dia - dow) * D + OFF;
        }
        case 'turno': {
            const h = (loc - dia * D) / H;
            let ini;
            if (h >= 6 && h < 14) ini = dia * D + 6 * H;
            else if (h >= 14 && h < 22) ini = dia * D + 14 * H;
            else if (h >= 22) ini = dia * D + 22 * H;
            else ini = dia * D - 2 * H;             // 00:00 a 06:00 pertenece al T3 que empezo ayer a las 22:00
            return ini + OFF;
        }
        default: throw new Error('granularidad desconocida: ' + g);
    }
}

/** 'T1' | 'T2' | 'T3' segun el inicio del turno. */
function turnoDe(ts) {
    const ini = inicioPeriodo('turno', ts) - OFF;
    const h = Math.round(((ini % D) + D) % D / H);
    return h === 6 ? 'T1' : h === 14 ? 'T2' : 'T3';
}

/** Escapes del line protocol de InfluxDB. */
const escTag = (v) => String(v).replace(/([,= ])/g, '\\$1');
const escStr = (v) => String(v).replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/[\r\n]+/g, ' ');

/** true si el valor sale del rango [lo, hi] (null = ese lado no aplica). */
function viola(rango, v) {
    if (!rango) return false;
    const lo = rango[0], hi = rango[1];
    return (lo !== null && v < lo) || (hi !== null && v > hi);
}

/** 'critical' | 'warning' | null para una lectura. */
function severidad(equipo, variable, v) {
    const cfg = (CATALOGO.EQUIPOS[equipo] || { variables: {} }).variables[variable];
    if (!cfg) return null;
    if (viola(cfg.critical, v)) return 'critical';
    if (viola(cfg.warning, v)) return 'warning';
    return null;
}

/** Rango legible: "[2,5 - 6,5]". */
function rangoTexto(rango) {
    const f = (x) => (x === null ? '-' : String(x).replace('.', ','));
    return '[' + f(rango[0]) + ' a ' + f(rango[1]) + ']';
}

/**
 * Motivos de falla critica de la bomba EQ01 a partir de las lecturas del ciclo.
 * Descarta las variables con calidad 0 (dato inverosimil); acepta calidad 1 y 2.
 * @param lecturas arreglo [{equipo, variable, value, quality}]
 * @returns {{motivos: Array, valores: Object}}
 */
function motivosBomba(lecturas) {
    const vars = CATALOGO.EQUIPOS.EQ01.variables;
    const valores = {};
    const motivos = [];
    lecturas.filter((l) => l.equipo === 'EQ01').forEach((l) => {
        if (l.quality === 0) return;
        valores[l.variable] = l.value;
        const cfg = vars[l.variable];
        if (!cfg || !viola(cfg.critical, l.value)) return;
        const texto = l.variable === 'ESTADO'
            ? 'la bomba está parada (ESTADO < 0,5)'
            : cfg.etiqueta + ' ' + l.value + ' ' + cfg.unit + ' fuera del límite crítico ' + rangoTexto(cfg.critical);
        motivos.push({ variable: l.variable, valor: l.value, texto });
    });
    return { motivos, valores };
}

// ---------------------------------------------------------------------------
//  INDICADORES (KPIs). Se acumulan las muestras de calidad 2 de cada variable y se
//  calculan las formulas con esos acumuladores (sin volver a leer la base).
// ---------------------------------------------------------------------------
/** Suma una lectura al acumulador de un periodo (solo calidad >= KPI.calidad_minima). Usa el metodo de Welford para el desvio. */
function acumular(acc, l) {
    if (l.quality < CATALOGO.KPI.calidad_minima) return;
    const k = l.equipo + '.' + l.variable;
    const a = acc[k] || (acc[k] = { n: 0, sum: 0, mean: 0, m2: 0, nOn: 0, nOut: 0 });
    a.n += 1;
    a.sum += l.value;
    const d = l.value - a.mean;
    a.mean += d / a.n;
    a.m2 += d * (l.value - a.mean);
    if (k === 'EQ01.ESTADO' && l.value >= 0.5) a.nOn += 1;                                   // en marcha
    if (k === 'EQ03.PH' && viola(CATALOGO.EQUIPOS.EQ03.variables.PH.warning, l.value)) a.nOut += 1;   // pH fuera de [6,5 ; 8,0]
}

const redondear = (v, dec) => Number(v.toFixed(dec));

/**
 * Los 6 KPIs de un periodo de la granularidad `g` a partir de su acumulador.
 * @returns [{equipo, kpi, unit, value, muestras}] (solo los que se pueden calcular)
 */
function calcularKpis(g, acc) {
    const out = [];
    const v = (k) => acc[k];
    const push = (equipo, kpi, unit, value, muestras) => {
        if (value !== null && Number.isFinite(value)) out.push({ equipo, kpi, unit, value, muestras });
    };
    const cau = v('EQ01.CAUDAL'), cor = v('EQ01.CORRIENTE'), est = v('EQ01.ESTADO');
    if (cau && cor && cor.mean > 0) push('EQ01', 'eficiencia_energetica', 'm3h_per_A', redondear(cau.mean / cor.mean, 4), Math.min(cau.n, cor.n));
    if (est && est.n > 0) push('EQ01', 'disponibilidad_bomba', '%', redondear(100 * est.nOn / est.n, 2), est.n);
    const tin = v('EQ02.TURB_IN'), tout = v('EQ02.TURB_OUT'), pd = v('EQ02.PRES_DIF');
    if (tin && tout && tin.mean > 0) push('EQ02', 'eficiencia_filtracion', '%', redondear((tin.mean - tout.mean) / tin.mean * 100, 3), Math.min(tin.n, tout.n));
    if (pd && pd.n > 0) push('EQ02', 'presion_diferencial_media', 'mbar', redondear(pd.mean, 2), pd.n);
    const ph = v('EQ03.PH');
    if (ph && ph.n > 0) push('EQ03', 'tiempo_fuera_rango_ph', 'min', redondear((DURACION_MS[g] / 60000) * ph.nOut / ph.n, 2), ph.n);
    if (ph && ph.n > 1) push('EQ03', 'desviacion_ph', 'pH', redondear(Math.sqrt(ph.m2 / (ph.n - 1)), 4), ph.n);
    return out;
}

/**
 * Lineas de line protocol de los KPIs de UN periodo ya cerrado: una fila por KPI, con `time` = inicio del periodo.
 * Cada fila se escribe UNA sola vez (al cerrar el periodo). No se reescribe nunca: InfluxDB puede devolver versiones
 * viejas de una misma clave recien reescrita, asi que el periodo EN CURSO se calcula con SQL desde raw_variables.
 * El tag `regla` (q0/q1/q2) dice con que calidad minima se calculo la fila. Ademas cambia la clave: asi estas filas no
 * pueden chocar con las filas viejas del diseño anterior (periodos abiertos reescritos) que tienen otra clave.
 */
function lineasKpi(g, inicio, kpis) {
    const turno = g === 'turno' ? ',turno=' + turnoDe(inicio) : '';
    return kpis.map((k) =>
        'kpi_values,equipo=' + k.equipo + ',kpi=' + k.kpi + ',periodo=' + g + ',regla=q' + CATALOGO.KPI.calidad_minima + ',unit=' + escTag(k.unit) + turno +
        ' value=' + k.value + ',muestras=' + k.muestras + 'i,cerrado=true ' + inicio);
}

module.exports = {
    CATALOGO, GRANULARIDADES, DURACION_MS, OFF,
    fmtFecha, fmtDia, inicioPeriodo, turnoDe, escTag, escStr, viola, severidad, rangoTexto, motivosBomba,
    acumular, calcularKpis, lineasKpi
};
