# 08 · ORM — Práctica resuelta

> Ejercicios nuevos. Se usa **SQLAlchemy (Python)** como ORM de referencia y se muestran
> equivalencias con Django ORM. El objetivo es entender el mapeo, no memorizar una API.

---

## Esquema de trabajo (mini Modelo Relacional)

```
CATEGORIA(<u>id_categoria</u>, nombre)
CURSO(<u>id_curso</u>, titulo, horas, *id_categoria*)
ESTUDIANTE(<u>id_estudiante</u>, nombre, email)
INSCRIPCION(<u>*id_estudiante*</u>, <u>*id_curso*</u>, fecha, nota)   -- N:M con atributos
```

Un curso pertenece a una categoría (1:N). Estudiantes y cursos se relacionan N:M mediante
`INSCRIPCION`, que además guarda `fecha` y `nota`.

---

## Ejercicio 1 — Escribir los modelos ORM a partir del MR

**Enunciado.** Traducí el esquema anterior a clases de SQLAlchemy, incluyendo las
relaciones.

### Resolución

```python
from datetime import date
from sqlalchemy import ForeignKey, String, Numeric
from sqlalchemy.orm import DeclarativeBase, Mapped, mapped_column, relationship

class Base(DeclarativeBase):
    pass

class Categoria(Base):
    __tablename__ = "categoria"
    id_categoria: Mapped[int] = mapped_column(primary_key=True)
    nombre: Mapped[str] = mapped_column(String(60), unique=True)
    cursos: Mapped[list["Curso"]] = relationship(back_populates="categoria")

class Curso(Base):
    __tablename__ = "curso"
    id_curso: Mapped[int] = mapped_column(primary_key=True)
    titulo: Mapped[str] = mapped_column(String(120))
    horas: Mapped[int]
    id_categoria: Mapped[int] = mapped_column(ForeignKey("categoria.id_categoria"))
    categoria: Mapped["Categoria"] = relationship(back_populates="cursos")
    inscripciones: Mapped[list["Inscripcion"]] = relationship(back_populates="curso")

class Estudiante(Base):
    __tablename__ = "estudiante"
    id_estudiante: Mapped[int] = mapped_column(primary_key=True)
    nombre: Mapped[str] = mapped_column(String(120))
    email: Mapped[str] = mapped_column(String(160), unique=True)
    inscripciones: Mapped[list["Inscripcion"]] = relationship(back_populates="estudiante")

class Inscripcion(Base):
    __tablename__ = "inscripcion"
    id_estudiante: Mapped[int] = mapped_column(
        ForeignKey("estudiante.id_estudiante"), primary_key=True)
    id_curso: Mapped[int] = mapped_column(
        ForeignKey("curso.id_curso"), primary_key=True)
    fecha: Mapped[date]
    nota: Mapped[float | None] = mapped_column(Numeric(4, 2), nullable=True)
    estudiante: Mapped["Estudiante"] = relationship(back_populates="inscripciones")
    curso: Mapped["Curso"] = relationship(back_populates="inscripciones")
```

### Decisiones explicadas

- **La tabla puente `INSCRIPCION` se modela como su propia clase**, no como una relación
  "muchos-a-muchos" automática, **porque tiene atributos** (`fecha`, `nota`). Regla: N:M
  *sin* datos propios → `secondary=` automático; N:M *con* datos propios → clase explícita
  (patrón "association object").
- **PK compuesta** `(id_estudiante, id_curso)`: se marca `primary_key=True` en las dos
  columnas FK, igual que en el Modelo Relacional.
- **`nota` es `float | None` / `nullable=True`**: el enunciado permite inscripción sin nota
  (curso en marcha).
- **`back_populates`** mantiene sincronizados los dos lados de cada relación en memoria.

---

## Ejercicio 2 — CRUD con el ORM y su SQL equivalente

**Enunciado.** Escribí, con el ORM, estas operaciones y mostrá qué SQL genera cada una.

