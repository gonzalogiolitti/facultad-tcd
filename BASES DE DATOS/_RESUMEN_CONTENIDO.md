# BASES DE DATOS - Resumen de contenido
_Última actualización: 28/10/26_

## General
**Archivo:** General/ProgramaBBDD-TUCD_v00.md
**Fecha:** No identificada
**Temas:** Programa de la asignatura, fundamentos de bases de datos, modelo entidad-relación, SQL, transacciones ACID, NoSQL, ORM, evaluación y metodología
**Resumen:** Documento oficial del programa de la asignatura Bases de Datos correspondiente a 3° año del 1° cuatrimestre de la Tecnicatura Universitaria en Ciencias de Datos (UGR, 2025). Presenta seis unidades temáticas que abarcan desde introducción a los SGBD, modelo entidad-relación y SQL, hasta transacciones, bases de datos NoSQL y mapeo objeto-relacional (ORM). Detalla la metodología de trabajo teórico-práctica con modalidad virtual, bibliografía obligatoria y complementaria, y un sistema de evaluación basado en hitos evaluables y un Trabajo Práctico Integrador (TPI), con tres vías posibles: promoción con examen diferenciado, examen regular y examen libre.

**Archivo:** General/En este espacio deberán ser publicados_- Programa ....txt
**Fecha:** No identificada
**Temas:** Presentación de la materia, estructura del curso, bloques temáticos, sistemas de gestión de bases de datos, bases de datos relacionales, bases de datos no relacionales
**Resumen:** El docente Brian Gauhna da la bienvenida a la asignatura Bases de Datos, correspondiente al tercer año (primer cuatrimestre) de la Tecnicatura Universitaria en Ciencia de Datos de la UGR. Presenta la estructura general del curso, dividida en tres bloques: introducción a los sistemas de gestión de bases de datos, esquema lógico de bases de datos relacionales y lenguaje SQL, y bases de datos no relacionales. Menciona que la materia es cuatrimestral e invita a los estudiantes a revisar el programa y la planificación disponibles en el aula virtual.

## Grabaciones sincrónicos
**Archivo:** Grabaciones sincrónicos/Clase 01 - Presentación de la Asignatura.txt
**Fecha:** No identificada
**Temas:** Presentación del docente, modalidad de cursado, programa de la asignatura, sistema de evaluación, hitos evaluables, trabajo práctico integrador, herramientas a utilizar (MariaDB, notación de Chen)
**Resumen:** El docente Brian Gauna presenta la asignatura Bases de Datos, explicando la dinámica de trabajo: clases semanales con entregas cada dos semanas (siete hitos evaluables en total). Describe el programa, que abarca desde introducción a sistemas de bases de datos, modelos relacionales, normalización, SQL (DDL, DML, transacciones, triggers) hasta una introducción a bases NoSQL. Detalla el sistema de promoción basado en la entrega en tiempo y forma de los hitos y la defensa oral de un trabajo práctico integrador. Se mencionan las herramientas principales (MariaDB, DBeaver, notación de Chen) y el uso de rúbricas para la corrección de actividades.

**Archivo:** Grabaciones sincrónicos/Clase 01 - Introducción a las BBDD (copia).txt
**Fecha:** No identificada
**Temas:** Introducción a bases de datos, sistemas de gestión de bases de datos (SGBD), modelos de datos, arquitectura cliente-servidor, historia de las bases de datos, SQL como estándar, instalación de MariaDB y DBeaver, herramienta NotebookLM
**Resumen:** La clase inaugural de Bases de Datos presenta los conceptos fundamentales del área: qué es una base de datos, qué es un SGBD y qué problemas resuelve (redundancia, integridad, concurrencia, seguridad). Se recorre la evolución histórica desde las cintas magnéticas hasta los sistemas distribuidos modernos, explicando cómo surgió SQL como estándar ante la fragmentación de lenguajes propietarios. Se describen los modelos de datos (relacional, entidad-relación, orientado a objetos, jerárquico) y las arquitecturas de dos y tres capas. Finalmente, se indica a los estudiantes instalar MariaDB y DBeaver, y se presenta NotebookLM como herramienta de estudio asistida por IA para generar preguntas, respuestas e infografías a partir del material de la materia.

**Archivo:** Grabaciones sincrónicos/Clase 01 - Introducción a las BBDD.txt
**Fecha:** No identificada
**Temas:** Modelo Entidad-Relación, entidades fuertes y débiles, atributos, relaciones binarias y unarias, cardinalidad, diagramas ER, notación de Chen
**Resumen:** La clase introduce el modelo Entidad-Relación (ER) como base del modelado lógico de bases de datos. Se explican los conceptos de entidades fuertes y débiles, sus atributos (únicos, no únicos, compuestos, multivaluados, opcionales y derivados) y las relaciones entre entidades (binarias, unarias e identitarias). Se detalla la cardinalidad mínima y máxima (uno a uno, uno a muchos, muchos a muchos) y su representación gráfica con la notación de Chen. Se menciona el uso del software draw.io (gred plus) para construir diagramas ER, y se anticipa que en la próxima clase se realizarán ejercicios prácticos de modelado.

