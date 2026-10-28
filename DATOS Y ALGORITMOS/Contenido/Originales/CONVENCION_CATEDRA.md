# Convención de la cátedra — Datos y Algoritmos

Relevamiento hecho sobre los **originales del campus** (no sobre los `.md` convertidos), mirando las imágenes de cada página.
Fecha: 2026-10-27. Nada de esto modifica la skill ni los diagramas existentes: es solo referencia, pendiente de aprobación.

## 0. Fuentes y alcance

| Archivo (en `Originales/`) | Págs. | Qué aporta |
|---|---|---|
| `Contenido/AyD-diagramacionlogica-parte1.pdf` | 41 | Símbolos básicos, secuencial y las 4 decisiones |
| `Contenido/AyD-diagramacionlogica-parte2.pdf` | 49 | `Para`, `MQ`, contadores, acumuladores, máx/mín |
| `Contenido/Arreglos.pdf` | 70 | Arreglos, ordenamiento, búsqueda, **intercalación**, pre-parcial resuelto |
| `Contenido/Actividades/Práctica 1.pdf` | 15 | Diagramas resueltos de decisión (variantes) |
| `Contenido/PSEINT.pdf` | 3 | Configuración del perfil + sintaxis |
| `Contenido/Práctica arreglos.pdf`, `Ordenamiento y búsqueda.pdf`, `Ejercicios pre-parcial.pdf` | 1 / 1 / 5 | Solo enunciados (sin código ni diagramas) |
| `Contenido/AyD-intro.pdf`, `Bibliografía/TCD-1-AyD-intro.pdf` | 40 / 23 | Intro; repite el diagrama de la suma (intro p.25) |

Páginas **no** revisadas una por una: carátulas/divisores (Arreglos p.1, 15, 17, 27, 43, 52), diapositivas de texto de AyD-intro sin figuras, y `General/*` (programa y cronograma). Las imágenes están en `_paginas/<archivo>/p-NN.png` y los recortes en `_referencias/`.

> **Importante:** la cátedra **no usa un único estilo**. Las diapositivas (parte 1 y 2) son la fuente más consistente; `Arreglos.pdf` y `Práctica 1.pdf` traen variantes. En cada fila se marca la **mayoritaria** (la de las diapositivas de diagramación lógica).

---

## 1. Diagramas de flujo — una fila por construcción

Nombres de forma en draw.io obtenidos con `search_shapes`.

