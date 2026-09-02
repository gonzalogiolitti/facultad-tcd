# Material teórico-práctico para acompañar los videos de sumarización de datos

_Fuente: https://virtual.ugr.edu.ar/mod/page/view.php?id=213643_

1. Medidas de posición
Proporcionan información sobre la localización de los datos.
Valor mínimo: menor valor observado entre los datos.
Valor máximo: máximo valor observado entre los datos.
Percentiles: pα, es el valor de la variable que acumula el α de las observaciones ordenadas.
Las medidas de posición de tendencia central ofrecen información acerca de valores típicos o promedio de un conjunto de datos.
Media aritmética: es la suma de los valores observados dividida por el número total de datos.
Primer cuartil (Q1): primer cuartil, es el valor de la variable que acumula el 25% inferior de las observaciones ordenadas de menor a mayor.
Mediana (Q2): segundo cuartil, es el valor de la variable que acumula el 50% de las observaciones ordenadas de menor a mayor.
Tercer cuartil (Q3): tercer cuartil, es el valor de la variable que acumula el 75% inferior de las observaciones ordenadas de menor a mayor.
Modo/moda: es el valor de la variable que se presenta una mayor cantidad de veces.
2. Medidas de dispersión
Proporcionan información sobre la variabilidad de los datos.
Rango (R): es la máxima diferencia observada para la variable
Rango Intercuartil (RI): diferencia entre Q1 y Q3, en valor absoluto, representa al 50% central de los datos.
Variancia: medida de la variabilidad, en promedio, de la media.
Desvío Estándar: raíz cuadrada positiva de la variancia, su ventaja es que está expresada en las mismas unidades de la variable.
Coeficiente de Variación (CV): es la desviación estándar dividida por la media aritmética, representa la desviación estándar medida en unidades de la media aritmética.
3. Obtención de estadísticas descriptivas en R.
Utilizaremos nuevamente la base de datos de la unidad anterior.
setwd("~/Inferencia y estadística/Unidad 2/Clase 1")
# chequear previamente la dirección
WQT <- read.csv("~/Inferencia y estadística/Unidad 1/Clase 2/Water Quality Testing.csv")
colnames(WQT)<-c("ID","pH", "Temp.(ºC)", "Turbidez (NTU)", "DO (mg/L)", "Conductividad (µS/cm)")
# reasignación de nombres a las columnas
Consulta de las estadísticas por columna
mean(WQT$pH)
# de este modo obtendremos la media (promedio) de los datos incluidos en la columna pH
median(WQT$pH)
quantile(WQT$pH,probs = 0.5)
quantile(WQT$pH,probs = 0.25)
# también considerados de posición relativa
quantile(WQT$pH,probs = 0.75)
IQR(WQT$pH)
moda=function(x) {
# genero una función auxiliar para hallar la moda
y<- unique(x)
# genero un vector con todos los valores únicos, es decir no cuento los repetidos. Revisar la función unique en:https://www.rdocumentation.org/packages/base/versions/3.6.2/topics/unique
y[which.max(tabulate(match(x, y)))]
# pido el valor máximo del conteo hecho con la función tabulate a la vector generado por el match realizado entre el primer argumento al que le apliqué el segundo. Para ampliar esta función revisar: https://www.rdocumentation.org/packages/base/versions/3.6.2/topics/tabulate y https://www.rdocumentation.org/packages/base/versions/3.6.2/topics/match
}
moda(WQT$pH)     
table(WQT$pH)
# siempre chequear, ya que puede haber más valores
min(WQT$pH)  
max(WQT$pH)
range(WQT$pH)
var(WQT$pH)
sqrt(var(WQT$pH))
sd(WQT$pH)
CV<-function(x){
  y<-100*sd(WQT$pH)/mean(WQT$pH)
  return(y)
}
CV(WQT$y)
Consulta de las estadísticas en conjunto
Con las funciones apply
apply(WQT,2,mean)
# (data frame, fila/columna, función)
lapply(WQT,mean)
# el resultado tiene formato de fila
sapply(WQT, mean)
# el resultado es un vector
tapply(WQT$pH,WQT$`DO (mg/L)`>7,mean)
# (columna a aplicar la función, condición, función)
Con la función summary
summary(WQT)
Con la librería psych
install.packages("psych")
library(psych)
describe(WQT$pH)
describe(WQT)
