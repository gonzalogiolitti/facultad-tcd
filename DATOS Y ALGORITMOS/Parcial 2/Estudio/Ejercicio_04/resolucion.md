# Ejercicio 04 (Estudio)

## Enunciado

Un gimnasio registra la asistencia de sus socios durante 30 días. Para cada día se ingresa la cantidad de socios que asistieron.

Un día es “lleno” si asistieron más de 80 socios. Contar los días llenos.
Acumular el total de asistencias del mes.
Registrar el día con menos asistencia (el número de día, no solo la cantidad).

Salidas:

“Días llenos: ...”
“Total de asistencias: ...”
“Día con menos asistencia: ...”
Si ningún día fue lleno, mostrar además “Ningún día lleno”.

## Análisis

- **¿Para o Mientras?** `Para`: son exactamente 30 días.
- **¿Hay rombo?** Sí, tres decisiones dentro del ciclo/al final: `asistencia > 80` (día lleno), `dia = 1 O asistencia < menorAsistencia` (nuevo mínimo) y, después del ciclo, `diasLlenos = 0` (mensaje extra).
- **¿Qué se calcula?** Un contador (`diasLlenos`), un acumulador (`totalAsistencias`) y un mínimo que guarda **también el número de día** (`diaMenor`).
- **Supuestos:** "lleno" es `> 80` estricto (80 no es lleno). El mínimo se inicializa con el día 1 (`dia = 1 O ...`), así no hace falta un valor arbitrario. Si hay empate en el mínimo, queda el **primer** día (`<` estricto). "Ningún día lleno" se muestra *además* de las tres salidas.

## Resolución

```
Algoritmo Ejercicio_04
	diasLlenos <- 0
	totalAsistencias <- 0
	menorAsistencia <- 0
	diaMenor <- 0
	Para dia <- 1 Hasta 30 Con Paso 1 Hacer
		Escribir "Ingrese la asistencia del día ", dia, ":"
		Leer asistencia
		totalAsistencias <- totalAsistencias + asistencia
		Si asistencia > 80 Entonces
			diasLlenos <- diasLlenos + 1
		FinSi
		Si dia = 1 O asistencia < menorAsistencia Entonces
			menorAsistencia <- asistencia
			diaMenor <- dia
		FinSi
	FinPara
	Escribir "Días llenos: ", diasLlenos
	Escribir "Total de asistencias: ", totalAsistencias
	Escribir "Día con menos asistencia: ", diaMenor
	Si diasLlenos = 0 Entonces
		Escribir "Ningún día lleno"
	FinSi
FinAlgoritmo
```

## Explicación paso a paso

1. Se inicializan contador, acumulador y datos del mínimo.
2. El `Para` recorre los días 1 a 30 y lee la asistencia de cada uno.
3. Se acumula en `totalAsistencias`; si supera 80 se cuenta un día lleno.
4. Si es el primer día o la asistencia es menor al mínimo actual, se guardan la cantidad **y el número de día**.
5. Al terminar se muestran las tres salidas y, si `diasLlenos = 0`, el mensaje extra.

**Pruebas en PseInt (ejecutadas):**

| Caso | Entradas | Salida |
|---|---|---|
| Un lleno al final, empate de mínimo | 29 días de 50 y día 30 = 90 | Llenos 1, Total 1540, Día 1 |
| Ninguno lleno, mínimo en el último | 29 de 60 y día 30 = 10 | Llenos 0, Total 1750, Día 30, "Ningún día lleno" |
| Borde: 80 no es lleno, mínimo día 1 | 5 y 29 de 80 | Llenos 0, Total 2325, Día 1, "Ningún día lleno" |
| Todos llenos, mínimo en el medio | 100 salvo día 15 = 81 | Llenos 30, Total 2981, Día 15 |

## Diagrama

![Diagrama](./diagrama.png) · [diagrama.drawio](./diagrama.drawio)

## Conclusión

`Para` con tres patrones juntos: contador condicionado, acumulador y mínimo con posición (se guarda el índice del día, no solo el valor).
