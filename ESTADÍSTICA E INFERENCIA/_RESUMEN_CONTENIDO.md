# ESTADÍSTICA E INFERENCIA - Resumen de contenido
_Última actualización: 28/08/26_

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

### Clase 2
**Archivo:** Unidad 1/Clase 2/Video 1 - Modulo 2_  Carga de tabla.txt
**Fecha:** No identificada
**Temas:** Paquete Tidyverse, importación de datos en R, carga de tabla CSV, exploración inicial de datos, calidad del agua
**Resumen:** Se introduce el paquete Tidyverse como ecosistema de paquetes para manipulación, visualización e importación de datos en R (ggplot2, tidyr, readr, dplyr, entre otros). Se explica cómo configurar el directorio de trabajo y se carga una tabla en formato CSV obtenida de una fuente pública (Kaggle), que contiene 500 observaciones con variables de calidad de agua (pH, temperatura, turbidez, oxígeno disuelto y conductividad). Finalmente, se aplica la función `summary()` para obtener un resumen estadístico inicial de las columnas numéricas de la tabla.

**Archivo:** Unidad 1/Clase 2/Video 9 - Modulo 2_ Comandos unite y separate (celdas).txt
**Fecha:** No identificada
**Temas:** Comando unite, Comando separate, manipulación de columnas en R, parámetro remove, separadores en columnas
**Resumen:** La clase muestra el uso de los comandos `unite` y `separate` en R para manipular columnas de un dataframe. Se explica cómo `unite` combina dos o más columnas en una nueva usando un separador definido (espacio, guión, etc.), y cómo el parámetro `remove` controla si se conservan o eliminan las columnas originales. Se advierte sobre el cuidado al usar `remove = TRUE` para no perder datos. Finalmente, se introduce `separate` como operación inversa a `unite`, permitiendo dividir una columna combinada en sus columnas originales a partir del separador utilizado.

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
