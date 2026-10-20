---
name: resolv-ejercicio-ayd
description: Resuelve ejercicios de algoritmos de la materia Datos y Algoritmos: analiza el enunciado, genera la resolución en Markdown y crea el diagrama de flujo en draw.io usando el MCP, siguiendo la convención visual exacta de la cátedra.
---

# resolv-ejercicio-ayd

Resuelve un ejercicio de **Datos y Algoritmos** (Tecnicatura en Ciencia de Datos, UGR). Estilo: didáctico, pensado para que un estudiante entienda la solución.

**Proyecto:** `/home/gonza/Facultad/Tecnicatura en Ciencia de Datos/2do Anio/DATOS Y ALGORITMOS` · **Carpeta de trabajo:** `Practica/`.
Herramientas: MCP de draw.io (diagrama) y PseInt (pseudocódigo en `resolucion.md`).

## Reglas generales

- Solo escribir dentro de `Practica/`, salvo que sea estrictamente necesario.
- No borrar ni sobreescribir archivos o carpetas existentes sin confirmación explícita del usuario.
- **NO hacer `git commit`.** Esperar confirmación del usuario.
- No dejar archivos temporales.

## Pasos

### 1. Recibir el enunciado
- Puede venir como texto directo o como ruta a un archivo (leerlo con Read).
- Si hay ambigüedad (valores de constantes, casos límite, qué hacer ante datos inválidos, tipo de dato, etc.), **indicarla explícitamente antes de resolver** y explicitar el supuesto adoptado. Si cambia sustancialmente la solución, preguntar al usuario.

### 2. Determinar la carpeta destino
- Listar `Practica/` para ver los ejercicios existentes. La estructura actual puede estar agrupada por tema y parte (p. ej. `Practica/Diagramacion Logica/Parte 1/Ejercicio_NN/`). Usar la agrupación que corresponda al ejercicio; si no es obvia, preguntar al usuario el tema/parte.
- Asignar automáticamente el siguiente número libre dentro de esa carpeta (`Ejercicio_02`, `Ejercicio_03`, … con dos dígitos).
- Si la carpeta destino ya existe, **no tocarla** sin confirmación.
- Si el directorio del tema tiene un `README.md` con tabla índice de ejercicios, proponer agregar la fila nueva (es una modificación dentro de `Practica/`, avisarla en el reporte).

### 3. Analizar el ejercicio
Identificar y dejar escrito:
- **Entradas** (datos que ingresan), **proceso** (qué se calcula/decide) y **salidas**.
- Estructuras necesarias: secuencial, decisión (simple / doble / anidada), repetición (Para / Mientras / Repetir), acumuladores, contadores, máximos/mínimos, constantes.
- Si requiere diagrama de flujo (casi siempre sí).
- Si hay más de un enfoque posible, mencionar las alternativas (y por qué se eligió una).

### 4. Crear archivos en `Practica/.../Ejercicio_XX/`

**`enunciado.md`** — el enunciado tal como fue dado, sin modificar.

**`resolucion.md`** — estructura fija:

```markdown
# Ejercicio XX
## Enunciado
(enunciado completo)
## Análisis
## Resolución
(pseudocódigo PseInt en bloque de código)
## Explicación paso a paso
## Diagrama
## Conclusión
```

- La sección *Resolución* usa sintaxis PseInt (`Algoritmo`/`FinAlgoritmo`, `Definir`, `Leer`, `Escribir`, `Si/Entonces/Sino/FinSi`, `Para/Mientras/Repetir`, asignación con `<-`).
- Incluir ambigüedades/supuestos y alternativas (en *Análisis* o *Conclusión*).
- *Diagrama*: enlazar `./diagrama.drawio`. Si el ejercicio **no requiere diagrama**, decirlo ahí con el motivo y **no crear** el `.drawio`.

**`diagrama.drawio`** — crearlo con el MCP de draw.io (cargar sus herramientas con ToolSearch si están diferidas) siguiendo la convención de abajo. Si el MCP no está disponible, avisar al usuario; no inventar otro método sin decirlo.

### 5. Convención visual EXACTA de la cátedra (obligatoria)

Es el estilo **más básico de draw.io**: **fondo blanco, bordes negros y texto negro**, sin colores adicionales. Por eso los `style` **no llevan** `fillColor`, `strokeColor` ni `fontColor`: se deja el color por defecto de draw.io. Usar **exactamente** estos `style`:

| Elemento | Shape de draw.io (grupo Flowchart) | `style` exacto |
|---|---|---|
| Inicio / Fin | **Círculo perfecto** (ancho = alto, p. ej. 80×80) | `ellipse;whiteSpace=wrap;html=1;` |
| Entrada | **Data** (paralelogramo inclinado hacia la derecha) | `shape=parallelogram;perimeter=parallelogramPerimeter;whiteSpace=wrap;html=1;fixedSize=1;size=15;` |
| Salida | **Display** (NO triángulo, NO paralelogramo) | `shape=display;whiteSpace=wrap;html=1;` |
| Proceso | **Rectángulo simple**, sin bordes redondeados | `rounded=0;whiteSpace=wrap;html=1;` |
| Decisión | **Rombo**; rama que cumple la condición rotulada **"Sí"**, la otra **"No"** | `rhombus;whiteSpace=wrap;html=1;` |
| Conectores | **Ortogonal**, flecha simple sin decoraciones; indica el flujo | `edgeStyle=orthogonalEdgeStyle;html=1;` (se pueden **agregar** `exitX/exitY/entryX/entryY` y puntos intermedios para fijar el trazado, pero sin cambiar lo anterior) |
| Texto libre (enunciado) | Bloque de texto sin borde ni relleno | `text;html=1;strokeColor=none;fillColor=none;align=left;verticalAlign=middle;whiteSpace=wrap;` |
| Rótulos "Sí"/"No" | Mismo estilo de texto libre, centrado | igual que el texto libre pero `align=center;` |
| Anotaciones | Opcionales: recuadros punteados con texto, unidos con flecha (agregar `dashed=1;` al estilo de proceso) | `rounded=0;dashed=1;whiteSpace=wrap;html=1;` |

