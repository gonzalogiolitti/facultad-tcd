# Estimación por Máxima Verosimilitud en R (Dist. binomial)

_Fuente: https://virtual.ugr.edu.ar/mod/page/view.php?id=219146_

Recordemos que la distribución binomial tiene dos parámetros y se representa según: X~Binom (n, p). Siendo n la cantidad de ensayos y p la probabilidad de ocurrencia de un suceso dado.
Supongamos que queremos
estimar la probabilidad  (p) de que una pieza no sea defectuosa, dada una muestra de 100 lotes, cada uno con 10 piezas; sabiendo que en un muestreo previo de un lote encontraron 4 piezas defectuosas .
X~Binom (n = 10, p = 0.6), en este caso 4/10= es la frecuencia relativa de piezas defectuosas, por lo que 0.6 es la que corresponde a piezas no defectuosas.
set.seed(1234)
# para fijar los valores
datos = rbinom(n = 100,
# simulamos la repetición de 100 experimentos, los 100 lotes
size = 10,
# tamaño o extensión del experimento, 10 piezas por loteo
prob = 0.6)
# probabilidad estimada a través de la frecuencia relativa, de que la pieza no sea defectuosa
Recordemos que para generar el EMV, debíamos encontrar una maximización que lográbamos con cierto desarrollo matemático que incluía derivadas parciales, etc. En R, esta maximización se logra minimizando el negativo de la función de log-verosimilitud, creando la función NLV:
NLV<-function(p)
  {-sum(dbinom(datos,
              size=10,
              prob=p,
              log = TRUE))}
Utilizando la función 'mle' generamos el EMV:
EMV = mle(NLV, 
           start = list(p=0.6))
Que luego consultamos, utilizando la función 'summary' y nos da una salida similar a:
Maximum likelihood estimation
Call:
mle(minuslogl = NLV2, start = list(p = 0.6))
Coefficients:
   Estimate Std. Error
p 0.5780002 0.01561774
-2 log L: 363.7609
De esta manera, obtenemos la estimación puntual por máxima verosimilitud para p = 0.58
.
También podemos consultar la estimación por intervalo de confianza con la siguiente línea:
confint(EMV)
La salida tendrá la siguiente forma:
2.5 %   97.5 %
0.5472191 0.6083816
Indicando que:
IC(p,95%) = (0.55 ; 0.61)
