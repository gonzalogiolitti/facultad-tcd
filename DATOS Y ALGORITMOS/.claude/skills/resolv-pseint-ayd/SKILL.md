---
name: resolv-pseint-ayd
description: Genera y ejecuta pseudocódigo PseInt para ejercicios de la materia Datos y Algoritmos, siguiendo la sintaxis exacta de PseInt, la convención de la cátedra (relevada de los originales del campus) y los errores típicos de arreglos. Se usa en conjunto con la skill resolv-ejercicio-ayd.
---

# resolv-pseint-ayd

Escribe, guarda, **ejecuta** y documenta el pseudocódigo PseInt de un ejercicio de Datos y Algoritmos. Prioridad: que el código sea **entendible para un estudiante** y **correcto en los bordes**, no solo que funcione.

**Proyecto:** `/home/gonza/Facultad/Tecnicatura en Ciencia de Datos/2do Anio/DATOS Y ALGORITMOS` · **Carpeta de trabajo:** `Practica/`
**Fuente de la convención:** `Contenido/Originales/CONVENCION_CATEDRA.md` (sección 4: PseInt de arreglos, con el código tal cual aparece en el material y sus OJO).

## Cómo ejecutar PseInt (importante)

- `~/pseint/pseint` es el **lanzador gráfico** (abre la ventana de wxPSeInt): desde Claude Code se cuelga o no devuelve salida. **No usarlo para ejecutar.**
- El **intérprete de consola** es `~/pseint/bin/pseint`. Siempre con `--nouser`, con `timeout` y sin stdin interactivo:

```bash
# sin Leer
timeout 20 ~/pseint/bin/pseint --nouser "ruta/algoritmo.psc" </dev/null
# con Leer: pasar los valores por stdin (uno por línea). Usar printf -- para que los negativos no se tomen como opción
printf -- '5\n3\n' | timeout 20 ~/pseint/bin/pseint --nouser "ruta/algoritmo.psc"
timeout 20 ~/pseint/bin/pseint --nouser --noinput --input="5,3" "ruta/algoritmo.psc"   # alternativa
```

- Si el proyecto está en WSL y se corre desde PowerShell/Windows: `wsl.exe -d Ubuntu -- bash <script.sh>` (poner los comandos con comillas en un script; PowerShell las rompe).
- Otras opciones: `--norun` (solo revisa sintaxis), `--seed=N` (reproducir `Aleatorio`).
- Los errores salen como `Lin N (inst M): ERROR NNN: descripción` (puede traer caracteres mal codificados). `ERROR 303` = subíndice fuera de rango; `ERROR 202` = identificador/función inexistente.
- El perfil de la cátedra (PSEINT.pdf): **índices desde 1**, "Obligar a definir tipos" **desmarcado**, sintaxis flexible.
- Los `.psc` guardados desde PseInt en Windows pueden estar en cp1252, no UTF-8; leerlos con cuidado.

## Sintaxis obligatoria de PseInt

```
Algoritmo nombre_algoritmo
   // instrucciones
FinAlgoritmo
```

| Elemento | Sintaxis |
|---|---|
| Entrada / Salida | `Leer variable` · `Escribir "texto", variable` |
| Asignación | `variable <- valor` |
| Condicional simple | `Si condicion Entonces … FinSi` |
| Condicional doble | `Si condicion Entonces … SiNo … FinSi` |
| Para | `Para i <- inicio Hasta fin Hacer … FinPara` (con paso: `Con Paso n`, p. ej. `Con Paso -1`) |
| Mientras | `Mientras condicion Hacer … FinMientras` |
| Aritméticos | `+ - * / ^ MOD` |
| Relacionales | `= <> < <= > >=` |
| Lógicos | `Y  O  NO` |
| Funciones | `abs() trunc() redon() raiz() sen() cos() tan()` · `Aleatorio(a,b)` |
| Strings | `Longitud() Concatenar() ConvertirANumero() ConvertirATexto() Mayusculas() Minusculas()` |

