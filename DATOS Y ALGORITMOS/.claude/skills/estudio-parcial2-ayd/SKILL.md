---
name: estudio-parcial2-ayd
description: Se activa SOLA cuando el usuario pega un enunciado de un ejercicio de algoritmos de Datos y Algoritmos (pseudocódigo/PseInt/diagrama de flujo, estructuras Para/Mientras/decisiones/arreglos), sin necesidad de comando. Lo resuelve de punta a punta (análisis, .psc probado, resolucion.md, diagrama draw.io) en Parcial 2/Estudio/ y NO abre draw.io ni PseInt ni nada a menos que el usuario lo pida explícitamente en el prompt. También atiende "abrime el ejercicio X" (ahí sí abre, sin modificar) y el modo "pistas" (solo si el usuario escribe esa palabra: no resuelve, prepara archivos vacíos y luego corrige).
---

# estudio-parcial2-ayd

Skill **autocontenida** para estudiar el 2º parcial: acá están todas las reglas (convención del diagrama, PseInt, exportación y control de calidad), así que no hace falta leer otra skill. `resolv-ejercicio-ayd` y `resolv-pseint-ayd` siguen existiendo (usadas para `Practica/`), y la fuente de las formas es `Contenido/Originales/CONVENCION_CATEDRA.md`. Si hay conflicto, manda esta skill.

**Proyecto:** `/home/gonza/Facultad/Tecnicatura en Ciencia de Datos/2do Anio/DATOS Y ALGORITMOS`
**Salida:** `Parcial 2/Estudio/Ejercicio_NN/` — siguiente número libre de dos dígitos; no pisar carpetas existentes. **Si el usuario indica otra carpeta** (p. ej. `Parcial 2/Estudio/Prueba/Ejercicio 1`), usar exactamente esa, con el mismo conjunto de archivos.
Sin `git commit`, sin `push`, sin sync a Drive.

## Modo normal — comportamiento POR DEFECTO (llega un enunciado, sin comando)

Resolver con el flujo completo y **NO abrir nada** (ni draw.io, ni PseInt, ni el visor de imágenes) al terminar: solo se abre si el usuario lo pide **explícitamente en el prompt** ("abrilos", "abrí los diagramas y PseInt", "abrime el ejercicio X"). Un permiso dado antes no se arrastra a los ejercicios siguientes. Salvo que el usuario diga que es para `Practica/` (ahí aplica `resolv-ejercicio-ayd`). En lotes de varios enunciados: no abrir nada (`--no-abrir`, y no llamar a `abrir_ejercicio.sh`).


1. `enunciado.md` (tal cual) y un análisis breve respondiendo: **¿Para o Mientras?**, **¿hay rombo?**, **¿qué se calcula?**
2. `algoritmo.psc`: ejecutarlo con `~/pseint/bin/pseint --nouser` (ver "PseInt" abajo) con al menos un caso por rama y los bordes (cero iteraciones, valor igual al límite) y, si el enunciado trae casos de prueba, **todos** esos. Si falla, corregir y reejecutar; si el código lo dio el usuario, **no corregir en silencio**: ejecutarlo, confirmar o descartar las sospechas, guardar el original aparte (`algoritmo_original.psc`) y listar cada cambio.
3. `resolucion.md` con la estructura estándar: Enunciado, Análisis, Resolución, Explicación paso a paso, Diagrama, Conclusión.
4. Diagrama: `python3 scripts/psc2drawio.py algoritmo.psc diagrama.drawio --enunciado enunciado.md --no-abrir`, más `diagrama.png` (ver "Exportar el PNG" abajo). Mirar el PNG.
5. **Apertura: SOLO si el usuario la pidió explícitamente en el prompt.** Entonces: `scripts/abrir_ejercicio.sh <carpeta>` (abre `diagrama.drawio` en draw.io y `algoritmo.psc` en PseInt, ambos en segundo plano), verificar exit code 0 y escribir **una sola línea** con las rutas; si falla, mostrar el error exacto (y cuál de los dos falló). Si no la pidió, terminar sin abrir y dejar las rutas de los archivos en el resumen.

**Ejercicios de arreglos:** solo `.psc` y `resolucion.md`, sin diagrama (si el usuario pidió abrir, el paso 5 abre **solo PseInt**: `scripts/abrir_pseint.sh algoritmo.psc`). Respetar el método que pida el enunciado y los OJO de arreglos. Si el enunciado pide diagrama de un ejercicio con subprocesos o funciones, un `.drawio` + PNG por módulo (`psc2drawio.py … --modulo NOMBRE`, ver "Módulos" abajo); si un enunciado de arreglos dice "solo PseInt", no hay diagrama. La salida del diagrama usa el Display de la paleta "Diagrama de flujo" y la notación de las diapositivas, ya incorporados al script.

