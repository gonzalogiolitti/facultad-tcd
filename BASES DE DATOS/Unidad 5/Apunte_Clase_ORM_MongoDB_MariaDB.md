<!-- página 1 -->

BASES DE DATOS  /  INTRODUCCIÓN AL ORM 
Apunte de clase  ·  1 
Introducción a los ORM 
De MongoDB a MariaDB con ORM 
Profesores: Briant Gauna + Cesar Guaimás 
Tecnologías: Python · PyMongo · SQLAlchemy 2.x · PyMySQL · MongoDB · MariaDB 
¿Qué aprenderemos? 
• 
Identificar la diferencia entre base de datos, colección, documento, tabla, fila y objeto. 
• 
Consultar los documentos de MongoDB utilizando PyMongo. 
• 
Conectarse a MariaDB y ejecutar SQL desde SQLAlchemy. 
• 
Comprender el mapeo objeto-relacional (ORM) y utilizar una sesión para persistir objetos. 
• 
Transferir dos documentos de MongoDB a una tabla relacional sin escribir INSERT INTO en la etapa ORM. 
1. El caso de trabajo 
Usaremos una base de datos llamada numeros en ambos motores. En MongoDB los datos se encuentran en la 
colección numeros; en MariaDB los guardaremos en la tabla datos. Aunque algunos nombres coincidan, son 
objetos de sistemas distintos. 
MongoDB (origen) 
Python (intermedio) 
MariaDB (destino) 
Documento: {"num": 1, "nombre": "uno"} 
RegistroDato(id=1, nombre="uno") 
Fila: 1 | uno 
Documento: {"num": 2, "nombre": "dos"} 
RegistroDato(id=2, nombre="dos") 
Fila: 2 | dos 
 
El recorrido es: documento de MongoDB → diccionario de Python → objeto mapeado con SQLAlchemy ORM → fila 
de MariaDB. 
Conceptos previos 
Término 
Definición breve 
Base de datos 
Conjunto organizado de información, administrado por un gestor. 
Colección (MongoDB) 
Agrupación de documentos; es distinta de una tabla SQL. 
Documento (MongoDB) 
Registro flexible en formato BSON, parecido a un diccionario de Python. 
Tabla (MariaDB) 
Estructura relacional con columnas definidas. 
Fila o tupla (MariaDB) 
Registro con valores para las columnas de la tabla. 
Objeto (Python) 
Instancia de una clase; tiene atributos y puede tener métodos. 
ORM 
Técnica que relaciona clases y objetos con tablas y filas relacionales.

---

<!-- página 2 -->

BASES DE DATOS  /  INTRODUCCIÓN AL ORM 
Apunte de clase  ·  2 
2. Preparación del entorno 
El notebook se ejecuta en la computadora local. Se supone que MongoDB escucha en localhost:27017 y MariaDB en 
localhost:3306, y que ambos servicios están iniciados. 
BIBLIOTECAS A INSTALAR 
!pip install pymongo sqlalchemy pymysql 
 
Esta línea instala las dependencias en el entorno desde el que se ejecuta el notebook: pymongo para MongoDB, 
sqlalchemy para la conexión y el ORM, y pymysql como controlador de MariaDB/MySQL. 
Sugerencia para Jupyter.  En notebooks, %pip install pymongo sqlalchemy pymysql es una alternativa 
recomendada porque utiliza el entorno del kernel activo. En el archivo original se usa !pip, que es válido como 
comando de shell. 
 
Preparación de los datos 
En el notebook no se crean la colección ni la tabla: se presupone que ya existen. Para reproducir el ejemplo, en 
MongoDB necesitamos la colección numeros dentro de la base numeros, con campos num y nombre; en MariaDB 
necesitamos la base numeros y la tabla datos. 
EJEMPLO DE ESTRUCTURA DE MARIADB (PREPARACIÓN) 
CREATE DATABASE IF NOT EXISTS numeros; 
USE numeros; 
  
