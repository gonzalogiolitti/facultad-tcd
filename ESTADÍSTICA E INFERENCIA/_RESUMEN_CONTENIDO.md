# ESTADÍSTICA E INFERENCIA - Resumen de contenido
_Última actualización: 26/09/26_

## General
**Archivo:** General/Presentación de la asignatura y modalidad de trabajo.txt
**Fecha:** 18/08/24
**Temas:** Presentación de la materia, modalidad asincrónica, herramientas (R), sistema de evaluaciones, trabajo final, condiciones de acreditación
**Resumen:** La docente presenta la materia Estadística e Inferencia, segunda estadística de la carrera, explicando que se cursa de forma asincrónica mediante videos cortos y encuentros de consulta opcionales por Meet. Se detalla el uso de R como lenguaje principal para el análisis estadístico. El sistema de evaluaciones consiste en entregas por unidad (6 en total) orientadas al trabajo final, con fecha límite el 27 de octubre, y entrega del trabajo final el 3 de noviembre. Las condiciones de acreditación son: promovido (trabajo final aprobado), regular (todas las entregas realizadas), libre (menos de la mitad de entregas) y ausente (sin entregas), con distintas exigencias en mesa de examen según cada condición.

## Grabaciones clases de consulta
**Archivo:** Grabaciones clases de consulta/Clase Consulta (14-4-26).txt
**Fecha:** 14/04/26
**Temas:** Evaluación parcial, selección de dataset, estimación de parámetros, descripción de variables, limpieza de datos, análisis exploratorio de dataset de calidad de agua de Nueva York
**Resumen:** La clase es una consulta donde la docente explica los requisitos de la tercera evaluación parcial: selección de dos variables de un dataset, descripción introductoria, estimación de parámetros con indicación del método y sus limitaciones. Un alumno comparte pantalla y presenta su trabajo con un dataset de calidad de agua de Nueva York (más de 160.000 filas), donde describe las dificultades encontradas: valores "menor que uno", datos NA en gran cantidad, exceso de sitios de muestreo y columnas con información constante. La docente orienta al alumno a no sobrelimpiar los datos innecesariamente, tratar ciertas variables como cualitativas y centrarse en describir el dataset tal como está. Al final, otro alumno consulta si puede utilizar datos de su ámbito laboral para las entregas, a lo que la docente responde afirmativamente.

**Archivo:** Grabaciones clases de consulta/Consulta 31-03-2026.txt
**Fecha:** 31/03/26
**Temas:** Consulta de avance, evaluaciones M1 y M2, selección de dataset, comandos R (dim, summary, str), manejo de fechas en R, visualización con ggplot2, R Markdown, funciones apply (lapply, sapply)
**Resumen:** Clase de consulta donde la docente explica las consignas de las evaluaciones de la Unidad 1 (selección y carga de dataset en R con dim y summary) y Unidad 2 (clasificación de variables, forma de distribución, medidas de posición y dispersión con interpretación contextual). Se revisa el trabajo práctico de un estudiante que analiza datos de cursos universitarios por año y modalidad, abordando dificultades concretas con manejo de fechas, filtrado de datos con tidyverse, superposición de puntos en gráficos y el flujo de trabajo entre script y R Markdown. Se mencionan funciones avanzadas como lapply/sapply y el paquete Janitor para limpieza de nombres de columnas.

**Archivo:** Grabaciones clases de consulta/VIdeo introducción.txt
**Fecha:** No identificada
**Temas:** Presentación de la materia, modalidad de cursada autoguiada, aula virtual, herramienta R/RStudio, sistema de evaluaciones y trabajo final
**Resumen:** La docente Aile Nabila presenta la materia Estadística e Inferencia, explicando que la propuesta pedagógica es autoguiada: los estudiantes avanzan a su ritmo mediante videos y materiales subidos al aula virtual, mientras que los encuentros sincrónicos funcionan como clases de consulta. Se recorre el aula virtual mostrando la organización por unidades, el cronograma de clases y el sistema de evaluaciones. Se explica que el trabajo final consiste en un informe de análisis estadístico sobre un set de datos de interés del estudiante, desarrollado en R, con fecha límite en junio. También se detalla el régimen de condiciones de cursada (regular, libre y ausente) y se responden dudas iniciales sobre el uso de R.

**Archivo:** Grabaciones clases de consulta/Videograbación 2026-04-28 194838.txt
**Fecha:** 28/04/26
**Temas:** Regularización y entregas, trabajo práctico 3 (distribuciones y estimación de parámetros), análisis de datos de calidad de agua, visualización geoespacial en R (leaflet, mapview)
**Resumen:** Clase de consulta con pocos alumnos donde se abordan dudas sobre los requisitos de regularización y el estado de entregas de trabajos prácticos. Se discute el trabajo práctico 3, centrado en identificar distribuciones estadísticas y estimar parámetros sobre datasets propios. Un alumno consulta sobre su dataset de calidad de agua de Nueva York, incluyendo la interpretación de variables como turbidez y conductividad, criterios de potabilidad y limpieza de datos. La docente comparte valores de referencia del agua de Rosario y sugiere paquetes de R (leaflet, mapview) para análisis y visualización geoespacial de los puntos de muestreo.

**Archivo:** Grabaciones clases de consulta/Videograbación 2026-05-05 200118.txt
**Fecha:** 05/05/26
**Temas:** Análisis exploratorio de datos, diagramas de caja, gráficos de dispersión, distribuciones de frecuencia/densidad, mapas interactivos con Leaflet, distancia a planta, regresión lineal y logística
**Resumen:** La clase es una consulta individual en la que el estudiante muestra avances de su trabajo práctico sobre calidad de agua (turbidez, cloro residual, flúor). Se revisan gráficos de dispersión entre variables (cloro y turbidez vs. distancia a la planta de tratamiento) y se discute su interpretación estadística. Se analiza un mapa interactivo generado con Leaflet para visualizar los puntos de muestreo geolocalizados, y se identifican problemas en el gráfico de distribución de turbidez (escala del eje X, interpretación de densidad). Finalmente, el docente orienta al estudiante sobre los próximos pasos: explorar modelos de regresión lineal y logística para predecir el sitio de origen a partir de los parámetros medidos, y se menciona brevemente otro proyecto de práctica preprofesional sobre arbolado urbano en Esperanza.

**Archivo:** Grabaciones clases de consulta/Encuentro 7_4_2026.txt
**Fecha:** 07/04/26
**Temas:** Clase de consulta, instalación de paquetes en R (Linux), análisis exploratorio de datos, dataset de cursos estatales, gráficos en R, interpretación de variables cualitativas y cuantitativas
**Resumen:** La clase fue una sesión de consultas donde los estudiantes presentaron dudas y avances en sus trabajos prácticos. Se abordó un problema de instalación de paquetes en R bajo Linux (en particular el paquete `tidyverse`), con sugerencias de instalación desde consola y reinstalación del entorno. Un estudiante presentó su análisis exploratorio sobre un dataset de cursos ofrecidos a empleados estatales (2022-2024), mostrando estadísticas descriptivas y gráficos de barras y boxplots. El docente señaló confusiones conceptuales respecto a la naturaleza de las variables (cualitativas vs. cuantitativas) y la interpretación de medidas estadísticas, recomendando definir primero el objetivo del análisis antes de aplicar herramientas.

**Archivo:** Grabaciones clases de consulta/Encuentro 21_04_26.txt
**Fecha:** 21/04/26 (26/04/21)
**Temas:** Consultas sobre trabajos prácticos, reutilización de dataset, descripción de variables, distribuciones, código en R, manejo de fechas y datos atípicos
**Resumen:** La clase es una sesión de consultas donde la docente responde dudas sobre los trabajos prácticos de la materia. Se aclara que el dataset usado en evaluaciones anteriores puede reutilizarse para el trabajo final, y se explica la estructura general de dicho trabajo (análisis descriptivo, contrastes y predicción). Un alumno comparte su avance en R con un dataset de calidad de agua, mostrando código para limpieza de datos, detección de valores atípicos y gráficos, y recibe orientación sobre cómo interpretar medidas de posición y dispersión. También se discute el manejo de variables de fecha/hora en R (paquete lubridate) y la selección de sitios de muestreo para análisis futuros. Finalmente, se menciona el trabajo 3, centrado en identificar distribuciones de probabilidad adecuadas para las variables elegidas y sus limitaciones.

**Archivo:** Grabaciones clases de consulta/Grabación encuentro 19_5_26.txt
**Fecha:** 19/05/26 (19 de mayo de 2026, o posiblemente 2025)
**Temas:** Consulta trabajo final, limpieza y curación de datos, filtrado de datasets, análisis exploratorio, consignas de entrega, paquete Janitor en R
**Resumen:** La clase fue una sesión de consulta donde un estudiante compartió su pantalla para mostrar avances en el análisis de datos de calidad de agua (turbidez, cloro residual, flúor), discutiendo problemas de datos faltantes, sitios con pocas mediciones y criterios de filtrado mínimo (≥30 muestras por año). El docente aclaró las consignas del trabajo final: informe en PDF/HTML/RMD con al menos tres medidas estadísticas, dos gráficos interpretados y dos situaciones problemáticas resueltas con métodos del curso, más entrega del script en R, con fecha límite el 9 de junio. También se mencionó la importancia de no actualizar paquetes durante el desarrollo de un trabajo y se recomendó el paquete `janitor` del tidyverse para normalización de texto en bases de datos.

## Unidad 1
### Clase 1
**Archivo:** Unidad 1/Clase 1/Video 8_ Ingresar datos a R con el comand read.delim.txt
**Fecha:** No identificada
**Temas:** Importación de datos en R, función read.delim, lectura desde portapapeles, lectura desde archivo, Import Dataset, paquete readxl
**Resumen:** La clase explica distintas formas de ingresar tablas de datos en R. Se muestra cómo leer datos desde el portapapeles usando `read.delim("clipboard")`, cómo especificar la ruta de acceso a un archivo directamente en el código, y cómo usar la interfaz gráfica "Import Dataset" del entorno de RStudio. También se introduce la importación de archivos Excel mediante el paquete `readxl`, mostrando tanto su instalación por línea de comandos como de forma automática al usarlo por primera vez.

**Archivo:** Unidad 1/Clase 1/Video 1_ Descarga e instalación de R y RStudio.txt
**Fecha:** No identificada
**Temas:** Instalación de R, Instalación de RStudio (POSIT), Descarga de versiones anteriores, Configuración por defecto
**Resumen:** El video guía paso a paso la descarga e instalación de R y RStudio (actualmente llamado POSIT) en Windows. Se recomienda utilizar versiones de R con aproximadamente un año de antigüedad (en el ejemplo, la 4.2.1) para evitar incompatibilidades con librerías. La instalación de ambos programas se realiza con las opciones de configuración por defecto, eligiendo únicamente el idioma y la carpeta de destino si se desea. El video cierra anticipando que en la siguiente clase se verá cómo iniciar el trabajo en R.

**Archivo:** Unidad 1/Clase 1/Video 2_ Conociendo el entorno de trabajo.txt
**Fecha:** No identificada
**Temas:** Entorno de trabajo en R, consola y script, directorio de trabajo, paquetes y ayuda en R
**Resumen:** El video presenta el entorno de trabajo de R, identificando sus secciones principales: la consola, el área de entorno/memoria, y el panel de archivos/gráficos/paquetes/ayuda. Se explica la importancia de trabajar con un script para registrar y guardar el historial de comandos. Se detalla cómo consultar y configurar el directorio de trabajo mediante `getwd()` y `setwd()`, tanto escribiendo la ruta manualmente como seleccionándola desde el explorador de archivos. Se menciona que el directorio de trabajo debe setearse en cada nueva sesión de R.

**Archivo:** Unidad 1/Clase 1/Video 3_ Conociendo los tipos de objetos en R (Vectores).txt
**Fecha:** No identificada
**Temas:** Introducción a R, objetos en R, vectores numéricos, creación y asignación de objetos, comandos básicos (c(), seq(), runif())
**Resumen:** La clase introduce el concepto de objetos en R, destacando que todo lo que se genera se almacena en distintos tipos de objetos (vectores, factores, listas, data frames). Se enfoca en la creación de vectores numéricos mediante diferentes métodos: usando la función `c()`, la notación de secuencia con `:`, la función `seq()` con parámetros de inicio, fin y salto, y la función `runif()`. También se explica el uso del numeral para comentarios en el script, la sensibilidad de R a mayúsculas y minúsculas, y las dos formas de asignación de objetos: con `=` y con la flecha `<-`.

