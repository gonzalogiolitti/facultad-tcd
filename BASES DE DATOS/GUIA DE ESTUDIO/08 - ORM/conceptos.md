# 08 · Object-Relational Mapping (ORM) — Conceptos

> Guía de estudio · Bases de Datos · TUCD (UGR) · Unidad V del programa.
> Temas: qué es un ORM, el desajuste objeto-relacional, mapeo clase↔tabla,
> migraciones, CRUD con ORM vs. SQL directo, problema N+1, ventajas y desventajas.

---

## 1. El problema: desajuste objeto-relacional (*impedance mismatch*)

Los programas modernos trabajan con **objetos** (una clase `Cliente` con atributos y
métodos, listas de otros objetos adentro). La base guarda **tablas planas** con filas y
FK. Los dos mundos no encajan del todo:

| En el programa (objetos) | En la base (relacional) |
|---|---|
| un objeto `Pedido` con una **lista** `items` adentro | tabla `pedido` + tabla `detalle` unidas por FK |
| herencia (`ClienteVIP extends Cliente`) | no existe herencia; hay que simularla |
| identidad por referencia en memoria | identidad por **clave primaria** |
| navegar `pedido.cliente.nombre` | hacer un `JOIN` |

Traducir a mano ese ida y vuelta (escribir el `SELECT`, leer cada columna, armar el
objeto; y al revés para guardar) es repetitivo y propenso a errores.

---

## 2. Qué hace un ORM

Un **ORM** (Object-Relational Mapping) es una biblioteca que **traduce automáticamente**
entre objetos y tablas. Uno define **clases** y el ORM se encarga del SQL.

Correspondencias:

| Concepto OOP | Concepto relacional |
|---|---|
| Clase / modelo / entidad | Tabla |
| Instancia (objeto) | Fila |
| Atributo | Columna |
| Referencia a otro objeto | Clave foránea |
| Lista de objetos relacionados | Relación 1:N / N:M |

Ejemplos de ORM por lenguaje:

- **Python:** SQLAlchemy, Django ORM, Peewee
- **JavaScript/TypeScript:** Prisma, Sequelize, TypeORM
- **Java:** Hibernate (implementa el estándar JPA)
- **PHP:** Eloquent (Laravel), Doctrine
- **Ruby:** ActiveRecord (Rails)

---

## 3. Definir modelos (ejemplo con SQLAlchemy, Python)

```python
from sqlalchemy.orm import DeclarativeBase, Mapped, mapped_column, relationship
from sqlalchemy import ForeignKey

class Base(DeclarativeBase):
    pass

class Autor(Base):
    __tablename__ = "autor"
    id_autor: Mapped[int] = mapped_column(primary_key=True)
    nombre:   Mapped[str] = mapped_column(nullable=False)
    # relación 1:N: un autor tiene muchos libros
    libros:   Mapped[list["Libro"]] = relationship(back_populates="autor")

class Libro(Base):
    __tablename__ = "libro"
    id_libro: Mapped[int] = mapped_column(primary_key=True)
    titulo:   Mapped[str] = mapped_column(nullable=False)
    anio:     Mapped[int]
    id_autor: Mapped[int] = mapped_column(ForeignKey("autor.id_autor"))
    autor:    Mapped["Autor"] = relationship(back_populates="libros")
```

El ORM genera, a partir de esas clases, el equivalente a:

```sql
CREATE TABLE autor (id_autor INT PRIMARY KEY, nombre VARCHAR NOT NULL);
CREATE TABLE libro (
    id_libro INT PRIMARY KEY,
    titulo VARCHAR NOT NULL,
    anio INT,
    id_autor INT REFERENCES autor(id_autor)
);
```

---

## 4. CRUD: ORM vs. SQL directo (lado a lado)

| Operación | SQL directo | ORM (SQLAlchemy) |
|---|---|---|
| **Crear** | `INSERT INTO autor (nombre) VALUES ('Borges');` | `session.add(Autor(nombre="Borges")); session.commit()` |
| **Leer** | `SELECT * FROM libro WHERE anio > 1950;` | `session.query(Libro).filter(Libro.anio > 1950).all()` |
| **Actualizar** | `UPDATE libro SET anio = 1949 WHERE id_libro = 1;` | `l = session.get(Libro, 1); l.anio = 1949; session.commit()` |
| **Borrar** | `DELETE FROM libro WHERE id_libro = 1;` | `session.delete(session.get(Libro, 1)); session.commit()` |
| **Navegar relación** | `SELECT a.nombre FROM libro l JOIN autor a ON a.id_autor=l.id_autor WHERE l.id_libro=1;` | `session.get(Libro, 1).autor.nombre` |

Con el ORM se trabaja con objetos del lenguaje; el SQL lo escribe la biblioteca.

---

## 5. Conceptos clave del ORM

### Modelo / entidad
La clase que representa una tabla.

### Sesión / Unit of Work
Un espacio de trabajo que **junta** los cambios (altas, modificaciones, bajas) y los envía
a la base **todos juntos** al hacer `commit()` — típicamente dentro de **una transacción**.

