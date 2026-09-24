# Estimación Boostrap en R

_Fuente: https://virtual.ugr.edu.ar/mod/page/view.php?id=219401_

Vamos a realizar dos estimaciones por intervalo de confianza de la media de dos variables, utilizando bootstrap.

Primero vamos a generar los datos:
datos<-data.frame(
		 Vit.D = c(rnorm(35,20,5)),
  		 Colesterol = c(runif(35,140,300)))
Luego, hacemos el resampleo por bootstrap:
datos.boot<-matrix(sample(datos$Vit.D,
			 350,
# 350 datos resampleados
replace = TRUE),
# con reemplazo, que puedan salir seleccionados más de una vez
nrow =100,
# 100 muestras
ncol=35,
# de extensión 35 cada una
byrow=TRUE)
Calculamos la media para cada una de las 100 muestras de 35 datos cada una
datos.boot.mean<-apply(
  		      datos.boot,
                       1,
# 1 si cada muestra de extensión n está en cada fila y 2 si cada muestra de extensión n está en cada columna
mean)

Finalmente, calculamos el intervalo de confianza del 95%
quantile(datos.boot.mean,probs = c(0.025,0.975))
La salida tendrá la siguiente forma:
2.5%    97.5% 
18.04402 21.49421
IC(μ,95%) = (18.04 ; 21.49)

Ahora utilizaremos la otra variable.
Hacemos el resampleo por bootstrap:
datos.boot.2<-matrix(sample(datos$Colesterol,
			 350,
# 350 datos resampleados
replace = TRUE),
# con reemplazo, que puedan salir seleccionados más de una vez
nrow =100,
# 100 muestras
ncol=35,
# de extensión 35 cada una
byrow=TRUE)
Calculamos la media para cada una de las 100 muestras de 35 datos cada una
datos.boot.2.mean<-apply(
  		        datos.boot.2,
                         1,
# 1 si cada muestra de extensión n está en cada fila y 2 si cada muestra de extensión n está en cada columna
mean)
La salida tendrá la siguiente forma:
2.5%    97.5% 
212.7027 232.7578
Finalmente, calculamos el intervalo de confianza del 95%
quantile(datos.boot.2.mean,probs = c(0.025,0.975))
IC(μ,95%) = (212.7 ; 232.76)
