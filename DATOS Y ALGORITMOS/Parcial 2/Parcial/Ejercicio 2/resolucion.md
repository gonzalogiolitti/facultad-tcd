# Ejercicio 2 — Peaje: búsqueda dicotómica de una patente

## Enunciado

El sistema de un peaje tiene registrados 30 números de patentes codificadas en un vector guardado en forma estrictamente creciente. Se lee una patente N. Usar búsqueda dicotómica para determinar si el vehículo posee pase libre (mostrando su posición) o imprimir un cartel de no encontrado.

Formato permitido: solo PseInt (`algoritmo.psc`).

## Análisis

- **¿Para o Mientras?** Mientras para la búsqueda (no se sabe cuántas vueltas hacen falta). No hay `Para`: las 30 patentes ya están registradas, no se ingresan.
- **¿Hay rombo?** Sí: igual, menor o mayor que el elemento del medio, y al final si se encontró o no.
- **¿Qué se calcula?** La posición de N en el vector, o que no está.
- **Método pedido:** dicotómica (binaria), no secuencial. Requiere el vector ordenado: lo está por enunciado.
- **"Tiene registrados":** el vector ya viene cargado, así que se setean las 30 patentes al arrancar y lo único que se lee por teclado es N.

## Resolución

1. Se asignan las 30 patentes, en orden estrictamente creciente (`patentes[1] ← 102` … `patentes[30] ← 1300`).
2. Se lee `N`.
3. `bajo ← 1`, `alto ← 30`, `posicion ← 0`.
4. `Mientras bajo <= alto Y posicion = 0`:
   - `medio ← trunc((bajo + alto) / 2)`.
   - Si `patentes[medio] = N`, `posicion ← medio`.
   - Si no, si `N < patentes[medio]`, `alto ← medio - 1`; si no, `bajo ← medio + 1`.
5. Si `posicion > 0` se muestra el pase libre con la posición; si no, "Patente no encontrada".

## Explicación paso a paso

En cada vuelta se descarta la mitad del rango: si N es menor que la del medio, solo puede estar a la izquierda; si es mayor, a la derecha. `posicion` arranca en 0, que no es una posición válida (los índices empiezan en 1), y sirve como bandera de "no encontrado" y para cortar el ciclo. Con 30 elementos alcanzan 5 vueltas como máximo.

Los valores de las patentes son inventados (el enunciado no los da): 102, 145, 187 … 1259, 1300.

## Diagrama

No lleva: el enunciado pide solo `.psc`.

## Pruebas

Se probaron las 30 patentes del vector: cada una devuelve su posición correcta (102 → 1, …, 1300 → 30). Además:

| N | Salida |
|---|---|
| 102 | pase libre, posición 1 |
| 1300 | pase libre, posición 30 |
| 50 (menor que todas) | Patente no encontrada |
| 200 (entre dos patentes) | Patente no encontrada |
| 1301, 5000 (mayor que todas) | Patente no encontrada |

## Conclusión

La condición del `Mientras` lleva `bajo <= alto` para no seguir cuando el rango se vacía. Errores típicos: no actualizar con `medio ± 1` (ciclo infinito), olvidar `trunc` en el punto medio, o usarla sobre un vector sin ordenar.

La resolución B (`algoritmo_B.psc`) es una variante donde las patentes se ingresan por teclado y el programa obliga el orden creciente.
