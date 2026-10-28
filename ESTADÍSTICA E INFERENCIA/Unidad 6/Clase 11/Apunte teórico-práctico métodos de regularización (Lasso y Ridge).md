# Apunte teórico-práctico métodos de regularización (Lasso y Ridge)

_Fuente: https://virtual.ugr.edu.ar/mod/page/view.php?id=224389_

Vimos en la unidad 5 que el mejor ajuste de una regresión lineal se encuentra utilizando el método de los mínimos cuadrados, es decir, minimizar la suma de los cuadrados de los residuos.
Lo que sucede cuando tengo muchas variables predictoras es que puede forzarse el ajuste, para ello tenemos técnicas como Ridge regression o Lasso.
El paquete
Glmnet
adapta modelos lineales generalizados y otros vía método de máxima verosimilitud penalizada. Este método utiliza dos penalizaciones α y λ que varían entre 0 y 1.
Para llevar adelante la regularización se utilizan las regresiones de lasso y ridge dependiendo de si los coeficientes son pequeños o grandes. En general, se recomienda utilizar lasso.
Vamos a utilizar el dataset llamado "
Salary_Data
", primero debemos garantizar que estén correctamente designadas las variables cualitativas como factores:
names(datos)
datos$Gender <- as.factor(datos$Gender)
datos$`Education Level` <- as.factor(datos$`Education Level`)
Luego debemos separar las variables X: explicativas Age, Gender, Education Level, Years of Experience; e Y: respuesta, Salary en este caso.
X <- model.matrix(Salary ~ Age + Gender + `Education Level` + `Years of Experience`, datos)[,-1] # evita redundancia
Y <- datos$Salary
Utilizando la función 'cv.glmnet' ajustamos a los dos modelos indicando el alpha:  modelo Ridge (alpha = 0) o modelo Lasso (alpha = 1). Esta función incluye la validación cruzada por defecto. Divide los datos en 10 subconjuntos y entrena al modelo con 9, validándolo con el restante. Luego itera el proceso para todos los subconjuntos. La validación cruzada de manera manual se muestra en la próxima práctica.
ridge_model <- cv.glmnet(X, Y, alpha = 0)
lasso_model <- cv.glmnet(X, Y, alpha = 1)
Con la función 'predict' generamos las predicciones de cada modelo:
ridge_pred <- predict(ridge_model, newx = X, s = "lambda.min")
lasso_pred <- predict(lasso_model, newx = X, s = "lambda.min")
Como se mencionó anteriormente podemos evaluar el RMSE o el R
2
para elegir el mejor modelo, pero antes debemos crear las funciones para su cálculo:
rmse <- function(actual, predicted) {
sqrt(mean((actual - predicted)^2))
}
r2 <- function(actual, predicted) {
1 - sum((actual - predicted)^2) / sum((actual - mean(actual))^2)
}
Calcular los RMSE y R² para ambos modelos y los comparamos
ridge_rmse <- rmse(Y, ridge_pred)
lasso_rmse <- rmse(Y, lasso_pred)
ridge_r2 <- r2(Y, ridge_pred)
lasso_r2 <- r2(Y, lasso_pred)
Para conocer la estimación de la regresión por estos métodos se obtienen con la función 'coef':
ridge_coef <- coef(ridge_model, s = "lambda.min")
ridge_coef_df <- as.data.frame(as.matrix(ridge_coef))
lasso_coef <- coef(lasso_model, s = "lambda.min")
lasso_coef_df <- as.data.frame(as.matrix(lasso_coef))
colnames(ridge_coef_df) <- "Coeficientes_Ridge"
colnames(lasso_coef_df) <- "Coeficientes_Lasso"
print(ridge_coef_df)
print(lasso_coef_df)
En este caso nos quedamos con la regresión lasso que tiene un mejor valor predictivo y la función en este caso queda de la siguiente manera:
Salario = -45911 + 2790 Edad + 8201 Genero Masculino + 17872 Nivel de Educación Master + 23970  Nivel de Educación PhD + 2971  Años de experiencia
