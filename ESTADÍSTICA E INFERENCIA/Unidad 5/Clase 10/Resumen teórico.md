# Resumen teórico

_Fuente: https://virtual.ugr.edu.ar/mod/page/view.php?id=222516_

Como ha sido mencionado anteriormente, los
estimadores no paramétricos
son métodos utilizados para estimar ya sea una función o modelo o bien, un parámetro; sin suponer una forma de distribución.
A diferencia de los métodos paramétricos en los que tenemos un número fijo de parámetros, los métodos no paramétricos son más
flexibles y adaptativos
.
Para las regresiones, podemos utilizar los
estimadores de
Nadaraya-Watson
y
kNN (k-Nearest Neighbors)
para estimar las funciones
.
Estimador de Nadaraya-Watson (Regresión de Núcleo)
Es una técnica de suavizado que estima la relación entre una variable dependiente
Y
Y
y una variable independiente
X
X
utilizando una función de
núcleo o kernel como se mencionó en la unidad 3. La función de núcleo
es una función que asigna pesos los datos cercanos al valor de interés de
X
X
.
En una estimación no paramétrica de la recta de regresión, en la cual no se asume una forma específica para la relación
Y=f(X); e
l estimador de Nadaraya-Watson se define de manera similar a lo trabajado en la unidad 3 para el estimador de tipo núcleo:
f
^
(
x
)
=
∑
i
=
1
n
K
(
x
−
x
i
h
)
y
i
∑
i
=
1
n
K
(
x
−
x
i
h
)
\hat{f}(x) = \frac{\sum_{i=1}^{n} K\left(\frac{x - x_i}{h}\right) y_i}{\sum_{i=1}^{n} K\left(\frac{x - x_i}{h}\right)}
Con
K
función núcleo (kernel)
que asigna un peso decreciente a los puntos más alejados de
x.
Con
h
ventana,
parámetro de suavizado
o ancho de banda, que controla cuánta influencia tienen los puntos cercanos en la estimación.
Con
xi
valores de la variable independiente
X
y
y
i
​ los
valores correspondientes de
Y
.
Como se mencionó en la unidad 3, esta estimación es muy sensible al valor de
h, s
i
h
es muy grande, la estimación será demasiado suave pudiendo subajustar los datos, mientras que si
h
es muy pequeño, puede sobreajustar.
k-Nearest Neighbors (kNN)
El
kNN
es otro estimador no paramétrico que se utiliza en regresión y que se estima tomando una ponderación de los valores
Y
Y
de los k puntos más cercanos en los datos de entrenamiento.
Si
k
es muy pequeño, puede sobreajustar mientras que si
k
k
es muy grande, puede subajustar.