| Construcción | Forma exacta (mayoritaria) | Forma en draw.io | Texto de ejemplo | Dónde se ve | Variantes |
|---|---|---|---|---|---|
| **Inicio / Fin** | Círculo con la palabra dentro | `ellipse` con ancho = alto (la forma "Terminator" `mxgraph.flowchart.terminator` es la cápsula, ver Fin(Para)) | `Inicio`, `Fin` | parte1 p.3–5, 7, 12 · intro p.25 · recorte `01`, `02` | Arreglos p.8: óvalo (no círculo) con `inicio` en minúscula. Práctica 1: óvalos/círculos mezclados. Clase 4: "no hay problema si ponen un círculo para solicitar un número" |
| **Entrada** | Trapecio con el lado superior inclinado ("forma de teclado") | `Manual Input` → `shape=manualInput` (en la biblioteca Flowchart). **No** es el paralelogramo | `A,B` · `b,h` · `N,A` · `Ant,Cat` · `Animal,Edad` | parte1 p.4, 7, 12, 21, 23 · parte2 p.10, 13 · recorte `01`, `03` | Arreglos p.8: `leer aᵢ` (con "leer"). Práctica 1: ej.1 `A,B`; ej.2–12 `Leer A,B,C…` dentro de la misma forma (con esquinas redondeadas). Parte2 p.26: `R=random(100)+1` dentro de la forma de entrada (ver §3, OJO) |
| **Salida** | Cuña con la punta a la izquierda y el lado derecho curvo | `Display` → `mxgraph.flowchart.display` (Flowchart). Clase 2: *"dice Display"* | `C` · `"El Perímetro es ",P, "el Area es ",A` · `"El mayor es",A` · `"ERROR"` | parte1 p.5, 7, 12, 21, 23, 26, 29, 35, 37 · recorte `02` | Arreglos p.8: salida `sum` con base ondulada = forma `Document` (`mxgraph.flowchart.document2`). Un alumno en Clase 2 también menciona el "icono de documento". Práctica 1: cuña de punta izquierda con texto sin comillas (`La Suma es: Suma`) |
| **Proceso / asignación** | Rectángulo | rectángulo (`Process`) | `C ← A+B` · `P ← 2*b+2*h` / `A ← b*h` (dos juntas) | parte1 p.4, 7 · parte2 p.10, 14, 22 · recorte `01`, `04` | Práctica 1: rectángulos de **esquinas redondeadas** y texto descriptivo (`Calcular IVA`, `Descontar el 4%`) o `mayor <- n2` con `<-` |
| **Decisión simple** | Rombo; `Sí` sale por la **derecha**, `No` por la **izquierda**; si no, el `No` baja y vuelve al flujo | rombo (`decision`) | `radio>0` | parte1 p.18 · recorte `05` | Práctica 1 ej.7: `si` a la izquierda, `no` abajo |
| **Decisión doble** | Rombo con una acción en cada rama; ramas se juntan sin círculo antes de `Fin` | rombo | `radio>0` → `Perimetro ← 2*PI*rad` / `"ERROR"` · `A>B` | parte1 p.21, 23 · recorte `06` | Práctica 1 ej.9, 8: `si` izquierda / `no` derecha |
| **Decisión anidada** | Un rombo en la rama `No` de otro | rombos | `A>B`, luego `A=B` | parte1 p.26 · recorte `07` | Práctica 1 p.12: anidadas con `si`/`no` en minúscula |
| **Decisión independiente** | Rombos uno debajo del otro; la rama `No` se une a la entrada del siguiente | rombos en serie | `N1 < 0`, `N2 < 0` | parte1 p.29 · recorte `08` | — |
| **Condición compuesta** | Operador dentro del rombo, escrito `and` / `or` | rombo | `(N > 0)and(N < 13)` · `(Cat='A')or((Ant>=10)and(Ant<=20))` | parte1 p.35, 37 · recorte `09`, `10` | Práctica 1: `A<B ^ B<C` (con `^`) |
| **Para** | Hexágono alargado | `Preparation` (`shape=hexagon;…size=0.27`) | `Para i ← 1 , 10 , 1` | parte2 p.13, 14, 22 · recorte `11`, `12` | Arreglos p.8: `para i <- 1, 5, 1` con `<-`. Decreciente: `Para i ← N , 1 ,-1` (p.28). Límite variable: `Para i ← 1 , N , 1` (p.26) |
| **Fin (Para)** | Cápsula (rectángulo con lados redondeados) | `Terminator` | `Fin (Para)` | parte2 p.13, 14 · recorte `12` | Arreglos p.8: `fin (para)` en óvalo. **Sin flecha de retorno** |
| **Mientras (MQ)** | Hexágono igual al del `Para` | `Preparation` | `MQ        N!=0` (palabra MQ a la izquierda, condición al centro) | parte2 p.39, 40 · recorte `17`, `18` | Condiciones: `N>=0`, `(N mod 2 =0) and (N>20)`, `N1 mod 2 = 1` |
| **Fin (MQ)** | Cápsula | `Terminator` | `Fin (MQ)` | parte2 p.39, 40, 45 | **Sin flecha de retorno** |
| **Constantes** | Rectángulo de asignación (se inicializa al principio) | rectángulo | `PI ← 3.1416` | parte1 p.18, 21 · recorte `05` | — |
| **Contadores / acumuladores** | Inicializados en rectángulo(s) antes del `Para`/`MQ`; incrementados dentro | rectángulo | `CP ← 0 / CG ← 0` ; `S ← 0` ; `S ← S+A` ; `C ← C+1` | parte2 p.14, 22, 24, 41 · recorte `13b` | Dos contadores (o más) pueden ir juntos en un rectángulo; pág. 21: `CG ← CG+1 / SG ← SG+Edad` en el mismo rectángulo |
| **Máximos / mínimos** | Inicial extremo en un rectángulo; decisión dentro del ciclo; salida al final | rectángulo + rombo | `EMAX ← -1000`, `E>EMAX`, `EMAX ← E` · `AMIN ← 1000`, `A<AMIN` · `AMIN ← A / UMIN ← i` | parte2 p.32, 34, 36 · recorte `14`, `15`, `16` | — (el valor inicial es ±1000, no el primer dato) |
| **Anotaciones punteadas** | Recuadro de **borde punteado** con texto, unido al paso con una flecha simple | rectángulo `dashed=1` (no el `Annotation` corchete de draw.io) | `Lectura desde teclado de los valores N y A` · `PI actúa como constante…` | parte1 p.12, 18 · parte2 p.10 · recorte `03`, `05` | Opcional |
| **Etiquetas Sí / No** | Texto suelto, con tilde: `Sí` / `No`, pegado a la esquina del rombo | texto libre | `Sí`, `No` | parte1 p.18–37 | Práctica 1: `si` / `no` minúscula, sin tilde |
| **Flechas** | Líneas con punta; "de arriba abajo e izquierda a derecha" | conector ortogonal | — | parte1 p.3, 5 | — |
| **Arreglos en diagrama** | Mismo esquema con `Para`; índices como subíndice `aᵢ` | hexágono + entrada | `leer aᵢ` · `sum <- sum + aᵢ * bᵢ` | Arreglos p.8 · recorte `21` | Solo una diapositiva de Arreglos tiene flujograma; el resto usa pseudocódigo o diagramas Chapin (p.60, 62, 63) |

Texto libre del enunciado, bloques de texto, y flechas de unión **sin círculos de conexión**: confirmado en todos los diagramas de decisión (las ramas se juntan con líneas, sin círculo).

### Notación que aparece dentro de las figuras (diapositivas)
- Asignación: `←` (flecha). Comparaciones: `=`, `!=`, `>=`, `<=`. Lógicos: `and`, `or`. Resto: `mod`. Aleatorio: `random(n)+1`. Entre comillas va el texto de la salida; en la salida se separan con comas el texto y las variables.

---

## 2. Dicho en clase (transcripciones, Whisper — pueden tener errores de transcripción)

