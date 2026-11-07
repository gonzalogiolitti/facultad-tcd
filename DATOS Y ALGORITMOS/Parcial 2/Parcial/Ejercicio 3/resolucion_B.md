# Ejercicio 3 — Resolución B: la carga solo acepta orden creciente

Archivo: `algoritmo_B.psc`. La resolución A (`algoritmo.psc`) queda como está: ahí se da por hecho que A y B se ingresan ordenados. Acá el programa lo **obliga**, y como las dos listas quedan ordenadas, la lista final C también sale creciente.

## Qué cambia respecto de la A

Solo la carga de A y de B. La intercalación y el resto son idénticos.

Dentro de cada `Para` de carga, después de leer el elemento (desde el segundo):

```
Si i > 1 Entonces
    Mientras A[i] < A[i - 1] Hacer
        Escribir "Error: no puede ser menor que el anterior (", A[i - 1], "). Ingrese de nuevo: "
        Leer A[i]
    FinMientras
FinSi
```

Lo mismo para B con `B[j]` y `B[j - 1]`.

## Por qué así

- El enunciado dice "de menor a mayor" (no dice estrictamente), así que se rechaza solo lo que es **menor** que el anterior (`<`): un código repetido se acepta. Si se quisiera no permitir repetidos, sería `<=`.
- El primer elemento de cada lista no tiene anterior, por eso el `Si i > 1` (sin eso se leería la posición 0, error 303).
- Con las dos listas garantizadas en orden, la intercalación con tres índices y la copia del resto producen C ordenado.

## Pruebas

| Ingreso | Resultado |
|---|---|
| A: 10, 5 (error), 40, 30 (error), 70; B: 5, 20, 10 (error), 30, 50, 60, 80, 90 | tres avisos; C = 5 10 20 30 40 50 60 70 80 90 |
| A: 5 5 9; B: 5 5 5 9 9 9 9 (repetidos) | se aceptan; C = 5 5 5 5 5 9 9 9 9 9 |
| A: 1 2 3; B: 4 … 10 | sin errores; C = 1 … 10 |

## Cuándo usar cada una

La A es la que pide el enunciado literal. La B es la más segura si la consigna dijera que hay que garantizar el orden al ingresar.