**Reglas de símbolos:**
- **Salida** → siempre `shape=display`. **Entrada** → siempre el paralelogramo Data. Nunca intercambiarlos ni usar triángulo.
- **Conectores de la salida (Display):** el flujo se mantiene vertical: la flecha **entra por arriba** (`entryX=0.5;entryY=0;`) y **sale por abajo** (`exitX=0.5;exitY=1;`), centrada en el eje del flujo.
- **Conversiones y cálculos no son entradas.** Una operación como `monto ← ConvertirANumero(entrada)` va en un **rectángulo de proceso**, no en el paralelogramo de entrada: es una asignación, no una lectura del usuario. Solo `Leer` va en el paralelogramo.
- Las constantes se asignan en un **rectángulo de proceso** (p. ej. `PI ← 3.1416`).

**Layout (una sola columna vertical central):**
- Todo el diagrama fluye de arriba a abajo en **una columna central** (eje común, p. ej. x=400): Inicio → inicialización de variables → lectura(s) previa(s) → [inicialización del contador del `Para`] → rombo de condición del ciclo → salidas → Fin.
- **Rama "No" del rombo del ciclo (el ciclo terminó):** baja **verticalmente por el centro** (salida inferior del rombo). Nunca hacia la derecha.
- **Salidas:** centradas debajo del rombo, **una debajo de la otra**, sobre el mismo eje. **Fin** al final, también en el centro.
- **Rama "Sí" (cuerpo del ciclo):** sale por el **vértice izquierdo** del rombo hacia una columna a la **izquierda** de la central (el cuerpo puede ocupar esa columna de arriba hacia abajo, con sus propias decisiones).
- **Flecha de retorno:** sale por la **izquierda** del último paso del cuerpo, sube por un carril libre a la izquierda del cuerpo (que no cruce la columna central ni el texto del enunciado) y **vuelve al rombo principal por arriba**.
- Si dentro del cuerpo hay una decisión cuya rama "No" salta un paso, esa flecha rodea por el lado derecho del cuerpo (sin invadir la columna central).
- Sin elementos flotando a un costado de la columna central, salvo el cuerpo del ciclo y el bloque de texto del enunciado.

**Estilo global:**
- Fondo blanco por defecto: **no** poner `background` ni colores en el `mxGraphModel` ni en los `style`. Bordes y texto negros por defecto.
- Sin sombra, sin bosquejo (`sketch`), sin gradientes ni colores adicionales. No agregar `fontSize`, `rounded=1`, `arcSize` ni `endArrow` personalizados.
- El **enunciado** se incluye como bloque de texto (celda sin borde, alineado a la izquierda) dentro del `.drawio`, **fuera del diagrama**, arriba o a la izquierda del flujo, sin flechas que lo conecten.
- **Sin círculos de unión:** las ramas de una decisión que confluyen se conectan directo al siguiente elemento (varias flechas pueden entrar al mismo nodo).
- Para ciclos: el rombo de la condición tiene "Sí"/"No" claros y la flecha de retorno vuelve a él (ver Layout).

### 6. Control de calidad (antes de terminar)
Verificar y corregir:
- [ ] La solución responde **exactamente** al enunciado (incluye todos los casos pedidos).
- [ ] No faltan pasos (inicialización de contadores/acumuladores, lecturas, salidas).
- [ ] El diagrama es coherente con el pseudocódigo (mismos pasos, mismo orden, mismos nombres de variables).
- [ ] Cada rombo tiene "Sí" y "No"; todas las flechas tienen punta; no hay elementos sueltos; todo termina en Fin.
- [ ] Se respeta la convención visual: los `style` exactos de la tabla (sin atributos de color), círculos perfectos, rectángulos sin redondeo, sin círculos de unión.
- [ ] Salidas con `shape=display` y entradas con el paralelogramo Data; ninguna conversión (`ConvertirANumero`, etc.) dentro de una entrada.
- [ ] Layout: columna central única; rama "No" del ciclo baja al centro; salidas y Fin centrados debajo del rombo; cuerpo a la izquierda; retorno por la izquierda y entrando al rombo por arriba.
- [ ] Los archivos están en la carpeta correcta y con los nombres exactos.
- [ ] No hay archivos temporales ni cambios fuera de `Practica/`.

### 7. Reporte final
- Resumen breve: ruta de la carpeta creada, archivos generados (`enunciado.md`, `resolucion.md`, `diagrama.drawio` o motivo de su ausencia), estructuras identificadas, ambigüedades/supuestos y alternativas.
- Indicar cualquier modificación a un README índice.
- **No commitear.** Cerrar preguntando si el usuario quiere revisar o hacer el commit.
