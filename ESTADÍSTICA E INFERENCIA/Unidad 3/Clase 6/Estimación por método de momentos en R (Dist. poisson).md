# Estimación por método de momentos en R (Dist. poisson)

_Fuente: https://virtual.ugr.edu.ar/mod/page/view.php?id=220185_

Recordemos que la distribución de poisson tiene un parámetro y se representa según: X~Pois (λ). Siendo λ el promedio de la característica estudiada por período de tiempo.
Supongamos que queremos
estimar el número promedio de errores producidos por un máquina en una fábrica, sabiendo que tras la recolección de 100 horas de operación, se observaron 3 errores por hora, utilizando el
método de momentos
. En este caso tenemos la estimación puntual,
λsombrero, = 3.
set.seed(123456)
# para fijar los valores
datos = rpois(n = 100,
# simulamos la repetición de 100 experimentos, las 100 horas
lambda = 3)
# valor de lambda observado en el muestreo
Recordemos que en el métodos de momentos, se igualaban momentos muestrales a poblacionales con la cantidad de momentos como parámetros se quieran estimar. En nuestro caso, la distribución de poisson tiene un único parámetro (λ), por lo que tendremos un solo momento:
momento<-rep(0,1000)
for (i in 1:1000){x=dpois(1000,3)momento[i]=mean(x)}
Utilizando la función 'mle' generamos el EMV:
EMV = mle(NLV,
start = list(lambda=3))
Que luego consultamos, utilizando la función 'summary' y nos da una salida similar a:
Maximum likelihood estimation
Call:
mle(minuslogl = NLV2, start = list(lambda = 3))
Coefficients:
       Estimate Std. Error
lambda 3.090003  0.1757841
-2 log L: 392.6751
De esta manera, obtenemos la estimación puntual por máxima verosimilitud para λ = 3.09
También podemos consultar la estimación por intervalo de confianza con la siguiente línea:
confint(EMV)
La salida tendrá la siguiente forma:
2.5 %   97.5 % 
2.758172 3.447472
Indicando que:  IC (λ, 95%) = (2.76; 3.45)