a) Crear la categoría "Datos" y un curso "SQL desde cero" de 20 horas en esa categoría.
b) Listar los cursos de más de 15 horas, ordenados por título.
c) Poner nota 9 a la inscripción del estudiante 3 en el curso 1.
d) Borrar el curso 5.

### Resolución

```python
# a) CREATE
cat = Categoria(nombre="Datos")
curso = Curso(titulo="SQL desde cero", horas=20, categoria=cat)  # asigna la relación
session.add(cat)          # 'curso' se agrega en cascada por la relación
session.commit()
```
```sql
INSERT INTO categoria (nombre) VALUES ('Datos');
INSERT INTO curso (titulo, horas, id_categoria) VALUES ('SQL desde cero', 20, 1);
```

```python
# b) READ
cursos = (session.query(Curso)
          .filter(Curso.horas > 15)
          .order_by(Curso.titulo)
          .all())
```
```sql
SELECT * FROM curso WHERE horas > 15 ORDER BY titulo;
```

```python
# c) UPDATE
insc = session.get(Inscripcion, {"id_estudiante": 3, "id_curso": 1})
insc.nota = 9
session.commit()
```
```sql
SELECT * FROM inscripcion WHERE id_estudiante = 3 AND id_curso = 1;
UPDATE inscripcion SET nota = 9 WHERE id_estudiante = 3 AND id_curso = 1;
```

```python
# d) DELETE
session.delete(session.get(Curso, 5))
session.commit()
```
```sql
SELECT * FROM curso WHERE id_curso = 5;
DELETE FROM curso WHERE id_curso = 5;
```

### Nota

El ORM primero hace un `SELECT` para traer el objeto a memoria (c y d) y después el
`UPDATE`/`DELETE`. Si solo querés el efecto y no el objeto, se puede hacer en una sola
sentencia: `session.query(Curso).filter_by(id_curso=5).delete()`.

---

## Ejercicio 3 — Reproducir y resolver el problema N+1

**Enunciado.** Este código imprime el título de cada curso y el nombre de su categoría.
Explicá por qué es lento y corregilo.

```python
for curso in session.query(Curso).all():
    print(curso.titulo, "->", curso.categoria.nombre)
```

### Resolución

**Por qué es lento:** con *lazy loading*, `session.query(Curso).all()` hace **1** consulta
para traer los cursos. Después, `curso.categoria.nombre` dispara **una consulta por curso**
(porque la categoría no se trajo). Con 100 cursos → **1 + 100 = 101 consultas**.

```sql
SELECT * FROM curso;                              -- 1 vez
SELECT * FROM categoria WHERE id_categoria = 1;   -- por cada curso
SELECT * FROM categoria WHERE id_categoria = 2;   -- ...
```

**Corrección: eager loading** (traer las categorías junto con los cursos).

```python
from sqlalchemy.orm import joinedload

cursos = session.query(Curso).options(joinedload(Curso.categoria)).all()
for curso in cursos:
    print(curso.titulo, "->", curso.categoria.nombre)   # ya en memoria: 0 consultas extra
```
```sql
-- una sola consulta:
SELECT curso.*, categoria.*
FROM curso
LEFT JOIN categoria ON categoria.id_categoria = curso.id_categoria;
```

Equivalentes en otros ORM:

- **Django:** `Curso.objects.select_related("categoria")`
- **Prisma:** `prisma.curso.findMany({ include: { categoria: true } })`
- **Sequelize:** `Curso.findAll({ include: Categoria })`

---

## Ejercicio 4 — Traducir consultas SQL a llamadas ORM

**Enunciado.** Traducí a SQLAlchemy (y anotá el equivalente Django).

| # | SQL |
|---|---|
| a | `SELECT COUNT(*) FROM estudiante;` |
| b | `SELECT * FROM curso WHERE id_categoria = 2;` |
| c | `SELECT c.titulo, COUNT(i.id_estudiante) AS inscriptos FROM curso c LEFT JOIN inscripcion i ON i.id_curso = c.id_curso GROUP BY c.id_curso, c.titulo;` |
| d | `SELECT * FROM estudiante WHERE email LIKE '%@gmail.com';` |

