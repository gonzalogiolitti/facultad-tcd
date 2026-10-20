# Ejercicio 03

## Enunciado

Calcula la suma de los cuadrados de los primeros 10 números naturales.

## Análisis

- **Entrada:** ninguna.
- **Proceso:** acumular `i * i` para i = 1 … 10.
- **Salida:** la suma de los cuadrados (385).
- **Estructura:** **Repetición Para** con **acumulador**.

**Alternativas:**

- Usar el operador de potencia: `suma <- suma + i ^ 2`.

## Resolución (pseudocódigo PseInt)

```
Algoritmo Ejercicio_03
   suma <- 0
   Para i <- 1 Hasta 10 Hacer
      suma <- suma + i * i
   FinPara
   Escribir "La suma de los cuadrados es: ", suma
FinAlgoritmo
```

Archivo: [`algoritmo.psc`](./algoritmo.psc)

## Explicación paso a paso

1. **Inicio**.
2. **suma ← 0**.
3. **i ← 1**, **¿i ≤ 10?**.
4. **suma ← suma + i * i**: se acumula el cuadrado, no el número.
5. **i ← i + 1**.
6. **Escribir** la suma.
7. **Fin**.

**Pruebas de ejecución** (salida real obtenida en PseInt):

| Entradas | Salida |
|---|---|
| sin entradas | La suma de los cuadrados es: 385 |

## Diagrama

Ver [`diagrama.drawio`](./diagrama.drawio). La estructura **Para** se dibuja con sus tres partes explícitas: inicialización (`i ← …`), condición de continuación (rombo) e incremento (`i ← i ± 1`), con la flecha de retorno al rombo.

## Conclusión

Idéntico al ejercicio anterior; solo cambia lo que se acumula (`i * i`). Resultado esperado: 1+4+9+…+100 = 385.