**Archivo:** Unidad 1/Clase 1/Video 4_ Conociendo los tipos de objetos en R (Vectores y factores).txt
**Fecha:** No identificada
**Temas:** Vectores de caracteres, vectores lógicos, función rep(), factores, categorización de datos en R
**Resumen:** La clase muestra cómo crear distintos tipos de vectores en R: vectores de caracteres (usando comillas y la función `rep()` para generar repeticiones), y vectores lógicos con valores TRUE/FALSE. Se explica la diferencia entre vectores numéricos, de caracteres y lógicos, observando cómo R identifica cada tipo (CHR, lógico, etc.). Luego se introduce el concepto de factores, utilizados para representar variables categóricas, mostrando cómo convertir un vector de caracteres en un factor con etiquetas personalizadas (por ejemplo, "A" y "B" convertidos en "amarillo" y "blanco"), lo que permite recategorizar datos.

**Archivo:** Unidad 1/Clase 1/Video 5_ Conociendo los tipos de objetos en R (Matrices y listas).txt
**Fecha:** No identificada
**Temas:** Matrices en R, función matrix, parámetro byrow, listas en R, función list, exploración de objetos en RStudio
**Resumen:** La clase explica cómo crear y trabajar con matrices en R usando la función `matrix`, indicando número de filas, columnas y el orden de llenado (por fila con `byrow=TRUE` o por columna por defecto). Se comparan ambos resultados para destacar la importancia de controlar el ordenamiento de los datos. Luego se introduce el objeto lista (`list`), describiendo su estructura como colección ordenada que puede contener elementos de distinto tipo (vectores de caracteres y valores numéricos). Se muestra también cómo explorar estos objetos desde el entorno de trabajo de RStudio y cómo acceder a sus categorías desde la consola.

**Archivo:** Unidad 1/Clase 1/Video 6_ Conociendo los tipos de objetos en R (Data frames).txt
**Fecha:** No identificada
**Temas:** Data frames en R, creación y manipulación de data frames, nombres de columnas y filas, errores comunes en R
**Resumen:** La clase introduce los data frames en R como estructuras similares a matrices pero capaces de almacenar datos de distintos tipos (numéricos, lógicos, caracteres). Se muestra cómo crear un data frame combinando objetos previamente generados (listas, factores, vectores lógicos) usando la función `data.frame()`. Luego se explica cómo modificar los nombres de columnas con `colnames()` y los nombres de filas con `rownames()`. También se abordan errores frecuentes, como intentar asignar nombres de filas con un vector de longitud incorrecta o con valores repetidos.

**Archivo:** Unidad 1/Clase 1/Videos 7_ modificando objetos.txt
**Fecha:** No identificada
**Temas:** Modificación de objetos en R, nombres de filas y columnas, indexación en matrices y data frames, asignación de valores por coordenadas
**Resumen:** La clase muestra cómo modificar objetos en R, específicamente cómo asignar y cambiar los nombres de filas y columnas en un data frame usando vectores auxiliares. Se explica la diferencia entre asignar un valor a un objeto (usando el operador de asignación) y simplemente inspeccionarlo en la consola. Se introduce el concepto de indexación en matrices y data frames, indicando que en R se especifica primero la fila y luego la columna entre corchetes. Finalmente, se demuestra cómo modificar valores en posiciones específicas o en toda una fila o columna dejando uno de los índices vacío.

**Archivo:** Unidad 1/Clase 1/Videos 8_ modificando objetos (uso de operadores).txt
**Fecha:** No identificada
**Temas:** Operadores aritméticos en R, modificación de columnas en data frames, indexación, funciones de exploración de objetos (head, tail, summary, class, length, dim)
**Resumen:** La clase cierra el primer módulo presentando los operadores en R (aritméticos, comparativos y lógicos) y su aplicación sobre objetos y tablas. Se muestra cómo agregar o modificar columnas en un data frame usando el operador `$` y la indexación por posición. Luego se introducen funciones básicas de exploración de objetos: `head()` y `tail()` para visualizar filas iniciales y finales, `summary()` para obtener un resumen estadístico, `class()` para identificar el tipo de objeto, `length()` para conocer la cantidad de elementos, y `dim()` para ver las dimensiones de una tabla.

**Archivo:** Unidad 1/Clase 1/Video 9_ Leyendo y guardando archivos (read_delim).txt
**Fecha:** No identificada
**Temas:** Importación de tablas en R, función read_delim, portapapeles (clipboard), rutas de archivo, Import Dataset, paquete readxl, lectura de archivos Excel y de texto
**Resumen:** La clase muestra distintas formas de cargar tablas externas en R. Se explica el uso de `read_delim` para leer datos desde el portapapeles (clipboard) o especificando una ruta de archivo manualmente. También se presenta la opción gráfica "Import Dataset" del entorno de RStudio, que permite previsualizar y configurar la importación. Finalmente, se introduce la lectura de archivos Excel mediante el paquete `readxl`, indicando cómo instalarlo y utilizarlo para importar hojas de cálculo con opciones de previsualización y ajuste de tipos de datos.

**Archivo:** Unidad 1/Clase 1/Video 11_ Leyendo y guardando archivos (write_table).txt
**Fecha:** No identificada
**Temas:** Lectura de archivos en R, formatos de importación (txt, xlsx, SPSS), guardado de tablas con write.table, parámetros row.names y col.names
**Resumen:** La clase muestra distintas formas de cargar tablas en R: desde el portapapeles, archivos txt, archivos xlsx y desde otros software como SPSS. Luego se introduce el comando `write.table` para guardar tablas trabajadas, especificando nombre de archivo y directorio destino. Se exploran parámetros adicionales como `row.names` y `col.names`, configurándolos en TRUE o FALSE para controlar si se guardan los nombres de filas y columnas en el archivo de salida.

### Clase 2
**Archivo:** Unidad 1/Clase 2/Video 1 - Modulo 2_  Carga de tabla.txt
**Fecha:** No identificada
**Temas:** Paquete Tidyverse, importación de datos en R, carga de tabla CSV, exploración inicial de datos, calidad del agua
**Resumen:** Se introduce el paquete Tidyverse como ecosistema de paquetes para manipulación, visualización e importación de datos en R (ggplot2, tidyr, readr, dplyr, entre otros). Se explica cómo configurar el directorio de trabajo y se carga una tabla en formato CSV obtenida de una fuente pública (Kaggle), que contiene 500 observaciones con variables de calidad de agua (pH, temperatura, turbidez, oxígeno disuelto y conductividad). Finalmente, se aplica la función `summary()` para obtener un resumen estadístico inicial de las columnas numéricas de la tabla.

**Archivo:** Unidad 1/Clase 2/Video 9 - Modulo 2_ Comandos unite y separate (celdas).txt
**Fecha:** No identificada
**Temas:** Comando unite, Comando separate, manipulación de columnas en R, parámetro remove, separadores en columnas
**Resumen:** La clase muestra el uso de los comandos `unite` y `separate` en R para manipular columnas de un dataframe. Se explica cómo `unite` combina dos o más columnas en una nueva usando un separador definido (espacio, guión, etc.), y cómo el parámetro `remove` controla si se conservan o eliminan las columnas originales. Se advierte sobre el cuidado al usar `remove = TRUE` para no perder datos. Finalmente, se introduce `separate` como operación inversa a `unite`, permitiendo dividir una columna combinada en sus columnas originales a partir del separador utilizado.

**Archivo:** Unidad 1/Clase 2/Video 2 - Recategorizar variables con ifelse.txt
**Fecha:** No identificada
**Temas:** Inspección de tablas, renombrado de columnas, recodificación de variables, función ifelse, operadores de comparación en R
**Resumen:** La clase muestra cómo inspeccionar una tabla en R usando comandos como `head` y `tail`, y cómo renombrar columnas con `colnames`. El foco principal es la recodificación de variables mediante la función `ifelse`, que permite crear una nueva columna categórica a partir de una variable numérica. Se trabaja con un dataset de calidad del agua, generando una columna "conductividad" que clasifica los valores como "alta" o "baja" según un umbral definido. Se repasan operadores de comparación y la sintaxis general de `ifelse`: condición, valor si verdadero, valor si falso.

**Archivo:** Unidad 1/Clase 2/Video 3 - Generación de df auxiliar e indentación.txt
**Fecha:** No identificada
**Temas:** Creación de data frame auxiliar en R, indentación en R vs Python, función seq(), función rep(), combinación de funciones anidadas
**Resumen:** La clase muestra cómo construir un data frame auxiliar llamado `infomuestras` en R, con columnas como ID, muestra y día, para combinar tablas y organizar datos de muestras. Se explica el uso de funciones como `seq()` y `rep()` para generar secuencias y repeticiones. Se aborda la importancia de la indentación en R como buena práctica de escritura de código, comparándola con Python donde la indentación es obligatoria. También se introduce el concepto de funciones anidadas, leyéndose desde los paréntesis internos hacia los externos. La clase finaliza anticipando cómo completar la columna de días con múltiples valores repetidos.

**Archivo:** Unidad 1/Clase 2/Video 4 -  Generación de df auxiliar y exploración.txt
**Fecha:** No identificada
**Temas:** Creación de dataframe auxiliar en R, estructura de columnas, uso de `rep()` y `c()`, manejo de paréntesis e indentación, exploración con `summary()`, indexación de filas
**Resumen:** La clase muestra cómo construir un dataframe auxiliar en R con columnas de id, muestra y día, utilizando la función `rep()` para repetir valores (lunes a viernes, 100 veces cada uno) y `c()` para concatenarlos. Se explica la importancia de la indentación y el cierre correcto de paréntesis para evitar errores. Luego se analiza la estructura del dataframe con `summary()`, discutiendo el tipo de dato adecuado para cada columna (numérico, carácter o factor). Finalmente, se ilustra cómo usar este dataframe auxiliar como tabla de conexión para localizar registros específicos en la tabla principal (`water_quality_test`) mediante indexación por fila.

**Archivo:** Unidad 1/Clase 2/Video 5 -Instalando tidyverse.txt
**Fecha:** No identificada
**Temas:** Función Merge en R, unión de tablas por criterio común, instalación de paquetes en R, tidyverse, uso de library()
**Resumen:** La clase muestra cómo unir dos tablas en R (Infomuestras y WBQT) usando la función `merge()` del código base de R, utilizando la columna ID como criterio de unión para asegurar la correcta correspondencia entre filas. Se explica la lógica del resultado (columnas totales = suma de columnas de ambas tablas menos la columna compartida). Luego se introduce el paquete tidyverse, detallando cómo instalarlo con `install.packages()` y cómo cargarlo con `library()` en cada sesión de trabajo. Se aclara la diferencia entre instalar un paquete (una sola vez) y llamar a la librería (cada vez que se abre R).

**Archivo:** Unidad 1/Clase 2/Video 6 - Unir tablas con los comandos bind_col y bind_row.txt
**Fecha:** No identificada
**Temas:** Tidyverse, bind_cols, bind_rows, unión de tablas por columnas y filas, subsets de datos
**Resumen:** La clase muestra cómo unir tablas usando funciones de Tidyverse, específicamente `bind_cols` para combinar columnas y `bind_rows` para combinar filas. Se compara `bind_cols` con el comando `merge`, destacando el manejo de columnas duplicadas (como el campo `id`). Para ilustrar `bind_rows`, se generan tablas auxiliares recortando subsets de un dataframe original (filas 1–200 y 201–500) y luego se unen para reconstituir la tabla completa. Al final se menciona que en próximas clases se abordarán los comandos de tipo join (left, anti, etc.).

**Archivo:** Unidad 1/Clase 2/Video 7 - Unión de tablas con comando join.txt
**Fecha:** No identificada
**Temas:** Unión de tablas, left join, right join, manipulación de columnas, merge de datos
**Resumen:** La clase muestra cómo unir tablas de datos en R utilizando funciones de join. Se parte de una tabla base (datos2) a la que se le eliminan ciertas columnas para luego combinarla con otras tablas mediante los comandos left_join y right_join. Se explica la lógica de cada tipo de unión: left join toma como referencia la tabla de la izquierda y agrega las columnas no repetidas de la tabla de la derecha, mientras que right join invierte ese criterio. El uso práctico se orienta a evitar pérdida de información cuando las tablas se actualizan por separado o se agregan nuevas variables medidas.

**Archivo:** Unidad 1/Clase 2/Video 8 - Comandos join (filas y columnas) y unite (celdas).txt
**Fecha:** No identificada
**Temas:** inner_join, anti_join, unite, manipulación de tablas, combinación de filas y columnas, unión de celdas en R
**Resumen:** La clase explica el uso de los comandos `inner_join` y `anti_join` en R para combinar tablas según coincidencias entre filas: `inner_join` retiene solo las filas comunes entre dos tablas, mientras que `anti_join` devuelve las filas que no coinciden. Se ilustra con ejemplos donde una tabla tiene 500 observaciones y otra 200, obteniendo 200 filas coincidentes y 300 no coincidentes respectivamente. Luego se introduce la función `unite`, orientada a trabajar a nivel de celdas, permitiendo unir valores de distintas columnas (como "muestra" y "día") en una nueva columna identificadora, con opciones como definir el separador y el parámetro `remove = FALSE`.