**Archivo:** Grabaciones sincrónicos/Clase 01 - Introducción a las BBDD (copia) (copia) (copia).txt
**Fecha:** No identificada
**Temas:** Diagrama Entidad-Relación, entidades, atributos, cardinalidades, relaciones unarias, relaciones muchos a muchos, conversión a esquema relacional
**Resumen:** La clase (tercera de la materia) introduce el modelado con diagramas Entidad-Relación utilizando una herramienta de software específica. Se trabajan conceptos como entidades fuertes y débiles, tipos de atributos (únicos, multivaluados, opcionales, compuestos y derivados), y cardinalidades. Se desarrollan ejercicios prácticos: un modelo departamento-empleado, una relación unaria de jefes-empleados, y un modelo de pedidos-productos-proveedores. Se hace especial énfasis en que las relaciones de muchos a muchos no deben romperse y pueden contener atributos propios, y se muestra cómo el diagrama puede convertirse automáticamente en un esquema relacional y código SQL.

**Archivo:** Grabaciones sincrónicos/Clase 05 - Introducción a los Modelos Relacionales..txt
**Fecha:** No identificada
**Temas:** Modelo relacional, tablas y relaciones, transformación desde DER, cardinalidades, entidades débiles, restricciones de integridad, tipos de datos
**Resumen:** La clase introduce el modelo relacional explicando la equivalencia entre relaciones, tablas, tuplas y atributos, y diferencia datos relacionales de no relacionales. Se aborda la transformación del diagrama entidad-relación al modelo relacional, cubriendo relaciones uno a muchos, muchos a muchos, atributos multivaluados, relaciones reflexivas y entidades débiles. Se explican las cuatro restricciones de integridad (entidad, clave foránea, tipo de dato y definidas por el usuario), y se muestra cómo asignar tipos de datos (VARCHAR, INT, DATE, FLOAT) al construir el esquema relacional, con ejemplos prácticos como personas y mascotas, empleados y departamentos, y cobros con recibos.

**Archivo:** Grabaciones sincrónicos/Clase 06 - Normalización de Tablas.txt
**Fecha:** No identificada
**Temas:** Normalización de tablas, Primera Forma Normal, Segunda Forma Normal, Tercera Forma Normal, dependencias funcionales, atomicidad de datos, claves primarias y foráneas
**Resumen:** La clase aborda el proceso de normalización de tablas en bases de datos, explicando su propósito: eliminar redundancias, evitar anomalías de inserción/actualización/eliminación y garantizar la integridad lógica. Se presentan las tres formas normales de manera progresiva: la Primera exige valores atómicos y sin campos multivaluados; la Segunda elimina dependencias parciales respecto a claves compuestas; la Tercera elimina dependencias entre atributos no clave. A través de ejemplos prácticos (una tabla de ventas con cliente, producto, vendedor y comisión), se muestra cómo una tabla inicial puede descomponerse en cinco tablas normalizadas relacionadas mediante claves primarias y foráneas. Se conecta el resultado de la normalización con el diagrama entidad-relación trabajado en clases anteriores.

**Archivo:** Grabaciones sincrónicos/Clase 05 - Introducción a los Modelos Relacionales. (copia) (copia).txt
**Fecha:** 29/09/24
**Temas:** Introducción a SQL, creación de bases de datos y tablas, tipos de datos, restricciones e integridad referencial, comandos DDL (CREATE, ALTER, DROP), claves primarias y foráneas, lenguajes compilados vs. interpretados, vigencia de SQL frente a Python
**Resumen:** La clase introduce el trabajo práctico con SQL utilizando un modelo relacional previo (sucursal, sabores, relación posee). Se explican y ejecutan comandos DDL para crear bases de datos y tablas, agregar y eliminar columnas, y gestionar restricciones de integridad referencial (claves primarias, foráneas y constraints). Se discuten conceptos como autoincrement, valores por defecto, tipos de datos numéricos y de fecha, y el manejo de errores en el motor. Al cierre, se debate la vigencia de SQL frente a Python, destacando la superioridad de SQL en consultas sobre grandes volúmenes de datos y su rol como base de los sistemas de almacenamiento estructurado.

**Archivo:** Grabaciones sincrónicos/Clase 08 - Consultas en SQL, funciones de agregación..txt
**Fecha:** No identificada
**Temas:** Consultas SQL básicas, SELECT/FROM/WHERE/GROUP BY/HAVING/ORDER BY, funciones de agregación (SUM/COUNT/AVG/MAX/MIN), JOIN entre tablas, subconsultas, INSERT/UPDATE, operadores LIKE/BETWEEN/IN/IS NULL, LIMIT y OFFSET
**Resumen:** La clase se centra en la construcción progresiva de consultas SQL sobre una base de datos de ventas con tablas de clientes y pedidos (con datos ficticios generados en Python). Se explican las seis partes de una consulta SQL, comenzando por SELECT y FROM, avanzando hacia filtros con WHERE, agrupaciones con GROUP BY, filtrado de grupos con HAVING y ordenamiento con ORDER BY. Se trabajan en vivo conceptos como alias de tablas, DISTINCT, operadores lógicos y de rango, funciones de agregación, JOIN con cláusula ON, subconsultas dentro de WHERE y HAVING, y paginación de resultados mediante LIMIT y OFFSET.

