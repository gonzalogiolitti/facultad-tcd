# Apunte teórico-práctico validación cruzada manual (Lasso)

_Fuente: https://virtual.ugr.edu.ar/mod/page/view.php?id=224393_

Utilizando el mismo dataset que antes, veremos cómo realizar la validación cruzada de manera manual, es decir, separando datos para entrenamiento y prueba:
trainIndex <- createDataPartition(datos$Salary, p = 0.8, list = FALSE)
# llamar a la librería caret para generar esta partición
trainData <- datos[trainIndex, ]
testData <- datos[-trainIndex, ]
Separamos las variables X y Y para el conjunto de entrenamiento y prueba:
X_train <- model.matrix(Salary ~ ., trainData)[, -1]
Y_train <- trainData$Salary
X_test <- model.matrix(Salary ~ ., testData)[, -1]
Y_test <- testData$Salary
Ajustamos el modelo Lasso en el conjunto de entrenamiento:
lasso_model <- cv.glmnet(X_train, Y_train, alpha = 1)
Luego hacemos la predicción en el conjunto de prueba
lasso_pred <- predict(lasso_model, newx = X_test, s = "lambda.min")
Luego calculamos el RMSE y R² en el conjunto de prueba:
rmse_test <- sqrt(mean((Y_test - lasso_pred)^2))
r2_test <- 1 - sum((Y_test - lasso_pred)^2) / sum((Y_test - mean(Y_test))^2)