**Archivo:** Unidad 1/Clase 2/Video 10 - Reformatear tabla con pivot_wider.txt
**Fecha:** No identificada
**Temas:** Función `separate()`, función `pivot_wider()`, reformateo de tablas, manipulación de columnas en R
**Resumen:** La clase muestra el uso de la función `separate()` en R para dividir una columna en dos a partir de un separador (guión), aclarando que el argumento `remove` está activado por defecto. Luego se introduce la función `pivot_wider()`, que permite reformatear una tabla ampliándola horizontalmente: a partir de una columna con categorías (como "conductividad"), genera nuevas columnas para cada valor único (por ejemplo, "baja" y "alta"), rellenándolas con los valores de otra columna (como "día"). Se ilustra el concepto con una tabla de ejemplo y se explica la lógica de transformación de datos que implica este tipo de pivoteo.

**Archivo:** Unidad 1/Clase 2/Video 11 -  Recortar tabla con comando filter.txt
**Fecha:** No identificada
**Temas:** Pivot Longer, filter, select, subset, mutate, operadores de comparación y lógicos en R
**Resumen:** La clase continúa el trabajo con transformación de tablas en R, explicando el comando `pivot_longer` como recíproco de `pivot_wider`, mostrando cómo aumentar filas agrupando columnas. Luego se introduce el comando `filter` para recortar tablas según criterios específicos, como filtrar filas con pH mayor a 7. Se muestra cómo combinar múltiples filtros usando operadores lógicos (&&) y operadores de comparación, destacando la diferencia en la sintaxis según el tipo de dato (numérico vs. carácter). Se menciona también el uso de otros comandos de recorte como `select`, `subset` y `mutate` para manipular y reorganizar información en tablas.

**Archivo:** Unidad 1/Clase 2/Video 12 - Recortar tabla con comando select, subset y mutate.txt
**Fecha:** No identificada
**Temas:** Comando select, comando subset, operadores lógicos en filtrado, comando mutate, manipulación de tablas en R
**Resumen:** La clase muestra cómo recortar y manipular tablas de datos en R usando distintos comandos. Se explica `select` para elegir columnas específicas, `filter` para filtrar filas según condiciones, y `subset` como combinación de ambos, permitiendo seleccionar columnas y aplicar criterios simultáneamente. Se introduce el operador lógico "distinto de" (`!=`) como alternativa al operador de igualdad. Finalmente, se presenta el comando `mutate`, que permite crear nuevas columnas a partir de transformaciones de columnas existentes, como sumar un valor constante a una variable numérica.

## Unidad 2
**Archivo:** Unidad 2/Barón Lopez, J. Bioestadística Métodos y Aplicaciones (2004).md
**Fecha:** No identificada
**Temas:** Estadística descriptiva, tablas de frecuencia, representaciones gráficas, medidas de tendencia central y dispersión, variables bidimensionales, correlación y regresión, probabilidad, variables aleatorias, distribuciones de probabilidad, inferencia estadística, intervalos de confianza, contrastes de hipótesis, chi-cuadrado, ANOVA, tests no paramétricos
**Resumen:** Este archivo corresponde al libro completo "Bioestadística: Métodos y Aplicaciones" de Barón López (2004), utilizado como material de referencia para la materia. Cubre desde conceptos básicos de estadística descriptiva (tipos de variables, tablas de frecuencia, gráficos, medidas de centralización, dispersión y forma) hasta estadística inferencial avanzada, incluyendo cálculo de probabilidades, distribuciones teóricas discretas y continuas (Binomial, Poisson, Normal, t-Student, chi-cuadrado, F de Snedecor), estimación puntual y por intervalos de confianza, contrastes de hipótesis paramétricos para medias, varianzas y proporciones, análisis de la varianza (ANOVA) y alternativas no paramétricas. Cada capítulo incorpora ejemplos aplicados al ámbito de las ciencias de la salud y una sección de problemas para práctica.

### Clase 3
**Archivo:** Unidad 2/Clase 3/UNIDAD II - Clase 3.md
**Fecha:** No identificada
**Temas:** Definiciones básicas de estadística, población y muestra, tipos de variables, análisis exploratorio de datos, sumarización y visualización de datos, distribuciones teóricas (t de Student, Chi Cuadrado)
**Resumen:** La clase introduce los conceptos fundamentales de la estadística inferencial, diferenciando sus dos grandes ramas: descriptiva e inferencial. Se definen términos clave como población, muestra, unidad elemental, variable, parámetro y estadístico. Se clasifican los tipos de variables (cualitativas y cuantitativas, con sus subtipos) y se presenta el análisis exploratorio de datos mediante sumarización y visualización. El contenido de la unidad también contempla distribuciones teóricas como la t de Student y Chi Cuadrado.

**Archivo:** Unidad 2/Clase 3/Modulo 3 - Video 2_ Medidas de localización y dispersión.txt
**Fecha:** No identificada
**Temas:** Medidas de localización, percentiles, cuartiles, media aritmética, mediana, moda, medidas de dispersión, rango, varianza, desvío estándar
**Resumen:** La clase presenta las principales herramientas estadísticas para describir datos muestrales, organizadas en medidas de localización y de dispersión. Dentro de las medidas de localización se explican el mínimo, máximo, percentiles, cuartiles (Q1, Q2, Q3), la media aritmética (promedio), la mediana y la moda. Luego se abordan las medidas de dispersión o variabilidad: el rango, el rango intercuartil, la varianza muestral y el desvío estándar, destacando que este último resulta más interpretable al expresarse en las mismas unidades que la variable analizada.

**Archivo:** Unidad 2/Clase 3/Modulo 3 - Video 3_ Medidas de forma.txt
**Fecha:** No identificada
**Temas:** Coeficiente de variación, medidas de forma, asimetría, kurtosis, parámetros poblacionales vs. muestrales
**Resumen:** La clase aborda primero el coeficiente de variación como medida de dispersión relativa a la media, útil para comparar distintas muestras o instrumentos. Luego se introducen las medidas de forma: asimetría (distribución con cola hacia la derecha o izquierda) y kurtosis (concentración de datos en torno a la media: leptocúrtica, platicúrtica o mesocúrtica), explicando cómo el signo del coeficiente de kurtosis permite clasificarlas. Finalmente, se menciona la distinción entre estadísticos muestrales (media, varianza y desvío muestral) y parámetros poblacionales (µ, σ², σ), señalando que los primeros actúan como estimadores de los segundos, e introduce el concepto de proporción estimada a partir de la frecuencia relativa.

**Archivo:** Unidad 2/Clase 3/Modulo 3 - Video 4_ Medidas de posición.txt
**Fecha:** No identificada
**Temas:** Medidas de tendencia central en R, media, mediana, cuantiles, rango intercuartil, moda, creación de funciones en R
**Resumen:** La clase muestra cómo calcular medidas de posición y tendencia central utilizando R. Se trabaja con un dataset previamente cargado y se aplican funciones como `mean()` para la media, `median()` para la mediana, `quantile()` para los cuartiles (Q1, Q2 y Q3), e `IQR()` para el rango intercuartil. Dado que R base no incluye una función nativa para la moda, se enseña a crear una función personalizada utilizando `unique()` y tablas de frecuencias para identificar el valor más repetido.

**Archivo:** Unidad 2/Clase 3/Modulo 3 - Video 5_ Medidas de dispersión.txt
**Fecha:** No identificada
**Temas:** Moda, medidas de dispersión, varianza, desvío estándar, coeficiente de variación, funciones en R
**Resumen:** La clase aborda el cálculo de medidas de dispersión en R aplicadas a datos de pH. Se explica cómo construir una función personalizada para calcular la moda, destacando la posibilidad de modas múltiples y la necesidad de verificar los resultados con la función `table`. Luego se calculan valores mínimo, máximo y rango con `min`, `max` y `range`, y se trabaja con varianza muestral y desvío estándar usando `var`, `sd` y `sqrt`. Finalmente, se introduce la construcción de una función personalizada para el coeficiente de variación, dado que R no lo incluye de forma nativa.

**Archivo:** Unidad 2/Clase 3/Modulo 3 - Video 7 _ Medidas por varias columnas con las funciones apply.txt
**Fecha:** No identificada
**Temas:** Funciones apply en R, apply/lapply/sapply/tapply, estadísticas por columnas, test de normalidad (Shapiro-Wilk), hipótesis nula, coeficiente de asimetría y curtosis
**Resumen:** La clase retoma brevemente la interpretación del test de Shapiro-Wilk para evaluar si una muestra proviene de una población con distribución normal, explicando el concepto de p-valor y la decisión de rechazar la hipótesis nula. Luego se introduce el conjunto de funciones `apply` de R (`apply`, `lapply`, `sapply` y `tapply`) como herramienta para calcular estadísticas (como la media) sobre múltiples columnas de un data frame de forma simultánea. Se explican las diferencias en el formato de salida de cada variante: tabla, lista o vector. Finalmente, se presenta `tapply` como una función que permite calcular estadísticas condicionadas a un operador lógico, por ejemplo, calcular el promedio solo para registros que superen un umbral determinado.

**Archivo:** Unidad 2/Clase 3/Modulo 3 - Video 8_ Medidas en conjunto con las funciones summary y describe.txt
**Fecha:** No identificada
**Temas:** Función summary en R, función describe del paquete psych, medidas resumen, groupby con condiciones, cuartiles, coeficiente de asimetría y kurtosis
**Resumen:** La clase muestra cómo calcular medidas resumen en R utilizando las funciones `summary` y `describe`. Se explica cómo aplicar `summary` a un data frame completo para obtener mínimo, cuartiles, mediana y media, y cómo segmentar el cálculo de una medida (como la media del pH) según una condición lógica. Luego se presenta la función `describe` del paquete `psych`, que ofrece una tabla más completa incluyendo desvío estándar, mediana, media truncada, rango, coeficiente de asimetría y kurtosis. Se enfatiza la interpretación de resultados y la corrección de errores por argumentos mal especificados.

### Clase 4
**Archivo:** Unidad 2/Clase 4/Video 2 - Unidad 4_ Generando variables auxiliares.txt
**Fecha:** No identificada
**Temas:** Variables auxiliares en R, función ifelse anidado, recodificación de variables, creación de columnas categóricas, directorio de trabajo en R
**Resumen:** La clase muestra cómo generar columnas auxiliares en R a partir de una base de datos previamente utilizada, comenzando con la configuración del directorio de trabajo y el renombramiento de columnas. Se crean variables categóricas usando `ifelse`, como "conductividad alta/baja" y clasificación de pH en ácido, básico o neutro mediante `ifelse` anidados. También se genera una columna con valores de temperatura redondeados usando la función `round`, y un vector de colores para uso posterior en gráficos. Finalmente, se inspecciona la tabla resultante para verificar que las nuevas columnas fueron agregadas correctamente.

**Archivo:** Unidad 2/Clase 4/Video 3 - Unidad 4_ Gráfico de sectores con pie().txt
**Fecha:** No identificada
**Temas:** Gráfico de sectores en R, función pie(), función table(), colores en gráficos, cálculo de porcentajes, etiquetas y leyendas
**Resumen:** La clase explica cómo construir un gráfico de sectores (pie chart) en R usando la función `pie()` junto con `table()` para una variable cualitativa auxiliar. Se muestra cómo personalizar el gráfico modificando colores mediante el argumento `col`, cómo calcular y mostrar porcentajes usando `round()` y la suma de frecuencias, y cómo agregar etiquetas con el argumento `labels`. Finalmente, se introduce la necesidad de incorporar una leyenda con el comando `legend()` para identificar correctamente cada categoría, tema que se continuará en el siguiente video.

**Archivo:** Unidad 2/Clase 4/Video 4 - Unidad 4_ Grádico de barras con barplot().txt
**Fecha:** No identificada
**Temas:** Gráfico de barras en R, función barplot(), función legend(), argumentos estéticos, exportación de gráficos
**Resumen:** La clase muestra cómo agregar una leyenda a gráficos en R usando la función `legend()`, especificando posición, etiquetas y colores. Luego se trabaja con la función `barplot()` para crear gráficos de barras horizontales (convención para variables categóricas), ajustando argumentos como nombres de ejes, límites del eje x, colores y título. Se explica cómo modificar aspectos estéticos del gráfico de forma incremental. Finalmente, se indica cómo exportar los gráficos desde RStudio usando la opción "Export" para guardarlos en el directorio de trabajo y evitar perderlos al cerrar la sesión.

