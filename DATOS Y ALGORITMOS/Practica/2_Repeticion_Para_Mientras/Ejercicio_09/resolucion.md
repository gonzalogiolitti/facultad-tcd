# Ejercicio 09

## Enunciado

Imprime los números del 1 al 10 (usando Mientras)

## Análisis

- **Entrada:** ninguna.
- **Proceso:** un contador `i` que se inicializa en 1 y se incrementa en cada vuelta mientras `i <= 10`.
- **Salida:** 1, 2, …, 10.
- **Estructura:** **Repetición Mientras** con contador manual.

**Alternativas:**

- Con **Para**: `Para i <- 1 Hasta 10 Hacer Escribir i FinPara` (inicialización e incremento automáticos).

## Resolución (pseudocódigo PseInt)

```
Algoritmo Ejercicio_09
   i <- 1
   Mientras i <= 10 Hacer
      Escribir i
      i <- i + 1
   FinMientras
FinAlgoritmo
```

Archivo: [`algoritmo.psc`](./algoritmo.psc)

## Explicación paso a paso

1. **Inicio**.
2. **i ← 1**: con `Mientras` el contador se inicializa **antes** del ciclo.
3. **¿i ≤ 10?** Sí → entra; No → sale.
4. **Escribir i**.
5. **i ← i + 1**: el incremento es **manual**; si se olvida, el ciclo es infinito.
6. **Fin**.

**Pruebas de ejecución** (salida real obtenida en PseInt):

| Entradas | Salida |
|---|---|
| sin entradas | 1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>10 |

## Diagrama

Ver [`diagrama.drawio`](./diagrama.drawio). 

## Conclusión

Con `Mientras`, la inicialización, la condición y el incremento los escribe el programador. Es el mismo resultado que un `Para`, pero deja claro qué hace cada parte.
