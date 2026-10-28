---
name: resolv-ejercicio-ayd
description: Resuelve ejercicios de algoritmos de la materia Datos y Algoritmos: analiza el enunciado, genera la resolución en Markdown y crea el diagrama de flujo en draw.io con la convención exacta de la cátedra (relevada de los originales del campus), manteniéndolo espejo del .psc.
---

# resolv-ejercicio-ayd

Resuelve un ejercicio de **Datos y Algoritmos** (Tecnicatura en Ciencia de Datos, UGR). Estilo: didáctico, pensado para que un estudiante entienda la solución.

**Proyecto:** `/home/gonza/Facultad/Tecnicatura en Ciencia de Datos/2do Anio/DATOS Y ALGORITMOS` · **Carpeta de trabajo:** `Practica/`.
**Fuente de la convención:** `Contenido/Originales/CONVENCION_CATEDRA.md` (relevada de los PDF originales del campus y de las clases). Ante cualquier duda de figura o notación, ese archivo manda sobre lo que diga esta skill.
Herramientas: PseInt (ver `resolv-pseint-ayd`), el generador `scripts/psc2drawio.py` y/o el MCP de draw.io, y la CLI de draw.io para exportar PNG.

## Reglas generales

- Solo escribir dentro de `Practica/`, salvo que sea estrictamente necesario.
- No borrar ni sobreescribir archivos o carpetas existentes sin confirmación explícita del usuario (si el usuario pide regenerar un archivo, respaldar el original antes).
- **NO hacer `git commit` ni `push`.** Esperar confirmación. Si más adelante hay que preparar un commit: agregar **archivos puntuales** (nunca `git add -A`), porque el árbol puede tener cambios de otras materias que no son del trabajo actual.
- No dejar archivos temporales.

## Pasos

### 1. Recibir el enunciado
- Puede venir como texto directo o como ruta a un archivo (leerlo con Read).
- Si hay ambigüedad (valores de constantes, casos límite, qué hacer ante datos inválidos, tipo de dato, etc.), **indicarla explícitamente antes de resolver** y explicitar el supuesto adoptado. Si cambia sustancialmente la solución, preguntar al usuario.

### 2. Determinar la carpeta destino
- Listar `Practica/` para ver los ejercicios existentes. La estructura está agrupada por tema (p. ej. `Practica/Diagramacion Logica/Parte 1/Ejercicio_NN/`, `Practica/1_Practica_1/`, `Practica/2_Repeticion_Para_Mientras/`, `Practica/Parcial_1/`). Usar la agrupación que corresponda; si no es obvia, preguntar.
- Asignar automáticamente el siguiente número libre (`Ejercicio_02`, `Ejercicio_03`, … con dos dígitos).
- Si la carpeta destino ya existe, **no tocarla** sin confirmación.
- Si el directorio del tema tiene un `README.md` con tabla índice, proponer agregar la fila nueva (avisarlo en el reporte).

### 3. Analizar el ejercicio
Identificar y dejar escrito:
- **Entradas**, **proceso** y **salidas**.
- Estructuras: secuencial, decisión (simple / doble / anidada / independiente), repetición (`Para` si se conoce la cantidad, `Mientras` si hay centinela o condición), acumuladores, contadores, máximos/mínimos, constantes, arreglos.
- **Método pedido:** si el enunciado nombra un método (p. ej. burbuja vs. selección del mínimo, búsqueda secuencial vs. binaria), **ese es el que hay que usar** (ver `resolv-pseint-ayd`).
- Si hay más de un enfoque posible, mencionar las alternativas y por qué se eligió una.
- Si requiere diagrama (casi siempre sí). **Los ejercicios de arreglos (ordenamiento, búsqueda, intercalación) en el 2º parcial se piden solo en pseudocódigo**: no generar diagrama salvo que se pida.

### 4. Escribir primero el `.psc` y después el diagrama
El diagrama es **espejo del `.psc`**: se resuelve y verifica el pseudocódigo (skill `resolv-pseint-ayd`) y recién después se dibuja.

