# 01 · Introducción a las Bases de Datos — Conceptos

> Guía de estudio · Bases de Datos · TUCD (UGR) · Basado en el Programa oficial
> (Unidad 0) y el apunte de la cátedra. Pensado para leerse sin conocimientos previos.

---

## 1. Dato, información y base de datos

- **Dato:** un hecho suelto, sin contexto. Ejemplo: `1500`, `"Lucía"`, `2026-03-10`.
- **Información:** datos organizados que responden una pregunta. Ejemplo: *"Lucía gastó
  $1500 el 10/03/2026"*.
- **Base de datos (BD):** una colección de datos **relacionados entre sí**, organizada y
  guardada de forma **persistente** (no se pierde al apagar la máquina) para que varias
  personas o programas la usen.

Ejemplo cotidiano: el cuaderno donde el kiosco anota "quién debe fía" es una base de datos
de papel. Tiene datos (nombre, monto, fecha), están relacionados (cada monto es de alguien)
y son persistentes (el cuaderno queda).

---

## 2. El problema de guardar datos en archivos sueltos

Imaginá que el kiosco maneja todo con una sola planilla de cálculo `ventas.xlsx`:

| fecha | cliente | tel_cliente | producto | precio | rubro |
|---|---|---|---|---|---|
| 10/03 | Lucía Gómez | 3814-5566 | Coca 500ml | 900 | Bebidas |
| 10/03 | Lucía Gomez | 3814-5566 | Alfajor | 600 | Golosinas |
| 11/03 | Pedro Ruiz | 3814-1234 | Coca 500ml | 950 | Bebida |

Problemas concretos que aparecen:

- **Redundancia:** el teléfono de Lucía se repite en cada fila. Ocupa lugar y hay que
  escribirlo muchas veces.
- **Inconsistencia:** aparece "Gómez" y "Gomez", "Bebidas" y "Bebida". Ya no se puede
  confiar en agrupar por rubro.
- **Anomalía de actualización:** si Lucía cambia de teléfono, hay que corregir **todas** sus
  filas. Si se olvida una, quedan dos teléfonos para la misma persona.
- **Anomalía de inserción:** no puedo cargar un producto nuevo que todavía no se vendió,
  porque la fila necesita sí o sí una venta.
- **Anomalía de borrado:** si borro la única venta de un producto, pierdo también el precio
  y el rubro de ese producto.
- **Dificultad de acceso concurrente:** si dos personas abren el archivo a la vez, una pisa
  los cambios de la otra.
- **Problemas de seguridad:** no puedo dar acceso "solo a las ventas" sin mostrar los
  teléfonos.
- **Dependencia programa–dato:** si cambio el formato del archivo, todos los programas que
  lo leían dejan de funcionar.

Un **Sistema Gestor de Bases de Datos** nace para resolver todo esto.

---

## 3. Sistema Gestor de Bases de Datos (SGBD / DBMS)

Un **SGBD** es el software que se ubica **entre los usuarios/programas y los datos** y se
encarga de: crear la estructura, guardar, consultar, modificar, controlar accesos, mantener
la integridad y recuperarse de fallos.

```
 Usuarios / Aplicaciones
          │
          ▼
   ┌──────────────┐
   │     SGBD     │  ← define, consulta, controla concurrencia, seguridad, backup
   └──────────────┘
          │
          ▼
   Datos en disco  +  Diccionario de datos (metadatos)
```

Ejemplos de SGBD:

| Tipo | Ejemplos |
|---|---|
| Relacionales (SQL) | **MariaDB**, MySQL, PostgreSQL, SQLite, Oracle, SQL Server |
| NoSQL documentales | MongoDB, CouchDB |
| NoSQL clave-valor | Redis |
| NoSQL columnares | Cassandra |
| NoSQL de grafos | Neo4j |

En la materia se usa **MariaDB** (un SGBD relacional) con la herramienta gráfica DBeaver.

---

## 4. Ventajas y desventajas frente a los "sistemas tradicionales" (archivos)

**Ventajas**

- Control de la redundancia y de la inconsistencia.
- Datos compartidos por muchos usuarios a la vez, de forma segura.
- Se hacen cumplir **reglas de integridad** (ej: "el precio no puede ser negativo").
- Seguridad por usuario y por permiso.
- Copias de seguridad y recuperación ante fallos.
- **Independencia de datos:** puedo cambiar cómo se guardan los datos sin reescribir los
  programas.

**Desventajas**

- Costo del software y del hardware.
- Complejidad: hay que aprender a administrarlo y diseñarlo bien.
- Un fallo del SGBD afecta a **todos** los que dependen de él.
- Para problemas muy chicos, puede ser "matar una mosca con un cañón".

---

## 5. Niveles de abstracción (arquitectura de 3 esquemas ANSI/SPARC)

La idea central: **el usuario no necesita saber cómo se guardan los datos por dentro**.

```
  NIVEL EXTERNO (vistas)     "Yo solo veo el nombre y el saldo de mis clientes"
        ▲   varias vistas, una por tipo de usuario
        │
  NIVEL LÓGICO (conceptual)  "Hay una tabla CLIENTE(dni, nombre, telefono, saldo)"
        ▲   un único esquema lógico para toda la organización
        │
  NIVEL INTERNO (físico)     "CLIENTE se guarda en tal archivo, con tal índice B-tree"
```

- **Nivel físico / interno:** cómo se almacenan los bytes, qué índices hay, cómo se
  comprime. Lo maneja el SGBD.
