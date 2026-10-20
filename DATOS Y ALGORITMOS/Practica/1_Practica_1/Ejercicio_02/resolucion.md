# Ejercicio 02

## Enunciado

Dados como datos cinco números obtener el promedio e informar el resultado.

## Análisis

- **Entrada:** cinco números: `a`, `b`, `c`, `d`, `e`.
- **Proceso:** `promedio = (a + b + c + d + e) / 5`.
- **Salida:** el promedio.
- **Estructura:** **Secuencial**.

**Ambigüedades y supuestos:**

- Se lee todo en una sola instrucción `Leer`; es equivalente a cinco `Leer` consecutivos.

**Alternativas:**

- Con un acumulador y una estructura `Para` de 5 vueltas (se verá más adelante con repetición).

## Resolución (pseudocódigo PseInt)

```
Algoritmo Ejercicio_02
   Leer a, b, c, d, e
   promedio <- (a + b + c + d + e) / 5
   Escribir "El promedio es: ", promedio
FinAlgoritmo
```

Archivo: [`algoritmo.psc`](./algoritmo.psc)

## Explicación paso a paso

1. **Inicio**.
2. **Leer a, b, c, d, e**: se ingresan los cinco números.
3. **promedio ← (a+b+c+d+e) / 5**: se suman los cinco valores (entre paréntesis, para que la suma se haga antes de dividir) y se divide por la cantidad.
4. **Escribir** el promedio.
5. **Fin**.

**Pruebas de ejecución** (salida real obtenida en PseInt):

| Entradas | Salida |
|---|---|
| 10, 20, 30, 40, 50 → `10, 20, 30, 40, 50` | El promedio es: 30 |
| 1, 2, 3, 4, 5 → `1, 2, 3, 4, 5` | El promedio es: 3 |

## Diagrama

Ver [`diagrama.drawio`](./diagrama.drawio). 

## Conclusión

Los paréntesis son clave: `a + b + c + d + e / 5` dividiría solo `e`. Es el error más común en promedios.
