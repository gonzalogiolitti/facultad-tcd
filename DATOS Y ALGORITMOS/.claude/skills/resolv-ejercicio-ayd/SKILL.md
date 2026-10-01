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

| Elemento | Símbolo en draw.io | Estilo sugerido (mxCell `style`) |
|---|---|---|
| Inicio / Fin | **Círculo perfecto** (no elipse ni cápsula): ancho = alto | `ellipse;aspect=fixed;whiteSpace=wrap;html=1;` con `width=height` (p. ej. 80×80) |
| Entrada | **Paralelogramo** inclinado hacia la derecha | `shape=parallelogram;perimeter=parallelogramPerimeter;fixedSize=1;whiteSpace=wrap;html=1;` |
| Salida | **Triángulo** apuntando a la derecha con la **punta redondeada** (tipo "play"/cinta) | `triangle;rounded=1;arcSize=20;whiteSpace=wrap;html=1;` (verificar que apunte a la derecha; usar tamaño generoso, p. ej. 160×80, y texto corto) |
| Proceso | **Rectángulo simple**, sin bordes redondeados | `rounded=0;whiteSpace=wrap;html=1;` |
| Decisión | **Rombo**; rama que cumple la condición rotulada **"Sí"**, la otra **"No"** | `rhombus;whiteSpace=wrap;html=1;` |
| Flechas | Siempre con punta de flecha, indican el flujo | `edgeStyle=orthogonalEdgeStyle;endArrow=classic;html=1;` |
| Anotaciones | Recuadros **punteados** con texto explicativo, conectados con flecha al elemento (opcionales, bienvenidas) | `rounded=0;dashed=1;whiteSpace=wrap;html=1;` + flecha punteada |

**Estilo global:**
- **Fondo negro** (`background="#000000"` en `mxGraphModel`), **líneas y texto blancos** (`strokeColor=#FFFFFF;fontColor=#FFFFFF` en cada elemento y flecha; también en etiquetas "Sí"/"No": `labelBackgroundColor=none`).
- `fillColor=none` en todo. Sin colores adicionales, gradientes, sombras (`shadow=0`, `gradientColor=none`) ni rellenos.
- Constantes se asignan en un **rectángulo de proceso** (p. ej. `PI ← 3.1416`).
- El **enunciado** se incluye como bloque de texto (celda sin borde, texto blanco, alineado a la izquierda) dentro del `.drawio`, **fuera del diagrama**, arriba o a la izquierda del flujo, sin flechas que lo conecten.
- Los ejercicios previos del repo pueden no cumplir esta convención al 100 % (p. ej. procesos redondeados); **no modificarlos**, solo seguir la convención correcta en los nuevos. Si el usuario lo quiere, ofrecérselo aparte.
- Para ciclos: la flecha de retorno vuelve al rombo de la condición; el rombo tiene "Sí"/"No" claros.

### 6. Control de calidad (antes de terminar)
Verificar y corregir:
- [ ] La solución responde **exactamente** al enunciado (incluye todos los casos pedidos).
- [ ] No faltan pasos (inicialización de contadores/acumuladores, lecturas, salidas).
- [ ] El diagrama es coherente con el pseudocódigo (mismos pasos, mismo orden, mismos nombres de variables).
- [ ] Cada rombo tiene "Sí" y "No"; todas las flechas tienen punta; no hay elementos sueltos; todo termina en Fin.
- [ ] Se respeta la convención visual (círculos perfectos, rectángulos sin redondeo, fondo negro, sin colores).
- [ ] Los archivos están en la carpeta correcta y con los nombres exactos.
- [ ] No hay archivos temporales ni cambios fuera de `Practica/`.

### 7. Reporte final
- Resumen breve: ruta de la carpeta creada, archivos generados (`enunciado.md`, `resolucion.md`, `diagrama.drawio` o motivo de su ausencia), estructuras identificadas, ambigüedades/supuestos y alternativas.
- Indicar cualquier modificación a un README índice.
- **No commitear.** Cerrar preguntando si el usuario quiere revisar o hacer el commit.
