# Ejercicio 01

## Enunciado

Imprime los primeros 25 números naturales en orden descendente.

## Análisis

- **Entrada:** ninguna.
- **Proceso:** un contador `i` que parte de 25 y baja de a 1 hasta llegar a 1.
- **Salida:** los números 25, 24, …, 1 (uno por línea).
- **Estructura:** **Repetición Para** con paso negativo (−1). Se conoce de antemano la cantidad de vueltas (25).

**Ambigüedades y supuestos:**

- "Primeros 25 números naturales" = 1 a 25 (sin el 0).

**Alternativas:**

- Con **Mientras**: `i <- 25` y `Mientras i >= 1 Hacer … i <- i - 1`.
- Con `Para i <- 1 Hasta 25` y mostrar `26 - i`.

## Resolución (pseudocódigo PseInt)

```
Algoritmo Ejercicio_01
   Para i <- 25 Hasta 1 Con Paso -1 Hacer
      Escribir i
   FinPara
FinAlgoritmo
```

Archivo: [`algoritmo.psc`](./algoritmo.psc)

## Explicación paso a paso

1. **Inicio**.
2. **i ← 25**: el contador arranca en el mayor valor.
3. **¿i ≥ 1?** Sí → se entra al ciclo; No → se sale.
4. **Escribir i**: se muestra el valor actual.
5. **i ← i − 1**: se baja el contador y se vuelve a preguntar la condición.
6. **Fin** cuando `i` llega a 0 y la condición deja de cumplirse.

**Pruebas de ejecución** (salida real obtenida en PseInt):

| Entradas | Salida |
|---|---|
| sin entradas | 25<br>24<br>23<br>22<br>21<br>20<br>19<br>18<br>17<br>16<br>15<br>14<br>13<br>12<br>11<br>10<br>9<br>8<br>7<br>6<br>5<br>4<br>3<br>2<br>1 |

## Diagrama

Ver [`diagrama.drawio`](./diagrama.drawio). La estructura **Para** se dibuja con sus tres partes explícitas: inicialización (`i ← …`), condición de continuación (rombo) e incremento (`i ← i ± 1`), con la flecha de retorno al rombo.

## Conclusión

Cuando el recorrido es descendente, el `Para` lleva `Con Paso -1` y el límite se invierte (`i >= 1`). Es la base de todos los ciclos con contador.
