# Ejercicio 08

## Enunciado

Imprime los números del 1 al 10 junto con su cuadrado si son pares.

## Análisis

- **Entrada:** ninguna.
- **Proceso:** recorrer 1 … 10; mostrar cada número y, si es par, también su cuadrado.
- **Salida:** los números del 1 al 10; después de cada par, su cuadrado.
- **Estructura:** **Repetición Para** con **decisión simple** dentro.

**Ambigüedades y supuestos:**

- La frase es ambigua: se interpreta que se imprimen **todos** los números del 1 al 10 y que el cuadrado se agrega **solo a los pares**.

**Alternativas:**

- Interpretación estricta: mostrar únicamente los pares con su cuadrado (`Para i <- 2 Hasta 10 Con Paso 2`).

## Resolución (pseudocódigo PseInt)

```
Algoritmo Ejercicio_08
   Para i <- 1 Hasta 10 Hacer
      Escribir "Número: ", i
      Si i MOD 2 = 0 Entonces
         Escribir "   Su cuadrado es: ", i * i
      FinSi
   FinPara
FinAlgoritmo
```

Archivo: [`algoritmo.psc`](./algoritmo.psc)

## Explicación paso a paso

1. **Inicio**.
2. **i ← 1**, **¿i ≤ 10?**.
3. **Escribir "Número: ", i**: se muestran **todos** los números.
4. **¿i MOD 2 = 0?** Sí → **Escribir** su cuadrado `i * i`.  No → nada.
5. **i ← i + 1**.
6. **Fin**.

**Pruebas de ejecución** (salida real obtenida en PseInt):

| Entradas | Salida |
|---|---|
| sin entradas | Número: 1<br>Número: 2<br>   Su cuadrado es: 4<br>Número: 3<br>Número: 4<br>   Su cuadrado es: 16<br>Número: 5<br>Número: 6<br>   Su cuadrado es: 36<br>Número: 7<br>Número: 8<br>   Su cuadrado es: 64<br>Número: 9<br>Número: 10<br>   Su cuadrado es: 100 |

## Diagrama

Ver [`diagrama.drawio`](./diagrama.drawio). La estructura **Para** se dibuja con sus tres partes explícitas: inicialización (`i ← …`), condición de continuación (rombo) e incremento (`i ← i ± 1`), con la flecha de retorno al rombo.

## Conclusión

La salida está tanto dentro del ciclo (siempre) como dentro de la decisión (solo si es par). Dónde se coloca cada `Escribir` determina cuándo se ejecuta.
