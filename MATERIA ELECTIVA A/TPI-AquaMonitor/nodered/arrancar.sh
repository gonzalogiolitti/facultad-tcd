#!/usr/bin/env bash
# Arranca Node-RED para AquaMonitor (desde cualquier carpeta):
#     bash nodered/arrancar.sh
# Las variables de .env se cargan con `node --env-file`, que NO ejecuta el archivo
# como script de shell (una contrasena con espacios o simbolos no rompe nada) y
# no imprime ningun valor.
set -euo pipefail

AQUI="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
RAIZ="$(dirname "$AQUI")"
ENV_FILE="$RAIZ/.env"
USERDIR="$AQUI/userdir"

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

cd "$USERDIR"
export TZ="America/Argentina/Buenos_Aires"
exec node --env-file="$ENV_FILE" node_modules/node-red/red.js --userDir "$USERDIR"
