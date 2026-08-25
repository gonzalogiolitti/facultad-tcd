<!-- página 1 -->

Gobernanza de Datos
Guía de Roles de 
Gobernanza de Datos
 
SUBSECRETARÍA DE POLÍTICAS PÚBLICAS BASADAS EN EVIDENCIA
        
SECRETARÍA DE INNOVACIÓN Y TRANSFORMACIÓN DIGITAL͓

---

<!-- página 2 -->

Jefe de Gobierno
Horacio Rodríguez Larreta
Jefe de Gabinete
Felipe Miguel
Secretario de Innovación y Transformación Digital
Diego Fernández
Subsecretaria de Políticas Públicas Basadas en Evidencia
Melisa Breda

---

<!-- página 3 -->

Índice
1. Introducción
1
2. Roles de gobernanza de datos
2
2.1. Descripción detallada de los roles
4
2.1.1. Responsable de la Gestión de Datos o Chief Data Officer (CDO)
4
2.1.2. Data champion
4
2.1.3. Persona dueña de negocio
5
2.1.4. Persona dueña técnica
5
2.1.5. Persona custodia de negocio
6
2.1.6. Persona custodia técnica
6
2.1.7. Persona usuaria de datos
7
2.2. Compatibilidad de roles
7
2.3.  Roles en el ciclo de vida del dato
8
Ejemplo 1: Desarrollo de un tablero
8
Ejemplo 2: Publicación de un Dataset en BA Data geolocalizado.
9
Ejemplo 3: Consumo de información cruda y procesada del sector privado.
10
3. Glosario
11
4. Anexo
12
A- Persona Administradora de la Plataforma Inteligente de Buenos Aires
(PIBA)
12
5. Contacto
13

---

<!-- página 4 -->

1.
Introducción
La toma de decisiones basadas en datos de cualquier organización requiere que la
información sea clara, íntegra, confiable y oportuna. Estas son condiciones necesarias
para que la cultura de datos fluya en todos los ámbitos. En una organización gubernamental
como el Gobierno de la Ciudad Autónoma de Buenos Aires, el desafío es aún mayor debido
al tamaño, la autonomía de sus dependencias y distribución de su estructura.
Es necesario definir procesos, procedimientos, estándares y guías de buenas prácticas
que establezcan una forma eficiente de gobernar los datos mediante el desarrollo y
despliegue de herramientas digitales y roles que interactúen entre sí. El objetivo de esta
estrategia es generar un ecosistema de gestión y gobernanza de la información, capaz de
potenciar una gestión basada en datos de manera transparente y colaborativa. Los roles
tendrán distintas responsabilidades para lograr que la información sea compartida de
manera eficiente, y sea administrada, completa, entendible y confiable.
De acuerdo a DMBOK2 (Data Management Body of Knowledge) del framework de
DAMA, una de las principales referencias internacionales en gestión de datos, la
gobernanza de datos es el ejercicio de autoridad y control (planificación, monitoreo y
ejecución) sobre la gestión de los datos.
En este sentido, es importante diferenciar las funciones de gestión y gobernanza de datos:
-
Las funciones de gestión son las que están asociadas a la operatividad de los
datos en los diferentes estadíos del ciclo de vida de los mismos.
-
En cambio, la función fundamental de la gobernanza de datos es guiar a las
funciones de gestión con el propósito de asegurar que los datos estén
administrados correctamente, de acuerdo a los lineamientos, políticas y
mejores prácticas definidos.
En el framework de DAMA, se establece un gráfico (ver imagen 1) que incluye las áreas de
conocimiento de gestión de datos y sitúa a la gobernanza de datos en el centro de las
actividades de gestión, ya que se requiere gobernanza para mantener la coherencia y el
equilibrio entre las diferentes funciones. Todas esas áreas de conocimiento se equilibran
alrededor de una rueda y son necesarias para una administración de datos madura. Sin
embargo, no necesariamente deben implementarse en el mismo momento: unas dependen
de la madurez de las otras, y es una buena práctica ir evolucionando y escalando las
mismas en el tiempo, dado que la gobernanza de datos es un proceso continuo.
Desde
la
Subsecretaría
de
Políticas
Públicas
Basadas
en
Evidencia
proponemos
implementar las mismas en etapas. Como primer abordaje, vamos a empezar definiendo los
roles y sus respectivas responsabilidades. En un segundo abordaje, se establecerá un
estándar de interoperabilidad y reutilización de los datos, una guía de calidad de datos y
una de uso ético de las bases de datos.
1