### Guía en Word (guia_ejercicio.docx)

Cada ejercicio nuevo lleva una guía en Word para que Gonza lea el enunciado y se prepare antes de resolver. Es un borrador en texto plano: sin diagrama, sin código y sin nada de draw.io.

- **Cuándo:** solo en ejercicios nuevos, de ahora en adelante. A los que ya existen no se les genera nada, y no se toca ningún `resolucion.md` ni ningún diagrama. En el modo "pistas" tampoco se genera, porque la guía contaría cómo se resuelve.
- **Dónde:** `guia_ejercicio.docx`, dentro de la carpeta del ejercicio (`Parcial 2/Estudio/Ejercicio_NN/`).
- **Cuándo se escribe:** después de tener el `.psc` probado. Lo que dice la guía tiene que coincidir con el `.psc` y con el diagrama.
- **Sin formato.** El `.docx` es texto plano: estilo por defecto de python-docx, sin fuentes ni tamaños propios, sin colores, sin negrita ni cursiva, sin estilos de título, sin listas ni tablas de Word, sin bordes, sin sangrías especiales y sin encabezados ni pies. Cada línea es un párrafo normal, y los guiones de las listas se escriben como texto ("- "). Si alguna vez algo de esto se pide distinto, manda lo último que diga Gonza.
- **Cómo queda, línea por línea:**
  1. `BORRADOR`
  2. `Ejercicio NN: tema` (en texto simple)
  3. una línea en blanco
  4. `Consigna` y debajo el enunciado
  5. una línea en blanco
  6. `Cómo lo voy a resolver?` y debajo las frases
  7. una línea en blanco
  8. `Dudas` y debajo las dudas
- **Tono:** de apuntes, frases cortas y sin adornos. Se permiten frases incompletas.
- **Qué va en cada parte:**
  - *Consigna:* el enunciado tal cual, sin cambios. Si el `enunciado.md` trae anotaciones nuestras (como "Estructura: ..."), esas no van.
  - *Cómo lo voy a resolver?:* entre 3 y 5 frases, una por línea y sin código. Tiene que decir qué estructura elijo y por qué ("son 30 días fijos: Para", "no sé cuántos datos hay: Mientras"), qué variables auxiliares uso y para qué (contador, acumulador, máximo, posición), el orden general de los pasos, y qué se muestra al final y qué pasa en el caso borde principal.
  - *Dudas:* 2 o 3, solo si son dudas reales del enunciado, cada una en tres líneas: `Duda: ...` (una pregunta corta, para poder decirla en voz alta), `Por qué importa: ...` (qué cambia en la solución según la respuesta) y `Supuesto que tomé: ...` (lo que hace mi solución si nadie contesta; coincide con el `.psc`, y se puede nombrar la condición en una frase pero sin copiar código). Si no hay ninguna relevante, una sola línea: `Sin dudas relevantes: el enunciado es claro.` y el motivo.
- **Qué dudas elegir:** solo las que aplican de esta lista y que cambian el resultado. Las cuestiones de estilo no cuentan.
  - límite de una condición (`>` o `>=`);
  - qué mostrar si no hay datos (cero vueltas);
  - empates y repetidos (primera aparición o todas);
  - mayúsculas, minúsculas y tildes;
  - si el centinela cuenta como dato;
  - qué hacer con entradas inválidas;
  - texto exacto de los mensajes;
  - orden ascendente o descendente;
  - método pedido (burbuja o selección);
  - tamaño de los arreglos y si se cargan por teclado o vienen fijos;
  - qué pasa si el valor no se encuentra en una búsqueda;
  - si los arreglos llegan ya ordenados;
  - datos que el enunciado no da.