- **Clase 1** (símbolos): *"el inicio y el fin son dos círculos"*; la forma de entrada *"simula un teclado… con este dibujito yo ya sé que estoy leyendo… **no tengo que escribir adentro leer**"*; *"el rectángulo nos está indicando que hay un proceso"*; *"para mostrar por pantalla usamos este que es el **display**"*; *"siempre las flechas van de arriba para abajo"*. También advierten que en el parcial el tiempo es limitado y hay que dominar draw.io.
- **Clase 2** (decisiones): *"el símbolo… dice **Display**, si ustedes lo buscan en draw.io"*; *"en el display, para ir concatenando va con comas"*; *"siempre el que recibe a la izquierda y la flechita va [hacia él]"* (`C ← A+B`). Sobre la entrada: *"algunos ponen el paralelogramo en lugar del teclado. **El que va para la lectura es el teclado**"*. Sobre constantes: *"conviene ponerlo en un **rectángulo** porque en definitiva termina siendo una operación"* (asignar un valor sin que lo ingrese el usuario). Sobre el rombo: *"salgo por el sí, sino salgo por el no… siempre dos salidas"*; piden rotular `Sí`/`No` y comentan que, si no se rotula, *"vamos a pensar que [la derecha] es por el lado del sí"* (frase con transcripción dudosa).
- **Clase 3** (`Para`): *"un rectángulo con estas puntitas a los dos lados"* (el hexágono) con `Para i ← 1, 10, 1`; *"el fin para… un redondito"* (la cápsula); el `Para` *"actúa como un contador de vueltas"*.
- **Clase 4** (`Mientras`): *"el gráfico es el mismo que el para… MQ"*; *"**lo tengo que pedir antes de empezar y lo tengo que pedir antes de terminar**. Esta es la mayor dificultad del mientras"*; variante: inicializar N1 y N2 en 1 para entrar sin pedir el dato — *"ojo que esto no se puede hacer en todos los ejercicios"*.
- **Clase 7** (arreglos): *"en algoritmos y estructuras de datos la **posición empieza en uno**"*; *"el número del hasta del para tiene que ser la misma cantidad de la dimensión… si hacemos de más se nos va de rango y da error"*; si no dice cuántos elementos: *"conviene que sea cortito [4 o 5]"*.
- **Clase 8** (burbuja/selección/intercalación): *"los para para ordenar son **hasta un número menos** de la longitud del arreglo… si lo empezamos en seis va a buscar la posición siete y se nos va de rango"*. Sobre el parcial: habrá *"un ejercicio [de repetición] que va a tener la diagramación lógica"* (`Mientras` o `Para`), *"un ejercicio de arreglo… puede ser de búsqueda, de intercalación, de ordenamiento con cualquiera de estos dos métodos"* y funciones/procedimientos; *"uno y medio, dos horas"*; sincrónico, con cámara y pantalla compartida.
- **Intercalación:** en las grabaciones disponibles solo se da la **definición** (Clase 8, minuto inicial). **No hay explicación del algoritmo**: es lo que está en `Arreglos.pdf` p.44–51 y 65–70 (copiado en §4).
- **Ejercicios Pre-Parcial:** la grabación no menciona figuras ni notación.

---

## 3. Contraste con tu lista (CONFIRMA / CONTRADICE)

| | Tu afirmación | Veredicto | Evidencia |
|---|---|---|---|
| a | Inicio/Fin = círculo | **CONFIRMA** | parte1 p.3–5, 7; Clase 1 y 2. Variante: óvalos en Arreglos p.8 y Práctica 1 |
| b | Entrada = forma de teclado, solo variables, sin "Leer" | **CONFIRMA** (con matices) | Todas las diapositivas de parte1/parte2 (`A,B`, `N`, `Animal,Edad`); Clase 1 lo dice textual. **Matices:** Arreglos p.8 y Práctica 1 ej.2–12 escriben `Leer`/`leer` dentro de la forma; parte2 p.26 mete una asignación (`R=random(100)+1`) en la forma de entrada, lo que contradice Clase 2 (las asignaciones van en rectángulo) |
| c | Salida = Display, `"texto",variable` | **CONFIRMA** | parte1 p.5, 7, 21…; Clase 2 *"dice Display"*. **Matiz:** Arreglos p.8 dibuja la salida con la forma *Document* (base ondulada) |
| d | Proceso = rectángulo, `var ← expr`, varias asignaciones juntas | **CONFIRMA** | parte1 p.7; parte2 p.10, 14, 22, 24 (hasta tres asignaciones en un rectángulo). Práctica 1: rectángulos redondeados, a veces texto descriptivo |
| e | Decisión = rombo, Sí derecha / No izquierda, ramas se juntan sin círculos | **CONFIRMA** (diapositivas) / **CONTRADICE** (Práctica 1) | En todas las diapositivas con rombos que miré (parte1 p.18, 21, 23, 26, 29, 35, 37; parte2 p.22, 24, 26, 32, 34, 36, 45) el `Sí` va a la derecha y el `No` a la izquierda y las ramas se unen sin círculos. **Pero** Práctica 1 (p.7–12) pone `si` a la **izquierda** y `no` a la derecha/abajo, en minúscula. Clase 2 solo exige rotular ambas ramas |
| f | Para = hexágono `Para i ← ini , fin , paso` + cápsula `Fin (Para)`, sin retorno | **CONFIRMA** | parte2 p.13–14, 16, 22, 28–30, 49; Clase 3. Con paso negativo: `N , 1 ,-1` |
| g | Mientras = hexágono `MQ cond` + cápsula `Fin (MQ)`, lectura antes y al final del cuerpo | **CONFIRMA** | parte2 p.39–40, 43, 45; Clase 4 lo explica. Variante: p.47 (inicializa N1,N2=1 y la lectura va dentro, sin lectura previa) |
| h | Constantes en rectángulo, con anotación punteada opcional | **CONFIRMA** | parte1 p.18 (`PI ← 3.1416` + nota punteada); Clase 2 |