---

<!-- página 5 -->

Nota: Esta guía maneja conceptos técnicos. Para una correcta compresión, se
recomienda abordarla / su abordaje con miembros del equipo capacitados para su
comprensión y análisis.
Imagen 1. Rueda de procesos vinculados a la Gobernanza de Datos
Fuente: DAMA-DMBOK2 Data Management Framework. Copyright © 2017 - DAMA
International
Cuando una persona usuaria solicita acceso a un activo de datos, es necesario realizar una
revisión del requerimiento de información dentro del marco de gestión de la privacidad y
protección del activo. La guía de clasificación de datos, el proceso de gestión de acceso a
datos y el estándar de interoperabilidad y reutilización de datos nos ayudan a mantenernos
informados sobre cómo tenemos que compartir los datos y con quiénes podemos hacerlo, y
a mantener o incrementar la calidad de los mismos desde la fuente donde se generan.
Las áreas de gobierno deberán reconocer, dentro de sus equipo de trabajo, los roles
definidos en esta guía para desarrollar un modelo óptimo de gobernanza de datos, y
ordenar el intercambio de los mismos de manera interna y externa.
2.
Roles de gobernanza de datos
A continuación, se definen y describen los roles de gobernanza de datos.
Es importante mencionar que no necesariamente todas las dependencias deben poseer la
totalidad de los roles descritos, solo los intervinientes en la gestión y gobernanza de datos
asociados
a
su
área.
Por
otra parte, hay que destacar que una misma persona,
2

---

<!-- página 6 -->

independientemente de su perfil profesional, puede cumplir más de un rol de gobernanza
de acuerdo a sus tareas y funciones habituales, siempre y cuando esos roles no sean
incompatibles. Para más información, revisar la  sección Compatibilidad de roles.
Tabla 1. Descripción de los roles de gobernanza de datos.
Rol
Descripción
Responsable de la
gestión de datos o
Chief Data Officer
(CDO)
Es un rol único para todo el GCABA. Corresponde a quien
lidera el área de datos. Sponsor de la gestión basada en
datos
y
responsable
de
las
políticas
para
su
implementación.
Data champion
Representantes y responsables de cada área de gobierno,
en materia de políticas de gestión de datos.
Persona dueña de
negocio
Responsable de los procesos de negocios y de la calidad y
publicación de los datos en origen. Es quien autoriza la
publicación y acceso a dichos datos de forma interna y
externa.
Persona dueña técnica
Responsable
de las
funciones de IT inherentes a los
datos en origen. Responsable técnico de los repositorios y
de los sistemas que generan los datos. Debe garantizar la
calidad de los mismos desde el punto de vista técnico. Es
la persona responsable de la gestión técnica y operativa
de los datos a su cargo.
Persona custodia de
negocio
Persona experta de negocio en su área.
Responsable
funcional
del
ciclo
de
vida
del
dato
y
sus
transformaciones.Define reglas sobre los procesos de
negocio.
Persona Custodia
Técnica
Especialista con funciones de IT. Responsable técnico del
ciclo de vida del dato y sus transformaciones. Colabora en
la confección de los metadatos desde el punto de vista
técnico. Nutre el diccionario de datos en origen.
Persona Usuaria de
Pueden ser de cualquier área de gobierno, o externo a él.
3

---

<!-- página 7 -->

