# Análisis discriminante lineal

_Fuente: https://virtual.ugr.edu.ar/mod/page/view.php?id=225492_

Cuando hablamos de análisis discriminante lineal (LDA), nos referimos al método supervisado de clasificación de variables cualitativas. De alguna manera con el LDA podemos estimar la probabilidad de que una observación, según variables predictoras, pertenezca a una categoría u otra. Retomando lo visto en regresión logística sería: P(Y=k|X=x), cuando la salida no es dicotómica, es decir hay más de una opción posible.
En el caso de que no se cumpla la covariancia homogénea se utilizara QDA (Quadratic) en vez de LDA.
El método LDA se aproxima al método de clasificación de Bayes, aunque comete un mayor ratio de error. Recordemos que el clasificador de Bayes nos permite obtener la probabilidad de que ocurra un evento, dado otro evento ya ocurrido.
Para poder utilizar el modelo LDA se debe cumplir una distribución normal de la/s variable/s y que haya una covarianza común o constante.
Vamos a trabajar con el dataset 'iris' de rbase.
library(tidyverse)
# para la manipulación de los datos y la elaboración de gráficos
library(ggpubr)
# para graficar la distribución de las variables según la clasificación
library(MASS)
# para los modelos lda, qda y knn
library(caret)
# para generar la matriz de confusión y la validación cruzada
library(rattle)
# para el set de datos 'wine'
library(biotools)
# para evaluar el cumplimiento de supuestos a través de la función 'boxM'
data<-(iris)
summary(iris)
Primero vamos a graficar las variables según la clasificación para ver si son buenas para predecir la especia:
ggarrange(ggplot(data, aes(x=Sepal.Length, fill=Species))+
geom_histogram(position="identity", alpha=0.5),
ggplot(data, aes(x=Sepal.Width, fill=Species))+
geom_histogram(position="identity", alpha=0.5),
ggplot(data, aes(x=Petal.Length, fill=Species))+
geom_histogram(position="identity", alpha=0.5),
ggplot(data, aes(x=Petal.Width, fill=Species))+
geom_histogram(position="identity", alpha=0.5),
nrow = 4, common.legend = TRUE)
Vemos que la variable Petal.Width separa bien las especies aunque no debemos desestimar a las demás. Para poder elegir el modelo LDA, QDA o KNN debemos verificar el cumplimiento de supuestos: normalidad e igualdad de variancias.
lapply(data[,1:4],shapiro.test)
# H0= las distribuciones son normales
Vemos que solo las variables del Sépalo cumplen el supuesto de normalidad. Por ello vamos a utilizarlas para testear el método paramétrico (LDA o QDA). Para elegir entre ellos debo corroborar la igualdad de covariancias:
boxM(iris[, 1:4], iris$Species)
# H0= las covariancias son iguales
Como no se cumple la igualdad de covariancias, utilizo el método QDA:
modelo.qda <- qda(formula = Species ~ Sepal.Width + Sepal.Length,
# en el caso que se hubiera cumplido la igualdad de covariancias en vez de utilizas 'qda' se utiliza 'lda'
data=data)
Luego genero la matriz de confusión para probar el método de clasificación:
predicciones <- predict(object = modelo.qda, newdata = iris[, -5])
# saco la clasificación, columna 5
confusionMatrix(predicciones$class, iris$Species)
# matriz de confusión
Puedo calcular el error porcentual en la predicción de la siguiente manera:
mean(iris$Species != predicciones$class) * 100
# diferencia porcentual entre la predicción y la verdadera clase
Supongamos que queremos incluir en el modelo todas las variables, no se cumpliría el supuesto de normalidad por lo que hay que recurrir al método no paramétrico KNN:
control <- trainControl(method = "cv", number = 10)
modelo.knn <- train(Species ~ ., data = data,
method = "knn",
tuneGrid = expand.grid(k = 1:10),
# Por ejemplo, probamos de 1 a 10 vecinos
trControl = control)
SI queremos hacer la validación cruzada para LDA o QDA utilizamos el objeto control antes creado y cambiamos el método:
modelo.qda.val <- train(Species ~ ., data = data,
method = "qda",
trControl = control)