### Otra contradicción que conviene que veas
Mis cambios previos usaron `shape=display` para salidas y `shape=parallelogram` (**Data**) para entradas, según tus instrucciones de ese momento. Este relevamiento muestra que la cátedra usa la forma de **teclado** (`Manual Input`, `shape=manualInput`) para la entrada, y que en la biblioteca Flowchart la salida es `mxgraph.flowchart.display`. Clase 2 dice textualmente que el paralelogramo **no** es lo que va para la lectura. Además, los `Para`/`MQ` hoy están dibujados en los `.drawio` con rectángulos, no con hexágonos + cápsulas. No toqué nada: queda para tu decisión.

---

## 4. PseInt: arreglos

Convenciones del perfil (PSEINT.pdf p.1): **"Utilizar índices en arreglos y cadenas en base 0" está desmarcado → los índices empiezan en 1**; "Permitir utilizar variables para dimensionar arreglos" y "Utilizar sintaxis flexible" están marcados; "Obligar a definir los tipos de variables" desmarcado.

Notación del código tal como está en el material: se transcribió con su formato (`Fin Para` y `FinPara` mezclados, etc.). Los programas marcados ✔ **se ejecutaron en PSeInt tal cual**.

### 4.1 Declaración: `Definir` y `Dimension`
Arreglos.pdf **p.4–5** muestra primero la sintaxis tipo C (**OJO:** `<tipo> <identificador>[N]`, `int vector[10];`, `string tabla[3][4];` **no es PseInt**; es solo la idea). En PseInt:

```
Definir a Como Real
Dimension a[5]
```
(Arreglos p.9) · matriz (p.11): `Definir a Como Entero` / `Dimension a[4,3]` · varios a la vez (p.66, 68, 70): `Definir A, B, total Como Entero` / `Dimension A[9], B[7], total[16]` · `Definir i, j, k, m Como Entero`.
Primero filas, después columnas (`a[4,3]`: 4 filas, 3 columnas; Clase 8).

### 4.2 Carga y recorrido con `Para` ✔ (Arreglos p.9, Problema 1)
```
Algoritmo Problema1

	Definir a Como Real
	Dimension a[5]

	Definir b Como Real
	Dimension b[5]


	Para i<-1 Hasta 5 Con Paso 1 Hacer
		Escribir "Ingrese el elemento ", i, " del 1er array: "
		Leer a[i]
		Escribir "Ingrese el elemento ", i, " del 2do array: "
		Leer b[i]

	Fin Para

	c<-0

	Para i<-1 Hasta 5 Con Paso 1 Hacer

		c<- c+a[i]*b[i]

	Fin Para

	Escribir "La suma del producto de los elementos de igual posicion de los arrays ingresados anteriormente es: ", c

FinAlgoritmo
```
**OJO:** el diagrama de la p.8 acumula en `sum`; el código de la p.9 usa `c`. Mismo algoritmo, nombre distinto.

Matriz, carga y recorrido por filas y columnas (Arreglos p.11–12, Problema 2):
```
Algoritmo Problema2

	Definir a Como Entero
	Dimension a[4,3]

	Definir sumf Como Entero
	Dimension sumf[4]

	Definir sumc Como Entero
	Dimension sumc[3]

	Para i<-1 Hasta 4 Con Paso 1 Hacer
		Para j<- 1 Hasta 3 Con Paso 1 Hacer
			Escribir "Ingrese el elemento de la fila ", i, ", columna ", j
			Leer a[i,j]
		FinPara
	Fin Para

	Para i<-1 Hasta 4 Con Paso 1 Hacer
		sumf[i]<-0
		Para j<- 1 Hasta 3 Con Paso 1 Hacer
			sumf[i]<-sumf[i]+a[i,j]
		FinPara
	Fin Para

	Para j<-1 Hasta 3 Con Paso 1 Hacer
		sumc[j]<-0
		Para i <- 1 Hasta 4 Con Paso 1 Hacer
			sumc[j]<-sumc[j]+a[i,j]
		FinPara

	FinPara

	Escribir "El array con la suma de los elementos de cada fila es: "
	Para i<-1 Hasta 4 Con Paso 1 Hacer
		Escribir sumf[i]
	FinPara

	Escribir "El array con la suma de los elementos de cada columna es: "
	Para i<-1 Hasta 3 Con Paso 1 Hacer
		Escribir sumc[i]
	FinPara

FinAlgoritmo
```
**OJO:** la p.12 repite el bloque que calcula `sumf` (efecto de la diapositiva partida en dos). Al copiar de las dos páginas el bloque queda duplicado; aquí se transcribió una sola vez.