Datos
Es el consumidor de los datos del GCABA.
2.1. Descripción detallada de los roles
A continuación, se describen en forma detallada las funciones y responsabilidades de cada
rol dentro de los procesos enmarcados en una estrategia global de gobernanza de datos.
2.1.1. Responsable de la Gestión de Datos o Chief Data Officer (CDO)
Es la persona responsable de la dirección de la gestión de datos en la organización. Se
encarga de definir
las políticas adecuadas para la implementación de una gestión
basada en datos. Este rol posee una responsabilidad central dentro del ecosistema de
gobernanza de datos, representado por la máxima autoridad de la Subsecretaría de
Políticas Públicas Basadas en Evidencia.
Responsabilidades:
●
Diseñar e implementar las políticas necesarias para una correcta gestión de los
datos.
●
Establecer planes de acción con el fin de generar un cambio organizacional en
base a la cultura de datos.
●
Incentivar a que las diferentes áreas basen su gestión y la toma de decisiones en
datos.
●
Establecer lineamientos de gestión y acceso a la información, resguardando la
seguridad y los aspectos legales vigentes.
●
Asegurar la comunicación entre las diferentes áreas gubernamentales y el área de
gobernanza de datos, con el fin de garantizar la participación de todos los
organismos productores y consumidores de datos.
●
Coordinar los roles de gobernanza que están etiquetados como administradores,
custodios o propietarios de datos.
●
Supervisar las comunicaciones sobre el proceso de gobernanza de datos y
monitorear las diversas iniciativas para garantizar que el programa general se
mantenga en el camino correcto y dentro del presupuesto.
●
Arbitrar en casos de conflicto para el otorgamiento de autorizaciones de acceso a
datos, ya sea por falta de consenso o de competencias para otorgar el mismo.
2.1.2. Data champion
Es la persona responsable de la gestión de datos de una determinada área de gobierno.
Representa a la misma dentro de las mesas de enlace de datos del GCABA.
Estas áreas pueden ser un Ministerio, una Secretaría, una Subsecretaría, una Dirección
General, un Ente Autárquico o cualquier dependencia del GCABA que produce y consume
datos.
Por tener una figura y rol central, su elección y designación se implementará mediante
instrumentos institucionales y seguirá un proceso formal en la comunicación dentro y fuera
de las áreas de su competencia.
4

---

<!-- página 8 -->

El Data Champion también puede concentrar las responsabilidades de otros roles, en caso
de que el área no cuente con la estructura recomendada.
Responsabilidades:
●
Promover la cultura y apertura de datos hacia el resto de su organización.
●
Mediar en los conflictos que puedan producirse en caso de que la persona dueña
de negocio no permita el acceso a la información.
●
Promover, dentro de su área, el conocimiento y adopción de los lineamientos para
la gobernanza de datos, y el consumo del catálogo de productos y servicios que
brinda la oficina de gobernanza de datos. Participar de la comunidad de gestión
de la información coordinada por la Subsecretaría de Políticas Públicas Basadas en
Evidencias (Mesas de Datos).
●
Gestionar altas, bajas y/o modificaciones de los accesos otorgados a los miembros
de su área, junto con el administrador de la plataforma.
2.1.3. Persona dueña de negocio
Es la persona dueña del dato en su origen, y responsable de su clasificación, apertura,
publicación y mantenimiento; desde el punto de vista del negocio. Conoce la funcionalidad
que genera el dato de manera detallada.
Es la responsable de la evolución funcional de los aplicativos, y conoce el ciclo de vida de
los procesos operacionales que los sistemas soportan.
Debe tener, como parámetro, la guía de clasificación de datos para la toma de decisiones ya
que la misma está basada en normativas vigentes, tanto nacionales como del GCABA.
Responsabilidades:
●
Clasificar la información en cuanto a legislación, contenido y criticidad, de acuerdo
con la guía.
●
Autorizar el acceso y/o publicación de datos, tanto dentro como fuera del gobierno.
●
Asegurar que los metadatos técnicos no sean obsoletos, y respondan a procesos
de negocio vigentes.
●
Intervenir en el proceso de acceso a la información de la cual es dueño, y cuyo
activo puede o no estar disponible para su consumo y explotación. Si está
disponible, debería ser bajo los parámetros referidos en la guía de clasificación de
datos.
●
Responder consultas y dudas acerca de la funcionalidad del sistema del cual es
dueño.
2.1.4. Persona dueña técnica
Es un rol ligado a las funciones de IT sobre los sistemas fuentes.
Es responsable de producir, adecuar y disponibilizar el dato en tiempo y forma desde su
origen. Debe conocer funcional y técnicamente la información.
5

---

<!-- página 9 -->