**Archivo:** Unidad 2/Clase 4/Video 5 - Unidad 4_ Diagrama de pareto con qcc+pareto.chart().txt
**Fecha:** No identificada
**Temas:** Diagrama de Pareto, librería qcc, función pareto.chart(), frecuencia acumulada, porcentaje acumulado, R
**Resumen:** La clase muestra cómo construir un diagrama de Pareto en R utilizando la librería `qcc` (quality control) y su función `pareto.chart()`. Se explica cómo configurar los argumentos del gráfico (etiquetas de ejes, título, doble eje vertical) y cómo exportar la imagen. Además, se destaca que la función genera automáticamente una tabla con frecuencia, frecuencia acumulada, porcentaje y porcentaje acumulado. Finalmente, se ilustra la interpretación del gráfico con un ejemplo de categorías de pH, señalando que más del 50% de las muestras presentaron pH básico y más del 95% tuvieron pH básico o neutro.

**Archivo:** Unidad 2/Clase 4/Video 6 - Unidad 4_ Diagrama de puntos con plot().txt
**Fecha:** No identificada
**Temas:** Gráfico de puntos, función plot(), variables cuantitativas, personalización de gráficos, factorización de variables, leyenda en R
**Resumen:** La clase presenta el uso de la función `plot()` en R para crear diagramas de puntos como herramienta exploratoria de variables cuantitativas, utilizando la variable pH como ejemplo. Se explica cómo personalizar el gráfico agregando etiquetas de ejes (`xlab`, `ylab`), título (`main`), tipo de punto (`pch`) y color. Además, se muestra cómo incorporar una segunda variable categórica (conductividad) mediante la factorización de niveles para asignar colores diferenciados a cada grupo. Finalmente, se menciona la posibilidad de agregar una leyenda con el comando `legend()` para identificar cada categoría en el gráfico.

**Archivo:** Unidad 2/Clase 4/Video 7 - Unidad 4_ Diagrama de tallo y hoja con función stem()  y, diagrama de bastones con función  barplot().txt
**Fecha:** No identificada
**Temas:** Diagrama de tallo y hoja, función stem(), diagrama de bastones, función barplot(), visualización de variables cuantitativas en R
**Resumen:** La clase presenta dos gráficos para analizar la distribución de variables cuantitativas en R. Se explica el diagrama de tallo y hoja mediante la función `stem()`, destacando cómo interpretar la posición del punto decimal y cómo cada hoja representa una observación, permitiendo identificar valores repetidos y la distribución general. Luego se aborda el diagrama de bastones usando `barplot()`, señalando que para variables cuantitativas no se utiliza el argumento `horizontal`. Se muestra cómo personalizar el gráfico agregando nombres a los ejes, límites, color y título, utilizando datos de pH como ejemplo práctico.

**Archivo:** Unidad 2/Clase 4/Video 8 - Unidad 4_ Histograma de frecuencias con hist().txt
**Fecha:** No identificada
**Temas:** Histograma de frecuencias, función hist() en R, variables cuantitativas, intervalos de clase, personalización de gráficos en R
**Resumen:** La clase explica cómo construir un histograma de frecuencias en R usando la función `hist()` para variables cuantitativas con muchos valores diferentes. Se distingue el histograma del diagrama de bastones, destacando que el histograma agrupa observaciones en intervalos en lugar de representar valores individuales. Se muestra cómo personalizar el gráfico modificando etiquetas de ejes, límites del eje Y, título y color, y se menciona la importancia de la sintaxis correcta en R para evitar errores.

**Archivo:** Unidad 2/Clase 4/Video 9 - Unidad 4_ Boxplot.txt
**Fecha:** No identificada
**Temas:** Boxplot en R, función boxplot(), argumentos estéticos, boxplot por variable categórica, interpretación de cuartiles y bigotes
**Resumen:** La clase explica cómo construir un boxplot en R utilizando la función `boxplot()`, describiendo la lectura del gráfico a partir de Q1, Q2 (mediana) y Q3, así como la extensión de los bigotes. Se muestran distintas configuraciones estéticas como orientación horizontal/vertical, límites de ejes, etiquetas y colores. También se introduce el uso del boxplot segmentado por una variable categórica (conductividad alta vs. baja), lo que permite comparar visualmente la distribución del pH entre grupos y extraer primeras interpretaciones sobre la relación entre variables.

**Archivo:** Unidad 2/Clase 4/Video 10 - Unidad 4_ ggplot 1.txt
**Fecha:** No identificada
**Temas:** Introducción a ggplot2, gráficos de puntos, aesthetics, capas en ggplot2, variables categóricas con color
**Resumen:** La clase introduce la librería ggplot2 (parte del ecosistema tidyverse) y su estructura de capas para construir gráficos en R. Se muestra cómo crear un gráfico de dispersión (geom_point) usando un dataset con variables de pH, temperatura y conductividad. Se explica el concepto de aesthetics (aes), incluyendo cómo asignar ejes x e y, y cómo agregar una tercera variable categórica mediante el argumento color dentro de aes. También se trabaja sobre un error frecuente relacionado con el cierre incorrecto del paréntesis de aesthetics, aprovechándolo como ejemplo didáctico.

**Archivo:** Unidad 2/Clase 4/Video 11 - Unidad 4_ ggplot 2.txt
**Fecha:** No identificada
**Temas:** ggplot2, facetas (facet_wrap), gráfico de líneas, box plot, visualización multivariada, personalización de ejes
**Resumen:** La clase muestra cómo construir visualizaciones en R usando ggplot2 con capas adicionales. Se explica el uso de `facet_wrap` para dividir gráficos en paneles según una variable categórica (categoría de pH), aplicado a la relación entre conductividad y demanda de oxígeno mediante gráfico de líneas. También se trabaja la construcción de un box plot para analizar la conductividad según la categoría de pH, incluyendo la personalización de etiquetas en los ejes con parámetros adicionales de ggplot2.

**Archivo:** Unidad 2/Clase 4/Video 12 - Unidad 4_ ggplot 3.txt
**Fecha:** No identificada
**Temas:** ggplot2, histograma de frecuencias, personalización estética, facet, tema minimal, gráfico de barras, geom_bar
**Resumen:** La clase muestra cómo construir un histograma en ggplot2 utilizando datos de pH, agregando capas para etiquetas de ejes, título y parámetros estéticos como color de relleno, separación de columnas y ajuste de bins. Se introduce la capa `facet` para separar el histograma según niveles de conductividad (alta y baja), y se aplica `theme_minimal` para mejorar la presentación visual eliminando el fondo. Finalmente, se introduce `geom_bar` para construir un gráfico de barras con una variable categórica, destacando el uso del eje y en lugar del eje x para ese tipo de variable.

**Archivo:** Unidad 2/Clase 4/Video 14 - Unidad 4_ Rchartas y cheatsheet para mejorar gráficos.txt
**Fecha:** No identificada
**Temas:** Recharts, ggplot2, cheat sheet, paletas de colores, recursos gráficos en R
**Resumen:** La clase presenta la página de Recharts como recurso para explorar y mejorar gráficos en R, mostrando cómo elegir tipos de gráficos y personalizar títulos, etiquetas, colores y leyendas. Se explica cómo consultar los códigos de colores disponibles y las paletas predefinidas, incluyendo opciones accesibles. También se presenta el cheat sheet de ggplot2 como referencia de las geometrías y posibilidades gráficas del paquete. Se recomienda a los estudiantes practicar guardando los códigos de gráficos que más utilicen para mantener un estilo unificado y evitar reescribir código repetidamente.

### Clase 5
**Archivo:** Unidad 2/Clase 5/Video material teórico.txt
**Fecha:** No identificada
**Temas:** Distribución de frecuencias, frecuencia absoluta y relativa, distribución de probabilidad, distribución de Bernoulli, distribución binomial, distribución de Poisson, distribución normal, distribución t de Student, distribución chi-cuadrado
**Resumen:** La clase introduce el concepto de distribución de una variable aleatoria, distinguiendo entre frecuencia absoluta y relativa. Se presentan las distribuciones teóricas para variables discretas (Bernoulli, Binomial y Poisson) y continuas (Normal, t de Student y chi-cuadrado), explicando sus parámetros y contextos de aplicación. Se enfatiza que las distribuciones con las que se trabajará principalmente en la materia son la Binomial, Poisson y Normal. Las distribuciones t de Student y chi-cuadrado se mencionan como herramientas que se utilizarán más adelante en la unidad de inferencia estadística.

**Archivo:** Unidad 2/Clase 5/Video simulación de muestras.txt
**Fecha:** No identificada
**Temas:** Simulación de muestras en R, distribución binomial, distribución de Poisson, distribución normal, funciones `rbinom`, `rpois`, `rnorm`
**Resumen:** La clase muestra cómo simular datos aleatorios en R usando funciones de distribuciones de probabilidad (`rbinom`, `rpois`, `rnorm`). Se trabaja con tres distribuciones: binomial (ejemplo de tornillos defectuosos con n=50 y p=0,08), Poisson (llamadas telefónicas con λ=15 por hora) y normal (concentración de vitamina D con μ=20 y σ=5). Para cada caso se explica cómo definir los parámetros propios de cada distribución y cómo interpretar los resultados generados. También se menciona el uso de semillas para reproducibilidad y la función `round` para redondear salidas.

**Archivo:** Unidad 2/Clase 5/UNIDAD II - Clase 5 (1).md
**Fecha:** 2024 (no se puede precisar más)
**Temas:** Distribución empírica, Distribuciones teóricas, Variables aleatorias discretas y continuas, Distribución Normal, Distribución t de Student, Distribución Chi Cuadrado
**Resumen:** La clase aborda el concepto de distribución empírica, explicando frecuencia absoluta y relativa, y los aspectos clave de la distribución de una variable cuantitativa (posición, dispersión y forma). Luego introduce las distribuciones teóricas de probabilidad, diferenciando entre variables aleatorias discretas (Bernoulli, Binomial, Poisson, entre otras) y continuas (Normal, Uniforme, Exponencial, entre otras). Se profundiza en la distribución Normal, destacando su relación con el teorema central del límite. Finalmente, se presentan la distribución t de Student —útil para muestras pequeñas con varianza poblacional desconocida— y la distribución Chi Cuadrado, ambas relevantes para inferencia estadística y pruebas de hipótesis.

## Unidad 3
### Clase 7
**Archivo:** Unidad 3/Clase 7/Video teorico-practico estimación de núcleo.txt
**Fecha:** No identificada
**Temas:** Estimación de densidad de probabilidad, método de núcleo (kernel), función density en R, ancho de banda (bandwidth), tipos de kernel (rectangular y gaussiano)
**Resumen:** La clase muestra cómo estimar funciones de densidad de probabilidad a partir de datos usando la función `density` de R, tomando como ejemplo una variable de colesterol con distribución uniforme (35 datos, entre 140 y 300). Se compara la estimación por defecto (kernel gaussiano) con un kernel rectangular, variando también el ancho de banda para observar el efecto sobre el suavizado de la curva. Se menciona la existencia de métodos automáticos para seleccionar el ancho de banda (como NRD0) y se muestra cómo extraer las estadísticas de posición de la estimación resultante.

**Archivo:** Unidad 3/Clase 7/Video teorico-practico arbol de desiciones.txt
**Fecha:** No identificada
**Temas:** Árboles de decisión, dataset de calidad del agua, librerías rpart y caret, partición entrenamiento/prueba, matriz de confusión, métricas de evaluación (precisión, kappa), overfitting
**Resumen:** La clase muestra cómo implementar árboles de decisión en R usando un dataset de potabilidad del agua. Se explica la carga y preparación de datos, la conversión de la variable objetivo a factor y la separación del dataset en 70% entrenamiento y 30% prueba con `sample_frac` y `setdiff`. Se construyen y grafican árboles con `rpart` y `rpart.plot`, interpretando los nodos y las reglas de separación (como el umbral de sulfato). Finalmente, se evalúan las predicciones con la función `predict` y la matriz de confusión de `caret`, analizando métricas como precisión y kappa, y se generan múltiples árboles con distintas muestras para buscar el mejor modelo. Se mencionan ventajas (bajo costo computacional, interpretabilidad) y desventajas (necesidad de iterar, riesgo de overfitting) de los árboles de decisión.