Máximo en matriz con posición (p.14, Problema 3):
```
Algoritmo prueba1
	Definir escu Como Entero
	Dimension escu[5,4]

	Para i<-1 Hasta 5 Con Paso 1 Hacer
		Para j<- 1 Hasta 4 Con Paso 1 Hacer
			Escribir "la cantidad de alumnos del grado ", i, " division ", j
			Leer escu[i,j]
		FinPara
	Fin Para

	gradomax <- 1
	divmax <- 1
	maxalum <- escu[1,1]

	Para i<-1 Hasta 5 Con Paso 1 Hacer
		Para j<- 1 Hasta 4 Con Paso 1 Hacer
			Si escu[i,j]>maxalum Entonces
				gradomax <- i
				divmax <- j
				maxalum <- escu[i,j]
			Fin Si
		FinPara
	Fin Para

	Escribir "Con ", maxalum, " alumnos, el grado ", gradomax, " division ", divmax, " es el mayor"

FinAlgoritmo
```

### 4.3 Búsqueda secuencial
**Primera ocurrencia** (Arreglos p.33, Problema 6):
```
Algoritmo busquedasecuencia

      Definir a Como Entero
      Dimension a[7]

      Para i<-1 Hasta 7 Con Paso 1 Hacer
           Escribir "Ingrese el numero ", i
           Leer a[i]
      Fin Para

      Escribir "Ingrese el numero que desea buscar"
      Leer k

      i<-1

      Escribir a[i]
      Escribir k


      Mientras (a[i] <> k Y i <= 7) Hacer
           i<-i+1
      Fin Mientras

      Si a[i] = k Entonces
           Escribir "Esta en la posicion ", i
      SiNo
           Escribir "No esta"
      Fin Si

FinAlgoritmo
```
> **OJO (ejecutado ✔):** si el valor **no está**, `i` llega a 8 y PSeInt corta con `ERROR 303: Subindice (8) fuera de rango (1...7)` (el `Y` evalúa `a[i]` antes de mirar `i<=7`). Si está (probado con k=9 en la posición 3) funciona. Además quedaron **dos `Escribir` de depuración** (`Escribir a[i]` y `Escribir k`) que imprimen antes de buscar.

**Todas las ocurrencias** (p.35, "Solución problema ejercicio"; con bandera):
```
Algoritmo EjercicioTarea

      Definir a Como Entero
      Dimension a[7]

      Para i<-1 Hasta 7 Con Paso 1 Hacer
           Escribir "Ingrese el numero ", i
           Leer a[i]
      Fin Para

      Escribir "Ingrese el numero buscado"
      Leer k

      esta <- Falso

      Para i<-1 Hasta 7 Con Paso 1 Hacer

           Si a[i] = k Entonces
                 Escribir "Esta en la posicion ", i
                 esta <- Verdadero
           Fin Si

      Fin Para


      Si esta = Falso Entonces
           Escribir "No esta"
      Fin Si

FinAlgoritmo
```
(Esta versión recorre siempre los 7 y no tiene el problema de rango.)

### 4.4 Búsqueda binaria (dicotómica)
Explicación (p.36–37): dos indicadores `min`/`max`, `medio ← (min + max) div 2`, si `a[medio] < k` → `min ← medio + 1`, si no `max ← medio - 1`; termina cuando `max < min` ("max por encima del mínimo", p.39).

**Problema 7** (Arreglos p.42):
```
Algoritmo BusquedaDicotomica

       Definir a Como Entero
       Dimension a[11]

       Para i<-1 Hasta 11 Con Paso 1 Hacer
              Escribir "Ingrese el numero ", i
              Leer a[i]
       Fin Para

       Escribir "Ingrese el numero buscado: "
       Leer k

       min <- 1
       max <- 11
       medio <- round((min + max) / 2)

       Mientras a[medio] <> k Y min <= max Hacer

              Si a[medio] < k Entonces
                     min <- medio + 1
              SiNo
                     max <- medio - 1
              FinSi

              medio <- round((min + max) / 2)

       Fin Mientras

       Si a[medio] = k Entonces
              Escribir "Esta en la posicion ", medio
       SiNo
              Escribir "No esta"
       FinSi

FinAlgoritmo
```
> **OJO (ejecutado ✔):** `round(...)` **no existe en PSeInt** → `ERROR 202: El identificador ROUND no corresponde a un arreglo o subproceso`. La función es `redon(...)` (PSEINT.pdf p.2 la lista). Con `redon` el programa anda para valores presentes (9→pos 5, 94→11, −22→1) y para ausentes intermedios (23, −30 → "No esta"), pero **si el valor buscado es mayor que todos (ej. 100)** vuelve a dar `ERROR 303: Subindice (12) fuera de rango (1...11)`. La explicación de la p.37 usa `div`, el código usa `round`.

**Pre-parcial, Ejercicio 3** (Arreglos p.58; usa `redon`):
```
Algoritmo Eje3PreParcial

       Definir a Como Entero
       Dimension a[5]

       Para i<-1 Hasta 5 Con Paso 1 Hacer
              Escribir "Ingrese el ", i, " numero: "
              Leer a[i]
       FinPara


       Escribir "Ingrese el numero buscado: "
       Leer n

       inf<-1
       sup<-5
       med<- redon((inf+sup)/2)


       Mientras (inf<=sup) Y (n<>a[med]) Hacer

              Si n<a[med] Entonces
                     sup<-med-1
              SiNo
                     inf<-med+1
              FinSi
              med<- redon((inf+sup)/2)

       FinMientras

       Si n<>a[med]
              Escribir "No se encontro"
       SiNo
              Escribir "El numero ", n, " se encuentra en la posicion ", med
       FinSi

FinAlgoritmo
```
> **OJO (ejecutado ✔):** (1) el enunciado (p.57) dice **30** números y el código usa `Dimension a[5]`; (2) `Si n<>a[med]` **no lleva `Entonces`**: anda porque el perfil es "sintaxis flexible", pero no es lo estándar; (3) si `n` es mayor que todos (probado con 20) da `ERROR 303: Subindice (6) fuera de rango (1...5)`. Con valores presentes (7→pos 4) o ausentes intermedios/menores (4, 0 → "No se encontro") funciona.

