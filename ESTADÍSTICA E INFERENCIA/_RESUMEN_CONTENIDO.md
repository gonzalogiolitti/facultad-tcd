# ESTADÍSTICA E INFERENCIA - Resumen de contenido
_Última actualización: 29/08/26_

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

<!-- ESTADO_RESUMEN
{
  "secciones": [
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
    ]
  ]
}
-->
