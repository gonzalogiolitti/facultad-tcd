# Ejercicio 06 — Intercalación de dos vectores

> Enunciado **deducido** a partir del código (no es el texto original de la cátedra).

Se tienen dos vectores A y B de 5 elementos enteros cada uno, ya ordenados de manera creciente. Escribir un algoritmo que:

1. Cargue los vectores A y B (con valores fijos) mediante un subproceso `CargaDeVectores`.
2. Intercale A y B en un tercer vector `total` de 10 elementos, que quede ordenado de manera creciente, mediante una función `IntercalarVectores`.
3. Muestre el nuevo vector.

Datos de prueba: A = 1, 4, 7, 9, 12 y B = 2, 3, 5, 10, 15. Resultado esperado: 1, 2, 3, 4, 5, 7, 9, 10, 12, 15.

Aclaración: no se ordena `total` después; se arma ya ordenado recorriendo A y B a la vez y copiando siempre el menor. Cuando uno de los vectores se agota, se copian los elementos que quedan del otro.
