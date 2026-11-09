#!/usr/bin/env bash
# Detiene Node-RED de forma segura y ordenada:   bash scripts/parar.sh
# Usa el PID guardado por arrancar.sh (no mata procesos por nombre) y le pide a Node-RED que se cierre:
# asi guarda en disco los acumuladores de los indicadores y el estado de las alertas.
set -uo pipefail
AQUI="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
RAIZ="$(dirname "$AQUI")"
PIDFILE="$RAIZ/nodered/userdir/.nodered.pid"

if [ ! -f "$PIDFILE" ]; then
    echo "No hay PID guardado: Node-RED no fue arrancado con arrancar.sh (o ya se detuvo)."
    exit 0
fi
PID="$(cat "$PIDFILE")"
if ! kill -0 "$PID" 2>/dev/null; then
    echo "Node-RED (PID $PID) ya no esta corriendo."; rm -f "$PIDFILE"; exit 0
fi
# Comprueba que ese PID sea realmente Node-RED antes de enviarle nada
# (Node-RED cambia el titulo de su proceso a "node-red", por eso se mira `comm` y tambien la linea de comandos)
if ! { [ "$(cat "/proc/$PID/comm" 2>/dev/null)" = "node-red" ] || tr '\0' ' ' < "/proc/$PID/cmdline" 2>/dev/null | grep -q "red.js"; }; then
    echo "El PID $PID ya no corresponde a Node-RED (se reutilizo el numero). No se envia nada."; rm -f "$PIDFILE"; exit 1
fi
kill -TERM "$PID"
for _ in $(seq 1 30); do
    kill -0 "$PID" 2>/dev/null || { echo "Node-RED detenido (estado guardado en disco)."; rm -f "$PIDFILE"; exit 0; }
    sleep 1
done
echo "Node-RED no se detuvo en 30 s. Si hace falta, forzar con:  kill -9 $PID  (se pierde el estado de los ultimos segundos)" >&2
exit 1