- **Cómo se genera:** se escribe el contenido en un JSON dentro de una carpeta temporal (nunca en la carpeta del ejercicio) y se corre `scripts/.venv/bin/python scripts/generar_guia.py --datos <json> --salida "<carpeta>/guia_ejercicio.docx"`. Usa python-docx, que está en un venv local (`scripts/.venv`). Si ese venv no existe, no se instala nada global: se le avisa a Gonza y se propone crearlo con `python3 -m venv scripts/.venv && scripts/.venv/bin/pip install python-docx`.
- **Cómo se revisa:** no se pasa a PDF. Se corre `scripts/.venv/bin/python scripts/generar_guia.py --verificar <archivo>.docx`, que relee el archivo y comprueba el orden de las tres secciones, la cantidad de frases (3 a 5) y de dudas (2 o 3), y que no quede ningún estilo distinto del por defecto ni ningún atributo de fuente o color. Se le cuenta a Gonza el resultado de esa comprobación.
- **"Juntar guías":** si Gonza lo pide, un solo `.docx` con un bloque por ejercicio, en orden, separados por una línea con `----------`, sin saltos de página ni índice, en la carpeta que diga (por defecto `Parcial 2/Estudio/guias_juntas.docx`): `scripts/.venv/bin/python scripts/generar_guia.py --juntar <carpeta1> <carpeta2> ... --salida <ruta>.docx`. Las guías que falten se avisan, no se inventan.

## Modo "pistas" (SOLO si el usuario escribe esa palabra)

No resolver. En este orden:
1. Crear la carpeta `Ejercicio_NN` y `enunciado.md`.
2. Copiar `scripts/plantilla_simbolos.drawio` como `diagrama.drawio` y poner el enunciado como bloque de texto arriba a la izquierda (estilo `txt` de `psc2drawio.py`).
3. Crear `algoritmo.psc` con solo `Algoritmo nombre` / `FinAlgoritmo`.
4. Una línea con las rutas (abrir con `scripts/abrir_ejercicio.sh <carpeta>` solo si el usuario lo pidió explícitamente).

Cuando el usuario escriba **"corregir"**: ejecutar su `.psc` con casos propios; además, listar en el chat las 2 o 3 dudas del enunciado (con el mismo criterio de la guía), decirle cuáles contempló su solución y darle una pista por cada una que no; verificar que diagrama y código sean espejo (nombres, textos, condiciones, orden); dar **UNA pista por error, sin código de solución**. **Nunca modificar los archivos del usuario.**

## "Abrime el ejercicio X"

Si el usuario pide abrir un ejercicio existente (p. ej. "abrime el Ejercicio_06 de repetición", "abrime el ejercicio 2 del parcial 1"): buscar la carpeta en `Practica/` o `Parcial 2/Estudio/` (Glob por nombre de carpeta y tema) y ejecutar `scripts/abrir_ejercicio.sh <carpeta>`. **No modificar nada.** Si hay más de una coincidencia, listarlas y preguntar. Una línea con las rutas al terminar.

## Scripts

- `scripts/abrir_diagrama.sh <.drawio>` — draw.io, `nohup … &`.
- `scripts/abrir_pseint.sh <.psc>` — interfaz gráfica de PseInt (`~/pseint/pseint`, no `bin/pseint`) si hay `$DISPLAY`/`$WAYLAND_DISPLAY`; si no, PseInt de Windows; si no, exit 1 con el error.
- `scripts/abrir_ejercicio.sh <carpeta>` — llama a los dos; si uno falla abre el otro igual y avisa cuál falló.
- `scripts/traer_al_frente.ps1` — la usan los dos scripts de apertura: Windows no da foco a procesos lanzados en segundo plano y las ventanas quedaban tapadas; este script espera la ventana y la trae al frente.
- `scripts/psc2drawio.py` — en esta skill siempre con `--no-abrir` (la apertura, solo si se pide, la hace `abrir_ejercicio.sh`).
- `scripts/plantilla_simbolos.drawio` — plantilla de símbolos para el modo pistas (ya con el Display de la paleta "Diagrama de flujo").
- `scripts/estadistica_simbolos.py` — solo lectura: cuenta figuras de los `diagrama*.drawio` (`--clasificar`, `--probar`, `--generar`). Solo si el usuario pide estadística.
- `scripts/generar_guia.py` — arma, junta y verifica la guía en Word (texto plano). Se corre con `scripts/.venv/bin/python` (venv local con python-docx).

## Convención visual del diagrama

Fondo **blanco**, trazo **negro**, sin `fillColor`/`strokeColor`/`fontColor`, sin sombra ni bosquejo, sin `rounded=1` en procesos. Fuente de las formas: `Contenido/Originales/CONVENCION_CATEDRA.md`.

