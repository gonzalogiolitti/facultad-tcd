# Ejercitación teórico-práctica (contraste de más de dos muestras, sin normalidad y/o homocedasticidad)

_Fuente: https://virtual.ugr.edu.ar/mod/page/view.php?id=221199_

Supongamos que queremos comparar el efecto de dos fertilizantes en la altura de las plantas.
Variable en estudio: altura de plantas
Unidad elemental: planta
Factor en estudio: fertilizante
Niveles del factor: control, fertilizante 1, fertilizante 2
En este caso tendríamos 3 muestras, por lo que recurrimos a un ANOVA (análisis de la variancia) que descomponela variabilidad total en
fuentes
de variación.
Nuestras hipótesis serían:
H0) no hay efecto del factor, todas las alturas son iguales, en promedio, sin importar el nivel del factor
H1) hay efecto del factor, al menos una de las alturas difiere, en promedio, en alguno de los niveles del factor
Primero creamos la tabla con los datos:
datos<-data.frame(
Planta = seq(1,12,1),
Tratamiento = c(rep("Control",4),rep("Fertilizante 1",4),rep("Fertilizante 2",4)),
Altura= c(11.92,14.60,13.55,13.81,8.29,8.13,16.30,9.17,15.59,12.76,9.97,12.22))
Evaluamos normalidad:
lapply(split(datos$Altura,datos$Tratamiento),shapiro.test)
Como al menos uno de los 3 p-value es menor a 0.05, no podemos considerar normalidad y por lo tanto debemos utilizar otro análisis distinto a ANOVA o AOV. 0
kruskal.test(Altura~Tratamiento, datos)
Como el p-value es mayor al nivel de significación, rechazamos H0 y aceptamos la hipótesis alternativa de que ninguno de los tratamientos difiere.
Con un nivel de significancia del 5%, las alturas promedio son iguales sin importar el tratamiento.
En el caso que nos hubiera dado significativo, es decir que hay diferencia; ara poder evaluar cual es diferencia, utilizaremos un test de comparación múltiple del paquete pgirmess.
library(pgirmess)
kruskalmc(datos$Altura,datos$Tratamiento, paired=FALSE)
En caso de que hubiera diferencia, en la columna de stat.sig, nos idicaría entre qué grupos hay diferencia.
