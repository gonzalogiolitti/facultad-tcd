# Material teórico-práctico para acompañar el video de Simulación de Muestras

_Fuente: https://virtual.ugr.edu.ar/mod/page/view.php?id=216949_

En R podemos generar valores de variables que sigan distintas distribuciones teóricas, para ello utilizaremos las funciones
r
de rbase. A continuación vamos a simular observaciones de diferentes distribuciones.
Distribución binomial:
Supongamos que tenemos la siguiente situación: "Una empresa que fabrica tornillos que se venden en cajas de 50 unidades, sabe que el 8% de cada caja presenta piezas con imperfecciones".
Primero debemos identificar la variable en estudio que puede ser "X_A: número de tornillos con imperfecciones por caja" o bien "X_B número de tornillos sin imperfecciones por caja".
Entonces podemos formalizar la notación de cada distribución, sabiendo que de forma genérica se tiene: X~B(n,p)
(se lee variable aleatoria X con distribución binomial de parametros n y p)
, donde
n
representa el número de ensayos Bernoulli y
p
la probabilidad de éxito.
X_A ~ B(50,0.08), 50 es el número de tornillos por caja y 0.08 la proporción de tornillos con imperfecciones por caja
X_B ~ B(50,0.92), 50 es el número de tornillos por caja y 0.92 la proporción de tornillos sin imperfecciones por caja
Supongamos que queremos simular el muestreo del experimento seleccionar 1 caja al azar y verificar que se mantiene la proporción. Para ello vamos a recurrir a la siguiente sintaxis:
rbinom(n,
# Número de observaciones a generar
size,
# Número de ensayos
prob)
# La probabilidad de éxito en cada ensayo
En nuestro caso sería:
binom_a_1<-rbinom(1,50,0.08)
En este caso simulamos la extracción de una caja con X tornillos imperfectos.
Si quisiéramos simular la selección de 10 cajas al azar, utilizaríamos el siguiente código:
binom_a_10<-rbinom(10,50,0.08)
De esta manera simulamos la extracción de 10 cajas, y nos indica cuántos tornillos imperfectos hay en cada una
.
Si ahora quisiéramos simular la selección de 10 cajas al azar pero para la variable B, es decir, número de tornillos sin imperfecciones, utilizaríamos el siguiente código:
binom_b_10<-rbinom(10,50,0.92)
De esta manera simulamos la extracción de 10 cajas, y nos indica cuántos tornillos sin imperfecciones hay en cada una.
Distribución de poisson:
Supongamos que tenemos la siguiente situación: "Un centro de atención telefónica recibe, en promedio, 15 llamadas en cada hora".
En este caso la variable en estudio que es "X: número de llamadas recibidas cada hora".
Entonces podemos formalizar la notación de cada distribución, sabiendo que de forma genérica se tiene: X~Pois(λ)
(se lee variable aleatoria X con distribución de Poisson de parametro λ)
, donde
λ
representa la cantidad de sucesos por unidad de tiempo. En este caso, sería: X ~ Pois(15).
Supongamos que queremos simular el muestreo del experimento "seleccionar al azar un registro y verificar que se mantiene el número de llamadas esperadas por hora". Para ello vamos a recurrir a la siguiente sintaxis:
rpois(n,
# Número de observaciones a generar
lambda,
# Sucesos esperados por unidad de tiempo
En nuestro caso sería:
pois_1<-rpois(1,15)
De esta manera simulamos la selección de un registro de X llamadas recibidas en una hora.
Si quisiéramos simular la selección de 16 registros al azar, utilizaríamos el siguiente código:
pois_16<-rpois(16,15)
De esta manera simulamos la selección de 16 registros, y la salida nos indica cuántas llamadas hay por hora.
Distribución de normal:
Supongamos que tenemos la siguiente situación: "Se mide la concentración de vitamina D en suero en personas de cierta población, se sabe que la variable se distribuye de manera normal con un valor promedio de 20 ng/ml y desvío de 5 ng/ml ."
En este caso la variable en estudio que es "X: concentración de vitamina D".
Entonces podemos formalizar la notación de cada distribución, sabiendo que de forma genérica se tiene: X~N(μ,σ)
(
se lee variable aleatoria X con distribución normal de parámetros μ y σ)
,
donde
μ
representa el valor promedio o esperado de la variable y
σ
el desvío estándar
.
En este caso, sería:
X ~ N(20,5).
Supongamos que queremos simular el muestreo del experimento "seleccionar al azar un registro de medición de vitamina D ". Para ello vamos a recurrir a la siguiente sintaxis:
rnorm(n,
# Número de observaciones a generar
media,
# Valor promedio informado
d,
# Desvio poblacional informado
En nuestro caso sería:
norm_10<-rnorm(10,20,5)
De esta manera simulamos la selección de 10 registros de determinaciones de vitamina D.