| Construcción | Forma | `style` | Texto |
|---|---|---|---|
| Inicio / Fin | Círculo (ancho = alto) | `ellipse;whiteSpace=wrap;html=1;aspect=fixed;` | `Inicio` · `Fin` |
| Entrada | Manual Input (teclado) | `shape=manualInput;whiteSpace=wrap;html=1;size=15;` | solo las variables, sin "Leer" |
| Salida | **Display de la paleta "Diagrama de flujo"** (gota, trazo de 1 pt); **no** el `shape=display` de la paleta general | `strokeWidth=1;html=1;shape=mxgraph.flowchart.display;whiteSpace=wrap;` | `"texto",variable` |
| Proceso / asignación | Rectángulo sin redondeo | `rounded=0;whiteSpace=wrap;html=1;` | `var ← expr`; varias asignaciones consecutivas, juntas en un rectángulo |
| Decisión | Rombo | `rhombus;whiteSpace=wrap;html=1;` | la condición |
| `Para` / `Mientras` | Hexágono | `shape=hexagon;perimeter=hexagonPerimeter2;whiteSpace=wrap;html=1;fixedSize=1;size=25;` | `Para i ← 1 , 10 , 1` · `MQ condición` |
| Fin de ciclo | Cápsula | `shape=mxgraph.flowchart.terminator;whiteSpace=wrap;html=1;` | `Fin (Para)` · `Fin (MQ)` |
| Conectores | Ortogonal con punta | `edgeStyle=orthogonalEdgeStyle;html=1;` | — |

**Reglas:** `Sí` a la **derecha** y `No` a la **izquierda**, siempre rotulados (`Sí` con tilde), ramas que se juntan **sin círculos de unión**. `Para`/`Mientras`: hexágono, cuerpo hacia abajo y cápsula de cierre, **sin rombo ni flecha de retorno**; en `Mientras` la lectura va antes del hexágono y al final del cuerpo. Una sola columna central. Ninguna asignación dentro de una entrada (`ConvertirANumero(x)` es un proceso). El enunciado va como bloque de texto a la izquierda, sin flechas.

**Espejo diagrama ↔ `.psc`:** mismos nombres, textos, condiciones y orden. **No se dibujan los avisos**: un `Escribir` justo antes de un `Leer` (`"Ingrese…"`) queda en el `.psc` y no en el diagrama; las demás salidas sí.

**Notación de las diapositivas en el diagrama** (el `.psc` no cambia; `psc2drawio.py` lo hace solo, `--literal` lo desactiva): `<-` → `←`; `<>` → `!=`; `Y` → `and`; `O` → `or`; `NO` → `not`; `MOD` → `mod`; `raiz` → `sqrt`; `sen` → `sin`; `azar` → `random`. Lo que no tiene equivalente (`Mayusculas`, `ConvertirANumero`, `trunc`…) queda igual; el texto entre comillas no se toca.
**Paréntesis:** una sola comparación, sin paréntesis (`MQ numero != 0`); con `and`/`or`, cada comparación entre paréntesis (`(N mod 2 = 0) and (N > 20)`) y un grupo `and` dentro de un `or` también (`(Cat = "A") or ((Ant >= 10) and (Ant <= 20))`).

**Módulos (SUPUESTO nuestro):** la cátedra no tiene diagramas de subprocesos ni funciones. Un diagrama por módulo (`psc2drawio.py algoritmo.psc diagrama_xxx.drawio --modulo NOMBRE`, y `--modulo principal` para el `Algoritmo`): círculo con el **nombre del módulo** al inicio, círculo `Fin`, y las llamadas como rectángulo de proceso. Marcarlo como SUPUESTO en `resolucion.md`.

**Exportar el PNG:** desde una copia local del `.drawio` en una carpeta temporal de Windows (no la ruta `\\wsl.localhost\…`), con `Start-Process -Wait`; llamarlo directo con `&` no espera y no genera el archivo:
```powershell
Start-Process -FilePath "C:\Program Files\draw.io\draw.io.exe" -ArgumentList @('-x','-f','png','-b','15','-o','salida.png','entrada.drawio') -Wait -NoNewWindow
```
Después **pasar el PNG a escala de grises** (el exportador deja bordes de color; con Pillow en WSL: `Image.open(png).convert("L").convert("RGB")`, componiendo antes sobre blanco si trae transparencia) y copiarlo a la carpeta del ejercicio. Los errores de caché de draw.io en la consola son inofensivos.

## PseInt: ejecutar y reglas

