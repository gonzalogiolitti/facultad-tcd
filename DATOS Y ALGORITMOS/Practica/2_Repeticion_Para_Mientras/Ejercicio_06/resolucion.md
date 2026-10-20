# Ejercicio 06

## Enunciado

Encuentra los números divisibles por 3 en un rango del 1 al 30.

## Análisis

- **Entrada:** ninguna.
- **Proceso:** recorrer 1 … 30 y mostrar los `i` cuyo resto al dividir por 3 es 0.
- **Salida:** 3, 6, 9, …, 30.
- **Estructura:** **Repetición Para** con **decisión simple** (`MOD`).

**Ambigüedades y supuestos:**

- "Encuentra" se interpreta como **mostrarlos** en pantalla (el enunciado no pide contarlos ni guardarlos).

**Alternativas:**

- `Para i <- 3 Hasta 30 Con Paso 3`.
- Agregar un contador para informar además cuántos son (10).

## Resolución (pseudocódigo PseInt)

```
Algoritmo Ejercicio_06
   Para i <- 1 Hasta 30 Hacer
      Si i MOD 3 = 0 Entonces
         Escribir i
      FinSi
   FinPara
FinAlgoritmo
```

Archivo: [`algoritmo.psc`](./algoritmo.psc)

## Explicación paso a paso

1. **Inicio**.
2. **i ← 1**, **¿i ≤ 30?**.
3. **¿i MOD 3 = 0?** → un número es divisible por 3 si el resto es 0.
4. **Sí** → **Escribir i**.
5. **i ← i + 1**.
6. **Fin**.

**Pruebas de ejecución** (salida real obtenida en PseInt):

| Entradas | Salida |
|---|---|
| sin entradas | 3<br>6<br>9<br>12<br>15<br>18<br>21<br>24<br>27<br>30 |

## Diagrama

Ver [`diagrama.drawio`](./diagrama.drawio). La estructura **Para** se dibuja con sus tres partes explícitas: inicialización (`i ← …`), condición de continuación (rombo) e incremento (`i ← i ± 1`), con la flecha de retorno al rombo.

## Conclusión

Mismo patrón que el ejercicio 4; cambia solo el divisor. `MOD` sirve para cualquier prueba de divisibilidad.