CREATE TABLE IF NOT EXISTS datos ( 
    id INT PRIMARY KEY, 
    nombre VARCHAR(30) NOT NULL 
); 
 
En MongoDB, los documentos de ejemplo son {"num": 1, "nombre": "uno"} y {"num": 2, "nombre": "dos"}. Pueden 
cargarse previamente con MongoDB Compass.

---

<!-- página 3 -->

BASES DE DATOS  /  INTRODUCCIÓN AL ORM 
Apunte de clase  ·  3 
3. Lectura de documentos con PyMongo 
EXPLORACIÓN DE MONGODB 
from pymongo import MongoClient 
 
#Abro la conexión para poder trabajar con la base de datos 
mongo = MongoClient("mongodb://localhost:27017/") 
 
#Extraigo la base de datos 'numeros' 
db = mongo["numeros"] 
 
#Muestro las colecciones que hay en la base de datos 
print(db.list_collection_names()) 
 
#Recorro la base de datos y muestro los documentos que hay en la colección 'numeros' 
for doc in db.numeros.find(): 
    print(doc) 
 
#Cierro la conexión 
mongo.close() 
Explicación línea por línea 
Instrucción 
¿Qué hace? 
from pymongo import MongoClient 
Importa la clase que permite crear un cliente de MongoDB. 
mongo = MongoClient("mongodb://localhost:27017/") 
Prepara un cliente hacia el servidor local de MongoDB, puerto 
27017. 
db = mongo["numeros"] 
Selecciona la base de datos numeros. Todavía no selecciona una 
colección. 
db.list_collection_names() 
Obtiene la lista de nombres de colecciones existentes en esa base. 
db.numeros.find() 
Busca los documentos en la colección numeros de la base 
seleccionada. 
for doc in ...: print(doc) 
Recorre los documentos uno a uno y los muestra. 
mongo.close() 
Cierra el cliente y libera sus conexiones y recursos. 
 
Los documentos suelen mostrar además el campo _id, generado por MongoDB. En esta clase no lo transferimos, 
usamos el campo num como identificador SQL. 
LA MISMA SELECCIÓN CON NOMBRES MÁS EXPLÍCITOS 
mongo = MongoClient("mongodb://localhost:27017/") 
base_mongo = mongo["numeros"] 
coleccion_mongo = base_mongo["numeros"] 
  
for documento in coleccion_mongo.find(): 
    print(documento) 
  
mongo.close() 
Error frecuente.  mongo["numeros"] devuelve una base de datos, no una colección. Para poder usar find(), 
elegimos primero la base y después la colección: mongo["numeros"]["numeros"].

---

<!-- página 4 -->

BASES DE DATOS  /  INTRODUCCIÓN AL ORM 
Apunte de clase  ·  4 
4. MariaDB con SQL tradicional desde SQLAlchemy 
Antes de utilizar ORM, veamos cómo conectarse a MariaDB y ejecutar instrucciones SQL escritas manualmente. 
SQLAlchemy puede usarse sin ORM: esta etapa corresponde a ejecución de SQL textual. 
CONEXIÓN Y OPERACIONES SQL 
# Abrimos la conexión a MariaDB 
from sqlalchemy import create_engine, inspect, text 
  
dbnumeros = create_engine("mysql+pymysql://root:root@localhost:3306/numeros") 
  
#Conecto a la base de datos y muestro su contenido 
conexion=dbnumeros.connect() 
inspector = inspect(dbnumeros) 
print(inspector.get_table_names()) 
  
conexion.begin() 
  
try: 
    query = "insert into datos (id,nombre) values (100,'cien'), (200,'doscientos')" 
    conexion.execute(text(query)) 
    conexion.commit() 
except Exception as e: 
    conexion.rollback() 
    print(f"Error: {e}") 
  
consulta = "select * from datos" 
result = conexion.execute(text(consulta)) 
for row in result: 
    print(row) 
  
  
  
#Cierro la conexión 
dbnumeros.dispose() 
 
