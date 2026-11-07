# 03_power_bi – Tablero de Olist

Tablero de 2 páginas (1440×810) sobre la base `OlistDW` de SQL Server (modo Importar, autenticación de Windows, sin credenciales en los archivos).
El proyecto Power BI (PBIP) se **genera con código**: no se arma a mano.

| Página | Contenido |
|---|---|
| **Experiencia de compra** (qué descubrimos) | tarjeta de 5 indicadores · evolución mensual · % de negativas por tramo de atraso · origen de las negativas · categorías y estados con más negativas · panel «Qué descubrimos» |
| **Modelo y acción** (qué hace el modelo y cómo genera valor) | parámetro «% de pedidos a contactar» · tarjeta de 4 indicadores · PR-AUC con y sin variables de plazo · PR-AUC por mes · importancia de variables · curva de captura · pedidos de mayor riesgo · panel «Cómo genera valor» |

## Versión final y dónde está

La versión final es la **iteración 2 sin dona y con importancia de variables** (`c4_con_importancia` en las pruebas), y es la que está en
`C:\Users\gonza\Desktop\olist_tablero\olist_tablero.pbip`. Las carpetas de prueba y sus respaldos viven en `C:\Users\gonza\Desktop\olist_tablero_pruebas\`
(fuera del repositorio): `olist_tablero_respaldo_antes_c4` es el estado anterior de la carpeta principal y `_descartadas` guarda las variantes de diagnóstico.

## De dónde lee datos (tablas físicas, no vistas)

El tablero lee **tablas físicas** de `OlistDW`, no las vistas: `dw.tbl_pedidos`, `dw.tbl_vendedores` y `dw.tbl_geografia` reemplazan a `dw.vw_pedidos`, `dw.vw_vendedores` y `dw.vw_geografia`
(las vistas siguen existiendo como definición y de ellas se llenan las tablas). En el modelo de Power BI las tablas conservan los nombres `vw_pedidos`, `vw_vendedores` y `vw_geografia`, así que las medidas DAX no cambian;
`generar_pbip.py` solo cambia el origen de la consulta M (`FUENTE_FISICA`). Las demás tablas (`dw.dim_*`, `dw.fact_*`, `ml.tbl_*`) ya eran tablas.

**Antes de actualizar el tablero hay que refrescar las tablas** (cada vez que se recargue `dw` o cambie una vista), desde PowerShell en `proyecto_olist\`:

```powershell
py 02_sql_server\ejecutar_sql.py --timeout 300 02_sql_server\04_tablas_fisicas\02_refrescar_tablas.sql   # ~10 s; un COMMIT por tabla
py 02_sql_server\validar_dw.py --salida 02_sql_server\validacion_dw.md                                    # opcional: compara cada tabla con su vista
```

Luego, en Power BI Desktop: *Actualizar*. Motivo del cambio: con poca RAM libre la instancia de SQL Server queda con casi nada de memoria para consultas y las vistas pesadas se cuelgan (`CXSYNC_PORT`, `RESOURCE_SEMAPHORE`); leer una tabla no necesita esa memoria.

## Cómo regenerarla

Requisitos: Power BI Desktop **cerrado**, carpeta de destino vacía o inexistente, `dw.*` y `ml.*` cargadas en `OlistDW` (ver `02_sql_server/README.md`;
`dw.tbl_*` se llenan con `02_sql_server/04_tablas_fisicas/02_refrescar_tablas.sql`; `ml.tbl_importancia_variables` sale de `04_python_ml/outputs/importancia_variables.csv`, que escribe `04_python_ml/src/exportar_importancia.py`).

```bash
# 1) esqueleto (modelo, relaciones, tema, páginas en blanco); --base-theme = CY22SU09.json de cualquier proyecto PBIP existente o de la instalación de Desktop
python3 03_power_bi/generador_tablero/generar_pbip.py <destino> --fase esqueleto --base-theme <ruta>/CY22SU09.json
# 2) páginas y visuales de la versión final
python3 03_power_bi/generador_tablero/generar_pbip.py <destino> --fase completo --iteracion 2 --alternativas --importancia
```

Opciones de la fase `completo`: `--iteracion 1|2` (1 = correcciones de formato, 2 = versión narrativa) · `--alternativas` (la distribución del origen de las negativas va en barras; **obligatorio**, ver abajo) ·
`--clasicas` (tarjetas clásicas en lugar de la tarjeta nueva de varios valores) · `--importancia` (gráfico de importancia de variables).
Al abrir el proyecto recién generado, Desktop pide actualizar los datos. Nunca se versionan ni se copian `.pbi/cache.abf` ni `.pbi/localSettings.json`
(están en el `.gitignore`); si el modelo cambia, el generador descarta un `cache.abf` viejo.

## Qué rompía el tablero (y cómo quedó anotado)

Al abrir el informe, Desktop mostraba «No se pudo cargar el informe». Se aisló con variantes de un solo factor: **la causa era la dona**, en concreto su objeto
`dataPoint` con un selector por categoría (`selector.data[].scopeId.Comparison`) para pintar «tardíos» en rojo y «a tiempo» en azul.
El mismo gráfico sin ese objeto abría bien. **No usar selectores por categoría (`scopeId`) en este proyecto.**

Solución: la dona se reemplazó por barras horizontales con **dos series** (una medida por origen) y color por selector de medida, el mismo mecanismo de las demás barras.
Quedaron descartados como causa, porque abrieron bien: la tarjeta nueva `cardVisual`, las columnas calculadas DAX, las medidas nuevas, los subtítulos de los gráficos,
los cuadros de texto con varios párrafos y las barras de estados. (El `cache.abf` de un modelo anterior es un problema aparte que conviene evitar.)

## Verificación

`herramientas/verificar_pbip.py` (local, **ignorado por git** porque contiene términos del material interno de referencia) comprueba: JSON y `$schema`, campos y medidas
sin referencias huérfanas, relaciones sin ambigüedad, nombres y `lineageTag` únicos, posiciones dentro de la página, sin superposiciones, fuentes ≥ 9 pt, que los textos entren en su caja,
columnas de tabla dentro del ancho, y que no queden textos de la referencia, vínculos, marcadores, formato condicional ni filtros con condición sobre medidas.
Última corrida sobre la carpeta principal: 28 de 28 OK; 0 donas, 0 mapas, 0 `scopeId`.

## Datos y criterios que muestra el tablero

- «Evaluados» = pedidos entregados con reseña (95.824). Reseña negativa = puntaje ≤ 2 (12,81 %).
- Categoría = categoría principal del pedido (ítem más caro). Rankings de categorías y estados: mínimo 300 pedidos evaluados. Meses con menos de 300 evaluados no se grafican.
- Las frases bajo los títulos y los paneles de texto son cifras del total del período, sin filtros; cada una se verificó con consultas SQL.
- Importancia de variables: caída de la PR-AUC del Random Forest en el test al mezclar la variable (5 repeticiones). El desvío entre repeticiones no se guardó en el caché del notebook, por eso no se muestra.
