# Ejercicio 3 — Depósitos: intercalar dos listas ordenadas

## Enunciado

Un depósito A posee 3 códigos de repuestos y un depósito B posee 7 códigos. Ambos listados ingresan ordenados de menor a mayor. Intercalar ambos en un tercer vector de 10 elementos manteniendo el orden creciente y mostrar la lista final.

Formato permitido: solo PseInt (`algoritmo.psc`).

## Análisis

- **¿Para o Mientras?** Mientras para intercalar (termina cuando se agota uno de los dos); `Para` solo para copiar el resto y mostrar la lista final.
- **¿Hay rombo?** Sí: cuál de los dos elementos actuales es menor, y cuál de las dos listas sobró.
- **¿Qué se calcula?** El vector C de 10 elementos, ordenado.
- **Método pedido:** intercalación con tres índices (no juntar todo y ordenar).
- **"Posee" / "ingresan ordenados":** los códigos de A (3) y de B (7) ya están en los vectores desde el principio, así que se setean al arrancar y no se lee nada por teclado.

## Resolución

1. Se asignan los códigos: `A[1..3]` y `B[1..7]`, cada uno de menor a mayor.
2. `i ← 1`, `j ← 1`, `p ← 1`.
3. `Mientras i <= 3 Y j <= 7`: se copia el menor entre `A[i]` y `B[j]` en `C[p]`, avanza el índice del que se copió y avanza `p`.
4. Cuando uno se terminó: si `i > 3`, se copia el resto de B (de `j` a 7); si no, el resto de A (de `i` a 3).
5. Se muestra C con un `Para` de 1 a 10.

## Explicación paso a paso

Los tres índices recorren cada vector sin volver atrás: `i` en A, `j` en B y `p` en C. Cuando A o B se agota, lo que queda del otro ya está ordenado y es mayor o igual a todo lo copiado, así que se pasa tal cual al final de C. En un empate (`A[i] = B[j]`) se toma el de A (`<=`); el resultado ordenado es el mismo.

Los códigos son inventados (el enunciado no los da): A = 120, 340, 780 y B = 150, 210, 390, 450, 600, 820, 900.

## Diagrama

No lleva: el enunciado pide solo `.psc`.

## Pruebas

Como los datos están seteados en el código, para probar otros casos se cambiaron los valores de una copia del archivo.

| A | B | C |
|---|---|---|
| 120 340 780 (los del archivo; A se termina antes) | 150 210 390 450 600 820 900 | 120 150 210 340 390 450 600 780 820 900 |
| 500 600 700 | 10 20 30 40 50 60 70 (B se termina antes) | 10 20 30 40 50 60 70 500 600 700 |
| 10 40 70 | 5 20 30 50 60 80 90 | 5 10 20 30 40 50 60 70 80 90 |
| 1 2 3 (todo A antes) | 4 … 10 | 1 2 3 4 5 6 7 8 9 10 |
| 5 5 9 (repetidos) | 5 5 5 9 9 9 9 | 5 5 5 5 5 9 9 9 9 9 |

## Conclusión

Intercalar = tres índices + copiar el resto. Errores típicos: pasarse del tamaño del vector, olvidar copiar el resto, o no avanzar `p` en cada copia.

La resolución B (`algoritmo_B.psc`) es una variante donde los códigos se ingresan por teclado y el programa obliga el orden creciente.
