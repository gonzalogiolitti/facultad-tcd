# Apunte teórico-práctico regresión Logística Simple

_Fuente: https://virtual.ugr.edu.ar/mod/page/view.php?id=224403_

La regresión logística se utiliza cuando se quiere estimar la probabilidad de una variable cualitativa binaria en función de una variable cuantitativa.
Fue desarrollada por Cox en 1958 y modela el logaritmo de la probabilidad de pertenecer a cada uno de los dos grupos respuesta. Partiendo de la siguiente ecuación:
P(Y=k|X=x) = 1/(1+e
-(β0 + β1 x)
)
Vamos a trabajar con el famoso ejemplo del Titanic, donde debemos predecir la probabilidad de sobrevida según algunas variables.
library(tidyverse)
library(titanic)
library(caret)
data<-na.omit(titanic_train)
summary(data)
Podemos ver que el dataset incluye id, sobrevida, clase en la que viajó, nombre, genero, edad, hijos, padres, número de ticket, tarifa de pago, cabina en la que viajó y el lugar donde embarcó.
De todas estas variables, en nuestro análisis vamos a incluir sobrevida, clase en la que viajó, género, hijos, tarifa y lugar de embarco:
data.train <- data %>% select(PassengerId, Survived, Pclass, Sex, Age, SibSp, Fare, Embarked)%>%
mutate(	Survived = as.factor(Survived),
				Pclass = as.factor(Pclass),
				Sex = as.factor(Sex),
				Embarked = as.factor(Embarked)
Luego creamos las particiones de entrenamiento y prueba:
set.seed(123)
    train.index <- createDataPartition(data.train$Survived, p = 0.8, list = FALSE)
    train.data <- data.train[train.index, ]
    test.data <- data.train[-train.index, ]
Continuamos con el diseño del modelo:
modelo_1 <- glm(Survived ~ Pclass + Sex + Age + SibSp + Fare + Embarked, 
             data = train.data, 
             family = binomial)
summary(modelo_1)
Podemos ver que las variables tarifa y ciudad de embarco no son significativas. Vemos que el coeficiente β correspondiente a la edad es negativo. Esto debe ser interpretado como que un aumento de una unidad en la edad, disminuye 0.03 el logaritmo de las chances de sobrevida (probabilidad de sobrevivir).
Aunque haya variables que no sean significativas, están participando del modelo. Podmos generar otro modelo y compararlo:
modelo_2 <- glm(Survived ~ Pclass + Sex + Age + SibSp, 
             data = train.data, 
             family = binomial)
summary(modelo_2)
Vemos que el AIC mejoró un poco en el segundo modelo. De todas formas debemos generar las predicciones y comparar los aciertos para cada modelo
Modelo 1:
predictions <- predict(modelo_1, newdata = test.data, type = "response")
test.data$Predicted_Survived <- ifelse(predictions > 0.5,
                                       1,
                                       0)
confusionMatrix(as.factor(test.data$Predicted_Survived), as.factor(test.data$Survived))
Modelo 2:
predictions <- predict(modelo_2, newdata = test.data, type = "response")
test.data$Predicted_Survived <- ifelse(predictions > 0.5,
                                       1,
                                       0)
confusionMatrix(as.factor(test.data$Predicted_Survived), as.factor(test.data$Survived))
Vemos que el modelo 1 generó mejores predicciones.
Nos puede interesar realizar consultas para calcular la probabilidad de sobrevida de personas con características definidas. Construyamos una consulta para dos personas X e Y:
consulta <- data.frame(Age=c(30,25),
                      Sex=factor(c('female','male')),
                      Pclass=factor(c('1','3')),
                      SibSp=c(1,4))
rownames(consulta) <-  c('X','Y')
p.sobrevida <- data.frame(Probabilidad=predict(modelo_2,
                                              newdata=consulta,
                                              type='response'))
p.sobrevida
En este caso, la persona de sexo femenino de primera clase y con un hijo tiene mas chances de sobrevivir al hundimiento del titanic que un varón con 4 hijos en clase 3.
