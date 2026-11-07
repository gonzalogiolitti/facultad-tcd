#!/usr/bin/env bash
# CORRIDA CONTINUA: deja el generador funcionando varias horas en segundo plano, en modo normal (120 s)
# y con fallas aleatorias, para que el tablero tenga historial real (por ejemplo "fallas de las ultimas 12 h").
#     bash nodered/corrida_continua.sh              # SIN mails (protege la cuenta de Gmail)
#     bash nodered/corrida_continua.sh --con-mails  # con los avisos por mail activados
#     bash nodered/parar.sh                         # para detenerla
# Log: nodered/userdir/nodered.log   (ignorado por git)
set -euo pipefail
AQUI="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
LOG="$AQUI/userdir/nodered.log"
PIDFILE="$AQUI/userdir/.nodered.pid"
URL="http://127.0.0.1:1880"
CON_MAILS="no"; [ "${1:-}" = "--con-mails" ] && CON_MAILS="si"

boton() { curl -s -m 10 -o /dev/null -X POST "$URL/inject/$1"; }

if [ -f "$PIDFILE" ] && kill -0 "$(cat "$PIDFILE")" 2>/dev/null; then
    echo "Node-RED ya esta corriendo (PID $(cat "$PIDFILE")): solo se ajustan los modos."
else
    nohup bash "$AQUI/arrancar.sh" > "$LOG" 2>&1 &
    echo "Arrancando Node-RED en segundo plano (log: $LOG)..."
    for _ in $(seq 1 40); do
        [ "$(curl -s -m 3 -o /dev/null -w '%{http_code}' "$URL/" || true)" = "200" ] && break
        sleep 2
    done
    sleep 8    # deja que carguen los flows
fi
if [ "$(curl -s -m 3 -o /dev/null -w '%{http_code}' "$URL/" || true)" != "200" ]; then
    echo "Node-RED no respondio en $URL. Revisar el log: $LOG" >&2; exit 1
fi

boton inj_modo_normal          # una medicion cada 120 s (cumple la consigna: 2 a 5 minutos)
boton inj_reanudar
boton inj_aleatorio_on         # fallas aleatorias (aprox. 3 % por ciclo)
if [ "$CON_MAILS" = "si" ]; then boton inj_silenciar_off; else boton inj_silenciar_on; fi
echo "Listo. Modo normal (120 s), fallas aleatorias ACTIVADAS, mails: $([ "$CON_MAILS" = "si" ] && echo ACTIVADOS || echo SILENCIADOS)."
echo "Editor: $URL   |   Para detener:  bash nodered/parar.sh"
echo "Importante: dejar la PC encendida y SIN suspenderse; solo UNA computadora puede generar datos contra el mismo bucket."