### 4.5 Ordenamiento por intercambio (burbuja)
Explicación (p.19–20): se compara el último con el penúltimo y se intercambia si no están en orden, hasta el primero; cada recorrida deja el menor arriba.

**Problema 4** (Arreglos p.22):
```
Algoritmo Intercambio
      Definir a Como Entero
      Dimension a[6]

      Para i<-1 Hasta 6 Con Paso 1 Hacer
           Escribir "ingrese el numero ", i
           Leer a[i]
      Fin Para

      Para i <- 1 Hasta  5 Con Paso 1 Hacer
           Para j <- 5 Hasta i Con Paso -1 Hacer
                 Si a[j] > a[j+1] Entonces
                       aux <- a[j]
                       a[j] <- a[j+1]
                       a[j+1] <- aux
                 FinSi
           FinPara
      FinPara

      Para i <- 1 Hasta 6 Con Paso 1 Hacer
           Escribir a[i]
      FinPara

FinAlgoritmo
```
> **OJO:** el enunciado (p.21) dice **5** elementos, pero el código (y el ejemplo de la p.20) usan **6** (`Dimension a[6]`, lectura hasta 6). Ejecutado ✔ con 8,2,0,5,1,4 → 0 1 2 4 5 8: es correcto para 6. Los `Para` de ordenar van **hasta 5 (= dimensión − 1)** y `j` baja hasta `i`; así `a[j+1]` nunca excede la dimensión (Clase 8 lo remarca).

**Pre-parcial, Ejercicio 2** (Arreglos p.56; "mostrarlos ordenados en forma decreciente"):
```
Algoritmo Eje2PreParcial

      Definir a Como Entero
      Dimension a[20]

      Para i<-1 Hasta 20 Con Paso 1 Hacer
           Escribir "Ingrese el ", i, " numero: "
           Leer a[i]
      FinPara

      Para i<-1 Hasta 19 Con Paso 1 Hacer
           Para j<-i+1 Hasta 20 Con Paso 1 Hacer
                 Si a[i]<a[j] Entonces
                       aux<-a[i]
                       a[i]<-a[j]
                       a[j]<-aux
                 FinSi
           FinPara
      FinPara

      Para i<- 1 Hasta 20 Con Paso 1 Hacer
           Escribir a[i]
      FinPara

FinAlgoritmo
```
**Nota:** este ordenamiento (comparar `a[i]` con todos los `a[j]` siguientes) **no es burbuja ni selección del mínimo**; es un intercambio directo. Aparece como solución del pre-parcial.

### 4.6 Ordenamiento por selección del mínimo ✔ (Arreglos p.26, Problema 5)
```
Algoritmo Seleccion

      Definir a Como Entero
      Dimension a[6]

      Para i<-1 Hasta 6 Con Paso 1 Hacer
           Escribir "ingrese el numero ", i
           Leer a[i]
      Fin Para

      Para i <- 1 Hasta 5 Con Paso 1 Hacer
           min <- a[i]
           posmin <- i
           Para j <- i+1 Hasta 6 Con Paso 1 Hacer
                 Si a[j] < min Entonces
                         min <- a[j]
                         posmin <- j
                 FinSi
           FinPara
           a[posmin] <- a[i]
           a[i] <- min
      FinPara

      Para i <- 1 Hasta 6 Con Paso 1 Hacer
           Escribir a[i]
      FinPara

FinAlgoritmo
```
> **OJO:** igual que el Problema 4, el enunciado (p.25) dice **5** elementos y el código usa **6**. Ejecutado ✔ con 8,2,0,5,1,4 → 0 1 2 4 5 8.

### 4.7 Intercalación (dos arreglos ordenados → un tercero ordenado)
**Idea (p.44–46):** `a` (N elementos) y `b` (M) ordenados con el mismo criterio; armar `c` de `N+M` ordenado **sin** copiar y volver a ordenar (p.46: "sería muy ineficiente"). Índices `i` (en `a`), `j` (en `b`), `k` (en `c`), los tres en 1. Se compara `a[i]` con `b[j]`, se copia el menor a `c[k]`, se incrementa `k` y el índice del arreglo del que se copió, hasta agotar uno; después se copia **al final** lo que sobra del otro. Ejemplo (p.45): a = 9, 35, 47 / b = 7, 20, 25, 43, 50, 73, 92 → c = 7, 9, 20, 25, 35, 43, 47, 50, 73, 92. Eficiencia (p.50–51): no hay ciclos anidados.

