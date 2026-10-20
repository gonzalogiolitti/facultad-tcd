# Ejercicio 02

## Enunciado

Calcula la suma de los primeros 10 números naturales

## Análisis

- **Entrada:** ninguna.
- **Proceso:** un acumulador `suma` que, en cada vuelta de 1 a 10, le agrega el valor de `i`.
- **Salida:** la suma (55).
- **Estructura:** **Repetición Para** con **acumulador**.

**Alternativas:**

- Fórmula de Gauss: `n * (n + 1) / 2` (sin ciclo), pero el ejercicio apunta a practicar el acumulador.

## Resolución (pseudocódigo PseInt)

```
Algoritmo Ejercicio_02
   suma <- 0
   Para i <- 1 Hasta 10 Hacer
      suma <- suma + i
   FinPara
   Escribir "La suma de los primeros 10 naturales es: ", suma
FinAlgoritmo
```

Archivo: [`algoritmo.psc`](./algoritmo.psc)

## Explicación paso a paso

1. **Inicio**.
2. **suma ← 0**: el acumulador **siempre se inicializa en 0** antes del ciclo.
3. **i ← 1** y **¿i ≤ 10?**.
4. **suma ← suma + i**: en cada vuelta se acumula el valor de `i`.
5. **i ← i + 1**.
6. Al terminar el ciclo, **Escribir** la suma.
7. **Fin**.

**Pruebas de ejecución** (salida real obtenida en PseInt):

| Entradas | Salida |
|---|---|
| sin entradas | La suma de los primeros 10 naturales es: 55 |

## Diagrama

Ver [`diagrama.drawio`](./diagrama.drawio). La estructura **Para** se dibuja con sus tres partes explícitas: inicialización (`i ← …`), condición de continuación (rombo) e incremento (`i ← i ± 1`), con la flecha de retorno al rombo.

## Conclusión

Un acumulador necesita **inicializarse en 0** antes del ciclo y actualizarse dentro de él. La salida va **fuera** del ciclo porque solo interesa el total final. Resultado esperado: 55.