Responsabilidades:
●
Otorgar el acceso a los datos que fueron autorizados previamente por la Persona
Dueña de Negocio.
●
Asegurar la calidad y disponibilidad de la información en línea con el nivel de
servicio acordado.
●
Asegurar la correcta integración de los datos con los equipos técnicos y la
persona custodia técnica de las diferentes áreas.
●
Minimizar el impacto de los cambios de estructura en origen, siguiendo los
procesos de gestión del cambio. En caso de que hubiera cambios, debe informarlos
a la persona custodia técnica.
2.1.5. Persona custodia de negocio
Es la persona que define, desde el punto de vista funcional, cómo integrar, transformar y
utilizar los datos para obtener conocimientos del negocio. Aplica generalmente a
profesionales
del
negocio, que suelen ser
reconocidos expertos en la materia y
responsables de un subconjunto de datos, a los cuales entienden en su contexto de negocio
y organizacional.
Trabajan con las personas dueñas de negocio y las partes interesadas para definir y
controlar dichos datos, ya que al ser expertas en la materia pueden asignar valor a la
forma en que estos se utilizan para cumplir objetivos, tomar decisiones y resolver
problemas de negocio específicos.
Responsabilidades:
●
Crear definiciones de datos y métricas comunes para la calidad de los datos.
●
Intervenir en la aplicación de políticas y procesos de gobernanza.
●
Definir, documentar y/o actualizar reglas y procesos de negocio, estándares y
reglas de calidad de datos funcionales. Las expectativas utilizadas para definir
datos de alta calidad a menudo se formulan en términos de reglas arraigadas en
los procesos de negocio que crean o consumen datos.
●
Garantizar que exista un consenso sobre las reglas antes mencionadas, y un uso
coherente de las mismas dentro de la organización.
2.1.6. Persona custodia técnica
Es un especialista con funciones de IT, y tiene responsabilidades compartidas con la
persona custodia de negocio. Asume decisiones y responsabilidades a lo largo del proceso
que sigue el dato en su origen, integración, transformación, explotación y consumo.
Se puede asumir un rol de persona custodia técnica teniendo un perfil de persona
administradora de bases de datos, arquitecta de datos, integradora de datos, analista de
datos, científica de datos, desarrolladora de tableros de gestión, etc.
6

---

<!-- página 10 -->

Responsabilidades:
●
Otorgar el acceso a los datos que fueron autorizados previamente por la Persona
Dueña de Negocio.
●
Colaborar con definiciones de datos técnicos.
●
Identificar y definir valores de datos válidos.
●
Crear y definir terminología para el diccionario de datos, interactuando con las
Personas Custodias de Negocio, desde el punto de vista técnico para lograr
consenso al momento de definir y describir atributos.
●
Identificar problemas de
calidad de datos, hacer un seguimiento de la
problemática identificada y/o intervenir en la resolución de la misma.
●
Gestionar las transformaciones del dato y/o brindar acceso a los datos de los
activos injestados que custodia, conforme a los parámetros establecidos en la guía
de clasificación de datos.
2.1.7. Persona usuaria de datos
Es la principal destinataria, beneficiaria y consumidora de datos,. Su grado de satisfacción
marcará la madurez de la gobernanza. Una persona consumidora también puede ocupar
cualquier otro perfil dentro de los roles de gobernanza.
Los datos que recibe deben ser confiables, interoperables y accesibles para su uso y
explotación autogestionada.
Responsabilidades:
●
Facilitar el uso de los datos y acelerar el desarrollo de la cultura de gestión
basada en evidencia.
●
Usar y gestionar éticamente los datos que tiene disponibles,ya sea como persona
usuaria consumidora del ámbito público o privado.
●
Promover internamente la autogestión de acceso, uso y explotación de los datos.
2.2. Compatibilidad de roles
Una persona puede asumir más de un rol de gobernanza, pero hay ciertos roles que, por su
naturaleza, son incompatibles. Como claro ejemplo, podemos citar el rol del data champion
y el de la persona dueña de negocio. El primero es responsable de mediar ante conflictos
de acceso a datos, y la segunda es la responsable de otorgar el acceso a los mismos , con lo
cual, son responsabilidades que no pueden ser asumidas por una misma persona.
A continuación, se muestra un cuadro donde se indica la compatibilidad entre cada uno de
los roles para asumir sus responsabilidades sobre los datos. Varios de los roles pueden ser
abarcados por una misma persona, siempre y cuando no sean excluyentes entre sí.
7

---

<!-- página 11 -->

