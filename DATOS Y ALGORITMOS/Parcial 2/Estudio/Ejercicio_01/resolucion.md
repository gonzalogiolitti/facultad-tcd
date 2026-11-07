# Ejercicio 01 (Estudio)

## Enunciado

Escribir un algoritmo que lea montos de pedidos hasta ingresar la palabra FIN.

- Entradas: monto (número) o "FIN"
- Un pedido es Grande si monto > 200000
- Contar la cantidad total de pedidos
- Contar la cantidad de Grandes
- Acumular el monto total
- Salidas:
  - "Total de pedidos: ..."
  - "Pedidos Grandes (>200.000): ..."
  - "Monto total: ..."

Estructura: Mientras (centinela "FIN") + decisión + 2 contadores + acumulador.

## Análisis

- **¿Para o Mientras?** `Mientras`: no se sabe cuántos pedidos habrá; termina con el centinela `FIN`. La entrada se lee como texto y se convierte con `ConvertirANumero` solo si no es `FIN`.
- **¿Hay rombo?** Sí, una decisión simple dentro del ciclo: `monto > 200000` (Grande). El `Mientras` no lleva rombo, es hexágono.
- **¿Qué se calcula?** Dos contadores (`totalPedidos`, `pedidosGrandes`) y un acumulador (`montoTotal`).
- **Supuestos:** `FIN` en mayúsculas o minúsculas; 200000 exacto **no** es Grande; `FIN` no cuenta como pedido; no se validan entradas que no sean número ni `FIN`.

## Resolución

```
Algoritmo Ejercicio_01
	totalPedidos <- 0
	pedidosGrandes <- 0
	montoTotal <- 0
	Escribir "Ingrese el monto del pedido (o FIN para terminar):"
	Leer entrada
	Mientras Mayusculas(entrada) <> "FIN" Hacer
		monto <- ConvertirANumero(entrada)
		totalPedidos <- totalPedidos + 1
		montoTotal <- montoTotal + monto
		Si monto > 200000 Entonces
			pedidosGrandes <- pedidosGrandes + 1
		FinSi
		Escribir "Ingrese el monto del pedido (o FIN para terminar):"
		Leer entrada
	FinMientras
	Escribir "Total de pedidos: ", totalPedidos
	Escribir "Pedidos Grandes (>200.000): ", pedidosGrandes
	Escribir "Monto total: ", montoTotal
FinAlgoritmo
```

## Explicación paso a paso

1. Se inicializan en 0 los dos contadores y el acumulador.
2. Primera lectura antes del ciclo, para poder evaluar la condición.
3. El `Mientras` sigue mientras `entrada` no sea `FIN`.
4. En el ciclo: se convierte a número, se cuenta el pedido y se acumula el monto.
5. Si el monto supera 200000, se cuenta además como Grande.
6. Al final de cada vuelta se lee la siguiente entrada (si no, ciclo infinito).
7. Con `FIN` el ciclo termina y se muestran los tres resultados.

**Pruebas en PseInt (ejecutadas):**

| Caso | Entradas | Salida |
|---|---|---|
| Normal (incluye 200000 exacto) | 150000, 250000, 200000, 300000, FIN | Total 4, Grandes 2, Monto 900000 |
| Borde: cero iteraciones | FIN | Total 0, Grandes 0, Monto 0 |
| Borde: minúscula | 200001, fin | Total 1, Grandes 1, Monto 200001 |

## Diagrama

![Diagrama](./diagrama.png) · [diagrama.drawio](./diagrama.drawio)

## Conclusión

Esquema de recorrido con centinela: lectura anticipada, `Mientras` y nueva lectura al final de cada vuelta.
