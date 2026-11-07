// Boton de prueba: arma una falla de bomba FALSA para ver como llega el mail. No escribe nada en la base.
return {
    evento: {
        tipo: msg.tipo_prueba === 'normalizada' ? 'normalizada' : 'falla', prueba: true, ts: Date.now(), duracionS: 125,
        motivos: [{ variable: 'VIBRACION', valor: 8.2, texto: 'vibración 8.2 mm/s fuera del límite crítico [- a 7,1]' }],
        valores: { CAUDAL: 118, PRESION: 4.6, CORRIENTE: 47, VIBRACION: 8.2, ESTADO: 1 }
    }
};