Tabla 2. Compatibilidad de roles de gobernanza de datos.
Compatibilidad
Data
Champion
Persona
Dueña
Negocio
Persona
Dueña
Técnica
Persona
Custodia
Negocio
Persona
Custodia
Técnica
Persona
Usuaria
de Datos
Data Champion
✔️
❌
❌
✔️
❌
✔️
Persona Dueña
de Negocio
❌
✔️
✔️
✔️
✔️
✔️
Persona Dueña
Técnica
❌
✔️
✔️
✔️
✔️
-✔️
Persona Custodia
de Negocio
✔️
✔️
✔️
✔️
✔️
✔️
Persona Custodia
Técnico
❌
✔️
✔️
✔️
✔️
✔️
Persona Usuaria
de Datos
❌
❌
❌
❌
❌
✔️
Es necesario aclarar que no siempre todos los roles van a estar presentes dentro de cada
área.También, puede haber varias personas ocupando un mismo rol.
2.3.  Roles en el ciclo de vida del dato
A modo de ejemplo, y para dar contexto a los mismos, describiremos cómo participan los
roles de gobernanza dentro del ciclo de vida de los datos. Estos roles los puede llevar a
cabo cualquier persona con una responsabilidad asignada en cierta parte del ciclo de vida,
independientemente de la función o rol dentro de la estructura del área de gobierno a la
que pertenece.
Ejemplo 1: Desarrollo de un tablero
Una persona analista de negocio (Persona Usuaria de Datos) necesita calcular ciertos
indicadores de los cuales no posee los datos fuente. Un analista funcional (Persona
Custodia de Negocio) se encarga de definir y solicitar el tablero con los indicadores al área
de BI. Un analista de BI (Persona Custodia Técnica) realiza el análisis y, en conjunto con un
desarrollador de ETL (Persona Custodia Técnica), realizan el desarrollo. Para realizar esta
tarea, las Personas Custodias Técnicas obtienen el acceso a los datos por parte de la
persona dueña del proceso que se va a medir (Persona Dueña de Negocio), y la información
del modelo de datos de la persona analista técnica del área en cuestión (Persona Dueña
Técnica).
Los Data Champions de ambas áreas (consumidora y productora) son las personas
facilitadoras del proceso, interactuando con los demás actores y generando consensos.
8

---

<!-- página 12 -->

Durante todo el desarrollo de este ciclo de vida del dato, los actores van recopilando y
registrando metadatos en la plataforma de integración de datos.
Imagen 2. Ejemplo 1. Esquema de activación de roles
Fuente: Elaboración propia
Ejemplo 2: Publicación de un Dataset en BA Data geolocalizado.
Una persona analista de negocio (Persona Dueña de Negocio) de una determinada área de
gobierno productora de datos solicita al equipo de BA Data (Persona Custodia de Negocio)
la publicación de sus datasets geolocalizados, con lo cual el equipo de BA Data pide al
equipo de información geoespacial (Persona Custodia Técnica) agregar la información
solicitada a los datasets que brinda una persona analista técnica del área productora
(Persona Dueña Técnica). Este equipo normaliza los datasets recibidos y agrega la
información solicitada, para luego entregar el dataset resultante a BA Data, quien publica
los datos previamente validados con el área productora antes de disponibilizarlos para los
vecinos y vecinas de la Ciudad (Personas Usuarias de Datos).
Los Data Champions de ambas áreas (consumidora y productora) son las personas
facilitadoras del proceso, interactuando con los demás actores y generando consensos.
Durante todo el desarrollo de este ciclo de vida del dato, los actores van recopilando y
registrando metadatos en la plataforma de integración de datos.
9

---

<!-- página 13 -->

Imagen 3. Ejemplo 2 Esquema de activación de Roles
Fuente: Elaboración propia.
Ejemplo 3: Consumo de información cruda y procesada del sector privado.
Una persona analista de negocio (Persona Usuaria de Datos) necesita realizar consultas,
análisis y extracciones de características sobre datos fuente del sector privado (fuente
externa al GCABA), a los cuales no tiene acceso. Una Persona Custodia de Negocio del
GCABA que recibe y analiza el alcance del requerimiento, en conjunto con la Persona
Custodia Técnica se ponen en contacto con la Persona Dueña de Negocio y obtienen la
autorización de acceso a los datos. En esta gestión también se solicita la información del
modelo de datos (si corresponde y hubiese) a la persona analista técnica del área privada en
cuestión (Persona Dueña Técnica). Una persona científica de datos (Persona Custodia
Técnica) realiza el análisis del requerimiento de la Persona Usuaria de Datos y, a posteriori,
aplica el desarrollo sobre la información a disponibilizar (cruda y procesada), de acuerdo a la
especificación requerida, para que sea consumida.
El Data Champion del área consumidora es la persona facilitadora con el sector privado, el
cual es el productor del dato. Y también es quién interactúa con los demás actores,
generando consensos internos y externos al GCABA.
La Persona Administradora de la Plataforma brinda el acceso a la Persona Usuaria de
Datos para que consulte, analice y explote los datos. Durante todo el desarrollo de este
ciclo de vida del dato, los actores van recopilando y registrando metadatos en la plataforma
de integración de datos.
10