### 5. Crear archivos en `Practica/.../Ejercicio_XX/`

**`enunciado.md`** — el enunciado tal como fue dado, sin modificar.

**`resolucion.md`** — estructura fija:

```markdown
# Ejercicio XX
## Enunciado
(enunciado completo)
## Análisis
## Resolución
(pseudocódigo PseInt en bloque de código, idéntico al .psc)
## Explicación paso a paso
## Diagrama
## Conclusión
```
- *Diagrama*: enlazar `./diagrama.drawio`. Si no requiere diagrama, decirlo ahí con el motivo y **no crear** el `.drawio`.
- Incluir ambigüedades/supuestos y alternativas (en *Análisis* o *Conclusión*).

**`algoritmo.psc`** y **`diagrama.drawio`** (+ `diagrama.png` exportado para verificar).

Cómo generar el diagrama (en este orden de preferencia):
1. **`python3 scripts/psc2drawio.py algoritmo.psc diagrama.drawio --enunciado enunciado.md`** (desde WSL). Dibuja con la convención y mantiene el espejo por construcción. Cubre `Leer`, `Escribir`, asignación, `Si/SiNo`, `Para`, `Mientras`, anidados. Omite los avisos `Escribir` previos a un `Leer`. Avisa lo que ignora (`Definir`, `Dimension`). Antes de generar, **ejecutar el `.psc`**; el estilo de las figuras es el de la tabla de abajo. Tras exportar el PNG, **pasarlo a escala de grises** (el exportador de Windows deja bordes de color por antialiasing de subpíxel en el texto); el `.drawio` no lleva ningún color.
2. El **MCP de draw.io** (`open_drawio_xml`) para armar o retocar a mano, respetando la convención de abajo. Si ninguna herramienta está disponible, avisar; no inventar otro método sin decirlo.

**Verificar siempre con una imagen:** exportar a PNG con la CLI de draw.io de Windows (con `Start-Process -Wait`; llamarla directo con `&` no espera y no genera el archivo):
```powershell
Start-Process -FilePath "C:\Program Files\draw.io\draw.io.exe" -ArgumentList @('-x','-f','png','-b','15','-o','salida.png','entrada.drawio') -Wait -NoNewWindow
```
Exportar desde una **copia local** del `.drawio` (una carpeta temporal de Windows, no la ruta `\\wsl.localhost\…`) y luego copiar el PNG a la carpeta del ejercicio. Mirar el PNG y corregir antes de entregar.

### 6. Convención visual de la cátedra (obligatoria)

**Estilo global:** fondo **blanco**, trazo **negro**, formas **sin atributos de color** (nada de `fillColor`, `strokeColor`, `fontColor`, `background`, `light-dark(...)`; solo las celdas de texto llevan `strokeColor=none;fillColor=none`). Sin sombra, sin bosquejo, sin `rounded=1` en procesos, sin `fontSize`.

| Construcción | Forma (draw.io) | `style` | Texto |
|---|---|---|---|
| Inicio / Fin | **Círculo** (ancho = alto) | `ellipse;whiteSpace=wrap;html=1;aspect=fixed;` | `Inicio` · `Fin` |
| Entrada | **Manual Input** (forma de teclado) | `shape=manualInput;whiteSpace=wrap;html=1;size=15;` | **solo las variables**, sin "Leer": `A,B` |
| Salida | **Display** (`shape=display`, de la paleta Flowchart) | `shape=display;whiteSpace=wrap;html=1;` | `"texto",variable` (comas para concatenar) |
| Proceso / asignación / constante | **Rectángulo sin redondeo** | `rounded=0;whiteSpace=wrap;html=1;` | `var ← expr`; **varias asignaciones consecutivas van juntas** en un rectángulo |
| Decisión | **Rombo** | `rhombus;whiteSpace=wrap;html=1;` | la condición tal cual está en el `.psc` |
| `Para` | **Hexágono** (Preparation) | `shape=hexagon;perimeter=hexagonPerimeter2;whiteSpace=wrap;html=1;fixedSize=1;size=25;` | `Para i ← 1 , 10 , 1` (ini , fin , paso) |
| `Mientras` | Hexágono | igual | `MQ condición` |
| Fin de ciclo | **Cápsula** | `shape=mxgraph.flowchart.terminator;whiteSpace=wrap;html=1;` | `Fin (Para)` · `Fin (MQ)` |
| Conectores | Ortogonal con punta | `edgeStyle=orthogonalEdgeStyle;html=1;` (se pueden agregar `exitX/exitY/entryX/entryY` y puntos) | — |
| Rótulos Sí/No y enunciado | Texto libre | `text;html=1;strokeColor=none;fillColor=none;align=center;verticalAlign=middle;whiteSpace=wrap;` (el enunciado con `align=left`) | `Sí` / `No` |
| Anotación (opcional) | Recuadro punteado con flecha al paso | `rounded=0;dashed=1;whiteSpace=wrap;html=1;` | p. ej. "PI actúa como constante" |