### Reglas importantes
- Variables sueltas: **sin** `Definir` (el perfil no lo exige). **Arreglos:** `Dimension` es obligatorio y la cátedra lo escribe junto con `Definir`: ver sección de arreglos.
- Cadenas entre **comillas dobles**. El nombre del algoritmo **sin espacios** (`Ejercicio_03`).
- Todo en **español** (variables, mensajes, comentarios).
- No usar `Mostrar`, `Inicio`/`Fin` ni `Si … Sino`: usar `Escribir`, `Algoritmo`/`FinAlgoritmo` y `SiNo`. (En el material de arreglos aparece también `Proceso`/`FinProceso`: es válido, pero preferir `Algoritmo`.)
- Constantes con asignación al comienzo (`tasa_iva <- 0.21`). **`PI` es palabra reservada**: `PI <- 3.1416` da `ERROR 86: Identificador no válido (PI)`. Usar otro nombre (`pi_valor <- 3.1416`) o la constante `PI` ya incorporada sin asignarla.
- Ángulos: `sen()`, `cos()`, `tan()` trabajan en **radianes**. Si el enunciado da grados, convertir (`radianes <- grados * pi_valor / 180`). `sin` y `sqrt` no existen: son `sen` y `raiz`. El azar es `Aleatorio(a, b)` (no `random`); para repetir pruebas usar `--seed=N`.
- `Escribir` un mensaje antes de `Leer` para que el usuario sepa qué ingresar (el diagrama **no** dibuja esos avisos, solo las salidas que son parte de la lógica).
- **Usar la función de PseInt, no la de otro lenguaje:** `redon()` (no `round`), `trunc()`, `raiz()`, `Mayusculas()`.

## Arreglos (OJO: errores típicos, comprobados en PSeInt)

**Declaración (como la cátedra):**
```
Definir a Como Entero
Dimension a[7]            // vector
Dimension m[4,3]          // matriz: primero filas, después columnas
```
Los índices **empiezan en 1**. Si el enunciado no dice el tamaño, usar uno **chico** (4 o 5) para probar; si lo da, usar exactamente ese.

1. **`round()` no existe** → `ERROR 202`. Usar **`redon()`** (o `trunc((min+max)/2)` para el "div" de la búsqueda binaria).
2. **El `Para` no puede pasarse de la dimensión**: `Para i <- 1 Hasta N` con `N` = la dimensión (menos da un arreglo incompleto; más da `ERROR 303`). Si el enunciado y el código no coinciden (ej. "5 elementos" con `a[6]`), usar **el tamaño del enunciado**.
3. **Ordenamiento (burbuja, selección):** los `Para` externos van **hasta N-1** y se compara `a[j]` con `a[j+1]`: si `j` llegara a N, `a[N+1]` rompe.
4. **La búsqueda debe contemplar "no está"**. Dos patrones seguros:
   - Con bandera/posición (recorre todo, sirve también para "todas las ocurrencias"):
     ```
     pos <- 0
     Para i <- 1 Hasta N Hacer
        Si pos = 0 Y a[i] = k Entonces
           pos <- i
        FinSi
     FinPara
     Si pos > 0 Entonces
        Escribir "Está en la posición ", pos
     SiNo
        Escribir "No está"
     FinSi
     ```
   - Con `Mientras`: **la guarda del rango va primero** (PseInt hace cortocircuito): `Mientras i <= N Y a[i] <> k Hacer` y después preguntar `Si i <= N`. El orden inverso (`a[i] <> k Y i <= N`) falla con `ERROR 303` cuando el valor no está.