---

<!-- página 14 -->

Imagen 4. Ejemplo 3 Esquema de activación de Roles
Fuente: Elaboración propia.
3. Glosario
Persona Administradora de Plataforma : Es un rol de administrador propio de la
plataforma de PIBA. Los detalles de su función y responsabilidades están detallados en el
anexo.
API: Conjunto de procedimientos, funciones y métodos creados a modo de capa de
abstracción, para que sea empleada por otra aplicación con el fin de reutilizar servicios ya
creados.
BI (Business Intelligence): Conjunto de metodologías, aplicaciones, prácticas y capacidades
enfocadas a la creación y administración de información, que permite tomar mejores
decisiones a los usuarios de una organización.
Catálogo de datos: Inventario organizado de los datos de la organización. Utiliza metadatos
técnicos para ayudar a la organización a administrar sus datos. También ayuda a los
profesionales que trabajan con datos a recopilar, organizar, acceder y enriquecer metadatos
para respaldar la detección y la gobernanza de los datos.
Catálogo de Productos y Servicios: Lo brinda la Plataforma Inteligente de Buenos Aires
(PIBA), que integra datos de todo el Gobierno de la Ciudad Autónoma de Buenos Aires.
DAMA (International Data Management Association): Asociación global sin fines de lucro
dedicada a promover los conceptos y prácticas de la gestión de información, facilitando el
desarrollo de la cultura de la gestión basada en datos. Es independiente del proveedor, de
profesionales técnicos y comerciales. Es referente para organizaciones y profesionales en la
gestión de datos: aporta recursos, información, formación, educación y conocimiento en la
materia.
11

---

<!-- página 15 -->

Data
Lake:
Repositorio
donde
se
almacenan datos de manera estructurada y no
estructurada, en sistemas y formato de código abierto. Esto permite generar reportes,
estadísticas, análisis y tableros, o consumir los datos con otras herramientas y servicios.
DMBOK2 (Data Management Body of Knowledge) del framework de DAMA: Una de las
principales referencias internacionales en gestión de datos. Contiene la recopilación de
principios y mejores prácticas.
Gobernanza de datos: Ejercicio de autoridad y control (planificación, monitoreo y ejecución)
sobre la gestión de los datos.
Herramienta ETL (Extract Transform Load): Herramienta de desarrollo de flujos que
permite extraer, transformar y cargar registros de un repositorio de datos.
Interoperabilidad: Capacidad de dos o más sistemas o componentes para utilizar la
información que intercambian.​
Metadatos: Son datos acerca de los datos,. Describen el contenido, calidad, condiciones,
historia, disponibilidad y otras características de ellos.
Negocio: La utilización de este término en el presente documento, y dentro del ámbito
público refiere a los programas, proyectos, prestaciones, servicios y políticas públicas de
Gobierno.
4. Anexo
A- Persona Administradora de la Plataforma Inteligente de Buenos Aires  (PIBA)
Este rol es el responsable de gestionar el funcionamiento de la plataforma PIBA y medir
su uso, asegurando que los accesos de los usuarios sean los correctos para cada rol
solicitado.
Responsabilidades:
●
Gestionar los accesos a la plataforma PIBA.
●
Ser parte activa del equipo que debe definir y controlar que se cumplan las políticas
de seguridad establecidas y el acceso a los datos.
●
Establecer las conexiones de la plataforma PIBA a las diferentes fuentes de datos
periféricos y herramientas de desarrollo y explotación que participan en el ciclo de
vida del dato.
●
Asegurar
la
actualización
periódica
de
los
metadatos
técnicos
que
son
recolectados automáticamente por los servicios que conforman la plataforma PIBA.
●
Monitorear el funcionamiento de la plataforma, y el uso de la misma por parte de
los usuarios.
●
Detectar problemas y oportunidades de mejora.
●
Construir los casos de uso.
●
Construir y mantener las API de PIBA.
12

---

<!-- página 16 -->

5. Contacto
Ante
cualquier
duda
o
comentario
sobre
este
documento
podés
escribirnos
a
datosgcba@buenosaires.gob.ar
13