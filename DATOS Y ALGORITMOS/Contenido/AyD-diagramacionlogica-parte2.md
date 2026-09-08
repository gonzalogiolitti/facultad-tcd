<!-- página 1 -->

Ejercicio
Problema 10: Se lee desde el teclado el valor de un ángulo 
en grados. Se desea mostrar el coseno y el seno.
Problema 11: Se ingresan por teclado los catetos de un 
triángulo rectángulo. Se desea hallar y mostrar su 
hipotenusa.
Problema 12: Ingresar un número natural por teclado. Se 
desea saber y mostrar si es par o impar.
Problema 13: Ingresar un número entero para saber si es 
divisible por 7 y es mayor a 40.

---

<!-- página 2 -->

Problema 10

---

<!-- página 3 -->

Problema 11

---

<!-- página 4 -->

Problema 12

---

<!-- página 5 -->

Problema 13

---

<!-- página 6 -->

Ejercicio
Problema 14: Mostrar en letras el número de la cara de un 
dado obtenido al azar.

---

<!-- página 7 -->

Ejercicio 14

---

<!-- página 8 -->

●
Al momento de resolver problemas, es muy común encontrarnos 
con situaciones repetitivas.
●
Pensemos en el siguiente problema: se desea determinar el 
promedio de las edades de 5 personas. Una solución posible 
podría ser leer 5 edades (variables) y luego calcular su 
promedio. Ahora bien, ¿qué sucede si en lugar de 5 personas 
son 100 o un valor N que ingresa el usuario?
●
No es lo mismo hallar el promedio de tres números que el 
promedio de 100 o de un valor N que ingresa el usuario. Veamos 
justamente cómo podríamos resolver el problema propuesto con 
las herramientas trabajadas hasta el momento para tener una 
mejor idea.
Estructuras de control de 
repetición

---

<!-- página 9 -->

Ejercicio
Problema: Ingresar 10 números (edades de personas) y 
luego hallar y mostrar su promedio.

---

<!-- página 10 -->

Solución 1

---

<!-- página 11 -->

Solución 2

---

<!-- página 12 -->

●
Cuando se desea ejecutar un conjunto de acciones un 
determinado número de veces, usamos la sentencia «para».
●
En estos casos se requiere que conozcamos por anticipado el 
número de repeticiones.
Sentencia “para”

---

<!-- página 15 -->

Problema 17: Hallar la sumatoria de 8 números generados 
al azar. Los números deben comprender el siguiente rango 
de valores [1...20].
Ejercicio

---

<!-- página 16 -->

Ejercicio
1  .   8   .  1

---

<!-- página 17 -->

●
Es una variable que, como su nombre lo indica, va a ser usada 
para sumar sobre sí misma un conjunto de valores. Cuando se 
utiliza dentro de un ciclo de repetición “Para”, al finalizar el 
mismo, esta variable contendrá la sumatoria de todos los valores 
que cumplen una determinada condición (también puede servir 
para decrementar valores variables). Es necesario haber 
inicializado su valor antes del comienzo de un ciclo de repetición 
«para».
●
La inicialización consiste en asignarle al sumador un valor inicial, 
es decir el valor desde el cual necesitamos se inicie la sumatoria 
(por lo general comienzan en cero).
●
Ejemplo: S = 0, S = S +N
Variables como acumuladores

---

<!-- página 18 -->

Ejemplo:
S <- 0 (inicialización)
S <- S +N (acumulador)
Variables como acumuladores

---

<!-- página 19 -->

●
Es una variable que se encuentra en ambos miembros de una 
asignación a la que se le suma un valor constante. Un contador 
es una variable cuyo valor se incrementa o decrementa en una 
cantidad constante cada vez que se produce un determinado 
suceso, acción o iteración. Los contadores se utilizan con la 
finalidad de registrar la cantidad de sucesos, acciones o 
iteraciones internas en un bucle, proceso, subrutina o donde se 
requiera cuantificar. Como cualquier variable es necesario 
inicializarla antes del comienzo de un ciclo de repetición.
●
La inicialización implica darle un valor inicial, en este caso, el 
número desde el cual necesitamos se inicie el conteo (por lo 
general comienzan en cero).
Variable contadora

---

<!-- página 20 -->

Ejemplo:
C <- 0 (inicializa la variable C en 0)
C <- C+1 (incrementar)
H <- H-1 (decrementar)
Variable contadora

---

<!-- página 21 -->

