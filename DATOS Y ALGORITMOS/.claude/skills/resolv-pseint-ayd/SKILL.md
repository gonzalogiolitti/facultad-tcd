---
name: resolv-pseint-ayd
description: Genera y ejecuta pseudocódigo PseInt para ejercicios de la materia Datos y Algoritmos, siguiendo la sintaxis exacta de PseInt y la convención de la cátedra. Se usa en conjunto con la skill resolv-ejercicio-ayd.
---

# resolv-pseint-ayd

Escribe, guarda, **ejecuta** y documenta el pseudocódigo PseInt de un ejercicio de Datos y Algoritmos. Prioridad: que el código sea **entendible para un estudiante**, no solo que funcione.

**Proyecto:** `/home/gonza/Facultad/Tecnicatura en Ciencia de Datos/2do Anio/DATOS Y ALGORITMOS` · **Carpeta de trabajo:** `Practica/`

## Cómo ejecutar PseInt (importante)

- `~/pseint/pseint` es el **lanzador gráfico** (abre la ventana de wxPSeInt): desde Claude Code se cuelga o no devuelve salida. **No usarlo para ejecutar.**
- El **intérprete de consola** es `~/pseint/bin/pseint`. Siempre usarlo con `--nouser` (sin mensajes de estado ni esperar tecla), con `timeout` y sin stdin interactivo:

```bash
# sin Leer
timeout 20 ~/pseint/bin/pseint --nouser "ruta/algoritmo.psc" </dev/null
# con Leer: pasar los valores por stdin (uno por línea) o con --input
printf '5\n3\n' | timeout 20 ~/pseint/bin/pseint --nouser "ruta/algoritmo.psc"
timeout 20 ~/pseint/bin/pseint --nouser --noinput --input="5,3" "ruta/algoritmo.psc"   # alternativa
```

- Si el proyecto está en WSL y se corre desde PowerShell/Windows: `wsl.exe -d Ubuntu -- bash -c '...'` con las rutas Linux.
- Otras opciones útiles: `--norun` (solo revisa sintaxis), `--seed=N` (reproducir `Aleatorio`).
- Los errores se muestran como `Lin N (inst M): ERROR NNN: descripción` (la salida puede traer caracteres mal codificados; interpretar igual).

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
| Para | `Para i <- inicio Hasta fin Hacer … FinPara` (con paso: `Con Paso n`) |
| Mientras | `Mientras condicion Hacer … FinMientras` |
| Aritméticos | `+ - * / ^ MOD` |
| Relacionales | `= <> < <= > >=` |
| Lógicos | `Y  O  NO` |
| Funciones | `abs() trunc() redon() raiz() sen() cos() tan()` (también `Aleatorio(a,b)`) |
| Strings | `Longitud() Concatenar() ConvertirANumero() ConvertirATexto() Mayusculas() Minusculas()` |

### Reglas importantes
- **NO usar `Definir` ni declarar tipos** (el perfil tiene desactivado "Obligar a definir tipos").
- Cadenas entre **comillas dobles**.
- El nombre del algoritmo **no puede tener espacios** (usar `_`, p. ej. `Ejercicio_03`).
- Todo en **español** (nombres de variables, mensajes y comentarios).
- No usar `Mostrar`, `Inicio`/`Fin` ni `Si … Sino` (eso no es PseInt): usar `Escribir`, `Algoritmo`/`FinAlgoritmo` y `SiNo`.
- Constantes con asignación al comienzo (p. ej. `PI <- 3.1416`).
- Cuando haga falta, `Escribir` un mensaje antes de `Leer` para que el usuario sepa qué ingresar.

## Pasos

### 1. Recibir el enunciado
- Texto directo, o un `Ejercicio_XX` existente en `Practica/` (buscarlo con Glob; si hay varias agrupaciones, p. ej. `Practica/Diagramacion Logica/Parte 1/Ejercicio_XX`, desambiguar con el usuario). En ese caso leer su `enunciado.md`.
- Si el enunciado es ambiguo, decirlo y explicitar el supuesto.

### 2. Escribir el pseudocódigo
- Sintaxis exacta de arriba, claro y didáctico, con comentarios `//` donde ayuden (qué es cada variable, por qué se inicializa un acumulador, etc.).
- Si hay más de una solución razonable (p. ej. `Para` vs `Mientras`, `Si` anidado vs `Y`/`O`), implementar la más didáctica y **mencionar las alternativas**.

### 3. Guardar `algoritmo.psc`
- Ruta: `Practica/.../Ejercicio_XX/algoritmo.psc`. Si la carpeta no existe, crearla siguiendo la convención del proyecto (numeración siguiente, ver `resolv-ejercicio-ayd`).
- Si ya existe un `algoritmo.psc`, **no sobreescribir** sin confirmación.
- No dejar archivos temporales (si hace falta un archivo auxiliar de prueba, borrarlo).

### 4. Ejecutar
- Ejecutar con el intérprete de consola (ver sección anterior), con casos de prueba representativos: caso normal, bordes (0, negativos, igualdad, límites del rango) y, si hay decisiones, **al menos un caso por rama**. Para los `Leer`, pasar las entradas por stdin.
- Capturar la salida y compararla con el resultado esperado calculado a mano.
- Si hay errores de **sintaxis**, corregirlos y volver a ejecutar (repetir hasta que corra). Si el error es de **lógica** (salida incorrecta), corregir también y explicar qué se cambió.

### 5. Actualizar `resolucion.md`
- Si existe `resolucion.md`, reemplazar el bloque de código de la sección de resolución (`## Resolución` / `## Resolución (pseudocódigo PseInt)`; conservar el título que ya tenga) con el código **final idéntico, carácter por carácter, al `.psc`**.
- Es una modificación de un archivo existente: avisarla en el reporte. No tocar otras secciones; si la *Explicación* o el diagrama dejan de coincidir con el nuevo código, señalarlo al usuario.
- Si no existe `resolucion.md`, no crearlo (eso lo hace `resolv-ejercicio-ayd`).

### 6. Reporte final
Mostrar:
- El **pseudocódigo generado**.
- La **salida de la ejecución** (entradas usadas y salida obtenida por cada caso).
- Si funcionó correctamente o si hubo errores (y cuáles se corrigieron).
- Alternativas posibles, si las hay.
- **No hacer `git commit`.** Esperar confirmación del usuario.

## Reglas generales
- No modificar archivos fuera de `Practica/` salvo estricta necesidad.
- No eliminar ni sobreescribir archivos sin confirmación.
