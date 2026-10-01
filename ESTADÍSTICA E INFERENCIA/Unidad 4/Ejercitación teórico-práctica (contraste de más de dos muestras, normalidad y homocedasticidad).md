# Ejercitación teórico-práctica (contraste de más de dos muestras, normalidad y homocedasticidad)

_Fuente: https://virtual.ugr.edu.ar/mod/page/view.php?id=221198_

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
Altura= c(15.6,15.5,14.7,15.3,16.9,17.5,16.9,17.3,17.8,16.5,16.8,16.2))
Evaluamos normalidad:
lapply(split(datos$Altura,datos$Tratamiento),shapiro.test)
Como los 3 p-value son mayores a 0.05, consideramos normalidad y procedemos con el análisis de homocedasticidad (igualdad de variancias), necesario para utilizar el test de ANOVA o AOV.
lapply(split(datos$Altura,datos$Tratamiento),shapiro.test)
bartlett.test(list(
  datos$Altura[datos$Tratamiento=="Control"],
  datos$Altura[datos$Tratamiento=="Fertilizante 1"],
  datos$Altura[datos$Tratamiento=="Fertilizante 2"]))
Consideramos normalidad y homocedasticidad.
summary(aov(Altura~Tratamiento, datos))
# comparamos altura vs tratamiento
Al analizar la salida, encontramos la sentencia Pr(>F), que representa la probabilidad de encontrar un valor más extremo que el observado. Si esta probabilidad es menor al alfa, se rechaza la hipotesis nula.
Con un nivel de significancia del 5%, al menos uno de los tratamientos difiere.
Para poder evaluar cual es diferencia, utilizaremos un test de comparación múltiple del paquete agricolae
library(agricolae)
print(LSD.test(aov(Altura~Tratamiento, datos),"Tratamiento"))
Como ambos fertilizantes pertenecen al mismo grupo "b", podemos concluir que ambos fertilizantes tienen un efecto sobre la altura de las plantas, respecto del control. En ambos casos las alturas promedio son mayores a las del control.
