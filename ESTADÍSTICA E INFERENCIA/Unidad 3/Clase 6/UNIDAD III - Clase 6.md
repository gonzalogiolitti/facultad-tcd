<!-- página 1 -->

Estadística inferencial
TECNICATURA 
UNIVERSITARIA EN CIENCIAS 
DE DATOS
2024
Esp. Aylén Avila

---

<!-- página 2 -->

●
Estimadores paramétricos y no paramétricos. 
●
Estimación puntual. 
●
Sesgo, varianza y Error Cuadrático Medio (Mean Squared Error). 
●
Estimación en modelos paramétricos con máxima verosimilitud y momentos. 
●
Regiones de conﬁanza e intervalos de conﬁanza. 
●
Estimación no paramétrica: Bootstrapping y de densidad de núcleo. 
●
Árboles de decisión.
Contenidos
UNIDAD III
Estimación

---

<!-- página 3 -->

Sea X1,.. Xnun conjunto de variables aleatorias independientes e idénticamente distribuidas con distribución F 
(genérica, desconocida), y x1, … xn los valores observados o realizaciones correspondientes. 
Aunque la distribución F no es conocida, se supone que pertenece a una familia de posibles distribuciones. 
Formular un modelo estadístico es simplemente especiﬁcar cuál es la familia de posibles distribuciones. 
Un modelo es paramétrico si cada distribución de la familia es totalmente conocida salvo por el valor de un 
parámetro.
Cuando se trabaja con un modelo paramétrico, el objetivo general de la inferencia estadística es extraer 
información sobre el parámetro a partir de las observaciones .
Modelos paramétricos y no paramétricos
UNIDAD III
Estimación

---

<!-- página 4 -->

Estimación paramétrica, en la que a priori se asume una determinada distribución de la variable y se emplean 
los datos en la estimación de los correspondientes parámetros. 
La estimación no paramétrica, que no asume ninguna hipótesis inicial y utiliza únicamente la información 
proporcionada por la muestra.
Métodos de estimación paramétricos y no paramétricos
UNIDAD III
Estimación

---

<!-- página 5 -->

UNIDAD III
Estimación
Fuente: Borrajo García, 2014.
Disponible en el siguiente link
Métodos de estimación paramétricos y no paramétricos

---

<!-- página 6 -->

La estadística inferencial es la parte de la estadística dedicada a la formulación de supuestos y estimaciones, 
para hacer predicciones y poder sacar conclusiones de los datos obtenidos con el estudio de las muestras. Y así, 
poder tomar decisiones con base cientíﬁca (Azzimonti, 2003).
Las razones para efectuar una estimación en una población, en lugar de estudiarla directamente pueden ser: que el 
tamaño de la población sea inﬁnito, que el muestreo sea destructivo, que la población sea ﬁnita pero demasiado 
grande, y otras razones como costo o tiempo. Por esto parece más práctico tomar muestras y efectuar estimaciones 
sobre las mismas. 
Hay dos maneras básicas de hacer estimaciones:
●
Estimaciones puntuales: se estima el parámetro desconocido con un solo valor.
●
Estimaciones por intervalos: se estima el parámetro desconocido con un intervalo, el cual tiene asociado una 
cierta probabilidad de ocurrencia. Se deﬁne un nivel de conﬁanza (1-α) y, de acuerdo a la información 
disponible sobre la población (distribución y parámetros) se utilizan valores tabulados.
Estimación
UNIDAD III
Estimación

---

<!-- página 7 -->

Características de un buen estimador: Sesgo, varianza y cuadrado medio del error del estimador
UNIDAD III
Estimación
Un estimador debe estar “próximo” en algún sentido al valor verdadero del parámetro desconocido. De manera 
formal, se dice que θ (lease teta sombrero) es un estimador de θ (teta, parámetro a estimar).
Si el valor esperado del estimador (θ) es igual al parámetro a estimar (θ), formalmente sería: (E(θ)=θ), se dice 
que el estimador es insesgado.
^
^
^
^
Sesgo(θ) = E(θ)-θ
^
Varianza (θ) = E((θ-E(θ))2)
^
CME (θ) = E((θ-θ)2)
^
CME (θ) = Var(θ)- Sesgo(θ)
^
^
^
^
^
Un buen estimador es insesgado, su es esperanza es igual al parámetro a estimar, y consistente, su varianza 
tiende a cero cuando n tiende a inﬁnito. Entre varios estimadores, será más eﬁciente el que minimice el cociente 
de CME de los estimadores a comparar.