### Resolución

```python
from sqlalchemy import func

# a) COUNT
session.query(func.count(Estudiante.id_estudiante)).scalar()
# Django: Estudiante.objects.count()

# b) filtro por FK
session.query(Curso).filter(Curso.id_categoria == 2).all()
# Django: Curso.objects.filter(id_categoria=2)

# c) LEFT JOIN + GROUP BY + COUNT
(session.query(Curso.titulo, func.count(Inscripcion.id_estudiante).label("inscriptos"))
        .outerjoin(Inscripcion, Inscripcion.id_curso == Curso.id_curso)
        .group_by(Curso.id_curso, Curso.titulo)
        .all())
# Django: Curso.objects.annotate(inscriptos=Count("inscripcion"))

# d) LIKE
session.query(Estudiante).filter(Estudiante.email.like("%@gmail.com")).all()
# Django: Estudiante.objects.filter(email__endswith="@gmail.com")
```

### Nota

El caso (c) muestra que **las agregaciones se pueden hacer con el ORM** (`func.count`,
`group_by`), pero cuanto más complejo el reporte, más se parece el código ORM al SQL —
llegado cierto punto conviene escribir SQL directo o una vista.

---

## Ejercicio 5 — Decidir: ORM o SQL directo

**Enunciado.** Para cada tarea, decidí si la harías con ORM o con SQL directo y por qué.

1. Pantalla de "editar perfil del estudiante".
2. Reporte mensual: promedio de notas por categoría, cantidad de aprobados y desaprobados,
   con porcentajes y comparación contra el mes anterior.
3. Alta de una inscripción desde el botón "Inscribirme".
4. Importar 500.000 inscripciones históricas desde un CSV.
5. Listado paginado de cursos con su categoría.

### Resolución

| # | Elijo | Por qué |
|---|---|---|
| 1 | **ORM** | CRUD simple de una entidad; el ORM lo resuelve en 3 líneas y valida tipos |
| 2 | **SQL directo / vista** | múltiples agregaciones, porcentajes, autojoin temporal; en ORM sería ilegible y probablemente lento |
| 3 | **ORM** | insertar un registro con sus FK; encaja perfecto en el patrón del ORM |
| 4 | **SQL directo** (`LOAD DATA INFILE` / `bulk_insert_mappings`) | volumen masivo; crear 500.000 objetos en memoria con el ORM es carísimo |
| 5 | **ORM** con `joinedload`/`select_related` + `limit/offset` | listado típico; solo hay que evitar el N+1 al traer la categoría |

**Conclusión:** ORM para el CRUD y los listados; SQL directo para reportes analíticos y
cargas masivas. Es lo normal combinarlos en el mismo proyecto.

---

## Autoevaluación

1. ¿Qué es el "desajuste objeto-relacional"?
2. ¿Cuándo se modela una tabla puente N:M como **clase propia** en el ORM?
3. ¿Qué es el problema N+1 y cómo se soluciona?
4. ¿Para qué sirven las **migraciones**?
5. Nombrá dos ventajas y dos desventajas de usar un ORM.

<details>
<summary>Respuestas</summary>

1. La diferencia estructural entre trabajar con objetos (listas anidadas, herencia,
   identidad por referencia) y con tablas planas relacionadas por FK.
2. Cuando la relación N:M **tiene atributos propios** (fecha, nota, cantidad). Sin
   atributos, se usa la relación many-to-many automática.
3. Hacer 1 consulta para una lista y luego 1 consulta por cada elemento al acceder a una
   relación (1 + N). Se soluciona con **eager loading** (`joinedload`, `select_related`,
   `include`).
4. Para versionar y aplicar de forma ordenada los cambios de **esquema** de la base, de
   modo que todos los entornos queden iguales.
5. Ventajas: productividad, portabilidad entre motores, seguridad ante inyección,
   esquema en el código. Desventajas: menor rendimiento/SQL subóptimo, "magia" difícil de
   depurar, incómodo para consultas muy complejas.

</details>