- **Nivel lógico / conceptual:** qué datos hay y qué relaciones existen, **sin** detalles de
  almacenamiento. Es lo que diseña el analista (tablas, columnas, claves).
- **Nivel externo / de vistas:** porciones del esquema lógico adaptadas a cada usuario. Un
  cajero ve una vista; el contador ve otra.

**Independencia de datos:**

- **Física:** puedo cambiar el nivel interno (agregar un índice, cambiar el disco) sin tocar
  el nivel lógico.
- **Lógica:** puedo cambiar el nivel lógico (agregar una columna) sin romper las vistas
  existentes.

---

## 6. Esquema vs. instancia

- **Esquema:** la **estructura** (definición) de la base. Cambia muy poco. Ejemplo:
  *"CLIENTE tiene dni, nombre y teléfono"*.
- **Instancia (o estado):** los **datos concretos** en un momento dado. Cambia todo el
  tiempo con cada INSERT/UPDATE/DELETE. Ejemplo: *"hoy hay 320 clientes cargados"*.

Analogía: el esquema es el formulario en blanco; la instancia es el formulario lleno de hoy.

---

## 7. Modelos de datos (breve historia y clasificación)

Un **modelo de datos** es un conjunto de conceptos para describir datos, relaciones y
restricciones.

| Época | Modelo | Idea |
|---|---|---|
| 1960s | **Jerárquico** | datos en árbol (padre-hijo). Rígido. |
| 1970s | **En red** | grafos de punteros. Potente pero difícil de programar. |
| 1970 (Codd) | **Relacional** | todo son **tablas**; se consulta con lógica, no con punteros. |
| 1990s | **Orientado a objetos / objeto-relacional** | integra tipos complejos. |
| 2000s | **NoSQL** | documentos, clave-valor, columnas, grafos; esquema flexible, escala horizontal. |

El **modelo relacional** domina desde los 80 por su simplicidad y su base matemática. Es el
eje de esta materia (Unidades I y II).

---

## 8. Arquitectura cliente–servidor

- El **servidor** de base de datos (ej: el proceso de MariaDB) guarda los datos y ejecuta
  las consultas.
- El **cliente** (DBeaver, una app web, un script de Python) se conecta por red, manda
  sentencias SQL y recibe resultados.
- Ventaja: muchos clientes distintos usan el mismo servidor y los mismos datos.

En tu instalación: el servidor MariaDB corre en `localhost:3306` y DBeaver es un cliente.

---

## 9. Componentes de un SGBD

- **Procesador / optimizador de consultas:** recibe el SQL, decide **cómo** ejecutarlo de la
  forma más rápida (qué índice usar, en qué orden unir tablas).
- **Motor de almacenamiento:** lee y escribe los datos en disco, maneja páginas y buffers.
  En MariaDB los más comunes son **InnoDB** (transaccional, con claves foráneas) y MyISAM.
- **Gestor de transacciones y de concurrencia:** garantiza que operaciones simultáneas no se
  pisen (ver Unidad 06).
- **Gestor de recuperación:** usa un *log* para volver a un estado consistente tras un corte.
- **Diccionario de datos (catálogo):** una base de datos **sobre** la base de datos: qué
  tablas hay, qué columnas, qué permisos. En MariaDB: `information_schema`.

---

## 10. Roles de las personas

- **DBA (administrador):** instala, configura, hace backups, da permisos, monitorea.
- **Diseñador de la BD:** define el esquema conceptual y lógico (entidades, tablas, claves).
- **Programador de aplicaciones:** escribe el software que consulta la BD.
- **Usuario final:** usa una aplicación que por debajo consulta la BD, sin escribir SQL.

---

## 11. Sublenguajes de SQL

Aunque SQL es un solo lenguaje, sus sentencias se agrupan según para qué sirven:

| Sigla | Nombre | Sentencias típicas | Para qué |
|---|---|---|---|
| **DDL** | Definición de datos | `CREATE`, `ALTER`, `DROP`, `TRUNCATE` | crear/modificar la **estructura** |
| **DML** | Manipulación de datos | `INSERT`, `UPDATE`, `DELETE`, (`SELECT`) | trabajar con los **datos** |
| **DCL** | Control de datos | `GRANT`, `REVOKE` | **permisos** de usuarios |
| **TCL** | Control de transacciones | `COMMIT`, `ROLLBACK`, `SAVEPOINT` | confirmar o deshacer cambios |

(Algunas clasificaciones ubican `SELECT` en un grupo aparte, **DQL** — lenguaje de consulta.)

---

## 12. Errores comunes al empezar

- **Confundir base de datos con SGBD.** MariaDB es el SGBD (el motor); `kiosco` es una base
  de datos concreta administrada por ese motor.
- **Confundir esquema con instancia.** "Agregar la columna teléfono" es un cambio de
  esquema; "cargar 10 clientes" es un cambio de instancia.
- **Creer que hay que saber SQL para diseñar.** Primero se modela (Unidades 02 y 03), recién
  después se escribe SQL.
- **Pensar que NoSQL "reemplaza" a lo relacional.** Son herramientas distintas para
  problemas distintos (ver Unidad 07).
- **Ignorar la integridad.** Una BD sin reglas (claves, `NOT NULL`, `CHECK`) vuelve a tener
  los mismos problemas que la planilla de Excel.

---

## 13. Resumen en una frase

Una base de datos es un conjunto de datos relacionados y persistentes; un **SGBD** es el
software que los administra ofreciendo **independencia de datos**, **integridad**,
**concurrencia** y **seguridad**, organizados en **tres niveles de abstracción** (físico,
lógico y de vistas).
