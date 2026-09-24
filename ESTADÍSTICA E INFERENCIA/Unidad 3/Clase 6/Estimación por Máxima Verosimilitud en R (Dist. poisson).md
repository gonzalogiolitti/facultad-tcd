# Estimación por Máxima Verosimilitud en R (Dist. poisson)

_Fuente: https://virtual.ugr.edu.ar/mod/page/view.php?id=219176_

Recordemos que la distribución de poisson tiene un parámetro y se representa según: X~Pois (λ). Siendo λ el promedio de la característica estudiada por período de tiempo.
Supongamos que queremos
estimar el número promedio de errores producidos por un máquina en una fábrica, sabiendo que tras la recolección de 100 horas de operación, se observaron 3 errores por hora.
X~Pois (λ = 3)
set.seed(123456)
# para fijar los valores
datos = rpois(n = 100,
# simulamos la repetición de 100 experimentos, las 100 horas
lambsa = 3)
# valor de lambda observado en el muestreo
Recordemos que para generar el EMV, debíamos encontrar una maximización que lográbamos con cierto desarrollo matemático que incluía derivadas parciales, etc. En R, esta maximización se logra minimizando el negativo de la función de log-verosimilitud, creando la función NLV:
NLV<-function(lambda)
  {-sum(dpois(datos,
              lambda=lambda,
              log = TRUE))}
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
