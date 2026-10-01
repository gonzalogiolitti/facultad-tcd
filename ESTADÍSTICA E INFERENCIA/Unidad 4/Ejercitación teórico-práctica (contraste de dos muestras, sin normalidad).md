# Ejercitación teórico-práctica (contraste de dos muestras, sin normalidad)

_Fuente: https://virtual.ugr.edu.ar/mod/page/view.php?id=222966_

Supongamos que queremos determinar si hay diferencias en la concentración de ácido úrico promedio en personas que pertenecen a dos grupos diferentes.
Variable en estudio:concentración de ácido úrico
Unidad elemental: persona
Factor en estudio: grupo al que pertenece
Niveles del factor: grupo 1 y grupo 2
Planteamos la siguiente
Hipótesis nula: no hay diferencia en la expresión de ácido úrico
Hipótesis alternativa: hay diferencia en la expresión de ácido úrico
Como primer paso generamos los datos
datos<-data.frame(
  Paciente = seq(1,100,1),
  Grupo = c(rep("Grupo 1",50),rep("Grupo 2",50)),
  Ac.Urico= c(runif(50,3,10),runif(50,3,10)))
Luego, vamos a realizar un test de normalidad, es decir, vamos a corroborar si
hay evidencia para suponer que el conjunto de datos proviene de una distribución normal
lapply(split(datos$Ac.Urico,datos$Grupo),shapiro.test)
La salida es la siguiente:
Shapiro-Wilk normality test
data:  X[[i]]
W = 0.94733, p-value = 0.02653
$`Grupo 2`
	Shapiro-Wilk normality test

data:  X[[i]]
W = 0.95601, p-value = 0.06051
Como ambos p-value son menores a 0.05, que es nuestro nivel de significación,
rechazamos
la hipótesis de que los datos siguen una distribución normal.
El paso siguiente entonces, es realizar un test W (de Wilcoxon):
wilcox.test(
  datos$Ac.Urico[datos$Grupo=="Grupo 1"],
  datos$Ac.Urico[datos$Grupo=="Grupo 2"],
  paired = FALSE,
  alternative = "two.sided",
  conf.level = 0.95)
La salida es la siguiente:
Wilcoxon rank sum test with continuity correction
data:  datos$Ac.Urico[datos$Grupo == "Grupo 1"] and datos$Ac.Urico[datos$Grupo == "Grupo 2"]
W = 1315, p-value = 0.6566
alternative hypothesis: true location shift is not equal to 0
En la salida tenemos un p-value > 0.05, entonces no tenemos evidencia para rechazar la hipótesis nula.
Conclusión: Con un nivel de significación del 5% la concentración de ácido úrico no difiere en ambos grupos