Explicación de los componentes 
Fragmento 
Significado 
create_engine(...) 
Crea un objeto Engine que administra conexiones a MariaDB. No 
significa que la conexión ya esté abierta. 
mysql+pymysql:// 
Dialecto compatible con MySQL/MariaDB + driver PyMySQL. 
root:root@localhost:3306/numeros 
Usuario:contraseña, servidor, puerto y nombre de la base. 
conexion = dbnumeros.connect() 
Obtiene una conexión concreta para ejecutar sentencias. 
inspect(dbnumeros).get_table_names() 
Consulta los nombres de las tablas existentes. 
text(query) 
Convierte una cadena SQL en una expresión ejecutable de 
SQLAlchemy. 
conexion.execute(text(query)) 
Ejecuta el SQL a través de la conexión. 
conexion.commit() 
Confirma la transacción y persiste las inserciones. 
conexion.rollback() 
Revierte cambios pendientes cuando hay un error. 
dbnumeros.dispose() 
Libera recursos del pool del motor; no sustituye siempre el cierre 
explícito de una conexión todavía abierta.

---

<!-- página 5 -->

BASES DE DATOS  /  INTRODUCCIÓN AL ORM 
Apunte de clase  ·  5 
Transacciones: begin, commit y rollback 
La celda utiliza conexion.begin() para iniciar explícitamente una transacción. El bloque try intenta insertar dos 
filas; commit confirma los cambios y, ante un error, except ejecuta rollback. La tabla se consulta después con 
SELECT * FROM datos. 
AJUSTE CON CIERRE EXPLÍCITO 
conexion = dbnumeros.connect() 
  
try: 
    transaccion = conexion.begin() 
    conexion.execute(text( 
        "INSERT INTO datos (id, nombre) VALUES (100, 'cien'), (200, 'doscientos')" 
    )) 
    transaccion.commit() 
except Exception as error: 
    transaccion.rollback() 
    print("Ocurrió un error:", error) 
finally: 
    conexion.close() 
    dbnumeros.dispose() 
 
También puede emplearse with dbnumeros.begin() as conexion: para abrir una transacción y asegurar el cierre 
automático al terminar el bloque. En esta guía conservamos la versión con conexión explícita porque permite ver 
cada acción.

---

<!-- página 6 -->

BASES DE DATOS  /  INTRODUCCIÓN AL ORM 
Apunte de clase  ·  6 
5. Qué cambia cuando utilizamos ORM 
ORM significa Object-Relational Mapping (mapeo objeto-relacional). Permite asociar una clase de Python con una 
tabla de MariaDB y, a través de una sesión, consultar e insertar objetos en lugar de escribir manualmente todas las 
instrucciones SQL. 
Antes: SQL explícito 
Después: ORM 
INSERT INTO datos (id, nombre) VALUES (1, 'uno'); 
registro = RegistroDato(id=1, nombre="uno") 
sesion.add(registro) 
sesion.commit() 
SELECT * FROM datos; 
sesion.scalars(select(RegistroDato)).all() 
 
Esto no significa que SQL desaparezca. SQLAlchemy lo genera por nosotros para persistir y consultar objetos. 
Tampoco significa que MongoDB funcione con el mismo ORM: la lectura inicial sigue haciéndose con PyMongo. 
6. Mapeo de la tabla mediante una clase Python 
BLOQUE ORM 
from sqlalchemy import Integer, String 
from sqlalchemy.orm import registry, mapped_column 
  
# Registro que administra los mapeos ORM 
mapeador = registry() 
  
@mapeador.mapped 
class RegistroDato: 
    __tablename__ = "datos" 
  
    id = mapped_column(Integer, primary_key=True) 
    nombre = mapped_column(String(30), nullable=False) 