### Migraciones
Scripts versionados que llevan el **esquema** de la base de una versión a la siguiente
(crear una tabla, agregar una columna, un índice). Herramientas: Alembic (SQLAlchemy),
`manage.py makemigrations/migrate` (Django), `prisma migrate`.

```
migración 0001  -> crea tablas autor y libro
migración 0002  -> agrega columna libro.isbn
migración 0003  -> crea índice sobre libro.anio
```

Cada entorno (tu máquina, el servidor) aplica las migraciones en orden y queda con el mismo
esquema.

### Query builder
API para construir consultas encadenando métodos:
`query(Libro).filter(Libro.anio > 1950).order_by(Libro.titulo).limit(10)`.

### Lazy vs. eager loading
- **Lazy (perezoso):** la relación se consulta **cuando la usás** (`libro.autor` dispara un
  `SELECT` en ese momento).
- **Eager (ansioso):** se trae todo junto de entrada, con un `JOIN` o consultas
  adicionales planificadas.

---

## 6. El problema N+1 (el error de rendimiento más típico con ORM)

```python
libros = session.query(Libro).all()          # 1 consulta: trae 100 libros
for l in libros:
    print(l.autor.nombre)                     # ¡1 consulta por cada libro! → 100 más
# Total: 1 + 100 = 101 consultas
```

Con lazy loading, acceder a `l.autor` dentro del bucle dispara una consulta por vuelta.

**Solución: eager loading** (traer los autores de una).

```python
from sqlalchemy.orm import joinedload
libros = session.query(Libro).options(joinedload(Libro.autor)).all()  # 1 sola consulta con JOIN
for l in libros:
    print(l.autor.nombre)                     # ya está en memoria, no consulta
```

En Django: `Libro.objects.select_related("autor")`. En Prisma: `include: { autor: true }`.

---

## 7. Ventajas y desventajas

### Ventajas
- **Productividad:** menos código repetitivo; se piensa en objetos.
- **Portabilidad:** el mismo código sirve para MariaDB, PostgreSQL, SQLite (el ORM genera
  el dialecto correcto).
- **Seguridad:** las consultas van **parametrizadas** por defecto → protege contra
  inyección SQL.
- **Mantenimiento:** el esquema vive en el código (modelos + migraciones), versionado en
  git.
- **Integración:** validaciones, tipos y relaciones en un solo lugar.

### Desventajas
- **Rendimiento:** consultas generadas menos óptimas que un SQL a mano; el N+1 aparece
  fácil.
- **"Magia":** cuesta saber qué SQL se ejecuta realmente (hay que activar el log).
- **Consultas complejas:** reportes con muchas agregaciones, `window functions` o SQL
  específico del motor se vuelven incómodos; muchas veces se termina escribiendo SQL crudo.
- **Curva de aprendizaje** propia del ORM.
- **Abstracción con fugas:** para usarlo bien igual hay que entender SQL y el modelo
  relacional.

---

## 8. ¿Cuándo ORM y cuándo SQL directo?

| Situación | Conviene |
|---|---|
| CRUD de una aplicación (altas, ediciones, listados) | **ORM** |
| Prototipos, equipos que iteran rápido | **ORM** |
| Reportes analíticos pesados, agregaciones complejas | **SQL directo** (o vistas) |
| Migración de datos masiva, ETL | **SQL directo** / herramientas específicas |
| Necesito una feature puntual del motor | **SQL directo** (la mayoría de ORM permiten "raw SQL") |

Lo habitual es **combinar**: ORM para el 90% (el CRUD) y SQL crudo para el 10% (los
reportes difíciles).

---

## 9. Errores comunes

- **Usar ORM sin saber SQL.** Cuando algo va lento o raro, no se puede diagnosticar.
- **No mirar el SQL generado.** Activá el log (`echo=True` en SQLAlchemy,
  `django.db` logging) durante el desarrollo.
- **Caer en el N+1.** Recordá `joinedload` / `select_related` / `include` al recorrer
  relaciones en un bucle.
- **Editar la base a mano en vez de con migraciones.** El esquema deja de coincidir con
  los modelos.
- **Traer objetos completos cuando solo necesitás un campo.** Usá proyecciones
  (`.with_entities(...)`, `.values(...)`).
- **Meter lógica de negocio pesada en el ORM** cuando una consulta SQL o una vista lo
  resuelven en una línea.

---

## 10. Resumen

Un **ORM** salva el **desajuste objeto-relacional** mapeando **clases↔tablas**,
**objetos↔filas** y **referencias↔claves foráneas**. Aporta productividad, portabilidad y
seguridad ante inyección, a costa de rendimiento y control fino. Sus piezas son
**modelos**, **sesión/unit of work**, **migraciones** y **query builder**. El riesgo
clásico es el **problema N+1**, que se resuelve con **eager loading**. En la práctica se
usa ORM para el CRUD y **SQL directo** para los reportes complejos.