Problema 18: En una veterinaria se desea saber el 
promedio de edad de gatos y perros (por separados) que 
fueron asistidos durante un mes. En total se registraron 30 
animales y la veterinaria solo atiende gatos y perros.
Ejercicio

---

<!-- página 22 -->

Ejercicio

---

<!-- página 23 -->

Ejercicio
Problema 19: Se pide lo mismo que el problema anterior, 
pero la diferencia radica en que no solo la veterinaria 
atiende gatos y perros, puede que sean otros animales 
también. Justamente lo que se pide es además contar la 
cantidad de esos animales que no son ni gatos y ni perros.

---

<!-- página 24 -->

Ejercicio

---

<!-- página 25 -->

Ejercicio
Problema 20: Solicitar al usuario que ingrese un número 
entero N, luego generar en forma aleatoria N números 
enteros comprendidos entre 1 y 100 y determinar cuántos 
son pares y cuántos impares.

---

<!-- página 26 -->

Ejercicio

---

<!-- página 27 -->

Ejercicio
Problema 21: Solicitar al usuario que ingrese un valor N y 
mostrar todos los valores comprendidos entre N y 1, 
comenzando desde N.

---

<!-- página 28 -->

Ejercicio

---

<!-- página 29 -->

Ejercicio
Problema 22: El factorial de un número entero se denota 
de la siguiente manera «n!» y su resultado es 
n!=n*(n-1)*(n-2)*...*1. Por ejemplo: 5!=5*4*3*2*1 siendo el 
resultado 120. Se pide desarrollar un programa que lee un 
valor N y determine su factorial.

---

<!-- página 30 -->

Ejercicio

---

<!-- página 31 -->

Problema 23: Hallar la persona de mayor edad, sabiendo 
que se leen datos correspondientes a 20 muestras.
Máximos y Mínimos

---

<!-- página 32 -->

Ejercicio

---

<!-- página 33 -->

Problema 24: Hallar la persona de menor altura, sabiendo 
que se leen datos correspondientes a las alturas de 30 
personas. El ingreso es en números enteros y en cm.
Máximos y Mínimos

---

<!-- página 34 -->

Ejercicio

---

<!-- página 35 -->

Problema 25: Mostrar la mínima altura registrada de un 
grupo de 30 personas y además en qué ubicación se 
encuentra.
Máximos y Mínimos

---

<!-- página 36 -->

Ejercicio

---

<!-- página 37 -->

●
Esta estructura de control permite repetir una instrucción o grupo 
de instrucciones mientras una expresión lógica sea verdadera. 
De esta forma, la cantidad de veces que se reiteran las 
instrucciones no necesita conocerse por anticipado, sino que 
depende de una condición.
●
Lo primero que hace esta sentencia es evaluar si se cumple la 
condición. En caso que se cumpla se ejecuta el bucle. Si la 
primera vez que se evalúa la condición esta no se cumple, 
entonces no se ejecutará ninguna acción. En otras palabras, 
mientras la condición se cumpla el bucle sigue iterando, por eso 
es importante no caer en ciclos de repetición infinitos.
Sentencia “mientras”

---

<!-- página 38 -->

Ejercicio
Problema: Calcular la suma de los números ingresados por 
teclado hasta que se ingrese un cero.

---

<!-- página 39 -->

Ejercicio

---

<!-- página 40 -->

Ejercicio

---

<!-- página 41 -->

Ejercicio
Problema 27: Hallar el promedio de números ingresados por 
teclado hasta que se lea un número impar o uno menor a 
20.

---

<!-- página 42 -->

Ejercicio

---

<!-- página 43 -->

Ejercicio (mejora)

---

<!-- página 44 -->

Ejercicio
Problema 28: Se leen números que ingresa el usuario desde 
teclado, hasta que llega un valor negativo. Se pide que 
determine cantidad de impares y pares leídos. El cero no 
se cuenta.

---

<!-- página 45 -->

Ejercicio

---

<!-- página 46 -->

Ejercicio
Problema 29: Diseñar un algoritmo que calcule cuánto es el 
cociente entre dos números (únicamente dos números 
pares). Si el usuario ingresa un número impar, le pide otra 
vez el número hasta ingresar uno que sea par.

---

<!-- página 47 -->

Ejercicio

---

<!-- página 48 -->

Ejercicio
Problema 30: Diseñar un algoritmo que muestre por 
pantalla 10 números impares generados al azar (del 1 al 9, 
solo impares). Si el número obtenido al azar es par debe 
continuar hasta hallar un impar.

---

<!-- página 49 -->

Ejercicio