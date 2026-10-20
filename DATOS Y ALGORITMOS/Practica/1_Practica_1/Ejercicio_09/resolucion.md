# Ejercicio 09

## Enunciado

Determinar si el primero de un conjunto de tres números dados, es mayor que los otros dos.

## Análisis

- **Entrada:** tres números `a`, `b`, `c` (el primero es `a`).
- **Proceso:** `a` es mayor que los otros dos si `a > b` **y** `a > c`.
- **Salida:** un mensaje que informa si el primero es mayor que los otros dos.
- **Estructura:** **Decisión doble** con operador `Y`.

**Ambigüedades y supuestos:**

- "Mayor" es estricto: si el primero es igual a alguno de los otros, se informa que **no** es mayor.

## Resolución (pseudocódigo PseInt)

```
Algoritmo Ejercicio_09
   Leer a, b, c
   Si a > b Y a > c Entonces
      Escribir "El primero es mayor que los otros dos"
   SiNo
      Escribir "El primero NO es mayor que los otros dos"
   FinSi
FinAlgoritmo
```

Archivo: [`algoritmo.psc`](./algoritmo.psc)

## Explicación paso a paso

1. **Inicio**.
2. **Leer a, b, c**.
3. **¿a > b Y a > c?**
4. **Sí** → el primero es mayor que los otros dos.
5. **No** → no lo es.
6. **Fin**.

**Pruebas de ejecución** (salida real obtenida en PseInt):

| Entradas | Salida |
|---|---|
| 9, 5, 3 → `9, 5, 3` | El primero es mayor que los otros dos |
| 3, 5, 9 → `3, 5, 9` | El primero NO es mayor que los otros dos |
| 5, 5, 1 (empate) → `5, 5, 1` | El primero NO es mayor que los otros dos |

## Diagrama

Ver [`diagrama.drawio`](./diagrama.drawio). 

## Conclusión

Compara un número contra los otros dos con una única decisión gracias al operador `Y`. Distinto de hallar el mayor de los tres (Ejercicios 10 y 11).