**Archivo:** Grabaciones sincrónicos/Clase 05 - Introducción a los Modelos Relacionales. (copia) (copia) (copia) (copia).txt
**Fecha:** No identificada
**Temas:** Exportación e importación de bases de datos, transacciones (COMMIT, ROLLBACK, SAVEPOINT), triggers, vistas, procedimientos almacenados, gestión de usuarios y permisos en SQL
**Resumen:** La clase comienza mostrando cómo exportar e importar una base de datos en MariaDB/MySQL, explicando que el resultado es un archivo SQL que recrea estructuras y datos. Luego se trabaja el concepto de transacciones con START TRANSACTION, COMMIT y ROLLBACK (incluyendo SAVEPOINT), enfatizando su importancia para evitar errores irreversibles. Se crean un trigger para auditar eliminaciones en una tabla de pedidos, una vista para presentar datos filtrados a distintos usuarios, y un procedimiento almacenado parametrizado para insertar registros. Finalmente, se aborda la creación de usuarios con CREATE USER, la asignación de permisos con GRANT y su revocación con REVOKE.

**Archivo:** Grabaciones sincrónicos/Clase 10 - SQL_ Construcción de Tablas,.txt
**Fecha:** No identificada
**Temas:** Arquitectura de 3 capas (frontend/backend/base de datos), hosting y dominios, herramientas de desarrollo web (HTML, CSS, Bootstrap, JavaScript, PHP, SQL), agentes de IA para generación de código (OpenCode, Codex), FileZilla, InfinityFree, MySQL/phpMyAdmin
**Resumen:** La clase aborda la arquitectura de 3 capas aplicada al desarrollo web, explicando el rol del frontend (HTML, CSS, JS), backend (PHP) y base de datos (MariaDB/MySQL). Se muestra cómo contratar y configurar un hosting gratuito (InfinityFree), transferir archivos con FileZilla y registrar dominios. El núcleo de la clase es una demostración práctica donde se utiliza un agente de IA (Codex/OpenCode) para generar automáticamente una aplicación web completa —un directorio de fuentes de datos climáticos con ABM— conectada a una base de datos MySQL gestionada desde phpMyAdmin.

## Unidad 0
**Archivo:** Unidad 0/Apunte de Bases de datos.md
**Fecha:** No identificada
**Temas:** Introducción a bases de datos, Modelado Entidad-Relación (ER), Modelado Relacional, Operaciones de actualización y normalización, SQL
**Resumen:** Este apunte cubre el contenido completo de la materia Bases de Datos, organizado en cinco unidades. Abarca desde los conceptos fundamentales de los sistemas gestores de bases de datos (SGBD), niveles de abstracción y arquitecturas, hasta el modelado conceptual mediante diagramas Entidad-Relación (entidades, atributos, relaciones, cardinalidades, entidades débiles). Luego trata el modelado lógico relacional, incluyendo el mapeo de diagramas ER a esquemas relacionales con claves primarias, foráneas y restricciones de integridad. También desarrolla las operaciones de actualización, anomalías y el proceso de normalización hasta la tercera forma normal (3NF). Finaliza con una cobertura exhaustiva de SQL, incluyendo DDL, DML, funciones de agregación, JOIN, subconsultas, vistas y operadores de conjuntos.

## Unidad 1
**Archivo:** Unidad 1/UGR-BBDD25-U1-TP1.md
**Fecha:** No identificada
**Temas:** Diagrama Entidad-Relación, modelado conceptual de datos, interpretación de DER, ejercicios prácticos
**Resumen:** Trabajo Práctico 1 de la Unidad 1 de Bases de Datos, compuesto por dos ejercicios de práctica sobre modelado de datos. El primer ejercicio propone cuatro enunciados en lenguaje coloquial que los estudiantes deben transformar en Diagramas de Entidad-Relación (empleados/departamentos, jerarquía de jefes, pedidos/productos/proveedores, médicos/pacientes/consultorios). El segundo ejercicio plantea el proceso inverso: a partir de tres DER dados, los estudiantes deben describir en lenguaje natural la situación modelada e inferir el posible cliente o contexto de negocio que justificaría dicho modelado.

**Archivo:** Unidad 1/UGR-BBDD25-U1-TP2.md
**Fecha:** No identificada
**Temas:** Modelado de datos, Diagrama Entidad-Relación, Estudio de casos, Diseño conceptual de bases de datos
**Resumen:** El trabajo práctico presenta tres estudios de caso para ejercitar el modelado de bases de datos mediante diagramas Entidad-Relación. El primer caso aborda una institución de arte con pintores, cuadros y museos, incluyendo relaciones de coautoría y exposiciones múltiples. El segundo caso modela un sistema de reservas de autos con clientes, vehículos, garages y agencias. El tercer caso, el más complejo, plantea una cadena de farmacias con entidades como farmacias, empleados, medicamentos, monodrogas, laboratorios y acciones terapéuticas, con diversas restricciones de integridad y requerimientos de consulta.

