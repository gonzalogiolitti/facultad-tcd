# Apunte teórico práctico (NP knn)

_Fuente: https://virtual.ugr.edu.ar/mod/page/view.php?id=223686_

Utilizaremos los datos de la clase pasada, "Salary data". Observaremos cómo se realiza la estimación por el método de vecinos cercanos que es utilizada luego en métodos de clasificación
l
ibrary(caret)
library(readr)
data<-read_csv("Descargas/Salary Data.csv")
colnames(data)<-c("Edad","Genero","N.Educativo", "Cargo", "Antigüedad", "Salario")
Una buena práctica es explorar el conjunto de datos utilizando un gráfico de dispersión:
plot(Salario~Antigüedad, data=data, main= "Gráfico de dispersión de los Salarios según antigüedad")
Utilizaremos la función 'knnreg' del paquete caret para generar el modelo que utilice 3 vecinos cercanos (k):
modelo1<-knnreg(Salario~Antigüedad, data=data, k=3)
Luego, generamos un nuevo conjunto de datos de
antigüedades
a las que les vamos a predecir el salario:
data.predic<-data.frame(Antigüedad=seq(1,30))
# la secuencia representa 30 antigüedades de 1 año la primera, a 30 años la última
Para poder visualizar la predicción, en el gráfico previamente hecho, utilizamos la función
'lines:
lines(seq(1,30), predict(modelo1,data.predic),col="blue")
Para comparar, podemos generar otros modelos con más y menos vecinos cercanos y ver los cambios producidos en la predicción:
modelo2<-knnreg(Salario~Antigüedad, data=data, k=8)
lines(seq(1,30), predict(modelo2, data.predic), col="red")
modelo3<-knnreg(Salario~Antigüedad, data=data, k=2)
lines(seq(1,30), predict(modelo3, data.predic), col="green")
Vale aclarar que este método es muy utilizado para algoritmos de clasificación, aquí vimos una aplicación muy sencilla.
