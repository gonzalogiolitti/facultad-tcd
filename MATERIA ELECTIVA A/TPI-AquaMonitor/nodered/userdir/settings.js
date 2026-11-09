/**
 * Configuracion de Node-RED para AquaMonitor.
 * Los secretos (token de InfluxDB, contrasena del mail) NO estan aca:
 * se leen de las variables de entorno que carga scripts/arrancar.sh desde .env.
 */
module.exports = {
    flowFile: 'flows.json',

    // Las credenciales de los nodos NO llevan valores reales: son placeholders ${VARIABLE}
    // que Node-RED reemplaza con el entorno. Por eso el archivo no necesita cifrarse.
    credentialSecret: false,

    // El editor solo es accesible desde esta PC (los flows pueden leer el entorno).
    uiHost: '127.0.0.1',
    uiPort: process.env.PORT || 1880,

    // Variables de contexto (acumuladores de KPIs, estado de la bomba, modo del generador):
    // se guardan en disco para que sobrevivan a un reinicio de Node-RED.
    contextStorage: {
        default: { module: 'localfilesystem', config: { flushInterval: 10 } }
    },

    functionTimeout: 0,
    // Catalogo y funciones compartidas: los nodos function los usan con  global.get('aqm')
    functionGlobalContext: { aqm: require('./aqm/aqm.js') },
    exportGlobalContextKeys: false,

    logging: {
        console: { level: 'info', metrics: false, audit: false }
    },

    editorTheme: {
        projects: { enabled: false }
    }
};
