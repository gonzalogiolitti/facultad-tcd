# ESTADÍSTICA E INFERENCIA - Resumen de contenido
_Última actualización: 26/08/26_

## Unidad 1
### Clase 2
**Archivo:** Unidad 1/Clase 2/Video 1 - Modulo 2_  Carga de tabla.txt
**Fecha:** No identificada
**Temas:** Paquete Tidyverse, importación de datos en R, carga de tabla CSV, exploración inicial de datos, calidad del agua
**Resumen:** Se introduce el paquete Tidyverse como ecosistema de paquetes para manipulación, visualización e importación de datos en R (ggplot2, tidyr, readr, dplyr, entre otros). Se explica cómo configurar el directorio de trabajo y se carga una tabla en formato CSV obtenida de una fuente pública (Kaggle), que contiene 500 observaciones con variables de calidad de agua (pH, temperatura, turbidez, oxígeno disuelto y conductividad). Finalmente, se aplica la función `summary()` para obtener un resumen estadístico inicial de las columnas numéricas de la tabla.

**Archivo:** Unidad 1/Clase 2/Video 9 - Modulo 2_ Comandos unite y separate (celdas).txt
**Fecha:** No identificada
**Temas:** Comando unite, Comando separate, manipulación de columnas en R, parámetro remove, separadores en columnas
**Resumen:** La clase muestra el uso de los comandos `unite` y `separate` en R para manipular columnas de un dataframe. Se explica cómo `unite` combina dos o más columnas en una nueva usando un separador definido (espacio, guión, etc.), y cómo el parámetro `remove` controla si se conservan o eliminan las columnas originales. Se advierte sobre el cuidado al usar `remove = TRUE` para no perder datos. Finalmente, se introduce `separate` como operación inversa a `unite`, permitiendo dividir una columna combinada en sus columnas originales a partir del separador utilizado.

<!-- ESTADO_RESUMEN
{
  "secciones": [
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
    ]
  ]
}
-->