**Problema 8** (Arreglos p.47–49) — enunciado: *"Leer un arreglo de 3 elementos enteros (se sabe que ingresa clasificado en forma creciente), leer luego un arreglo de 7 elementos enteros (…creciente). Formar un arreglo que contenga todos los elementos del primero y todos los elementos del segundo y que también esté clasificado en forma creciente."* Código completo ✔ (p.48 + p.49):
```
Algoritmo Intercalacion

       Definir a Como Entero
       Dimension a[3]

       Definir b Como Entero
       Dimension b[7]

       Definir c Como Entero
       Dimension c[10]

       Para i<-1 Hasta 3 Con Paso 1 Hacer
              Escribir "Ingrese el numero ", i, " del primer array: "
              Leer a[i]
       Fin Para

       Para i<-1 Hasta 7 Con Paso 1 Hacer
              Escribir "Ingrese el numero ", i, " del segundo array: "
              Leer b[i]
       Fin Para

       i <- 1
       j <- 1
       k <- 1

       Mientras i<=3 Y j<=7 Hacer

              Si a[i] <= b[j] Entonces
                     c[k] <- a[i]
                     i <- i+1
              SiNo
                     c[k] <- b[j]
                     j <- j+1
              FinSi

              k <- k+1

       Fin Mientras

       Si i>3 Entonces
              Para m<-j Hasta 7 Con Paso 1 Hacer
                     c[k] <- b[m]
                     k<-k+1
              Fin Para
       SiNo
              Para m<-i Hasta 3 Con Paso 1 Hacer
                     c[k] <- a[m]
                     k<-k+1
              Fin Para
       FinSi


       Para i <-1 Hasta 10 Con Paso 1 Hacer
             Escribir c[i]
       Fin Para

FinAlgoritmo
```
Ejecutado ✔ con a = 9, 35, 47 y b = 7, 20, 25, 43, 50, 73, 92 → 7 9 20 25 35 43 47 50 73 92. Sin observaciones: es consistente con la explicación. Los tres bloques clave: **(1)** `Mientras i<=N Y j<=M` compara y copia el menor; **(2)** `Si i>N` → sobran elementos de `b` (copiar de `j` a `M`), `SiNo` → sobran de `a` (copiar de `i` a `N`); **(3)** `k` se incrementa en cada copia.

**Ejercicio 8** (Arreglos p.65–66; enunciado: *Alfa* 9 valores y *Beta* 7 valores ascendentes, intercalar manteniendo el orden ascendente y **mostrar en orden descendente**) ✔:
```
Proceso Intercalacion_VentasSucursales
     Definir A, B, total Como Entero
     Dimension A[9], B[7], total[16]
     Definir i, j, k, m Como Entero

     // Ascendente
     A[1]<-100; A[2]<-120; A[3]<-140; A[4]<-150; A[5]<-190; A[6]<-210; A[7]<-260; A[8]<-300; A[9]<-320
     B[1]<-110; B[2]<-130; B[3]<-135; B[4]<-170; B[5]<-200; B[6]<-280; B[7]<-350

     i<-1; j<-1; k<-1
     Mientras i<=9 Y j<=7 Hacer
          Si A[i] <= B[j] Entonces
               total[k]<-A[i]; i<-i+1
          SiNo
               total[k]<-B[j]; j<-j+1
          FinSi
          k<-k+1
     FinMientras

     Si i>9 Entonces
          Para m<-j Hasta 7
               total[k]<-B[m]; k<-k+1
          FinPara
     SiNo
          Para m<-i Hasta 9
               total[k]<-A[m]; k<-k+1
          FinPara
     FinSi

     Escribir "Combinado (desc):"
     Para m<-16 Hasta 1 Con Paso -1
          Escribir total[m]
     FinPara
FinProceso
```
Salida ✔: 350 320 300 280 260 210 200 190 170 150 140 135 130 120 110 100.

**Ejercicio 9** (p.67–68; temperaturas, 6 y 6 valores) ✔:
```
Proceso Intercalacion_Temperaturas
     Definir man, tar, tot Como Real
     Dimension man[6], tar[6], tot[12]
     Definir i, j, k, m Como Entero

     man[1]<-10.5; man[2]<-12.0; man[3]<-13.2; man[4]<-14.0; man[5]<-15.8; man[6]<-16.1
     tar[1]<-11.0; tar[2]<-12.5; tar[3]<-14.1; tar[4]<-15.0; tar[5]<-16.2; tar[6]<-17.4

     i<-1; j<-1; k<-1
     Mientras i<=6 Y j<=6 Hacer
          Si man[i] <= tar[j] Entonces
               tot[k]<-man[i]; i<-i+1
          SiNo
               tot[k]<-tar[j]; j<-j+1
          FinSi
          k<-k+1
     FinMientras

     Si i>6 Entonces
          Para m<-j Hasta 6
               tot[k]<-tar[m]; k<-k+1
          FinPara
     SiNo
          Para m<-i Hasta 6
               tot[k]<-man[m]; k<-k+1
          FinPara
     FinSi

     Escribir "Temperaturas (desc):"
     Para m<-12 Hasta 1 Con Paso -1
          Escribir tot[m]
     FinPara
FinProceso
```
**Ejercicio 10** (p.69–70; ligas, 4 y 6 valores) ✔:
```
Proceso Intercalacion_PuntosLigas
     Definir L1, L2, T Como Entero
     Dimension L1[4], L2[6], T[10]
     Definir i, j, k, m Como Entero

     L1[1]<-12; L1[2]<-18; L1[3]<-21; L1[4]<-25
     L2[1]<-10; L2[2]<-14; L2[3]<-16; L2[4]<-22; L2[5]<-27; L2[6]<-30

     i<-1; j<-1; k<-1
     Mientras i<=4 Y j<=6 Hacer
          Si L1[i] <= L2[j] Entonces
               T[k]<-L1[i]; i<-i+1
          SiNo
               T[k]<-L2[j]; j<-j+1
          FinSi
          k<-k+1
     FinMientras

     Si i>4 Entonces
          Para m<-j Hasta 6
               T[k]<-L2[m]; k<-k+1
          FinPara
     SiNo
          Para m<-i Hasta 4
               T[k]<-L1[m]; k<-k+1
          FinPara
     FinSi

     Escribir "Puntos combinados (desc):"
     Para m<-10 Hasta 1 Con Paso -1
          Escribir T[m]
     FinPara
FinProceso
```
Observaciones comunes a 8, 9 y 10: usan `Proceso`/`FinProceso` (no `Algoritmo`/`FinAlgoritmo`); cargan los datos por asignación en vez de `Leer`; el `Para` sin `Con Paso` (paso 1 implícito) y el descendente con `Con Paso -1`; es la **misma plantilla** que el Problema 8 (Mientras + `Si i>N` + `Para` de sobrantes). Ninguna de las tres tiene errores.

