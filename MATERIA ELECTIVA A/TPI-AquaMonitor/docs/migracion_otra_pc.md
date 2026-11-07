# Pasar AquaMonitor a otra computadora

Guía para llevar el sistema a la PC de un compañero (por ejemplo, la que tiene más memoria y va a presentar).
Regla de oro: **solo UNA computadora puede estar generando datos a la vez contra el mismo bucket de InfluxDB.**
Si dos generan, se mezclan dos "plantas" en las mismas series y los indicadores salen mal.

## 1. Qué se copia

| Qué | Cómo | Dónde está |
|---|---|---|
| El código (flows, catálogo de umbrales, scripts, documentación) | `git clone` del repositorio, rama `stack-catedra`. **La rama tiene que estar subida** (`git push -u origin stack-catedra`) porque el script de descargas de la facultad solo sube `main` | repositorio |
| Los dos secretos (token de InfluxDB y contraseña de aplicación) y las direcciones de mail | el archivo **`.env`**, pasado **en privado** (ver 2) | **no** está en el repositorio |
| Nada más | — | — |

El catálogo de variables y umbrales es `nodered/userdir/aqm/catalogo.js` (viaja con el repositorio) y los flows son `nodered/userdir/flows.json` (también).

Pasos en la PC nueva (todo en [`README.md`](../README.md), secciones 4 y 5):

```bash
git clone <repo> && cd <repo>
git checkout stack-catedra
cd "MATERIA ELECTIVA A/TPI-AquaMonitor"
cd nodered/userdir && npm install && cd ../..
# poner el .env recibido en esta carpeta (junto a .env.example)
node nodered/pruebas/probar.js              # las pruebas de la lógica deben dar "todo OK"
bash nodered/arrancar.sh                    # o, en Windows, nodered\arrancar.ps1
```

## 2. Cómo pasar el `.env` de forma segura

- **Sí:** entregarlo en mano (pendrive que después se borra), o por un canal privado y cifrado (gestor de contraseñas compartido, mensaje con cifrado de extremo a extremo que se borra después de usarlo).
- **No:** GitHub, mail, capturas de pantalla, grupos de chat, Drive compartido con enlace.
- Verificar en la PC nueva que el `.env` quedó **fuera** de git: `git status` no debe mostrarlo.
- Mejor todavía: que la PC nueva use sus **propias credenciales** (un token nuevo de InfluxDB y una contraseña de aplicación nueva) y se revoquen las viejas (sección 5).

## 3. Qué estado se pierde y qué hacer

Node-RED guarda su memoria de trabajo en `nodered/userdir/context/` (ignorada por git, **no viaja** con el repositorio). Ahí viven:

| Estado | Si no se copia |
|---|---|
| Acumuladores de los indicadores de los períodos que están abiertos (hora, turno, día, semana) | los períodos abiertos empiezan de cero: **el primero que cierre en la PC nueva sale con menos muestras** (la columna `muestras` de `kpi_values` lo muestra) |
| Estado de las alertas (¿la bomba estaba en falla?, cooldown de EQ02/EQ03) | se empieza "en normal"; si la bomba estaba en falla justo en el cambio, puede avisar de nuevo |
| Estado de los equipos simulados (fase de las ondas, colmatación del filtro) | se sortea uno nuevo: el filtro vuelve a empezar "limpio" |
| Modo del generador, fallas aleatorias, mails silenciados / marcados | vuelven a los valores por defecto: modo normal, fallas aleatorias apagadas, **mails activos** y marcados `[PRUEBA]` |

Qué hacer:
1. **Lo más simple:** hacer el cambio justo después de un cambio de turno (06:00, 14:00 o 22:00) o de un cambio de hora, así casi no hay períodos largos a medio acumular.
2. Si se quiere conservar todo: detener la PC vieja con `bash nodered/parar.sh` (guarda el estado) y **copiar la carpeta `nodered/userdir/context/`** a la PC nueva antes de arrancar. No contiene secretos.
3. En la PC nueva, después de arrancar, volver a poner los modos que se quieran (botones de la pestaña *01 Generador de datos* y de *03 Alerta bomba EQ01*), o usar `bash nodered/corrida_continua.sh`.

## 4. Una sola computadora generando

1. En la PC vieja: `bash nodered/parar.sh`. Confirmar que se detuvo.
2. Recién después, arrancar en la PC nueva.
3. Verificar en InfluxDB que hay **un** ciclo cada 120 s (o cada 15 s en demo):
   ```sql
   SELECT date_bin(INTERVAL '10 minutes', time) AS ventana, count(DISTINCT time) AS ciclos
   FROM raw_variables WHERE time > now() - INTERVAL '1 hour' GROUP BY 1 ORDER BY 1
   ```
   En modo normal tiene que dar 5 ciclos por ventana de 10 minutos. Si da el doble, hay dos generadores.

## 5. Revocar y rotar las credenciales (después de la presentación)

**Token de InfluxDB**
1. InfluxDB Cloud → *Load Data* → *API Tokens*.
2. Buscar el token usado por Node-RED y **eliminarlo** (o desactivarlo).
3. Si el tablero de Grafana usa otro token de lectura, revocarlo también y actualizar la fuente de datos si se va a seguir usando.
4. Si se sigue trabajando: crear uno nuevo con el mínimo permiso (escritura sobre el bucket `aquamonitor`) y ponerlo en `.env`.

**Contraseña de aplicación de Gmail**
1. Cuenta de Google → *Seguridad* → *Contraseñas de aplicaciones*.
2. **Eliminar** la contraseña usada por AquaMonitor.
3. Si se sigue trabajando: generar una nueva y ponerla en `SMTP_PASSWORD`.

**Después de rotar**
- Reemplazar los valores en `.env` y reiniciar Node-RED (`parar.sh` y `arrancar.sh`).
- Borrar copias del `.env` viejo (pendrives, descargas, mensajes).
- Comprobar que no quedaron secretos en el repositorio: `git log -p | grep -i -E "token|password"` no debe mostrar valores reales.