**Reglas de construcción:**
- **Decisión:** `Sí` sale por la **derecha**, `No` por la **izquierda**, **siempre rotuladas** (`Sí` con tilde, `No`). Las ramas se juntan **sin círculos de unión** (varias flechas entran al mismo elemento). Esto sigue las diapositivas y la Clase 2/3; el PDF "Práctica 1" usa `si` a la izquierda y es la excepción: no seguirlo.
- **`Para` y `Mientras`:** el hexágono, el **cuerpo hacia abajo** y la cápsula de cierre. **Sin rombo y sin flecha de retorno.** En `Mientras`: la lectura va **antes** del hexágono y **al final del cuerpo** (si el `.psc` lo hace así).
- **Layout:** una sola columna vertical central; el flujo baja siempre; las decisiones abren a los costados (Sí derecha, No izquierda) y vuelven al eje.
- **Asignaciones nunca en la forma de entrada** (ej. `R ← random(100)+1` va en rectángulo aunque una diapositiva lo ponga en la entrada). `ConvertirANumero(entrada)` también es un proceso.
- **Constantes** en un rectángulo de proceso al inicio (`PI ← 3.1416`).
- **Enunciado** como bloque de texto fuera del flujo (a la izquierda), sin flechas.
- **Espejo diagrama ↔ `.psc`:** mismos nombres de variables, textos entre comillas, condiciones y orden de pasos. Si el `.psc` usa `Mayusculas(entrada) <> "FIN"`, el diagrama lo muestra igual (`MQ Mayusculas(entrada) <> "FIN"`). **Los avisos no se dibujan:** un `Escribir` justo antes de un `Leer` (p. ej. `"Ingrese el radio"`) queda en el `.psc` pero **no** en el diagrama; las demás salidas, que son parte de la lógica, sí. Solo cambia la notación de la asignación: `←` en el diagrama, `<-` en el `.psc`.

### 7. Control de calidad (antes de terminar)
- [ ] La solución responde **exactamente** al enunciado y usa el **método que pide** (si lo nombra).
- [ ] No faltan pasos (inicialización de contadores/acumuladores, lecturas, salidas).
- [ ] El diagrama es espejo del `.psc` (nombres, textos, condiciones, orden).
- [ ] Entrada = Manual Input solo con variables; salida = `shape=display`; `Para`/`MQ` = hexágono + cápsula, sin retorno; ninguna asignación en una entrada.
- [ ] Cada rombo tiene `Sí` (derecha) y `No` (izquierda); todas las flechas tienen punta; todo termina en `Fin`; sin círculos de unión.
- [ ] Estilo: blanco/negro, sin `fillColor`/`fontColor`/`background`.
- [ ] Se exportó el PNG y **se miró**.
- [ ] Archivos en la carpeta correcta con los nombres exactos; no hay temporales ni cambios fuera de `Practica/`.

### 8. Reporte final
- Resumen breve: ruta, archivos generados, estructuras identificadas, ambigüedades/supuestos y alternativas.
- Indicar cualquier modificación a un README índice.
- **No commitear.** Cerrar preguntando si el usuario quiere revisar o hacer el commit.