### 4.8 Otros ejercicios del pre-parcial con arreglos (Arreglos p.53–64)
- **Ejercicio 1** (p.53–54, vendedores 1 a 3 con centinela 0; acumulador por índice) ✔ — **OJO:** no valida `nv`; si se ingresa un vendedor 4 da `ERROR 303: Subindice (4) fuera de rango (1...3)` (el enunciado dice que van del 1 al 3, así que es una suposición razonable). Código:
```
Algoritmo Eje1PreParcial

      Definir TotalVendedor Como Real
      Dimension TotalVendedor[3]

      Para i<-1 Hasta 3 Con Paso 1 Hacer
           TotalVendedor[i] <- 0
      Fin Para

      Escribir "Ingrese el numero de vendedor: "
      Leer nv

      Mientras nv <> 0 Hacer

           Escribir "Ingrese el monto de la venta: "
           Leer mv

           TotalVendedor[nv] <- TotalVendedor[nv] + mv

           Escribir "Ingrese el numero de vendedor: "
           Leer nv

      Fin Mientras

      Para i<-1 Hasta 3 Con Paso 1 Hacer
           Escribir "El vendedor ", i, " vendio la suma total de: $ ", TotalVendedor[i]
      Fin Para

FinAlgoritmo
```
- **Ejercicios 4, 5 y 6** (p.59–63): solo hay enunciado y un **diagrama Chapin (Nassi-Shneiderman)** — sin código PseInt. Ej.4: máximo en matriz `AL[I,J]` (30 alumnos × 5 columnas); Ej.5: ordenar la matriz por número de alumno con un `FOR K:=1 TO 5` para intercambiar la fila; Ej.6: búsqueda dicotómica en la matriz ordenada (`INF/SUP/MED` con `MED := (INF+SUP) DIV 2`).
- **Ejercicio 7** (p.64): solo enunciado (promedio de aprobados/desaprobados con 3 notas × 20 alumnos, aprueba con 6); sin solución.
- En el material "Práctica arreglos" (1 pág.) hay 9 ejercicios (inicializar/mostrar, suma, promedio, buscar, matrices 3×3, 2×3, 3×4, 2×2, traspuesta) y en "Ordenamiento y búsqueda" (1 pág.) los de burbuja (1–4) y selección del mínimo (6–10) — **ninguno tiene resolución en el campus**. (La numeración salta el 5 en el original.)

### 4.9 Resumen de OJO en el código de la cátedra
| Dónde | Problema | Comprobado |
|---|---|---|
| Arreglos p.4–5 | Sintaxis tipo C (`int vector[10];`), no PseInt | Lectura |
| Arreglos p.8 vs p.9 | Diagrama acumula en `sum`, código en `c` | Lectura |
| Arreglos p.12 | Bloque `sumf` duplicado por corte de diapositiva | Lectura |
| Arreglos p.21–22 y p.25–26 | Enunciado "5 elementos", código con `a[6]` | Ejecutado ✔ |
| Arreglos p.33 | `a[i]` con `i=8` si no está (`ERROR 303`); dos `Escribir` de depuración | Ejecutado ✔ |
| Arreglos p.42 | `round()` no existe (`ERROR 202`); y `ERROR 303` si el valor es mayor que todos, aun con `redon` | Ejecutado ✔ |
| Arreglos p.57–58 | Enunciado 30 números, código `a[5]`; falta `Entonces`; `ERROR 303` si `n` es mayor que todos | Ejecutado ✔ |
| Arreglos p.53–54 | Sin validar vendedor fuera de 1..3 (`ERROR 303`) | Ejecutado ✔ |
| Arreglos p.56 | El "ordenamiento" no es burbuja ni selección | Lectura |
| PSEINT.pdf p.3 (`Para`) | `suma_nota ← suma_nota + N` sin inicializar `suma_nota` en 0 antes del `Para` (el editor de PSeInt muestra `<-` como ← y `<>` como ≠; eso es solo visual) | Lectura |

---

## 5. Archivos de referencia (recortes en `_referencias/`)

`01`–`25`: recortes de las páginas citadas (nombre = construcción + archivo + página). `13b` es el recorte de contadores/decisión dentro del `Para` (parte2 p.22).
