/**
 * CATALOGO DE AQUAMONITOR (unica fuente de verdad).
 *
 * Aca estan las 15 variables de los 3 equipos con sus unidades, rangos normales y
 * umbrales de advertencia (warning) y critico (critical), los turnos de la planta y los
 * valores por defecto del generador y de los avisos.
 * El generador, los indicadores y las alertas leen TODOS este archivo: si se cambia un
 * umbral, se cambia aca y se reinicia Node-RED.
 *
 * Convencion de los umbrales: [minimo, maximo]. null = ese lado no aplica.
 * Una lectura "viola" el umbral si es menor que el minimo o mayor que el maximo.
 * (Es la misma informacion que docs/jerarquia_ISA95.md y simulador/config.py.)
 */
const NIVEL_CAMPO = 'Nivel 0 - Campo (instrumentación)';
const NIVEL_CONTROL = 'Nivel 1 - Control (PLC/DCS)';

module.exports = {
    EMPRESA: 'AQM',
    PLANTA: 'PTEF',

    // Hora Argentina = UTC-3 todo el anio (sin horario de verano).
    ZONA: { nombre: 'America/Argentina/Buenos_Aires', offset_h: -3 },

    // Turnos de 8 h en hora Argentina. T3 cruza la medianoche (22:00 a 06:00).
    TURNOS: [
        { id: 'T1', desde_h: 6, hasta_h: 14 },
        { id: 'T2', desde_h: 14, hasta_h: 22 },
        { id: 'T3', desde_h: 22, hasta_h: 6 }
    ],

    // La consigna pide una medicion cada 2 a 5 minutos: el modo normal usa 120 s.
    // El modo demo (15 s) es solo para mostrar el sistema en vivo.
    GENERADOR: {
        intervalo_normal_s: 120,
        intervalo_demo_s: 15,
        prob_falla_aleatoria: 0.03      // por ciclo, cuando las fallas aleatorias estan activas
    },

    // Que muestras entran en los indicadores (KPIs): las de calidad >= calidad_minima.
    //   0 = todas las muestras (VALOR ACTUAL, decidido el 08/11/2026)
    //   1 = calidad 1 y 2 (igual que las alertas) | 2 = solo calidad 2 (regla original de la Fase 3)
    // Las ALERTAS siguen descartando la calidad 0 (ver PROGRESO.md): un aviso se dispara con UNA lectura, y una lectura
    // inverosimil podria ser un sensor fallado; un indicador resume muchas lecturas y debe reflejar las excursiones del proceso.
    // Motivo: con el modelo de calidad del generador, los valores en zona de alarma salen con calidad 1 o 0
    // (ver docs/jerarquia_ISA95.md, seccion 4), asi que con 2 los indicadores no ven las excursiones.
    // Cada fila de kpi_values lleva el tag `regla` (q0, q1 o q2) con la regla con la que se calculo.
    KPI: { calidad_minima: 0 },

    ALERTAS: {
        corte_medicion_s: 1800,         // si pasan mas de 30 min entre dos mediciones (Node-RED apagado, PC suspendida) se considera un CORTE
        rearme_s: 60,                   // segundos seguidos en normal para dar la falla de la bomba por terminada
        cooldown_normal_s: 1800,        // minimo entre dos mails por la misma variable de EQ02/EQ03
        cooldown_demo_s: 60
    },

    EQUIPOS: {
        EQ01: {
            nombre: 'Bomba de Ingreso', area: 'CAPT', area_descripcion: 'Captación y Bombeo',
            variables: {
                CAUDAL:    { etiqueta: 'caudal',    unit: 'm3/h',  nivel: NIVEL_CAMPO,   normal: 120.0, min_op: 95.0,  max_op: 150.0, warning: [90.0, 155.0],  critical: [70.0, 175.0] },
                PRESION:   { etiqueta: 'presión',   unit: 'bar',   nivel: NIVEL_CAMPO,   normal: 4.5,   min_op: 3.8,   max_op: 5.2,   warning: [3.5, 5.5],     critical: [2.5, 6.5] },
                CORRIENTE: { etiqueta: 'corriente', unit: 'A',     nivel: NIVEL_CAMPO,   normal: 45.0,  min_op: 38.0,  max_op: 52.0,  warning: [null, 55.0],   critical: [null, 65.0] },
                VIBRACION: { etiqueta: 'vibración', unit: 'mm/s',  nivel: NIVEL_CAMPO,   normal: 2.8,   min_op: 0.5,   max_op: 4.5,   warning: [null, 4.5],    critical: [null, 7.1] },   // ISO 10816-3
                // ESTADO: 1 = en marcha, 0 = parada. Critico si ESTADO < 0.5 (criterio unico en todo el sistema).
                ESTADO:    { etiqueta: 'estado',    unit: 'bool',  nivel: NIVEL_CONTROL, normal: 1.0,   min_op: 0.0,   max_op: 1.0,   warning: null,           critical: [0.5, null] }
            }
        },
        EQ02: {
            nombre: 'Filtro de Arena', area: 'FILT', area_descripcion: 'Filtración',
            variables: {
                TURB_IN:     { etiqueta: 'turbidez de entrada', unit: 'NTU',  nivel: NIVEL_CAMPO,   normal: 8.0,   min_op: 3.0,   max_op: 15.0,  warning: [null, 15.0], critical: [null, 25.0] },
                TURB_OUT:    { etiqueta: 'turbidez de salida',  unit: 'NTU',  nivel: NIVEL_CAMPO,   normal: 0.8,   min_op: 0.2,   max_op: 1.5,   warning: [null, 1.5],  critical: [null, 2.0] },
                PRES_DIF:    { etiqueta: 'presión diferencial', unit: 'mbar', nivel: NIVEL_CAMPO,   normal: 350.0, min_op: 150.0, max_op: 600.0, warning: [null, 600.0], critical: [null, 800.0] },
                CAUDAL_FILT: { etiqueta: 'caudal filtrado',     unit: 'm3/h', nivel: NIVEL_CAMPO,   normal: 115.0, min_op: 90.0,  max_op: 140.0, warning: [90.0, null], critical: [70.0, null] },
                EFICIENCIA:  { etiqueta: 'eficiencia',          unit: '%',    nivel: NIVEL_CONTROL, normal: 90.0,  min_op: 80.0,  max_op: 99.0,  warning: [80.0, null], critical: [70.0, null] }
            }
        },
        EQ03: {
            nombre: 'Reactor Biológico', area: 'REAC', area_descripcion: 'Tratamiento Biológico',
            variables: {
                PH:      { etiqueta: 'pH',                   unit: 'pH',    nivel: NIVEL_CAMPO, normal: 7.2,    min_op: 6.8,   max_op: 7.6,    warning: [6.5, 8.0],    critical: [6.0, 8.5] },
                OD:      { etiqueta: 'oxígeno disuelto',     unit: 'mg/L',  nivel: NIVEL_CAMPO, normal: 2.5,    min_op: 1.8,   max_op: 3.5,    warning: [1.5, 4.0],    critical: [1.0, 5.0] },
                TEMP:    { etiqueta: 'temperatura',          unit: 'C',     nivel: NIVEL_CAMPO, normal: 22.0,   min_op: 16.0,  max_op: 28.0,   warning: [15.0, 30.0],  critical: [10.0, 35.0] },
                CONDUCT: { etiqueta: 'conductividad',        unit: 'uS/cm', nivel: NIVEL_CAMPO, normal: 1200.0, min_op: 800.0, max_op: 1800.0, warning: [null, 1800.0], critical: [null, 2200.0] },
                NIVEL:   { etiqueta: 'nivel',                unit: '%',     nivel: NIVEL_CAMPO, normal: 75.0,   min_op: 45.0,  max_op: 88.0,   warning: [40.0, 90.0],  critical: [20.0, 95.0] }
            }
        }
    },

    // Fallas que se pueden provocar (botones del generador). ciclos_default = cuantas
    // mediciones dura la falla. Las 4 primeras son las del simulador de Python; PARADA_BOMBA es nueva.
    ANOMALIAS: {
        VIB_HIGH:     { equipo: 'EQ01', ciclos_default: 15, severidad: 'critical', descripcion: 'Vibración crítica en la bomba de ingreso (desbalanceo / rodamiento)' },
        CAUDAL_DROP:  { equipo: 'EQ01', ciclos_default: 10, severidad: 'warning',  descripcion: 'Caída brusca de caudal (cavitación / obstrucción en la aspiración)' },
        PARADA_BOMBA: { equipo: 'EQ01', ciclos_default: 8,  severidad: 'critical', descripcion: 'Parada imprevista de la bomba (ESTADO = 0)' },
        PH_SPIKE:     { equipo: 'EQ03', ciclos_default: 8,  severidad: 'critical', descripcion: 'Excursión de pH fuera de rango en el reactor biológico' },
        FILTER_SAT:   { equipo: 'EQ02', ciclos_default: 20, severidad: 'warning',  descripcion: 'Saturación acelerada del lecho filtrante (colmatación)' }
    }
};
