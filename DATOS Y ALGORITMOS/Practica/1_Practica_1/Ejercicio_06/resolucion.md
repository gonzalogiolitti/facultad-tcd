# Ejercicio 06

## Enunciado

Ingresar tres números enteros distintos. Determinar y mostrar si se ingresaron en forma creciente.

## Análisis

- **Entrada:** tres enteros distintos: `a`, `b`, `c` (en ese orden).
- **Proceso:** están en orden creciente si `a < b` **y** `b < c`.
- **Salida:** un mensaje que indica si se ingresaron en forma creciente o no.
- **Estructura:** **Decisión doble** con operador lógico `Y`.

**Ambigüedades y supuestos:**

- "Creciente" se interpreta de forma estricta (`<`); como los números son distintos, no hay empates.

**Alternativas:**

- Dos decisiones anidadas (`Si a < b` y dentro `Si b < c`): mismo resultado, pero con más ramas.

## Resolución (pseudocódigo PseInt)

```
Algoritmo Ejercicio_06
   Leer a, b, c
   Si a < b Y b < c Entonces
      Escribir "Se ingresaron en forma creciente"
   SiNo
      Escribir "No se ingresaron en forma creciente"
   FinSi
FinAlgoritmo
```

Archivo: [`algoritmo.psc`](./algoritmo.psc)

## Explicación paso a paso

1. **Inicio**.
2. **Leer a, b, c**.
3. **¿a < b Y b < c?** Se evalúan las dos comparaciones juntas.
4. **Sí** → se informa que están en forma creciente.
5. **No** → se informa que no lo están.
6. **Fin**.

**Pruebas de ejecución** (salida real obtenida en PseInt):

| Entradas | Salida |
|---|---|
| 1, 2, 3 → `1, 2, 3` | Se ingresaron en forma creciente |
| 3, 2, 1 → `3, 2, 1` | No se ingresaron en forma creciente |
| 1, 3, 2 → `1, 3, 2` | No se ingresaron en forma creciente |

## Diagrama

Ver [`diagrama.drawio`](./diagrama.drawio). 

## Conclusión

Un operador lógico (`Y`) permite combinar dos condiciones en una sola decisión, evitando anidar. Para que sea creciente deben cumplirse **ambas** comparaciones.
