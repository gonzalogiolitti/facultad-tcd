# Ejercicio 04

## Enunciado

Imprime los números pares del 1 al 20.

## Análisis

- **Entrada:** ninguna.
- **Proceso:** recorrer 1 … 20 y, si el resto de dividir `i` por 2 es 0, mostrarlo.
- **Salida:** 2, 4, 6, …, 20.
- **Estructura:** **Repetición Para** con **decisión simple** adentro (`MOD`).

**Alternativas:**

- `Para i <- 2 Hasta 20 Con Paso 2` muestra los pares directamente, sin decisión (más eficiente, pero no practica `MOD`).

## Resolución (pseudocódigo PseInt)

```
Algoritmo Ejercicio_04
   Para i <- 1 Hasta 20 Hacer
      Si i MOD 2 = 0 Entonces
         Escribir i
      FinSi
   FinPara
FinAlgoritmo
```

Archivo: [`algoritmo.psc`](./algoritmo.psc)

## Explicación paso a paso

1. **Inicio**.
2. **i ← 1**, **¿i ≤ 20?**.
3. **¿i MOD 2 = 0?** (el resto de dividir por 2 es 0 → es par).
4. **Sí** → **Escribir i**.  **No** → no se hace nada.
5. **i ← i + 1** y se repite.
6. **Fin**.

**Pruebas de ejecución** (salida real obtenida en PseInt):

| Entradas | Salida |
|---|---|
| sin entradas | 2<br>4<br>6<br>8<br>10<br>12<br>14<br>16<br>18<br>20 |

## Diagrama

Ver [`diagrama.drawio`](./diagrama.drawio). La estructura **Para** se dibuja con sus tres partes explícitas: inicialización (`i ← …`), condición de continuación (rombo) e incremento (`i ← i ± 1`), con la flecha de retorno al rombo.

## Conclusión

Combinar un `Para` con una decisión `MOD` es el patrón básico para filtrar valores dentro de un rango.