**Archivo:** Unidad 1/UGR-BBDD25-U1-TP3.md
**Fecha:** No identificada
**Temas:** Diagrama de Entidad-Relación (DER), Modelo Relacional (MR), claves foráneas (FK), relaciones N:M, entidades y atributos
**Resumen:** Trabajo práctico de la Unidad 1 con ejercicios de modelado de bases de datos relacionales. El Ejercicio 1 propone cuatro situaciones descriptas en lenguaje coloquial (biblioteca, tienda de ropa, hospital y restaurante) a partir de las cuales se debe construir un DER y su correspondiente Modelo Relacional con atributos relevantes. El Ejercicio 2 presenta una serie de Diagramas Entidad-Relación incompletos o con errores que deben ser completados, corregidos y trasladados a un Modelo Relacional vinculando las tablas mediante claves foráneas.

**Archivo:** Unidad 1/UGR-BBDD25-U1-TP4.md
**Fecha:** No identificada
**Temas:** Modelo Entidad-Relación, Modelo Relacional, diseño de base de datos, estudio de caso
**Resumen:** Trabajo Práctico 4 de la Unidad I, basado en un estudio de caso de una aplicación de música en línea. Se presenta un enunciado detallado con los requerimientos de información sobre usuarios, canciones, álbumes, artistas y listas de reproducción, incluyendo restricciones y cardinalidades específicas para cada entidad. Se solicita al alumno construir el Diagrama Entidad-Relación (DER) y el Modelo Relacional correspondiente, junto con una justificación textual de las decisiones de diseño tomadas para completar la información faltante o ambigua del enunciado.

**Archivo:** Unidad 1/Construcción de DER - Ejemplos Prácticos (sencillos).txt
**Fecha:** No identificada
**Temas:** Diagrama Entidad-Relación (DER), entidades y atributos, cardinalidades, claves primarias y candidatas, relaciones entre entidades
**Resumen:** La clase presenta la resolución práctica de dos ejercicios de construcción de Diagramas de Entidad-Relación (DER). El primer caso modela una empresa de ventas con entidades Cliente, Producto y Proveedor, identificando atributos, claves primarias (DNI, código de producto, NIF) y cardinalidades (M:N entre cliente y producto; 1:N entre proveedor y producto). El segundo caso modela una empresa de transportes con entidades Camionero, Paquete, Ciudad y Camión, estableciendo sus respectivas cardinalidades (1:N entre ciudad y paquete, 1:N entre camionero y paquete, M:N entre camionero y camión). Se hace énfasis en cómo identificar entidades a partir de sustantivos, relaciones a partir de verbos, y en la correcta selección de claves primarias según unicidad y estabilidad del atributo.

## Unidad 2
**Archivo:** Unidad 2/MoureDev_ Curso COMPLETO de SQL y BASES DE DATOS Desde Cero para PRINCIPIANTES.txt
**Fecha:** No identificada
**Temas:** Introducción a SQL y bases de datos relacionales, tipos de datos, comandos DDL y DML, consultas SELECT, JOINs, relaciones entre tablas, conceptos avanzados (índices, triggers, vistas, procedimientos almacenados, transacciones, seguridad)
**Resumen:** Transcripción de un curso completo de SQL y bases de datos relacionales orientado a principiantes, impartido por Brais Moure (MoureDev). El curso abarca desde los fundamentos teóricos (qué es SQL, diferencia entre bases de datos relacionales y no relacionales, motores como MySQL y PostgreSQL) hasta la práctica con comandos de lectura (SELECT, WHERE, JOIN, GROUP BY, etc.) y escritura (INSERT, UPDATE, DELETE), pasando por la creación y modificación de tablas, tipos de relaciones (1:1, 1:N, N:M), y conceptos avanzados como índices, triggers, vistas, procedimientos almacenados y seguridad (SQL Injection). Incluye también una introducción al despliegue de bases de datos en entornos remotos y la conexión desde código Python mediante conectores.

