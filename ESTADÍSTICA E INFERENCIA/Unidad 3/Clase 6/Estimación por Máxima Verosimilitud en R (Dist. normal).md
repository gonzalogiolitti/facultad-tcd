# Estimación por Máxima Verosimilitud en R (Dist. normal)

_Fuente: https://virtual.ugr.edu.ar/mod/page/view.php?id=219054_

Recordemos que la distribución normal tiene dos parámetros y se representa según: X~Norm (μ, σ). Siendo μ el valor promedio y σ el desvío estándar.
Supongamos que queremos estimar el peso promedio de paquetes de harina en una producción. De un lote de 150 paquetes se determinó el peso promedio = 80 y su desvío = 10.
set.seed(1234)
# para fijar los valores
datos = rnorm(n = 150,
          mean = 80,
          sd = 10)
Recordemos que para generar el EMV, debíamos encontrar una maximización que lográbamos con cierto desarrollo matemático que incluía derivadas parciales, etc. En R, esta maximización se logra minimizando el negativo de la función de log-verosimilitud, creando la función NLV:
NLV<-function(mu,sigma)
  {-sum(dnorm(datos,
              mu,
              sigma,
              log = TRUE))}
Utilizando la función 'mle' generamos el EMV:
EMV <- mle(NLV, 
           start = list(mu=80, 
                        sigma=10))
Que luego consultamos, utilizando la función 'summary' y nos da una salida similar a:
Maximum likelihood estimation
Call:
mle(minuslogl = NLV, start = list(mu = 80, sigma = 10))
Coefficients:
       Estimate Std. Error
mu    79.025377  0.7808601
sigma  9.563542  0.5518375
-2 log L: 1103.183
De esta manera, obtenemos la estimación puntual por máxima verosimilitud para cada parámetro:
μ = 79.03
σ = 9.56
También podemos consultar la estimación por intervalo de confianza con la siguiente línea:
confint(EMV)
La salida tendrá la siguiente forma:
2.5 %   97.5 %
mu    77.480569 80.56243
sigma  8.578872 10.76115
Indicando que:
IC(μ,95%) = (77.48 ; 80.56)
IC(σ,95%) = (8.58 ; 10.76)
