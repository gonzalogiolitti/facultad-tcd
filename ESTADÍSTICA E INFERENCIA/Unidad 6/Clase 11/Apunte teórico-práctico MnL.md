# Apunte teórico-práctico MnL

_Fuente: https://virtual.ugr.edu.ar/mod/page/view.php?id=224336_

Vamos a utilizar el paquete 'easynls' (Easy Nonlinear Model, diseñado para evaluar modelos no linales) sobre el mismo conjunto de datos de salarios, utilizado en la unidad anterior.
Llamamos a la librería, cargamos y exploramos los datos para analizar las variables
Salary
y
Age
:
library(easynls)
library(readr)
datos <- read_csv("~/Downloads/archive (2)/Salary Data.csv")
summary(datos)
Luego, utilizando la función 'nlsfit' ajustamos los datos a un modelo de los posibles:
nlsfit(datos[,c(1,6)],
# los datos a utilizar están en las columnas 1 (Age) y 6 (Salary)
model=1)
# el modelo 1 es el lineal simple, se pueden explorar todos los modelos con el comando  help("nlsfit")
En la salida, tenemos los coeficientes a y b con sus valores de p y el valor de r
2
que nos da una medida de en qué porcentaje x explica a y; es decir, el salario es explicado por la edad.
Ahora bien, podemos probar un modelo cuadrático:
nlsfit(datos[,c(1,6)],
model=2)
# el modelo 2 es el cuadrático, insisto en que se pueden explorar todos los modelos con el comando  help("nlsfit")
En este caso vemos que se mejora el AIC aunque no se modifica mucho el R
2
.
Podemos seguir probando otros modelos como por ejemplo el exponencial, pero ya requiere que seteemos un argumento más que es el start:
nlsfit(datos[,c(1,6)],
model=6,
# modelo exponencial
start = c(350,0.1))
# menor valor de la variable y, valor menor a 1, exponencial
Vemos que el AIC aumenta, por lo que la mejor forma de modelar este conjunto de datos es una cuadrática.
