# Ejercicio 05

## Enunciado

Calcula la suma de los números impares del 1 al 15.

## Análisis

- **Entrada:** ninguna.
- **Proceso:** recorrer 1 … 15 y acumular solo los impares.
- **Salida:** la suma (64).
- **Estructura:** **Repetición Para** + **decisión simple** + **acumulador**.

**Alternativas:**

- `Para i <- 1 Hasta 15 Con Paso 2` recorre solo los impares y evita la decisión.

## Resolución (pseudocódigo PseInt)

```
Algoritmo Ejercicio_05
   suma <- 0
   Para i <- 1 Hasta 15 Hacer
      Si i MOD 2 <> 0 Entonces
         suma <- suma + i
      FinSi
   FinPara
   Escribir "La suma de los impares del 1 al 15 es: ", suma
FinAlgoritmo
```

Archivo: [`algoritmo.psc`](./algoritmo.psc)

## Explicación paso a paso

1. **Inicio**.
2. **suma ← 0**.
3. **i ← 1**, **¿i ≤ 15?**.
4. **¿i MOD 2 <> 0?** (resto distinto de 0 → impar).
5. **Sí** → **suma ← suma + i**.  **No** → se saltea.
6. **i ← i + 1**.
7. Fuera del ciclo, **Escribir** la suma.
8. **Fin**.

**Pruebas de ejecución** (salida real obtenida en PseInt):

| Entradas | Salida |
|---|---|
| sin entradas | La suma de los impares del 1 al 15 es: 64 |

## Diagrama

Ver [`diagrama.drawio`](./diagrama.drawio). La estructura **Para** se dibuja con sus tres partes explícitas: inicialización (`i ← …`), condición de continuación (rombo) e incremento (`i ← i ± 1`), con la flecha de retorno al rombo.

## Conclusión

El acumulador se actualiza **solo cuando se cumple la condición**. Resultado esperado: 1+3+5+…+15 = 64.
