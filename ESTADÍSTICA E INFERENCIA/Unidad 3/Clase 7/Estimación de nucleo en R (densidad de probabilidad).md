# Estimación de nucleo en R (densidad de probabilidad)

_Fuente: https://virtual.ugr.edu.ar/mod/page/view.php?id=219418_

Vamos a realizar la estimación de la densidad de probabilidad a partir de un conjunto de datos, utilizando el método de núcleo (Kernel).
Primero vamos a generar los datos, o reutilizar los ya generados en el ejercicio anterior:
datos<-data.frame(
		 Vit.D = c(rnorm(35,20,5)),
  		 Colesterol = c(runif(35,140,300)))
Utilizando la función 'hist' generamos el histograma de frecuencias de los datos previamente simulados:
hist(datos$Colesterol,
     ylab="Frecuencia Absoluta",
     xlab="Concentración de Colesterol", 
     main="Histograma de frecuencias")
Podemos ver el histograma de salida en el siguiente
link
.
Lugo, utilizando la función 'density' obtenemos una función suavizada, generada por
default
:
plot(density(datos$Colesterol),
     main="Densidad de probabilidad estimada")
Si observamos la salida (en el siguiente
link
), vemos que estableció un ancho de banda (h ) en 22.52. Pero podemos ir modificando los parámetros mencionados en la teoría como la función de núcleo y el ancho de ventana:
plot(density(datos$Colesterol,
kernel = "rectangular",
# elijo la forma de la función de núcleo
bw=2),
# elijo el ancho de banda h
main="Densidad de probabilidad estimada",
col="darkblue")
Veamos qué sucede si modificamos la función de núcleo:
lines(density(datos$Colesterol,
kernel = "gaussian",
# elijo otra forma de la función de núcleo
bw=2),
# mantengo el ancho de banda h
col="darkgreen")
Veamos qué sucede si modificamos el ancho de banda:
lines(density(datos$Colesterol,
kernel = "rectangular",
# mantengo la forma de la función de núcleo
bw=6),
# cambio el ancho de banda h
col="darkred")
Existen métodos ya definidos, que me permiten elegir el mejor ancho de banda, por ejemplo nrd0 y SJ:
density(datos$Colesterol, bw = "nrd0")
# por default el kernel es gaussiano
density(datos$Colesterol, bw = "SJ")
Para más información sobre estas funciones de selección del argumento 'bw' pueden revisar la siguiente
página
.