<!-- ESTADO_RESUMEN
{
  "secciones": [
    [
      [
        "General"
      ],
      [
        {
          "rel_path": "General/Presentación de la asignatura y modalidad de trabajo.txt",
          "fecha": "18/08/24",
          "temas": "Presentación de la materia, modalidad asincrónica, herramientas (R), sistema de evaluaciones, trabajo final, condiciones de acreditación",
          "resumen": "La docente presenta la materia Estadística e Inferencia, segunda estadística de la carrera, explicando que se cursa de forma asincrónica mediante videos cortos y encuentros de consulta opcionales por Meet. Se detalla el uso de R como lenguaje principal para el análisis estadístico. El sistema de evaluaciones consiste en entregas por unidad (6 en total) orientadas al trabajo final, con fecha límite el 27 de octubre, y entrega del trabajo final el 3 de noviembre. Las condiciones de acreditación son: promovido (trabajo final aprobado), regular (todas las entregas realizadas), libre (menos de la mitad de entregas) y ausente (sin entregas), con distintas exigencias en mesa de examen según cada condición."
        }
      ]
    ],
    [
      [
        "Grabaciones clases de consulta"
      ],
      [
        {
          "rel_path": "Grabaciones clases de consulta/Clase Consulta (14-4-26).txt",
          "fecha": "14/04/26",
          "temas": "Evaluación parcial, selección de dataset, estimación de parámetros, descripción de variables, limpieza de datos, análisis exploratorio de dataset de calidad de agua de Nueva York",
          "resumen": "La clase es una consulta donde la docente explica los requisitos de la tercera evaluación parcial: selección de dos variables de un dataset, descripción introductoria, estimación de parámetros con indicación del método y sus limitaciones. Un alumno comparte pantalla y presenta su trabajo con un dataset de calidad de agua de Nueva York (más de 160.000 filas), donde describe las dificultades encontradas: valores \"menor que uno\", datos NA en gran cantidad, exceso de sitios de muestreo y columnas con información constante. La docente orienta al alumno a no sobrelimpiar los datos innecesariamente, tratar ciertas variables como cualitativas y centrarse en describir el dataset tal como está. Al final, otro alumno consulta si puede utilizar datos de su ámbito laboral para las entregas, a lo que la docente responde afirmativamente."
        },
        {
          "rel_path": "Grabaciones clases de consulta/Consulta 31-03-2026.txt",
          "fecha": "31/03/26",
          "temas": "Consulta de avance, evaluaciones M1 y M2, selección de dataset, comandos R (dim, summary, str), manejo de fechas en R, visualización con ggplot2, R Markdown, funciones apply (lapply, sapply)",
          "resumen": "Clase de consulta donde la docente explica las consignas de las evaluaciones de la Unidad 1 (selección y carga de dataset en R con dim y summary) y Unidad 2 (clasificación de variables, forma de distribución, medidas de posición y dispersión con interpretación contextual). Se revisa el trabajo práctico de un estudiante que analiza datos de cursos universitarios por año y modalidad, abordando dificultades concretas con manejo de fechas, filtrado de datos con tidyverse, superposición de puntos en gráficos y el flujo de trabajo entre script y R Markdown. Se mencionan funciones avanzadas como lapply/sapply y el paquete Janitor para limpieza de nombres de columnas."
        },
        {
          "rel_path": "Grabaciones clases de consulta/VIdeo introducción.txt",
          "fecha": "No identificada",
          "temas": "Presentación de la materia, modalidad de cursada autoguiada, aula virtual, herramienta R/RStudio, sistema de evaluaciones y trabajo final",
          "resumen": "La docente Aile Nabila presenta la materia Estadística e Inferencia, explicando que la propuesta pedagógica es autoguiada: los estudiantes avanzan a su ritmo mediante videos y materiales subidos al aula virtual, mientras que los encuentros sincrónicos funcionan como clases de consulta. Se recorre el aula virtual mostrando la organización por unidades, el cronograma de clases y el sistema de evaluaciones. Se explica que el trabajo final consiste en un informe de análisis estadístico sobre un set de datos de interés del estudiante, desarrollado en R, con fecha límite en junio. También se detalla el régimen de condiciones de cursada (regular, libre y ausente) y se responden dudas iniciales sobre el uso de R."
        },
        {
          "rel_path": "Grabaciones clases de consulta/Videograbación 2026-04-28 194838.txt",
          "fecha": "28/04/26",
          "temas": "Regularización y entregas, trabajo práctico 3 (distribuciones y estimación de parámetros), análisis de datos de calidad de agua, visualización geoespacial en R (leaflet, mapview)",
          "resumen": "Clase de consulta con pocos alumnos donde se abordan dudas sobre los requisitos de regularización y el estado de entregas de trabajos prácticos. Se discute el trabajo práctico 3, centrado en identificar distribuciones estadísticas y estimar parámetros sobre datasets propios. Un alumno consulta sobre su dataset de calidad de agua de Nueva York, incluyendo la interpretación de variables como turbidez y conductividad, criterios de potabilidad y limpieza de datos. La docente comparte valores de referencia del agua de Rosario y sugiere paquetes de R (leaflet, mapview) para análisis y visualización geoespacial de los puntos de muestreo."
        },
        {
          "rel_path": "Grabaciones clases de consulta/Videograbación 2026-05-05 200118.txt",
          "fecha": "05/05/26",
          "temas": "Análisis exploratorio de datos, diagramas de caja, gráficos de dispersión, distribuciones de frecuencia/densidad, mapas interactivos con Leaflet, distancia a planta, regresión lineal y logística",
          "resumen": "La clase es una consulta individual en la que el estudiante muestra avances de su trabajo práctico sobre calidad de agua (turbidez, cloro residual, flúor). Se revisan gráficos de dispersión entre variables (cloro y turbidez vs. distancia a la planta de tratamiento) y se discute su interpretación estadística. Se analiza un mapa interactivo generado con Leaflet para visualizar los puntos de muestreo geolocalizados, y se identifican problemas en el gráfico de distribución de turbidez (escala del eje X, interpretación de densidad). Finalmente, el docente orienta al estudiante sobre los próximos pasos: explorar modelos de regresión lineal y logística para predecir el sitio de origen a partir de los parámetros medidos, y se menciona brevemente otro proyecto de práctica preprofesional sobre arbolado urbano en Esperanza."
        },
        {
          "rel_path": "Grabaciones clases de consulta/Encuentro 7_4_2026.txt",
          "fecha": "07/04/26",
          "temas": "Clase de consulta, instalación de paquetes en R (Linux), análisis exploratorio de datos, dataset de cursos estatales, gráficos en R, interpretación de variables cualitativas y cuantitativas",
          "resumen": "La clase fue una sesión de consultas donde los estudiantes presentaron dudas y avances en sus trabajos prácticos. Se abordó un problema de instalación de paquetes en R bajo Linux (en particular el paquete `tidyverse`), con sugerencias de instalación desde consola y reinstalación del entorno. Un estudiante presentó su análisis exploratorio sobre un dataset de cursos ofrecidos a empleados estatales (2022-2024), mostrando estadísticas descriptivas y gráficos de barras y boxplots. El docente señaló confusiones conceptuales respecto a la naturaleza de las variables (cualitativas vs. cuantitativas) y la interpretación de medidas estadísticas, recomendando definir primero el objetivo del análisis antes de aplicar herramientas."
        },
        {
          "rel_path": "Grabaciones clases de consulta/Encuentro 21_04_26.txt",
          "fecha": "21/04/26 (26/04/21)",
          "temas": "Consultas sobre trabajos prácticos, reutilización de dataset, descripción de variables, distribuciones, código en R, manejo de fechas y datos atípicos",
          "resumen": "La clase es una sesión de consultas donde la docente responde dudas sobre los trabajos prácticos de la materia. Se aclara que el dataset usado en evaluaciones anteriores puede reutilizarse para el trabajo final, y se explica la estructura general de dicho trabajo (análisis descriptivo, contrastes y predicción). Un alumno comparte su avance en R con un dataset de calidad de agua, mostrando código para limpieza de datos, detección de valores atípicos y gráficos, y recibe orientación sobre cómo interpretar medidas de posición y dispersión. También se discute el manejo de variables de fecha/hora en R (paquete lubridate) y la selección de sitios de muestreo para análisis futuros. Finalmente, se menciona el trabajo 3, centrado en identificar distribuciones de probabilidad adecuadas para las variables elegidas y sus limitaciones."
        },
        {
          "rel_path": "Grabaciones clases de consulta/Grabación encuentro 19_5_26.txt",
          "fecha": "19/05/26 (19 de mayo de 2026, o posiblemente 2025)",
          "temas": "Consulta trabajo final, limpieza y curación de datos, filtrado de datasets, análisis exploratorio, consignas de entrega, paquete Janitor en R",
          "resumen": "La clase fue una sesión de consulta donde un estudiante compartió su pantalla para mostrar avances en el análisis de datos de calidad de agua (turbidez, cloro residual, flúor), discutiendo problemas de datos faltantes, sitios con pocas mediciones y criterios de filtrado mínimo (≥30 muestras por año). El docente aclaró las consignas del trabajo final: informe en PDF/HTML/RMD con al menos tres medidas estadísticas, dos gráficos interpretados y dos situaciones problemáticas resueltas con métodos del curso, más entrega del script en R, con fecha límite el 9 de junio. También se mencionó la importancia de no actualizar paquetes durante el desarrollo de un trabajo y se recomendó el paquete `janitor` del tidyverse para normalización de texto en bases de datos."
        }
      ]
    ],
    [
      [
        "Unidad 1",
        "Clase 1"
      ],
      [
        {
          "rel_path": "Unidad 1/Clase 1/Video 8_ Ingresar datos a R con el comand read.delim.txt",
          "fecha": "No identificada",
          "temas": "Importación de datos en R, función read.delim, lectura desde portapapeles, lectura desde archivo, Import Dataset, paquete readxl",
          "resumen": "La clase explica distintas formas de ingresar tablas de datos en R. Se muestra cómo leer datos desde el portapapeles usando `read.delim(\"clipboard\")`, cómo especificar la ruta de acceso a un archivo directamente en el código, y cómo usar la interfaz gráfica \"Import Dataset\" del entorno de RStudio. También se introduce la importación de archivos Excel mediante el paquete `readxl`, mostrando tanto su instalación por línea de comandos como de forma automática al usarlo por primera vez."
        },
        {
          "rel_path": "Unidad 1/Clase 1/Video 1_ Descarga e instalación de R y RStudio.txt",
          "fecha": "No identificada",
          "temas": "Instalación de R, Instalación de RStudio (POSIT), Descarga de versiones anteriores, Configuración por defecto",
          "resumen": "El video guía paso a paso la descarga e instalación de R y RStudio (actualmente llamado POSIT) en Windows. Se recomienda utilizar versiones de R con aproximadamente un año de antigüedad (en el ejemplo, la 4.2.1) para evitar incompatibilidades con librerías. La instalación de ambos programas se realiza con las opciones de configuración por defecto, eligiendo únicamente el idioma y la carpeta de destino si se desea. El video cierra anticipando que en la siguiente clase se verá cómo iniciar el trabajo en R."
        },
        {
          "rel_path": "Unidad 1/Clase 1/Video 2_ Conociendo el entorno de trabajo.txt",
          "fecha": "No identificada",
          "temas": "Entorno de trabajo en R, consola y script, directorio de trabajo, paquetes y ayuda en R",
          "resumen": "El video presenta el entorno de trabajo de R, identificando sus secciones principales: la consola, el área de entorno/memoria, y el panel de archivos/gráficos/paquetes/ayuda. Se explica la importancia de trabajar con un script para registrar y guardar el historial de comandos. Se detalla cómo consultar y configurar el directorio de trabajo mediante `getwd()` y `setwd()`, tanto escribiendo la ruta manualmente como seleccionándola desde el explorador de archivos. Se menciona que el directorio de trabajo debe setearse en cada nueva sesión de R."
        },
        {
          "rel_path": "Unidad 1/Clase 1/Video 3_ Conociendo los tipos de objetos en R (Vectores).txt",
          "fecha": "No identificada",
          "temas": "Introducción a R, objetos en R, vectores numéricos, creación y asignación de objetos, comandos básicos (c(), seq(), runif())",
          "resumen": "La clase introduce el concepto de objetos en R, destacando que todo lo que se genera se almacena en distintos tipos de objetos (vectores, factores, listas, data frames). Se enfoca en la creación de vectores numéricos mediante diferentes métodos: usando la función `c()`, la notación de secuencia con `:`, la función `seq()` con parámetros de inicio, fin y salto, y la función `runif()`. También se explica el uso del numeral para comentarios en el script, la sensibilidad de R a mayúsculas y minúsculas, y las dos formas de asignación de objetos: con `=` y con la flecha `<-`."
        },
        {
          "rel_path": "Unidad 1/Clase 1/Video 4_ Conociendo los tipos de objetos en R (Vectores y factores).txt",
          "fecha": "No identificada",
          "temas": "Vectores de caracteres, vectores lógicos, función rep(), factores, categorización de datos en R",
          "resumen": "La clase muestra cómo crear distintos tipos de vectores en R: vectores de caracteres (usando comillas y la función `rep()` para generar repeticiones), y vectores lógicos con valores TRUE/FALSE. Se explica la diferencia entre vectores numéricos, de caracteres y lógicos, observando cómo R identifica cada tipo (CHR, lógico, etc.). Luego se introduce el concepto de factores, utilizados para representar variables categóricas, mostrando cómo convertir un vector de caracteres en un factor con etiquetas personalizadas (por ejemplo, \"A\" y \"B\" convertidos en \"amarillo\" y \"blanco\"), lo que permite recategorizar datos."
        },
        {
          "rel_path": "Unidad 1/Clase 1/Video 5_ Conociendo los tipos de objetos en R (Matrices y listas).txt",
          "fecha": "No identificada",
          "temas": "Matrices en R, función matrix, parámetro byrow, listas en R, función list, exploración de objetos en RStudio",
          "resumen": "La clase explica cómo crear y trabajar con matrices en R usando la función `matrix`, indicando número de filas, columnas y el orden de llenado (por fila con `byrow=TRUE` o por columna por defecto). Se comparan ambos resultados para destacar la importancia de controlar el ordenamiento de los datos. Luego se introduce el objeto lista (`list`), describiendo su estructura como colección ordenada que puede contener elementos de distinto tipo (vectores de caracteres y valores numéricos). Se muestra también cómo explorar estos objetos desde el entorno de trabajo de RStudio y cómo acceder a sus categorías desde la consola."
        },
        {
          "rel_path": "Unidad 1/Clase 1/Video 6_ Conociendo los tipos de objetos en R (Data frames).txt",
          "fecha": "No identificada",
          "temas": "Data frames en R, creación y manipulación de data frames, nombres de columnas y filas, errores comunes en R",
          "resumen": "La clase introduce los data frames en R como estructuras similares a matrices pero capaces de almacenar datos de distintos tipos (numéricos, lógicos, caracteres). Se muestra cómo crear un data frame combinando objetos previamente generados (listas, factores, vectores lógicos) usando la función `data.frame()`. Luego se explica cómo modificar los nombres de columnas con `colnames()` y los nombres de filas con `rownames()`. También se abordan errores frecuentes, como intentar asignar nombres de filas con un vector de longitud incorrecta o con valores repetidos."
        },
        {
          "rel_path": "Unidad 1/Clase 1/Videos 7_ modificando objetos.txt",
          "fecha": "No identificada",
          "temas": "Modificación de objetos en R, nombres de filas y columnas, indexación en matrices y data frames, asignación de valores por coordenadas",
          "resumen": "La clase muestra cómo modificar objetos en R, específicamente cómo asignar y cambiar los nombres de filas y columnas en un data frame usando vectores auxiliares. Se explica la diferencia entre asignar un valor a un objeto (usando el operador de asignación) y simplemente inspeccionarlo en la consola. Se introduce el concepto de indexación en matrices y data frames, indicando que en R se especifica primero la fila y luego la columna entre corchetes. Finalmente, se demuestra cómo modificar valores en posiciones específicas o en toda una fila o columna dejando uno de los índices vacío."
        },
        {
          "rel_path": "Unidad 1/Clase 1/Videos 8_ modificando objetos (uso de operadores).txt",
          "fecha": "No identificada",
          "temas": "Operadores aritméticos en R, modificación de columnas en data frames, indexación, funciones de exploración de objetos (head, tail, summary, class, length, dim)",
          "resumen": "La clase cierra el primer módulo presentando los operadores en R (aritméticos, comparativos y lógicos) y su aplicación sobre objetos y tablas. Se muestra cómo agregar o modificar columnas en un data frame usando el operador `$` y la indexación por posición. Luego se introducen funciones básicas de exploración de objetos: `head()` y `tail()` para visualizar filas iniciales y finales, `summary()` para obtener un resumen estadístico, `class()` para identificar el tipo de objeto, `length()` para conocer la cantidad de elementos, y `dim()` para ver las dimensiones de una tabla."
        },
        {
          "rel_path": "Unidad 1/Clase 1/Video 9_ Leyendo y guardando archivos (read_delim).txt",
          "fecha": "No identificada",
          "temas": "Importación de tablas en R, función read_delim, portapapeles (clipboard), rutas de archivo, Import Dataset, paquete readxl, lectura de archivos Excel y de texto",
          "resumen": "La clase muestra distintas formas de cargar tablas externas en R. Se explica el uso de `read_delim` para leer datos desde el portapapeles (clipboard) o especificando una ruta de archivo manualmente. También se presenta la opción gráfica \"Import Dataset\" del entorno de RStudio, que permite previsualizar y configurar la importación. Finalmente, se introduce la lectura de archivos Excel mediante el paquete `readxl`, indicando cómo instalarlo y utilizarlo para importar hojas de cálculo con opciones de previsualización y ajuste de tipos de datos."
        },
        {
          "rel_path": "Unidad 1/Clase 1/Video 11_ Leyendo y guardando archivos (write_table).txt",
          "fecha": "No identificada",
          "temas": "Lectura de archivos en R, formatos de importación (txt, xlsx, SPSS), guardado de tablas con write.table, parámetros row.names y col.names",
          "resumen": "La clase muestra distintas formas de cargar tablas en R: desde el portapapeles, archivos txt, archivos xlsx y desde otros software como SPSS. Luego se introduce el comando `write.table` para guardar tablas trabajadas, especificando nombre de archivo y directorio destino. Se exploran parámetros adicionales como `row.names` y `col.names`, configurándolos en TRUE o FALSE para controlar si se guardan los nombres de filas y columnas en el archivo de salida."
        }
      ]
    ],
    [
      [
        "Unidad 1",
        "Clase 2"
      ],
      [
        {
          "rel_path": "Unidad 1/Clase 2/Video 1 - Modulo 2_  Carga de tabla.txt",
          "fecha": "No identificada",
          "temas": "Paquete Tidyverse, importación de datos en R, carga de tabla CSV, exploración inicial de datos, calidad del agua",
          "resumen": "Se introduce el paquete Tidyverse como ecosistema de paquetes para manipulación, visualización e importación de datos en R (ggplot2, tidyr, readr, dplyr, entre otros). Se explica cómo configurar el directorio de trabajo y se carga una tabla en formato CSV obtenida de una fuente pública (Kaggle), que contiene 500 observaciones con variables de calidad de agua (pH, temperatura, turbidez, oxígeno disuelto y conductividad). Finalmente, se aplica la función `summary()` para obtener un resumen estadístico inicial de las columnas numéricas de la tabla."
        },
        {
          "rel_path": "Unidad 1/Clase 2/Video 9 - Modulo 2_ Comandos unite y separate (celdas).txt",
          "fecha": "No identificada",
          "temas": "Comando unite, Comando separate, manipulación de columnas en R, parámetro remove, separadores en columnas",
          "resumen": "La clase muestra el uso de los comandos `unite` y `separate` en R para manipular columnas de un dataframe. Se explica cómo `unite` combina dos o más columnas en una nueva usando un separador definido (espacio, guión, etc.), y cómo el parámetro `remove` controla si se conservan o eliminan las columnas originales. Se advierte sobre el cuidado al usar `remove = TRUE` para no perder datos. Finalmente, se introduce `separate` como operación inversa a `unite`, permitiendo dividir una columna combinada en sus columnas originales a partir del separador utilizado."
        },
        {
          "rel_path": "Unidad 1/Clase 2/Video 2 - Recategorizar variables con ifelse.txt",
          "fecha": "No identificada",
          "temas": "Inspección de tablas, renombrado de columnas, recodificación de variables, función ifelse, operadores de comparación en R",
          "resumen": "La clase muestra cómo inspeccionar una tabla en R usando comandos como `head` y `tail`, y cómo renombrar columnas con `colnames`. El foco principal es la recodificación de variables mediante la función `ifelse`, que permite crear una nueva columna categórica a partir de una variable numérica. Se trabaja con un dataset de calidad del agua, generando una columna \"conductividad\" que clasifica los valores como \"alta\" o \"baja\" según un umbral definido. Se repasan operadores de comparación y la sintaxis general de `ifelse`: condición, valor si verdadero, valor si falso."
        },
        {
          "rel_path": "Unidad 1/Clase 2/Video 3 - Generación de df auxiliar e indentación.txt",
          "fecha": "No identificada",
          "temas": "Creación de data frame auxiliar en R, indentación en R vs Python, función seq(), función rep(), combinación de funciones anidadas",
          "resumen": "La clase muestra cómo construir un data frame auxiliar llamado `infomuestras` en R, con columnas como ID, muestra y día, para combinar tablas y organizar datos de muestras. Se explica el uso de funciones como `seq()` y `rep()` para generar secuencias y repeticiones. Se aborda la importancia de la indentación en R como buena práctica de escritura de código, comparándola con Python donde la indentación es obligatoria. También se introduce el concepto de funciones anidadas, leyéndose desde los paréntesis internos hacia los externos. La clase finaliza anticipando cómo completar la columna de días con múltiples valores repetidos."
        },
        {
          "rel_path": "Unidad 1/Clase 2/Video 4 -  Generación de df auxiliar y exploración.txt",
          "fecha": "No identificada",
          "temas": "Creación de dataframe auxiliar en R, estructura de columnas, uso de `rep()` y `c()`, manejo de paréntesis e indentación, exploración con `summary()`, indexación de filas",
          "resumen": "La clase muestra cómo construir un dataframe auxiliar en R con columnas de id, muestra y día, utilizando la función `rep()` para repetir valores (lunes a viernes, 100 veces cada uno) y `c()` para concatenarlos. Se explica la importancia de la indentación y el cierre correcto de paréntesis para evitar errores. Luego se analiza la estructura del dataframe con `summary()`, discutiendo el tipo de dato adecuado para cada columna (numérico, carácter o factor). Finalmente, se ilustra cómo usar este dataframe auxiliar como tabla de conexión para localizar registros específicos en la tabla principal (`water_quality_test`) mediante indexación por fila."
        },
        {
          "rel_path": "Unidad 1/Clase 2/Video 5 -Instalando tidyverse.txt",
          "fecha": "No identificada",
          "temas": "Función Merge en R, unión de tablas por criterio común, instalación de paquetes en R, tidyverse, uso de library()",
          "resumen": "La clase muestra cómo unir dos tablas en R (Infomuestras y WBQT) usando la función `merge()` del código base de R, utilizando la columna ID como criterio de unión para asegurar la correcta correspondencia entre filas. Se explica la lógica del resultado (columnas totales = suma de columnas de ambas tablas menos la columna compartida). Luego se introduce el paquete tidyverse, detallando cómo instalarlo con `install.packages()` y cómo cargarlo con `library()` en cada sesión de trabajo. Se aclara la diferencia entre instalar un paquete (una sola vez) y llamar a la librería (cada vez que se abre R)."
        },
        {
          "rel_path": "Unidad 1/Clase 2/Video 6 - Unir tablas con los comandos bind_col y bind_row.txt",
          "fecha": "No identificada",
          "temas": "Tidyverse, bind_cols, bind_rows, unión de tablas por columnas y filas, subsets de datos",
          "resumen": "La clase muestra cómo unir tablas usando funciones de Tidyverse, específicamente `bind_cols` para combinar columnas y `bind_rows` para combinar filas. Se compara `bind_cols` con el comando `merge`, destacando el manejo de columnas duplicadas (como el campo `id`). Para ilustrar `bind_rows`, se generan tablas auxiliares recortando subsets de un dataframe original (filas 1–200 y 201–500) y luego se unen para reconstituir la tabla completa. Al final se menciona que en próximas clases se abordarán los comandos de tipo join (left, anti, etc.)."
        },
        {
          "rel_path": "Unidad 1/Clase 2/Video 7 - Unión de tablas con comando join.txt",
          "fecha": "No identificada",
          "temas": "Unión de tablas, left join, right join, manipulación de columnas, merge de datos",
          "resumen": "La clase muestra cómo unir tablas de datos en R utilizando funciones de join. Se parte de una tabla base (datos2) a la que se le eliminan ciertas columnas para luego combinarla con otras tablas mediante los comandos left_join y right_join. Se explica la lógica de cada tipo de unión: left join toma como referencia la tabla de la izquierda y agrega las columnas no repetidas de la tabla de la derecha, mientras que right join invierte ese criterio. El uso práctico se orienta a evitar pérdida de información cuando las tablas se actualizan por separado o se agregan nuevas variables medidas."
        },
        {
          "rel_path": "Unidad 1/Clase 2/Video 8 - Comandos join (filas y columnas) y unite (celdas).txt",
          "fecha": "No identificada",
          "temas": "inner_join, anti_join, unite, manipulación de tablas, combinación de filas y columnas, unión de celdas en R",
          "resumen": "La clase explica el uso de los comandos `inner_join` y `anti_join` en R para combinar tablas según coincidencias entre filas: `inner_join` retiene solo las filas comunes entre dos tablas, mientras que `anti_join` devuelve las filas que no coinciden. Se ilustra con ejemplos donde una tabla tiene 500 observaciones y otra 200, obteniendo 200 filas coincidentes y 300 no coincidentes respectivamente. Luego se introduce la función `unite`, orientada a trabajar a nivel de celdas, permitiendo unir valores de distintas columnas (como \"muestra\" y \"día\") en una nueva columna identificadora, con opciones como definir el separador y el parámetro `remove = FALSE`."
        },
        {
          "rel_path": "Unidad 1/Clase 2/Video 10 - Reformatear tabla con pivot_wider.txt",
          "fecha": "No identificada",
          "temas": "Función `separate()`, función `pivot_wider()`, reformateo de tablas, manipulación de columnas en R",
          "resumen": "La clase muestra el uso de la función `separate()` en R para dividir una columna en dos a partir de un separador (guión), aclarando que el argumento `remove` está activado por defecto. Luego se introduce la función `pivot_wider()`, que permite reformatear una tabla ampliándola horizontalmente: a partir de una columna con categorías (como \"conductividad\"), genera nuevas columnas para cada valor único (por ejemplo, \"baja\" y \"alta\"), rellenándolas con los valores de otra columna (como \"día\"). Se ilustra el concepto con una tabla de ejemplo y se explica la lógica de transformación de datos que implica este tipo de pivoteo."
        },
        {
          "rel_path": "Unidad 1/Clase 2/Video 11 -  Recortar tabla con comando filter.txt",
          "fecha": "No identificada",
          "temas": "Pivot Longer, filter, select, subset, mutate, operadores de comparación y lógicos en R",
          "resumen": "La clase continúa el trabajo con transformación de tablas en R, explicando el comando `pivot_longer` como recíproco de `pivot_wider`, mostrando cómo aumentar filas agrupando columnas. Luego se introduce el comando `filter` para recortar tablas según criterios específicos, como filtrar filas con pH mayor a 7. Se muestra cómo combinar múltiples filtros usando operadores lógicos (&&) y operadores de comparación, destacando la diferencia en la sintaxis según el tipo de dato (numérico vs. carácter). Se menciona también el uso de otros comandos de recorte como `select`, `subset` y `mutate` para manipular y reorganizar información en tablas."
        },
        {
          "rel_path": "Unidad 1/Clase 2/Video 12 - Recortar tabla con comando select, subset y mutate.txt",
          "fecha": "No identificada",
          "temas": "Comando select, comando subset, operadores lógicos en filtrado, comando mutate, manipulación de tablas en R",
          "resumen": "La clase muestra cómo recortar y manipular tablas de datos en R usando distintos comandos. Se explica `select` para elegir columnas específicas, `filter` para filtrar filas según condiciones, y `subset` como combinación de ambos, permitiendo seleccionar columnas y aplicar criterios simultáneamente. Se introduce el operador lógico \"distinto de\" (`!=`) como alternativa al operador de igualdad. Finalmente, se presenta el comando `mutate`, que permite crear nuevas columnas a partir de transformaciones de columnas existentes, como sumar un valor constante a una variable numérica."
        }
      ]
    ],
    [
      [
        "Unidad 2"
      ],
      [
        {
          "rel_path": "Unidad 2/Barón Lopez, J. Bioestadística Métodos y Aplicaciones (2004).md",
          "fecha": "No identificada",
          "temas": "Estadística descriptiva, tablas de frecuencia, representaciones gráficas, medidas de tendencia central y dispersión, variables bidimensionales, correlación y regresión, probabilidad, variables aleatorias, distribuciones de probabilidad, inferencia estadística, intervalos de confianza, contrastes de hipótesis, chi-cuadrado, ANOVA, tests no paramétricos",
          "resumen": "Este archivo corresponde al libro completo \"Bioestadística: Métodos y Aplicaciones\" de Barón López (2004), utilizado como material de referencia para la materia. Cubre desde conceptos básicos de estadística descriptiva (tipos de variables, tablas de frecuencia, gráficos, medidas de centralización, dispersión y forma) hasta estadística inferencial avanzada, incluyendo cálculo de probabilidades, distribuciones teóricas discretas y continuas (Binomial, Poisson, Normal, t-Student, chi-cuadrado, F de Snedecor), estimación puntual y por intervalos de confianza, contrastes de hipótesis paramétricos para medias, varianzas y proporciones, análisis de la varianza (ANOVA) y alternativas no paramétricas. Cada capítulo incorpora ejemplos aplicados al ámbito de las ciencias de la salud y una sección de problemas para práctica."
        }
      ]
    ],
    [
      [
        "Unidad 2",
        "Clase 3"
      ],
      [
        {
          "rel_path": "Unidad 2/Clase 3/UNIDAD II - Clase 3.md",
          "fecha": "No identificada",
          "temas": "Definiciones básicas de estadística, población y muestra, tipos de variables, análisis exploratorio de datos, sumarización y visualización de datos, distribuciones teóricas (t de Student, Chi Cuadrado)",
          "resumen": "La clase introduce los conceptos fundamentales de la estadística inferencial, diferenciando sus dos grandes ramas: descriptiva e inferencial. Se definen términos clave como población, muestra, unidad elemental, variable, parámetro y estadístico. Se clasifican los tipos de variables (cualitativas y cuantitativas, con sus subtipos) y se presenta el análisis exploratorio de datos mediante sumarización y visualización. El contenido de la unidad también contempla distribuciones teóricas como la t de Student y Chi Cuadrado."
        },
        {
          "rel_path": "Unidad 2/Clase 3/Modulo 3 - Video 2_ Medidas de localización y dispersión.txt",
          "fecha": "No identificada",
          "temas": "Medidas de localización, percentiles, cuartiles, media aritmética, mediana, moda, medidas de dispersión, rango, varianza, desvío estándar",
          "resumen": "La clase presenta las principales herramientas estadísticas para describir datos muestrales, organizadas en medidas de localización y de dispersión. Dentro de las medidas de localización se explican el mínimo, máximo, percentiles, cuartiles (Q1, Q2, Q3), la media aritmética (promedio), la mediana y la moda. Luego se abordan las medidas de dispersión o variabilidad: el rango, el rango intercuartil, la varianza muestral y el desvío estándar, destacando que este último resulta más interpretable al expresarse en las mismas unidades que la variable analizada."
        },
        {
          "rel_path": "Unidad 2/Clase 3/Modulo 3 - Video 3_ Medidas de forma.txt",
          "fecha": "No identificada",
          "temas": "Coeficiente de variación, medidas de forma, asimetría, kurtosis, parámetros poblacionales vs. muestrales",
          "resumen": "La clase aborda primero el coeficiente de variación como medida de dispersión relativa a la media, útil para comparar distintas muestras o instrumentos. Luego se introducen las medidas de forma: asimetría (distribución con cola hacia la derecha o izquierda) y kurtosis (concentración de datos en torno a la media: leptocúrtica, platicúrtica o mesocúrtica), explicando cómo el signo del coeficiente de kurtosis permite clasificarlas. Finalmente, se menciona la distinción entre estadísticos muestrales (media, varianza y desvío muestral) y parámetros poblacionales (µ, σ², σ), señalando que los primeros actúan como estimadores de los segundos, e introduce el concepto de proporción estimada a partir de la frecuencia relativa."
        },
        {
          "rel_path": "Unidad 2/Clase 3/Modulo 3 - Video 4_ Medidas de posición.txt",
          "fecha": "No identificada",
          "temas": "Medidas de tendencia central en R, media, mediana, cuantiles, rango intercuartil, moda, creación de funciones en R",
          "resumen": "La clase muestra cómo calcular medidas de posición y tendencia central utilizando R. Se trabaja con un dataset previamente cargado y se aplican funciones como `mean()` para la media, `median()` para la mediana, `quantile()` para los cuartiles (Q1, Q2 y Q3), e `IQR()` para el rango intercuartil. Dado que R base no incluye una función nativa para la moda, se enseña a crear una función personalizada utilizando `unique()` y tablas de frecuencias para identificar el valor más repetido."
        },
        {
          "rel_path": "Unidad 2/Clase 3/Modulo 3 - Video 5_ Medidas de dispersión.txt",
          "fecha": "No identificada",
          "temas": "Moda, medidas de dispersión, varianza, desvío estándar, coeficiente de variación, funciones en R",
          "resumen": "La clase aborda el cálculo de medidas de dispersión en R aplicadas a datos de pH. Se explica cómo construir una función personalizada para calcular la moda, destacando la posibilidad de modas múltiples y la necesidad de verificar los resultados con la función `table`. Luego se calculan valores mínimo, máximo y rango con `min`, `max` y `range`, y se trabaja con varianza muestral y desvío estándar usando `var`, `sd` y `sqrt`. Finalmente, se introduce la construcción de una función personalizada para el coeficiente de variación, dado que R no lo incluye de forma nativa."
        },
        {
          "rel_path": "Unidad 2/Clase 3/Modulo 3 - Video 7 _ Medidas por varias columnas con las funciones apply.txt",
          "fecha": "No identificada",
          "temas": "Funciones apply en R, apply/lapply/sapply/tapply, estadísticas por columnas, test de normalidad (Shapiro-Wilk), hipótesis nula, coeficiente de asimetría y curtosis",
          "resumen": "La clase retoma brevemente la interpretación del test de Shapiro-Wilk para evaluar si una muestra proviene de una población con distribución normal, explicando el concepto de p-valor y la decisión de rechazar la hipótesis nula. Luego se introduce el conjunto de funciones `apply` de R (`apply`, `lapply`, `sapply` y `tapply`) como herramienta para calcular estadísticas (como la media) sobre múltiples columnas de un data frame de forma simultánea. Se explican las diferencias en el formato de salida de cada variante: tabla, lista o vector. Finalmente, se presenta `tapply` como una función que permite calcular estadísticas condicionadas a un operador lógico, por ejemplo, calcular el promedio solo para registros que superen un umbral determinado."
        },
        {
          "rel_path": "Unidad 2/Clase 3/Modulo 3 - Video 8_ Medidas en conjunto con las funciones summary y describe.txt",
          "fecha": "No identificada",
          "temas": "Función summary en R, función describe del paquete psych, medidas resumen, groupby con condiciones, cuartiles, coeficiente de asimetría y kurtosis",
          "resumen": "La clase muestra cómo calcular medidas resumen en R utilizando las funciones `summary` y `describe`. Se explica cómo aplicar `summary` a un data frame completo para obtener mínimo, cuartiles, mediana y media, y cómo segmentar el cálculo de una medida (como la media del pH) según una condición lógica. Luego se presenta la función `describe` del paquete `psych`, que ofrece una tabla más completa incluyendo desvío estándar, mediana, media truncada, rango, coeficiente de asimetría y kurtosis. Se enfatiza la interpretación de resultados y la corrección de errores por argumentos mal especificados."
        }
      ]
    ],
    [
      [
        "Unidad 2",
        "Clase 4"
      ],
      [
        {
          "rel_path": "Unidad 2/Clase 4/Video 2 - Unidad 4_ Generando variables auxiliares.txt",
          "fecha": "No identificada",
          "temas": "Variables auxiliares en R, función ifelse anidado, recodificación de variables, creación de columnas categóricas, directorio de trabajo en R",
          "resumen": "La clase muestra cómo generar columnas auxiliares en R a partir de una base de datos previamente utilizada, comenzando con la configuración del directorio de trabajo y el renombramiento de columnas. Se crean variables categóricas usando `ifelse`, como \"conductividad alta/baja\" y clasificación de pH en ácido, básico o neutro mediante `ifelse` anidados. También se genera una columna con valores de temperatura redondeados usando la función `round`, y un vector de colores para uso posterior en gráficos. Finalmente, se inspecciona la tabla resultante para verificar que las nuevas columnas fueron agregadas correctamente."
        },
        {
          "rel_path": "Unidad 2/Clase 4/Video 3 - Unidad 4_ Gráfico de sectores con pie().txt",
          "fecha": "No identificada",
          "temas": "Gráfico de sectores en R, función pie(), función table(), colores en gráficos, cálculo de porcentajes, etiquetas y leyendas",
          "resumen": "La clase explica cómo construir un gráfico de sectores (pie chart) en R usando la función `pie()` junto con `table()` para una variable cualitativa auxiliar. Se muestra cómo personalizar el gráfico modificando colores mediante el argumento `col`, cómo calcular y mostrar porcentajes usando `round()` y la suma de frecuencias, y cómo agregar etiquetas con el argumento `labels`. Finalmente, se introduce la necesidad de incorporar una leyenda con el comando `legend()` para identificar correctamente cada categoría, tema que se continuará en el siguiente video."
        },
        {
          "rel_path": "Unidad 2/Clase 4/Video 4 - Unidad 4_ Grádico de barras con barplot().txt",
          "fecha": "No identificada",
          "temas": "Gráfico de barras en R, función barplot(), función legend(), argumentos estéticos, exportación de gráficos",
          "resumen": "La clase muestra cómo agregar una leyenda a gráficos en R usando la función `legend()`, especificando posición, etiquetas y colores. Luego se trabaja con la función `barplot()` para crear gráficos de barras horizontales (convención para variables categóricas), ajustando argumentos como nombres de ejes, límites del eje x, colores y título. Se explica cómo modificar aspectos estéticos del gráfico de forma incremental. Finalmente, se indica cómo exportar los gráficos desde RStudio usando la opción \"Export\" para guardarlos en el directorio de trabajo y evitar perderlos al cerrar la sesión."
        },
        {
          "rel_path": "Unidad 2/Clase 4/Video 5 - Unidad 4_ Diagrama de pareto con qcc+pareto.chart().txt",
          "fecha": "No identificada",
          "temas": "Diagrama de Pareto, librería qcc, función pareto.chart(), frecuencia acumulada, porcentaje acumulado, R",
          "resumen": "La clase muestra cómo construir un diagrama de Pareto en R utilizando la librería `qcc` (quality control) y su función `pareto.chart()`. Se explica cómo configurar los argumentos del gráfico (etiquetas de ejes, título, doble eje vertical) y cómo exportar la imagen. Además, se destaca que la función genera automáticamente una tabla con frecuencia, frecuencia acumulada, porcentaje y porcentaje acumulado. Finalmente, se ilustra la interpretación del gráfico con un ejemplo de categorías de pH, señalando que más del 50% de las muestras presentaron pH básico y más del 95% tuvieron pH básico o neutro."
        },
        {
          "rel_path": "Unidad 2/Clase 4/Video 6 - Unidad 4_ Diagrama de puntos con plot().txt",
          "fecha": "No identificada",
          "temas": "Gráfico de puntos, función plot(), variables cuantitativas, personalización de gráficos, factorización de variables, leyenda en R",
          "resumen": "La clase presenta el uso de la función `plot()` en R para crear diagramas de puntos como herramienta exploratoria de variables cuantitativas, utilizando la variable pH como ejemplo. Se explica cómo personalizar el gráfico agregando etiquetas de ejes (`xlab`, `ylab`), título (`main`), tipo de punto (`pch`) y color. Además, se muestra cómo incorporar una segunda variable categórica (conductividad) mediante la factorización de niveles para asignar colores diferenciados a cada grupo. Finalmente, se menciona la posibilidad de agregar una leyenda con el comando `legend()` para identificar cada categoría en el gráfico."
        },
        {
          "rel_path": "Unidad 2/Clase 4/Video 7 - Unidad 4_ Diagrama de tallo y hoja con función stem()  y, diagrama de bastones con función  barplot().txt",
          "fecha": "No identificada",
          "temas": "Diagrama de tallo y hoja, función stem(), diagrama de bastones, función barplot(), visualización de variables cuantitativas en R",
          "resumen": "La clase presenta dos gráficos para analizar la distribución de variables cuantitativas en R. Se explica el diagrama de tallo y hoja mediante la función `stem()`, destacando cómo interpretar la posición del punto decimal y cómo cada hoja representa una observación, permitiendo identificar valores repetidos y la distribución general. Luego se aborda el diagrama de bastones usando `barplot()`, señalando que para variables cuantitativas no se utiliza el argumento `horizontal`. Se muestra cómo personalizar el gráfico agregando nombres a los ejes, límites, color y título, utilizando datos de pH como ejemplo práctico."
        },
        {
          "rel_path": "Unidad 2/Clase 4/Video 8 - Unidad 4_ Histograma de frecuencias con hist().txt",
          "fecha": "No identificada",
          "temas": "Histograma de frecuencias, función hist() en R, variables cuantitativas, intervalos de clase, personalización de gráficos en R",
          "resumen": "La clase explica cómo construir un histograma de frecuencias en R usando la función `hist()` para variables cuantitativas con muchos valores diferentes. Se distingue el histograma del diagrama de bastones, destacando que el histograma agrupa observaciones en intervalos en lugar de representar valores individuales. Se muestra cómo personalizar el gráfico modificando etiquetas de ejes, límites del eje Y, título y color, y se menciona la importancia de la sintaxis correcta en R para evitar errores."
        },
        {
          "rel_path": "Unidad 2/Clase 4/Video 9 - Unidad 4_ Boxplot.txt",
          "fecha": "No identificada",
          "temas": "Boxplot en R, función boxplot(), argumentos estéticos, boxplot por variable categórica, interpretación de cuartiles y bigotes",
          "resumen": "La clase explica cómo construir un boxplot en R utilizando la función `boxplot()`, describiendo la lectura del gráfico a partir de Q1, Q2 (mediana) y Q3, así como la extensión de los bigotes. Se muestran distintas configuraciones estéticas como orientación horizontal/vertical, límites de ejes, etiquetas y colores. También se introduce el uso del boxplot segmentado por una variable categórica (conductividad alta vs. baja), lo que permite comparar visualmente la distribución del pH entre grupos y extraer primeras interpretaciones sobre la relación entre variables."
        },
        {
          "rel_path": "Unidad 2/Clase 4/Video 10 - Unidad 4_ ggplot 1.txt",
          "fecha": "No identificada",
          "temas": "Introducción a ggplot2, gráficos de puntos, aesthetics, capas en ggplot2, variables categóricas con color",
          "resumen": "La clase introduce la librería ggplot2 (parte del ecosistema tidyverse) y su estructura de capas para construir gráficos en R. Se muestra cómo crear un gráfico de dispersión (geom_point) usando un dataset con variables de pH, temperatura y conductividad. Se explica el concepto de aesthetics (aes), incluyendo cómo asignar ejes x e y, y cómo agregar una tercera variable categórica mediante el argumento color dentro de aes. También se trabaja sobre un error frecuente relacionado con el cierre incorrecto del paréntesis de aesthetics, aprovechándolo como ejemplo didáctico."
        },
        {
          "rel_path": "Unidad 2/Clase 4/Video 11 - Unidad 4_ ggplot 2.txt",
          "fecha": "No identificada",
          "temas": "ggplot2, facetas (facet_wrap), gráfico de líneas, box plot, visualización multivariada, personalización de ejes",
          "resumen": "La clase muestra cómo construir visualizaciones en R usando ggplot2 con capas adicionales. Se explica el uso de `facet_wrap` para dividir gráficos en paneles según una variable categórica (categoría de pH), aplicado a la relación entre conductividad y demanda de oxígeno mediante gráfico de líneas. También se trabaja la construcción de un box plot para analizar la conductividad según la categoría de pH, incluyendo la personalización de etiquetas en los ejes con parámetros adicionales de ggplot2."
        },
        {
          "rel_path": "Unidad 2/Clase 4/Video 12 - Unidad 4_ ggplot 3.txt",
          "fecha": "No identificada",
          "temas": "ggplot2, histograma de frecuencias, personalización estética, facet, tema minimal, gráfico de barras, geom_bar",
          "resumen": "La clase muestra cómo construir un histograma en ggplot2 utilizando datos de pH, agregando capas para etiquetas de ejes, título y parámetros estéticos como color de relleno, separación de columnas y ajuste de bins. Se introduce la capa `facet` para separar el histograma según niveles de conductividad (alta y baja), y se aplica `theme_minimal` para mejorar la presentación visual eliminando el fondo. Finalmente, se introduce `geom_bar` para construir un gráfico de barras con una variable categórica, destacando el uso del eje y en lugar del eje x para ese tipo de variable."
        },
        {
          "rel_path": "Unidad 2/Clase 4/Video 14 - Unidad 4_ Rchartas y cheatsheet para mejorar gráficos.txt",
          "fecha": "No identificada",
          "temas": "Recharts, ggplot2, cheat sheet, paletas de colores, recursos gráficos en R",
          "resumen": "La clase presenta la página de Recharts como recurso para explorar y mejorar gráficos en R, mostrando cómo elegir tipos de gráficos y personalizar títulos, etiquetas, colores y leyendas. Se explica cómo consultar los códigos de colores disponibles y las paletas predefinidas, incluyendo opciones accesibles. También se presenta el cheat sheet de ggplot2 como referencia de las geometrías y posibilidades gráficas del paquete. Se recomienda a los estudiantes practicar guardando los códigos de gráficos que más utilicen para mantener un estilo unificado y evitar reescribir código repetidamente."
        }
      ]
    ],
    [
      [
        "Unidad 2",
        "Clase 5"
      ],
      [
        {
          "rel_path": "Unidad 2/Clase 5/Video material teórico.txt",
          "fecha": "No identificada",
          "temas": "Distribución de frecuencias, frecuencia absoluta y relativa, distribución de probabilidad, distribución de Bernoulli, distribución binomial, distribución de Poisson, distribución normal, distribución t de Student, distribución chi-cuadrado",
          "resumen": "La clase introduce el concepto de distribución de una variable aleatoria, distinguiendo entre frecuencia absoluta y relativa. Se presentan las distribuciones teóricas para variables discretas (Bernoulli, Binomial y Poisson) y continuas (Normal, t de Student y chi-cuadrado), explicando sus parámetros y contextos de aplicación. Se enfatiza que las distribuciones con las que se trabajará principalmente en la materia son la Binomial, Poisson y Normal. Las distribuciones t de Student y chi-cuadrado se mencionan como herramientas que se utilizarán más adelante en la unidad de inferencia estadística."
        },
        {
          "rel_path": "Unidad 2/Clase 5/Video simulación de muestras.txt",
          "fecha": "No identificada",
          "temas": "Simulación de muestras en R, distribución binomial, distribución de Poisson, distribución normal, funciones `rbinom`, `rpois`, `rnorm`",
          "resumen": "La clase muestra cómo simular datos aleatorios en R usando funciones de distribuciones de probabilidad (`rbinom`, `rpois`, `rnorm`). Se trabaja con tres distribuciones: binomial (ejemplo de tornillos defectuosos con n=50 y p=0,08), Poisson (llamadas telefónicas con λ=15 por hora) y normal (concentración de vitamina D con μ=20 y σ=5). Para cada caso se explica cómo definir los parámetros propios de cada distribución y cómo interpretar los resultados generados. También se menciona el uso de semillas para reproducibilidad y la función `round` para redondear salidas."
        },
        {
          "rel_path": "Unidad 2/Clase 5/UNIDAD II - Clase 5 (1).md",
          "fecha": "2024 (no se puede precisar más)",
          "temas": "Distribución empírica, Distribuciones teóricas, Variables aleatorias discretas y continuas, Distribución Normal, Distribución t de Student, Distribución Chi Cuadrado",
          "resumen": "La clase aborda el concepto de distribución empírica, explicando frecuencia absoluta y relativa, y los aspectos clave de la distribución de una variable cuantitativa (posición, dispersión y forma). Luego introduce las distribuciones teóricas de probabilidad, diferenciando entre variables aleatorias discretas (Bernoulli, Binomial, Poisson, entre otras) y continuas (Normal, Uniforme, Exponencial, entre otras). Se profundiza en la distribución Normal, destacando su relación con el teorema central del límite. Finalmente, se presentan la distribución t de Student —útil para muestras pequeñas con varianza poblacional desconocida— y la distribución Chi Cuadrado, ambas relevantes para inferencia estadística y pruebas de hipótesis."
        }
      ]
    ],
    [
      [
        "Unidad 3",
        "Clase 7"
      ],
      [
        {
          "rel_path": "Unidad 3/Clase 7/Video teorico-practico estimación de núcleo.txt",
          "fecha": "No identificada",
          "temas": "Estimación de densidad de probabilidad, método de núcleo (kernel), función density en R, ancho de banda (bandwidth), tipos de kernel (rectangular y gaussiano)",
          "resumen": "La clase muestra cómo estimar funciones de densidad de probabilidad a partir de datos usando la función `density` de R, tomando como ejemplo una variable de colesterol con distribución uniforme (35 datos, entre 140 y 300). Se compara la estimación por defecto (kernel gaussiano) con un kernel rectangular, variando también el ancho de banda para observar el efecto sobre el suavizado de la curva. Se menciona la existencia de métodos automáticos para seleccionar el ancho de banda (como NRD0) y se muestra cómo extraer las estadísticas de posición de la estimación resultante."
        },
        {
          "rel_path": "Unidad 3/Clase 7/Video teorico-practico arbol de desiciones.txt",
          "fecha": "No identificada",
          "temas": "Árboles de decisión, dataset de calidad del agua, librerías rpart y caret, partición entrenamiento/prueba, matriz de confusión, métricas de evaluación (precisión, kappa), overfitting",
          "resumen": "La clase muestra cómo implementar árboles de decisión en R usando un dataset de potabilidad del agua. Se explica la carga y preparación de datos, la conversión de la variable objetivo a factor y la separación del dataset en 70% entrenamiento y 30% prueba con `sample_frac` y `setdiff`. Se construyen y grafican árboles con `rpart` y `rpart.plot`, interpretando los nodos y las reglas de separación (como el umbral de sulfato). Finalmente, se evalúan las predicciones con la función `predict` y la matriz de confusión de `caret`, analizando métricas como precisión y kappa, y se generan múltiples árboles con distintas muestras para buscar el mejor modelo. Se mencionan ventajas (bajo costo computacional, interpretabilidad) y desventajas (necesidad de iterar, riesgo de overfitting) de los árboles de decisión."
        }
      ]
    ]
  ]
}
-->