Explicación línea por línea 
Código 
Interpretación 
mapeador = registry() 
Crea el registro de mapeo que administra las clases relacionadas con 
tablas. No crea datos ni tablas por sí solo. 
@mapeador.mapped 
Decorador: registra la clase que viene a continuación como una clase 
mapeada por SQLAlchemy. 
class RegistroDato: 
Define una clase de Python. Cada objeto de esta clase puede representar 
una fila de la tabla. 
__tablename__ = "datos" 
Indica que el destino del mapeo es la tabla datos de MariaDB. 
id = mapped_column(Integer, primary_key=True) 
Atributo id ↔ columna SQL id de tipo entero y clave primaria. 
nombre = mapped_column(String(30), nullable=False) 
Atributo nombre ↔ VARCHAR(30) que no admite NULL. 
 
El nombre RegistroDato es deliberadamente claro: el objeto representa un registro. No necesita coincidir con el 
nombre de la tabla porque la asociación se declara con __tablename__.

---

<!-- página 7 -->

BASES DE DATOS  /  INTRODUCCIÓN AL ORM 
Apunte de clase  ·  7 
¿Por qué usamos registry()? 
SQLAlchemy permite varios estilos declarativos. Para esta clase mínima se utiliza un registro y un decorador. 
CREAR UN OBJETO TODAVÍA NO LO INSERTA 
registro = RegistroDato(id=1, nombre="uno") 
print(registro.id)       # 1 
print(registro.nombre)   # uno 
 
En este punto el objeto existe en memoria. Aún no hay una inserción en MariaDB; para guardarlo hace falta una 
Session y confirmar la operación. 
7. La sesión ORM y el guardado de objetos 
EJEMPLO 
sesion = Session(mariadb) 
  
registro = RegistroDato(id=1, nombre="uno") 
sesion.add(registro) 
sesion.commit() 
  
sesion.close() 
 
Session administra los objetos ORM y su persistencia. La llamada add() marca un objeto para su inserción; 
commit() sincroniza los cambios pendientes con la base y confirma la transacción. La sesión puede abrir una 
conexión cuando la necesita, usando el motor mariadb. 
Distinción decisiva.  Crear un objeto Python no equivale a insertar un registro. RegistroDato(...) crea el objeto; 
sesion.add(...) lo incorpora a la unidad de trabajo; sesion.commit() confirma la operación.

---

<!-- página 8 -->

BASES DE DATOS  /  INTRODUCCIÓN AL ORM 
Apunte de clase  ·  8 
8. Transferencia MongoDB → MariaDB mediante ORM 
Esta celda reúne todo lo explicitado previamente: conexión a ambos sistemas, definición del mapeo, lectura de 
MongoDB, creación de objetos y persistencia en MariaDB. 
TRANSFERENCIA COMPLETA 
from pymongo import MongoClient 
from sqlalchemy import create_engine, Integer, String, select 
from sqlalchemy.orm import registry, mapped_column, Session 
  
# 1. Conectamos con MongoDB 
mongo = MongoClient("mongodb://localhost:27017/") 
coleccion = mongo["numeros"]["numeros"] 
  
# 2. Conectamos con MariaDB 
mariadb = create_engine("mysql+pymysql://root:root@localhost:3306/numeros") 
  
# 3. Definimos el mapeo objeto-relacional (ORM) 
mapeador = registry() 
  
@mapeador.mapped 
class RegistroDato: 
    __tablename__ = "datos" 
  
    id = mapped_column(Integer, primary_key=True) 
    nombre = mapped_column(String(30), nullable=False) 
  
# 4. Creamos una sesión ORM 
sesion = Session(mariadb) 
  
# 5. Leemos MongoDB y guardamos los objetos en MariaDB 
for documento in coleccion.find(): 
  
    # Convertimos el documento en un objeto Python 
    registro = RegistroDato( 
        id=documento["num"], 
        nombre=documento["nombre"] 
    ) 
  
    # Insertamos si todavía no existe ese identificador 
    if sesion.get(RegistroDato, registro.id) is None: 
        sesion.add(registro) 
  
# 6. Confirmamos los cambios 
sesion.commit() 
  
