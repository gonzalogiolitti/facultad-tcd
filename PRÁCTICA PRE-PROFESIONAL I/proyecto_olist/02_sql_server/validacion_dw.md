| Comprobación | Esperado | Obtenido | OK |
|---|---|---|---|
| dw.dim_cliente = stg.clientes | 99,441 | 99,441 | sí |
| dw.dim_vendedor = stg.vendedores | 3,095 | 3,095 | sí |
| dw.dim_producto = stg.productos | 32,951 | 32,951 | sí |
| dw.fact_pedido = stg.pedidos | 99,441 | 99,441 | sí |
| dw.fact_pedido_item = stg.items_pedido | 112,650 | 112,650 | sí |
| dw.fact_pago = stg.pagos | 103,886 | 103,886 | sí |
| dw.fact_resena = pedidos distintos con reseña en stg.resenas (una por pedido) | 98,673 | 98,673 | sí |
| dw.dim_fecha: una fila por día (filas = días entre la primera y la última de las 5 fechas del pedido) | 800 | 800 | sí |
| dw.dim_fecha: rango = primera y última fecha del pedido en stg | 2016-09-04 .. 2018-11-12 | 2016-09-04 .. 2018-11-12 | sí |
| dw.dim_fecha: sin días repetidos ni huecos de días | 800 | 800 | sí |
| dw.dim_fecha: sin huecos de meses (meses distintos = meses entre el primero y el último) | 27 | 27 | sí |
| dw.dim_fecha: todo mes (salvo el último) tiene un mes siguiente consecutivo (meses sin siguiente) | 0 | 0 | sí |
| dw.dim_fecha: todas las fechas tienen sus 7 columnas de período completas (fechas con algún NULL) | 0 | 0 | sí |
| dw.dim_fecha: los períodos son coherentes con la fecha (periodo, trimestre y semestre; fechas incoherentes) | 0 | 0 | sí |
| dw.dim_fecha: cada período de texto tiene un único orden (mes, trimestre, semestre) | iguales | 27=27, 10=10, 5=5 | sí |
| dw.dim_fecha: ordenar por periodo_orden da el mismo orden que el texto 'AAAA-MM' | 1 | 1 | sí |
| dw.dim_fecha: 2018-01-03 es miércoles (día 3 de la semana; independiente del idioma del servidor) | miércoles / 3 | miércoles / 3 | sí |
| dw.dim_fecha: 2018-01-01 es lunes y 2018-09 es septiembre | lunes / septiembre | lunes / septiembre | sí |
| dw.dim_cliente: clientes únicos (id_cliente_unico distintos) = 96.096 | 96,096 | 96,096 | sí |
| dw.dim_cliente: id_cliente_unico distintos = stg.clientes | 96,096 | 96,096 | sí |
| dw.fact_pedido_item.fecha_limite_envio = stg (mín y máx; es columna común, sin clave a dim_fecha) | 2016-09-19 00:15:34 .. 2020-04-09 22:35:08 | 2016-09-19 00:15:34 .. 2020-04-09 22:35:08 | sí |
| suma de precio: dw.fact_pedido_item = stg.items_pedido | 13,591,643.7 | 13,591,643.7 | sí |
| suma de flete: dw.fact_pedido_item = stg.items_pedido | 2,251,909.54 | 2,251,909.54 | sí |
| suma de monto_pago: dw.fact_pago = stg.pagos | 16,008,872.12 | 16,008,872.12 | sí |
| dim_cliente.es_coordenada_valida = 1: clientes con coordenada dentro de la caja de Brasil (stg) | 99,155 | 99,155 | sí |
| (informativo) clientes sin coordenada: 278; con coordenada fuera de la caja: 8; vendedores sin coordenada: 7 | - | - | sí |
| claves foráneas huérfanas (12 FK revisadas, consulta propia sin depender de la restricción) | 0 | 0 | sí |
| claves foráneas confiables (is_not_trusted = 0) | 0 | 0 | sí |
| vista: mismas columnas y mismo orden que el CSV | ['id_pedido', 'fecha_compra', 'fecha_entrega', 'id_vendedor', 'puntaje', 'dias_entrega', 'dias_atraso', 'llego_tarde', 'dias_estimados', 'cantidad_items', 'cantidad_vendedores', 'precio_total', 'flete_total', 'flete_sobre_precio', 'peso_total', 'categoria_principal', 'estado_cliente', 'estado_vendedor', 'mismo_estado', 'medio_pago_principal', 'cuotas', 'resena_negativa'] | ['id_pedido', 'fecha_compra', 'fecha_entrega', 'id_vendedor', 'puntaje', 'dias_entrega', 'dias_atraso', 'llego_tarde', 'dias_estimados', 'cantidad_items', 'cantidad_vendedores', 'precio_total', 'flete_total', 'flete_sobre_precio', 'peso_total', 'categoria_principal', 'estado_cliente', 'estado_vendedor', 'mismo_estado', 'medio_pago_principal', 'cuotas', 'resena_negativa'] | sí |
| vista: cantidad de filas = pedidos_modelado.csv (95.824) | 95,824 | 95,824 | sí |
| vista: id_pedido únicos y mismo conjunto que el CSV (sobran / faltan) | 0 / 0 | 0 / 0 | sí |
| % de resena_negativa (CSV vs vista, 2 decimales) | 12.81 % | 12.81 % | sí |
| suma de «puntaje» (CSV vs vista) | 398,225 | 398,225 | sí |
| suma de «dias_entrega» (CSV vs vista) | 1,199,406.496192 | 1,199,406.496192 | sí |
| suma de «dias_atraso» (CSV vs vista) | -1,074,686.576238 | -1,074,686.576238 | sí |
| suma de «llego_tarde» (CSV vs vista) | 7,661 | 7,661 | sí |
| suma de «dias_estimados» (CSV vs vista) | 2,274,093.072431 | 2,274,093.072431 | sí |
| suma de «cantidad_items» (CSV vs vista) | 109,362 | 109,362 | sí |
| suma de «cantidad_vendedores» (CSV vs vista) | 97,151 | 97,151 | sí |
| suma de «precio_total» (CSV vs vista) | 13,108,744.450011 | 13,108,744.450011 | sí |
| suma de «flete_total» (CSV vs vista) | 2,181,229.94 | 2,181,229.94 | sí |
| suma de «flete_sobre_precio» (CSV vs vista) | 29,556.673304 | 29,556.673304 | sí |
| suma de «peso_total» (CSV vs vista) | 228,293,185 | 228,293,185 | sí |
| suma de «mismo_estado» (CSV vs vista) | 34,477 | 34,477 | sí |
| suma de «cuotas» (CSV vs vista) | 279,901 | 279,901 | sí |
| suma de «resena_negativa» (CSV vs vista) | 12,272 | 12,272 | sí |
| vista: valores iguales fila por fila en las 22 columnas (por id_pedido; decimales con tolerancia 1e-9) | 0 | 0 | sí |
| dw.vw_tiempo: suma de pedidos por mes = stg.pedidos (mismo criterio: mes de fecha_compra) | 99,441 | 99,441 | sí |
| dw.vw_tiempo: pedidos de CADA mes = stg.pedidos (meses distintos / meses con diferencia) | 25 / 0 | 25 / 0 | sí |
| dw.vw_tiempo: evaluados = 95.824 y negativas / evaluados = 12,81 % | 95,824 / 12.81 % | 95,824 / 12.81 % | sí |
| dw.vw_pedidos: una fila por pedido (filas / id_pedido distintos) | 99,441 / 99,441 | 99,441 / 99,441 | sí |
| dw.vw_pedidos: entregados = pedidos 'delivered' con fecha de entrega en stg | 96,470 | 96,470 | sí |
| dw.vw_pedidos: pedidos con puntaje = pedidos con reseña en stg | 98,673 | 98,673 | sí |
| dw.vw_vendedores: una fila por vendedor (= dim_vendedor) | 3,095 | 3,095 | sí |
| dw.vw_vendedores: el intervalo de Wilson contiene a la tasa y está dentro de [0,1] (vendedores que no cumplen) | 0 | 0 | sí |
| dw.vw_geografia: una fila por estado de cliente (filas = estados distintos en stg.clientes) | 27 | 27 | sí |
| dw.vw_geografia: suma de clientes y de pedidos = stg | 99,441 / 99,441 | 99,441 / 99,441 | sí |
| dw.vw_pedidos: tiene las columnas para el tablero | todas | todas | sí |
| dw.vw_pedidos: filas (se conservan los 99.441 pedidos) | 99,441 | 99,441 | sí |
| dw.vw_pedidos: clientes únicos (id_cliente_unico distintos) | 96,096 | 96,096 | sí |
| dw.vw_pedidos: cliente_key y fecha_compra_key sin NULL ni huérfanos (filas con problema) | 0 | 0 | sí |
| dw.vw_pedidos: categoria_principal = la de ml.vw_pedidos_entrenamiento (pedidos comparados / con diferencia) | 95,824 / 0 | 95,824 / 0 | sí |
| dw.vw_pedidos: id_vendedor = el de ml.vw_pedidos_entrenamiento (pedidos comparados / con diferencia) | 95,824 / 0 | 95,824 / 0 | sí |
| dw.vw_pedidos: id_vendedor NULL solo en pedidos sin ítems | 775 | 775 | sí |
| dw.vw_pedidos: categoria_es y categoria_principal sin NULL | 0 | 0 | sí |
| dw.vw_pedidos: pedidos 'sin items' = pedidos sin ítems | 775 | 775 | sí |
| dw.vw_pedidos: tramos de atraso = pedidos entregados | 96,470 | 96,470 | sí |
| dw.map_categoria_es: 73 categorías (71 con traducción oficial + 2 sin ella) | 73 | 73 | sí |
| dw.map_categoria_es: cubre las 71 de stg.traduccion_categorias con la misma traducción al inglés (faltan / distintas) | 0 / 0 | 0 / 0 | sí |
| dw.map_categoria_es: toda categoría de dw.dim_producto está mapeada (sin mapear) | 0 | 0 | sí |
| dw.map_categoria_es: nombres en español únicos y sin vacíos | 73 | 73 | sí |
| ml.tbl_predicciones: 19.165 filas | 19,165 | 19,165 | sí |
| ml.tbl_predicciones: id_pedido únicos | 19,165 | 19,165 | sí |
| ml.tbl_predicciones: probabilidades entre 0 y 1 (mín / máx) | dentro de [0, 1] | 0.0550 / 0.8576 | sí |
| ml.tbl_predicciones: mismos id_pedido y probabilidades que predicciones.csv (ids distintos / dif. máxima) | 0 / 0 | 0 / 0.0e+00 | sí |
| ml.tbl_predicciones: todos los id_pedido existen en dw.fact_pedido (huérfanos) | 0 | 0 | sí |
| ml.tbl_resultados_test = filas de resultados_test.csv | 7 | 7 | sí |
| ml.tbl_pr_auc_mensual = filas de pr_auc_por_mes.csv | 4 | 4 | sí |
| ml.tbl_comparacion_cv = filas de comparacion_cv.csv | 5 | 5 | sí |
| ml.tbl_resultados_test: PR-AUC del Random Forest con todas las variables = CSV | 0.307926 | 0.307926 | sí |
| dw.tbl_geografia: filas = dw.vw_geografia | 27 | 27 | sí |
| dw.tbl_geografia: valores iguales fila por fila en las 12 columnas (filas de la vista que faltan en la tabla / filas de la tabla que no están en la vista) | 0 / 0 | 0 / 0 | sí |
| dw.tbl_geografia: suma de control de cada columna numérica (11) y cantidad de NULL de cada columna (12) = vista (diferencias) | ninguna | ninguna | sí |
| dw.tbl_geografia: clave «estado» sin NULL y sin repetidos (NULL / repetidos) | 0 / 0 | 0 / 0 | sí |
| dw.tbl_vendedores: filas = dw.vw_vendedores | 3,095 | 3,095 | sí |
| dw.tbl_vendedores: valores iguales fila por fila en las 15 columnas (filas de la vista que faltan en la tabla / filas de la tabla que no están en la vista) | 0 / 0 | 0 / 0 | sí |
| dw.tbl_vendedores: suma de control de cada columna numérica (12) y cantidad de NULL de cada columna (15) = vista (diferencias) | ninguna | ninguna | sí |
| dw.tbl_vendedores: clave «id_vendedor» sin NULL y sin repetidos (NULL / repetidos) | 0 / 0 | 0 / 0 | sí |
| dw.tbl_pedidos: filas = dw.vw_pedidos | 99,441 | 99,441 | sí |
| dw.tbl_pedidos: valores iguales fila por fila en las 30 columnas (filas de la vista que faltan en la tabla / filas de la tabla que no están en la vista) | 0 / 0 | 0 / 0 | sí |
| dw.tbl_pedidos: suma de control de cada columna numérica (14) y cantidad de NULL de cada columna (30) = vista (diferencias) | ninguna | ninguna | sí |
| dw.tbl_pedidos: clave «id_pedido» sin NULL y sin repetidos (NULL / repetidos) | 0 / 0 | 0 / 0 | sí |
| ml.tbl_predicciones: conteo esperado (19,165) en SQL | 19,165 | 19,165 | sí |
| ml.tbl_resultados_test: conteo esperado (7) en SQL | 7 | 7 | sí |
| ml.tbl_pr_auc_mensual: conteo esperado (4) en SQL | 4 | 4 | sí |
| ml.tbl_comparacion_cv: conteo esperado (5) en SQL | 5 | 5 | sí |
| ml.tbl_importancia_variables: conteo esperado (16) en SQL | 16 | 16 | sí |
| ml.tbl_importancia_variables = filas de importancia_variables.csv | 16 | 16 | sí |
