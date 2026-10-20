# Ejercicio 01

## Enunciado

Se desea analizar las ventas de 30 días de un minimarket. Para ello se debe solicitar cuál es el objetivo diario (monto total de venta diaria en pesos) y a partir de ello, para cada día leer montoVenta.

- Si montoVenta >= objetivoDiario, contar "día cumplido".
- Acumular ventasTotales.
- Al final, mostrar días cumplidos del objetivo diario y las ventas totales de los 30 días.

Estructura: Para (30 días) + decisión + contador + acumulador.

## Análisis

- **Entradas:** `objetivoDiario` (una sola vez, antes del ciclo) y `montoVenta` (una vez por cada uno de los 30 días).
- **Proceso:** por cada día se compara `montoVenta` con `objetivoDiario`; si es mayor o igual, se suma 1 al contador `diasCumplidos`. Además, siempre se suma `montoVenta` al acumulador `ventasTotales`.
- **Salidas:** `diasCumplidos` y `ventasTotales`.
- **Estructuras:** repetición `Para` (cantidad conocida: 30), decisión simple, 1 contador y 1 acumulador.
- **Supuesto:** se interpreta "día cumplido" con `>=` (si se vende exactamente el objetivo, el día cuenta como cumplido). No se validan montos negativos porque el enunciado no lo pide.
- **Alternativa:** un `Mientras dia <= 30` con `dia` incrementado a mano; se eligió `Para` porque las repeticiones son conocidas.

## Resolución

```
Algoritmo Ejercicio_01
	// diasCumplidos: contador de días que alcanzaron el objetivo
	// ventasTotales: acumulador del monto vendido en los 30 días
	diasCumplidos <- 0
	ventasTotales <- 0
	Escribir "Ingrese el objetivo diario (en pesos):"
	Leer objetivoDiario
	Para dia <- 1 Hasta 30 Hacer
		Escribir "Ingrese el monto de venta del día ", dia, ":"
		Leer montoVenta
		Si montoVenta >= objetivoDiario Entonces
			diasCumplidos <- diasCumplidos + 1
		FinSi
		ventasTotales <- ventasTotales + montoVenta
	FinPara
	Escribir "Días que cumplieron el objetivo: ", diasCumplidos
	Escribir "Ventas totales de los 30 días: ", ventasTotales
FinAlgoritmo
```

## Explicación paso a paso

1. Se inicializan en 0 el contador `diasCumplidos` y el acumulador `ventasTotales` (si no, arrancarían con basura).
2. Se lee `objetivoDiario` una única vez, fuera del ciclo.
3. El `Para` repite 30 veces; en cada vuelta se lee `montoVenta`.
4. Si `montoVenta >= objetivoDiario`, se incrementa `diasCumplidos`.
5. Sea cual sea el resultado de la decisión, se suma `montoVenta` a `ventasTotales`.
6. Al terminar los 30 días se muestran ambos resultados.

**Pruebas en PseInt** (objetivo, montos → salida):

| Caso | Entradas | Salida |
|---|---|---|
| Borde (igualdad) | objetivo 1000, 30 días de 1000 | días cumplidos 30, ventas 30000 |
| Mixto | objetivo 500, 15 días de 600 y 15 días de 0 | días cumplidos 15, ventas 9000 |
| Ninguno cumple | objetivo 1000, 30 días de 999 | días cumplidos 0, ventas 29970 |

## Diagrama

[diagrama.drawio](./diagrama.drawio)

## Conclusión

El patrón es el clásico `Para` + decisión + contador + acumulador. La clave es que el acumulador va **fuera** de la decisión (se suma siempre) y el contador **dentro** (se suma solo si se cumple el objetivo).