5. **Búsqueda binaria:** además de `redon`, después de cada paso `medio` puede quedar fuera de rango (por ejemplo si el valor buscado es mayor que todos): **proteger el acceso a `a[medio]`** (condición `min <= max` primero, y no leer `a[medio]` después del ciclo sin comprobar `min <= max`). El arreglo **debe estar ordenado**.
6. **Matrices:** `a[i,j]`, doble `Para` (filas externo, columnas interno).
7. **Intercalación** (dos arreglos ya ordenados → un tercero ordenado): índices `i`, `j`, `k` en 1; `Mientras i<=N Y j<=M` copiar el menor a `c[k]` y avanzar `k` y el índice del que se copió; al terminar, **copiar al final lo que sobra** del otro (`Si i>N` → copiar `b` desde `j`; `SiNo` → copiar `a` desde `i`). El tercer arreglo tiene `N+M` elementos. Plantilla completa en CONVENCION_CATEDRA.md §4.7.
8. Sin código de depuración olvidado (`Escribir a[i]`, `Escribir k` sueltos).

### El método que pide el enunciado es el que hay que usar
- Si piden **burbuja (intercambio)** → recorrer comparando `a[j]` con `a[j+1]` e intercambiar (con variable auxiliar). Si piden **selección del mínimo** → buscar el mínimo desde `i`, guardar valor y posición, e intercambiar con `a[i]`. Si piden búsqueda **binaria** o **secuencial**, esa.
- **Hacer el otro método se toma como error**, aunque ordene bien. Escribir en la resolución qué método se aplicó y por qué.
- Ascendente = el menor primero; descendente = invertir la comparación (`<` en lugar de `>`).

## Pasos

### 1. Recibir el enunciado
- Texto directo, o un `Ejercicio_XX` existente en `Practica/` (buscarlo con Glob; si hay varias agrupaciones, desambiguar). En ese caso leer su `enunciado.md`.
- Si es ambiguo, decirlo y explicitar el supuesto.

### 2. Escribir el pseudocódigo
- Sintaxis exacta de arriba, claro y didáctico, con comentarios `//` donde ayuden.
- Si hay más de una solución razonable (`Para` vs `Mientras`, `Si` anidado vs `Y`/`O`), implementar la más didáctica y **mencionar las alternativas** (salvo que el enunciado fije el método).
- Recordar que el diagrama será **espejo** del `.psc`: nombres de variables significativos, condiciones y mensajes definitivos desde el principio.

### 3. Guardar `algoritmo.psc`
- Ruta: `Practica/.../Ejercicio_XX/algoritmo.psc`. Si la carpeta no existe, crearla siguiendo la convención (ver `resolv-ejercicio-ayd`).
- Si ya existe un `algoritmo.psc`, **no sobreescribir** sin confirmación.
- No dejar archivos temporales (borrar los auxiliares de prueba).

### 4. Ejecutar
- Casos de prueba representativos: normal, bordes (0, negativos, igualdad, límites del rango) y **al menos un caso por rama** de cada decisión. En arreglos: valor **presente**, **ausente** (menor, intermedio y mayor que todos), arreglo ya ordenado y en orden inverso.
- Capturar la salida y compararla con el resultado esperado calculado a mano.
- Errores de **sintaxis**: corregir y repetir hasta que corra. Errores de **lógica** o de rango (`ERROR 303`): corregir y explicar qué se cambió.

### 5. Actualizar `resolucion.md`
- Si existe, reemplazar el bloque de código de `## Resolución` con el código **final idéntico, carácter por carácter, al `.psc`**. Avisar la modificación. No tocar otras secciones; si la *Explicación* o el diagrama dejan de coincidir, señalarlo.
- Si no existe `resolucion.md`, no crearlo (eso lo hace `resolv-ejercicio-ayd`).

### 6. Reporte final
- El **pseudocódigo generado**, la **salida de cada caso** (entradas y salida), si funcionó o qué se corrigió, alternativas posibles.
- **No hacer `git commit`.** Esperar confirmación.

## Reglas generales
- No modificar archivos fuera de `Practica/` salvo estricta necesidad.
- No eliminar ni sobreescribir archivos sin confirmación.