---

<!-- página 8 -->

Momentos y máxima verosimilitud
UNIDAD III
Estimación
Métodos paramétricos

---

<!-- página 9 -->

El método de momentos fue propuesto por K. Pearson alrededor de 1894.
El método de máxima verosimilitud propuesto por Gauss primero aunque mayormente difundido y perfeccionado 
por Fisher alrededor de 1920.
Método de momentos
UNIDAD III
Estimación

---

<!-- página 10 -->

El método de momentos
Sea una variable aleatoria con función de probabilidad px(x) para variables discretas o fx(x) para continuas, 
denominamos “momento de orden k” a la esperanza de Xk.
E(Xk) = ∑xkpx(x)
E(Xk) = ഽxkfx(x) dx
Por deﬁnición, dada una muestra aleatoria X1,X2,.....Xn, el “momento muestral de orden k” es ∑Xk/n
Sea X1, X2, …, Xn una muestra aleatoria de tamaño n de X cualquier variable aleatoria cuya función de 
probabilidad puntual o de densidad de probabilidad depende de m parámetros; los estimadores de momentos 
de cada parámetro son los estimadores que se obtienen igualando m momentos poblacionales con los 
momentos muestrales.
Veamos un ejemplo…
Estimadores de momentos
UNIDAD III
Estimación

---

<!-- página 11 -->

Sea una población con distribución normal, encontrar los estimadores para sus parámetros por el método de 
momentos. (Recordando, X~N(μ y σ))
La función de densidad de probabilidad de una variable de distribución normal es: 
cuyos parámetros son μ y σ. Al haber dos parámetros, tendremos dos momentos y por lo tanto dos ecuaciones.
Estimadores de momentos
UNIDAD III
Estimación
primer momento poblacional 
segundo momento poblacional 
primer momento muestral
segundo momento muestral

---

<!-- página 12 -->

El paso siguiente es igualar los momentos poblacionales y muestrales
Ejemplo del método de estimadores de momentos
UNIDAD III
Estimación
Luego reemplazamos y reordenamos para obtener la 
solución del sistema

---

<!-- página 13 -->

El método de máxima verosimilitud consiste en estimar el parámetro mediante el valor que hace más
verosímiles los datos que realmente hemos observado (Efron, B. 2024).
Hay una función de verosimilitud diferente para cada muestra, pero lo que interesa es cómo varía la verosimilitud al variar 
el valor del parámetro, puesto que la muestra ya ha sido observada y, por lo tanto, está ﬁja.
Sean X1, X2,....Xn variables aleatorias con función de probabilidad conjunta px(x1,x2,...xn) o función de densidad conjunta 
fx(x1,x2,...xn) que depende de k parámetros. Cuando (x1,x2,...xn) son los valores observados y la función de probabilidad o 
densidad conjunta se considera función de los k (θ1, θ2,...θk) parámetros, se denomina función de verosimilitud y se denota 
L(θ1, θ2,...θk)
Los estimadores de máxima verosimilitud (EMV) θ1, θ2,...θk son los valores de los estimadores que maximizan la función 
de verosimilitud.
SI la variable es continua, la función será:
SI la variable es discreta, la función será:
Estimadores de máxima verosimilitud
UNIDAD III
Estimación
k
k
P(xi)

---

<!-- página 14 -->

Sea una variable con distribución binomial, encontrar los estimadores para sus parámetros por el método de máxima 
verosimilitud. (Recordando, X~Binom(n,p))
Primero escribimos la función de verosimilitud (L) del parámetro que queremos estimar:
Ejemplo de estimadores de máxima verosimilitud
UNIDAD III
Estimación
k
P(xi)
n
xi
k
   pxi(1-p)n-xi
