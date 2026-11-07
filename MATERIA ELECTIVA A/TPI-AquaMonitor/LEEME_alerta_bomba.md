# Alerta de bomba EQ01 (Node-RED -> mail / Telegram -> Grafana)

## Qué hace
Cuando la bomba pasa de normal a falla (vibración > 7.1 mm/s, caudal < 70 o > 175 m3/h, presión < 2.5 o > 6.5 bar, corriente > 65 A, o ESTADO = 0), Node-RED:
1. manda un mail,
2. manda un mensaje de Telegram,
3. guarda el evento en QuestDB (tabla `eventos_bomba`) para que Grafana cuente las fallas.
Avisa una sola vez por falla, y otra vez cuando se normaliza (tras ALERTA_REARME_S segundos seguidos en valores normales).

## Pasos
1. Node-RED > Manage palette > instalar `node-red-node-email` (si no está).
2. Menú > Import > pegar `entrega_05_alerta_bomba.json`.
3. En el nodo "Bomba EQ01" (mqtt in), elegir el broker EMQX que ya usás en el flow 01 (el del flow importado es un placeholder; borrarlo después).
4. Variables de entorno de Node-RED (o `settings.js` > `functionGlobalContext` no hace falta): 
   - ALERT_MAIL_TO = tu mail destino
   - TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID (bot creado con @BotFather)
   - QUESTDB_HTTP_URL (ej. https://tu-instancia:9000) y QUESTDB_TOKEN si la instancia lo pide
   - opcional: ALERTA_REARME_S (por defecto 60)
5. Nodo "Mail de aviso": Gmail con verificación en dos pasos + contraseña de aplicación; usuario = tu Gmail, contraseña = la de aplicación (se escribe en el nodo, no en el archivo).
6. Deploy y tocar el botón "Probar mail + Telegram" (marca [PRUEBA] y no escribe en la base).
7. Grafana: pegar las consultas de `grafana_historial_fallas.sql` en cada panel.

## Cuidado
- Si el flow 03 ya manda mail con alertas críticas, desactivá uno de los dos para no recibir mails dobles.
- Nunca subas el token del bot ni la contraseña a GitHub.