- **Ejecutar** con el intérprete de consola `~/pseint/bin/pseint --nouser archivo.psc` (con `timeout`), pasando los `Leer` por stdin, uno por línea: `printf -- '5\n3\n' | …`. **No** usar `~/pseint/pseint` (es la ventana gráfica y se cuelga). Desde Windows: `wsl.exe -e bash script.sh` (poner comandos con comillas en un script). `--norun` solo revisa sintaxis. Los errores salen como `Lin N (inst M): ERROR NNN` (303 = subíndice fuera de rango; 202 = identificador/función inexistente).
- **Sintaxis:** `Algoritmo nombre` / `FinAlgoritmo` (nombre sin espacios), `Escribir` (nunca `Mostrar`), `<-`, `SiNo` (no `Sino`), todos los bloques cerrados, todo en español. Variables sueltas **sin** `Definir`; arreglos con `Definir` + `Dimension` (no `Dimensionar`). Índices desde 1. Subprocesos: `SubProceso Nombre(A Por Referencia)` … `FinSubProceso`; funciones: `Funcion r <- Nombre(A Por Referencia, k)` … `FinFuncion`, y **la variable de retorno se asigna en todos los caminos**.
- **Palabras reservadas y funciones:** `PI` y `funcion` no sirven como nombre de variable (usar `pi_valor`, `nroFuncion`). Las funciones son `redon()` (no `round`), `trunc()`, `raiz()`, `sen()`/`cos()` en radianes, `Mayusculas()`, `Aleatorio(a,b)`.
- **Arreglos (errores típicos):** el `Para` no puede pasarse de la dimensión; en burbuja los `Para` externos llegan a N-1 y se compara `a[j]` con `a[j+1]`; la búsqueda debe contemplar "no está"; con `Mientras` la guarda del rango va primero (`Mientras i <= N Y a[i] <> k`); búsqueda binaria con `min <= max` primero y `trunc` para el punto medio, sobre un arreglo ya ordenado; intercalación con `Mientras i <= N Y j <= M` y copia del resto del arreglo que sobra (`Si i > N` → resto de B, `SiNo` → resto de A). **Usar el método que pide el enunciado** (burbuja o selección, binaria o secuencial): hacer el otro es error.
- **Máximos y mínimos:** inicializar con un valor que garantice la primera asignación (p. ej. `-1`), así la posición nunca queda sin asignar.
- Sin código de depuración olvidado.

## Control de calidad (antes de terminar)

- [ ] La solución responde **exactamente** al enunciado, con el método que pide, y pasó **todos** los casos de prueba dados (y un caso por rama y los bordes).
- [ ] No faltan inicializaciones, lecturas ni salidas.
- [ ] El diagrama es espejo del `.psc` (nombres, textos, condiciones con la notación de las diapositivas, orden) y se miró el PNG.
- [ ] Formas correctas (Display de la paleta "Diagrama de flujo"; entrada solo con variables; `Para`/`MQ` con hexágono y cápsula; `Sí` derecha, `No` izquierda; sin círculos de unión).
- [ ] Archivos en la carpeta indicada, sin temporales.
- [ ] Sin `git commit`, `push` ni sync a Drive; sin tocar otras materias; no borrar ni sobrescribir sin avisar (respaldar antes de regenerar algo existente); los archivos que escribió el usuario (`ejercicioN_*`, su `.psc`) no se modifican.

## Detalles operativos (aprendidos usando la skill)

- **Carpetas con espacios o mayúsculas distintas:** si el usuario nombra una carpeta (`Prueba - Copia`) y en disco existe con otra capitalización (`Prueba - copia`), usar la que existe en disco (WSL distingue mayúsculas) y avisarlo. Entre comillas siempre; revisar con `ls` que esté vacía antes de escribir, y no pisar archivos existentes.
- **Cambios de estilo en diagramas ya hechos** (p. ej. el trazo del Display): no hace falta regenerar. Reemplazar solo el valor en el `.drawio` (`sed`), re-exportar el PNG y avisar qué archivos se tocaron. Lo regenerado desde el `.psc` solo se hace con respaldo previo en `Contenido/Originales/_respaldo_diagramas_N/` y listando los archivos.
- **Archivos `.$nombre.drawio.dtmp`:** los crea draw.io mientras el diagrama está abierto. No se borran; indican que conviene recargar el diagrama en draw.io.
- **Probar con stdin:** los `Leer` se pasan con `printf -- '%s\n' valores | pseint --nouser`; para filtrar la salida usar `grep -a` (PseInt puede devolver bytes que `grep` toma como binario).
- **Nunca** usar `funcion`, `PI` ni otras palabras reservadas como nombre de variable; si PseInt dice `ERROR 74` o `86`, renombrar.
- Un diagrama de un módulo se genera con `--modulo`; las condiciones y asignaciones salen con la notación de las diapositivas sin tocar el `.psc`.
