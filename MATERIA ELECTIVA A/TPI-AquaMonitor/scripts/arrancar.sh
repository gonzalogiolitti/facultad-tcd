#!/usr/bin/env bash
# Arranca Node-RED para AquaMonitor (desde cualquier carpeta):
#     bash scripts/arrancar.sh            # queda en esta terminal (Ctrl+C para detener)
# Las variables de .env se cargan con `node --env-file`, que NO ejecuta el archivo
# como script de shell (una contrasena con espacios o simbolos no rompe nada) y
# no imprime ningun valor.
# Guarda el PID en nodered/userdir/.nodered.pid para que parar.sh pueda detenerlo de forma segura.
set -euo pipefail

AQUI="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
RAIZ="$(dirname "$AQUI")"
ENV_FILE="$RAIZ/.env"
USERDIR="$RAIZ/nodered/userdir"
PIDFILE="$USERDIR/.nodered.pid"

# nvm (si esta instalado) para usar la version de Node de esta maquina
[ -s "$HOME/.nvm/nvm.sh" ] && . "$HOME/.nvm/nvm.sh" >/dev/null 2>&1

if [ ! -f "$ENV_FILE" ]; then
    echo "Falta $ENV_FILE. Copia .env.example a .env y completalo." >&2
    exit 1
fi
if [ ! -d "$USERDIR/node_modules/node-red" ]; then
    echo "Node-RED no esta instalado. Ejecuta primero:  (cd nodered/userdir && npm install)" >&2
    exit 1
fi
# Evita arrancar dos veces (dos copias generarian datos duplicados)
es_nodered() { [ -r "/proc/$1/comm" ] && { [ "$(cat "/proc/$1/comm")" = "node-red" ] || tr '\0' ' ' < "/proc/$1/cmdline" | grep -q "red.js"; }; }
if [ -f "$PIDFILE" ] && kill -0 "$(cat "$PIDFILE")" 2>/dev/null && es_nodered "$(cat "$PIDFILE")"; then
    echo "Node-RED ya esta corriendo (PID $(cat "$PIDFILE")). Para detenerlo:  bash scripts/parar.sh" >&2
    exit 1
fi

cd "$USERDIR"
# Las credenciales del nodo de mail son solo marcadores ${SMTP_USER} / ${SMTP_PASSWORD} (los valores salen de .env).
# flows_cred.json esta ignorado por git; si falta (instalacion nueva) se crea a partir de la plantilla.
[ -f flows_cred.json ] || cp flows_cred.plantilla.json flows_cred.json
export TZ="America/Argentina/Buenos_Aires"
echo $$ > "$PIDFILE"        # `exec` conserva el PID: este numero es el de Node-RED
exec node --env-file="$ENV_FILE" node_modules/node-red/red.js --userDir "$USERDIR"
