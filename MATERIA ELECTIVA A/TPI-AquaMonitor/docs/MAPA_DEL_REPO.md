# Mapa del repositorio

Guía para recorrer AquaMonitor sin conocerlo. Todas las rutas son relativas a la carpeta del proyecto (`TPI-AquaMonitor/`).

## Árbol (una línea por carpeta)

```
TPI-AquaMonitor/
├── README.md                    la guía principal: qué es, cómo instalar, arrancar y presentar
├── .env.example                 plantilla de variables; se copia a .env (que NO se sube a git)
├── .gitignore                   qué se ignora (secretos, estado de Node-RED, entorno virtual)
│
├── nodered/                     el sistema: Node-RED con los flows
│   ├── userdir/                 carpeta de trabajo de Node-RED: ajustes, flows y catálogo de variables y umbrales
│   │   └── aqm/                 catalogo.js (ÚNICA fuente de umbrales y turnos) y aqm.js (funciones comunes)
│   ├── src/funciones/           el código de cada nodo "function" (generador, KPIs, alertas, mail, reporte)
│   └── construir_flows.js       arma userdir/flows.json a partir de src/funciones/
│
├── grafana/                     aquamonitor_dashboard.json: el tablero para importar en Grafana Cloud
├── sql/                         consultas SQL de verificación y operación (se corren con scripts/consulta_sql.py)
├── scripts/                     arrancar, parar y dejar corriendo el sistema; herramientas de Python
├── pruebas/                     pruebas automáticas de la lógica (probar.js) y cruce de indicadores (cruzar_kpis.py)
├── docs/                        documentación: este mapa, PROGRESO, presentación, planificación, jerarquía ISA-95,
│                                metodología de análisis, modelo de negocio, guía de migración a otra PC
│
└── _archivo/                    lo que ya no es parte del sistema final (no se borra, se conserva)
    ├── stack_anterior/          el primer diseño: simulador de Python, MQTT, QuestDB, Docker, flows viejos, alerta con Telegram
    └── basura_windows/          marcas de descarga de Windows (*:Zone.Identifier); solo existe en tu disco, git la ignora
```

Carpetas que existen en tu disco pero **no** están en git: `.venv/` (entorno de Python), `nodered/userdir/node_modules/` (se crea con `npm install`) y `nodered/userdir/context/` (el estado de Node-RED).

## Qué abrir primero (en este orden)

1. **`README.md`**: qué hace el sistema y cómo se instala.
2. **`docs/presentacion.md`**: el guion de la defensa, con la demo paso a paso.
3. **`nodered/userdir/aqm/catalogo.js`**: las 15 variables, sus umbrales, los turnos y la regla de calidad de los indicadores. Es corto y explica casi todo el dominio.
4. **`nodered/src/funciones/gen_ciclo.js`**: el generador de datos (cómo se simulan los 3 equipos).
5. **`docs/PROGRESO.md`**: qué se hizo, cómo se probó, qué decisiones se tomaron y qué falta.
6. **`docs/MAPA_DEL_REPO.md`** (este archivo) cuando te pierdas.

## Qué no tocar

| Qué | Por qué |
|---|---|
| `.env` | tiene el token de InfluxDB y la contraseña de aplicación de Gmail. No se sube, no se pega en chats |
| `nodered/userdir/context/`, `flows_cred.json`, `.config.*`, `.nodered.pid`, `nodered.log` | estado persistente de Node-RED (acumuladores de indicadores, estado de las alertas) y credenciales. Los maneja Node-RED |
| `nodered/userdir/flows.json` | **es un archivo generado**. Se edita el código en `nodered/src/funciones/` y se corre `node nodered/construir_flows.js` |
| `grafana/aquamonitor_dashboard.json` | **también generado**. Se edita `scripts/construir_dashboard.py` y se regenera |
| `.venv/` | entorno de Python; si se mueve la carpeta se recrea |
| `_archivo/` | conservado por si hay que volver al diseño anterior; nada del sistema final lo usa |

## Chuleta: 10 comandos para recorrer el repo en Ubuntu

```bash
cd "ruta/a/TPI-AquaMonitor"                                  # 1. ubicarse en la carpeta del proyecto
ls -A                                                         # 2. ver qué hay (incluye archivos ocultos como .env.example)
find . -maxdepth 2 -not -path './.git*' -not -path './.venv*' -not -path '*/node_modules*' | sort    # 3. árbol de dos niveles (o: sudo apt install tree  y luego  tree -L 2 -I '.venv|node_modules')
less README.md                                                # 4. leer un archivo (q para salir)
grep -rn "calidad_minima" --include='*.js' --include='*.py' --include='*.md' --exclude-dir={node_modules,.venv,.git} .    # 5. buscar una palabra en el proyecto
wc -l nodered/src/funciones/*.js                              # 6. cuántas líneas tiene cada función de Node-RED
git status -sb                                                # 7. ¿hay cambios sin guardar? ¿en qué rama estoy?
git log --oneline --graph -15                                 # 8. los últimos 15 commits
node pruebas/probar.js                                        # 9. correr las pruebas automáticas (tarda unos segundos)
.venv/bin/python scripts/consulta_sql.py -f sql/01_datos_por_variable.sql    # 10. ver los datos reales en InfluxDB (necesita .env y el entorno de Python)
```

Para arrancar y detener el sistema: `bash scripts/arrancar.sh` y `bash scripts/parar.sh` (README, sección 5.3).