## Unidad 5
**Archivo:** Unidad 5/ORM explicado por EdTeam (desde 6'10'').txt
**Fecha:** No identificada
**Temas:** ORM (Object-Relational Mapping), bases de datos relacionales, SQL, CRUD, programación orientada a objetos, ventajas y desventajas de los ORM, principales ORM por lenguaje
**Resumen:** El video explica qué es un ORM (Object-Relational Mapper) y cómo funciona, partiendo de conceptos previos necesarios como bases de datos relacionales, SQL, CRUD y programación orientada a objetos. Se describe cómo un ORM mapea tablas a clases, registros a objetos y campos a propiedades, permitiendo interactuar con la base de datos usando el lenguaje de backend sin escribir SQL directamente. Se analizan ventajas (abstracción del SQL, mayor productividad) y desventajas (dependencia del ORM, dificultad para optimizar consultas complejas sin saber SQL). Finalmente, se recomienda aprender SQL como fundamento antes de adoptar un ORM, y se repasan los principales ORM para distintos lenguajes: Eloquent, Doctrine, Hibernate, Entity Framework, TypeORM, Active Record, GORM y SQLAlchemy/Django ORM.

<!-- ESTADO_RESUMEN
{
  "secciones": [
    [
      [
        "General"
      ],
      [
        {
          "rel_path": "General/ProgramaBBDD-TUCD_v00.md",
          "fecha": "No identificada",
          "temas": "Programa de la asignatura, fundamentos de bases de datos, modelo entidad-relación, SQL, transacciones ACID, NoSQL, ORM, evaluación y metodología",
          "resumen": "Documento oficial del programa de la asignatura Bases de Datos correspondiente a 3° año del 1° cuatrimestre de la Tecnicatura Universitaria en Ciencias de Datos (UGR, 2025). Presenta seis unidades temáticas que abarcan desde introducción a los SGBD, modelo entidad-relación y SQL, hasta transacciones, bases de datos NoSQL y mapeo objeto-relacional (ORM). Detalla la metodología de trabajo teórico-práctica con modalidad virtual, bibliografía obligatoria y complementaria, y un sistema de evaluación basado en hitos evaluables y un Trabajo Práctico Integrador (TPI), con tres vías posibles: promoción con examen diferenciado, examen regular y examen libre."
        },
        {
          "rel_path": "General/En este espacio deberán ser publicados_- Programa ....txt",
          "fecha": "No identificada",
          "temas": "Presentación de la materia, estructura del curso, bloques temáticos, sistemas de gestión de bases de datos, bases de datos relacionales, bases de datos no relacionales",
          "resumen": "El docente Brian Gauhna da la bienvenida a la asignatura Bases de Datos, correspondiente al tercer año (primer cuatrimestre) de la Tecnicatura Universitaria en Ciencia de Datos de la UGR. Presenta la estructura general del curso, dividida en tres bloques: introducción a los sistemas de gestión de bases de datos, esquema lógico de bases de datos relacionales y lenguaje SQL, y bases de datos no relacionales. Menciona que la materia es cuatrimestral e invita a los estudiantes a revisar el programa y la planificación disponibles en el aula virtual."
        }
      ]
    ],
    [
      [
        "Grabaciones sincrónicos"
      ],
      [
        {
          "rel_path": "Grabaciones sincrónicos/Clase 01 - Presentación de la Asignatura.txt",
          "fecha": "No identificada",
          "temas": "Presentación del docente, modalidad de cursado, programa de la asignatura, sistema de evaluación, hitos evaluables, trabajo práctico integrador, herramientas a utilizar (MariaDB, notación de Chen)",
          "resumen": "El docente Brian Gauna presenta la asignatura Bases de Datos, explicando la dinámica de trabajo: clases semanales con entregas cada dos semanas (siete hitos evaluables en total). Describe el programa, que abarca desde introducción a sistemas de bases de datos, modelos relacionales, normalización, SQL (DDL, DML, transacciones, triggers) hasta una introducción a bases NoSQL. Detalla el sistema de promoción basado en la entrega en tiempo y forma de los hitos y la defensa oral de un trabajo práctico integrador. Se mencionan las herramientas principales (MariaDB, DBeaver, notación de Chen) y el uso de rúbricas para la corrección de actividades."
        },
        {
          "rel_path": "Grabaciones sincrónicos/Clase 01 - Introducción a las BBDD (copia).txt",
          "fecha": "No identificada",
          "temas": "Introducción a bases de datos, sistemas de gestión de bases de datos (SGBD), modelos de datos, arquitectura cliente-servidor, historia de las bases de datos, SQL como estándar, instalación de MariaDB y DBeaver, herramienta NotebookLM",
          "resumen": "La clase inaugural de Bases de Datos presenta los conceptos fundamentales del área: qué es una base de datos, qué es un SGBD y qué problemas resuelve (redundancia, integridad, concurrencia, seguridad). Se recorre la evolución histórica desde las cintas magnéticas hasta los sistemas distribuidos modernos, explicando cómo surgió SQL como estándar ante la fragmentación de lenguajes propietarios. Se describen los modelos de datos (relacional, entidad-relación, orientado a objetos, jerárquico) y las arquitecturas de dos y tres capas. Finalmente, se indica a los estudiantes instalar MariaDB y DBeaver, y se presenta NotebookLM como herramienta de estudio asistida por IA para generar preguntas, respuestas e infografías a partir del material de la materia."
        },
        {
          "rel_path": "Grabaciones sincrónicos/Clase 01 - Introducción a las BBDD.txt",
          "fecha": "No identificada",
          "temas": "Modelo Entidad-Relación, entidades fuertes y débiles, atributos, relaciones binarias y unarias, cardinalidad, diagramas ER, notación de Chen",
          "resumen": "La clase introduce el modelo Entidad-Relación (ER) como base del modelado lógico de bases de datos. Se explican los conceptos de entidades fuertes y débiles, sus atributos (únicos, no únicos, compuestos, multivaluados, opcionales y derivados) y las relaciones entre entidades (binarias, unarias e identitarias). Se detalla la cardinalidad mínima y máxima (uno a uno, uno a muchos, muchos a muchos) y su representación gráfica con la notación de Chen. Se menciona el uso del software draw.io (gred plus) para construir diagramas ER, y se anticipa que en la próxima clase se realizarán ejercicios prácticos de modelado."
        },
        {
          "rel_path": "Grabaciones sincrónicos/Clase 01 - Introducción a las BBDD (copia) (copia) (copia).txt",
          "fecha": "No identificada",
          "temas": "Diagrama Entidad-Relación, entidades, atributos, cardinalidades, relaciones unarias, relaciones muchos a muchos, conversión a esquema relacional",
          "resumen": "La clase (tercera de la materia) introduce el modelado con diagramas Entidad-Relación utilizando una herramienta de software específica. Se trabajan conceptos como entidades fuertes y débiles, tipos de atributos (únicos, multivaluados, opcionales, compuestos y derivados), y cardinalidades. Se desarrollan ejercicios prácticos: un modelo departamento-empleado, una relación unaria de jefes-empleados, y un modelo de pedidos-productos-proveedores. Se hace especial énfasis en que las relaciones de muchos a muchos no deben romperse y pueden contener atributos propios, y se muestra cómo el diagrama puede convertirse automáticamente en un esquema relacional y código SQL."
        },
        {
          "rel_path": "Grabaciones sincrónicos/Clase 05 - Introducción a los Modelos Relacionales..txt",
          "fecha": "No identificada",
          "temas": "Modelo relacional, tablas y relaciones, transformación desde DER, cardinalidades, entidades débiles, restricciones de integridad, tipos de datos",
          "resumen": "La clase introduce el modelo relacional explicando la equivalencia entre relaciones, tablas, tuplas y atributos, y diferencia datos relacionales de no relacionales. Se aborda la transformación del diagrama entidad-relación al modelo relacional, cubriendo relaciones uno a muchos, muchos a muchos, atributos multivaluados, relaciones reflexivas y entidades débiles. Se explican las cuatro restricciones de integridad (entidad, clave foránea, tipo de dato y definidas por el usuario), y se muestra cómo asignar tipos de datos (VARCHAR, INT, DATE, FLOAT) al construir el esquema relacional, con ejemplos prácticos como personas y mascotas, empleados y departamentos, y cobros con recibos."
        },
        {
          "rel_path": "Grabaciones sincrónicos/Clase 06 - Normalización de Tablas.txt",
          "fecha": "No identificada",
          "temas": "Normalización de tablas, Primera Forma Normal, Segunda Forma Normal, Tercera Forma Normal, dependencias funcionales, atomicidad de datos, claves primarias y foráneas",
          "resumen": "La clase aborda el proceso de normalización de tablas en bases de datos, explicando su propósito: eliminar redundancias, evitar anomalías de inserción/actualización/eliminación y garantizar la integridad lógica. Se presentan las tres formas normales de manera progresiva: la Primera exige valores atómicos y sin campos multivaluados; la Segunda elimina dependencias parciales respecto a claves compuestas; la Tercera elimina dependencias entre atributos no clave. A través de ejemplos prácticos (una tabla de ventas con cliente, producto, vendedor y comisión), se muestra cómo una tabla inicial puede descomponerse en cinco tablas normalizadas relacionadas mediante claves primarias y foráneas. Se conecta el resultado de la normalización con el diagrama entidad-relación trabajado en clases anteriores."
        },
        {
          "rel_path": "Grabaciones sincrónicos/Clase 05 - Introducción a los Modelos Relacionales. (copia) (copia).txt",
          "fecha": "29/09/24",
          "temas": "Introducción a SQL, creación de bases de datos y tablas, tipos de datos, restricciones e integridad referencial, comandos DDL (CREATE, ALTER, DROP), claves primarias y foráneas, lenguajes compilados vs. interpretados, vigencia de SQL frente a Python",
          "resumen": "La clase introduce el trabajo práctico con SQL utilizando un modelo relacional previo (sucursal, sabores, relación posee). Se explican y ejecutan comandos DDL para crear bases de datos y tablas, agregar y eliminar columnas, y gestionar restricciones de integridad referencial (claves primarias, foráneas y constraints). Se discuten conceptos como autoincrement, valores por defecto, tipos de datos numéricos y de fecha, y el manejo de errores en el motor. Al cierre, se debate la vigencia de SQL frente a Python, destacando la superioridad de SQL en consultas sobre grandes volúmenes de datos y su rol como base de los sistemas de almacenamiento estructurado."
        },
        {
          "rel_path": "Grabaciones sincrónicos/Clase 08 - Consultas en SQL, funciones de agregación..txt",
          "fecha": "No identificada",
          "temas": "Consultas SQL básicas, SELECT/FROM/WHERE/GROUP BY/HAVING/ORDER BY, funciones de agregación (SUM/COUNT/AVG/MAX/MIN), JOIN entre tablas, subconsultas, INSERT/UPDATE, operadores LIKE/BETWEEN/IN/IS NULL, LIMIT y OFFSET",
          "resumen": "La clase se centra en la construcción progresiva de consultas SQL sobre una base de datos de ventas con tablas de clientes y pedidos (con datos ficticios generados en Python). Se explican las seis partes de una consulta SQL, comenzando por SELECT y FROM, avanzando hacia filtros con WHERE, agrupaciones con GROUP BY, filtrado de grupos con HAVING y ordenamiento con ORDER BY. Se trabajan en vivo conceptos como alias de tablas, DISTINCT, operadores lógicos y de rango, funciones de agregación, JOIN con cláusula ON, subconsultas dentro de WHERE y HAVING, y paginación de resultados mediante LIMIT y OFFSET."
        },
        {
          "rel_path": "Grabaciones sincrónicos/Clase 05 - Introducción a los Modelos Relacionales. (copia) (copia) (copia) (copia).txt",
          "fecha": "No identificada",
          "temas": "Exportación e importación de bases de datos, transacciones (COMMIT, ROLLBACK, SAVEPOINT), triggers, vistas, procedimientos almacenados, gestión de usuarios y permisos en SQL",
          "resumen": "La clase comienza mostrando cómo exportar e importar una base de datos en MariaDB/MySQL, explicando que el resultado es un archivo SQL que recrea estructuras y datos. Luego se trabaja el concepto de transacciones con START TRANSACTION, COMMIT y ROLLBACK (incluyendo SAVEPOINT), enfatizando su importancia para evitar errores irreversibles. Se crean un trigger para auditar eliminaciones en una tabla de pedidos, una vista para presentar datos filtrados a distintos usuarios, y un procedimiento almacenado parametrizado para insertar registros. Finalmente, se aborda la creación de usuarios con CREATE USER, la asignación de permisos con GRANT y su revocación con REVOKE."
        },
        {
          "rel_path": "Grabaciones sincrónicos/Clase 10 - SQL_ Construcción de Tablas,.txt",
          "fecha": "No identificada",
          "temas": "Arquitectura de 3 capas (frontend/backend/base de datos), hosting y dominios, herramientas de desarrollo web (HTML, CSS, Bootstrap, JavaScript, PHP, SQL), agentes de IA para generación de código (OpenCode, Codex), FileZilla, InfinityFree, MySQL/phpMyAdmin",
          "resumen": "La clase aborda la arquitectura de 3 capas aplicada al desarrollo web, explicando el rol del frontend (HTML, CSS, JS), backend (PHP) y base de datos (MariaDB/MySQL). Se muestra cómo contratar y configurar un hosting gratuito (InfinityFree), transferir archivos con FileZilla y registrar dominios. El núcleo de la clase es una demostración práctica donde se utiliza un agente de IA (Codex/OpenCode) para generar automáticamente una aplicación web completa —un directorio de fuentes de datos climáticos con ABM— conectada a una base de datos MySQL gestionada desde phpMyAdmin."
        }
      ]
    ],
    [
      [
        "Unidad 0"
      ],
      [
        {
          "rel_path": "Unidad 0/Apunte de Bases de datos.md",
          "fecha": "No identificada",
          "temas": "Introducción a bases de datos, Modelado Entidad-Relación (ER), Modelado Relacional, Operaciones de actualización y normalización, SQL",
          "resumen": "Este apunte cubre el contenido completo de la materia Bases de Datos, organizado en cinco unidades. Abarca desde los conceptos fundamentales de los sistemas gestores de bases de datos (SGBD), niveles de abstracción y arquitecturas, hasta el modelado conceptual mediante diagramas Entidad-Relación (entidades, atributos, relaciones, cardinalidades, entidades débiles). Luego trata el modelado lógico relacional, incluyendo el mapeo de diagramas ER a esquemas relacionales con claves primarias, foráneas y restricciones de integridad. También desarrolla las operaciones de actualización, anomalías y el proceso de normalización hasta la tercera forma normal (3NF). Finaliza con una cobertura exhaustiva de SQL, incluyendo DDL, DML, funciones de agregación, JOIN, subconsultas, vistas y operadores de conjuntos."
        }
      ]
    ],
    [
      [
        "Unidad 1"
      ],
      [
        {
          "rel_path": "Unidad 1/UGR-BBDD25-U1-TP1.md",
          "fecha": "No identificada",
          "temas": "Diagrama Entidad-Relación, modelado conceptual de datos, interpretación de DER, ejercicios prácticos",
          "resumen": "Trabajo Práctico 1 de la Unidad 1 de Bases de Datos, compuesto por dos ejercicios de práctica sobre modelado de datos. El primer ejercicio propone cuatro enunciados en lenguaje coloquial que los estudiantes deben transformar en Diagramas de Entidad-Relación (empleados/departamentos, jerarquía de jefes, pedidos/productos/proveedores, médicos/pacientes/consultorios). El segundo ejercicio plantea el proceso inverso: a partir de tres DER dados, los estudiantes deben describir en lenguaje natural la situación modelada e inferir el posible cliente o contexto de negocio que justificaría dicho modelado."
        },
        {
          "rel_path": "Unidad 1/UGR-BBDD25-U1-TP2.md",
          "fecha": "No identificada",
          "temas": "Modelado de datos, Diagrama Entidad-Relación, Estudio de casos, Diseño conceptual de bases de datos",
          "resumen": "El trabajo práctico presenta tres estudios de caso para ejercitar el modelado de bases de datos mediante diagramas Entidad-Relación. El primer caso aborda una institución de arte con pintores, cuadros y museos, incluyendo relaciones de coautoría y exposiciones múltiples. El segundo caso modela un sistema de reservas de autos con clientes, vehículos, garages y agencias. El tercer caso, el más complejo, plantea una cadena de farmacias con entidades como farmacias, empleados, medicamentos, monodrogas, laboratorios y acciones terapéuticas, con diversas restricciones de integridad y requerimientos de consulta."
        },
        {
          "rel_path": "Unidad 1/UGR-BBDD25-U1-TP3.md",
          "fecha": "No identificada",
          "temas": "Diagrama de Entidad-Relación (DER), Modelo Relacional (MR), claves foráneas (FK), relaciones N:M, entidades y atributos",
          "resumen": "Trabajo práctico de la Unidad 1 con ejercicios de modelado de bases de datos relacionales. El Ejercicio 1 propone cuatro situaciones descriptas en lenguaje coloquial (biblioteca, tienda de ropa, hospital y restaurante) a partir de las cuales se debe construir un DER y su correspondiente Modelo Relacional con atributos relevantes. El Ejercicio 2 presenta una serie de Diagramas Entidad-Relación incompletos o con errores que deben ser completados, corregidos y trasladados a un Modelo Relacional vinculando las tablas mediante claves foráneas."
        },
        {
          "rel_path": "Unidad 1/UGR-BBDD25-U1-TP4.md",
          "fecha": "No identificada",
          "temas": "Modelo Entidad-Relación, Modelo Relacional, diseño de base de datos, estudio de caso",
          "resumen": "Trabajo Práctico 4 de la Unidad I, basado en un estudio de caso de una aplicación de música en línea. Se presenta un enunciado detallado con los requerimientos de información sobre usuarios, canciones, álbumes, artistas y listas de reproducción, incluyendo restricciones y cardinalidades específicas para cada entidad. Se solicita al alumno construir el Diagrama Entidad-Relación (DER) y el Modelo Relacional correspondiente, junto con una justificación textual de las decisiones de diseño tomadas para completar la información faltante o ambigua del enunciado."
        },
        {
          "rel_path": "Unidad 1/Construcción de DER - Ejemplos Prácticos (sencillos).txt",
          "fecha": "No identificada",
          "temas": "Diagrama Entidad-Relación (DER), entidades y atributos, cardinalidades, claves primarias y candidatas, relaciones entre entidades",
          "resumen": "La clase presenta la resolución práctica de dos ejercicios de construcción de Diagramas de Entidad-Relación (DER). El primer caso modela una empresa de ventas con entidades Cliente, Producto y Proveedor, identificando atributos, claves primarias (DNI, código de producto, NIF) y cardinalidades (M:N entre cliente y producto; 1:N entre proveedor y producto). El segundo caso modela una empresa de transportes con entidades Camionero, Paquete, Ciudad y Camión, estableciendo sus respectivas cardinalidades (1:N entre ciudad y paquete, 1:N entre camionero y paquete, M:N entre camionero y camión). Se hace énfasis en cómo identificar entidades a partir de sustantivos, relaciones a partir de verbos, y en la correcta selección de claves primarias según unicidad y estabilidad del atributo."
        }
      ]
    ],
    [
      [
        "Unidad 2"
      ],
      [
        {
          "rel_path": "Unidad 2/MoureDev_ Curso COMPLETO de SQL y BASES DE DATOS Desde Cero para PRINCIPIANTES.txt",
          "fecha": "No identificada",
          "temas": "Introducción a SQL y bases de datos relacionales, tipos de datos, comandos DDL y DML, consultas SELECT, JOINs, relaciones entre tablas, conceptos avanzados (índices, triggers, vistas, procedimientos almacenados, transacciones, seguridad)",
          "resumen": "Transcripción de un curso completo de SQL y bases de datos relacionales orientado a principiantes, impartido por Brais Moure (MoureDev). El curso abarca desde los fundamentos teóricos (qué es SQL, diferencia entre bases de datos relacionales y no relacionales, motores como MySQL y PostgreSQL) hasta la práctica con comandos de lectura (SELECT, WHERE, JOIN, GROUP BY, etc.) y escritura (INSERT, UPDATE, DELETE), pasando por la creación y modificación de tablas, tipos de relaciones (1:1, 1:N, N:M), y conceptos avanzados como índices, triggers, vistas, procedimientos almacenados y seguridad (SQL Injection). Incluye también una introducción al despliegue de bases de datos en entornos remotos y la conexión desde código Python mediante conectores."
        }
      ]
    ],
    [
      [
        "Unidad 5"
      ],
      [
        {
          "rel_path": "Unidad 5/ORM explicado por EdTeam (desde 6'10'').txt",
          "fecha": "No identificada",
          "temas": "ORM (Object-Relational Mapping), bases de datos relacionales, SQL, CRUD, programación orientada a objetos, ventajas y desventajas de los ORM, principales ORM por lenguaje",
          "resumen": "El video explica qué es un ORM (Object-Relational Mapper) y cómo funciona, partiendo de conceptos previos necesarios como bases de datos relacionales, SQL, CRUD y programación orientada a objetos. Se describe cómo un ORM mapea tablas a clases, registros a objetos y campos a propiedades, permitiendo interactuar con la base de datos usando el lenguaje de backend sin escribir SQL directamente. Se analizan ventajas (abstracción del SQL, mayor productividad) y desventajas (dependencia del ORM, dificultad para optimizar consultas complejas sin saber SQL). Finalmente, se recomienda aprender SQL como fundamento antes de adoptar un ORM, y se repasan los principales ORM para distintos lenguajes: Eloquent, Doctrine, Hibernate, Entity Framework, TypeORM, Active Record, GORM y SQLAlchemy/Django ORM."
        }
      ]
    ]
  ]
}
-->