n
xi
Luego, reemplazamos por la función de probabilidad binomial (P(X=xi) =         pxi(1-p)n-xi, obteniendo la siguiente 
expresión:
Ahora que tenemos la función de verosimilitud, tendremos que buscar el valor que maximice a la función, 
matemáticamente debemos derivar la función. Luego de un trabajo matemático sobre la función, aplicación de logaritmo, 
derivada respecto de p (parámetro a estimar) e igualar a cero (para encontrar el máximo), llegamos a:
k
p =         /k n = x/n
Finalmente, pMV =  x/n
^
El estimador máximo verosímil de p (pMV) es la media 
muestral (x) sobre n (el otro parámetro de la binomial)
^

---

<!-- página 15 -->

Estimación por intervalo de conﬁanza
UNIDAD III
Estimación
La gran ventaja de la estimación por intervalo de conﬁanza, es la posibilidad de una 
conﬁanza y un error (semiamplitud del intervalo) de la estimación que se está 
realizando.
Se construye un intervalo (límite superior e inferior) de manera que, al reiterar el 
muestreo y construir inﬁnitos intervalos (uno por muestra); el tanto por ciento 
contendrá el verdadero valor del parámetro a estimar.
El Intervalo de Conﬁanza (IC) proporciona los valores del parámetro más compatibles con la información muestral.
IC parámetro, nivel de conﬁanza %= (Límite inferior ; Límite superior)
Interpretación: Con un nivel de conﬁanza de tanto %, el intervalo (LI; LS) contiene al verdadero valor del 
parámetro.

---

<!-- página 16 -->

Estimadores puntuales y por intervalo de conﬁanza
UNIDAD III
Estimación
Parámetro ( θ)
Estimador puntual ( θ)
Estimación por intervalo de conﬁanza
μ
x
σ
s
π (p)
h
^
_

---

<!-- página 17 -->

Bootstrap y densidad de núcleo
UNIDAD III
Estimación
Métodos no paramétricos

---

<!-- página 18 -->

Bootstrap
UNIDAD III
Estimación
El bootstrap es un método utilizado para aproximar la distribución de un estadístico en el muestreo, introducido en 1979 
por Bradley Efron. 
El método consiste en reemplazar la verdadera distribución de los datos por la distribución empírica muestral para 
estimar cualquier cantidad que dependa de F. 
Sus principales ventajas son: no necesitar normalidad de la distribución de la variable y permite calcular el error típico de 
cualquier estadística.

---

<!-- página 19 -->

Bootstrap
UNIDAD III
Estimación
Supongamos que tenemos una muestra aleatoria: x = x1; x2 ;....xn 
La muestra bootstrap se deﬁne como aquella x* = (x1*; x2 *;....xn *) que se obtiene luego de muestrear n veces con 
reemplazamiento entre los datos originales x1; x2 ;....xn 
Veamos un ejemplo:
Tenemos una muestra de n=5; x=x1; x2 ; x3; x4; x5 , unas posibles muestras de bootstrap serían las siguientes:
x*1= (x2; x3; x5; x4; x5)
x*2= (x4; x1; x2; x1; x3)
x*3= (x1; x3; x2; x1; x5)
Para cada nueva muestra bootstrap podremos determinar una estadística, por ejemplo la media, y luego obtener la 
estadística de ese muestreo.

---

<!-- página 20 -->

Estimador de densidad de núcleo
UNIDAD III
Estimación
El estimador tipo núcleo
Dada una muestra aleatoria X1, · · · , Xn de la variable de interés X con densidad f, el método más habitual en
estimación no paramétrica de la densidad es el denominado estimador tipo núcleo: 
Con K función núcleo, real, no 
negativa e integrable, unimodal y 
simétrica respecto al origen, tambien 
llamado kernell.
Con h, ventana o parámetro 
suavizado, positivo.

---

<!-- página 21 -->

Estimaciones
¡Manos a la obra!
UNIDAD III
Estimación