# 7. Consultamos los registros utilizando ORM 
registros = sesion.scalars(select(RegistroDato)).all() 
  
for registro in registros: 
    print(registro.id, registro.nombre) 
  
# 8. Cerramos las conexiones 
sesion.close() 
mongo.close() 
mariadb.dispose()

---

<!-- página 9 -->

BASES DE DATOS  /  INTRODUCCIÓN AL ORM 
Apunte de clase  ·  9 
El ciclo central explicado paso a paso 
FRAGMENTO CLAVE DE LA TRANSFERENCIA 
for documento in coleccion.find(): 
    registro = RegistroDato( 
        id=documento["num"], 
        nombre=documento["nombre"] 
    ) 
    if sesion.get(RegistroDato, registro.id) is None: 
        sesion.add(registro) 
  
sesion.commit() 
 
1. coleccion.find() obtiene documentos de MongoDB. Cada documento se recibe como un diccionario de Python 
(con un campo _id adicional). 
2. RegistroDato(id=documento["num"], nombre=documento["nombre"]) crea un objeto mapeado. El campo num 
pasa a llamarse id en MariaDB. 
3. sesion.get(RegistroDato, registro.id) busca por clave primaria en la tabla datos. Si no existe, devuelve None. 
4. sesion.add(registro) incorpora ese objeto a la sesión para insertarlo. El condicional evita un nuevo intento de 
inserción con el mismo id. 
5. sesion.commit() confirma las operaciones pendientes. Luego select(RegistroDato) consulta los registros 
mediante ORM. 
Lectura del resultado mediante ORM 
CONSULTA FINAL EN EL NOTEBOOK 
registros = sesion.scalars(select(RegistroDato)).all() 
  
for registro in registros: 
    print(registro.id, registro.nombre) 
 
select(RegistroDato) construye una consulta para la clase mapeada. scalars() devuelve directamente objetos 
RegistroDato, en vez de filas con envoltorio adicional. all() recupera los resultados, y el for muestra los atributos id 
y nombre. 
Si la tabla ya contenía (100, cien) y (200, doscientos), y la colección tenía (1, uno) y (2, dos), los cuatro registros 
estarán disponibles. El orden de impresión puede variar si no se utiliza ORDER BY.

---

<!-- página 10 -->

BASES DE DATOS  /  INTRODUCCIÓN AL ORM 
Apunte de clase  ·  10 
9. Glosario breve 
Concepto 
Recordatorio 
PyMongo 
Biblioteca cliente de MongoDB para Python. 
SQLAlchemy 
Herramienta que permite trabajar con SQL y también con ORM. 
PyMySQL 
Controlador que facilita la comunicación Python–MariaDB/MySQL. 
Engine 
Motor de SQLAlchemy que gestiona conexiones a la base relacional. 
Connection 
Conexión concreta para ejecutar instrucciones SQL. 
Session 
Unidad de trabajo ORM para consultar y persistir objetos. 
registry 
Registro que organiza clases mapeadas y metadatos. 
mapped_column 
Define cómo un atributo se vincula a una columna SQL. 
commit / rollback 
Confirmar cambios / revertir cambios pendientes. 
 
Palabras de cierre 
El objetivo de este apunte no es enseñar una migración compleja, sino mostrar cómo una clase Python se 
relaciona con una tabla y cómo sus objetos se guardan como filas. 
MongoDB provee los documentos, PyMongo los recupera como diccionarios, SQLAlchemy mapea la clase 
RegistroDato con la tabla datos y una sesión ORM administra su persistencia. Ese es el concepto de mapeo objeto-
relacional que debe quedar claro al terminar la clase. Va radicar en tu curiosidad seguir incorporando más 
información y contenido al respecto. 
Referencia técnica para consulta posterior: SQLAlchemy ORM — 
https://docs.sqlalchemy.org/en/20/orm/quickstart.html; PyMongo — https://pymongo.readthedocs.io/