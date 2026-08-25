<!-- página 1 -->

Apunte de Bases de Datos

---

<!-- página 2 -->

Índice
Unidad I - Introducción.......................................................................................................... 6
Introducción a las Bases de Datos.......................................................................................6
Aplicaciones de los sistemas de bases de datos...............................................................6
Objetivos de los sistemas de bases de datos.................................................................... 7
Visión de los datos........................................................................................................... 10
Abstracción de datos..................................................................................................10
Ejemplares y esquemas...................................................................................................12
Modelos de datos.............................................................................................................13
Lenguajes de bases de datos.......................................................................................... 13
Lenguaje de manipulación de datos...........................................................................14
Lenguaje de definición de datos.................................................................................14
Bases de datos relacionales............................................................................................ 16
Tablas......................................................................................................................... 16
Lenguaje de manipulación de datos...........................................................................17
Lenguaje de definición de datos.......................................................................................18
Acceso a bases de datos desde programas de aplicación.............................................. 19
Diseño de bases de datos................................................................................................19
El proceso de diseño..................................................................................................19
Bases de datos basadas en objetos y semiestructuradas............................................... 20
Modelos de datos basados en objetos.......................................................................21
Modelos de datos semiestructurados.........................................................................21
Gestión de transacciones.................................................................................................21
Arquitectura de las bases de datos..................................................................................23
Usuarios de bases de datos e interfaces de usuario....................................................... 24
Administrador de bases de datos.....................................................................................25
Historia de los sistemas de bases de datos.....................................................................26
Unidad II - Requerimientos y modelado de BD................................................................. 29
Modelado de Bases de datos..............................................................................................29
Requerimientos y modelado de Entidad Relación........................................................... 29
Construcciones básicas del modelado de ER..................................................................29
Entidades......................................................................................................................... 29
Atributos (únicos y no únicos).......................................................................................... 30
Relaciones........................................................................................................................31
Restricciones de cardinalidad.......................................................................................... 31
Tipos de relaciones (Cardinalidad máxima)..................................................................... 34
Ejercicio 1...................................................................................................................36
Ejercicio 2...................................................................................................................36
Ejercicio 3...................................................................................................................36
Ejercicio 4...................................................................................................................37
Relaciones e instancias de relaciones............................................................................. 38
Atributos de relaciones.....................................................................................................39
Ejemplo:..................................................................................................................... 41

---

<!-- página 3 -->

Requerimientos de bases de datos y diagrama ER............................................. 41
Atributos compuestos.......................................................................................................43
Atributos compuestos con valores únicos........................................................................44
Múltiples atributos únicos (Claves candidatas)................................................................ 45
Atributos multivaluados.................................................................................................... 46
Atributos derivados...........................................................................................................47
Atributos opcionales.........................................................................................................48
Cardinalidad máxima y mínima exacta en las relaciones................................................ 49
Relaciones unarias y roles en las relaciones................................................................... 50
Relaciones múltiples entre la mismas entidades............................................................. 53
Entidad débil.....................................................................................................................53
Convenciones para nombrar entidades, atributos y relaciones....................................... 57
Modelado de ER mejorado...............................................................................................58
Casos especiales de modelado ER................................................................................. 58
Relaciones M:N con múltiples instancias entre las mismas entidades...................... 58
Entidades asociativas.......................................................................................................62
Relaciones ternarias o superiores....................................................................................64
Unidad III - Modelado de de BD Relacionales................................................................... 69
Introducción al modelado relacional.................................................................................69
Conceptos básicos...........................................................................................................69
Clave primaria.................................................................................................................. 72
Mapeo de Entidades a Relaciones...................................................................................73
Mapeo de entidades con atributos compuestos en relaciones........................................ 74
Mapeo de entidades con atributos compuestos únicos en relaciones.............................76
Mapeo de entidades con atributos opcionales en relaciones...........................................77
Restricción de integridad de la entidad............................................................................ 78
Clave Foránea..................................................................................................................79
Mapeo de relaciones en construcciones de bases de datos relacionales....................... 79
Mapeo de relaciones 1:M........................................................................................... 80
Mapeo de relaciones M:N.......................................................................................... 84
Mapeo de relaciones 1:1............................................................................................ 90
Restricciones de integridad referencial............................................................................ 92
Ejemplo: Mapeo de un diagrama ER en un Esquema Relacional............................. 95
Granularidad de la tabla...................................................................................................96
Mapeo de entidades con claves candidatas (Múltiples Atributos únicos).................. 97
Mapeo de entidades con atributos multivaluados...................................................... 99
Mapeo de entidades con atributos derivados...........................................................100
Mapear una entidad con varios tipos de atributos....................................................102
Mapeo de relaciones unarias......................................................................................... 103
Mapeo de relaciones unarias 1:M............................................................................ 103
Mapeo de relaciones unarias M:N............................................................................105
Mapeo de relaciones unarias 1:1............................................................................. 106
Mapeo de múltiples relaciones entre las mismas entidades.................................... 107
Mapeo de entidades débiles.................................................................................... 108

---

<!-- página 4 -->

Ejemplo. Mapeo de otro diagrama DER en un esquema relacional...................113
Restricciones de bases de datos relacionales............................................................... 114
Restricciones implícitas............................................................................................ 114
Restricciones definidas por el usuario......................................................................115
Acerca del mapeo de entidades asociativas..................................................................122
Acerca del mapeo de relaciones ternarias.....................................................................123
Acerca de claves primarias creadas por el diseñador y opciones de autonumeración..125
Acerca de realizar tanto diagramas ER como modelado relacional...............................127
Unidad IV - Operaciones de actualización y normalización...........................................130
Introducción....................................................................................................................130
Operaciones de actualización........................................................................................ 130
Ejemplo de operación de inserción.......................................................................... 131
Ejemplo de operación de eliminación.......................................................................131
Ejemplo de operación de modificación.....................................................................131
Acerca de la terminología de la operación de actualización.................................... 132
Anomalías de actualización............................................................................................133
Escenario de ejemplo...............................................................................................133
Relación ejemplo (Conteniendo Dato Redundante).................................................133
Anomalía de inserción..............................................................................................135
Anomalía de eliminación.......................................................................................... 136
Anomalía de modificación........................................................................................ 136
Dependencias Funcionales............................................................................................137
Notaciones de dependencia funcional..................................................................... 137
Ejemplo de dependencias funcionales.....................................................................138
Simplificación de las dependencias funcionales...................................................... 140
Dependencias funcionales aumentadas.................................................................. 141
Dependencias funcionales equivalentes..................................................................142
Tipos de dependencias funcionales............................................................................... 143
Dependencia funcional parcial................................................................................. 144
Dependencia funcional de clave completa...............................................................144
Dependencia funcional transitiva............................................................................. 145
Otro ejemplo de dependencia funcional.........................................................................145
Normalización.................................................................................................................147
Primera forma normal (1NF).................................................................................... 148
Segunda forma normal (2NF)...................................................................................151
Tercera forma normal (3NF)..................................................................................... 153
3NF y otras formas normales................................................................................... 154
Eliminando redundancias y resolviendo anomalías de actualización...................... 155
Acerca de excepciones de normalización................................................................ 158
Normalización versus performance..........................................................................159
Acerca del modelado de ER versus normalización.................................................160
Unidad V - SQL................................................................................................................... 163
Introducción....................................................................................................................163
Descripción general de los comandos SQL................................................................... 163

---

<!-- página 5 -->

Lenguaje de definición de datos (DDL).................................................................... 163
Lenguaje de manipulación de datos (DML)..............................................................164
Lenguaje de control de datos (DCL) y Lenguaje de control de transacciones (TCL).....
164
Tipos de datos SQL........................................................................................................165
Breves notas de sintaxis SQL.................................................................................. 166
CREATE TABLE.......................................................................................................167
DROP TABLE...........................................................................................................171
INSERT INTO...........................................................................................................173
SELECT................................................................................................................... 175
WHERE.............................................................................................................. 178
DISTINCT...........................................................................................................179
ORDER BY.........................................................................................................180
LIKE....................................................................................................................182
Funciones de agregación......................................................................................... 182
GROUP BY.........................................................................................................184
HAVING.............................................................................................................. 188
Consultas anidadas..................................................................................................192
IN........................................................................................................................194
JOIN................................................................................................................... 196
Alias..........................................................................................................................199
Unión de múltiples relaciones.................................................................................. 200
ALTER TABLE..........................................................................................................201
UPDATE................................................................................................................... 202
DELETE................................................................................................................... 203
CREATE VIEW y DROP VIEW.................................................................................203
Operadores de conjuntos: UNION, INTERSECT, EXCEPT..................................... 205
Ejemplos SQL adicionales con comandos SQL adicionales....................................207
CREATE TABLE (Ejemplo Adicional).......................................................................209
INSERT INTO (Ejemplo adicional)........................................................................... 211
Administración de restricciones................................................................................214
SELECT (Ejemplos adicionales).............................................................................. 216
Unión de una relación consigo misma (self-JOIN)............................................. 216
INNER and OUTER JOIN........................................................................................ 217
Unir sin utilizar una combinación de clave principal/clave externa.......................... 220
IS NULL....................................................................................................................221
EXISTS.....................................................................................................................221
NOT..........................................................................................................................222
Consultas alternativas.............................................................................................. 223
Insertar desde una consulta..................................................................................... 224
Otras funcionalidades de SQL................................................................................. 224
Una nota sobre el uso inadecuado de los valores observados en SQL...................224

---

<!-- página 6 -->

Unidad I - Introducción
Introducción a las Bases de Datos
Un sistema gestor de bases de datos (SGBD) consiste en una colección de datos
interrelacionados y un conjunto de programas para acceder a dichos datos. La colección de
datos, normalmente denominada base de datos, contiene información relevante para una
empresa. El objetivo principal de un SGBD es proporcionar una forma de almacenar y
recuperar la información de una base de datos de manera que sea tanto práctica como
eficiente.
Los sistemas de bases de datos se diseñan para gestionar grandes cantidades de
información. La gestión de los datos implica tanto la definición de estructuras para
almacenar la información como la provisión de mecanismos para la manipulación de la
información. Además, los sistemas de bases de datos deben garantizar la fiabilidad de la
información almacenada, a pesar de las caídas del sistema o de los intentos de acceso no
autorizados. Si los datos van a ser compartidos entre diferentes usuarios, el sistema debe
evitar posibles resultados anómalos.
Dado que la información es tan importante en la mayoría de las organizaciones, los
informáticos han desarrollado conceptos y técnicas para la gestión de los datos. Estos
conceptos y técnicas constituyen el objetivo central de la asignatura. A continuación se
presenta una breve introducción a los principios de los sistemas de bases de datos.
Aplicaciones de los sistemas de bases de datos
●
Banca: para información de los clientes, cuentas, préstamos y transacciones
bancarias.
●
Líneas aéreas: para reservas e información de horarios. Las líneas aéreas fueron de
las primeras en usar las bases de datos de forma distribuida geográficamente.
●
Universidades: para información de los estudiantes, matrículas en las asignaturas y
cursos.
●
Transacciones de tarjetas de crédito: para compras con tarjeta de crédito y la
generación de los extractos mensuales.
●
Telecomunicaciones: para guardar un registro de las llamadas realizadas, generar
las facturas mensuales, mantener el saldo de las tarjetas telefónicas de prepago y
para almacenar información sobre las redes de comunicaciones.
●
Finanzas: para almacenar información sobre compañías tenedoras, ventas y
compras de productos financieros, como acciones y bonos; también para almacenar
datos del mercado en tiempo real para permitir a los clientes la compraventa en línea
y a la compañía la compraventa automática.
●
Ventas: para información de clientes, productos y compras.
●
Comercio en línea: para los datos de ventas ya mencionados y para el seguimiento
de los pedidos Web, generación de listas de recomendaciones y mantenimiento de
evaluaciones de productos en línea.

---

<!-- página 7 -->

●
Producción: para la gestión de la cadena de proveedores y para el seguimiento de la
producción de artículos en las factorías, inventarios en los almacenes y pedidos.
●
Recursos humanos: para información sobre los empleados, salarios, impuestos
sobre los sueldos y prestaciones sociales, y para la generación de las nóminas.
Como muestra esta lista, las bases de datos forman una parte esencial de casi todas las
actividades actuales en las que podamos estar involucrados.
Durante las últimas cuatro décadas del siglo veinte, el uso de las bases de datos creció en
todos los rubros. En los primeros días, muy pocas personas interactuaban directamente con
los sistemas de bases de datos, aunque sin darse cuenta interactuaban indirectamente con
bases de datos—con informes impresos como los extractos de las tarjetas de crédito, o
mediante agentes como los cajeros de los bancos y los agentes de reservas de las líneas
aéreas. Después vinieron los cajeros automáticos y permitieron a los usuarios interactuar
directamente con las bases de datos. Las interfaces telefónicas con las computadoras
(sistemas de respuesta vocal interactiva) también permitieron a los usuarios tratar
directamente con las bases de datos — la persona que llamaba podía marcar un número y
pulsar las teclas del teléfono para introducir información o para seleccionar opciones
alternativas, para conocer las horas de llegada o salida de los vuelos, por ejemplo, o para
matricularse en asignaturas en una carrera universitaria.
La revolución de Internet a finales de los años noventa aumentó significativamente el
acceso directo del usuario a las bases de datos. Las organizaciones convirtieron muchas de
sus interfaces telefónicas a las bases de datos en interfaces Web, y dejaron disponibles en
línea muchos servicios. Por ejemplo, cuando accedemos a una librería en línea y buscamos
en una colección de libros o de música, se está accediendo a datos almacenados en una
base de datos. Cuando se realiza un pedido en línea, el pedido se almacena en una base
de datos. Cuando se accede al sitio Web de un banco y se consulta el estado de la cuenta y
los movimientos, la información se recupera del sistema de bases de datos del banco.
Cuando se accede a un sitio Web, puede que se recupere información personal de una
base de datos para seleccionar los anuncios que se deben mostrar. Más aún, los datos
sobre los accesos Web pueden almacenarse en una base de datos.
Así, aunque las interfaces de usuario ocultan los detalles del acceso a las bases de datos, y
la mayoría de la gente ni siquiera es consciente de que están interactuando con una base
de datos, el acceso a las bases de datos forma actualmente una parte esencial de la vida de
casi todas las personas.
Objetivos de los sistemas de bases de datos
Los sistemas de bases de datos surgieron en respuesta a los primeros métodos de gestión
informatizada de los datos. A modo de ejemplo de dichos métodos, típicos de los años
sesenta, considérese parte de una entidad bancaria que, entre otros datos, guarda
información sobre todos los clientes y todas las cajas de ahorro. Una manera de guardar la
información en la computadora es almacenarla en archivos del sistema operativo. Para
permitir que los usuarios manipulen la información, el sistema tiene varios programas de
aplicación que gestionan los archivos, incluyendo programas para:
●
Efectuar cargos o abonos en las cuentas.

---

<!-- página 8 -->

●
Añadir cuentas nuevas.
●
Calcular el saldo de las cuentas.
●
Generar los extractos mensuales.
Estos programas de aplicación los han escrito programadores de sistemas en respuesta a
las necesidades del banco.
Se añaden nuevos programas de aplicación al sistema según surgen las necesidades. Por
ejemplo, suponga que se decide ofrecer cuentas corrientes a clientes con una caja de
ahorros.
En
consecuencia,
se
crean
nuevos
archivos
permanentes
que
contienen
información acerca de todas las cuentas corrientes abiertas en el banco y puede que haya
que escribir nuevos programas de aplicación para afrontar situaciones que no se dan en las
cajas de ahorro, como los descubiertos. Así, con el paso del tiempo, se añaden más
archivos y programas de aplicación al sistema.
Los sistemas operativos convencionales soportan este sistema de procesamiento de
archivos típico. El sistema almacena los registros permanentes en varios archivos y
necesita
diferentes
programas
de
aplicación para extraer y añadir a los archivos
correspondientes. Antes de la aparición de los sistemas gestores de bases de datos
(SGBD), las organizaciones normalmente almacenaban la información en sistemas de este
tipo.
Guardar la información de la organización en un sistema de procesamiento de archivos
tiene una serie de inconvenientes importantes:
●
Redundancia e inconsistencia de los datos. Debido a que los archivos y
programas de aplicación los crean diferentes programadores en el transcurso de un
largo período de tiempo, es probable que los diversos archivos tengan estructuras
diferentes y que los programas estén escritos en varios lenguajes de programación
diferentes. Además, puede que la información esté duplicada en varios lugares
(archivos). Por ejemplo, la dirección y el número de teléfono de un cliente dado
pueden aparecer en un archivo que contenga registros de cajas de ahorros y en un
archivo que contenga registros de cuentas corrientes. Esta redundancia conduce a
costes de almacenamiento y de acceso más elevados. Además, puede dar lugar a la
inconsistencia de los datos; es decir, puede que las diferentes copias de los mismos
datos no coincidan. Por ejemplo, puede que el cambio en la dirección de un cliente
esté reflejado en los registros de las cajas de ahorro pero no en el resto del sistema.
●
Dificultad en el acceso a los datos. Supóngase que uno de los empleados del
banco necesita averiguar los nombres de todos los clientes que viven en un código
postal dado. El empleado pide al departamento de procesamiento de datos que
genere esa lista. Debido a que esta petición no fue prevista por los diseñadores del
sistema original, no hay un programa de aplicación a mano para satisfacerla. Hay,
sin embargo, un programa de aplicación que genera la lista de todos los clientes. El
empleado del banco tiene ahora dos opciones: obtener la lista de todos los clientes y
extraer manualmente la información que necesita, o pedir a un programador de
sistemas que escriba el programa de aplicación necesario. Ambas opciones son
obviamente insatisfactorias. Supóngase que se escribe el programa y que, varios
días más tarde, el mismo empleado necesita reducir esa lista para que incluya
únicamente a aquellos clientes que tengan una cuenta con saldo igual o superior a

---

<!-- página 9 -->

10.000 pesos. Como se puede esperar, no existe ningún programa que genere tal
lista. De nuevo, el empleado tiene que elegir entre dos opciones, ninguna de las
cuales es satisfactoria. La cuestión aquí es que los entornos de procesamiento de
archivos convencionales no permiten recuperar los datos necesarios de una forma
práctica y eficiente. Hacen falta sistemas de recuperación de datos más adecuados
para el uso general.
●
Aislamiento de datos. Como los datos están dispersos en varios archivos, y los
archivos pueden estar en diferentes formatos, es difícil escribir nuevos programas de
aplicación para recuperar los datos correspondientes.
●
Problemas de integridad. Los valores de los datos almacenados en la base de
datos deben satisfacer ciertos tipos de restricciones de consistencia. Por ejemplo, el
saldo de ciertos tipos de cuentas bancarias no puede ser inferior a una cantidad
predeterminada (por ejemplo, 500 pesos). Los desarrolladores hacen cumplir esas
restricciones en el sistema añadiendo el código correspondiente en los diversos
programas de aplicación. Sin embargo, cuando se añaden nuevas restricciones, es
difícil cambiar los programas para hacer que se cumplan. El problema se complica
cuando las restricciones implican diferentes elementos de datos de diferentes
archivos.
●
Problemas
de
atomicidad.
Los
sistemas
informáticos,
como cualquier otro
dispositivo mecánico o eléctrico, está sujeto a fallos. En muchas aplicaciones es
crucial asegurar que, si se produce algún fallo, los datos se restauran al estado
consistente que existía antes del fallo. Considérese un programa para transferir 50
pesos desde la cuenta A a la B. Si se produce un fallo del sistema durante la
ejecución del programa, es posible que los 50 pesos fueran retirados de la cuenta A
pero no depositados en la cuenta B, dando lugar a un estado inconsistente de la
base de datos. Evidentemente, resulta esencial para la consistencia de la base de
datos que tengan lugar tanto la extracción como el depósito, o que no tenga lugar
ninguno. Es decir, la transferencia de fondos debe ser atómica— debe ocurrir en su
totalidad o no ocurrir en absoluto. Resulta difícil asegurar la atomicidad en los
sistemas convencionales de procesamiento de archivos.
●
Anomalías en el acceso concurrente. Para aumentar el rendimiento global del
sistema y obtener una respuesta más rápida, muchos sistemas permiten que varios
usuarios actualicen los datos simultáneamente. En realidad, hoy en día, los
principales sitios de comercio electrónico de Internet pueden tener millones de
accesos diarios de compradores a sus datos. En tales entornos es posible la
interacción
de
actualizaciones
concurrentes
y
puede
dar
lugar
a
datos
inconsistentes. Considérese una cuenta bancaria A, que contenga 500 pesos. Si dos
clientes retiran fondos (por ejemplo, 50 y 100 pesos, respectivamente) de la cuenta
A aproximadamente al mismo tiempo, el resultado de las ejecuciones concurrentes
puede dejar la cuenta en un estado incorrecto (o inconsistente). Supóngase que los
programas que se ejecutan para cada retiro leen el saldo anterior, reducen su valor
en el importe que se retira y luego escriben el resultado. Si los dos programas se
ejecutan concurrentemente, pueden leer el valor 500, y escribir después 450 y 400,
respectivamente. Dependiendo de quien escriba el valor por último, la cuenta puede
contener 450 o 400 pesos, en lugar del valor correcto, 350. Para protegerse contra
esta posibilidad, el sistema debe mantener alguna forma de supervisión. Pero es
difícil ofrecer supervisión, ya que muchos programas de aplicación diferentes que no
se han coordinado con anterioridad pueden tener acceso a los datos.

---

<!-- página 10 -->

●
Problemas de seguridad. No todos los usuarios de un sistema de bases de datos
deben poder acceder a todos los datos. Por ejemplo, en un sistema bancario, el
personal de nóminas sólo necesita ver la parte de la base de datos que contiene
información acerca de los diferentes empleados del banco. No necesitan tener
acceso a la información acerca de las cuentas de clientes. Pero, como los
programas de aplicación se añaden al sistema de procesamiento de datos de una
forma ad hoc, es difícil hacer cumplir tales restricciones de seguridad.
Estas dificultades, entre otras, motivaron el desarrollo de los sistemas de bases de datos.
Visión de los datos
Un sistema de bases de datos es una colección de datos interrelacionados y un conjunto de
programas que permiten a los usuarios tener acceso a esos datos y modificarlos. Una de las
principales finalidades de los sistemas de bases de datos es ofrecer a los usuarios una
visión abstracta de los datos. Es decir, el sistema oculta ciertos detalles del modo en que se
almacenan y mantienen los datos.
Abstracción de datos
Para que el sistema sea útil debe recuperar los datos eficientemente. La necesidad de
eficiencia ha llevado a los diseñadores a usar estructuras de datos complejas para la
representación de los datos en la base de datos. Dado que muchos de los usuarios de
sistemas de bases de datos no tienen formación en informática, los programadores ocultan
esa complejidad a los usuarios mediante varios niveles de abstracción para simplificar la
interacción de los usuarios con el sistema:
Figura 1.1

---

<!-- página 11 -->

●
Nivel físico. El nivel más bajo de abstracción describe cómo se almacenan
realmente los datos. El nivel físico describe en detalle las estructuras de datos
complejas de bajo nivel.
●
Nivel lógico. El nivel inmediatamente superior de abstracción describe qué datos se
almacenan en la base de datos y qué relaciones existen entre esos datos. El nivel
lógico, por tanto, describe toda la base de datos en términos de un número pequeño
de estructuras relativamente simples. Aunque la implementación de esas estructuras
simples en el nivel lógico puede involucrar estructuras complejas del nivel físico, los
usuarios del nivel lógico no necesitan preocuparse de esta complejidad. Los
administradores de bases de datos, que deben decidir la información que se guarda
en la base de datos, usan el nivel de abstracción lógico.
●
Nivel de vistas. El nivel más elevado de abstracción sólo describe parte de la base
de datos. Aunque el nivel lógico usa estructuras más simples, queda algo de
complejidad debido a la variedad de información almacenada en las grandes bases
de datos. Muchos usuarios del sistema de bases de datos no necesitan toda esta
información; en su lugar sólo necesitan tener acceso a una parte de la base de
datos. El nivel de abstracción de vistas existe para simplificar su interacción con el
sistema. El sistema puede proporcionar muchas vistas para la misma base de datos.
La figura 1.1 muestra la relación entre los tres niveles de abstracción.
Una analogía con el concepto de tipos de datos en lenguajes de programación puede
clarificar la diferencia entre los niveles de abstracción. La mayoría de los lenguajes de
programación de alto nivel soportan el concepto de tipo estructurado. Por ejemplo, en el
lenguaje de programación C se pueden declarar estructuras de la manera siguiente:
Este código define un nuevo tipo de registro denominado cliente con cuatro campos. Cada
campo tiene un nombre y un tipo asociados. Una entidad bancaria puede tener varios tipos
de estos registros, incluidos:
●
cuenta, con los campos número_cuenta y saldo.
●
empleado, con los campos nombre_empleado y sueldo.
En el nivel físico, los registros cliente, cuenta o empleado se pueden describir como bloques
de posiciones consecutivas de almacenamiento (por ejemplo, palabras o bytes). El
compilador oculta este nivel de detalle a los programadores. De manera parecida, el
sistema de base de datos oculta muchos de los detalles de almacenamiento de los niveles
inferiores a los programadores de bases de datos. Los administradores de bases de datos,
por otro lado, pueden ser conscientes de ciertos detalles de la organización física de los
datos.

---

<!-- página 12 -->

En el nivel lógico cada registro de este tipo se describe mediante una definición de tipo,
como en el fragmento de código anterior, y también se define la relación entre estos tipos de
registros. Los programadores que usan un lenguaje de programación trabajan en este nivel
de abstracción. De manera parecida, los administradores de bases de datos suelen trabajar
en este nivel de abstracción.
Finalmente, en el nivel de vistas, los usuarios de computadoras ven un conjunto de
programas de aplicación que ocultan los detalles de los tipos de datos. De manera parecida,
en el nivel de vistas se definen varias vistas de la base de datos y los usuarios de la base
de datos pueden verlas. Además de ocultar los detalles del nivel lógico de la base de datos,
las vistas también proporcionan un mecanismo de seguridad para evitar que los usuarios
tengan acceso a ciertas partes de la base de datos. Por ejemplo, los cajeros de un banco
sólo ven la parte de la base de datos que contiene información de las cuentas de los
clientes; no pueden tener acceso a la información referente a los sueldos de los empleados.
Ejemplares y esquemas
Las bases de datos van cambiando a lo largo del tiempo conforme la información se inserta
y se elimina. La colección de información almacenada en la base de datos en un momento
dado se denomina ejemplar de la base de datos. El diseño general de la base de datos se
denomina esquema de la base de datos. Los esquemas se modifican rara vez, si es que se
modifican.
El concepto de esquemas y ejemplares de las bases de datos se puede comprender por
analogía con los programas escritos en un lenguaje de programación. El esquema de la
base de datos se corresponde con las declaraciones de las variables (junto con las
definiciones de tipos asociados) de los programas. Cada variable tiene un valor concreto en
un instante dado. Los valores de las variables de un programa en un instante dado se
corresponden con un ejemplar del esquema de la base de datos.
Los sistemas de bases de datos tienen varios esquemas divididos según los niveles de
abstracción. El esquema físico describe el diseño de la base de datos en el nivel físico,
mientras que el esquema lógico describe su diseño en el nivel lógico. Las bases de datos
también pueden tener varios esquemas en el nivel de vistas, a veces denominados
subesquemas, que describen diferentes vistas de la base de datos.
De éstos, el esquema lógico es con mucho el más importante en términos de su efecto
sobre los programas de aplicación, ya que los programadores crean las aplicaciones
usando el esquema lógico. El esquema físico está oculto bajo el esquema lógico, y
generalmente puede modificarse fácilmente sin afectar a los programas de aplicación. Se
dice que los programas de aplicación muestran independencia física respecto de los
datos si no dependen del esquema físico y, por lo tanto, no hace falta volver a escribirlos si
se modifica el esquema físico. Se estudiarán los lenguajes para la descripción de los
esquemas, después de introducir el concepto de modelos de datos posteriormente.

---

<!-- página 13 -->

Modelos de datos
Bajo la estructura de las bases de datos se encuentra el modelo de datos: una colección
de herramientas conceptuales para describir los datos, sus relaciones, su semántica y las
restricciones de consistencia. Los modelos de datos ofrecen un modo de describir el diseño
de las bases de datos en los niveles físico, lógico y de vistas.
En este texto se van a tratar varios modelos de datos diferentes. Los modelos de datos
pueden clasificarse en cuatro categorías diferentes:
●
Modelo
relacional. El modelo relacional usa una colección de tablas para
representar tanto los datos como sus relaciones. Cada tabla tiene varias columnas, y
cada columna tiene un nombre único. El modelo relacional es un ejemplo de un
modelo basado en registros. Los modelos basados en registros se denominan así
porque la base de datos se estructura en registros de formato fijo de varios tipos.
Cada tabla contiene registros de un tipo dado. Cada tipo de registro define un
número fijo de campos, o atributos. Las columnas de la tabla se corresponden con
los atributos del tipo de registro. El modelo de datos relacional es el modelo de datos
más ampliamente usado, y una gran mayoría de sistemas de bases de datos
actuales se basan en el modelo relacional.
●
El modelo entidad-relación. El modelo de datos entidad-relación (E-R) se basa en
una percepción del mundo real que consiste en una colección de objetos básicos,
denominados entidades, y de las relaciones entre ellos. Una entidad es una “cosa” u
“objeto”
del
mundo
real
que
es
distinguible
de
otros
objetos.
El
modelo
entidad-relación se usa mucho en el diseño de bases de datos.
●
Modelo de datos orientado a objetos. El modelo de datos orientado a objetos es
otro modelo de datos. El modelo orientado a objetos se puede considerar como una
extensión del modelo E-R con los conceptos de la encapsulación, los métodos
(funciones) y la identidad de los objetos.
●
Modelo de datos semiestructurados. El modelo de datos semiestructurados
permite la especificación de datos donde los elementos de datos individuales del
mismo tipo pueden tener diferentes conjuntos de atributos. Esto lo diferencia de los
modelos de datos mencionados anteriormente, en los que cada elemento de datos
de un tipo particular debe tener el mismo conjunto de atributos. El lenguaje de
marcas extensible (XML, eXtensible Markup Language) se emplea mucho para
representar datos semiestructurados.
El
modelo
de
datos
de
red
y
el
modelo
de
datos
jerárquico
precedieron
cronológicamente
al relacional. Estos modelos estuvieron íntimamente ligados a la
implementación subyacente y complicaba la tarea del modelado de datos. En consecuencia,
se usan muy poco hoy en día, excepto en el código de bases de datos antiguas que sigue
estando en servicio en algunos lugares.
Lenguajes de bases de datos
Los sistemas de bases de datos proporcionan un lenguaje de definición de datos para
especificar el esquema de la base de datos y un lenguaje de manipulación de datos para
expresar las consultas y las modificaciones de la base de datos. En la práctica, los

---

<!-- página 14 -->

lenguajes de definición y manipulación de datos no son dos lenguajes diferentes; en
cambio, simplemente forman parte de un único lenguaje de bases de datos, como puede
ser el muy usado SQL.
Lenguaje de manipulación de datos
Un lenguaje de manipulación de datos (LMD) es un lenguaje que permite a los usuarios
tener acceso a los datos organizados mediante el modelo de datos correspondiente o
manipularlos. Los tipos de acceso son:
●
La recuperación de la información almacenada en la base de datos.
●
La inserción de información nueva en la base de datos.
●
El borrado de la información de la base de datos.
●
La modificación de la información almacenada en la base de datos.
Hay fundamentalmente dos tipos:
●
Los LMDs procedimentales necesitan que el usuario especifique qué datos se
necesitan y cómo obtener esos datos.
●
Los LMDs declarativos (también conocidos como LMDs no procedimentales)
necesitan que el usuario especifique qué datos se necesitan sin que haga falta que
especifique cómo obtener esos datos.
Los LMDs declarativos suelen resultar más fáciles de aprender y de usar que los
procedimentales. Sin embargo, como el usuario no tiene que especificar cómo conseguir los
datos, el sistema de bases de datos tiene que determinar un medio eficiente de acceso a los
datos.
Una consulta es una instrucción que solicita que se recupere información. La parte de los
LMDs implicada en la recuperación de información se denomina lenguaje de consultas.
Aunque técnicamente sea incorrecto, resulta habitual usar las expresiones lenguaje de
consultas y lenguaje de manipulación de datos como sinónimas.
Existen varios lenguajes de consultas de bases de datos en uso, tanto comercial como
experimentalmente. En nuestra asignatura nos enfocaremos en el lenguaje de consultas
más ampliamente usado, SQL.
Los niveles de abstracción que se trataron en visión de los datos no sólo se aplican a la
definición o estructuración de datos, sino también a su manipulación. En el nivel físico se
deben definir los algoritmos que permitan un acceso eficiente a los datos. En los niveles
superiores de abstracción se pone el énfasis en la facilidad de uso. El objetivo es permitir
que los usuarios interactúen de manera eficiente con el sistema. El componente procesador
de consultas del sistema de bases de datos traduce las consultas LMD en secuencias de
acciones en el nivel físico del sistema de bases de datos.
Lenguaje de definición de datos
Los esquemas de las bases de datos se especifican mediante un conjunto de definiciones
expresadas mediante un lenguaje especial denominado lenguaje de definición de datos
(LDD). El LDD también se usa para especificar más propiedades de los datos.

---

<!-- página 15 -->

La estructura de almacenamiento y los métodos de acceso usados por el sistema de bases
de datos se especifican mediante un conjunto de instrucciones en un tipo especial de LDD
denominado lenguaje de almacenamiento y definición de datos. Estas instrucciones
definen los detalles de implementación de los esquemas de las bases de datos, que suelen
ocultarse a los usuarios.
Los valores de los datos almacenados en la base de datos deben satisfacer ciertas
restricciones de consistencia. Por ejemplo, suponga que el saldo de una cuenta no debe
caer por debajo de 1000 pesos. El LDD proporciona facilidades para especificar tales
restricciones. Los sistemas de bases de datos las comprueban cada vez que se modifica la
base de datos. En general, las restricciones pueden ser predicados arbitrarios relativos a la
base de datos. No obstante, los predicados arbitrarios pueden resultar costosos de
comprobar. Por tanto, los sistemas de bases de datos se concentran en las restricciones de
integridad que pueden comprobarse con una sobrecarga mínima:
●
Restricciones de dominio. Se debe asociar un dominio de valores posibles a cada
atributo (por ejemplo, tipos enteros, tipos de carácter, tipos fecha/hora). La
declaración de un atributo como parte de un dominio concreto actúa como restricción
de los valores que puede adoptar. Las restricciones de dominio son la forma más
elemental de restricción de integridad. El sistema las comprueba fácilmente siempre
que se introduce un nuevo elemento de datos en la base de datos.
●
Integridad referencial. Hay casos en los que se desea asegurar que un valor que
aparece en una relación para un conjunto de atributos dado aparece también para
un determinado conjunto de atributos en otra relación (integridad referencial). Las
modificaciones de la base de datos pueden causar violaciones de la integridad
referencial. Cuando se viola una restricción de integridad, el procedimiento normal
es rechazar la acción que ha causado esa violación.
●
Asertos. Un aserto es cualquier condición que la base de datos debe satisfacer
siempre. Las restricciones de dominio y las restricciones de integridad referencial
son formas especiales de aser- tos. No obstante, hay muchas restricciones que no
pueden expresarse empleando únicamente esas formas especiales. Por ejemplo:
“Cada préstamo tiene como mínimo un cliente tenedor de una cuenta con un saldo
mínimo de 1.000 pesos” debe expresarse en forma de aserto. Cuando se crea un
aserto,
el
sistema
comprueba
su validez. Si el aserto es válido, cualquier
modificación futura de la base de datos se permite únicamente si no hace que se
viole ese aserto.
●
Autorización. Puede que se desee diferenciar entre los usuarios en cuanto al tipo
de acceso que se les permite a diferentes valores de los datos de la base de datos.
Estas
diferenciaciones
se
expresan
en
términos
de
autorización,
cuyas
modalidades más frecuentes son: autorización de lectura, que permite la lectura
pero no la modificación de los datos; autorización de inserción, que permite la
inserción de datos nuevos, pero no la modificación de los datos ya existentes;
autorización de actualización, que permite la modificación, pero no la eliminación,
de los datos; y la autorización de eliminación, que permite la eliminación de datos.
A cada usuario se le pueden asignar todos, ninguno o una combinación de estos
tipos de autorización.
El LDD, al igual que cualquier otro lenguaje de programación, obtiene como entrada algunas
instrucciones y genera una salida. La salida del LDD se coloca en el diccionario de datos,

---

<!-- página 16 -->

que contiene metadatos— es decir, datos sobre datos. El diccionario de datos se considera
un tipo especial de tabla, a la que sólo puede tener acceso y actualizar el propio sistema de
bases de datos (no los usuarios normales). El sistema de bases de datos consulta el
diccionario de datos antes de leer o modificar los datos reales.
Bases de datos relacionales
Las bases de datos relacionales se basan en el modelo relacional y usan un conjunto de
tablas para representar tanto los datos como las relaciones entre ellos. También incluyen un
LMD y un LDD. La mayor parte de los sistemas de bases de datos relacionales comerciales
emplean el lenguaje SQL.
Tablas
Cada tabla tiene varias columnas, y cada columna tiene un nombre único. En la figura 1.2
se presenta un ejemplo de base de datos relacional consistente en tres tablas: una muestra
detalles de los clientes de un banco, la segunda muestra las cuentas y la tercera muestra
las cuentas que pertenecen a cada cliente.
La primera tabla, la tabla cliente, muestra, por ejemplo, que el cliente identificado por
id_cliente 19.283.746 se llama González y vive en la calle Arenal en La Granja. La segunda
tabla, cuenta, muestra, por ejemplo, que la cuenta C-101 tiene un saldo de 500 pesos y la
C-201 un saldo de 900 pesos.
La tercera tabla muestra las cuentas que pertenecen a cada cliente. Por ejemplo, la cuenta
C-101 pertenece al cliente cuyo id_cliente es 19.283.746 (González), y los clientes
19.283.746 (González) y 01.928.374 (Gómez) comparten el número de cuenta C-201
(pueden compartir un negocio).
El modelo relacional es un ejemplo de modelo basado en registros. Los modelos basados
en registros se denominan así porque la base de datos se estructura en registros de formato
fijo de varios tipos. Cada tabla contiene registros de un tipo dado. Cada tipo de registro
define un número fijo de campos, o atributos. Las columnas de la tabla se corresponden con
los atributos del tipo de registro.
No es difícil ver cómo se pueden almacenar las tablas en archivos. Por ejemplo, se puede
usar un carácter especial (como la coma) para delimitar los diferentes atributos de un
registro, y otro carácter especial (como el carácter de nueva línea) para delimitar los
registros. El modelo relacional oculta esos detalles de implementación de bajo nivel a los
programadores de bases de datos y a los usuarios.
El modelo de datos relacional es el modelo de datos más ampliamente usado, y una gran
mayoría de los sistemas de bases de datos actuales se basan en el modelo relacional.
Obsérvese también que en el modelo relacional es posible crear esquemas que tengan
problemas tales como información duplicada innecesariamente. Por ejemplo, supóngase
que se almacena número_cuenta como atributo de un registro cliente. Entonces, para
representar el hecho de que tanto la cuentas C-101 como la cuenta C-201 pertenece al
cliente González (con id_cliente 19.283.746) sería necesario almacenar dos filas en la tabla

---

<!-- página 17 -->

cliente. Los valores de nombre_cliente, calle_cliente y ciudad_cliente de González estarían
innecesariamente duplicados en las dos filas.
Figura 1.2
Lenguaje de manipulación de datos
El lenguaje de consultas de SQL no es procedimental. Usa como entrada varias tablas
(posiblemente sólo una) y devuelve siempre una sola tabla. A continuación se ofrece un
ejemplo de consulta SQL que halla el nombre de todos los clientes que residen en
Peguerinos:

---

<!-- página 18 -->

La consulta especifica que hay que recuperar (select) las filas de (from) la tabla cliente en
las que (where) la ciudad_cliente es Peguerinos, y que sólo debe mostrarse el atributo
nombre_cliente de esas filas. Más concretamente, el resultado de la ejecución de esta
consulta es una tabla con una sola columna denominada nombre_cliente y un conjunto de
filas, cada una de las cuales contiene el nombre de un cliente cuya ciudad_cliente es
Peguerinos. Si la consulta se ejecuta sobre la tabla de la figura 1.2, el resultado constará de
dos filas, una con el nombre López y otra con el nombre Santos.
Las consultas pueden involucrar información de más de una tabla. Por ejemplo, la siguiente
consulta busca todos los números de cuenta y sus saldos del cliente con id_cliente
19.283.746.
Si la consulta anterior se ejecutase sobre las tablas de la figura 1.2, el sistema encontraría
que las dos cuentas denominadas C-101 y C-201 pertenecen al cliente 19.283.746 y el
resultado consistiría en una tabla con dos columnas (número_cuenta, saldo) y dos filas
(C-101, 500) y (C-201,900).
Lenguaje de definición de datos
SQL ofrece un LDD elaborado que permite definir tablas, restricciones de integridad,
asertos, etc. Por ejemplo, la siguiente instrucción del lenguaje SQL define la tabla cuenta:
La ejecución de esta instrucción LDD crea la tabla cuenta. Además, actualiza el diccionario
de datos, que contiene metadatos. Los esquemas de las tablas son ejemplos de metadatos.
Acceso a bases de datos desde programas de aplicación
SQL no es tan potente como la máquina universal de Turing; es decir, hay algunos cálculos
que no pueden obtenerse mediante alguna consulta SQL. Esos cálculos deben escribirse en
un lenguaje anfitrión, como C, C++ o Java. Los programas de aplicación son programas
que se usan para interactuar de esta manera con las bases de datos. Algunos de los

---

<!-- página 19 -->

ejemplos de un sistema bancario serían los programas que generan las nóminas, realizan
cargos en las cuentas, realizan abonos en las cuentas o transfieren fondos entre las
cuentas.
Para tener acceso a la base de datos, las instrucciones LMD deben ejecutarse desde el
lenguaje anfitrión. Hay dos maneras de conseguirlo:
●
Proporcionando
una
interfaz
de
programas
de
aplicación
(conjunto
de
procedimientos) que se pueda usar para enviar instrucciones LMD y LDD a la base
de datos y recuperar los resultados. El estándar de conectividad abierta de bases de
datos (ODBC, Open Database Connectivity) definido por Microsoft para su empleo
con el lenguaje C es un estándar de interfaz de programas de aplicación usado
habitualmente. El estándar de conectividad de Java con bases de datos (JDBC, Java
Database Connectivity) ofrece las características correspondientes para el lenguaje
Java.
●
Extendiendo la sintaxis del lenguaje anfitrión para que incorpore las llamadas LMD
dentro del programa del lenguaje anfitrión. Generalmente, un carácter especial
precede a las llamadas LMD y un preprocesador, denominado precompilador LMD,
convierte las instrucciones LMD en llamadas normales a procedimientos en el
lenguaje anfitrión.
Diseño de bases de datos
Los sistemas de bases de datos se diseñan para gestionar grandes cantidades de
información. Esas grandes cantidades de información no existen aisladas. Forman parte del
funcionamiento de alguna empresa u organización, cuyo producto final puede que sea la
información obtenida de la base de datos o algún dispositivo o servicio para el que la base
de datos sólo desempeña un papel secundario.
El diseño de bases de datos implica principalmente el diseño del esquema de las bases de
datos. El diseño de un entorno completo de aplicaciones para la base de datos que
satisfaga las necesidades de la empresa que se está modelando exige prestar atención a
un conjunto de aspectos más amplio.
El proceso de diseño
Los modelos de datos de alto nivel resultan útiles a los diseñadores de bases de datos al
ofrecerles un marco conceptual en el cual especificar, de manera sistemática, los requisitos
de datos de los usuarios de las bases de datos y la manera en que se estructurará la base
de datos para satisfacer esos requisitos. La fase inicial del diseño de las bases de datos,
por tanto, es caracterizar completamente los requisitos de datos de los hipotéticos usuarios
de la base de datos. Los diseñadores de bases de datos deben interactuar ampliamente con
los expertos y usuarios del dominio para llevar a cabo esta tarea. El resultado de esta fase
es la especificación de los requisitos de los usuarios.
A continuación, el diseñador escoge un modelo de datos y, mediante la aplicación de los
conceptos del modelo de datos elegido, traduce esos requisitos en un esquema conceptual
de la base de datos. El esquema desarrollado en esta fase de diseño conceptual ofrece

---

<!-- página 20 -->

una visión general detallada de la empresa. El diseñador revisa el esquema para confirmar
que todos los requisitos de datos se satisfacen realmente y no entren en conflicto entre sí.
El diseñador también puede examinar el diseño para eliminar cualquier característica
redundante. En este punto, la atención se centra en describir los datos y sus relaciones,
más que en especificar los detalles del almacenamiento físico.
En términos del modelo relacional, el proceso de diseño conceptual implica decisiones
sobre qué atributos se desea capturar en la base de datos y cómo agruparlos para formar
las diferentes tablas. La parte “qué” es, esencialmente, una decisión conceptual, y la parte
del “cómo” es, esencialmente, un problema informático. Hay dos vías principales para
afrontar el problema. La primera supone usar el modelo entidad-relación; la otra es emplear
un conjunto de algoritmos (denominados colectivamente como normalización) que toma
como entrada el conjunto de todos los atributos y genera un conjunto de tablas.
Un
esquema
conceptual
completamente
desarrollado
también
indica
los
requisitos
funcionales de la organización. En la especificación de requisitos funcionales los
usuarios describen el tipo de operaciones (o transacciones) que se llevarán a cabo con los
datos. Un ejemplo de estas operaciones es modificar o actualizar los datos, buscar y
recuperar datos concretos y eliminar datos. En esta etapa del diseño conceptual el
diseñador puede revisar el esquema para asegurarse de que satisface los requisitos
funcionales
El proceso de pasar de un modelo de datos abstracto a la implementación de la base de
datos continúa con dos fases de diseño finales. En la fase de diseño lógico el diseñador
relaciona el esquema conceptual de alto nivel con el modelo de implementación de datos
del sistema de bases de datos que se va a usar. El diseñador usa el esquema de bases de
datos específico para el sistema resultante en la fase de diseño físico posterior, en la que se
especifican las características físicas de la base de datos. Entre esas características están
la forma de organización de los archivos y las estructuras de almacenamiento interno.
Bases de datos basadas en objetos y semiestructuradas
Varias áreas de aplicaciones de los sistemas de bases de datos están limitadas por las
restricciones del modelo de datos relacional. En consecuencia, los investigadores han
desarrollado varios modelos de datos para tratar con estos dominios de aplicación. Los
modelos de datos son el orientado a objetos y el relacional orientado a objetos,
representativos de los modelos de datos basados en objetos, y XML, representativo de los
modelos de datos semiestructurados.
Modelos de datos basados en objetos
El modelo de datos orientado a objetos se basa en el paradigma de los lenguajes de
programación orientados a objetos, que actualmente se usa en gran medida. La herencia, la
identidad de los objetos y la encapsulación (ocultación de la información), con métodos para
ofrecer una interfaz para los objetos, están entre los conceptos principales de la
programación orientada a objetos que han encontrado aplicación en el modelado de datos.
El modelo de datos orientado a objetos también soporta un sistema elaborado de tipos,
incluidos los tipos estructurados y las colecciones. El modelo orientado a objetos puede

---

<!-- página 21 -->

considerarse una extensión del modelo E-R con los conceptos de encapsulación, métodos
(funciones) e identidad de los objetos.
El modelo de datos relacional orientado a objetos extiende el modelo relacional
tradicional con gran variedad de características como los tipos estructurados y las
colecciones, así como la orientación a objetos.
Modelos de datos semiestructurados
Los modelos de datos semi estructurados permiten la especificación de los datos en los que
cada elemento de datos del mismo tipo puede tener conjuntos de atributos diferentes. Esto
los diferencia de los modelos de datos mencionados anteriormente, en los que todos los
elementos de datos de un tipo dado deben tener el mismo conjunto de atributos.
El lenguaje XML se diseñó inicialmente como un modo de añadir información de marcas a
los documentos de texto, pero se ha vuelto importante debido a sus aplicaciones en el
intercambio de datos. XML ofrece un modo de representar los datos que tienen una
estructura anidada y, además, permite una gran flexibilidad en la estructuración de los
datos, lo cual es importante para ciertas clases de datos no tradicionales.
Gestión de transacciones
A menudo, varias operaciones sobre la base de datos forman una única unidad lógica de
trabajo. Un ejemplo son las transferencias de fondos, en las que se realiza un débito en una
cuenta (llámese A) y un crédito en otra cuenta (llámese B). Evidentemente, resulta
fundamental que, o bien tengan lugar tanto el débito como el crédito, o bien que no se
produzca ninguno. Es decir, la transferencia de fondos debe tener lugar por completo o no
producirse en absoluto. Este requisito de todo o nada se denomina atomicidad. Además,
resulta esencial que la ejecución de la transferencia de fondos preserve la consistencia de
la base de datos. Es decir, el valor de la suma A + B se debe preservar. Este requisito de
corrección se denomina consistencia. Finalmente, tras la ejecución correcta de la
transferencia de fondos, los nuevos valores de las cuentas A y B deben persistir, a pesar de
la posibilidad de fallo del sistema. Este requisito de persistencia se denomina durabilidad.
Una transacción es un conjunto de operaciones que lleva a cabo una única función lógica
en una aplicación de bases de datos. Cada transacción es una unidad de atomicidad y
consistencia. Por tanto, se exige que las transacciones no violen ninguna restricción de
consistencia de la base de datos. Es decir, si la base de datos era consistente cuando la
transacción comenzó, debe ser consistente cuando la transacción termine con éxito. Sin
embargo,
durante
la
ejecución
de
una
transacción,
puede
ser
necesario
permitir
inconsistencias temporalmente, ya que el débito a A o el crédito a B se debe realizar en
primer lugar. Esta inconsistencia temporal, aunque necesaria, puede conducir a dificultades
si ocurre un fallo.
Es responsabilidad del programador definir adecuadamente las diferentes transacciones, de
tal manera que cada una preserve la consistencia de la base de datos. Por ejemplo, la
transacción para transferir fondos de la cuenta A a la cuenta B puede definirse como si
estuviera compuesta de dos programas diferentes: uno que realiza el débito en la cuenta A

---

<!-- página 22 -->

y otro que realiza el crédito en la cuenta B. La ejecución de estos dos programas uno
después del otro preservará realmente la consistencia. Sin embargo, cada programa en sí
mismo no transforma la base de datos de un estado consistente a otro nuevo. Por tanto,
estos programas no son transacciones.
Garantizar las propiedades de atomicidad y de durabilidad es responsabilidad del propio
sistema
de
bases
de
datos
—
concretamente
del
componente
de
gestión
de
transacciones. A falta de fallos, todas las transacciones se completan con éxito y la
atomicidad se consigue fácilmente. Sin embargo, debido a diversos tipos de fallos, puede
que las transacciones no siempre completen su ejecución con éxito. Si se va a asegurar la
propiedad de atomicidad, las transacciones fallidas no deben tener ningún efecto sobre el
estado de la base de datos. Por tanto, la base de datos debe restaurarse al estado en que
estaba antes de que la transacción en cuestión comience a ejecutarse. El sistema de bases
de datos, por tanto, debe realizar la recuperación de fallos, es decir, detectar los fallos del
sistema y restaurar la base de datos al estado que tenía antes de que ocurriera el fallo.
Finalmente,
cuando
varias
transacciones
actualizan
la
base
de
datos
de manera
concurrente, puede que no se preserve la consistencia de los datos, aunque cada una de
las transacciones sea correcta. Es responsabilidad del gestor de control de concurrencia
controlar la interacción entre las transacciones concurrentes para garantizar la consistencia
de la base de datos.
Puede que los sistemas de bases de datos diseñados para su empleo en computadoras
personales pequeñas no tengan todas estas características. Por ejemplo, muchos sistemas
pequeños sólo permiten que un usuario tenga acceso a la base de datos en cada momento.
Otros no ofrecen copias de seguridad ni recuperación, y dejan esas tareas a los usuarios.
Estas restricciones permiten un gestor de datos de menor tamaño, con menos requisitos de
recursos físicos —especialmente de memoria principal. Aunque tales enfoques de bajo
coste y bajas prestaciones son adecuados para bases de datos personales pequeñas,
resultan inadecuados para empresas medianas y grandes. El concepto de transacción se ha
aplicado ampliamente en los sistemas y en las aplicaciones de bases de datos. Aunque el
empleo inicial de las transacciones se produjo en las aplicaciones financieras, el concepto
se usa ahora en aplicaciones de tiempo real de telecomunicaciones, así como en la gestión
de las actividades de larga duración como el diseño de productos o los flujos de trabajo
administrativos.
Arquitectura de las bases de datos
Ahora es posible ofrecer una visión única (Figura 1.6) de los diversos componentes de los
sistemas de bases de datos y de las conexiones existentes entre ellos. La arquitectura de
los sistemas de bases de datos se ve muy influida por el sistema informático subyacente
sobre el que se ejecuta el sistema de bases de datos. Los sistemas de bases de datos
pueden estar centralizados o ser del tipo cliente-servidor, en los que una máquina servidora
ejecuta el trabajo en nombre de multitud de máquinas clientes. Los sistemas de bases de
datos pueden diseñarse también para aprovechar las arquitecturas de computadoras
paralelas.
Las
bases
de
datos
distribuidas
se
extienden
por
varias
máquinas
geográficamente separadas.

---

<!-- página 23 -->

Figura 1.6
Hoy en día la mayor parte de los usuarios de los sistemas de bases de datos no está
presente en el lugar físico en que se encuentra el sistema de bases de datos, sino que se
conectan a él a través de una red. Por tanto, se puede diferenciar entre los sistemas
clientes, en los que trabajan los usuarios remotos de la base de datos, y los sistemas
servidores, en los que se ejecutan los sistemas de bases de datos.
Las aplicaciones de bases de datos suelen dividirse en dos o tres capas, como puede verse
en la figura 1.7. En una arquitectura de dos capas, la aplicación se divide en un
componente que reside en la máquina cliente, que llama a la funcionalidad del sistema de
bases de datos en la máquina servidora mediante instrucciones del lenguaje de consultas.
Los estándares de interfaces de programas de aplicación como ODBC y JDBC se usan para

---

<!-- página 24 -->

la interacción entre el cliente y el servidor. En cambio, en una arquitectura de tres capas,
la máquina cliente actúa simplemente como una parte visible al usuario y no contiene
ninguna
Figura 1.7
llamada directa a la base de datos. En vez de eso, el extremo cliente se comunica con un
servidor de aplicaciones, generalmente mediante una interfaz de formularios. El servidor
de aplicaciones, a su vez, se comunica con el sistema de bases de datos para tener acceso
a los datos. La lógica de negocio de la aplicación, que establece las acciones que se
deben realizar según las condiciones reinantes, se incorpora en el servidor de aplicaciones,
en lugar de estar distribuida entre múltiples clientes. Las aplicaciones de tres capas resultan
más adecuadas para aplicaciones de gran tamaño y para las aplicaciones que se ejecutan
en la Web.
Usuarios de bases de datos e interfaces de usuario
Hay cuatro tipos diferentes de usuarios de los sistemas de bases de datos, diferenciados
por la forma en que esperan interactuar con el sistema. Se han diseñado diferentes tipos de
interfaces de usuario para los diferentes tipos de usuarios.
●
Los usuarios normales son usuarios no sofisticados que interactúan con el sistema
invocando alguno de los programas de aplicación que se han escrito previamente.
Por ejemplo, un cajero bancario que necesita transferir 50 pesos de la cuenta A a la
cuenta B invoca un programa llamado transferencia. Ese programa le pide al cajero
el importe de dinero que se va a transferir, la cuenta desde la que se va a transferir
el dinero y la cuenta a la que se va a transferir el dinero. Como ejemplo adicional,
considérese un usuario que desea averiguar el saldo de su cuenta en la Web. Ese
usuario puede acceder a un formulario en el que introduce su número de cuenta. Un
programa de aplicación en el servidor Web recupera entonces el saldo de la cuenta,
usando el número de cuenta proporcionado, y devuelve la información al usuario. La

---

<!-- página 25 -->

interfaz de usuario habitual para los usuarios normales es una interfaz con un
formulario, donde el usuario puede rellenar los campos correspondientes del
formulario.
Los usuarios normales también pueden limitarse a leer informes
generados por la base de datos.
●
Los programadores de aplicaciones son profesionales informáticos que escriben
programas de aplicación. Los programadores de aplicaciones pueden elegir entre
muchas herramientas para desarrollar las interfaces de usuario. Las herramientas de
desarrollo rápido de aplicaciones son herramientas que permiten al programador
de
aplicaciones
crear
formularios
e
informes
con
un
mínimo
esfuerzo
de
programación.
●
Los usuarios sofisticados interactúan con el sistema sin escribir programas. En su
lugar, formulan sus consultas en un lenguaje de consultas de bases de datos.
Remiten cada una de las consultas al procesador de consultas, cuya función es
dividir las instrucciones LMD en instrucciones que el gestor de almacenamiento
entienda. Los analistas que remiten las consultas para explorar los datos de la base
de datos entran en esta categoría.
●
Los usuarios especializados son usuarios sofisticados que escriben aplicaciones
de bases de datos especializadas que no encajan en el marco tradicional del
procesamiento de datos. Entre estas aplicaciones están los sistemas de diseño
asistido por computadora, los sistemas de bases de conocimientos y los sistemas
expertos, los sistemas que almacenan datos con tipos de datos complejos (por
ejemplo, los datos gráficos y los datos de sonido) y los sistemas de modelado del
entorno.
Administrador de bases de datos
Una de las principales razones de usar SGBD es tener un control centralizado tanto de los
datos como de los programas que tienen acceso a esos datos. La persona que tiene ese
control central sobre el sistema se denomina administrador de bases de datos. Las
funciones del ABD incluyen:
●
La definición del esquema. El ABD crea el esquema original de la base de datos
mediante la ejecución de un conjunto de instrucciones de definición de datos en el
LDD.
●
La definición de la estructura y del método de acceso.
●
La modificación del esquema y de la organización física. El ABD realiza
modificaciones
en el esquema y en la organización física para reflejar las
necesidades cambiantes de la organización, o para alterar la organización física a fin
de mejorar el rendimiento.
●
La concesión de autorización para el acceso a los datos. Medionte la concesión
de diferentes tipos de autorización, el administrador de bases de datos puede
regular las partes de la base de datos a las que puede tener acceso cada usuario.
La información de autorización se guarda en una estructura especial del sistema que
el SGBD consulta siempre que alguien intenta tener acceso a los datos del sistema.
●
El mantenimiento rutinario. Algunos ejemplos de las actividades de mantenimiento
rutinario del administrador de la base de datos son:

---

<!-- página 26 -->

○
Copia de seguridad periódica de la base de datos, bien sobre cinta o sobre
servidores remotos, para impedir la pérdida de datos en caso de desastres
como las inundaciones.
○
Asegurarse de que se dispone de suficiente espacio libre en disco para las
operaciones normales y aumentar el espacio en disco según sea necesario.
○
Supervisar los trabajos que se ejecuten en la base de datos y asegurarse de
que el rendimiento no se degrade debido a que algún usuario haya remitido
tareas muy costosas.
Historia de los sistemas de bases de datos
El procesamiento de datos impulsa el crecimiento de las computadoras, como lo ha hecho
desde los primeros días de las computadoras comerciales. De hecho, la automatización de
las tareas de procesamiento de datos precede a las computadoras. Las tarjetas perforadas,
inventadas por Herman Hollerith, se emplearon a principios del siglo XX para registrar los
datos del censo en Estados Unidos, y se usaron sistemas mecánicos para procesar las
tarjetas y para tabular los resultados. Las tarjetas perforadas se usaron posteriormente con
profusión como medio para introducir datos en las computadoras. Las técnicas de
almacenamiento y de procesamiento de datos han evolucionado a lo largo de los años:
●
Años cincuenta y primeros años sesenta: se desarrollaron las cintas magnéticas
para el almacenamiento de datos. Las tareas de procesamiento de datos como la
elaboración de nóminas se automatizan, con los datos almacenados en cintas. El
procesamiento de datos consistía en leer datos de una o varias cintas y escribir
datos en una nueva cinta. Los datos también se podían introducir desde paquetes de
tarjetas perforadas e imprimirse en impresoras. Por ejemplo, los aumentos de sueldo
se procesaban introduciendo los aumentos en las tarjetas perforadas y leyendo el
paquete de cintas perforadas de manera sincronizada con una cinta que contenía los
detalles principales de los salarios. Los registros debían estar en el mismo orden.
Los aumentos de sueldo se añadían a los sueldos leídos de la cinta maestra y se
escribían en una nueva cinta; esa nueva cinta se convertía en la nueva cinta
maestra. Las cintas (y los paquetes de tarjetas perforadas) sólo se podían leer
secuencialmente, y el tamaño de datos era mucho mayor que la memoria principal;
por tanto, los programas de procesamiento de datos se veían obligados a procesar
los datos en un orden determinado, leyendo y mezclando datos de las cintas y de los
paquetes de tarjetas perforadas.
●
Finales de los años sesenta y años setenta: el empleo generalizado de los discos
duros a finales de los años sesenta modificó en gran medida la situación del
procesamiento de datos, ya que permitieron el acceso directo a los datos. La
ubicación de los datos en disco no era importante, ya que se podía tener acceso a
cualquier posición del disco en sólo unas decenas de milisegundos. Los datos se
liberaron así de la tiranía de la secuencialidad. Con los discos pudieron crearse las
bases de datos de red y las bases de datos jerárquicas, que permitieron que las
estructuras de datos como las listas y los árboles pudieran almacenarse en disco.
Los programadores pudieron crear y manipular estas estructuras de datos. El
artículo histórico de Codd [1970] definió el modelo relacional y las formas no
procedimentales de consultar los datos en el modelo relacional, y así nacieron las
bases de datos relacionales. La simplicidad del modelo relacional y la posibilidad de

---

<!-- página 27 -->

ocultar
completamente
los
detalles
de
implementación
a los programadores
resultaron realmente atractivas. Codd obtuvo posteriormente el prestigioso premio
Turing de la ACM (Association of Computing Machinery, asociación de maquinaria
informática) por su trabajo.
●
Años ochenta: aunque académicamente interesante, el modelo relacional no se usó
inicialmente en la práctica debido a sus inconvenientes en cuanto a rendimiento; las
bases de datos relacionales no podían igualar el rendimiento de las bases de datos
de red y jerárquicas existentes. Esta situación cambió con System R, un proyecto
innovador del centro de investigación IBM Research que desarrolló técnicas para la
construcción de un sistema de bases de datos relacionales eficiente. El prototipo de
System R completamente funcional condujo al primer producto de bases de datos
relacionales de IBM: SQL/DS. Los primeros sistemas comerciales de bases de datos
relacionales, como DB2 de IBM, Oracle, Ingres y Rdb de DEC, desempeñaron un
importante papel en el desarrollo de técnicas para el procesamiento eficiente de las
consultas
declarativas.
En
los
primeros
años
ochenta
las
bases
de
datos
relacionales habían llegado a ser competitivas frente a los sistemas de bases de
datos jerárquicas y de red incluso en cuanto a rendimiento. Las bases de datos
relacionales eran tan sencillas de usar que finalmente reemplazaron a las bases de
datos jerárquicas y de red; los programadores que usaban esas bases de datos se
veían obligados a tratar muchos detalles de implementación de bajo nivel y tenían
que codificar sus consultas de forma procedimental. Lo que era aún más importante,
tenían que tener presente el rendimiento durante el diseño de los programas, lo que
suponía un gran esfuerzo. En cambio, en las bases de datos relacionales, casi todas
estas tareas de bajo nivel las realiza de manera automática el sistema de bases de
datos, lo que libera al programador para que se centre en el nivel lógico. Desde su
obtención de liderazgo en los años ochenta, el modelo relacional ha reinado sin
discusión entre todos los modelos de datos. Los años ochenta también fueron
testigos de una gran investigación en las bases de datos paralelas y distribuidas, así
como del trabajo inicial en las bases de datos orientadas a objetos.
●
Primeros años noventa: el lenguaje SQL se diseñó fundamentalmente para las
aplicaciones de ayuda a la toma de decisiones, que son intensivas en consultas,
mientras que el objetivo principal de las bases de datos en los años ochenta eran las
aplicaciones
de
procesamiento
de
transacciones,
que
son
intensivas
en
actualizaciones. La ayuda a la toma de decisiones y las consultas volvieron a
emerger como una importante área de aplicación para las bases de datos. El uso de
las herramientas para analizar grandes cantidades de datos experimentó un gran
crecimiento. En esta época muchas marcas de bases de datos introdujeron
productos de bases de datos paralelas. Las diferentes marcas de bases de datos
también comenzaron a añadir soporte relacional orientado a objetos a sus bases de
datos.
●
Finales
de
los
años
noventa
y
principios
del
siglo
XXI:
el
principal
acontecimiento fue el crecimiento explosivo de la Web. Las bases de datos se
implantaron mucho más ampliamente que nunca. Los sistemas de bases de datos
tenían que soportar tasas de procesamiento de transacciones muy elevadas, así
como una fiabilidad muy alta y tener disponibilidad 24 × 7 (disponibilidad 24 horas al
día y 7 días a la semana, lo que significa que no hay momentos de inactividad
debidos a actividades de mantenimiento planificadas). Los sistemas de bases de
datos también tenían que soportar interfaces Web para los datos.

---

<!-- página 29 -->

Unidad II - Requerimientos y modelado de BD
Modelado de Bases de datos
Requerimientos y modelado de Entidad Relación
El primer paso y el más crítico en el proceso de desarrollo de una base de datos es
determinar los requisitos de la base de datos y crear el modelo de base de datos conceptual
que represente y visualice estos requisitos. Los requisitos de la base de datos son
declaraciones que definen los metadatos (es decir, los detalles y las restricciones de los
datos) para la base de datos que se está desarrollando. Los requisitos pueden derivarse de
entrevistas con personas que conocen el dominio, documentación, políticas o una
combinación de estas y otras fuentes. Los requisitos debidamente recopilados deben indicar
claramente qué registrará la futura base de datos y de qué manera. El modelado
entidad-relación (ER en adelante), un método de modelado de bases de datos conceptual
ampliamente utilizado, es una técnica que permite la estructuración y organización del
proceso de recopilación de requisitos y proporciona una forma de representar gráficamente
los requisitos. En este tema, explicaremos cómo capturar correctamente los requisitos de la
base de datos y representarlos visualmente utilizando la técnica de modelado ER.
Construcciones básicas del modelado de ER
El resultado del modelado ER es un diagrama ER (DER), que sirve como modelo para la
base de datos. Dos construcciones básicas del diagrama ER son la entidad y la relación.
No existe una notación ER adoptada universalmente a la que se ajusten todos los proyectos
de bases de datos. En cambio, hay una variedad de notaciones ER disponibles en uso.
Según la notación ER que se utilice, las entidades y las relaciones se pueden representar
de forma diferente, pero siempre tienen el mismo significado. En este apunte, utilizaremos
una versión modificada de la notación Chen ER estándar y todas las construcciones se
describirán en el contexto de la notación elegida. Hemos elegido esta notación por las
siguientes razones:
●
Valor pedagógico: fácil de aprender y usar.
●
Completitud: Todos los conceptos básicos de ER están representados.
●
Claridad y visibilidad: Todos los conceptos están representados gráficamente y cada
concepto se distingue fácilmente.
●
Compatibilidad con el software de diseño usado: con este material usaremos la
herramienta de software de modelado de bases de datos ERDPlus (disponible en
erdplus.com), que utiliza la misma notación ER.
Entidades
Las entidades son construcciones que representan los conceptos que la base de datos
registrará. Son los componentes básicos de un diagrama ER. Las entidades representan
varias nociones del mundo real, como personas, lugares, objetos, eventos, elementos y

---

<!-- página 30 -->

otros conceptos. Por ejemplo, un diagrama ER para una empresa minorista puede contener
entidades como CLIENTE, TIENDA, PRODUCTO y TRANSACCIÓN. En un diagrama ER,
las entidades se representan como rectángulos, con el nombre de la entidad dentro del
rectángulo (en mayúscula y singular). Dentro de un diagrama ER, cada entidad debe tener
un nombre diferente. La figura 2.1 muestra ejemplos de dos entidades, CLIENTE y TIENDA.
Figura 2.1
Cada entidad representada contiene un número de instancias de entidad (miembros de
entidad). Por ejemplo, la entidad CLIENTE puede contener instancias de entidad como
Juan, Silvia y Pedro. Las entidades mismas se representan en los diagramas ER, mientras
que las instancias de entidad no. Sin embargo, las instancias de entidad eventualmente se
registrarán en la base de datos que se creará en base al diagrama ER.
Atributos (únicos y no únicos)
Cada entidad en un diagrama ER tiene atributos. Un atributo (de una entidad) describe una
característica de la entidad. Mientras que las entidades son construcciones que representan
los conceptos de dominio que la base de datos registra, los atributos representan los
detalles que se registrarán para cada instancia de entidad. Por ejemplo, para la entidad
CLIENTE, podemos decidir realizar un seguimiento de los siguientes atributos: ClienteID
(número de identificación del cliente), Nombre (nombre del cliente), Nacimiento (fecha de
nacimiento del cliente) y Genero (sexo del cliente). La figura 2.2 ilustra cómo se representan
los atributos en el diagrama ER. Cada atributo está representado por un óvalo que contiene
el nombre del atributo. Dentro de una entidad, cada nombre de atributo debe ser diferente.
Cada óvalo de atributo está conectado por una línea a su entidad. Un atributo único es un
atributo cuyo valor es diferente para cada instancia de entidad. Cada entidad regular debe
tener al menos un atributo único. En un diagrama ER, el nombre de un atributo único está
subrayado, como se muestra en la figura 2.2. Los requisitos para la base de datos ilustrados
en la figura 2.2 especifican que cada cliente en la base de datos tendrá un número de
identificación de cliente único (ClienteID), mientras que podríamos tener más de un cliente
con la misma fecha de nacimiento, nombre y/o género.
Figura 2.2

---

<!-- página 31 -->

Relaciones
En un diagrama ER, una entidad puede estar relacionada al menos a otra entidad a través
de una construcción llamada relación. Las relaciones son visualizadas en un diagrama
como un rombo, con una palabra o frase nombrando la relación dentro del rombo. El rombo
está conectado con líneas a las entidades que son parte de la relación.
Restricciones de cardinalidad
Las líneas que conectan la relación con las entidades incluyen símbolos que representan
cuántas instancias de una entidad se pueden asociar con instancias de otra entidad. Estos
símbolos se conocen como restricciones de cardinalidad. Considere el diagrama ER que
se muestra en la figura 2.3. El rombo con la frase "ReportaA" representa la relación entre
EMPLEADO y DEPARTAMENTO. Las restricciones de cardinalidad se marcan en un
diagrama ER como símbolos colocados junto a un rectángulo de entidad en la línea que
conecta el rectángulo de entidad con el rombo de relación.
Figura 2.3
Cada símbolo de restricción de cardinalidad se compone de dos partes:
●
Cardinalidad máxima: la parte del símbolo de restricción de cardinalidad más
cercana al rectángulo de entidad
●
Cardinalidad mínima (participación): la parte del símbolo de restricción de
cardinalidad más alejada del rectángulo de la entidad.
La cardinalidad máxima puede ser una (representada por una barra recta: |) o varias
(representada por el símbolo de una pata de gallo).
La participación puede ser opcional (representada por un símbolo circular: 0) u obligatoria
(representada por una barra recta: |).
La figura 2.4 muestra las cuatro restricciones de cardinalidad posibles para la Entidad A en
una Relación B.
La restricción de cardinalidad en un lado particular de la relación se
aplica a la entidad en el lado opuesto de la relación.
Observe en la figura 2.4 que el nombre de la entidad de la derecha (en los cuatro casos) se
deja en blanco para enfatizar que la restricción de cardinalidad representada a la derecha
se aplica a la entidad de la izquierda.

---

<!-- página 32 -->

Usaremos el diagrama ER de ejemplo que contiene la relación ReportaA (que se muestra
en la figura 2.3) para aclarar el concepto de restricciones de cardinalidad. Estos son los
requisitos que se utilizan como base para el diagrama ER que se muestra en la figura 2.3.
●
La base de datos hará un seguimiento de los empleados y departamentos.
●
Para cada empleado, realizaremos un seguimiento de su nombre y su identificación
única de empleado.
●
Para cada departamento, realizaremos un seguimiento de la identificación única del
departamento y su localización.
●
Cada empleado reporta exactamente a un departamento. Un departamento tiene
entre cero y muchos empleados que reportan a él.
Primero, considere el símbolo de restricción de cardinalidad “||” en el lado derecho del
rombo ReportaA en la figura 2.3. El símbolo de participación obligatoria (barra recta
izquierda, en este caso) indica que un empleado debe reportarse al menos a un
departamento. En otras palabras, la cardinalidad mínima de la entidad EMPLEADO en la
relación ReportaA es 1. El símbolo de cardinalidad máxima uno (barra recta derecha, en
este caso) indica que cada empleado puede informar a un departamento como máximo. En
otras palabras, la cardinalidad máxima de la entidad EMPLEADO en la relación ReportaA es
1. Por lo tanto, esos dos símbolos juntos indican que cada empleado informa exactamente a
un departamento.
Figura 2.4
A continuación, considere el símbolo de restricción de cardinalidad
en el lado izquierdo
del rombo ReportaA. El símbolo de participación opcional (símbolo circular) indica que un
departamento no tiene que tener empleados que le reporten (es decir, puede no tener
empleados que le reporten). En otras palabras, la cardinalidad mínima de la entidad
DEPARTAMENTO en la relación ReportaA es 0. El símbolo de cardinalidad máxima muchos
indica que un departamento puede tener muchos empleados que le reportan. En otras
palabras, la cardinalidad máxima de la entidad DEPARTAMENTO en la relación ReportaA
es muchos. Por lo tanto, esos dos símbolos juntos indican que un departamento en
particular puede tener muchos empleados a su cargo, pero no tiene por qué tener alguno.

---

<!-- página 33 -->

En otras palabras, un departamento tiene un mínimo de 0 empleados y un máximo de
muchos empleados.
Tenga en cuenta que la forma correcta de interpretar una relación en cualquier diagrama ER
es considerarla dos veces (una en cada dirección) aplicando la siguiente regla: rectángulo –
rombo – restricción de cardinalidad – rectángulo. Por ejemplo, observe cómo interpretamos
la relación "ReportaA":
●
Una dirección: rectángulo (un empleado) - rombo (reporta a) - restricción de
cardinalidad (exactamente uno) - rectángulo (departamento)
●
Dirección opuesta: rectángulo (un departamento) - rombo (tiene reportando a él) -
restricción de cardinalidad (entre cero y muchos) - rectángulo (empleados)
Para recapitular el concepto de relación y restricción de cardinalidad, observe algunas de
las diversas versiones posibles de la relación ReportaA que se muestran en la figura 2.5 (los
atributos de entidad se omiten por brevedad).
Los siguientes son requisitos para cada una de las versiones mostradas.
Versión A
●
Cada empleado reporta exactamente a un departamento. Cada departamento tiene
entre cero y muchos empleados que reportan a él.
Versión B
●
Un empleado puede informar a un departamento o a ninguno. Cada departamento
tiene entre cero y muchos empleados que reportan a él.
Versión C
●
Cada empleado reporta exactamente a un departamento. Un departamento debe
tener al menos un empleado que le informe, pero puede tener muchos empleados
que le informen.
Figura 2.5

---

<!-- página 34 -->

Versión D
●
Un empleado puede informar a un departamento o a ningún departamento. Un
departamento debe tener al menos un empleado que le informe, pero puede tener
muchos empleados que le informen.
Tipos de relaciones (Cardinalidad máxima)
La cardinalidad máxima en cualquier lado de la relación puede ser uno o varios. Por lo
tanto, al considerar la cardinalidad máxima sin participación, podemos clasificar cada
relación entre dos entidades en uno de los siguientes tres tipos:
●
relación uno a uno (1:1)
●
relación uno a muchos (1:M)
●
relación de muchos a muchos (M:N)
La figura 2.6 ilustra estos tres tipos de relaciones, en cuanto a la cardinalidad máxima (se
omite la participación para mayor claridad, ya que no afecta la cardinalidad máxima).
Figura 2.6
Figura 2.7
Figura 2.8
Las figuras 2.3 y 2.5 muestran ejemplos de relaciones 1:M. Otro ejemplo de una relación
1:M es mostrado en la figura 2.7. Esta relación refleja los siguientes requerimientos:

---

<!-- página 35 -->

●
Cada tienda está ubicada exactamente en una región. Cada región debe tener al
menos una tienda ubicada en ella, pero puede tener muchas tiendas ubicadas en
ella.
La figura 2.8 muestra un ejemplo de una relación M:N. Esta relación refleja los siguientes
requisitos:
●
Un empleado puede estar asignado a muchos proyectos, pero podría no asignársele
proyecto. Un proyecto debe tener al menos un empleado asignado, pero puede tener
muchos empleados asignados.
La figura 2.9 muestra un ejemplo de una relación 1:1. Esta relación refleja los siguientes
requisitos:
●
Cada empleado está asignado a un vehículo o ninguno. Cada vehículo está
asignado a exactamente un empleado.

---

<!-- página 36 -->

Ejercicio 1
●
La base de datos hará un seguimiento de zonas de matriculación de escribanos en
la provincia.
●
En la provincia hay 4 zonas en las que se distribuyen todos los departamentos.
●
Un departamento debe pertenecer a una zona como mínimo y máximo.
●
Una zona podrá abarcar varios departamentos y como mínimo, un departamento.
●
Se registran un número de ID de departamento y su nombre.
●
Cada zona estará identificada por un ID y su nombre.
●
Diseñar las entidades, atributos y relaciones necesarias para representar tal
situación.
●
Describir qué tipo de relación asocia las entidades.
●
Describir las cardinalidades mínimas y máximas.
Ejercicio 2
●
La base de datos hará un seguimiento de los escribanos en cada zona de la
provincia
●
Cada zona podrá contener varios escribanos y podrían haber zonas que no tengan
escribanos asignados aún
●
Los escribanos deberán ser asignados como máximo a una zona
●
Para cada zona registraremos el ID único de la misma y su nombre
●
Para los escribanos registraremos el ID de la matrícula (única), su número de
documento, apellido, nombres, celular y correo electrónico
●
Pueden haber casos de escribanos que no hayan sido asignados a zonas aún
●
Diseñar las entidades, atributos y relaciones necesarias para representar tal
situación
●
Describir qué tipo de relación asocia las entidades
●
Describir las cardinalidades mínimas y máximas
Ejercicio 3
●
La base de datos hará un seguimiento la venta de boletos para un espectáculo
musical
●
Cada boleto tendrá un número único para el evento y el nombre del evento
●
Del espectador registraremos su número de documento, apellido y nombres
●
Cada boleto puede ser vendido solo a una persona
●
Cada espectador podrá adquirir como máximo un boleto
●
Para ser considerado espectador, la persona deberá adquirir como mínimo, un
boleto
●
Pueden haber boletos sin vender
●
Diseñar las entidades, atributos y relaciones necesarias para representar tal
situación
●
Describir qué tipo de relación asocia las entidades
●
Describir las cardinalidades mínimas y máximas

---

<!-- página 37 -->

Ejercicio 4
●
La base de datos hará un seguimiento del uso de las herramientas de una empresa
de construcción por parte de sus operarios
●
De cada herramienta se registrará su ID único y el nombre de la misma
●
Pueden haber varias herramientas del mismo tipo, pero cada una tendrá una
identificación única
●
Por ejemplo podrán haber 10 llaves pico de loro cada una con su propia
identificación
●
De los operarios se registra su número de operario (único) y su nombre
●
Cada herramienta podrá ser usada por cualquier operario
●
Podrán haber herramientas que no sean usadas
●
Un operario podrá utilizar cualquier herramientas del conjunto o ninguna
●
Diseñar las entidades, atributos y relaciones necesarias para representar tal
situación
●
Describir qué tipo de relación asocia las entidades
●
Describir las cardinalidades mínimas y máximas

---

<!-- página 38 -->

Relaciones e instancias de relaciones
Recuerde que cada entidad tiene sus instancias. Por ejemplo, la entidad EMPLEADO puede
tener instancias de entidad empleado como Raul, Lisa, María, etc. Las entidades se
representan en los diagramas ER, mientras que las instancias de entidad no. Sin embargo,
las instancias de entidad finalmente se registran en la base de datos que se creará en
función del diagrama ER. Del mismo modo, las relaciones también tienen instancias. La
figura 2.10 ilustra una relación y un ejemplo de sus instancias.
Como se ilustra, las instancias de relación ocurren cuando una instancia de una entidad
está relacionada con una instancia de otra entidad a través de una relación. Tal como ocurre
con las entidades y sus instancias, las relaciones mismas se representan en los diagramas
ER, mientras que las instancias de relación no. Sin embargo, las instancias de relación
finalmente se registran en la base de datos que se crea en función del diagrama ER.
Figura 2.9
Figura 2.10
Nótese en la figura 2.10 que la entidad EMPLEADO tiene participación opcional en la
relación AsignadoA. Por eso, en la parte inferior de esta figura, es posible tener algunos de
los empleados reales (por ejemplo, Mario) sin líneas que los conecten con los proyectos
reales. Sin embargo, debido a que la entidad PROYECTO tiene una participación obligatoria

---

<!-- página 39 -->

en la relación AsignadoA, cada instancia de la entidad PROYECTO está conectada al
menos a una instancia de la entidad EMPLEADO.
También tenga en cuenta que AsignadoA es una relación M:N. Es por eso que hay
instancias de las entidades EMPLEADO y PROYECTO con múltiples líneas que las
conectan con las instancias de la otra entidad.
Atributos de relaciones
En algunos casos, las relaciones de muchos a muchos pueden tener sus propios atributos,
que se denominan atributos de relación.
Figura 2.11
La figura 2.11 ilustra tal caso. Los requisitos para este diagrama ER son los siguientes:
●
La base de datos mantendrá un registro de los estudiantes y las organizaciones del
campus.
●
Para cada estudiante, realizaremos un seguimiento de su ID de estudiante único, su
nombre y género.
●
Para cada organización, realizaremos un seguimiento de su ID de organización
única y la ubicación.
●
Cada alumno de la base de datos pertenece al menos a una organización y puede
pertenecer a varias organizaciones.
●
Cada organización en la base de datos tiene al menos un estudiante que le
pertenece y puede tener varios estudiantes.
●
Para cada instancia de un estudiante que pertenezca a una organización,
registraremos el rol del estudiante en la organización (p. ej., presidente,
vicepresidente, tesorero, miembro, etc.).
Tenga en cuenta que el último requisito (por cada instancia de un estudiante que pertenezca
a una organización, registraremos el rol del estudiante en la organización) implica que un
estudiante puede tener varios roles, uno para cada organización a la que pertenece. Si
incluimos el rol como un atributo (o varios atributos) de la entidad ESTUDIANTE, no
sabríamos en qué organización el estudiante tiene qué rol. De igual forma, una organización
puede tener múltiples roles, uno por cada estudiante que pertenezca a ella. Si incluimos el
rol como un atributo (o varios atributos) de la entidad ORGANIZACIÓN, no sabríamos qué
alumnos tienen qué roles en la organización. Por lo tanto, el único lugar apropiado para
incluir el atributo Rol es en la relación PerteneceA, como se muestra en la figura 2.11.

---

<!-- página 40 -->

A continuación, consideramos si las relaciones 1:1 o 1:M también pueden tener un atributo.
Para responder a esa pregunta, considere la figura 2.12, que muestra dos diagramas ER
ligeramente diferentes basados en estos requisitos:
●
La base de datos hará un seguimiento de los estudiantes y las universidades.
●
Para cada estudiante, realizaremos un seguimiento de su nombre y su identificación
de estudiante única.
●
Para cada universidad, realizaremos un seguimiento de su nombre único y su
ubicación.
●
Cada estudiante en la base de datos asiste exactamente a una universidad.
●
Cada universidad en la base de datos tiene varios estudiantes.
●
Para cada estudiante, hacemos un seguimiento de la fecha en que comenzó a asistir
a su universidad.
El diagrama superior en la figura 2.12 muestra una relación 1:M con un atributo. El diagrama
inferior se basa exactamente en los mismos requisitos, pero con la fecha de inicio en la
universidad del estudiante como un atributo FechaInicioUniv de la entidad ESTUDIANTE, en
lugar del atributo FechaInicio de la relación Asiste. Dado que un estudiante asiste a una sola
universidad, su fecha de inicio en esa universidad puede ser un atributo de la propia entidad
ESTUDIANTE. Como ilustra este ejemplo, un atributo de una relación 1:M se puede asignar
a la entidad cuya cardinalidad máxima en la relación es 1 (en este caso, la entidad
ESTUDIANTE). Más generalmente, se puede asignar un atributo de relación a la entidad
cuya cardinalidad máxima en la relación es 1 y, por lo tanto, no es necesario un atributo de
una relación 1:M o una relación 1:1. Por otro lado, como ilustramos en la figura 2.11, los
atributos son necesarios para algunas relaciones M:N.
Figura 2.12

---

<!-- página 41 -->

Ejemplo:
Requerimientos de bases de datos y diagrama ER
El siguiente ejemplo relacionado con la venta al por menor ilustra una colección de
requisitos de base de datos y el diagrama ER subsiguiente.
El departamento de ventas de la empresa de ventas al por menor ZAGI ha decidido crear
una base de datos que contiene los detalles de su proceso de ventas. Después de realizar
entrevistas dentro de la empresa y estudiar la documentación de la misma, el equipo de
diseño de la base de datos extrajo los siguientes requisitos para la futura base de datos:
La base de datos del departamento de ventas de la empresa minorista de ZAGI capturará
datos sobre lo siguiente:
●
Para cada producto que se vende: una identificación de producto (única) , nombre
del producto y precio.
●
Para cada categoría de producto: ID de categoría (único) y nombre de categoría.
●
Para cada proveedor: ID del proveedor (único) y nombre del proveedor.
●
Para cada cliente: ID de cliente (único), nombre y código postal.
●
Para cada tienda (sucursal): identificación de la tienda (única) y código postal.
●
Para cada región: ID de región (único) y nombre de región.
●
Para cada transacción de venta: ID de transacción (único) y fecha de transacción.
●
Cada producto es suministrado por exactamente un proveedor. Cada proveedor
suministra uno o más productos.
●
Cada producto pertenece exactamente a una categoría. Cada categoría contiene
uno o más productos.
●
Cada tienda está ubicada exactamente en una región. Cada región contiene una o
más tiendas.
●
Cada transacción de venta ocurre en una tienda. Cada tienda tiene una o más
transacciones que se llevan a cabo en ella.
●
Cada transacción de venta involucra exactamente a un cliente. Cada cliente puede
estar involucrado en una o más transacciones de venta.
●
Cada producto está incluido en una o más transacciones de venta. Cada transacción
de venta incluye uno o más productos.
●
Para cada instancia de un producto incluido en una transacción de venta, se registra
la cantidad vendida de ese producto en esa transacción.

---

<!-- página 42 -->

Figura 2.13
El diagrama ER basado en estos requisitos se muestra en la figura 2.13. Tenga en cuenta
que el conocimiento de la notación ER ayuda a los recopiladores de requisitos de la base de
datos a reunir requisitos estructurados y útiles para la futura base de datos. En otras
palabras, saber que se debe desarrollar un diagrama ER al finalizar el proceso de requisitos
de la base de datos ayuda a los recopiladores de requisitos de la base de datos a
concentrarse en hacer las preguntas correctas. Aquí se enumeran ejemplos de tales
preguntas (planteadas durante el proceso de recopilación de requisitos para el diagrama
que se muestra en la figura 2.13) y respuestas (recibidas durante el mismo proceso):
●
¿Qué le gustaría registrar en particular para cada cliente? (Identificación del cliente,
nombre y código postal)
●
¿El valor de identificación del cliente es único para cada cliente? (Sí)
●
¿El valor del nombre del cliente es único para cada cliente? (No)
●
¿Pertenece cada producto a una o varias categorías? (Uno)
●
¿Cada producto proviene de un solo proveedor? (Sí)
●
¿Registraría alguna vez a un proveedor que no suministre ningún producto? (No)
●
¿Lleva un registro de los clientes que aún no compraron nada (es decir, clientes que
aún no participaron en ninguna transacción de venta)? (No)

---

<!-- página 43 -->

Atributos compuestos
Además de los atributos regulares mostrados hasta ahora, los diagramas ER pueden
representar varios otros tipos de atributos. Un tipo de atributo adicional es un atributo
compuesto, un atributo que se compone de varios atributos. La figura 2.14 muestra un
atributo compuesto.
En la figura 2.14, el atributo NomCompleto (nombre completo del cliente) se compone de
dos componentes: el atributo Nombre (nombre del cliente) y el atributo Apellido (apellido del
cliente). El propósito de un atributo compuesto es indicar una situación en la que una
colección de atributos tiene un significado adicional, además de los significados individuales
de cada atributo. En la figura 2.14, la entidad CLIENTE tiene cinco atributos: ClienteID (que
representa el número de identificación único del cliente), Genero (que representa el sexo del
cliente), Nacimiento (que representa la fecha de nacimiento del cliente), Nombre (que
representa el nombre del cliente) y Apellido (que representa el apellido del cliente).
NomCompleto
no
es
un
atributo
adicional
de
la
entidad
CLIENTE.
En
cambio,
NomCompleto simplemente establece que cuando Nombre y Apellido se combinan, esta
combinación da como resultado el nombre completo del cliente.
La figura 2.15 muestra otro ejemplo de un atributo compuesto. La entidad TIENDA tiene un
total de seis atributos, cada uno de los cuales tiene su propio significado. Cuando los cinco
atributos Calle, Número, Ciudad, Departamento y Código Postal se consideran juntos,
tienen un significado adicional: Dirección de la tienda.
La figura 2.16 muestra un ejemplo de una entidad CLIENTE de una boutique, que tiene un
total de siete atributos. Esta exclusiva boutique de ropa para hombres hecha a medida
realiza un seguimiento del identificador único y el nombre del cliente. Además, la boutique
realiza un seguimiento de las cinco medidas de la ropa del cliente: entrepierna (largo de la
pierna), cintura, mangas (largo del brazo), espalda (ancho del hombro) y cuello (tamaño del
cuello). Este ejemplo ilustra cómo el mismo atributo simple puede usarse como componente
de más de un atributo compuesto. En este caso, la cintura es utilizada por dos atributos
compuestos diferentes. La combinación de entrepierna y cintura se usa para la talla de
pantalón, mientras que la combinación de cintura, espalda, cuello y mangas se usa para la
talla de camisa.
Figura 2.14

---

<!-- página 44 -->

Figura 2.15
Figura 2.16
Atributos compuestos con valores únicos
La figura 2.17 ilustra el caso de una entidad que tiene un atributo único compuesto. En la
entidad AULA que se muestra en la figura 2.17, ninguno de los tres atributos (Edificio,
Número de aula y Cantidad de asientos) son únicos. Los requisitos para esta entidad
indican lo siguiente:
●
Puede haber varias aulas en el mismo edificio (p. ej., varias aulas en el Edificio A).
●
Puede haber varios salones de clase con el mismo número de aula (p. ej., aula 111
en el edificio A y aula 111 en el edificio B).
●
Puede haber varias aulas con el mismo número de asientos (p. ej., varias aulas con
40 asientos).
Dado que ninguno de los tres atributos es único, esta entidad no tiene un atributo regular
(de un solo componente) que pueda servir como su identificador. Sin embargo, la
combinación de dos atributos, Edificio y Número de aula, es única (solo puede haber un
salón de clases en toda la base de datos resultante con una combinación particular de
valores para Edificio y Número de aula), y por lo tanto, un atributo compuesto que combina
estos dos atributos es único.

---

<!-- página 45 -->

Figura 2.17
Tenga en cuenta que el atributo compuesto único AulaID garantiza que la entidad AULA
cumpla con la regla de que cada entidad debe tener al menos un atributo único.
Múltiples atributos únicos (Claves candidatas)
La figura 2.18 ilustra un caso en el que una entidad tiene más de un atributo único. En tales
casos, cada atributo único también se denomina clave candidata. El término "clave
candidata" proviene del hecho de que una clave candidata es un "candidato" a elegir como
identificador principal (también conocido como clave principal) al implementar la base de
datos resultante. Es decir, una de las claves candidatas será elegida posteriormente como
clave principal de la tabla correspondiente a la entidad que contiene las claves candidatas.
Las claves primarias se discutirán posteriormente. En la figura 2.18, los atributos
EmpleadoID y SSN identifican de manera única las instancias individuales de la entidad
EMPLEADO. Por lo tanto, tanto EmpleadoID como el SSN son claves candidatas. Tenga en
cuenta que estos dos atributos únicos están subrayados. El atributo Salario no es único y,
por lo tanto, no está subrayado.
Una entidad puede tener claves candidatas regulares (de un solo componente) y
compuestas al mismo tiempo. El ejemplo de la figura 2.19 muestra la entidad VEHÍCULO
cuyo atributo NIV (número de identificación del vehículo) es único, al igual que el atributo
compuesto Patente, que se compone de los atributos Estado y Número de matrícula.
Figura 2.18

---

<!-- página 46 -->

Figura 2.19
Figura 2.20
Figura 2.21
Atributos multivaluados
Un atributo multivaluado se usa en casos donde las instancias de una entidad pueden
tener múltiples valores para el mismo atributo. La figura 2.20 muestra una entidad que
contiene un atributo multivaluado. El atributo multivaluado está representado por una línea
doble alrededor del óvalo. El diagrama ER de la figura 2.20 muestra que necesitamos
realizar un seguimiento de los múltiples números de teléfono de los empleados.
El atributo multivaluado se utiliza en casos en los que existe un número variable de valores
que se pueden asignar al atributo particular de la entidad. El ejemplo de la figura 2.20 es
aplicable a una situación en la que los empleados tienen una cantidad variable de números
de teléfono de los que queremos realizar un seguimiento. En particular, algunos empleados
pueden tener dos números de teléfono, otros empleados pueden tener más de dos números
de teléfono y otros empleados pueden tener solo un número de teléfono.

---

<!-- página 47 -->

Si, para cada empleado, queremos realizar un seguimiento de exactamente dos números de
teléfono (por ejemplo, el número de teléfono de la oficina y el número de teléfono celular),
no usaríamos un atributo multivaluado. Simplemente usaríamos dos atributos separados,
como se muestra en la figura 2.21.
Atributos derivados
Un atributo derivado es un atributo cuyo valor no se almacenará permanentemente en una
base de datos. En su lugar, el valor de un atributo derivado se calculará a partir de los
valores almacenados de otros atributos y/o datos adicionales disponibles (como la fecha
actual). La figura 2.22 muestra un pequeño ejemplo que ilustra un atributo derivado en un
modelo ER.
Un atributo derivado se representa mediante una línea oval discontinua. En este caso, el
atributo fecha de apertura es un atributo normal cuyo valor se almacenará en la base de
datos resultante. El atributo Antigüedad es un atributo derivado cuyo valor no se almacenará
en la base de datos resultante. En su lugar, el valor de Antigüedad se derivará del valor de
la fecha de apertura de la tienda y de la fecha actual. Si el atributo Antigüedad fuera un
atributo regular, su valor en la base de datos resultante se almacenaría y tendría que volver
a ingresarse manualmente con el paso del tiempo (una vez al año para cada tienda), o la
base de datos contendría información imprecisa. Al representar Antigüedad como un
atributo derivado, aseguramos que la base de datos posterior implementará este atributo
como una fórmula (Fecha de hoy - Fecha de apertura, expresada en años) que siempre
presentará un valor exacto del atributo Antiguedad a los usuarios de la base de datos.
Figura 2.22
Figura 2.23
La figura 2.23 muestra otro ejemplo que ilustra un atributo derivado. En este caso, los
valores para el atributo derivado NumeroTiendas se obtendrán contando cuántas instancias

---

<!-- página 48 -->

de la entidad TIENDA están conectadas a cada instancia de la entidad REGION a través de
las instancias de la relación Ubicada En.
En este ejemplo, para las regiones Este, Centro y Oeste, los valores del atributo
NumeroTiendas serán 1, 2 y 1, respectivamente. Si, por ejemplo, la entidad TIENDA obtiene
una nueva instancia, y si esta nueva tienda está conectada con la entidad REGION,
instancia Este, a través de una nueva instancia de la relación Ubicada En, entonces el valor
del atributo derivado NumeroTiendas para la región Este aumentará automáticamente del 1
al 2.
Atributos opcionales
La mayoría de los atributos de una entidad tendrán un valor para cada instancia de la
entidad, pero se puede permitir que algunos de los atributos no tengan un valor. Este
atributo se denomina atributo opcional. La figura 2.24 ilustra el ejemplo de un atributo
opcional. El ejemplo se basa en los siguientes requisitos:
Figura 2.24
●
Para cada empleado, realizamos un seguimiento de su ID de empleado único, y su
salario y bonificación anual. No todos los empleados tendrán un bono anual.
La entidad representada tiene un atributo opcional, mientras que el resto de los atributos
son atributos obligatorios. El atributo opcional se representa con una letra O mayúscula
entre paréntesis al final del nombre del atributo.
Ejemplo. Entidad conteniendo varios tipos de atributos
Para resumir los diversos tipos de atributos, la figura 2.25 muestra una entidad que contiene
varios tipos diferentes de atributos. Esta entidad refleja los siguientes requisitos:
●
La base de datos llevará un registro de los empleados.
●
Para cada empleado, realizaremos un seguimiento de lo siguiente: identificación
única de un empleado, correo electrónico único, nombre, apellido (el nombre y el
apellido se pueden combinar en un nombre completo), uno o más números de
teléfono, fecha de nacimiento, edad (que se calculará a partir de la fecha de
nacimiento y la actual), salario, bonificación (opcional), una o más habilidades,
número único de Seguro Social, la fecha de la primera contratación del empleado y
la cantidad de años que tiene ha trabajado en la empresa (que se computará a partir
de la fecha de contratación y la fecha actual).

---

<!-- página 49 -->

Figura 2.25
Cardinalidad máxima y mínima exacta en las relaciones
En algunos casos, la cardinalidad mínima y/o máxima exacta en las relaciones se conoce
de antemano. En nuestra notación, usamos pares de números entre paréntesis colocados
en las líneas de relación para representar los valores exactos de cardinalidad mínima y
máxima. El primer número del par, el número junto al paréntesis abierto, indica cardinalidad
mínima. El segundo número, el número al lado del paréntesis cerrado, indica cardinalidad
máxima. Estos pares de números se pueden colocar en cualquier lado o en ambos lados de
la relación, según las cardinalidades mínimas y máximas exactas que se conozcan de
antemano.
Por ejemplo, los requisitos para la relación InscriptoEn, que se muestra en la figura 2.26,
establecen lo siguiente:
●
Cada estudiante debe inscribirse en al menos 2 y como máximo 6 clases, mientras
que una clase debe tener inscritos en ella al menos cinco estudiantes y como
máximo 40 estudiantes.
Las cardinalidades máximas y mínimas específicas se representan mediante los pares de
números entre el rombo y los símbolos de restricción de cardinalidad.
Figura 2.26

---

<!-- página 50 -->

Figura 2.27
En esta notación, cuando representamos la cardinalidad mínima-máxima como un par entre
paréntesis, debemos mostrar ambos valores (mínimo y máximo), incluso si uno de ellos no
es específico. Por ejemplo, los requisitos para la relación InscriptoEn, que se muestran en la
figura 2.27, establecen:
●
Cada estudiante se inscribe en un máximo de 6 clases, pero no tiene que inscribirse
en ninguna. Una clase debe tener al menos 5 estudiantes inscritos en ella, pero
puede tener más de 5 estudiantes.
En este caso, la participación opcional de la entidad ESTUDIANTE en la relación
InscriptoEn se representa dos veces: una vez por el símbolo de participación opcional para
cardinalidad mínima, y otra vez por el número 0 como cardinalidad mínima en el par de
números que aparece entre la relación y el símbolo de restricción de cardinalidad. Además,
la cardinalidad máxima múltiple (pero sin un número específico) de la entidad CLASE se
representa dos veces: una vez con el símbolo de la pata de gallo para la cardinalidad
máxima, y nuevamente con la letra M como la cardinalidad máxima en el par de números
que aparece entre la cardinalidad símbolo y la relación.
Relaciones unarias y roles en las relaciones
El grado de una relación indica cuántas entidades están involucradas en una relación.
Hasta ahora, cada relación que hemos examinado implica dos entidades. Una relación entre
dos entidades se llama relación binaria o relación de grado 2 (porque involucra dos
entidades). Aunque la gran mayoría de las relaciones en los diagramas ER son relaciones
binarias, también pueden haber relaciones de otros grados. Una relación de grado 1,
también conocida como relación unaria (relación recursiva), ocurre cuando una entidad
está involucrada en una relación consigo misma. La figura 2.28 muestra ejemplos de tres
relaciones unarias:
1:M, M:N y 1:1.
Los requisitos para la figura 2.28, Ejemplo A, son:
●
Un cliente refiere entre cero y muchos clientes. Cada cliente es referido por otro
cliente o no es referido en absoluto.
Los requisitos para la figura 2.28, Ejemplo B, son:

---

<!-- página 51 -->

●
Un empleado asesora entre cero y muchos empleados. Un empleado es asesorado
por entre cero y muchos empleados.
Figura 2.28
Los requisitos para la figura 2.28, Ejemplo C, son:
●
En una base de datos para un evento de entrega de regalos, cada persona da un
regalo a exactamente una persona y cada persona recibe un regalo de exactamente
una persona.
Un rol de relación representa una sintaxis adicional que se puede usar en los diagramas
ER (a discreción del modelador de datos) para aclarar el rol de cada entidad en una
relación. Los roles de relación se pueden usar en relaciones de cualquier grado, pero su
utilidad es más evidente cuando se usan en relaciones unarias. Los roles de relación están
representados por el texto colocado junto a las líneas de relación. La figura 2.29 muestra
relaciones unarias con roles de relación específicos.
Figura 2.29
Los diagramas de la figura 2.29 ahora se pueden interpretar adicionalmente de la siguiente
manera.
Figura 2.29, Ejemplo A:

---

<!-- página 52 -->

●
Un cliente puede ser un referente y como tal puede referir cualquier número de
clientes. Un cliente no tiene que ser un referente.
●
Un cliente puede ser una parte referida y como tal puede ser referido por un solo
cliente. Un cliente no tiene que ser una parte referida.
Figura 2.29, Ejemplo B:
●
Un empleado puede ser asesor de cero a muchos empleados.
●
Un empleado puede ser asesorado por entre cero y muchos empleados.
Figura 2.29, Ejemplo C:
●
Una persona debe dar un regalo para exactamente una persona.
●
Una persona debe recibir un regalo de exactamente una persona.
La figura 2.30 muestra un ejemplo de roles de relación en una relación binaria.
Como ya mencionamos, el uso de roles de relación queda a discreción del modelador de
diagramas ER. Los roles de relación ciertamente pueden proporcionar aclaración en
algunos casos. Sin embargo, si se usan en exceso, también pueden resultar confusos. Por
ejemplo, en la figura 2.30, un observador competente probablemente no necesitaría los
roles de relación establecidos explícitamente para interpretar la relación "Buque". Por lo
tanto, el mismo diagrama ER sin los roles de relación sería igual de informativo y contendría
menos palabrería.
Figura 2.30
Relaciones múltiples entre la mismas entidades
No es inusual que las mismas entidades en un diagrama ER estén relacionadas a través de
más de una relación. La figura 2.31 muestra un ejemplo de tal escenario. El ejemplo se
basa en los siguientes requisitos.
●
Una empresa de transporte desea crear una base de datos para realizar un
seguimiento de sus empleados y paquetes.
●
Cada paquete es recogido por exactamente un empleado.
●
Cada empleado recoge varios paquetes.
●
Cada paquete es entregado por exactamente un empleado.
●
Cada empleado entrega múltiples paquetes.

---

<!-- página 53 -->

Figura 2.31
Entidad débil
Recuerde que cada entidad regular debe tener al menos un atributo único. Una entidad
débil es una construcción en un diagrama ER que se utiliza para representar entidades que
no tienen un atributo único propio. Una entidad débil está representada por una línea doble
que representa un marco de su rectángulo. Dentro de un diagrama ER, cada entidad débil
debe asociarse con su entidad propietaria a través de una relación de identificación.
Este tipo de relación se representa como un rombo de doble marco.
La figura 2.32 ilustra un ejemplo de una entidad débil. El ejemplo se basa en los siguientes
requisitos:
●
Una empresa de alquiler de departamentos desea crear una base de datos para
realizar un seguimiento de sus edificios y departamentos.
●
Para cada edificio, realizaremos un seguimiento de una identificación de edificio
única y la cantidad de pisos en el edificio.
●
Para cada departamento, realizaremos un seguimiento del número de departamento
y la cantidad de dormitorios en el departamento.
●
Cada edificio tiene varios departamentos y cada departamento está ubicado en un
edificio.
●
Podemos tener varios departamentos con el mismo número de departamento en
nuestra base de datos, pero dentro de un edificio cada departamento tendrá un
número de departamento diferente.

---

<!-- página 54 -->

Figura 2.32
Como indica el requisito, no existe un atributo único para la entidad DEPARTAMENTO. Sin
embargo, el atributo de número de departamento es único dentro de cada edificio. Este
atributo se denomina clave parcial y se representa en el diagrama ER mediante un
subrayado discontinuo. Una combinación de la clave parcial y el atributo único de la entidad
propietaria identifica de forma única cada instancia de la entidad débil. Por ejemplo, las
instancias de la entidad débil DEPARTAMENTO se identifican de forma única mediante la
combinación del valor de su clave parcial NroDepto y la clave principal EdificioID de su
entidad propietaria EDIFICIO, de la siguiente manera:
A 101, A 201, A 301, B 101, B 201, C 101, C 102, C 201.
El concepto de una entidad débil es en realidad similar al concepto de un atributo
compuesto multivaluado. La figura 2.33 ilustra este punto.
versus

---

<!-- página 55 -->

Figura 2.33
Ambos diagramas en la figura 2.33 representan los mismos requisitos. Sin embargo, la
notación de entidad débil permite representar una clave parcial, mientras que no existe tal
opción para el atributo compuesto multivaluado. Por ejemplo, en la parte superior de la
figura 2.33, podemos representar que cada número de departamento es único para los
departamentos dentro de un edificio, mientras que en la parte inferior de la figura 2.33 no
podemos.
Una entidad débil puede tener relaciones regulares (no identificables) con otras entidades.
En la figura 2.34 se da un ejemplo de una entidad débil involucrada en una relación de no
identificación. Si usáramos un atributo compuesto multivaluado en lugar de una entidad
débil, no podríamos representar tal relación.
Figura 2.34
Aunque las entidades débiles y los atributos compuestos multivaluados son similares a
primera vista, existen diferencias significativas entre estos dos conceptos, como acabamos
de ilustrar.

---

<!-- página 56 -->

Cada entidad débil siempre tiene la restricción de cardinalidad obligatoria uno en la relación
de identificación con su propietario. Esto asegura que cada instancia de una entidad débil
esté asociada con exactamente una instancia de su propietario. La entidad propietaria, por
otro
lado,
puede
tener
una
participación obligatoria u opcional en la relación de
identificación, ya que es posible tener entidades propietarias con instancias que no tienen
asociadas instancias de la entidad débil.
En la mayoría de los casos, una relación de identificación es una relación 1:M. Sin embargo,
es posible tener una relación de identificación 1:1, en cuyo caso no es necesario un atributo
de identificador parcial en la entidad débil. El ejemplo que se muestra en la figura 2.35
ilustra tal caso. El ejemplo se basa en los siguientes requisitos:
●
En nuestra base de datos, realizaremos un seguimiento de los empleados y sus
cónyuges.
●
Para cada empleado, realizaremos un seguimiento de su identificación y nombre
únicos.
●
Para cada cónyuge, mantendremos un registro de su nombre y fecha de nacimiento.
●
Un empleado tiene un cónyuge o no tiene cónyuge.
●
Cada cónyuge está casado con exactamente un empleado.
Figura 2.35
Tenga en cuenta que la entidad débil CÓNYUGE no tiene un identificador parcial porque
cada empleado puede estar asociado con un solo cónyuge; por lo tanto, no necesitamos un
identificador parcial para distinguir a un cónyuge del otro.
Convenciones para nombrar entidades, atributos y relaciones
En el proceso de modelado de ER, una buena práctica es adoptar ciertas pautas para
nombrar entidades, relaciones y atributos. La convención es usar todas las letras
mayúsculas para nombrar entidades y una combinación de letras mayúsculas y minúsculas
para nombrar atributos y relaciones.
Para nombrar entidades y atributos, una pauta común para mantener los diagramas ER lo
más legibles y claros posible es usar sustantivos singulares (en lugar de plurales). Por
ejemplo, los nombres de entidad ESTUDIANTE, TIENDA y PROYECTO son mejores
opciones que ESTUDIANTES, TIENDAS y PROYECTOS. De manera similar, el nombre de
atributo Teléfono es una mejor opción que el nombre de atributo Teléfonos, incluso en el
caso de un atributo con varios valores. La pluralidad de instancias en el caso de entidades y

---

<!-- página 57 -->

atributos multivaluados se entiende por la naturaleza de estas construcciones, sin
necesidad de utilizar una palabra en plural.
Para nombrar relaciones, es común usar verbos o frases verbales, en lugar de sustantivos.
Por ejemplo, Inspeccionar, Gestionar y Pertenece a son mejores opciones para nombres de
relaciones que Inspección, Gestión y Pertenencia.
Al nombrar entidades, atributos y relaciones, es recomendable ser lo más breve posible, sin
ser tan condensado como para oscurecer el significado de la construcción. Por ejemplo, en
el caso de un diagrama ER para una universidad, el nombre de entidad ESTUDIANTE sería
una mejor opción que ESTUDIANTE UNIVERSITARIO, que es innecesariamente prolijo, ya
que está claro que en este contexto, ESTUDIANTE se refiere a estudiantes universitarios.
Del mismo modo, usar EU como una abreviatura que significa "estudiante universitario"
puede ser demasiado críptico para el usuario promedio de la futura base de datos basada
en este diagrama ER. Eso no quiere decir que, en algunos casos, varias palabras o
abreviaturas no sean buenas opciones. Por ejemplo, SSN es una opción perfectamente
válida para el nombre de un atributo, debido a la comprensión generalizada del significado
de esta abreviatura como número de seguro social. Además, la frase de varias palabras
NoDePisos es una mejor opción para nombrar el atributo que indica el número de pisos
para la entidad EDIFICIO, que la sola palabra Piso, que es demasiado ambigua, o la
abreviatura NdP, que no es reconocible por la mayoría de los usuarios.
Como mencionamos al principio de este tema, una de las reglas básicas del modelado ER
es que cada atributo dentro de la misma entidad debe tener un nombre diferente. Una
buena regla de estilo del modelado ER es dar nombres diferentes a todos los atributos en
todo el diagrama ER. Por ejemplo, en lugar de usar la palabra Nombre para representar dos
atributos diferentes de dos entidades diferentes EMPLEADO y CLIENTE, usaríamos dos
palabras diferentes, EmpleadoNombre y ClienteNombre.
Las pautas establecidas aquí no son obligatorias y están sujetas a excepciones. Sin
embargo, cuando se aplican de manera consistente, estas convenciones generalmente dan
como resultado diagramas ER que son más legibles y más claros que los diagramas ER
creados sin ellos.
Modelado de ER mejorado
El término modelado de ER mejorado o extendido (EER) se refiere a una notación de ER
ampliada que representa conceptos adicionales más allá del modelado de ER estándar.
Damos una breve descripción general de EER. Si bien las extensiones de EER de los
conceptos tradicionales de ER tienen valor y uso, las bases de datos más comunes
relacionadas con la mayoría de los dominios se pueden modelar en gran parte mediante la
notación estándar de ER presentada hasta aquí. Un modelador de ER competente puede
aprender y aplicar extensiones de EER fácilmente, siempre y cuando sean necesarias.
Casos especiales de modelado ER
Lo que continúa cubre varios problemas adicionales relacionados con el modelado de ER.

---

<!-- página 58 -->

Relaciones M:N con múltiples instancias entre las mismas entidades
En algunos casos, las relaciones M:N pueden tener múltiples ocurrencias entre las mismas
instancias de las entidades involucradas. El siguiente ejemplo ilustra tal caso. Tenga en
cuenta los requisitos que se enumeran a continuación:
●
La base de datos mantendrá un registro de los empleados y las pruebas de
competencia que toman.
●
Para cada empleado, realizaremos un seguimiento de su ID único y nombre del
empleado.
●
Para cada prueba de competencia, realizaremos un seguimiento del nombre único
de la prueba de competencia y el costo de la prueba de competencia.
●
Cada empleado en la base de datos puede tomar entre cero y muchas pruebas de
competencia.
●
Cada prueba de competencia en la base de datos fue realizada por al menos un
empleado y podría haber sido realizada por varios empleados.
●
Por cada instancia en la que un empleado realice una prueba de competencia,
registraremos la calificación y la fecha de la prueba de competencia.
La figura 2.43 muestra un diagrama ER basado en estos requisitos. La figura 2.44 ilustra
algunos de los posibles casos de la relación que se muestra en la figura 2.43.
Si ahora agregamos una pequeña pero crítica adición a los requisitos anteriores,
cambiaremos fundamentalmente la naturaleza de la relación M:N representada:
●
Un empleado puede realizar la misma prueba de competencia más de una vez (p.
ej., si un empleado recibe una puntuación por debajo de la puntuación mínima, debe
volver a realizar la misma prueba de competencia, hasta que alcance la puntuación
mínima). Un empleado puede tomar solo una prueba de aptitud en la misma fecha.
Esta adición ahora permite múltiples instancias de una relación entre las mismas instancias
de entidades. Esto se ilustra en la figura 2.45, en la que el empleado Marcelo realiza la
misma prueba de competencia Mediación de conflictos tres veces.
Figura 2.43

---

<!-- página 59 -->

Figura 2.44
No podemos representar estos requisitos ampliados en un diagrama ER como una relación
M:N. En su lugar, utilizaremos una entidad débil como se muestra en la figura 2.46.
La razón por la que usamos una entidad débil es para representar el atributo Fecha como
una clave parcial. Ahora se pueden distinguir dos o más ocurrencias del mismo empleado
que realiza la misma prueba de competencia, incluso si se obtiene la misma puntuación. Por
ejemplo, suponga que un empleado realiza la misma prueba de competencia dos veces y
obtiene una puntuación de 40 cada vez, luego vuelve a realizar la misma prueba de
competencia por tercera vez y recibe la calificación mínima para aprobar de 75.
Figura 2.45

---

<!-- página 60 -->

Figura 2.46
La figura 2.48 muestra otro ejemplo de una relación M:N con múltiples ocurrencias entre
instancias de la misma entidad, representada como una entidad débil. Los requisitos para
este ejemplo son los siguientes.
●
Una empresa de alquiler de coches quiere realizar un seguimiento de sus coches y
de los clientes que los alquilan.
●
Para cada cliente, realizaremos un seguimiento de su ID único y nombre.
●
Para cada automóvil, realizaremos un seguimiento de su ID único y su marca.
●
Un cliente puede alquilar muchos coches, pero tiene que alquilar al menos uno. Un
coche puede ser alquilado por muchos clientes, pero es posible que tengamos
coches que nunca hayan sido alquilados.
●
Cada vez que un cliente alquila un automóvil, realizaremos un seguimiento de la
fecha de alquiler, la duración del alquiler y el precio por día.
●
Un cliente puede alquilar sólo un coche a la vez.
Tenga en cuenta que si agregamos una pequeña, pero crítica, adición a estos requisitos:
●
Cada alquiler en el que un cliente alquile un coche tiene su propio ID de alquiler
único;
el diagrama ER se vería como se muestra en la figura 2.49.
Dado que cada alquiler ahora tiene un atributo único, ya no representaremos el alquiler
como una entidad débil, sino como una entidad regular.
Figura 2.48

---

<!-- página 61 -->

Figura 2.49
Agregar un atributo de identificador único a los requisitos para una relación M:N
(especialmente relaciones M:N con atributos) transforma la relación M:N en una entidad
normal, como se ilustra en el ejemplo de la empresa de alquiler de automóviles de la figura
2.48. Agregar el identificador único de esa manera es una técnica comúnmente utilizada
para simplificar los diagramas ER y las bases de datos resultantes posteriores.
Entidades asociativas
Una entidad asociativa es una construcción utilizada como una forma alternativa de
representar las relaciones M:N. Una entidad asociativa se representa mediante un
rectángulo con un rombo en su interior. Las entidades asociativas no tienen atributos únicos
o parcialmente únicos y, a menudo, no tienen ningún atributo.
La figura 2.50 muestra una relación M:N y su representación como entidad asociativa. Los
diagramas superior e inferior de la figura 2.50 son equivalentes entre sí y ambos se basan
exactamente en los mismos requisitos. Dado que la relación AsignadoA no tiene un atributo,
la entidad asociativa equivalente ASIGNACIÓN tampoco tiene un atributo.
Tenga en cuenta que la entidad EMPLEADO tiene una participación opcional en la relación
AsignadoA en el diagrama superior de la figura 2.50. De manera equivalente, la entidad
EMPLEADO tiene una participación opcional en la relación Incluye con la entidad asociativa
ASIGNACIÓN en el diagrama inferior de la figura 2.50. Por otro lado, la entidad PROYECTO
tiene una participación obligatoria en la relación AsignadoA en el diagrama superior de la
figura 2.50. De manera equivalente, la entidad PROYECTO tiene una participación
obligatoria en la relación EsPara con la entidad asociativa ASIGNACIÓN en el diagrama
inferior de la figura 2.50. También tenga en cuenta que las restricciones de cardinalidad para
la propia entidad asociativa en ambas relaciones son obligatorias (este es siempre el caso
de las entidades asociativas).

---

<!-- página 62 -->

La figura 2.51 muestra una relación unaria M:N y su representación como una entidad
asociativa. Los diagramas superior e inferior de la figura 2.51 son equivalentes entre sí y
ambos se basan exactamente en los mismos requisitos.
Figura 2.50
Figura 2.51

---

<!-- página 63 -->

Figura 2.52
La figura 2.52 muestra una relación M:N con un atributo y su representación como entidad
asociativa. Los diagramas superior e inferior de la figura 2.52 son equivalentes entre sí y
ambos se basan exactamente en los mismos requisitos. Dado que la relación Incluye tiene
un atributo Cantidad en el diagrama superior, la entidad asociativa equivalente ELEMENTO
también tiene el mismo atributo Cantidad en el diagrama inferior. Cada transacción de venta
puede incluir muchos productos en diferentes cantidades, como se muestra en el diagrama
superior. Por lo tanto, en el diagrama inferior, cada transacción de venta puede tener
muchos elementos, donde cada elemento representa la venta de un producto y su cantidad
dentro de una transacción de venta.
Las entidades asociativas no son construcciones necesarias para representar relaciones
binarias o unarias. Como ilustramos en los ejemplos anteriores, para las relaciones binarias
o unarias, las entidades asociativas son simplemente otra forma de representar una relación
que se puede representar fácilmente sin usar una entidad asociativa. Sin embargo, como
mostramos en la siguiente sección, para las relaciones con un grado superior a 2, como las
relaciones ternarias, las entidades asociativas proporcionan una forma de eliminar posibles
ambigüedades en los diagramas ER.
Relaciones ternarias o superiores
Una relación de grado 3, que involucra a tres entidades, también se conoce como relación
ternaria. Para ilustrar una relación ternaria, utilizaremos el siguiente ejemplo:
Una empresa desea realizar un seguimiento de sus proveedores, componentes y productos.
En particular, la empresa desea realizar un seguimiento de qué proveedor proporciona qué
componente para qué producto. Durante el proceso de recopilación de requisitos, la
empresa proporcionó los siguientes detalles:
●
Tenemos múltiples productos.
●
Contamos con múltiples proveedores.
●
Tenemos múltiples componentes.

---

<!-- página 64 -->

●
Realizaremos un seguimiento de qué proveedores proporcionan qué componentes
para qué producto.
●
Cada producto contiene uno o más componentes, cada uno de los cuales es
proporcionado por uno o más proveedores.
●
Cada proveedor proporciona entre cero y muchos componentes para usarlos entre
cero y muchos productos.
●
Cada componente es proporcionado por uno o varios proveedores para uno o varios
productos.
La simple creación de tres relaciones binarias entre las tres entidades no representará
completamente los requisitos anteriores. La figura 2.53 muestra tres relaciones que
representan qué producto está asociado con qué proveedor, qué proveedor está asociado
con qué componente y qué componente está asociado con qué producto (para abreviar,
todas las figuras en esta sección se muestran sin atributos de entidad). Sin embargo, la
base de datos basada en el diagrama de la figura 2.53 no mantendría un registro de qué
proveedores proporcionan qué componentes para qué producto.
Por ejemplo, en la base de datos resultante del diagrama, podríamos representar que los
proveedores A1 y A2 son los proveedores del componente B, y que el componente B es uno
de los componentes del producto C. Sin embargo, supongamos que el proveedor A1
proporciona el componente B para el producto C, y que el proveedor A2 no proporciona el
componente B para el producto C (es decir, el proveedor A2 proporciona el componente B,
pero no para el producto C). La base de datos resultante del diagrama 2.52 no pudo
representar tal escenario.
Figura 2.53

---

<!-- página 65 -->

Figura 2.54
Para acomodar estos escenarios perfectamente plausibles, las tres entidades deben estar
conectadas con una relación. En otras palabras, se debe crear una relación ternaria.
Una cuestión problemática con las relaciones ternarias es que no es posible mostrar sin
ambigüedades las restricciones de cardinalidad en una relación ternaria en todas las
notaciones. Observe la figura 2.54, que muestra la relación ternaria Proporciona que
involucra a las entidades PROVEEDOR, PRODUCTO y COMPONENTE. La razón por la
que no hay restricciones de cardinalidad en esta figura es que no es posible asignar
restricciones de cardinalidad sin ambigüedades utilizando la notación elegida.
No está claro en el diagrama ER de la figura 2.54 dónde colocaríamos un símbolo que
indica que podemos registrar algunos proveedores que no proporcionan ningún componente
para ningún producto. Si ponemos un símbolo opcional en el lado de los componentes de la
relación,
simplemente
no está claro si estamos diciendo que queremos hacer un
seguimiento de los proveedores que no proporcionan ningún componente para los
productos, o si estamos diciendo que queremos mantener Seguimiento de productos para
los que ningún proveedor proporciona componentes.
En otras palabras, simplemente no podemos representar cardinalidades sin ambigüedades
en una relación ternaria. Sin embargo, si usamos una entidad asociativa en su lugar, como
se muestra en la figura 2.55, entonces podemos representar la relación ternaria con todas
sus restricciones de cardinalidad necesarias sin ambigüedades.
Hay otro enfoque para representar todas las instancias de proveedores que proporcionan
componentes para productos. Si creamos una entidad PCP que describe un Proveedor que
proporciona un Componente para un Producto, y asociamos un valor único del mismo con
cada instancia separada de un proveedor que proporciona un componente para un
producto, evitaríamos la necesidad de una relación ternaria, como se muestra en la figura
2.56. En esta figura, la relación ternaria se reemplaza por una entidad regular PCP.
Además, ahora también estamos registrando cuándo una entidad en particular comenzó a
proporcionar un componente en particular para un producto en particular.

---

<!-- página 66 -->

Figura 2.55
Figura 2.56
Otra cosa a tener en cuenta sobre las relaciones ternarias es que, además de ser raras, son
aplicables como relaciones de muchos a muchos a muchos. Para ilustrar, considere la figura

---

<!-- página 67 -->

2.57, que en lugar de una relación de muchos a muchos a muchos, muestra una relación
ternaria de muchos a muchos a uno.
Figura 2.57
Figura 2.58
Los requisitos para este diagrama establecen que cada componente es suministrado
exclusivamente por un proveedor para un producto. Por lo tanto, el diagrama podría

---

<!-- página 68 -->

haberse simplificado como se muestra en la figura 2.58, eliminando la necesidad de una
relación ternaria.
En la práctica, las relaciones ternarias son relativamente raras, y las relaciones de grado
superior a 3 son aún más raras. En la mayoría de los casos, cuando un diseñador tiene la
tentación de crear relaciones de grados superiores a 2, debe explorar la posibilidad de crear
entidades adicionales en su lugar.

---

<!-- página 69 -->

Unidad III - Modelado de de BD Relacionales
Introducción al modelado relacional
Recordemos que el término "modelo de base de datos lógico" se refiere al modelo de base
de datos que puede implementar el software DBMS. El modelo de base de datos lógico más
utilizado es el modelo de base de datos relacional. Una base de datos que se modela
utilizando el modelo de base de datos relacional se conoce como base de datos
relacional.
Una vez que los requisitos de la base de datos se recopilan y visualizan como un diagrama
ER, el siguiente paso para crear una base de datos relacional es mapear (convertir) el
diagrama ER en un modelo de base de datos lógico representado como un esquema
relacional. Un esquema relacional es una representación visual del modelo de base de
datos relacional.
La mayoría de los paquetes de software DBMS comerciales contemporáneos, como Oracle,
MySQL, Microsoft SQL Server, PostgreSQL, Teradata, IBM DB2 y Microsoft Access, son
paquetes de software DBMS relacionales (RDBMS). Se basan en el modelo de base de
datos relacional y se utilizan para implementar bases de datos relacionales.
En este capítulo, describiremos los conceptos básicos del modelo de base de datos
relacional y explicaremos cómo mapear correctamente un diagrama ER en un esquema
relacional.
Conceptos básicos
La construcción principal en el modelo de base de datos relacional es una relación, que es
una tabla que contiene filas y columnas. Una base de datos relacional es una colección de
relaciones relacionadas dentro de la cual cada relación tiene un nombre único.
A veces también se hace referencia a una relación como una tabla relacional o incluso
simplemente una tabla. Una columna en una relación a veces se denomina campo o
atributo (de una relación). Una fila en una relación a veces se denomina tupla o registro.
La tabla 3.1 resume los sinónimos utilizados en la terminología de las bases de datos
relacionales.
Tabla 3.1
Como se muestra en la tabla 3.1, es una práctica común referirse a una relación como tabla.
Sin embargo, es importante tener en cuenta que si bien toda relación es una tabla, no toda

---

<!-- página 70 -->

tabla es una relación. Para que una tabla sea una relación, deben cumplirse las siguientes
condiciones:
1.
Cada columna debe tener un nombre. Dentro de una tabla, cada nombre de columna
debe ser único.
2.
Dentro de una tabla, cada fila debe ser única.
3.
Todos los valores de cada columna deben ser del mismo dominio (predefinido).
4.
Dentro de cada fila, cada valor en cada columna debe tener un solo valor (un valor
de un dominio predefinido, dentro de cada fila en cada columna). No se permiten
múltiples valores del contenido representado por la columna en ninguna fila de la
tabla.
Figura 3.1
Ilustraremos estas reglas con el ejemplo que se muestra en la figura 3.1, en el que dos
tablas mantienen un registro de la información de los empleados. Suponga que en la tabla
que contiene la información de los empleados, el dominio predefinido para cada una de las
columnas es el siguiente:
●
Empleado ID - cuatro dígitos
●
Nombre - hasta 20 caracteres
●
Género - carácter M o F
●
Teléfono - letra x (indicando extensión), seguida de tres dígitos
●
Nacimiento - una fecha (día, mes, año)

---

<!-- página 71 -->

La parte superior de la figura 3.1 muestra una tabla relacional que satisface las condiciones
enumeradas anteriormente: cada columna tiene un nombre único, cada fila es diferente,
todas las filas de cada columna tienen entradas de un solo valor y todos los valores de cada
columna pertenecen al mismo dominio.
La parte inferior de la figura 3.1 muestra una tabla no relacional (es decir, una tabla que no
es una relación) que viola todas las condiciones enumeradas anteriormente:
●
Dos columnas tienen el mismo nombre (dos columnas se llaman Info).
●
Dos de las filas son idénticas (la primera fila y la tercera fila son idénticas).
●
Una de las filas contiene varias entradas en la columna de teléfono (la cuarta fila
tiene dos números de teléfono).
●
Una de las entradas tiene un valor para la columna nacimiento que no es del mismo
dominio predefinido que los otros valores en la columna ("Hace 42 años" no es una
fecha).
Tenga en cuenta que ambas tablas podrían haberse implementado como se muestra en una
herramienta de hoja de cálculo, como Excel o Calc. Sin embargo, solo la tabla superior
podría haberse implementado con un DBMS relacional. Un paquete DBMS relacional no
permitiría la implementación de la tabla inferior. En cambio, durante un intento de
implementar la tabla inferior, un DBMS relacional mostraría mensajes de error para las
violaciones.
Además de las cuatro condiciones para las tablas relacionales enumeradas anteriormente,
se cumplen dos propiedades adicionales para cada tabla relacional:
5.
El orden de las columnas es irrelevante.
6.
El orden de las filas es irrelevante.
Estas dos propiedades simplemente establecen que no importa de qué manera se ordenen,
re ordenen o no ordenen las filas y/o columnas de una tabla relacional, la tabla contiene la
misma información y aún se considera que es la misma tabla. Cuando se recurre tanto a las
filas como a las columnas de una tabla existente, cada fila aún contiene la misma
información (solo que en un orden diferente) y la tabla aún contiene las mismas filas (solo
que en un orden diferente). El ejemplo de la figura 3.2 ilustra este punto. Muestra la misma
relación cuyas columnas y filas aparecen en diferente orden.

---

<!-- página 72 -->

Figura 3.2
Clave primaria
Cada relación tiene una columna (o un conjunto de columnas en algunos casos) que sirve
como clave primaria. El propósito de la clave primaria es distinguir una fila de otra en una
relación. La siguiente es una definición de una clave primaria.
Clave Primaria
Cada relación debe tener una clave primaria, que es una columna (o un conjunto
de columnas) cuyo valor es único para cada fila.
En la relación EMPLEADO que se muestra en la figura 3.3, la columna EmpID sirve como
clave primaria. Tenga en cuenta que el nombre de la columna de clave principal está
subrayado para distinguirlo de las otras columnas de la relación.

---

<!-- página 73 -->

Figura 3.3
En este ejemplo, a cada empleado se le asigna un valor EmpID único. Otras columnas en
esta relación no podrían servir como clave primaria debido al hecho de que, como se ilustra
en la figura 3.3, varios empleados pueden tener asignado el mismo nombre, el mismo
género, la misma fecha de nacimiento o el mismo número de teléfono.
Mapeo de Entidades a Relaciones
Como mencionamos, una vez que se construye un diagrama ER, posteriormente se mapea
en una colección de relaciones. Este proceso comienza mapeando entidades en relaciones.
Cada entidad regular se convierte en una relación y cada atributo regular de una entidad
regular se convierte en una columna de la relación recién creada. Si una entidad tiene un
solo atributo único, entonces ese atributo se convierte en la clave principal en la relación
mapeada resultante.
En la figura 3.4 se muestra un ejemplo de una entidad mapeada en una relación. Una
relación se representa como un rectángulo que contiene los nombres de todas las columnas
de la relación. Tenga en cuenta que el nombre de la columna ClienteID está subrayado para
indicar que ClienteID es la clave primaria de la relación CLIENTE.
Una vez que la relación mapeada se crea como parte de una base de datos relacional
implementada, se puede llenar con datos, como se muestra en la figura 3.5, que muestra
datos de muestra para la relación CLIENTE.

---

<!-- página 74 -->

Figura 3.4
Figura 3.5
Mapeo de entidades con atributos compuestos en relaciones
Si una entidad contiene atributos compuestos, cada componente de un atributo compuesto
se asigna como una columna de una relación, mientras que el atributo compuesto en sí no
aparece en la relación asignada.

---

<!-- página 75 -->

Figura 3.6
Figura 3.7
La figura 3.6 muestra un ejemplo de mapeo de una entidad con un atributo compuesto.
Tenga en cuenta que el nombre del atributo compuesto no aparece en la relación asignada.
Una vez que la relación mapeada se crea como parte de una base de datos relacional
implementada, se puede llenar con datos, como se muestra en la figura 3.7.

---

<!-- página 76 -->

Mapeo de entidades con atributos compuestos únicos en
relaciones
Recordemos que una entidad puede tener un atributo compuesto único. La figura 3.9 ilustra
cómo una entidad cuyo atributo único es un atributo compuesto se asigna a una relación.
Tenga en cuenta que en la relación resultante, los nombres de las columnas Edificio y
NumAula están subrayados porque, combinados, forman la clave primaria de la relación
AULA. Una clave primaria que se compone de varios atributos se denomina clave primaria
compuesta. La figura 3.10 muestra la relación AULA con registros de datos de muestra que
representan cuatro aulas diferentes y su capacidad de asientos. Tenga en cuenta que
ninguna de las columnas contiene valores únicos. Sin embargo, para cada fila, la
combinación de valores Edificio y NumAula es única.
Figura 3.9

---

<!-- página 77 -->

Figura 3.10
Mapeo de entidades con atributos opcionales en relaciones
Recordemos que las entidades pueden contener atributos opcionales, atributos que pueden
estar sin un valor asignado. Cuando los atributos opcionales se asignan a relaciones, las
columnas opcionales resultantes se marcan como (O), como se ilustra en el ejemplo que se
muestra en la figura 3.11.
Figura 3.11
Figura 3.12
Una vez que la relación que se muestra en la figura 3.11 se implementa como parte de una
base de datos relacional, se puede llenar con datos, como se muestra en la figura 3.12. El

---

<!-- página 78 -->

atributo Bono es opcional y, en consecuencia, se permiten las filas sin valor en la columna
Bono.
Tenga en cuenta que la primera y la última fila de la tabla EMPLEADO que se muestra en la
figura 3.12 no tienen ningún valor asignado en la columna Bono. En la terminología de la
base de datos, una entrada sin completar también se conoce como "nula", que significa "sin
valor". Por tanto, podemos decir que el primer y el último registro tienen valores nulos en la
columna Bono.
Restricción de integridad de la entidad
El término "restricción" se refiere a una regla que una base de datos relacional debe cumplir
para ser válida. La restricción de integridad de la entidad es una regla de base de datos
relacional que establece que todas las columnas de clave primaria deben tener valores.
Restricción de integridad de la entidad
En una tabla relacional, ninguna columna de clave principal puede tener valores
nulos (vacíos).
En otras palabras, la restricción de integridad de la entidad es una regla que establece que
ninguna columna de clave primaria puede ser opcional. Cada RDBMS hace cumplir esta
regla.
Por ejemplo, en la figura 3.13, cada registro en la relación EMPLEADO debe tener un valor
en la columna EmpleadoID, porque la columna EmpleadoID es la clave principal. Un valor
faltante para EmpleadoID constituye una violación de la restricción de integridad de la
entidad. Un RDBMS no permitiría insertar un registro en la relación EMPLEADO sin un valor
para la columna EmpleadoID.
De manera similar, en la figura 3.14, cada registro en la relación AULA debe tener un valor
en las columnas Edificio y NumAula porque ambas columnas forman una clave primaria
compuesta.

---

<!-- página 79 -->

Figura 3.13
Figura 3.14
Clave Foránea
Durante el proceso de mapeo de diagramas ER en esquemas relacionales, además de
mapear entidades, también se deben mapear relaciones. La clave foránea (externa) es un
mecanismo que se utiliza para representar relaciones en el modelo de base de datos
relacional. Una clave foránea se define de la siguiente manera:
Clave Foránea
Una clave foránea es una columna en una relación que hace referencia a una
columna de clave primaria en otra relación (referida).
Por cada aparición de una clave foránea, el esquema relacional contiene una línea que
apunta desde la clave foránea a la clave primaria correspondiente.
Los ejemplos de este capítulo ilustran el concepto de clave foránea, su representación en el
esquema relacional y cómo se utiliza para implementar relaciones uno a muchos (1:M),
muchos a muchos (M:N) y uno a uno (1:1) en el modelo de base de datos relacional.
Mapeo de relaciones en construcciones de bases de datos
relacionales
Como mostramos, las entidades en el diagrama ER se asignan como relaciones. A
continuación se describe cómo se mapean las relaciones en un esquema relacional.

---

<!-- página 80 -->

Mapeo de relaciones 1:M
Veamos la regla de mapeo de relaciones 1:M:
La relación asignada desde la entidad del lado M de la relación 1:M tiene una clave
externa que corresponde a la clave principal de la relación asignada desde el lado 1 de
la relación 1:M.
El ejemplo de la figura 3.15 ilustra cómo se aplica esta regla. En la relación 1:M ReportaA,
la entidad EMPLEADO está en el lado M y la entidad DEPARTAMENTO está en el lado 1.
Dado que la entidad EMPLEADO está en el lado M de la relación 1:M ReportaA, la relación
resultante EMPLEADO tiene una columna de clave externa (FK) adicional DepartamentoID
que corresponde a la clave principal de la relación DEPARTAMENTO. El esquema
relacional de la figura 3.15 contiene una línea que apunta desde la columna de clave
externa DepartamentoID en la relación EMPLEADO a la columna de clave primaria
correspondiente DepartamentoID en la relación DEPARTAMENTO.
Una vez que el esquema relacional que se muestra en la figura 3.15 se implementa como
una base de datos relacional, se puede llenar con datos, como se muestra en la figura 3.16.
Figura 3.15

---

<!-- página 81 -->

Figura 3.16
Observe cómo el valor de la clave externa (valor de la columna DepartamentoID en la
relación EMPLEADO) conecta a cada empleado con el departamento del que depende.
Ahora discutiremos el efecto de la participación opcional y obligatoria en el lado 1 y muchos
de una relación en una base de datos relacional resultante.
Participación obligatoria en el lado 1
Observe el efecto de la participación obligatoria en el lado 1 de una relación. Observe en la
figura 3.15 que debido a que la relación EMPLEADO tiene una participación obligatoria en la
relación ReportaA, la columna de clave externa DepartamentoID en la relación EMPLEADO
es una columna requerida (no opcional). Por lo tanto, en la figura 3.16, cada fila en relación
EMPLEADO tiene un valor en la columna DepartamentoID. En otras palabras, no hay
valores nulos en la columna DepartamentoID de la relación EMPLEADO.
Participación obligatoria en el lado M
Observe el efecto de la participación obligatoria en el lado M de una relación. Debido a la
participación obligatoria en el lado M de la relación ReportaA por parte de la relación
DEPARTAMENTO en la figura 3.15, en la figura 3.16 se hace referencia a todos los
departamentos que se muestran en la relación DEPARTAMENTO mediante al menos un
valor en la columna DepartamentoID de la relación EMPLEADO. En otras palabras, no hay
ningún registro en la relación DEPARTAMENTO al que no haga referencia un registro en la
relación EMPLEADO. Los empleados (1234, Betiana) y (3456, Roberto) hacen referencia al
departamento (1, Suite A), mientras que los empleados (2345, Mónica) y (1324, Eduardo)
hacen referencia al departamento (2, Suite B).
Participación opcional en el lado 1

---

<!-- página 82 -->

El efecto de la participación opcional en el lado 1 de una relación se ilustra en el ejemplo de
la figura 3.17. En este ejemplo, la entidad EMPLEADO tiene una participación opcional en la
relación ReportaA y, por lo tanto, la columna de clave externa DepartamentoID en la
relación EMPLEADO es una columna opcional.
Una vez que el esquema relacional que se muestra en la figura 3.17 se implementa como
una base de datos relacional, se puede llenar con datos, como se muestra en la figura 3.18.
Figura 3.17
Figura 3.18

---

<!-- página 83 -->

Observe que la tabla EMPLEADO de la figura 3.18 difiere de la tabla EMPLEADO de la
figura 3.16 porque no todos los registros tienen un valor para la columna de clave externa
DepartamentoID. El empleado (3456, Roberto) no tiene un valor de DepartamentoID.
DepartamentoID es una columna opcional en la relación EMPLEADO debido a la
participación opcional de la entidad EMPLEADO en la relación ReportaA en la figura 3.17.
Figura 3.19
Figura 3.20
Participación opcional en el lado M

---

<!-- página 84 -->

Observemos ahora el caso en el que la participación en el lado M (muchos) de una relación
es opcional. Este caso se ilustra en las figuras 3.19 y 3.20.
Figura 3.21
Figura 3.22
Mapeo de relaciones M:N
Observe la regla para mapear relaciones M:N:
Además de las dos relaciones que representan las dos entidades involucradas en la
relación M:N, se crea otra relación para representar la relación M:N en sí. Esta nueva
relación tiene dos claves foráneas, correspondientes a las claves primarias de las dos

---

<!-- página 85 -->

relaciones que representan las dos entidades involucradas en la relación M:N. Las dos
claves foráneas forman la clave primaria compuesta de la nueva relación.
El ejemplo de la figura 3.23, que muestra una relación M:N Pertenece entre las entidades
ESTUDIANTE y ORGANIZACIÓN, ilustra cómo se aplica esta regla. Cuando el DER de la
figura 3.23 se asigna a un esquema relacional, además de las relaciones ESTUDIANTE y
ORGANIZACION, se crea otra relación PERTENECE para representar la relación M:N
Pertenece. La relación que representa una relación M:N, como la relación PERTENECE, a
veces se denomina relación puente. La relación PERTENECE tiene dos claves foráneas,
cada una representada por las líneas que apuntan desde cada una de las claves foráneas a
su
fuente.
Una
línea
apunta
desde
la clave foránea EstudianteID en la relación
PERTENECE a la clave principal EstudianteID en la relación ESTUDIANTE. Otra línea
apunta desde la clave foránea OrganizacionID en la relación PERTENECE a la clave
principal OrganizacionID en la relación ORGANIZACION. Las claves externas EstudianteID
y OrganizacionID en la relación PERTENECE están subrayadas porque juntas forman la
clave primaria compuesta de la relación PERTENECE. (Una relación puente puede usar un
nombre que es diferente al nombre de la relación M:N que mapea. Por ejemplo, un
diseñador puede decidir que el nombre de la relación PARTICIPACION es más apropiado
que el nombre PERTENECE. Sin embargo, en este particular caso, nos quedaremos con el
nombre PERTENECE).
Una vez que el esquema relacional que se muestra en la figura 3.23 se implementa como
una base de datos relacional, se puede llenar con datos, como se muestra en la figura 3.24.
Observe cómo los valores en la relación PERTENECE conectan a los estudiantes con las
organizaciones a las que pertenecen.
Figura 3.23

---

<!-- página 86 -->

Figura 3.24
Si la entidad ESTUDIANTE tuviera una participación opcional en la relación Pertenece,
podría haber más estudiantes en la relación ESTUDIANTE cuyos IDs no aparecen en la
columna
EstudianteID
de
la tabla PERTENECE. De manera similar, si la entidad
ORGANIZACION tuviera una participación opcional en la relación Pertenece, podría haber
organizaciones adicionales en la relación ORGANIZACION cuyos IDs no aparecen en la
columna OrganizacionID de la tabla PERTENECE. Este escenario se ilustra en las figuras
3.25 y 3.26. La figura 3.25 muestra una relación PerteneceA con participación opcional en
ambos lados. Una vez que el esquema relacional que se muestra en la figura 3.25 se
implementa como una base de datos relacional, se puede llenar con datos, como se
muestra en la figura 3.26. Note que el estudiante (4444, Daniel) no pertenece a ninguna
organización. También observe que la organización (M1, Bar, Shows) no tiene estudiantes.
Tales ocurrencias son posibles debido a la participación opcional en ambos lados de la
relación PerteneceA en la figura 3.25.

---

<!-- página 87 -->

Figura 3.25

---

<!-- página 88 -->

Figura 3.26
Recuerde que una relación M:N puede tener sus propios atributos. Cuando se mapea una
relación M:N con sus propios atributos en el modelo relacional, la relación que representa la
relación M:N incluye una columna para cada atributo de la relación M:N que se mapea. La
figura 3.27 ilustra tal escenario.

---

<!-- página 89 -->

Figura 3.27
Una vez que el esquema relacional que se muestra en la figura 3.27 se implementa como
una base de datos relacional, se puede llenar con datos, como se muestra en la figura 3.28.

---

<!-- página 90 -->

Figura 3.28
Mapeo de relaciones 1:1
Las relaciones 1:1 se mapean de la misma manera que las relaciones 1:M. Una de las
relaciones resultantes tiene una clave externa que apunta a la clave principal de la otra
relación resultante. Cuando mapeamos relaciones 1:M, debemos seguir la regla que
establece que la clave principal de la relación mapeada en el lado 1 se convierte en una
clave externa de la relación mapeada en el lado M. En una relación 1:1, las cardinalidades
máximas de ambas entidades son 1. Por lo tanto, simplemente elegimos una de las
relaciones asignadas para que tenga una clave externa que se refiera a la clave principal de
la otra relación asignada.
En los casos en que no exista una ventaja particular en elegir qué relación resultante
incluirá una clave externa, la elección puede ser arbitraria. En otros casos, una opción
puede ser más eficiente que la otra. Por ejemplo, siempre que se pueda elegir entre una
clave foránea opcional y obligatoria, se recomienda elegir la clave foránea obligatoria.
Considere las figuras 3.29 y 3.30, que ilustran el mapeo de una relación 1:1. Elegimos la
relación VEHICULO para incluir la clave foránea EmpleadoID, porque en ese caso se
requerirá la clave foránea. La única otra opción habría sido que la relación EMPLEADO
incluyera la clave externa VehiculoID y, en ese caso, la clave externa habría sido opcional y,
como resultado, la columna de clave externa puede contener una cantidad de valores nulos.

---

<!-- página 91 -->

Las claves externas opcionales son legales (como se ilustra en las figuras 3.17 y 3.18), pero
si tenemos la opción de crear una relación con una clave externa opcional o requerida
(como se ilustra en la figura 3.29), la clave externa requerida es la opción preferida.
Figura 3.29
Figura 3.30
Otro ejemplo de cómo hacer una elección más eficiente es en los casos en que en un lado
de una relación 1:1 la clave principal es compuesta y en el otro lado de la relación 1:1 la

---

<!-- página 92 -->

clave principal es normal (no compuesta). En ese caso, una opción más óptima sería elegir
una clave externa regular (no compuesta) para que aparezca en la relación que tiene una
clave primaria compuesta, en lugar de tener una clave externa compuesta que aparece en
la relación que tiene una clave primaria regular.
Restricciones de integridad referencial
El término restricción de integridad referencial se refiere a la regla de base de datos
relacional que define valores que son válidos para usar en claves foráneas.
Restricción de integridad referencial
En cada fila de una relación que contiene una clave foránea, el valor de la clave
foránea coincide con uno de los valores de la clave primaria de la relación
referida o el valor de la clave foránea es nulo (vacío).
La definición anterior permite la posibilidad de que no se ingrese un valor de clave foránea.
Estos casos están permitidos cuando la relación que se implementa con la clave foránea
tiene una participación opcional de la entidad cuya relación mapeada resultante contiene la
clave foránea. Para ilustrar la definición de restricción de integridad referencial, usaremos el
esquema relacional de ejemplo que se muestra en la figura 3.17.
En el diagrama ER de la figura 3.17, la entidad EMPLEADO tiene una participación opcional
en la relación con la entidad DEPARTAMENTO. En el esquema resultante, la relación
EMPLEADO tiene una clave externa DepartamentoID. La figura 3.31 ilustra varios casos de
cumplimiento y violación de las restricciones de integridad referencial para el escenario
presentado en la figura 3.17.

---

<!-- página 93 -->

Figura 3.31
En el ejemplo superior de la figura 3.31, todos los valores de clave foránea en la relación
EMPLEADO
se
refieren
a
valores
de
clave
principal
existentes
en
la
relación
DEPARTAMENTO y, por lo tanto, no hay violación de la restricción de integridad referencial.
En el ejemplo central de la figura 3.31, todos los valores de clave foránea ingresados en la
relación EMPLEADO se refieren a valores de clave principal existentes en la relación
DEPARTAMENTO. Uno de los valores de la clave foránea es nulo, lo que también cumple
con la restricción de integridad referencial (y con la participación opcional de la entidad
EMPLEADO en la relación que se muestra en la figura 3.17).

---

<!-- página 94 -->

En el ejemplo inferior de la figura 3.31, uno de los valores de clave foránea ingresados en la
relación EMPLEADO (DepartamentoID = 4) no se refiere a ninguno de los valores de clave
primaria existentes en la relación DEPARTAMENTO, lo que es una violación de la
restricción de integridad referencial.
Recuerda que el esquema relacional está compuesto por las relaciones y las líneas que
conectan las relaciones apuntando desde las claves foráneas a las correspondientes claves
primarias. Debido a que cada línea que apunta desde la clave foránea a la clave principal
correspondiente indica una instancia que está regulada por una restricción de integridad
referencial, es común referirse a tales líneas en el esquema relacional como líneas de
restricción de integridad referencial.

---

<!-- página 95 -->

Ejemplo: Mapeo de un diagrama ER en un Esquema Relacional
Ahora presentamos un ejemplo que resume las reglas que hemos cubierto hasta ahora para
mapear construcciones de diagramas ER en construcciones de bases de datos relacionales.
La figura 3.32 muestra un esquema relacional resultante del mapeo del diagrama ER de la
base de datos del departamento de ventas de la empresa minorista ZAGI (que se muestra
en la figura 2.13, repetido aquí). El diagrama ER tiene siete entidades y una relación M:N.
En consecuencia, el esquema relacional tiene ocho relaciones, una para cada una de las
entidades y otra para la relación M:N.
Figura 3.32

---

<!-- página 96 -->

Figura 3.33
Una vez que el esquema relacional que se muestra en la figura 3.32 se implementa como
una base de datos relacional, se puede llenar con datos, como se muestra en la figura 3.33.
Granularidad de la tabla
Para obtener una comprensión completa de las bases de datos, cada usuario debe conocer
la granularidad de cada tabla que pretende utilizar. La granularidad de la tabla describe lo
que se representa en una fila de la tabla. Por ejemplo, considere las tablas que se muestran
en la figura 3.33. La siguiente es una lista de granularidades para cada una de las tablas:
●
Cada fila en la tabla REGION representa una región.
●
Cada fila de la tabla ALMACEN representa un almacén.
●
Cada fila en la tabla PRODUCTO representa un producto.
●
Cada fila de la tabla PROVEEDOR representa un proveedor.
●
Cada fila de la tabla CATEGORIA representa una categoría.
●
Cada fila de la tabla TRANSACCION representa una transacción de venta.
●
Cada fila en la tabla INCLUYE representa una ocurrencia de un producto incluido en
una transacción (junto con la cantidad de ese producto en esa transacción).
Para
la
mayoría
de
las
tablas
(p.
ej.,
REGION,
ALMACEN),
la
granularidad
es
evidentemente obvia, pero para las tablas relación o puente (como INCLUYE), la
comprensión de la granularidad requiere comprender que cada fila en dicha tabla registra
exclusivamente una ocurrencia de una fila en una tabla combinada con una fila de otra
tabla.

---

<!-- página 97 -->

Mapeo de entidades con claves candidatas (Múltiples Atributos únicos)
Recuerde que una entidad puede tener más de un atributo único. En tales casos, cada
atributo único también se denomina "clave candidata". El término "clave candidata" proviene
del hecho de que el diseñador de la base de datos debe elegir una de las claves candidatas
como clave primaria durante el proceso de asignación de entidad a relación, mientras que
las otras claves candidatas se asignan como columnas de clave no primarias. En la figura
3.34 se muestra un ejemplo de mapeo de una entidad con claves candidatas.
Figura 3.34
Figura 3.35
En un esquema relacional, solo se subrayan las claves principales, mientras que las demás
columnas no se subrayan. En la relación mapeada en la figura 3.34, solo EmpleadoID está

---

<!-- página 98 -->

subrayado, porque fue elegido como clave principal. En consecuencia, NSS no está
subrayado porque no es una clave principal de esta relación. Sin embargo, aún podemos
marcar las columnas de clave no principal como únicas mostrando la letra U entre
paréntesis junto a los nombres de las columnas de clave no principal únicas.
Una vez que la relación que se muestra en la figura 3.34 se implementa como parte de una
base de datos relacional, se puede llenar con datos, como se muestra en la figura 3.35.
En los casos en que la tabla tiene claves candidatas tanto compuestas como regulares (no
compuestas), elegir una clave principal no compuesta suele ser la mejor opción. Este caso
se ilustra con el ejemplo de la figura 3.36.
Figura 3.36
Las columnas DominioNúmero (Número de placa) y DominioProvincia se marcan juntas
como componentes de un atributo único compuesto de la relación VEHICULO. La columna
VehiculoID (Número de identificación del vehículo) se eligió como la clave principal ya que
es un atributo único no compuesto.
Una vez que la relación que se muestra en la figura 3.36 se implementa como parte de una
base de datos relacional, se puede llenar con datos, como se muestra en la figura 3.37.

---

<!-- página 99 -->

Figura 3.37
Mapeo de entidades con atributos multivaluados
Como lo mencionamos anteriormente, los atributos multivaluados se usan en casos donde
las instancias de una entidad pueden tener múltiples valores para el mismo atributo. Una
entidad que contiene el atributo multivaluado se mapea sin el atributo multivaluado. El
atributo multivaluado se mapea como una relación separada que tiene una columna que
representa el atributo multivaluado y una columna de clave externa que hace referencia a la
clave principal de la relación que resulta de la propia entidad. Ambas columnas forman una
clave primaria compuesta para la relación separada. La figura 3.38 muestra un ejemplo de
mapeo de una entidad con un atributo multivaluado.
Una vez que el esquema relacional que se muestra en la figura 3.38 se implementa como
una base de datos relacional, se puede llenar con datos, como se muestra en la figura 3.39.
Debido al atributo de varios valores NumeroTelefono de la entidad EMPLEADO, en la
relación EMPLEADOTELEFONO, son posibles varias filas de diferentes números de
teléfono pertenecientes al mismo empleado.
Ninguna columna en la relación EMPLEADOTELEFONO es única (por ejemplo, tenga en
cuenta que los empleados 1234, 3456 y 1324 comparten uno de sus números de teléfono),
pero cada combinación de EmpleadoID y NumeroTelefono es única. Por lo tanto, en la
relación EMPLEADOTELEFONO, EmpleadoID y NumeroTelefono forman una clave primaria
compuesta.

---

<!-- página 100 -->

Figura 3.38
Figura 3.39
Mapeo de entidades con atributos derivados
Recordemos
que un atributo derivado es un atributo cuyo valor no se almacena
permanentemente en una base de datos. En su lugar, el valor de un atributo derivado se
calcula a partir de los valores almacenados de otros atributos y/o datos adicionales
disponibles, como la fecha actual. Los atributos derivados no se asignan como parte del

---

<!-- página 101 -->

esquema relacional, como se ilustra en la figura 3.40. Una vez que la relación que se
muestra en la figura 3.40 se implementa como parte de una base de datos relacional, se
puede llenar con datos, como se muestra en la figura 3.41.
Figura 3.40
Figura 3.41
Aunque los atributos derivados no forman parte del esquema relacional, se pueden
implementar como parte de la aplicación en función de la base de datos relacional creada.
Por ejemplo, una aplicación front-end basada en la base de datos que contiene la relación
ALMACEN que se muestra en la figura 3.41 incluye una columna calculada adicional
AñosActividad en el negocio que utiliza una fórmula que extrae el número de años de la
expresión ((Fecha actual) – (Fecha de apertura)).

---

<!-- página 102 -->

Mapear una entidad con varios tipos de atributos
Para resumir las reglas para mapear varios tipos de atributos, la figura 3.43 muestra un
esquema relacional resultante del mapeo de la entidad EMPLEADO (que se muestra en la
figura 2.25 en el capítulo anterior, repetido aquí por conveniencia).
Figura 3.43

---

<!-- página 103 -->

Figura 3.44
Una vez que el esquema relacional que se muestra en la figura 3.43 se implementa como
una base de datos relacional, se puede llenar con datos, como se muestra en la figura 3.44.
Mapeo de relaciones unarias
Las relaciones unarias en los diagramas ER se asignan a un esquema relacional de la
misma manera que las relaciones binarias, usando una clave foránea en los casos de
relaciones 1:M y 1:1, y usando una nueva relación con dos claves foráneas en el caso de
una M :N relación. Aquí describimos e ilustramos el mapeo de relaciones unarias 1:M, M:N y
1:1.
Mapeo de relaciones unarias 1:M
La siguiente es la regla para mapear relaciones unarias 1:M.
La relación mapeada desde una entidad involucrada en una relación unaria 1:M contiene
una clave externa que corresponde a su propia clave primaria.

---

<!-- página 104 -->

Figura 3.45
Figura 3.46
Tenga en cuenta que la columna de clave externa Refiere_ClienteID tiene un nombre que es
diferente de la columna de clave principal correspondiente ClienteID, lo cual es una práctica
legal como ya se mencionó. De hecho, en este caso, el cambio de nombre es necesario ya
que dos columnas en la misma relación no pueden tener el mismo nombre. El cambio de
nombre también ilustra el papel de la clave externa en la tabla.
También tenga en cuenta que, debido a la participación opcional en el lado 1 de la relación
Refiere, la clave externa Refiere_ClienteID es opcional.
Una vez que la relación que se muestra en la figura 3.45 se implementa como parte de la
base de datos relacional, se puede llenar con datos, como se muestra en la figura 3.46.

---

<!-- página 105 -->

Note que en la figura 3.46 tenemos un cliente (C111) que no es referido por nadie, y dos
clientes (C333 y C444) que no son referidos por nadie. Esto es posible porque la relación
Refiere en la figura 3.45 es opcional en ambos lados.
Mapeo de relaciones unarias M:N
La siguiente es la regla para mapear relaciones unarias M:N.
Además de la relación que representa a la entidad involucrada en una relación unaria M:N,
se crea otra relación para representar la propia relación M:N. Esta nueva relación tiene
dos claves foráneas, ambas correspondientes a la clave primaria de la relación que
representa a la entidad involucrada en la relación unaria M:N. Cada una de las claves
foráneas se utiliza como parte de la clave primaria compuesta de la nueva relación.
Figura 3.47

---

<!-- página 106 -->

Figura 3.48
Ambas claves foráneas se renombran para ilustrar sus roles en la relación Recomienda.
Una vez que el esquema relacional que se muestra en la figura 3.47 se implementa como
una base de datos relacional, se puede llenar con datos, como se muestra en la figura 3.48.
Como la relación Recomienda de la figura 3.47 es opcional en ambos extremos, en la
relación EMPLEADO podemos tener empleados que no recomienden (4567, Eduardo) y
también podemos tener empleados que no sean recomendados (1234, Betiana).
Mapeo de relaciones unarias 1:1
Las relaciones unarias 1:1 se mapean de la misma manera que las relaciones unarias 1:M,
como se ilustra en el ejemplo que se muestra en la figura 3.49. Este ejemplo representa un
evento de entrega de regalos donde cada persona le da un regalo a exactamente una
persona y cada persona recibe un regalo de exactamente una persona.
Una vez que la relación que se muestra en la figura 3.49 se implementa como parte de una
base de datos relacional, se puede llenar con datos, como se muestra en la figura 3.50.
Tenga en cuenta que debido a que la relación Obsequia tiene una participación obligatoria
en ambos lados, cada persona da un obsequio y cada persona recibe un obsequio, como se
ilustra en los registros de la tabla PERSONA en la figura 3.50.

---

<!-- página 107 -->

Figura 3.49
Figura 3.50
Mapeo de múltiples relaciones entre las mismas entidades
Como señalamos, no es inusual que las mismas entidades en un diagrama ER estén
relacionadas a través de más de una relación. La figura 3.51 muestra un ejemplo de mapeo
de múltiples relaciones entre las mismas entidades.

---

<!-- página 108 -->

Tenga en cuenta que la relación PAQUETE tiene dos claves externas, las cuales se refieren
a la clave principal en la relación EMPLEADO. Ambas claves foráneas se renombran para
ilustrar sus roles en la relación EMPLEADO.
Una vez que el esquema relacional que se muestra en la figura 3.51 se implementa como
una base de datos relacional, se puede llenar con datos, como se muestra en la figura 3.52.
Figura 3.51
Figura 3.52
Mapeo de entidades débiles
Las entidades débiles se mapean de manera similar a las entidades regulares, con una
pequeña adición. La relación resultante tiene una clave primaria compuesta que se

---

<!-- página 109 -->

compone del identificador parcial y la clave foránea correspondiente a la clave primaria de la
entidad propietaria. La figura 3.53 ilustra el mapeo de una entidad débil.
Figura 3.53
Figura 3.54

---

<!-- página 110 -->

Una vez que el esquema relacional que se muestra en la figura 3.53 se implementa como
una base de datos relacional, se puede llenar con datos, como se muestra en la figura 3.54.
Como se muestra en la figura 3.54, una instancia de entidad propietaria se puede asociar
con varias instancias de la entidad débil, siempre que cada una de ellas tenga un valor de
clave parcial diferente. Por ejemplo, en la relación DEPARTAMENTO de la figura 3.54, el
Edificio A tiene tres departamentos y cada uno tiene un número de departamento diferente.
La combinación de la clave parcial DepartamentoNumero y EdificioID es la clave principal
para la relación DEPARTAMENTO.
Las entidades débiles pueden tener múltiples propietarios. En ese caso, la relación que
resulte del mapeo de la entidad débil tendrá una clave primaria compuesta por el
identificador parcial y las claves foráneas correspondientes a las claves primarias de todas
las entidades propietarias. La figura 3.55 ilustra el mapeo de una entidad débil con dos
entidades propietarias.
Tenga en cuenta que la relación PRUEBA tiene dos claves foráneas de las dos relaciones
que resultan de las dos entidades propietarias de la entidad débil PRUEBA. Esas dos
claves, combinadas con el identificador parcial Fecha, forman una clave compuesta de la
relación PRUEBA.
Figura 3.55
Una vez que el esquema relacional que se muestra en la figura 3.55 se implementa como
una base de datos relacional, se puede llenar con datos, como se muestra en la figura 3.56.
Recuerde que este ejemplo representa un escenario en el que los empleados pueden
realizar la misma prueba de competencia varias veces hasta que reciban una puntuación
mínima de aprobación de 75. Entonces, por ejemplo, el empleado 2222, Ricardo, realizó la
prueba de competencia Mediación de Conflictos tres veces. Las dos primeras veces recibió
una puntuación de 45, y luego en su tercer intento recibió una puntuación de 90.

---

<!-- página 111 -->

Figura 3.56
En los casos en que una relación de identificación es una relación 1:1, una entidad débil no
tiene un identificador parcial. En tales casos, la clave principal de la relación mapeada
desde la entidad propietaria se convierte también en la clave principal de la relación
mapeada desde la entidad débil. La figura 3.57 ilustra el mapeo de una entidad débil con
una relación de identificación 1:1.
Dado que la entidad CONYUGE no tiene un identificador parcial, en la relación CONYUGE
la clave externa también sirve como su clave principal, en lugar de combinarse con la clave
parcial en una clave principal compuesta.

---

<!-- página 112 -->

Figura 3.57
Figura 3.58

---

<!-- página 113 -->

Una vez que el esquema relacional que se muestra en la figura 3.57 se implementa como
una base de datos relacional, se puede llenar con datos, como se muestra en la figura 3.58.
Ejemplo. Mapeo de otro diagrama DER en un esquema relacional
Para recapitular las reglas de mapeo de diagramas ER a esquema relacional presentadas,
la figura 3.59 muestra un esquema relacional resultante del mapeo del diagrama ER de la
base de datos de administración de propiedades de la empresa HLDH (que se muestra en
la figura 2.38, repetido aquí por conveniencia).
HLDH ("Hogar Lejos del Hogar") es una empresa que alquila departamentos a clientes
corporativos. La base de datos de administración de propiedades de HLDH realizará un
seguimiento de los edificios, departamentos, clientes corporativos, administradores de
edificios, miembros del personal de limpieza e inspectores de edificios de HLDH. La base de
datos de administración de propiedades de la empresa inmobiliaria HLDH capturará datos
sobre lo siguiente:
●
Para cada edificio: EdificioID (único) y NroPisos (número de pisos en el edificio);
●
Para cada departamento: DeptoNro (parcialmente único, es decir, único dentro de un
edificio) y CantDormitorios (número de dormitorios en el departamento);
●
Para cada cliente corporativo: ClienteID (único), Nombre (único), Ubicación e
Industria;
●
Para cada gerente: GerenteID (único), NombCompleto (compuesto por Nombre y
Apellido), varios números de Telefono, Nacimiento, Edad (derivados de Nacimiento y
la fecha actual), Salario y Bono (no todos los administradores tendrán una
bonificación);
●
Para cada miembro del personal: PersonalID (único) y Nombre;
●
Para cada inspector: InspectorID (único) e Nombre;
●
Cada edificio tiene uno o más departamentos. Cada departamento está ubicado
exactamente en un edificio.
●
Cada departamento se alquila a un cliente corporativo o a nadie. Cada cliente
corporativo puede alquilar muchos departamentos o ninguno.
●
Cada cliente corporativo referencia muchos clientes corporativos, pero podría no
referenciar a alguno. Cada cliente corporativo puede ser referido por un cliente
corporativo o no ser referido por ninguno.
●
Cada departamento es limpiado por uno o dos miembros del personal. Cada
miembro del personal limpia entre cinco y diez departamentos.
●
Cada gerente gestiona uno o varios edificios. Cada edificio es administrado por
exactamente un gerente.
●
Cada gerente reside exactamente en un edificio. Cada edificio tiene un gerente que
reside en él o ningún gerente que reside en él.
●
Cada inspector inspecciona uno o varios edificios. Cada edificio es inspeccionado
por uno o varios inspectores.
●
Para cada edificio que inspecciona un inspector en particular, se registran las fechas
de la última inspección del inspector y de la próxima inspección futura del inspector.

---

<!-- página 114 -->

Figura 3.59
El diagrama ER tiene seis entidades y dos relaciones M:N. Una de las entidades tiene un
atributo multivaluado. En consecuencia, el esquema relacional tiene nueve relaciones, una
para cada una de las entidades, dos para las relaciones M:N y una para el atributo
multivaluado.
Una vez que el esquema relacional que se muestra en la figura 3.59 se implementa como
una base de datos relacional, se puede llenar con datos, como se muestra en la figura 3.60.
Figura 3.60
Restricciones de bases de datos relacionales
Como se indicó anteriormente, una restricción especifica una regla que una base de datos
relacional debe cumplir para ser válida. Las reglas de bases de datos relacionales encajan
en una de dos categorías: restricciones implícitas y restricciones definidas por el usuario.
Restricciones implícitas
Las reglas implícitas del modelo de base de datos relacional que una base de datos
relacional debe cumplir para ser válida se conocen como restricciones implícitas. La
siguiente es una lista de las reglas de bases de datos relacionales que encajan en la
categoría de restricciones implícitas.

---

<!-- página 115 -->

●
Cada relación en un esquema relacional debe tener un nombre diferente.
●
Cada relación debe cumplir las siguientes condiciones:
○
Cada columna debe tener un nombre diferente.
○
Cada fila debe ser única.
○
Todos los valores de cada columna deben ser del mismo dominio predefinido
(esta restricción también se conoce como restricción de dominio).
○
En cada fila, cada valor en cada columna debe tener un solo valor.
○
El orden de las columnas es irrelevante.
○
El orden de las filas es irrelevante.
●
Cada relación debe tener una clave principal, que es una columna (o un conjunto de
columnas) cuyo valor es único para cada fila (esta restricción también se conoce
como restricción de clave principal).
●
Ninguna columna de clave principal puede tener valores nulos (restricción de
integridad de la entidad).
●
En cada fila de una relación que contiene una clave externa, el valor de la clave
externa coincide con uno de los valores en la columna de clave principal de la
relación referida o el valor de la clave externa es nulo (restricción de integridad
referencial).
Restricciones definidas por el usuario
Además de las restricciones implícitas, los diseñadores de una base de datos relacional
pueden
agregar
otras
restricciones
específicas
a
la
base
de
datos
que se está
desarrollando. Tal restricción adicional se conoce como "restricción definida por el usuario".
Aquí mostraremos algunos ejemplos de restricciones definidas por el usuario (y más
adelante mostraremos los mecanismos para hacer cumplir las restricciones definidas por el
usuario en las bases de datos implementadas).
Un ejemplo de una restricción definida por el usuario es especificar un atributo opcional en
el diagrama ER y el esquema relacional asignado posteriormente. Por ejemplo, el diseñador
especificó que el atributo Bono es opcional en la entidad EMPLEADO y en la relación
EMPLEADO en las Figuras 3.11 y 3.12, respectivamente.
Otro ejemplo de una restricción definida por el usuario es especificar una clave externa
(foránea) obligatoria, como en el ejemplo ilustrado en las Figuras 3.15 y 3.16. En esta
columna de ejemplo, DepartamentoID en la relación EMPLEADO es obligatorio, debido a la
participación obligatoria en el lado 1 en la relación ReportaA por parte de la entidad
EMPLEADO.

---

<!-- página 116 -->

El mismo ejemplo que se muestra en las Figuras 3.15 y 3.16 contiene otra restricción
definida por el usuario, una restricción en la relación DEPARTAMENTO, en la que se debe
hacer referencia a cada fila mediante al menos una clave externa en la relación
EMPLEADO. Esto se debe a la participación obligatoria del lado M por parte de la entidad
DEPARTAMENTO en la relación ReportaA. Note que la misma restricción no existe en el
ejemplo mostrado en las Figuras 3.19 y 3.20, debido a la participación opcional del lado M
en la relación ReportaA por parte de la entidad DEPARTAMENTO.
Otros ejemplos de restricciones definidas por el usuario que especifican la cardinalidad
mínima y máxima exacta se muestran en las Figuras 3.61 y 3.62.
Una vez que el esquema relacional que se muestra en la figura 3.61 se implementa como
una base de datos relacional, se puede llenar con datos, como se muestra en la figura 3.62.

---

<!-- página 117 -->

Observe que los registros ingresados cumplen con las restricciones que especifican la
cardinalidad mínima y máxima en ambos lados de la relación, ya que cada clase tiene cinco
estudiantes y cada estudiante está tomando dos clases. Como mencionamos anteriormente,
mostraremos los mecanismos para hacer cumplir tales restricciones más adelante.
Figura 3.61

---

<!-- página 118 -->

Figura 3.62
Hasta ahora, las restricciones definidas por el usuario que mencionamos se especificaron
como parte del diagrama ER.
Otra categoría de restricciones definidas por el usuario, denominadas reglas de negocio,
especifica restricciones en las bases de datos resultantes que no forman parte de la
notación estándar para crear diagramas ER. Las reglas de negocio se pueden agregar
como notas (por ejemplo, notas al pie, comentarios, símbolos especiales u otros tipos de
notas) que acompañan a los diagramas o se enumeran en documentación separada.
Por ejemplo, una regla de negocio que especifique que ningún empleado puede tener un
salario inferior a $50.000 o superior a $200.000 se puede agregar como nota al pie de
página a un diagrama ER, como se muestra en la figura 3.63.
Una vez que la relación que se muestra en la figura 3.63 se implementa como parte de una
base de datos relacional, se puede llenar con datos, como se muestra en la figura 3.64. Los
registros ingresados cumplen con la regla de negocio que especifica que ningún empleado
puede tener un salario inferior a $50.000 o superior a $200.000.

---

<!-- página 119 -->

Figura 3.63
Figura 3.64

---

<!-- página 120 -->

Figura 3.65
Figura 3.66
En otro ejemplo, que se muestra en la figura 3.65, una regla de negocio especifica que el
año de graduación de un estudiante no puede preceder al año de inscripción del estudiante.
Una vez que el esquema relacional que se muestra en la figura 3.65 se implementa como
una base de datos relacional, se puede llenar con datos, como se muestra en la figura 3.66.
Los registros ingresados cumplen con la regla de negocio que especifica que el año de
graduación de un estudiante no puede preceder al año de inscripción del estudiante.
Otro ejemplo, que se muestra en la figura 3.67, incluye una regla de negocio que especifica
que cada organización de estudiantes debe tener estudiantes tanto hombres como mujeres.

---

<!-- página 121 -->

Una vez que el esquema relacional que se muestra en la figura 3.67 se implementa como
una base de datos relacional, se puede llenar con datos, como se muestra en la figura 3.68.
Los registros ingresados cumplen con la restricción de que cada organización estudiantil
debe tener estudiantes tanto hombres como mujeres. Un mecanismo verificaría el
cumplimiento de la base de datos con esta regla de negocio una vez que los datos iniciales,
que representan las membresías iniciales en las organizaciones, se insertan en las tres
tablas.
Figura 3.67

---

<!-- página 122 -->

Figura 3.68
Más adelante discutiremos el significado y métodos para forzar reglas de negocio (tal como
las vistas en los ejemplos anteriores) en bases de datos implementadas.
Hasta aquí hemos presentado los temas más importantes relacionados con el modelado de
bases de datos relacionales. Las siguientes notas cubren varios problemas adicionales
relacionados con el modelado de bases de datos relacionales.
Acerca del mapeo de entidades asociativas
Recordemos que una entidad asociativa es una construcción de modelado ER utilizada
como una forma alternativa de representar las relaciones M:N. En consecuencia, las
entidades asociativas se mapean en construcciones de bases de datos relacionales de la
misma manera que se mapean las relaciones M:N. En ambos casos, se crea una relación
adicional, con dos claves externas que apuntan a las relaciones mapeadas desde las
entidades involucradas en la relación M:N. Estas dos claves externas forman una clave
primaria compuesta para la relación adicional.
La figura 3.69 ilustra cómo una relación M:N y su versión de entidad asociativa se
mapearían de manera idéntica en un esquema relacional.

---

<!-- página 123 -->

Figura 3.69
Acerca del mapeo de relaciones ternarias
Recordemos que las relaciones ternarias se usan como relaciones de muchos a muchos a
muchos. Mapear una relación ternaria es similar a mapear una relación M:N. Se crea una
nueva relación con claves foráneas de las relaciones participantes que forman una clave
primaria compuesta de la nueva relación. La figura 3.70 ilustra el mapeo de una relación
ternaria.

---

<!-- página 124 -->

Figura 3.70

---

<!-- página 125 -->

Figura 3.71
Una vez que el esquema relacional que se muestra en la figura 3.70 se implementa como
una base de datos relacional, se puede llenar con datos, como se muestra en la figura 3.71.
En este ejemplo, los registros de la figura 3.71 indican que los tres proveedores
proporcionan las tres piezas para una bicicleta y que el proveedor S1 es el proveedor
exclusivo de piezas para un triciclo y un scooter.
Acerca de claves primarias creadas por el diseñador y
opciones de autonumeración
Muchas herramientas DBMS y de diseño de bases de datos modernas ofrecen a los
diseñadores de bases de datos la opción de tipo de datos de numeración automática que
permite la generación automática de valores de datos numéricos consecutivos en una
columna. Esta opción se utiliza principalmente para la creación de columnas de clave
principal creadas por el diseñador. Por ejemplo, considere el siguiente conjunto de
requisitos:
●
La base de datos del hospital hará un seguimiento de los pacientes.
●
Para cada paciente, el hospital llevará un registro de su SSN único, así como de su
fecha de nacimiento y nombre.

---

<!-- página 126 -->

En la figura 3.72 se muestra una entidad basada en esta relación y la relación resultante.
Figura 3.72
Los requisitos no solicitan explícitamente la columna ID de paciente. Sin embargo, después
de las conversaciones con los usuarios finales, el diseñador decidió no utilizar el SSN de un
paciente como clave principal. En su lugar, el diseñador decidió crear otra columna
PacienteID para la relación PACIENTE que servirá como clave principal en lugar de la
columna SSN, y llenarla con los valores enteros consecutivos de incremento automático.
Primero, los requisitos se modificaron de la siguiente manera:
●
La base de datos del hospital mantendrá un registro de los pacientes.
●
Para cada paciente, el hospital hará un seguimiento de su SSN único y de su ID de
paciente único (que será un número entero simple, donde a cada paciente nuevo se
le asigna el siguiente número entero consecutivo disponible), así como la fecha de
nacimiento y el nombre.
Como se muestra en la figura 3.73, debido a los requisitos modificados, el diagrama ER
también se modifica. Como resultado, a la relación mapeada se le asigna una columna
adicional PacienteID.
Durante la implementación de la relación PACIENTE, se elige el tipo de dato autonumérico
para la columna PacienteID. Los datos de la relación PACIENTE se muestran en la figura
3.74. Se ingresan los datos en las columnas SSN, Nacimiento y Nombre. El sistema de
base de datos genera automáticamente los datos de la columna PacienteID como resultado
del tipo de datos de numeración automática para esa columna.

---

<!-- página 127 -->

Figura 3.73
Figura 3.74
Acerca de realizar tanto diagramas ER como modelado
relacional
Un enfoque para el modelado de bases de datos exige que el proceso de recopilación de
requisitos esté acompañado por el modelado de ER y luego seguido por el mapeo del
modelo de ER en un esquema relacional posterior. Sin embargo, algunos profesionales
prefieren crear esquemas relacionales directamente a partir de los requisitos. En tales
casos, la fase de modelado de ER simplemente se omite.
A menudo, los modeladores de bases de datos experimentados sienten que su nivel de
experiencia es lo suficientemente alto como para que ya no necesiten dedicar su tiempo a
crear dos tipos de diagramas para cada base de datos. Se sienten cómodos observando los
requisitos e inmediatamente creando esquemas relacionales que un paquete de DBMS

---

<!-- página 128 -->

puede implementar instantáneamente, mientras se saltan el proceso de modelado de ER
por completo.
Este enfoque simple para modelar bases de datos puede resultar atractivo a primera vista,
como una supuesta simplificación y ahorro de tiempo. Sin embargo, desaconsejamos esta
práctica por varias razones, que incluyen:
●
El modelado de ER es más adecuado para la visualización de los requisitos.
●
Ciertos conceptos se pueden visualizar gráficamente solo en diagramas ER.
●
Cada atributo se menciona una sola vez en el diagrama ER.
●
Un modelo ER es un mejor dispositivo de comunicación y documentación.
A continuación se analiza cada una de las razones enumeradas.
El modelado de ER es más adecuado para la visualización de requisitos
Todos los requisitos se visualizan explícitamente de manera directa en el diagrama de ER.
Por otra parte, algunos de los requisitos se expresan de forma menos directa en el esquema
relacional.
Echemos un vistazo a la figura 3.32. El requisito, cada producto se vende a través de una o
más transacciones de venta y cada transacción de venta incluye uno o más productos, se
visualiza en el diagrama ER, que representa el requisito tal como se especifica. El mismo
requisito se representa como una relación INCLUYE, que contiene dos claves externas que
la conectan con las relaciones TRANSACCION y PRODUCTO. Para un modelador de
bases de datos relacionales experimentado, esto aún puede funcionar como una buena
visualización del requisito anterior. Sin embargo, para la mayoría de los jugadores
comerciales que necesitan una descripción visual de los requisitos, el modelo ER ofrece una
opción más simple y clara.
Ciertos conceptos se pueden visualizar gráficamente solo en diagramas ER
Ciertos conceptos que pueden ocurrir como parte de los requisitos se pueden visualizar
gráficamente en el diagrama ER pero no en el esquema relacional.
Echemos un vistazo a la figura 3.15. El diagrama ER captura y visualiza el requisito de que
cada departamento debe tener al menos un empleado que le informe, mientras que ese
mismo requisito no se visualiza en el esquema relacional.
Otro ejemplo de un concepto que se puede visualizar en un diagrama ER, pero no en un
esquema relacional, es un atributo compuesto, como se ilustra en la figura 3.6.
Cada atributo se menciona solo una vez en el diagrama ER
Para comprender qué atributos se representan en la siguiente base de datos, ver el
diagrama ER es un método más simple porque cada atributo se visualiza solo una vez.
Echemos un vistazo a la figura 3.59. El atributo EdificioID es un atributo de la entidad
EDIFICIO. Se muestra solo una vez en el diagrama ER, al igual que todos los demás
atributos que se muestran en el diagrama ER. En el esquema relacional, el atributo
EdificioID se muestra una vez en la relación EDIFICIO y luego se repite cuatro veces más
como clave externa en tres relaciones diferentes. Un modelador de bases de datos

---

<!-- página 129 -->

relacionales experimentado puede distinguir entre el atributo original y su uso como clave
externa. Sin embargo, un usuario de negocio normal puede verse abrumado con la tarea de
mirar un esquema relacional lleno de claves foráneas y reconocer las múltiples instancias
del mismo atributo.
El modelo ER es un mejor dispositivo de documentación y comunicación
Por todas las razones enumeradas anteriormente, es más fácil para todas las partes
involucradas en el proceso de diseño de la base de datos comunicarse utilizando el
diagrama ER en lugar del esquema relacional. El diagrama ER es un mejor dispositivo para
la explicación, comunicación, discusión y verificación de los requisitos para la base de datos
resultante, tanto durante el proceso de desarrollo de la base de datos como posteriormente
cuando la base de datos implementada está en uso.

---

<!-- página 130 -->

Unidad
IV
-
Operaciones
de
actualización
y
normalización
Introducción
Anteriormente, presentamos los conceptos básicos del modelo de base de datos relacional
y mostramos cómo mapear correctamente un diagrama ER en un esquema relacional. A
continuación, nos centraremos en examinar las operaciones para insertar datos en las
relaciones, modificar (cambiar) los datos existentes en las relaciones y eliminar datos de las
relaciones. Estas tres operaciones a menudo se denominan colectivamente operaciones
de actualización.
Si una relación almacena varias instancias de los datos que se refieren a la misma
ocurrencia (por ejemplo, una tabla de compras que contiene varias filas con la misma
dirección del cliente), tales instancias representan datos redundantes. Un proceso de
diseño de base de datos menos que óptimo puede dar como resultado relaciones que
contienen datos innecesariamente redundantes. Las operaciones de actualización pueden
provocar
ciertas
anomalías
en
dichas
relaciones.
A
continuación,
describiremos
e
ilustraremos estas llamadas anomalías de actualización.
Se utiliza un proceso llamado normalización para mejorar el diseño de bases de datos
relacionales que contienen datos redundantes y, por lo tanto, son propensas a anomalías de
actualización. El resultado del proceso de normalización es la eliminación de datos
innecesariamente redundantes de las bases de datos relacionales y, al hacerlo, la
eliminación de la posibilidad de anomalías de actualización. A continuación, describiremos
el proceso de normalización en detalle.
Operaciones de actualización
El usuario de una relación puede recuperar o actualizar los datos de la relación. La
operación de recuperación de datos también suele denominarse operación de lectura
porque se utiliza para leer los datos de las relaciones. Las operaciones de actualización,
que también suelen denominarse operaciones de escritura, se utilizan para actualizar el
contenido de los datos en las relaciones.
Hay tres formas en que se puede actualizar el contenido de los datos en una relación:
ingresando nuevos datos en la relación, eliminando datos de la relación y cambiando los
datos existentes en la relación. Por lo tanto, existen tres operaciones de actualización para
actualizar el contenido de los datos en una relación:
●
Operación de inserción: se utiliza para ingresar nuevos datos en la relación
●
Operación de eliminación: utilizada para eliminar datos de la relación
●
Operación de modificación: se utiliza para cambiar los datos existentes en la
relación
Observemos ejemplos de cada una de las tres operaciones de actualización.

---

<!-- página 131 -->

Ejemplo de operación de inserción
Inicialmente, la relación EMPLEADO de la figura 4.1 tiene tres registros. Después de
insertar otro registro, la relación EMPLEADO tiene cuatro registros.
Figura 4.1
Ejemplo de operación de eliminación
Inicialmente, la relación EMPLEADO de la figura 4.2 tiene tres registros. Después de borrar
un registro, la relación EMPLEADO tiene dos registros.
Ejemplo de operación de modificación
La relación EMPLEADO en la figura 4.3 tiene tres registros. El valor del Salario en el
registro referente a la empleada Mónica se cambia de $50.000 a $60.000. Después de esta
operación, la relación EMPLEADO aún tiene tres registros, pero se modifica uno de los
registros.

---

<!-- página 132 -->

Figura 4.2
Figura 4.3
Acerca de la terminología de la operación de actualización
En la práctica y en la literatura, el término "operación de actualización" se usa a menudo de
dos maneras diferentes. Un uso es "operación de actualización" como término colectivo
para
operaciones de inserción, eliminación y modificación. Otro uso alternativo es
"operación de actualización" como sinónimo de la operación de modificación. Ambos usos
están muy extendidos y es importante conocerlos. Por lo general, está claro por el contexto
del uso del término cuál de estas dos designaciones se usa. Nosotros usaremos el término

---

<!-- página 133 -->

“operación de actualización” como un término colectivo para las operaciones de inserción,
eliminación y modificación.
Anomalías de actualización
En las relaciones que contienen datos redundantes (que se repiten innecesariamente), cada
una de las tres operaciones de actualización puede causar anomalías de actualización. Por
lo tanto, hay tres tipos de anomalías de actualización: anomalía de inserción, anomalía de
eliminación y anomalía de modificación. Usaremos una relación de ejemplo llamada
CAMPANIA, de una agencia de publicidad Press, para ilustrar cada uno de los tres tipos de
anomalías de actualización. Más adelante, se usará la misma relación de ejemplo para
ilustrar las dependencias funcionales y el proceso de normalización.
Escenario de ejemplo
La agencia de publicidad Press administra campañas publicitarias utilizando una variedad
de enfoques publicitarios. Cada uno de estos enfoques se denomina modo de campaña.
Cada modo tiene un identificador ModoID (p. ej., 1, 2, 3) y utiliza un medio en particular (p.
ej., TV, radio, prensa) para cubrir un rango particular (p. ej., local, nacional). Por ejemplo, el
modo de campaña que utiliza TV que cubren el rango local tiene el valor ModoID 1, el modo
de campaña que usa TV que cubren el rango nacional tiene el valor ModoID 2, y así
sucesivamente.
Cada campaña publicitaria administrada por Press tiene un identificador único, un nombre
único, una fecha de inicio, una duración y un administrador de campaña que tiene un
nombre y un identificador único. Cada campaña publicitaria puede utilizar más de un modo
de campaña. Cuando una campaña publicitaria utiliza más de un modo de campaña, se
asigna un porcentaje del presupuesto total de la campaña publicitaria para cada modo.
Cuando una campaña publicitaria utiliza solo un modo de campaña, el 100 por ciento del
presupuesto de la campaña publicitaria se asigna a un modo.
Relación ejemplo (Conteniendo Dato Redundante)
La agencia de publicidad Press utiliza una sola relación CAMPANIA para almacenar sus
datos. Esta relación es un ejemplo de una relación que contiene datos redundantes y, por lo
tanto, es propensa a anomalías de actualización.
La relación CAMPANIA tiene las siguientes columnas:
CampaniaID
Identificador de campaña publicitaria, un valor único para cada
campaña publicitaria
CampaniaNombre
Nombre de la campaña publicitaria, un nombre único para
cada campaña publicitaria.
FechaInicio
Fecha de inicio de la campaña publicitaria. (Más de una
campaña publicitaria puede comenzar en la misma fecha).

---

<!-- página 134 -->

Duracion
Duración de la campaña publicitaria en días. (Más de una
campaña publicitaria puede tener la misma duración).
AdministradorID
Identificador del administrador de campaña, un valor único
para cada administrador de campaña. (Cada campaña
publicitaria tiene solo un administrador de campaña; el mismo
administrador de campaña puede administrar varias
campañas).
AdministradorNombre
Nombre del administrador de campañas. (Más de un
administrador de campaña puede tener el mismo nombre).
ModoID
Identificador de modo de campaña, un valor único para cada
modo de campaña
Medio
Tipo de medio de un modo de campaña. (Cada modo de
campaña tiene solo un medio, pero el mismo medio puede ser
utilizado por más de un modo de campaña).
Alcance
Alcance de un modo de campaña. (Cada modo de campaña
tiene solo un rango, pero el mismo rango puede ser utilizado
por más de un modo de campaña).
Porcentaje
Porcentaje de presupuesto asignado por una campaña
publicitaria en particular para un modo de campaña en
particular
La figura 4.4 muestra la relación CAMPANIA con sus registros. Una campaña publicitaria
puede tener más de un modo. Cada registro en esta relación describe un modo utilizado en
una campaña. Por lo tanto, el atributo que puede distinguir de manera única cada fila en
esta relación es un compuesto de un atributo único de una campaña y de un atributo único
de un modo. El Modo en sí tiene solo un atributo único: ModoID. Sin embargo, cada
campaña publicitaria tiene dos atributos únicos: CampaniaID y CampaniaNombre. Se elige
una clave compuesta CampaniaID, ModoID como la clave principal de esta relación. Por lo
tanto, una clave compuesta CampaniaNombre, ModoID es una clave candidata de esta
relación que no se eligió para ser la clave principal.
Figura 4.4

---

<!-- página 135 -->

Figura 4.5
Una columna no clave es una columna en una relación que no es una columna de clave
primaria
o
candidata.
Las
columnas
FechaInicio,
Duracion,
AdminstradorID,
AdministradorNombre, Medio, Alcance y Porcentaje no son columnas clave en la relación
CAMPANIA.
El diseño de la relación CAMPANIA permite contener datos redundantes. Por ejemplo, el
nombre, la fecha de inicio y la duración de la campaña 222 se repiten dos veces, el nombre
del administrador de campaña CM100 se repite dos veces y los valores de medio y alcance
del modo de campaña 1 se repiten una vez. Estos ejemplos de datos redundantes en la
relación CAMPANIA se ilustran en la figura 4.5.
Debido al diseño que permite la ocurrencia de datos redundantes, la relación CAMPANIA
puede exhibir cada una de las anomalías de actualización, como se muestra en los
siguientes ejemplos ilustrados en la figura 4.6.
Anomalía de inserción
Una anomalía de inserción ocurre cuando un usuario que desea insertar datos sobre una
entidad del mundo real se ve obligado a ingresar datos sobre otra entidad del mundo real.
Por ejemplo, supongamos que la agencia de publicidad decidió comenzar a utilizar un
nuevo modo de campaña para futuras campañas: 7, Internet, Nacional. Este nuevo modo no
se puede ingresar en la relación CAMPANIA sin ingresar también una campaña real que
use este modo. Sin embargo, no hay ninguna campaña que utilice el modo de campaña 7
en este momento. Dado que CAMPANIA es la única relación en esta base de datos, los
datos sobre el modo de campaña 7 no existirán en la base de datos a menos que se
inserten en CAMPANIA. Insertar la información en un registro en la relación CAMPANIA
para el modo de campaña 7, dejando vacíos los valores en las columnas de la campaña, no
funcionaría. Tal inserción daría como resultado un valor NULL para la clave principal
CampaniaID, lo que violaría la restricción de integridad de la entidad.

---

<!-- página 136 -->

Anomalía de eliminación
Una anomalía de eliminación ocurre cuando un usuario que desea eliminar datos sobre una
entidad del mundo real se ve obligado a eliminar datos sobre otra entidad del mundo real.
Por ejemplo, supongamos que la agencia de publicidad decidió cancelar la campaña
publicitaria 444. Al eliminar el registro relacionado con la campaña 444 en la relación
CAMPANIA, también se eliminará el modo de campaña 6, Impreso, Nacional, porque
ninguna otra campaña está utilizando este modo en este momento. Dado que la información
sobre el modo de publicidad solo se puede encontrar en la relación CAMPANIA (porque no
hay otra relación en la base de datos), esta eliminación hará que la información sobre el
modo de campaña 6 ya no exista en la base de datos. Sin embargo, es posible que la
agencia aún desee utilizar el modo de campaña 6 para campañas futuras, por lo que puede
ser importante mantener la información sobre el modo de campaña 6 en la base de datos.
Figura 4.6
Además, tenga en cuenta que al eliminar el registro relacionado con la campaña 444 en la
relación CAMPANIA también se eliminará el administrador de campaña 103, Nancy, porque
este administrador de campaña no administra ninguna otra campaña en este momento.
Dado que la información sobre un administrador de campaña solo se puede encontrar en la
relación CAMPANIA, esta eliminación hará que la información sobre el administrador de
campaña 103 ya no exista en la base de datos. Sin embargo, la agencia puede seguir
queriendo usar el administrador de campañas 103 para administrar futuras campañas, por
lo que puede ser importante mantener la información sobre el administrador de campañas
103 en la base de datos.
Anomalía de modificación
Una anomalía de modificación ocurre cuando, para modificar un valor, se debe realizar la
misma modificación varias veces.
Por ejemplo, supongamos que la agencia de publicidad decidió extender la duración de la
campaña 222 de 30 a 45 días. Este cambio debe realizarse en tres registros diferentes.
Las relaciones que son susceptibles de anomalías de actualización (como la relación
CAMPANIA) se pueden mejorar mediante el proceso de normalización. Gran parte del

---

<!-- página 137 -->

proceso de normalización se basa en comprender el concepto de dependencia funcional.
Por lo tanto, antes de presentar e ilustrar el proceso de normalización, analizaremos las
dependencias funcionales.
Figura 4.7
Dependencias Funcionales
Una dependencia funcional ocurre cuando el valor de una (o más) columnas en cada
registro de una relación determina de manera única el valor de otra columna en ese mismo
registro de la relación. Por ejemplo, supongamos que una tabla que contiene la información
sobre los clientes tiene las columnas ClienteID y Nombre, como se muestra en la figura 4.7.
La columna ClienteID determina funcionalmente la columna Nombre porque un valor de
ClienteID en particular se puede asociar con solo un valor de Nombre. Por otro lado, la
columna Nombre no determina funcionalmente la columna ClienteID, porque un valor
particular de Nombre se puede asociar con más de un ClienteID. Por ejemplo, en la relación
CLIENTE, hay dos clientes diferentes con el nombre Walter, cada uno de los cuales tiene un
ClienteID diferente.
Notaciones de dependencia funcional
Hay varias formas de representar una dependencia funcional. Una forma es mostrar una
dependencia funcional como una expresión escrita simbólica de la siguiente manera:
A→B
La columna (o columnas) en el lado izquierdo de la flecha determina funcionalmente la
columna (o columnas) en el lado derecho. Para el ejemplo, la dependencia funcional en la
figura 4.7 se representaría como:
ClienteID →Nombre
Otra forma de representar la dependencia funcional es gráfica, donde esta misma
dependencia funcional se dibuja como una flecha en las columnas de la tabla, como se
muestra en la figura 4.8 .

---

<!-- página 138 -->

Figura 4.8
Ejemplo de dependencias funcionales
Identificaremos dependencias funcionales en la relación CAMPANIA en la figura 4.4.
Primero examinaremos si cada una de las columnas individuales determina funcionalmente
alguna otra columna. Comenzamos con la columna CampaniaID e identificaremos el
conjunto de dependencias funcionales donde CampaniaID determina ciertas columnas en la
relación CAMPANIA.
(Conjunto
1)
CampaniaID
→
CampaniaNombre,
FechaInicio,
Duracion,
AdministradorID, AdministradorNombre
Cada valor particular de CampaniaID siempre está asociado con un valor de
CampaniaNombre,
FechaInicio,
Duracion,
AdministradorID
y
AdministradorNombre. Por ejemplo, el valor 333 de CampaniaID aparece varias
veces en la relación CAMPANIA, pero siempre está asociado con el mismo valor
de FechaInicio 06/09/20. Cada valor individual de CampaniaID siempre se
asocia exclusivamente con un valor de FechaInicio. Lo contrario no es cierto, ya
que dos o más campañas diferentes podrían comenzar en la misma fecha (por
ejemplo, las campañas 333, 444 y 555 comienzan en la misma fecha). Por lo
tanto, FechaInicio no determina funcionalmente CampaniaID, ya que un valor de
FechaInicio no está necesariamente asociado con un solo valor de CampaniaID.
Se
pueden
hacer
observaciones similares sobre las columnas Duracion,
AdministradorID y AdministradorNombre, ya que no determinan funcionalmente
CampaniaID. Por otro lado, la columna CampaniaNombre determina la columna
CampaniaID, como se muestra en el Conjunto 2.
A
continuación,
identificamos
el
conjunto
de
dependencias
funcionales
donde
CampaniaNombre determina ciertas columnas en la relación CAMPANIA.
(Conjunto
2)
CampaniaNombre
→
CampaniaID,
FechaInicio,
Duracion,
AdministradorID, AdministradorNombre
Cada valor particular de CampaniaNombre siempre está asociado con un valor
de CampaniaID, FechaInicio, Duracion, AdministradorID y AdministradorNombre.
Por ejemplo, el valor de CampaniaNombre OtoñoBall20 aparece varias veces en
la relación CAMPANIA, pero siempre está asociado con el mismo valor de
FechaInicio 06/09/20. Cada valor individual de CampaniaNombre siempre se
asocia exclusivamente con un valor de FechaInicio. Lo contrario no es cierto, ya
que dos o más campañas diferentes podrían comenzar en la misma fecha (por
ejemplo, las campañas OtoñoBall20, OtoñoStyle20 y OtoñoColors20 comienzan
en la misma fecha). Por lo tanto, FechaInicio no determina funcionalmente

---

<!-- página 139 -->

CampaniaNombre, ya que un valor de FechaInicio no está necesariamente
asociado
con
un
solo
valor
de
CampaniaNombre.
Se
pueden
hacer
observaciones
similares
sobre
las
columnas
Duracion, AdministradorID y
AdministradorNombre, ya que no determinan funcionalmente CampaniaNombre.
Por otro lado, la columna CampaniaID determina la columna CampaniaNombre,
como se muestra en el Conjunto 1.
Las siguientes dos columnas, FechaInicio y Duracion, no determinan funcionalmente
ninguna otra columna en la relación CAMPANIA. La columna posterior, AdministradorID,
determina funcionalmente otra columna en la relación CAMPANIA, como se muestra en el
Conjunto 3.
(Conjunto 3) AdministradorID →AdministradorNombre
AdministradorID determina funcionalmente AdministradorNombre. Dentro de los
registros de la relación CAMPANIA, cada valor particular de AdministradorID
siempre aparece con el mismo valor de AdministradorNombre. Por ejemplo, el
valor CM100 para AdministradorID aparece en varios registros en la relación
CAMPANIA, pero siempre con el mismo AdministradorNombre valor Roberto.
Esto
es
cierto
para
cualquier
AdministradorID,
ya
que
cada
valor
de
AdministradorID
siempre
aparece
exclusivamente
con
un
solo
valor
de
AdministradorNombre.
Lo
contrario
no
es
cierto,
ya
que
eventualmente
podríamos contratar a dos administradores de campaña diferentes con el mismo
nombre (por ejemplo, podríamos contratar a otro Roberto), que, por supuesto,
tendría
dos
valores
de
AdministradorID
diferentes.
Por
lo
tanto,
AdministradorNombre no determina funcionalmente AdministradorID, ya que un
valor de AdministradorNombre no está necesariamente asociado con un solo
valor de AdministradorID.
La siguiente columna, AdministradorNombre, no determina funcionalmente ninguna otra
columna
en
la
relación
CAMPANIA.
La
columna
siguiente,
ModoID,
determina
funcionalmente otras columnas en la relación CAMPANIA, como se muestra en el Conjunto
4.
(Conjunto 4) ModoID →Medio, Alcance
Cada valor particular de ModoID siempre está asociado con un solo valor de
Medio y solo un valor de Alcance. Por ejemplo, el valor ModoID 3 aparece varias
veces en la relación CAMPANIA, pero siempre está asociado al mismo valor de
Medio Radio y al mismo valor de Alcance Local. Por otro lado, los valores
individuales de Medio o Alcance se pueden asociar con múltiples valores
ModoID diferentes y, por lo tanto, ni las columnas Medio ni Alcance determinan
la columna ModoID.
Las tres columnas restantes (Medio, Alcance y Porcentaje) no determinan funcionalmente
ninguna otra columna en la relación CAMPANIA. A continuación, nos centramos en las
dependencias
funcionales
donde
una
combinación
de
dos
columnas
determina
funcionalmente otras columnas, como se muestra en los conjuntos 5 y 6.

---

<!-- página 140 -->

(Conjunto 5) CampaniaID, ModoID →CampaniaNombre, FechaInicio, Duracion,
AdministradorID, AdministradorNombre, Medio, Alcance, Porcentaje
En cualquier relación, la clave principal siempre determina funcionalmente el
resto de las columnas de la relación. Por lo tanto, en la relación CAMPANIA, la
clave primaria compuesta CampaniaID, ModoID determina funcionalmente todas
las demás columnas en la relación CAMPANIA. Cada valor combinado particular
de CampaniaID, ModoID está asociado con un solo valor de CampaniaNombre,
FechaInicio, Duracion, AdministradorID, AdministradorNombre, Medio, Alcance y
Porcentaje.
(Conjunto 6) CampaniaNombre, ModoID →CampaniaID, FechaInicio, Duracion,
AdministradorID, AdministradorNombre, Medio, Alcance, Porcentaje
En cualquier relación, una clave candidata siempre determina funcionalmente el
resto de las columnas de la relación. Por lo tanto, en la relación CAMPANIA, la
clave
candidata
compuesta
CampaniaNombre,
ModoID
determina
funcionalmente todas las demás columnas de la relación CAMPANIA. Cada valor
combinado particular de CampaniaNombre, ModoID está asociado con un valor
de CampaniaID, FechaInicio, Duracion, AdministradorID, AdministradorNombre,
Medio, Alcance y Porcentaje.
En estos conjuntos de dependencias funcionales inicialmente reconocidos (conjuntos 1 a 6),
cada columna de una relación participa en al menos una dependencia funcional, ya sea en
el lado izquierdo o derecho de una dependencia funcional. En cualquier relación con varias
columnas, cada columna debe participar en al menos un conjunto de dependencias
funcionales.
Conjuntos inicialmente reconocidos de dependencias funcionales en la relación
CAMPANIA
(Conjunto
1)
CampaniaID
→
CampaniaID,
FechaInicio,
Duracion,
AdministradorID,
AdministradorNombre
(Conjunto 2) CampaniaNombre →CampaniaID, FechaInicio, Duracion, AdministradorID,
AdministradorNombre
(Conjunto 3) AdministradorID →AdministradorNombre
(Conjunto 4) ModoID →Medio, Alcance
(Conjunto
5)
CampaniaID,
ModoID
→
CampaniaNombre,
FechaInicio,
Duracion,
AdministradorID, AdministradorNombre, Medio, Alcance, Porcentaje
(Conjunto
6)
CampaniaNombre,
ModoID
→
CampaniaID,
FechaInicio,
Duracion,
AdministradorID, AdministradorNombre, Medio, Alcance, Porcentaje
Simplificación de las dependencias funcionales
El proceso de normalización de la base de datos se basa en el análisis de las dependencias
funcionales que existen dentro de cada relación de la base de datos. Ciertas dependencias

---

<!-- página 141 -->

funcionales no son relevantes en el proceso de normalización y, por lo tanto, podemos optar
por representar solo aquellas dependencias funcionales que son necesarias para llevar a
cabo el proceso de normalización. Esto simplifica el proceso de normalización al reducir el
número de dependencias funcionales que deben tenerse en cuenta.
Por ejemplo, las llamadas dependencias funcionales triviales ocurren cuando un atributo
(o un conjunto de atributos) se determina funcionalmente a sí mismo (p. ej., A →A; o A, B
→A, B) o su subconjunto (p. ej., A, B →A ). Las dependencias funcionales triviales no se
representan en el conjunto de dependencias funcionales identificadas. La representación de
dependencias
funcionales
triviales
constituiría
una
expansión
y
una
complicación
innecesarias del conjunto de dependencias funcionales bajo consideración. Por ejemplo,
incluir la dependencia funcional trivial
AdministradorID, CampaniaNombre →AdministradorNombre
en
los conjuntos de dependencias funcionales identificadas en el ejemplo anterior
simplemente significaría agregar desorden innecesario.
Además de las dependencias funcionales triviales, existen otros tipos de dependencias
funcionales que se pueden omitir de la representación gráfica sin perder la información
necesaria para el proceso de normalización. En particular, las dependencias funcionales
aumentadas y las dependencias funcionales equivalentes, que se describen a continuación,
se pueden eliminar de las dependencias funcionales representadas para simplificar el
proceso de normalización.
Dependencias funcionales aumentadas
Suponga que José pesa más que Susana es una afirmación verdadera. En ese caso, José
cargando un saco de papas es más pesado que Susana también es cierto pero al mismo
tiempo es una declaración innecesariamente aumentada, dada la declaración original. Un
concepto similar se aplica a las dependencias funcionales aumentadas.
Supongamos que existe la siguiente dependencia funcional en una relación:
A→B
En ese caso, la dependencia funcional que contiene una dependencia funcional existente,
como la siguiente:
A,C→B
es una dependencia funcional aumentada.
Por razones de legibilidad y simplicidad, las dependencias funcionales aumentadas
generalmente no se representan. Por lo tanto, el Conjunto 5 en realidad se representaría
como:
(Conjunto 5) CampaniaID, ModoID →Porcentaje
porque todas las demás dependencias funcionales en ese conjunto son dependencias
funcionales redundantes.

---

<!-- página 142 -->

En particular, debido a la dependencia funcional (del Conjunto 1):
CampaniaID →CampaniaNombre, FechaInicio, Duracion, AdministradorID,
CampaniaNombre
la dependencia funcional:
CampaniaID, ModoID →CampaniaNombre, FechaInicio, Duracion, AdministradorID,
CampaniaNombre
se aumenta, y por lo tanto se omite del Conjunto 5.
Además, debido a la dependencia funcional (del Conjunto 4):
ModoID →Medio, Alcance
la dependencia funcional:
CampaniaID, ModoID →Medio, Alcance
se aumenta, y por lo tanto se omite del Conjunto 5.
Dependencias funcionales equivalentes
Considere un escenario simple, donde el oficial ficticio del servicio secreto británico James
Bond también es conocido como el Agente 007 es una afirmación verdadera. En ese caso,
las siguientes dos declaraciones, James Bond es el oficial ficticio del servicio secreto
británico y el Agente 007 es el oficial ficticio del servicio secreto británico, son dos
declaraciones equivalentes. Un concepto similar se aplica a las dependencias funcionales
equivalentes.
Supongamos que existen las siguientes dependencias funcionales en una relación:
A→B
B→A
En ese caso, todo lo que A determina, B también lo determinará (y viceversa). Por lo tanto,
A →B y B →A son dependencias funcionales equivalentes. Además:
A →B, X
B →A, X
son dependencias funcionales equivalentes, y:
Y, A →B, X
Y, B →A, X
son también dependencias funcionales equivalentes.

---

<!-- página 143 -->

Por razones de legibilidad y simplicidad, cuando tenemos varios conjuntos de dependencias
funcionales equivalentes, podemos optar por representar solo uno de ellos. Porque la
dependencia funcional:
CampaniaID →CampaniaNombre
y la dependencia funcional:
CampaniaNombre →CampaniaID
son equivalentes, el conjunto 1 y el conjunto 2 son conjuntos equivalentes, y el conjunto 5 y
el conjunto 6 también son conjuntos equivalentes. Por lo tanto, el Conjunto 2 puede omitirse
de la representación porque es equivalente al Conjunto 1, y el Conjunto 6 puede omitirse de
la descripción porque es equivalente al Conjunto 5.
La siguiente es la lista simplificada de dependencias funcionales que en realidad se
representarían para la relación CAMPANIA.
Este conjunto simplificado de dependencias funcionales también se muestra en la figura 4.9.
Conjuntos simplificados de dependencias funcionales en la relación CAMPANIA
(Conjunto 1) CampaniaID →CampaniaNombre, FechaInicio, Duracion, AdministradorID,
AdministradorNombre
(Conjunto 3) AdministradorID →AdministradorNombre
(Conjunto 4) ModoID →Medios, Rango
(Conjunto 5) CampaniaID, ModoID →Porcentaje
Conjunto 5: Reducido al omitir las dependencias funcionales aumentadas que contienen el
Conjunto 2 y el Conjunto 3
Conjunto 2: Omitido, ya que es equivalente al Conjunto 1
Conjunto 6: Omitido, ya que es equivalente al Conjunto 5
Figura 4.9
Tipos de dependencias funcionales
Las dependencias funcionales que se utilizan como base para el proceso de normalización
típico se pueden clasificar en una de las tres categorías: dependencia funcional parcial,
dependencia funcional de clave completa y dependencia funcional transitiva. Las siguientes
son descripciones y ejemplos ilustrativos para cada una de estas tres categorías de
dependencias funcionales.

---

<!-- página 144 -->

Dependencia funcional parcial
La dependencia funcional parcial ocurre cuando una columna de una relación depende
funcionalmente de un componente de una clave primaria compuesta.
Solo las claves primarias compuestas tienen componentes separados; Las claves primarias
de una sola columna no tienen componentes separados. Por lo tanto, la dependencia
funcional parcial puede ocurrir solo en los casos en que una relación tiene una clave
primaria compuesta.
En la figura 4.9, las dependencias funcionales:
CampaniaID →CampaniaNombre, FechaInicio, Duracion, AdministradorID,
CampaniaNombre
ModoID →Medio, Alcance
son dependencias funcionales parciales. CampaniaID es un componente de la clave
principal CampaniaID, ModoID y, por lo tanto, una dependencia donde CampaniaID
determina funcionalmente otras columnas en la relación es una dependencia funcional
parcial. Del mismo modo, ModoID también es un componente de la clave principal
CampaniaID,
ModoID
y,
por
lo
tanto,
una
dependencia
donde ModoID determina
funcionalmente otras columnas en la relación es una dependencia funcional parcial.
Dependencia funcional de clave completa
La dependencia funcional de clave completa ocurre cuando una clave principal
determina funcionalmente la columna de una relación y ningún componente separado de la
clave principal determina parcialmente la misma columna.
Si una relación tiene una clave principal de un solo componente (no compuesta), la clave
principal determina funcionalmente todas las demás columnas de una relación. Sin
embargo, si una relación tiene una clave compuesta, y partes de la clave determinan
parcialmente las columnas de una relación, entonces la clave primaria no determina
completamente funcionalmente las columnas parcialmente determinadas. En la figura 4.9, la
dependencia funcional:
CampaniaID, ModoID →Porcentaje
es una dependencia funcional clave completa. Las columnas CampaniaID y ModoID forman
la clave principal y juntas determinan funcionalmente la columna Porcentaje. Ninguno de los
componentes de la clave principal determina parcialmente la columna Porcentaje.

---

<!-- página 145 -->

Figura 4.10
Dependencia funcional transitiva
La dependencia funcional transitiva ocurre cuando las columnas que no son clave
determinan funcionalmente otras columnas que no son clave de una relación.
En la figura 4.9, la dependencia funcional:
AdministradorID →CampaniaNombre
es una dependencia funcional transitiva. AdministradorID es una columna sin clave y
CampaniaNombre también es una columna sin clave. Por lo tanto, AdministradorID que
determina funcionalmente CampaniaNombre es una dependencia funcional transitiva. La
figura 4.10 indica dependencias de clave completa, dependencias parciales y dependencias
transitivas en la relación CAMPANIA.
Otro ejemplo de dependencia funcional
La identificación de dependencias funcionales parciales, dependencias funcionales de clave
completas y dependencias funcionales transitivas es fundamental para llevar a cabo el
proceso de normalización típico. Para repasar estos conceptos, consideremos otra relación
y sus dependencias funcionales.
La Universidad Central utiliza una única relación RECLUTAMIENTO para almacenar sus
datos. Para cada reclutador en la Universidad, la relación RECLUTAMIENTO enumera el
número de estudiantes reclutados de una ciudad en particular. También enumera la
población de ciudades y estados desde donde la Universidad recluta estudiantes. La
relación RECLUTAMIENTO tiene las siguientes columnas:
ReclutadorID
Identificador del reclutador, un valor único para cada reclutador
ReclutadorNombre
Nombre del reclutador
EstadoID
Identificador de estado del reclutador (cada reclutador tiene un
solo estado)
EstadoNombre
Descripción del estado del reclutador
Ciudad
Nombre de una ciudad de donde el reclutador recluta. (Un
reclutador puede reclutar de varias ciudades y la misma ciudad
puede tener más de un reclutador reclutando en ella. Puede haber
más de una ciudad con el mismo nombre, pero dentro de un
estado cada ciudad tiene un nombre diferente).
Estado
Estado donde se encuentra la ciudad
EstadoPoblacion
Población del estado
CiudadPoblacion
Población de la ciudad

---

<!-- página 146 -->

NroReclutados
Número de reclutas que un reclutador en particular reclutó de una
ciudad en particular
Figura 4.11
La figura 4.11 muestra la relación RECLUTAMIENTO con sus registros. La clave principal de
esta relación es la clave compuesta ReclutadorID, Ciudad, Estado. Cada registro en esta
relación describe la cantidad de estudiantes reclutados de un reclutador en una ciudad. Por
lo tanto, el atributo que puede distinguir de manera única cada fila es una combinación del
atributo único de un reclutador y el atributo único de una ciudad y su estado. ReclutadorID
distingue a un reclutador, y una combinación de Ciudad y Estado distingue a una ciudad (la
columna Ciudad por sí sola no es suficiente, ya que puede haber ciudades con el mismo
nombre en diferentes estados, como se muestra en la figura 4.11).
La relación RECLUTAMIENTO tiene las siguientes dependencias funcionales:
ReclutadorID →ReclutadorNombre, EstadoID, EstadoNombre
EstadoID →EstadoNombre
Estado →EstadoPoblación
Ciudad, Estado →CiudadPoblación
ReclutadorID, Ciudad, Estado →NroReclutados
Las dependencias funcionales en la relación RECLUTAMIENTO también se muestran en la
figura 4.12.
Figura 4.12
ReclutadorID →ReclutadorNombre, EstadoID, EstadoNombre

---

<!-- página 147 -->

es una dependencia funcional parcial porque el componente ReclutadorID de la clave
primaria
ReclutadorID,
Ciudad,
Estado,
determina
funcionalmente
las
columnas
ReclutadorNombre, EstadoID y EstadoNombre.
EstadoID →EstadoNombre
es una dependencia funcional transitiva porque la columna que no es clave EstadoID
determina la columna no clave EstadoNombre.
Ciudad, Estado →CiudadPoblación
es una dependencia funcional parcial porque el componente Ciudad, Estado de la clave
principal
ReclutadorID,
Ciudad,
Estado
determina
funcionalmente
la
columna
CiudadPoblacion.
Estado →EstadoPoblación
es una dependencia funcional parcial porque el componente Estado de la clave principal
ReclutadorID, Ciudad, Estado determina funcionalmente una columna EstadoPoblacion.
ReclutadorID, Ciudad, Estado →NroReclutados
es una dependencia funcional de clave completa porque la clave principal ReclutadorID,
Ciudad, Estado determina la columna NroReclutados.
Normalización
Como mencionamos en la introducción, la normalización es un proceso que se utiliza para
mejorar el diseño de tablas de bases de datos. Este proceso se basa en las llamadas
formas normales. Cada forma normal contiene un conjunto de condiciones particulares que
una tabla debe satisfacer. Hay varias formas normales, las más importantes son la primera
forma normal (1NF), la segunda forma normal (2NF) y la tercera forma normal (3NF).
De una forma normal inferior a una superior, sus condiciones son cada vez más estrictas.
El proceso de normalización implica examinar cada tabla y verificar si cumple con una forma
normal particular. Si una tabla satisface una forma normal particular, entonces el siguiente
paso es verificar si esa relación satisface la siguiente forma normal superior. Si una tabla no
satisface una forma normal particular, se toman acciones para convertir la tabla en un
conjunto de tablas que sí satisfacen la forma normal particular.
La normalización a la primera forma normal se realiza en tablas no relacionales para
convertirlas en tablas relacionales. La normalización a formas normales posteriores (por
ejemplo, segunda forma normal, tercera forma normal) mejora el diseño de tablas
relacionales que contienen información redundante y alivia el problema de las anomalías de
actualización.
Para ilustrar la primera forma normal, utilizaremos la tabla no relacional VETERINARIA que
se presenta a continuación. Para ilustrar las formas normales segunda y tercera, usaremos
la tabla relacional CAMPANIA presentada anteriormente en este capítulo.

---

<!-- página 148 -->

Primera forma normal (1NF)
1NF establece que cada valor en cada columna de una tabla debe ser un solo valor del
dominio de la columna.
1NF
Una tabla está en 1NF si cada fila es única y ninguna columna en ninguna fila
contiene múltiples valores del dominio de la columna.
Recordemos que dos de las condiciones que deben cumplirse para cada relación
establecen lo siguiente:
●
Dentro de una tabla, cada fila debe ser única.
●
Dentro de cada fila, cada valor en cada columna debe tener un solo valor. No se
permiten múltiples valores del contenido representado por la columna en ninguna fila
de la tabla.
Por lo tanto, toda tabla relacional está, por definición, en 1NF. En consecuencia, la
normalización a 1NF no forma parte del proceso de normalización de las bases de datos
relacionales. La normalización a 1NF se realiza solo cuando una tabla no relacional se
convierte en una relación.
El ejemplo de la figura 4.13 muestra una tabla no relacional VETERINARIA. Cada cliente
puede tener varias mascotas. En la tabla que se muestra en la figura 4.13, los registros
pueden tener varios valores en las columnas MascotaNro, MascotaNombre y MascotaTipo.
Las columnas MascotaNro, MascotaNombre y MascotaTipo están relacionadas, ya que
todas se refieren al mismo concepto del mundo real de una mascota. Por lo tanto, las
columnas MascotaNro, MascotaNombre y MascotaTipo constituyen un grupo de columnas
multivaluadas relacionadas.
Figura 4.13
Tenga en cuenta que en la figura 4.13, las columnas MascotaNro, MascotaNombre y
MascotaTipo tienen un solo valor en el registro para el cliente Lisa, pero tienen múltiples

---

<!-- página 149 -->

valores para otros clientes. En particular, tienen tres valores en el registro de la cliente Lidia
y dos valores en el registro de la cliente Juan.
La normalización a 1NF convierte la tabla no relacional en una relación (o un conjunto de
relaciones) al eliminar la posibilidad de múltiples valores en la misma columna de un
registro.
Una forma de normalizar una tabla no relacional en 1NF y, por lo tanto, convertirla en una
relación, es crear un registro separado para cada ocurrencia de columnas multivaluadas
relacionadas, como se ilustra en la figura 4.14.
Figura 4.14
Como se muestra en la figura 4.14, los valores de las columnas ClienteID y ClienteNombre
que ocurrieron solo una vez en la tabla no relacional original para cada registro se repiten
tantas veces como los múltiples valores relacionados con mascotas ocurran para ese
registro. Por ejemplo, en la figura 4.14, los valores 222, Lidia aparecen tres veces porque la
clienta Lidia tiene tres mascotas, mientras que los valores 333, Juan aparecen dos veces
porque el cliente Juan tiene dos mascotas. Tenga en cuenta que la clave principal de la
relación normalizada a 1NF de esta manera es una clave compuesta formada por la clave
principal de la tabla no relacional original y una columna (o columnas) sin clave que tiene un
valor único dentro de las columnas multivaluadas relacionadas. Las columnas sin clave
combinadas con la clave principal original tienen un valor único para cada registro. En la
figura 4.14, la clave principal está compuesta por la columna ClienteID, que es la clave
principal
original,
y
la
columna
sin
clave
MascotaNro.
La
combinación
ClienteID,
MascotaNro identifica de manera única cada registro en la tabla que se muestra en la figura
4.14.

---

<!-- página 150 -->

Figura 4.15
Otra forma de normalizar una tabla no relacional en 1NF es crear una nueva tabla separada
para cada grupo de columnas multivaluadas relacionadas. Como se muestra en la figura
4.15, la nueva tabla separada MASCOTA captura el grupo de columnas relacionadas
MascotaNro, MascotaNombre y MascotaTipo que tenían múltiples valores por registro en la
tabla original. La nueva tabla separada contiene la clave principal de la tabla original
(ClienteID), que sirve como clave externa en la nueva tabla y como parte de la clave
principal de la nueva tabla. La otra parte de la clave primaria (MascotaNro) en la nueva tabla
es la columna (o conjunto de columnas) que, combinado con la clave foránea, tiene un valor
único para cada registro. La figura 4.15 ilustra el resultado de este proceso aplicado a la
tabla de la figura 4.13.
Tenga en cuenta que una tabla MASCOTA recién creada que contiene el grupo de
columnas mascota multivaluadas relacionadas incluye un registro separado para cada
ocurrencia
de
columnas
multivaluadas relacionadas, tal como se hizo en el caso
representado en la figura 4.14. Para normalizar una tabla a 1NF, se crea un registro
separado para cada ocurrencia de columnas multivaluadas relacionadas.
Ahora consideraremos un ejemplo ampliado con varios grupos de columnas relacionadas de
varios valores. La tabla de la figura 4.16 tiene dos grupos de columnas multivaluadas
relacionadas. Un grupo de columnas de varios valores relacionadas incluye las columnas de
mascotas MascotaNro, MascotaNombre y MascotaTipo, y el otro grupo de columnas de
varios valores relacionadas incluye las columnas de miembros del hogar MiembroNro,
MiembroNombre y MiembroRelacion.
Figura 4.16

---

<!-- página 151 -->

Figura 4.17
En los casos en que una tabla tiene varios grupos de columnas de valores múltiples
relacionadas, la normalización a 1NF se realiza mediante la creación de tablas separadas
para cada grupo de columnas de valores múltiples relacionadas. Esto se ilustra en la figura
4.17. Tenga en cuenta que en la figura 4.17, la clave principal compuesta de cada tabla
recién creada que representa uno de los grupos de columnas multivaluadas relacionadas
contiene la clave principal de la tabla original. La clave principal de la tabla MIEMBRO
contiene el ClienteID (clave principal de la tabla original, así como MiembroNro). La clave
principal de la tabla MASCOTA contiene el ClienteID (clave principal de la tabla original, así
como MascotaNro).
Es importante tener en cuenta que la normalización a 1NF no es parte del proceso de
normalización de relaciones en una base de datos relacional porque, como dijimos
anteriormente, cada relación en una base de datos relacional ya está en 1NF. La
normalización a 1NF se realiza solo cuando una tabla no relacional se convierte en una
relación. El proceso de normalización de tablas de bases de datos relacionales comienza
con la segunda forma normal (2NF).
Segunda forma normal (2NF)
Para una tabla relacional, el proceso de normalización comienza examinando si una tabla
relacional está en 2FN.
2FN
Una tabla está en 2NF si está en 1NF y si no contiene dependencias funcionales
parciales.

---

<!-- página 152 -->

Recuerda que una dependencia parcial ocurre cuando una parte de una clave compuesta
determina funcionalmente una columna de una relación. Si una relación tiene una clave
primaria de una sola columna, entonces no hay posibilidad de dependencias funcionales
parciales en esta relación. Tal relación está automáticamente en 2NF y no tiene que
normalizarse a 2NF. Sin embargo, las relaciones que tienen una clave primaria compuesta
pueden contener dependencias funcionales parciales. Si una relación con una clave
primaria compuesta tiene dependencias parciales, entonces no está en 2NF y debe
normalizarse a 2NF.
La normalización de una relación a 2NF crea relaciones adicionales para cada conjunto de
dependencias parciales en una relación. La clave principal de la relación adicional es la
parte de la clave principal que determina funcionalmente las columnas en la relación
original. Las columnas que estaban parcialmente determinadas en la relación original ahora
forman parte de la tabla adicional. La tabla original aún permanece después del proceso de
normalización a 2FN, pero ya no contiene las columnas parcialmente dependientes.
Demostraremos la normalización a 2NF usando la relación CAMPANIA. Considere las
dependencias funcionales que se muestran en la figura 4.10. Las dependencias parciales
en la relación CAMPANIA son:
CampaniaID →CampaniaNombre, FechaInicio, Duracion, AdministradorID,
AdministradorNombre
ModoID →Medio, Alcance
Figura 4.18
El resultado de normalizar la relación CAMPANIA a 2NF se muestra en la figura 4.18. Se
eliminan las dependencias parciales en la relación CAMPANIA. La relación modificada
resultante CAMPANIA contiene la dependencia funcional completa:
CampaniaID, ModoID →Porcentaje

---

<!-- página 153 -->

Para cada conjunto de dependencias parciales, se crea una tabla separada. Una nueva
relación CAMPANIA2 contiene la dependencia parcial anterior:
CampaniaID →CampaniaNombre, FechaInicio, Duracion, AdministradorID,
AdministradorNombre
Una nueva relación MODO contiene la dependencia parcial anterior:
ModoID →Medio, Alcance
La
relación
modificada
CAMPANIA2
ya
no
contiene las columnas que dependían
funcionalmente de partes de la clave principal (es decir, que dependían parcialmente).
Tercera forma normal (3NF)
Para una tabla relacional que está en 2NF, el proceso de normalización continúa
examinando si una tabla relacional está en 3NF.
3NF
Una tabla está en 3NF si está en 2NF y si no contiene dependencias funcionales
transitivas.
Recuerde que una dependencia transitiva ocurre cuando una columna que no es clave
determina otra columna que no es clave de una relación. Si una relación tiene dependencias
transitivas, entonces no está en 3NF y debe normalizarse a 3NF.
La normalización de una relación a 3NF crea relaciones adicionales para cada conjunto de
dependencias transitivas en una relación. La clave principal de la relación adicional es la
columna (o columnas) que no es clave que determina funcionalmente las columnas que no
son clave en la relación original. Las columnas que no son clave que se determinaron
transitivamente en la relación original ahora forman parte de la tabla adicional. La tabla
original aún permanece después de la normalización a 3NF, pero ya no contiene las
columnas transitivamente dependientes.
Demostraremos la normalización a 3NF usando el ejemplo CAMPANIA. Considere las
dependencias funcionales que se muestran en la Figura 4.18. Las relaciones CAMPANIA y
MODO no tienen dependencias transitivas y ya están en 3NF. Sin embargo, la relación
CAMPANIA2 tiene la siguiente dependencia transitiva:
AdministradorID →AdministradorNombre

---

<!-- página 154 -->

Figura 4.19
por lo que no está en 3NF. El resultado de normalizar la relación CAMPANIA2 con 3NF se
muestra en la Figura 4.19. Se elimina la dependencia transitiva en la relación CAMPANIA2 y
se crea una relación separada ADMINISTRADOR, que contiene la dependencia transitiva
anterior.
La relación modificada CAMPANIA2 ya no contiene las columnas que no son clave que
dependían funcionalmente de partes de otras columnas que no son clave (es decir, que
dependían transitivamente).
La figura 4.20 muestra los registros de datos de las relaciones 3FN que se muestran en la
figura 4.19. Compare los registros de la Figura 4.20 con los registros de la Figura 4.4.
Observe que ambas figuras muestran los mismos datos. En la Figura 4.4, los datos se
almacenan en una relación no normalizada que es propensa a anomalías de actualización.
Esos mismos datos se muestran en la Figura 4.20 en cuatro tablas normalizadas que no
son propensas a anomalías de actualización.
Note que en el proceso de normalizar una relación a 2NF y 3NF, comenzamos con una
relación y terminamos con múltiples relaciones conectadas a través de sus restricciones de
integridad referencial en un esquema relacional. Las cuatro relaciones que se muestran en
las Figuras 4.19 y 4.20 son el resultado de normalizar la relación CAMPANIA (de la Figura
4.4) a 3NF. La figura 4.21 muestra el esquema relacional que representa líneas de
restricción de integridad referencial que conectan las relaciones normalizadas.
3NF y otras formas normales
En la mayoría de los problemas del mundo real, la normalización a 3NF mediante la
eliminación de dependencias funcionales parciales y transitivas, como se ilustra en ésta
sección, es suficiente para eliminar redundancias innecesarias y la amenaza de anomalías
de actualización. Como hemos mostrado, para llevar a cabo la normalización a 3NF,
necesitábamos identificar el conjunto simplificado de dependencias funcionales (donde cada
columna
aparecía
en al menos una dependencia funcional) que incluía todas las
dependencias completas, parciales y transitivas no aumentadas y no equivalentes.

---

<!-- página 155 -->

Las formas normales superiores más allá de 3NF basadas en otros tipos de dependencias
funcionales (más allá de las dependencias funcionales transitivas, parciales y de clave
completa) tienen un valor principalmente teórico y no se verán.
Eliminando redundancias y resolviendo anomalías de actualización
Como mencionamos anteriormente, en relaciones que contienen datos redundantes, las
operaciones de actualización pueden causar anomalías de actualización. Usaremos el
ejemplo de la agencia de publicidad Press para ilustrar cómo la normalización elimina la
redundancia y resuelve las anomalías de actualización.
Figura 4.20

---

<!-- página 156 -->

Figura 4.21
Observe los registros que se muestran en la Figura 4.20. El nombre, la fecha de inicio y la
duración de cada campaña se enumeran solo una vez. El nombre de cada administrador de
campaña aparece solo una vez. El valor de los medios y el rango para cada modo de
campaña también se enumeran solo una vez. Los únicos valores que se repiten varias
veces y se refieren a la misma ocurrencia son los valores de clave externa, como el valor
CM100
que
aparece
dos
veces
en
la
columna
AdministradorID
en
relación
con
CAMPANIA2, o el valor 222 que aparece tres veces en la columna CampaniaID en relación
con CAMPANIA. Múltiples apariciones de valores de clave foránea en el conjunto 3NF de
tablas relacionales representan la redundancia necesaria, que es esencial para conectar
las tablas. Los siguientes ejemplos, que se muestran en la Figura 4.22, proporcionan una
ilustración de cómo el proceso de normalización resuelve las anomalías de actualización.

---

<!-- página 157 -->

Figura 4.22
Para ilustrar cómo la normalización resuelve un problema de anomalía de inserción,
considere el siguiente ejemplo. Supongamos que la agencia de publicidad decide comenzar
a usar otro modo de campaña para futuras campañas con ModoID: 7, Medio: Internet y
Alcance: Nacional. Este nuevo modo no se puede ingresar en la Figura 4.4 en la relación
CAMPANIA sin ingresar también una campaña real que use este modo. Por otro lado, en la
Figura 4.22, el nuevo modo de campaña 7, Internet, Nacional, se ingresó fácilmente en la
relación MODO sin tener que ingresar ningún otro dato.
Para ilustrar cómo la normalización resuelve un problema de anomalía de eliminación,
considere el siguiente ejemplo. Si la agencia de publicidad decide cancelar la campaña
publicitaria 444, al eliminar el registro relacionado con la campaña 444 en la relación
CAMPANIA en la Figura 4.4, también se eliminará el modo de campaña 6, Impreso,
Nacional (porque ninguna otra campaña está utilizando este modo en este momento) y la

---

<!-- página 158 -->

administradora de campaña 103, Nancy (porque ella no administra ninguna otra campaña
en este momento). Por otro lado, en el mismo escenario de la Figura 4.22, se eliminó el
registro relativo a la campaña 444 de la relación CAMPANIA2 (y también de la relación
CAMPANIA), pero el registro de campaña modo 6, Internet, Nacional permanece en la
relación MODO, y el registro de administradora de campaña 103, Nancy queda en la
relación ADMINISTRADOR.
Para ilustrar cómo la normalización resuelve un problema de anomalía de modificación,
considere el siguiente ejemplo. Si la agencia de publicidad decidiera extender la duración de
la campaña 222 de 30 días a 45 días, este cambio tendría que hacerse en tres registros
diferentes en la relación CAMPANIA de la Figura 4.4. Por otro lado, para el mismo
escenario, en la Figura 4.22, solo se necesita cambiar en un registro relacionado con la
campaña 222 en la relación CAMPANIA2.
Acerca de excepciones de normalización
En general, aspiramos a normalizar las relaciones de la base de datos con 3NF para
eliminar la redundancia de datos innecesaria y evitar anomalías en la actualización. Sin
embargo, la normalización a 3NF debe hacerse de manera juiciosa y pragmática, lo que en
algunos casos puede requerir no normalizar deliberadamente ciertas relaciones con 3NF.
Figura 4.26
Considere la relación AGENTE DE VENTAS, que se muestra en la Figura 4.26. Las
dependencias funcionales en la relación AGENTE se muestran en la Figura 4.27. La
relación AGENTE está en 2NF pero no en 3NF debido a la dependencia transitiva:
CodigoPostal →Ciudad, Estado
Figura 4.27

---

<!-- página 159 -->

Figura 4.28
Ciertamente podemos normalizar esta relación a 3NF, como se muestra en la Figura 4.28.
Sin embargo, también podemos decidir dejar la relación AGENTE como está. La decisión
debe tomarse al evaluar si el beneficio de no tener las columnas Ciudad y Estado en la tabla
AGENTE vale la pena crear una relación separada CP-CIUDAD y, por lo tanto, aumentar la
complejidad del esquema relacional al agregar otra tabla y una restricción de integridad
referencial. Por ejemplo, si los agentes de ventas dentro del mismo código postal son
pocos, los beneficios de la normalización a 3NF serían marginales. En tal caso, podemos
decidir que la redundancia causada por mantener las columnas Estado y Ciudad en la
relación original es aceptable y dejaría la relación original como está. Como otro ejemplo,
considere una empresa que tiene un límite de dos agentes de ventas por estado. En tal
caso, la posible redundancia en la relación original es aún menor y hay aún menos incentivo
para normalizarla.
Por supuesto, estos ejemplos no significan que la normalización sea siempre un proceso
opcional. La directriz es normalizar las bases de datos relacionales a 3NF, al tiempo que
permite la posibilidad de hacer una excepción con ciertas relaciones por razones claras y
legítimas.
Normalización versus performance
Como hemos demostrado, durante el proceso de normalización, las relaciones más grandes
con columnas que contienen datos redundantes se descomponen en relaciones más
pequeñas. Una de las implicaciones de este proceso es que los datos que residían en
menos relaciones antes de la normalización se distribuyen en más relaciones después de la
normalización. Esto tiene un efecto en el rendimiento de las recuperaciones de datos.
Demostraremos este efecto con el siguiente ejemplo.
Compare la relación de la Figura 4.4 con las relaciones de la Figura 4.20. Las relaciones de
la figura 4.20 representan una versión normalizada de la relación de la figura 4.4.
Supongamos que una de las recuperaciones más frecuentes en Press es:
Para cada modo de una campaña en particular, recupere las siguientes
columnas: CampaniaID, CampaniaNombre, AdministradorID,
AdministradorNombre, ModoID, Medio, Alcance y Porcentaje.
El resultado de esta recuperación se muestra en la Figura 4.29.
Recuperar esta información para la tabla que se muestra en la figura 4.4 simplemente
implica seleccionar ocho columnas de la tabla CAMPANIA. Por otro lado, recuperar esa

---

<!-- página 160 -->

misma
información
de
la
Figura
4.20
implica
unir
relaciones
CAMPANIA2,
ADMINISTRADOR, MODO y CAMPANIA y luego seleccionar las ocho columnas solicitadas
del resultado de la unión. El proceso de unir relaciones y luego recuperar los datos del
resultado de tal unión requiere más tiempo que recuperar los datos de una tabla no
normalizada. En consecuencia, algunas recuperaciones (como la que se muestra en la
Figura 4.29) son más rápidas desde bases de datos no normalizadas que desde bases de
datos normalizadas. En tales casos, existe una compensación entre la reducción de la
redundancia frente a una recuperación (rendimiento) más rápida.
Figura 4.29
La desnormalización se refiere a revertir el efecto de la normalización al unir relaciones
normalizadas en una relación que no está normalizada. La desnormalización se puede
utilizar para tratar el problema de la normalización frente al rendimiento. Por ejemplo, una
versión maestra normalizada de la base de datos relacional (p. ej., Figura 4.20) se puede
mantener como un lugar donde se realizan todas las inserciones, modificaciones y
eliminaciones de los datos para evitar anomalías de actualización. Al mismo tiempo, se
puede crear periódicamente una copia física desnormalizada de la base de datos (p. ej.,
Figura 4.4) a partir de la versión maestra y almacenarla para que pueda usarse para
recuperaciones más rápidas. De esa forma, todas las actualizaciones se realizan en la copia
maestra que no es propensa a anomalías de actualización. Las recuperaciones de datos
que son más rápidas en las relaciones desnormalizadas se pueden realizar en la copia
desnormalizada para un mejor rendimiento. Tal configuración puede ser conveniente, por
ejemplo, en entornos donde hay pocas actualizaciones de datos pero hay muchas lecturas
de datos. La copia desnormalizada se puede recrear tantas veces como sea necesario
según los requisitos del usuario para los datos más recientes.
La desnormalización no es un proceso predeterminado que deba llevarse a cabo en todas
las circunstancias. En cambio, la desnormalización debe usarse con prudencia, después de
analizar sus costos y beneficios.
Acerca del modelado de ER versus normalización
Como vimos con anterioridad, el modelado de ER seguido del mapeo en un esquema
relacional es uno de los métodos de diseño de bases de datos más comunes. Cuando se
enfrenta a una tabla no normalizada, como la de la figura 4.4, en lugar de identificar las
dependencias funcionales y pasar por la normalización a 2NF y 3NF, un diseñador puede

---

<!-- página 161 -->

analizar la tabla y crear un diagrama ER basado en ella. Ese diagrama ER se puede
mapear en un esquema relacional.
Echemos otro vistazo a la relación en la figura 4.4. Un diseñador de base de datos que
analice esta tabla (mirando las columnas, examinando los registros de datos en esta tabla y
hablando con los usuarios de esta tabla) podría crear los siguientes requisitos:
La base de datos para la agencia de publicidad Press debe capturar datos sobre el
siguiente:
●
Para cada campaña publicitaria: un ID de campaña (único), un nombre de campaña
(único), una fecha de inicio y una duración de la campaña
●
Para cada administrador de campañas publicitarias: un ID (único) y un nombre;
●
Para cada modo de campaña publicitaria: un ID (único), el medio y su alcance;
●
Cada campaña publicitaria es administrada por exactamente un administrador de
campaña. Cada administrador de campaña administra al menos una campaña
publicitaria, pero puede administrar más de una.
●
Cada campaña publicitaria utiliza al menos un modo de campaña, pero puede utilizar
más de uno. Un modo de campaña publicitaria puede ser utilizado por varias
campañas, pero tiene que ser utilizado por alguna campaña.
●
Cada vez que una campaña publicitaria utiliza un modo de campaña, realizamos un
seguimiento del porcentaje de presupuesto utilizado por esa campaña publicitaria
para ese modo.
Con base en estos requisitos, se crearía un diagrama ER, que se muestra en la Figura 4.30.
El resultado de mapear el diagrama ER de la figura 4.30 en un esquema relacional se
muestra en la figura 4.31.
Tenga en cuenta que el esquema relacional de la Figura 4.31 es exactamente el mismo que
el esquema relacional de la Figura 4.21 que fue el resultado de normalizar la relación
CAMPANIA con 3NF.
Cuando la técnica de modelado ER se utiliza correctamente, el resultado es un esquema
relacional con tablas relacionales que están bien diseñadas y suficientemente normalizadas
para 3NF. Por ejemplo, si examina las relaciones en los esquemas relacionales de las
Figuras 3.32 o 3.59, notará que todas las relaciones en esos esquemas están en 3NF.
La normalización, como proceso explícito, no es una parte necesaria de un proyecto de
diseño de base de datos llevado a cabo correctamente. La normalización de las bases de
datos relacionales a 3NF se realiza cuando nos encontramos ante relaciones que no han
sido diseñadas adecuadamente y hay que mejorarlas. Tales escenarios no son raros y, por
lo tanto, es importante estar familiarizado con el proceso de normalización.

---

<!-- página 162 -->

Figura 4.30
Figura 4.31

---

<!-- página 163 -->

Unidad V - SQL
Introducción
Ahora cubriremos el lenguaje de consulta estructurado (SQL) y sus funcionalidades. SQL se
puede utilizar para algo más que consultar una base de datos. También se puede utilizar
para crear la base de datos; agregar, modificar y eliminar estructuras de bases de datos; e
insertar, eliminar y modificar registros en la base de datos. Demostraremos los comandos
SQL y la funcionalidad para crear y usar bases de datos usando ejemplos ilustrativos.
Prácticamente todos los software DBMS relacionales modernos utilizan SQL. Una de las
razones del éxito y la ubicuidad de las bases de datos relacionales es que SQL funciona
como un lenguaje de consulta estándar que se puede usar (con variaciones dialécticas
menores) con la mayoría de las herramientas de software DBMS relacionales. Por ejemplo,
Oracle, MySQL, Microsoft SQL Server, PostgreSQL, Teradata, IBM DB2, MySQL, MariaDB y
muchos otros utilizan SQL.
Dado que SQL es un lenguaje estandarizado, la curva de aprendizaje para cambiar de un
DBMS relacional a otro es corta. La capacidad de escribir consultas para la recuperación de
datos y otras sentencias SQL no depende de un solo proveedor, sino del conocimiento del
usuario de este lenguaje universal.
Aunque existe un estándar SQL (discutido al final), diferentes herramientas RDBMS pueden
usar
versiones
ligeramente
diferentes
del
lenguaje.
A
lo
largo
de
esta
unidad,
presentaremos los comandos SQL básicos que son comunes para la mayoría de los
paquetes RDBMS contemporáneos.
Descripción general de los comandos SQL
SQL es un lenguaje de base de datos integral con comandos que cubren múltiples
funcionalidades. Según su funcionalidad, los comandos SQL se pueden dividir en las
siguientes categorías:
●
Lenguaje de definición de datos (DDL)
●
Lenguaje de manipulación de datos (DML)
●
Lenguaje de control de datos (DCL)
●
Lenguaje de control de transacciones (TCL)
Primero daremos una breve descripción del propósito de las diferentes categorías de
comandos SQL. Luego presentaremos ejemplos de los comandos SQL individuales.
Lenguaje de definición de datos (DDL)
Las sentencias DDL se utilizan para crear y modificar la estructura de la base de datos.
Recuerde que la estructura de una base de datos relacional está representada por un

---

<!-- página 164 -->

esquema relacional que representa las relaciones de la base de datos y sus restricciones de
integridad referencial. El propósito del DDL es permitir la implementación del esquema
relacional (y estructuras adicionales, como índices y otras restricciones) como una base de
datos relacional real. Ejemplos de los comandos DDL SQL son:
●
CREATE
●
ALTER
●
DROP
Cada uno de estos comandos SQL para crear y modificar la estructura de la base de datos
se explicará e ilustrará con ejemplos.
Lenguaje de manipulación de datos (DML)
Las declaraciones DML se utilizan para manipular los datos dentro de la base de datos. Las
declaraciones DML incluyen los comandos para insertar, modificar, eliminar y recuperar los
datos en la base de datos.
Una vez que se implementa un esquema relacional como una base de datos relacional real,
los datos se insertarán en él. Durante la vida útil de la base de datos, se pueden insertar
datos adicionales y los datos también se pueden modificar y/o eliminar. DML incluye los
siguientes comandos para la inserción, modificación y eliminación de los registros de datos:
●
INSERT
●
UPDATE
●
DELETE
Estos comandos SQL para insertar, modificar y eliminar los datos en la base de datos
relacional se explicarán e ilustrarán con ejemplos.
Las declaraciones DML también incluyen el siguiente comando para la recuperación de
datos:
●
SELECT
La recuperación de datos, también conocida como consulta, es la operación que se realiza
con mayor frecuencia en los datos de las bases de datos. En consecuencia, el comando
SELECT es el comando SQL más utilizado. La instrucción SELECT puede ir acompañada
de otras palabras clave de SQL. El comando SELECT y las palabras clave de SQL que lo
acompañan se explicarán e ilustrarán con ejemplos.
Lenguaje de control de datos (DCL) y Lenguaje de control de
transacciones (TCL)
Las sentencias DCL y TCL se utilizan en varios procesos relacionados con el mantenimiento
de la base de datos y el uso administrativo. Los comandos DCL facilitan el proceso de
control de acceso a los datos, mientras que TCL se usa para administrar las transacciones
de la base de datos.

---

<!-- página 165 -->

Tipos de datos SQL
Cuando las relaciones se crean mediante comandos SQL, cada columna de cada relación
tiene un tipo de datos específico. A continuación se enumeran algunos de los tipos de datos
SQL más utilizados:

---

<!-- página 166 -->

Breves notas de sintaxis SQL
Antes de ilustrar los comandos SQL individuales con ejemplos, aquí hay algunas notas
breves sobre la sintaxis SQL:

---

<!-- página 167 -->

●
Un punto y coma que sigue al final de una instrucción SQL indica el final del
comando SQL. En una lista de varias sentencias SQL, el punto y coma indica dónde
termina cada sentencia SQL.
●
Las palabras clave de SQL, así como los nombres de tablas y columnas utilizados
en los comandos de SQL, no distinguen entre mayúsculas y minúsculas. Podríamos
usar letras mayúsculas o minúsculas para la declaración (es decir, "SELECT" es lo
mismo que "select" o "SeLeCt"). Para facilitar la lectura, usamos letras mayúsculas
para las palabras clave de SQL y letras minúsculas para los nombres de tablas y
columnas (esta es una de las posibles notaciones de apariencia que se podrían
haber elegido).
●
Una instrucción SQL se puede escribir como una oración larga en una línea de texto.
Sin embargo, por razones de legibilidad, las instrucciones SQL generalmente se
dividen en varias líneas de texto.
Los ejemplos de SQL en este capítulo se pueden ejecutar tal como están escritos en la
mayoría de los paquetes RDBMS modernos. Los casos en los que un comando enumerado
en este capítulo tiene una sintaxis alternativa se indican al final del capítulo.
CREATE TABLE
El comando SQL CREATE TABLE se usa para crear y conectar tablas relacionales. Para
ilustrar la utilización de los comandos CREATE TABLE, usaremos el ejemplo de la base de
datos del departamento de ventas de la empresa minorista visto anteriormente, que se
repite aquí como figura 5.1a por comodidad.
El código SQL que se muestra en la Figura 5.1b utiliza sentencias CREATE TABLE para
crear las tablas representadas por el esquema relacional para la base de datos del
Departamento de Ventas de la empresa minorista, que se muestra en la Figura 5.1a.
En la sintaxis del comando CREATE TABLE, se coloca un paréntesis abierto después de la
parte CREATE TABLE <nombretabla> de la instrucción. A esto le siguen expresiones de
columna que especifican los nombres de columna, el tipo de datos de la columna y las
posibles restricciones de columna. Un ejemplo de tal restricción es la restricción NOT NULL,
que especifica que la columna no es opcional. Cada una de las expresiones de columna
está separada por una coma.
Las expresiones que especifican los detalles de la columna van seguidas de las
expresiones que especifican las restricciones de la tabla, como claves primarias y claves
externas. La declaración CREATE TABLE termina con un paréntesis de cierre.
Observe las sentencias CREATE TABLE. La primera instrucción CREATE TABLE crea la
relación PROVEEDOR, que tiene dos columnas: ProveedorID y ProveedorNombre. Para

---

<!-- página 168 -->

cada columna, se especifica un tipo de datos. Ambas columnas tienen una designación
NOT NULL, porque ninguna es una columna opcional (una columna opcional no tendría una
designación NOT NULL). Las expresiones que especifican los detalles de las columnas van
seguidas de la expresión que especifica qué columna (o columnas) es la clave principal.
Para la tabla PROVEEDOR, la columna ProveedorID es la clave principal. Para ver un
ejemplo de una declaración CREATE TABLE que especifica una clave primaria compuesta,
observe el comando CREATE TABLE para la relación INCLUYE. Esta declaración CREATE
TABLE especifica una clave primaria compuesta, formada por dos columnas, ProductoID y
TransaccionID, para la relación INCLUYE.
Si una tabla tiene una clave externa, la sentencia CREATE TABLE especifica la restricción
de integridad referencial enumerando la columna de la clave externa y la tabla a la que hace
referencia la clave externa. Por ejemplo, la declaración CREATE TABLE para la relación
PRODUCTO especifica dos restricciones de integridad referencial para dos claves foráneas:
ProveedorID y CategoriaID.
La expresión:
FOREIGN KEY (ProveedorID) REFERENCES PROVEEDOR(ProveedorID)
especifica que la columna de clave externa ProveedorID en la relación PRODUCTO se
refiere a la columna de clave primaria ProveedorID de la relación PROVEEDOR. En algunos
RDBMS, esta expresión también se puede abreviar de la siguiente manera:
FOREIGN KEY (ProveedorID) REFERENCES PROVEEDOR
La versión abreviada de la expresión especifica que la columna de clave externa
ProveedorID en la relación PRODUCTO se refiere a la clave principal de la relación

---

<!-- página 169 -->

PROVEEDOR sin indicar explícitamente el nombre de la columna de clave principal en la
relación PROVEEDOR.
Figura 5.1a
Las sentencias CREATE TABLE de la figura 5.1b están ordenadas de modo que las
relaciones que tienen claves foráneas se creen después de las relaciones a las que hacen
referencia las claves foráneas. Por ejemplo, tuvimos que crear las relaciones PROVEEDOR
y CATEGORIA antes de poder crear la relación PRODUCTO, porque las claves foráneas en
la relación PRODUCTO se refieren a las claves primarias de las relaciones PROVEEDOR y
CATEGORIA.

---

<!-- página 171 -->

Figura 5.1b
En la práctica, los programadores de la base de datos a menudo no escriben directamente
las sentencias CREATE TABLE. En muchos casos, en lugar de escribir manualmente las
sentencias CREATE TABLE, los desarrolladores utilizan las llamadas herramientas CASE
(ingeniería de software asistida por computadora), que son capaces de emitir declaraciones
CREATE automáticamente, en lugar del programador. Por ejemplo, un programador podría
usar una herramienta CASE para crear un esquema relacional, como el que se muestra en
la figura 5.1a, y especificar los tipos de datos (y otras restricciones, como NOT NULL) para
las columnas. Una vez que se especifican los detalles de la columna para cada relación, el
programador podría activar una funcionalidad (por ejemplo, haciendo clic en el botón
apropiado en la herramienta CASE) para la creación automática de las declaraciones
CREATE TABLE. Esto generaría automáticamente las sentencias CREATE TABLE que se
muestran en la Figura 5.1b.
DROP TABLE
El comando DROP TABLE se usa para eliminar una tabla de la base de datos. Por ejemplo,
si quisiéramos eliminar la tabla INCLUYE, emitiríamos la siguiente sentencia:
DROP TABLE incluye;

---

<!-- página 172 -->

Tenga en cuenta que si quisiéramos eliminar cada una de las tablas de la base de datos del
departamento de ventas de la empresa minorista, una por una, tendríamos que prestar
atención al orden de las declaraciones DROP TABLE. La restricción de integridad
referencial evita la eliminación de una clave principal que tiene claves externas existentes
que hacen referencia a ella. Por lo tanto, tendríamos que descartar las tablas que tienen las
claves foráneas antes de poder descartar las tablas a las que se refieren las claves
foráneas.
Por ejemplo, el siguiente orden de DROP TABLES no es válido:
Secuencia DROP TABLE Base de datos empresa minorista NO VÁLIDO:
DROP TABLE REGION;
DROP TABLE ALMACEN;
DROP TABLE TRANSACCION;
DROP TABLE PRODUCTO;
DROP TABLE PROVEEDOR;
DROP TABLE CATEGORIA;
DROP TABLE CLIENTE;
DROP TABLE Incluye;
Esta secuencia de declaraciones DROP TABLE no es válida (es decir, algunas de las
declaraciones no se ejecutarán) porque intenta descartar relaciones a las que se refieren
otras relaciones existentes. No podemos descartar la relación REGION mientras la relación
ALMACEN hace referencia a ella. Primero tendríamos que eliminar la relación ALMACEN
antes de poder eliminar la relación REGION.
El siguiente orden de DROP TABLES es válido:
DROP TABLE secuencia base de datos empresa minorista VÁLIDO:
DROP TABLE Incluye;
DROP TABLE transaccion;
DROP TABLE almacen;
DROP TABLE producto;
DROP TABLE proveedor;
DROP TABLE region;
DROP TABLE categoria;
DROP TABLE cliente;

---

<!-- página 173 -->

En esta secuencia de instrucciones DROP TABLE, no se descarta ninguna tabla antes de
que se elimine una tabla con una clave externa que hace referencia a ella. Si ejecutamos
esta secuencia de instrucciones DROP TABLE, se eliminarán todas las tablas de la base de
datos del departamento de ventas de la empresa minorista. En ese caso, el Departamento
de Ventas de la Empresa Minorista se puede volver a crear ejecutando de nuevo todas las
sentencias enumeradas en la Figura 5.1b.
Figura 5.1c
INSERT INTO
La declaración INSERT INTO se usa para llenar las relaciones creadas con datos. Para
ilustrar la utilización de los comandos INSERT INTO, completaremos la base de datos del
departamento de ventas de la empresa minorista con los registros que se muestran en la
Figura 3.33, repetidos aquí como Figura 5.1c por conveniencia.
La figura 5.1d muestra las instrucciones INSERT INTO que se encuentran en la base de
datos del departamento de ventas de la empresa minorista. La parte INSERT INTO
<nombretabla> de la declaración va seguida de la palabra clave VALUES y luego un
paréntesis de apertura, después de lo cual se enumeran los valores que se insertarán. El
comando termina con el paréntesis cerrado. La primera declaración INSERT INTO en la
Figura 5.1d inserta en la relación PROVEEDOR un valor PG en la columna ProveedorID y
un valor Pacífico Green en la columna ProveedorNombre. El orden en que aparecen las
columnas en la instrucción CREATE TABLE determina el orden en que se enumerarán los
valores en la instrucción INSERT INTO. La declaración CREATE TABLE para la relación
PROVEEDOR creó la columna ProveedorID primero y la columna ProveedorNombre en
segundo lugar. Por lo tanto, cada declaración INSERT INTO para la relación PROVEEDOR

---

<!-- página 174 -->

enumerará el valor que se insertará en la columna ProveedorID primero y el valor que se
insertará en la columna ProveedorNombre en segundo lugar.
Figura 5.1d
Alternativamente, una declaración INSERT INTO puede tener la siguiente forma: INSERT
INTO <nombretabla> (<nombrecolumna>, <nombrecolumna>, ...) VALUES (valor, valor, ...);
donde el orden de los valores insertados está dictado por el orden de las columnas que
aparecen después del nombre de la tabla en la instrucción INSERT INTO.
Por ejemplo, el último comando INSERT INTO de la figura 5.1d se podría haber escrito de la
siguiente manera:

---

<!-- página 175 -->

INSERT INTO incluye (productoid, transaccionid, cantidad) VALUES (‘6X6’, 'T555', 1);
Esta forma de escribir INSERT INTO permite un orden de valores en la sentencia INSERT
INTO diferente del orden especificado en la sentencia CREATE TABLE. Por otro lado,
también requiere especificar el nombre de cada columna, lo que se suma a la sintaxis del
comando INSERT INTO. Cuando los nombres de las columnas se escriben explícitamente,
no se deben especificar todas las columnas. Podemos completar solo las columnas para las
que tenemos los datos. Sin embargo, las columnas que no son opcionales siempre deben
completarse, independientemente de la sintaxis de INSERT INTO que se utilice.
En las sentencias SQL, los valores de las columnas con tipos de datos de carácter, como
CHAR o VARCHAR, deben estar delimitados entre comillas, mientras que los valores de los
tipos de datos numéricos, como INT o NUMERIC, no necesitan estar delimitados. Por
ejemplo, ambos valores en las declaraciones INSERT INTO para la relación PROVEEDOR
en la Figura 5.1d están delimitados con comillas, porque ambas columnas de la relación
PROVEEDOR tienen tipos de datos de caracteres. Por otro lado, el tercer valor en las
sentencias INSERT INTO para la relación PRODUCTO no está delimitado porque la tercera
columna en la sentencia CREATE TABLE para la relación PRODUCTO es PrecioProducto y
su tipo de dato es numérico.
Observe la Figura 5.1d y tenga en cuenta que las tablas que no tienen claves foráneas se
rellenan primero. Las tablas que tienen claves foráneas no pueden llenar sus columnas de
clave foránea antes de que se completen los valores de las columnas de clave principal a
las que se refieren. Las restricciones de integridad referencial requieren que los valores de
la clave principal a los que hace referencia una clave externa se ingresen antes de que se
puedan ingresar los valores de la clave externa.
SELECT
La instrucción SQL emitida con mayor frecuencia es la instrucción SELECT, utilizada para la
recuperación de datos de las relaciones de la base de datos. El resultado de una sentencia
SELECT es una tabla que enumera los registros solicitados por la sentencia SELECT. En su
forma simple, una declaración SELECT está estructurada de la siguiente manera:
SELECT <columnas> FROM <tabla>
En la cláusula SELECT, la palabra clave SELECT va seguida de la lista de columnas que se
recuperarán, separadas por comas. Una cláusula FROM siempre va precedida de una
cláusula SELECT. En la cláusula FROM, la palabra clave FROM va seguida del nombre de
la relación (o relaciones, separadas por coma) de las que se recuperarán los datos. La
consulta 1 es un ejemplo de la forma más simple de la instrucción SELECT:
Consulta 1 texto: Recuperar todo el contenido de la relación PRODUCTO.
Consulta 1: SELECT productoid, productonombre, productoprecio, proveedorid, categoriaid
FROM producto;
El resultado de la Consulta 1 se muestra en la Figura 5.2.

---

<!-- página 176 -->

Figura 5.2
La consulta 1 recupera todo el contenido de la relación PRODUCTO. El mismo resultado se
hubiera logrado con la Consulta 1a:
Consulta 1a: SELECT * FROM producto;
El significado del símbolo * después de la palabra clave SELECT es "todas las columnas".
Enumerar cada columna por nombre o usar el símbolo * logra el mismo resultado. Por lo
tanto, es más corto y sencillo usar el símbolo * cuando queremos mostrar todas las
columnas de la relación. La única excepción a esta directriz es el escenario en el que
queremos mostrar todas las columnas, pero en un orden diferente al orden de las columnas
utilizado en la instrucción CREATE TABLE. La consulta 2 ilustra tal caso.
Texto de consulta 2: recuperar todo el contenido de la relación PRODUCTO y mostrar las
columnas en el siguiente orden:
ProductoNombre, ProductoID, ProveedorID, CategoriaID, ProductoPrecio
Consulta 2: SELECT ProductoNombre, ProductoID, ProveedorID, CategoriaID,
ProductoPrecio FROM producto;
El resultado de la Consulta 2 se muestra en la Figura 5.2a.
Figura 5.2a
La consulta 3 ilustra un caso en el que se utiliza la cláusula SELECT para reducir el número
de columnas de la tabla que se mostrarán en el resultado de una consulta.
Texto de consulta 3: para la relación PRODUCTO, muestre las columnas ProductoID y
ProductoPrecio.
Consulta 3: SELECT productoid, productoprecio FROM producto;

---

<!-- página 177 -->

El resultado de la Consulta 3 se muestra en la Figura 5.3.
Figura 5.3
Además de mostrar columnas, la cláusula SELECT se puede usar para mostrar atributos
derivados (columnas calculadas) representados como expresiones. Una declaración
SELECT se puede estructurar de la siguiente manera:
SELECT <columnas, expresiones> FROM <tabla>
La consulta 3a ilustra tal caso.
Texto de la consulta 3a: para la relación PRODUCTO, muestre las columnas ProductoID y
ProductoPrecio y una columna que muestre ProductoPrecio con un aumento de un 10%.
Consulta 3a: SELECT productoid, productoprecio, productoprecio * 1.1 FROM producto;
El resultado de la Consulta 3a se muestra en la Figura 5.3a.
Figura 5.3a
La instrucción SELECT FROM puede contener otras palabras clave opcionales, como
WHERE, GROUP BY, HAVING y ORDER BY, apareciendo en este orden:
SELECT <columnas, expresiones>
FROM <tablas>
WHERE <condición de selección de fila>
GROUP BY <columnas de agrupación>
HAVING <condición de selección de grupo>
ORDER BY <ordenar columnas, expresiones>

---

<!-- página 178 -->

Ilustraremos el uso de estas palabras clave en ejemplos a continuación.
WHERE
La instrucción SELECT puede incluir la condición WHERE, que determina qué filas se
deben recuperar y, en consecuencia, qué filas no se deben recuperar. La consulta 4
muestra un ejemplo simple de una consulta SELECT con la condición WHERE.
Texto de consulta 4: recupere la identificación del producto, el nombre del producto, la
identificación del proveedor y el precio del producto para cada producto cuyo precio sea
superior a $100.
Consulta 4: SELECT productoid, productonombre, proveedorid, productoprecio FROM
producto WHERE productoprecio > 100;
El resultado de la Consulta 4 se muestra en la Figura 5.4.
Figura 5.4.
Las filas con un valor de ProductoPrecio superior a $100 se recuperan y las filas cuyo valor
de ProductoPrecio no supera los $100 no se recuperan.
La condición lógica que determina qué registros recuperar puede utilizar uno de los
siguientes operadores lógicos de comparación:
●
= Igual a
●
< Menos de
●
> mayor que
●
<= menor o igual que
●
>= mayor o igual que
●
!= No igual a
●
<> No es igual a (notación alternativa)
Dentro de una cláusula WHERE, se puede usar una expresión de comparación múltiple,
conectada por los operadores lógicos booleanos AND u OR.
La consulta 5 muestra un ejemplo de una expresión de comparación múltiple dentro de una
cláusula WHERE.
Texto de consulta 5: recupere la identificación del producto, el nombre del producto, la
identificación del proveedor y el precio del producto para cada producto en la categoría FW
cuyo precio sea igual o inferior a $110.
Consulta 5: SELECT productoid, productonombre, proveedorid, productoprecio FROM
producto WHERE productoprecio <= 110 and categoriaid = 'FW';

---

<!-- página 179 -->

El resultado de la Consulta 5 se muestra en la Figura 5.5.
Figura 5.5
Tenga en cuenta que cuando los valores del tipo de datos de carácter se utilizan en la
consulta, deben delimitarse con comillas (por ejemplo, 'FW'), tal como fue el caso en la
instrucción INSERT INTO.
DISTINCT
La palabra clave DISTINCT se puede usar junto con la instrucción SELECT. Para ilustrar su
propósito, primero considere la Consulta 6.
Texto de consulta 6: Recuperar el valor ProveedorID para cada registro en la relación
PRODUCTO
Consulta 6: SELECT proveedorid FROM producto;
El resultado de la Consulta 6 se muestra en la Figura 5.6.
Figura 5.6
La relación PRODUCTO tiene seis registros y el resultado que se muestra en la figura 5.6
enumera un valor ProveedorID para cada uno de los registros. Tenga en cuenta que aunque
el resultado de una consulta se muestra como una tabla, dicha tabla no corresponde a la
definición de una tabla relacional, ya que cada fila de la tabla no es única.
Si quisiéramos mostrar qué valores de ProveedorID existen en la tabla PRODUCTO, sin
repetirlos varias veces, emitiríamos la Consulta 7.
Texto de consulta 7: muestra una instancia de todos los valores diferentes de ProveedorID
en la relación PRODUCTO.
Consulta 7: SELECT DISTINCT proveedorid FROM producto;

---

<!-- página 180 -->

El resultado de la Consulta 7 se muestra en la Figura 5.7.
Figura 5.7
El uso de la palabra clave DISTINCT después de la palabra clave SELECT eliminó los
valores duplicados del resultado de la consulta.
ORDER BY
Si quisiéramos ordenar los resultados de la consulta por una o más columnas, usaríamos la
palabra clave ORDER BY dentro de la consulta SELECT. Considere la consulta 8, que
solicita que sus resultados se ordenen por precio del producto.
Texto de consulta 8: recupere la identificación del producto, el nombre del producto, la
identificación de la categoría y el precio del producto para cada producto en la categoría de
productos FW, ordenados por precio.
Consulta 8: SELECT productoid, productonombre, categoriaid, productoprecio FROM
producto WHERE categoriaid = 'FW' ORDER BY productoprecio;
El resultado de la Consulta 8 se muestra en la Figura 5.8.
Figura 5.8
De forma predeterminada, ORDER BY ordena los datos en orden ascendente. Si queremos
ordenar en orden descendente, podemos usar la palabra clave DESC como se muestra en
la consulta 9.
Texto de consulta 9: recupere la identificación del producto, el nombre del producto, la
identificación de la categoría y el precio del producto para cada producto en la categoría de
productos FW, ordenados por precio del producto en orden descendente.
Consulta 9: SELECT productoid, productonombre, categoriaid, productoprecio FROM
producto WHERE categoriaid = 'FW' ORDER BY productoprecio DESC;
El resultado de la Consulta 9 se muestra en la Figura 5.9.

---

<!-- página 181 -->

Figura 5.9
El resultado de una consulta se puede ordenar por varias columnas, como se ilustra en la
Consulta 10.
Texto de consulta 10: recupere la identificación del producto, el nombre del producto, la
identificación de la categoría y el precio del producto para cada producto, ordenados por
identificación de categoría y, dentro de la misma identificación de categoría, por precio del
producto.
Consulta 10: SELECT productoid, productonombre, categoriaid, productoprecio FROM
producto ORDER BY categoriaid, productoprecio;
El resultado de la Consulta 10 se muestra en la Figura 5.10.
La consulta 10 ordena los resultados primero por CategoriaID y luego por ProductoPrecio.
Figura 5.10

---

<!-- página 182 -->

LIKE
Si quisiéramos recuperar los registros cuyos valores coinciden parcialmente con ciertos
criterios, usaríamos la palabra clave LIKE junto con la cláusula WHERE del comando
SELECT. Considere la consulta 11.
Texto de consulta 11: recupere el registro de cada producto cuyo nombre de producto
contenga la frase "Bota".
Consulta 11: SELECT * FROM producto WHERE productonombre LIKE '%Bota%';
El resultado de la Consulta 11 se muestra en la Figura 5.11.
Figura 5.11
El significado del símbolo comodín "%" es "cero o más caracteres". Por lo tanto, esta
consulta recuperará todos los registros que tengan la frase "Bota" en la columna
ProductoNombre precedida o seguida de cualquier cadena de caracteres (incluso sin
caracteres). Otro símbolo comodín disponible es "_", que significa "exactamente un
carácter".
Funciones de agregación
Para calcular y resumir valores en consultas, SQL proporciona las siguientes funciones de
agregación: COUNT, SUM, AVG, MIN y MAX. La función COUNT cuenta el número de
registros en el resultado de la consulta, mientras que las funciones SUM, AVG, MIN y MAX
calculan los valores de suma, promedio, mínimo y máximo, respectivamente, para el
conjunto de valores especificado en la consulta. Las funciones SUM y AVG operan solo con
valores numéricos. Las funciones MIN y MAX operan no solo en valores numéricos, sino
también en valores de fecha y caracteres.
Considere la consulta 12.
Consulta 12 texto: Obtener el precio promedio de todos los productos.
Consulta 12: SELECT AVG(productoprecio) FROM producto;
Esta consulta encontrará el precio promedio de todos los productos. El resultado de la
Consulta 12 se muestra en la Figura 5.12.

---

<!-- página 183 -->

Figura 5.12
Consideremos la consulta 13.
Consulta 13 texto: Mostrar cuántos productos tenemos a la venta.
Consulta 13: SELECT COUNT(*) FROM producto;
Mientras que las funciones AVG, SUM, MIN y MAX deben usar un nombre de columna
como argumento (por ejemplo, AVG(ProductoPrecio) en la consulta 12), la función COUNT
también puede usar el símbolo * como argumento de función. La consulta 13 simplemente
cuenta cuántos registros hay en la tabla PRODUCTO. En esta consulta, el símbolo * en la
función COUNT(*) se refiere a los registros. La consulta 13 calcula el número de registros
en la tabla PRODUCTO. El resultado de esta consulta se muestra en la Figura 5.13.
Figura 5.13
El resultado de la consulta 13 sería el mismo si usáramos cualquiera de los nombres de
columna
como
argumento
de
la
función
(por
ejemplo,
COUNT(ProductoID)
o
COUNT(ProductoNombre)) en lugar de COUNT(*), porque esta tabla no tiene columnas
opcionales y cada columna tiene un valor para cada registro. Si una tabla tiene columnas
opcionales que contienen valores NULL, esos valores NULL se omiten al calcular el
COUNT. Si una columna contiene valores NULL, usar esa columna para el conteo no dará
como resultado el mismo valor que usar COUNT(*).
Para contar cuántos proveedores distintos tenemos en la tabla PRODUCTO, escribiríamos
la Consulta 14.
Consulta 14 texto: Obtener el número de proveedores que tenemos.
Consulta 14: SELECT COUNT(DISTINCT proveedorid) FROM producto;
El resultado de la consulta 14 es mostrado en la figura 5.14.
Figura 5.14
Es posible usar más de una función agregada dentro de una declaración SELECT, como se
ilustra en la consulta 15.

---

<!-- página 184 -->

Consulta 15 texto: Obtener la cantidad de productos, el precio promedio del producto, el
precio más bajo del producto y el precio más alto del producto en la categoría de productos
CP.
Consulta 15: SELECT COUNT(*), AVG(productoprecio), MIN(productoprecio),
MAX(productoprecio) FROM producto WHERE categoriaid = 'CP';
El resultado de la Consulta 15 se muestra en la Figura 5.15.
Figura 5.15
GROUP BY
En las consultas SQL, las funciones agregadas se usan a menudo junto con la palabra
clave GROUP BY. Esta cláusula permite resúmenes en los grupos de datos relacionados
dentro de las tablas. Considere la consulta 16.
Consulta 16 texto: Para cada proveedor, obtener su id, número de productos provistos por
el mismo, y el precio promedio de productos provistos por el proveedor.
Consulta 16: SELECT proveedorid, COUNT(*), AVG(productoprecio), FROM producto
GROUP BY proveedorid;
El resultado de la Consulta 16 se muestra en la Figura 5.16.
Figura 5.16
Como se ilustra en la Figura 5.16a, la Consulta 16 agrupa los registros en la relación
PRODUCTO que tienen el mismo valor en la columna ProveedorID y para cada grupo
calcula la cantidad de registros en el grupo y el precio promedio de los productos en el
grupo.
Cuando se usan funciones agregadas en la declaración SELECT, las columnas individuales
no pueden ser parte de la declaración SELECT a menos que se use una cláusula GROUP
BY. Observe el siguiente ejemplo de una consulta no válida que intenta lograr lo que se
especifica en el texto de la Consulta 16:
Consulta 16 texto: Para cada proveedor, obtener su id, número de productos provistos por
el mismo, y el precio promedio de productos provistos por el proveedor.

---

<!-- página 185 -->

Consulta 16: SELECT proveedorid, COUNT(*), AVG(productoprecio), FROM producto;
INVÁLIDO. DEVUELVE UN MENSAJE DE ERROR!
Es muy común que los principiantes escriban una consulta SQL errónea para agregar datos
dentro de los grupos. Un error típico, como se muestra en la Consulta 16, es enumerar una
columna individual (ProveedorID en este caso) acompañada de funciones agregadas en la
instrucción SELECT sin incluir una instrucción GROUP BY que contenga esa columna
individual. Esta consulta no se ejecutaría. En su lugar, se devolvería un mensaje de error. El
motivo por el que esta consulta no es válida es que las funciones agregadas (como
COUNT(*), AVG(ProductoPrecio)) dan resultados sobre varios registros y este resultado no
se puede mezclar con valores de columna de registros individuales. Sin la declaración
GROUP BY, COUNT(*) y AVG(ProductoPrecio) solo se pueden aplicar a toda la tabla, lo que
da como resultado un valor COUNT y AVG. La consulta no puede combinar un valor
COUNT y un valor AVG para toda la tabla con varios valores VendorID de cada registro. En
consecuencia, esta consulta necesita la sentencia GROUP BY ProveedorID al final para
poder ejecutarse, como es el caso de la Consulta 16. En la Consulta 16, la sentencia
GROUP BY especifica los subconjuntos de la tabla en los que las funciones agregadas
COUNT(*) y AVG(ProductoPrecio) deben aplicarse. El número de estos subconjuntos
corresponde al número de valores de ProveedorID diferentes en la tabla y, por lo tanto, cada
valor de ProveedorID tendrá un valor COUNT y AVG asociado que se mostrará con él
(como se muestra en la Figura 5.16).

---

<!-- página 186 -->

Figura 5.16a
La pauta para usar la cláusula GROUP BY es que la misma columna (o columnas) que se
enumeran después de la cláusula GROUP BY también deben enumerarse después de la
cláusula SELECT. La consulta que no enumera en la cláusula SELECT las columnas que se
usan en la cláusula GROUP BY aún se ejecutará y se mostrará el resultado, pero a menudo
dicho resultado no será muy claro. Considere la Consulta 17.
Consulta 17 texto: para cada proveedor, recupere la cantidad de productos suministrados
por el proveedor y el precio promedio de los productos suministrados por el proveedor.
Consulta 17: SELECT COUNT(*), AVG(ProductoPrecio) FROM producto GROUP BY
proveedorid;
El resultado de la Consulta 17 se muestra en la Figura 5.17
Figura 5.17
Se muestran los valores correctos, pero es posible que el usuario final no entienda a qué se
refieren los valores mostrados. En particular, el usuario final puede no saber que la primera
fila mostrada se refiere al proveedor PG y que la segunda fila mostrada se refiere al
proveedor MK.
Al agregar la columna ProveedorID en la parte SELECT de la consulta (como se hace en la
Consulta 16), el resultado de la consulta se vuelve más claro.
Una consulta puede combinar cláusulas WHERE y GROUP BY. Considere la consulta 18.
Consulta 18 texto: para cada proveedor, obtener la identificación del proveedor y la
cantidad de productos con un precio de producto de $100 o más proporcionado por el
proveedor.
Consulta 18: SELECT proveedorid, COUNT(*) FROM producto WHERE precio del producto
>= 100 GROUP BY proveedorid;
Figura 5.18
La consulta 18 agrupa los registros en la relación PRODUCTO que tienen el mismo valor en
la columna ProveedorID cuyo valor ProductoPrecio es $100 o más. Para cada uno de estos

---

<!-- página 187 -->

grupos, la consulta muestra el valor ProveedorID y la cantidad de registros en el grupo que
cumplan esa condición.
Una cláusula GROUP BY puede agrupar consultas por varias columnas. Considere la
consulta 19.
Consulta 19 texto: Considere los grupos de productos donde cada grupo contiene los
productos que son de la misma categoría suministrados por el mismo proveedor. Para cada
uno de estos grupos, recupere la identificación del proveedor, la identificación de la
categoría del producto, la cantidad de productos en el grupo y el precio promedio de los
productos en el grupo.
Consulta 19: SELECT proveedorid, categoriaid, COUNT(*), AVG(productoprecio) FROM
producto GROUP BY proveedorid, categoriaid;
El resultado de la consulta 19 se muestra en la Figura 5.19.
Figura 5.19
La consulta 19 agrupa los registros en la relación PRODUCTO que tienen el mismo valor en
las columnas ProveedorID y CategoriaID, y para cada grupo muestra el valor de
ProveedorID, el valor de CategoriaID, el número de registros en el grupo y el precio
promedio de los productos en el grupo.
Para recapitular y reforzar los conceptos de GROUP BY, consideremos dos consultas más
de GROUP BY en la relación INCLUYE que contiene los datos sobre los productos
vendidos en cada transacción de venta.
Primero, considere la consulta 20.
Consulta 20 texto: para cada producto, recupere el valor de ProductoID y el número total
de artículos de productos vendidos en todas las transacciones de ventas.
Consulta 20: SELECT productoid, SUM (cantidad) FROM incluye GROUP BY productoid;
El resultado de la Consulta 20 se muestra en la Figura 5.20.

---

<!-- página 188 -->

Figura 5.20
Ahora, considere la Consulta 21.
Consulta 21 texto: Para cada producto, obtener el valor de productoid y el número de
transacciones de ventas en el que el producto fue vendido.
Consulta 21: SELECT productoid, COUNT(*) FROM incluye GROUP BY productoid;
El resultado de la Consulta 21 se muestra en la Figura 5.21.
Figura 5.21
HAVING
La cláusula GROUP BY puede ir acompañada de una palabra clave HAVING. Una cláusula
HAVING determina qué grupos se mostrarán en el resultado de una consulta y, en
consecuencia, qué grupos no se mostrarán en el resultado de la consulta. Una consulta que
contiene una cláusula HAVING también debe contener una cláusula GROUP BY.
Observa la consulta 22.
Consulta 22 texto: Considere los grupos de productos donde cada grupo contiene los
productos que son de la misma categoría y suministrados por el mismo proveedor. Para
cada grupo que tenga más de un producto, recupere la identificación del proveedor, la
identificación de la categoría del producto, la cantidad de productos en el grupo y el precio
promedio de los productos en el grupo.
Consulta 22: SELECT proveedorid, categoriaid, COUNT(*), AVG(productoprecio) FROM
producto GROUP BY proveedorid, categoriaid HAVING COUNT(*) > 1;

---

<!-- página 189 -->

La consulta 22 agrupa los registros en la relación PRODUCTO que tienen el mismo valor en
las columnas ProveedorID y CategoriaID, y para cada grupo que tiene más de un registro,
muestra el valor de ProveedorID, el valor de CategoriaID, el número de registros en el
grupo, y el precio promedio de los productos del grupo.
El resultado de la Consulta 22 se muestra en la Figura 5.22.
Figura 5.22
Como se ilustra en el ejemplo de la Consulta 22, HAVING tiene el mismo efecto en los
grupos que la cláusula WHERE tiene en los registros. Una condición WHERE determina
qué registros de la tabla serán parte del resultado y cuáles no. Una condición HAVING
determina qué grupos serán parte del resultado y cuáles no.

---

<!-- página 190 -->

Figura 5.22a
Observe la Figura 5.22a que ilustra cómo GROUP BY crea grupos y HAVING determina qué
grupos serán parte del resultado.
WHERE y HAVING pueden estar contenidos en la misma consulta, como se ilustra en la
Consulta 23.
Consulta 23 texto: Considere los grupos de productos donde cada grupo contiene los
productos que son de la misma categoría, suministrados por el mismo proveedor y cuyo
precio de producto es de $50 o más. Para cada grupo que tenga más de un producto,
recupere la identificación del proveedor, la identificación de la categoría del producto, la
cantidad de productos en el grupo y el precio promedio de los productos.
Consulta 23: SELECT proveedorid, categoriaid, COUNT(*), AVG(productoprecio) FROM
product WHERE productoprecio >= 50 GROUP BY proveedorid, categoriaid HAVING
COUNT(*) > 1;
El resultado de la Consulta 23 se muestra en la Figura 5.23.
Figura 5.23
La consulta 23 identifica todos los registros en la relación PRODUCTO que tienen un valor
ProductoPrecio de $50 o más y luego crea grupos de estos registros que tienen el mismo
valor en las columnas ProveedorID y CategoriaID. Para cada grupo que tenga más de un
registro, muestra el valor ProveedorID, el valor CategoriaID, la cantidad de registros en el
grupo y el precio promedio del producto en el grupo.

---

<!-- página 191 -->

Para recapitular y reforzar el concepto HAVING, consideremos varias consultas GROUP BY
más usando una cláusula HAVING en la relación INCLUDES.
Primero, considere la Consulta 24.
Consulta 24 texto: para cada producto que tenga más de tres artículos vendidos en todas
las transacciones de ventas, obtener el valor de ProductoID y el número total de productos
vendidos en todas las transacciones de ventas.
Consulta 24: SELECT productoid, SUM(cantidad) FROM incluye GROUP BY productoid
HAVING SUM(cantidad) > 3;
El resultado de la Consulta 24 se muestra en la Figura 5.24.
Figura 5.24
Ahora, considere la consulta 25.
Consulta 25 texto: para cada producto que se vendió en más de una transacción de venta,
recupere el valor de ProductoID y el número de transacciones de venta en las que se vendió
el producto.
Consulta 25: SELECT productoid, COUNT(*) FROM incluye GROUP BY productoid
HAVING COUNT(*) > 1;
El resultado de la Consulta 25 se muestra en la Figura 5.25.
Figura 5.25
Las siguientes dos consultas muestran las versiones ligeramente modificadas de las dos
consultas anteriores para ilustrar que la condición de selección de grupo en la cláusula
HAVING puede contener funciones agregadas que no se usaron en la cláusula SELECT
dentro de la misma consulta.
Consulta 26 texto: para cada producto que tenga más de tres artículos vendidos en todas
las transacciones de ventas, recupere el valor de ProductID.

---

<!-- página 192 -->

Consulta
26:
SELECT
productoid
FROM
incluye
GROUP
BY productoid HAVING
SUM(cantidad) > 3;
El resultado de la Consulta 26 se muestra en la Figura 5.26.
Figura 5.26
En la Consulta 26, la SUM(cantidad) en la parte HAVING no se usó en la parte SELECT
dentro de la misma consulta. La Consulta 27 demuestra el mismo punto, donde la parte
HAVING contiene la función agregada COUNT(tid) que no fue utilizada por la cláusula
SELECT.
Consulta 27 texto: para cada producto que se vendió en más de una transacción de venta,
recupere el valor de ProductID.
Consulta 27:
SELECT productoid FROM incluye GROUP BY productoid HAVING COUNT(*) > 1;
El resultado de la Consulta 27 se muestra en la Figura 5.27.
Figura 5.27
Consultas anidadas
En algunos casos, una consulta puede contener otra consulta (o consultas). Una consulta
que se utiliza dentro de otra consulta se denomina consulta anidada. Una consulta anidada
también se denomina consulta interna, mientras que la consulta que utiliza la consulta
anidada se conoce como consulta externa.
Por ejemplo, considere una consulta para recuperar ProductoID, ProductoNombre y
ProductoPrecio de todos los productos cuyo precio es menor que el precio promedio de
todos los productos. Como se muestra en la consulta 28, la condición WHERE se refiere al
precio promedio del producto y el precio promedio del producto es el resultado de otra
consulta. En este caso, la consulta SELECT que comienza en la primera línea de la
consulta 28 es la consulta externa y la consulta SELECT entre paréntesis es la consulta
anidada (o consulta interna).

---

<!-- página 193 -->

Consulta 28 texto: Para cada producto cuyo precio de producto esté por debajo del precio
promedio de todos los productos, recupere la identificación del producto, el nombre del
producto y el precio del producto.
Consulta
28:
SELECT
productoid, productonombre, productoprecio FROM producto
WHERE productoprecio < (SELECT AVG(productoprecio) FROM producto);
El resultado de la Consulta 28 se muestra en la Figura 5.28 y la ilustración de la Consulta 28
se muestra en la Figura 5.28a.
Figura 5.28
Figura 5.28a

---

<!-- página 194 -->

Un error común de principiante es intentar escribir la consulta 28 de la siguiente forma:
Consulta 28: SELECT productoid, productonombre, productoprecio FROM producto
WHERE productoprecio < AVG(productoprecio);
DEVUELVE UN MENSAJE DE ERROR!
Las funciones agregadas pueden aparecer sintácticamente solo dentro de la cláusula
SELECT y/o la parte HAVING de la instrucción. Especificar una función agregada después
de la palabra clave SELECT y antes de la palabra clave FROM indica que la función
agregada se realizará sobre todos los registros en la relación (si no hay una cláusula
GROUP BY en el comando) o sobre los grupos de registros (si hay es una cláusula GROUP
BY en el comando). Si se usó una cláusula GROUP BY en la consulta, las funciones
agregadas también se pueden usar en la condición de selección de grupo HAVING. Aparte
de usar funciones agregadas dentro de la parte SELECT o HAVING de la declaración, no
hay otro uso válido para la función agregada en una consulta SQL. En consecuencia, la
consulta 28 INVALIDA anterior no se ejecutará. La función AVG(ProductoPrecio) debe
aplicarse a la tabla, pero en la Consulta 28 NO VÁLIDA, no se especifica ninguna tabla para
AVG(ProductoPrecio).
IN
La palabra clave IN se usa en SQL para comparar un valor con un conjunto de valores.
Considere la consulta 29.
Consulta 29 texto: Recupere la identificación del producto, el nombre del producto y el
precio del producto para los productos cuya identificación del producto sea 1X1, 2X2 o 3X3.
Consulta
29:
SELECT
productoid, productonombre, productoprecio FROM producto
WHERE productoid = ‘1x1’ OR productoid = ‘2x2’ OR productoid = ‘3x3’;
La consulta 29 también se podría haber escrito utilizando el operador IN, como se muestra
en la consulta 29alt.
Consulta 29alt: SELECT productoid, productonombre, productoprecio FROM producto
WHERE productoid IN (‘1x1’, ‘2x2’, ‘3x3’);
El resultado de la Consulta 29 y la Consulta 29alt se muestra en la Figura 5.29.
Figura 5.29
Para otro ejemplo del uso del operador IN, considere la consulta 30.

---

<!-- página 195 -->

Consulta 30 texto: para cada producto que tenga más de tres artículos vendidos en todas
las transacciones de ventas, recupere la identificación del producto, el nombre del producto
y el precio del producto.
Consulta
30:
SELECT
productoid, productonombre, productoprecio FROM producto
WHERE productoid IN (SELECT productoid FROM incluye GROUP BY productoid HAVING
SUM(cantidad) > 3);
El resultado de la Consulta 30 se muestra en la Figura 5.30.
Figura 5.30
Esta consulta ilustra cómo se usa la palabra clave IN para una comparación con el conjunto
de valores resultantes de una consulta anidada. En la Consulta 30, la consulta anidada
(consulta interna), que es idéntica a la Consulta 26, devuelve el conjunto de valores de
ProductoID de los productos que tienen más de tres artículos vendidos. La consulta externa
luego usa el conjunto para identificar qué identificadores de productos coinciden con uno de
los valores del conjunto. En otras palabras, prueba para ver si una identificación de producto
es miembro del conjunto. Para aquellos productos que son miembros del conjunto, muestra
ProductName y ProductoPrecio.
La consulta 31 es otro ejemplo de una consulta anidada que usa la instrucción IN.
Consulta 31 texto: para cada producto cuyos artículos se vendieron en más de una
transacción de venta, recupere la identificación del producto, el nombre del producto y el
precio del producto.
Consulta
31:
SELECT
productoid, productonombre, productoprecio FROM producto
WHERE productoid IN (SELECT productoid FROM incluye GROUP BY productoid HAVING
COUNT(transaccionid) > 1);
El resultado de la Consulta 31 se muestra en la Figura 5.31.
Figura 5.31
En la Consulta 31, la consulta anidada (consulta interna), que es idéntica a la Consulta 27,
devuelve el conjunto de valores ProductID de los productos que se vendieron en más de

---

<!-- página 196 -->

una transacción. La consulta externa usa el conjunto para identificar qué ID de producto
coincide
con
uno
de
los
valores
del
conjunto.
Para
estos
productos,
muestra
ProductoNombre y ProductoPrecio.
JOIN
Todas las consultas que hemos discutido hasta ahora consultan una sola tabla. Ahora
describiremos cómo se pueden consultar varias tablas al mismo tiempo. La operación JOIN
se usa en SQL para facilitar la consulta de varias tablas. La consulta 32 ilustra el uso de una
operación JOIN.
Consulta 32 texto: para cada producto, recupere la identificación del producto, el nombre
del producto, el nombre del proveedor del producto y el precio del producto.
Consulta 32: SELECT productoid, productonombre, proveedornombre, productoprecio
FROM producto, proveedor WHERE producto.proveedorid = proveedor.proveedorid;
El resultado de la Consulta 32 se muestra en la Figura 5.32.
Figura 5.32
La consulta 32 recupera el identificador del producto, el nombre del producto, el nombre del
vendedor
del
producto
y
el
precio
del
producto para cada producto. ProductoID,
ProductoNombre y ProductoPrecio son columnas en la relación PRODUCTO. Sin embargo,
ProveedorNombre es una columna en otra relación: PROVEEDOR. Por lo tanto, para
recuperar la información solicitada, tenemos que consultar dos tablas. La expresión que
sigue a la palabra clave WHERE es la condición JOIN, que explica cómo se conectarán las
dos tablas.
Tenga en cuenta que en la condición JOIN, la columna proveedorid de la relación
PRODUCTO y la columna proveedorid de la relación PROVEEDOR se califican con el
nombre de la relación y un punto que precede al nombre de la columna. Esto es necesario
porque ambas columnas tienen el mismo nombre, por lo que también deben distinguirse por
los nombres de sus relaciones.
Es muy importante tener en cuenta el significado de la condición JOIN de la declaración en
la consulta 32:
WHERE producto.proveedorid = proveedor.proveedorid;

---

<!-- página 197 -->

Para comprender el significado y la importancia de esta parte de la consulta, considere la
consulta 33, que también recupera datos de dos tablas pero no incluye la condición JOIN:
Consulta 33: SELECT productoid, productonombre, proveedornombre, productoprecio
FROM producto, proveedor;
El resultado de la Consulta 33 es mostrado en la Figura 5.33.
Figura 5.33
Debido a que no tiene una condición JOIN, la consulta 33 no muestra un solo registro para
cada producto. En su lugar, devuelve un producto cartesiano, combinando cada registro de
una relación con cada registro de la otra relación. Cada registro de la tabla PRODUCTO se
combina con cada registro de la tabla PROVEEDOR, aunque tengan ID de proveedor
diferentes. El número de filas en el resultado de la Consulta 33 es 12, porque la relación
PRODUCTO tiene seis registros y la relación PROVEEDOR tiene dos registros (6 × 2 = 12).
Los siguientes dos ejemplos ilustran cómo funciona la operación JOIN. Primero, considere
la Consulta 34. Esta consulta es una versión ampliada de la Consulta 33. Muestra todas las
columnas del producto cartesiano de las relaciones PRODUCTO y PROVEEDOR.
Consulta 34: SELECT * FROM producto, proveedor;
El resultado de la Consulta 34 se muestra en la Figura 5.34.

---

<!-- página 198 -->

Figura 5.34
Ahora, considere la Consulta 35, que agrega la condición de unión a la Consulta 35:
Consulta 35: SELECT * FROM producto, proveedor WHERE producto.proveedorid =
proveedor.proveedorid;
La Figura 5.35a muestra cómo se genera el resultado de la Consulta 35.
Figura 5.35a
Las cláusulas SELECT y FROM de la instrucción de consulta crean un producto cartesiano
(PRODUCTO × PROVEEDOR). Luego, como se muestra en la figura 5.35a, la condición
JOIN de la declaración de consulta (la cláusula WHERE) identifica las filas donde el valor de
la columna ProveedorID recuperada de la relación PRODUCTO coincide con el valor de la
columna ProveedorID recuperada de la relación VENDOR. La Figura 5.35b muestra el
resultado de la Consulta 35 una vez que se muestran las filas apropiadas que satisfacen la
condición JOIN.

---

<!-- página 199 -->

Figura 5.35b
Para cambiar la consulta 35 a la consulta 32, todo lo que tenemos que hacer es reemplazar
el símbolo * que sigue a la palabra clave SELECT con la lista de columnas que se
mostrarán: ProductoID, ProductoNombre, ProveedorNombre, ProductoPrecio.
Alias
En la parte FROM de la consulta, a cada relación se le puede dar un alias, un nombre
alternativo (y generalmente más corto). Se puede usar un alias en cualquier lugar dentro de
una consulta en lugar del nombre completo de la relación.
Un alias puede tener uno o más caracteres de longitud. El primer carácter debe ser textual,
y el resto de los caracteres pueden ser alfanuméricos.
Un alias no tiene ningún efecto sobre la ejecución de la consulta en sí, pero mejora la
legibilidad de las consultas para los usuarios o desarrolladores que eventualmente tendrán
que leerlas. Si antecedemos cada nombre de columna con un alias de la relación que
contiene esa columna, será obvio de qué tabla proviene cada nombre de columna. Al usar
alias, no tenemos que escribir el nombre real de la tabla delante de cada columna. En su
lugar, podemos usar una versión de alias más corta, reduciendo la cantidad de texto en la
declaración.
Por ejemplo, la Consulta 32 se podría haber escrito de forma ligeramente diferente,
utilizando alias, como se ilustra en la Consulta 32a.
Consulta 32a:
SELECT p.productoid, p.productonombre, prov.proveedornombre, p.productoprecio
FROM producto p, proveedor prov
WHERE p.proveedorid = prov.proveedorid;
La Consulta 32a se ejecutará exactamente igual que la Consulta 32 y dará exactamente el
mismo conjunto de filas resultante. Los cambios son puramente por razones de apariencia
(legibilidad). En la parte FROM de la sentencia, el nombre de la relación PRODUCTO va
seguido del alias p. De la misma manera, a la relación PROVEEDOR se le asigna el alias
prov. Estos alias se utilizan en otras partes de la declaración de consulta para calificar cada
columna con el alias que se refiere a la relación de donde proviene la columna.
Los alias también se pueden usar para cambiar el nombre de las columnas de la tabla
resultante de la consulta, como se ilustra en la Consulta 32b.
Consulta 32b:
SELECT
p.productoid
pid,
p.productonombre
pnombre,
prov.proveedorornombre
provnombre, p.productoprecio pprecio
FROM producto p, proveedor prov
WHERE p.vendedorid = prov.proveedorid;

---

<!-- página 200 -->

La Consulta 32b también se ejecutará exactamente igual que la Consulta 32 y dará
exactamente el mismo conjunto de filas resultante. La única diferencia es que los nombres
de columna en el resultado ahora usarán los nombres de alias en lugar de los nombres de
columna originales, como se muestra en la Figura 5.32b.
Figura 5.32b
Las columnas utilizadas en la cláusula WHERE deben enumerarse utilizando sus nombres
propios (no alias). La misma regla se aplica a las columnas enumeradas en la cláusula
GROUP BY y a las columnas en la cláusula HAVING. Los alias de nombre de tabla no
tienen tales limitaciones y se pueden usar en todas partes dentro de una instrucción
SELECT.
Las declaraciones de alias también pueden incluir la palabra clave de SQL, AS, como se
ilustra en la Consulta 32c.
Consulta 32c:
SELECT p.productoid AS pid, p.productonombre AS pnombre, prov.proveedornombre AS
provnombre, p.productoprecio AS precio
FROM producto p, proveedor prov
WHERE p.proveedorid = prov.proveedorid
La Consulta 32c se ejecutará exactamente igual que la Consulta 32b y producirá
exactamente los mismos resultados.
Unión de múltiples relaciones
Una consulta puede contener múltiples condiciones JOIN, uniendo múltiples relaciones.
Considere la consulta 36.
Texto de la consulta 36: para cada elemento de línea de una transacción de venta,
recupere el identificador de la transacción, la fecha de la transacción, el nombre del
producto que se vendió, la cantidad vendida y el monto cobrado, ordenados por identificador
de transacción.
Consulta 36:

---

<!-- página 201 -->

SELECT
t.transaccionid,
t.transaccfecha,
p.productonombre,
i.cantidad,
(i.cantidad
*
p.productoprecio) AS cantidad
FROM producto p, transaccion t, incluye i
WHERE i.productoid = p.productoid AND i.transaccionid = t.transaccionid
ORDER BY t.transaccionid;
Para cada artículo de línea de una transacción de venta, la consulta 36 recupera el
identificador de la transacción, la fecha de la transacción, el nombre del producto que se
vendió,
la
cantidad
vendida
y
el
monto
cobrado.
Las
columnas
transaccionid
y
transaccfecha se recuperan de la relación TRANSACCION. La columna productonombre se
recupera de la relación PRODUCTO. La columna Cantidad se recupera de la relación
INCLUYE y se renombra en el resultado como Cantidad. La cantidad se obtiene como el
producto de la columna Cantidad de la relación INCLUYE y la columna Precio de la relación
PRODUCTO.
La consulta 36 tiene dos condiciones JOIN conectadas con el operador AND en la cláusula
WHERE: una para unir la relación INCLUYE con la relación PRODUCTO, y otra para unir la
relación INCLUYE con la relación TRANSACCION. El resultado de la Consulta 36 se
muestra en la Figura 5.36.
Hasta ahora, hemos demostrado los comandos SQL para la creación y eliminación de
relaciones, la inserción de datos en las relaciones y la recuperación de datos de las
relaciones. A continuación, demostraremos cómo se puede usar SQL para cambiar la
estructura de las relaciones (usando el comando ALTER TABLE), modificar datos en las
relaciones (usando el comando UPDATE) y eliminar datos de las relaciones (usando el
comando DELETE).
Figura 5.36
ALTER TABLE
El comando ALTER TABLE se utiliza en los casos en que queremos cambiar la estructura
de la relación, una vez que la relación ya está creada. Por ejemplo, si quisiéramos agregar
una columna opcional ProveedorTelefono a la relación PROVEEDOR, emitiremos la
siguiente declaración ALTER TABLE:

---

<!-- página 202 -->

Sentencia ALTER 1: ALTER TABLE proveedor ADD (proveedortelefono CHAR(12));
Esta declaración agregará otra columna a la relación PROVEEDOR. Los valores de esta
columna son inicialmente NULL para cada registro en la relación PROVEEDOR.
La declaración ALTER TABLE también se puede usar para eliminar una columna. Por
ejemplo,
si
quisiéramos
eliminar
la
columna
ProveedorTelefono
de
la
relación
PROVEEDOR, emitiremos la siguiente instrucción ALTER TABLE:
Sentencia ALTER 2: ALTER TABLE proveedor DROP (proveedortelefono);
Como demostraremos más adelante, además de agregar y eliminar columnas, el comando
ALTER TABLE se puede usar para realizar otros cambios en la estructura de una relación.
UPDATE
El comando UPDATE en SQL se usa para modificar los datos almacenados en las
relaciones de la base de datos. Insertemos otro producto en la relación PRODUCTO
emitiendo la siguiente declaración INSERT INTO:
Sentencia INSERT 1: INSERT INTO producto VALUES (‘7x7’, ‘Media A’, 1000, ‘MK’, ‘FW’);
El producto recién insertado en realidad cuesta $10, pero se cometió un error de tipeo en la
declaración INSERT INTO, y el precio indicado en la relación PRODUCTO para este
producto se dejó en $1000. Para modificar el precio de este producto, usaríamos la
sentencia UPDATE de la siguiente manera:
Sentencia UPDATE 1:
UPDATE producto SET productoprecio = 10 WHERE productoid = ‘7x7’;
En la sentencia UPDATE, la palabra clave UPDATE va seguida del nombre de la tabla
donde se actualizarán los registros. La cláusula SET especifica qué columna (o columnas)
se actualizará y a qué valor. La parte WHERE identifica qué registro (o registros) se
actualizarán.
Agreguemos otra columna a la relación PRODUCTO emitiendo la siguiente declaración
ALTER TABLE:
Sentencia ALTER 3: ALTER TABLE producto ADD (descuento NUMERIC(2,2));
Inicialmente, el valor de la columna descuento recién agregada es NULL para cada fila en la
relación PRODUCTO. Suponga que queremos asignar un descuento del 20 por ciento para
cada producto. En ese caso, emitiremos la siguiente declaración UPDATE:
Sentencia UPDATE 2:
UPDATE producto SET descuento = 0.2;
La ausencia de la cláusula WHERE en esta declaración UPDATE dará como resultado que
la columna descuento en cada registro se establezca en un valor de 0.2.

---

<!-- página 203 -->

Supongamos ahora que queremos aumentar el descuento de los productos suministrados
por el proveedor MK al 30 por ciento. Se emitiría la siguiente declaración UPDATE para ese
propósito:
Sentencia UPDATE 3:
UPDATE producto SET descuento = 0.3 WHERE proveedorid = ‘MK’;
En los registros con el valor de identificación del proveedor de MK, el valor de la columna
descuento ahora será 0.3.
Si decidimos que ya no queremos usar la columna descuento, podemos eliminarla
emitiendo otra instrucción ALTER TABLE:
Sentencia ALTER 4: ALTER TABLE producto DROP (descuento);
DELETE
El comando DELETE en SQL se usa para eliminar los datos almacenados en las relaciones
de la base de datos. Eliminemos el producto con el ID 7×7 de la relación PRODUCTO
emitiendo la siguiente declaración DELETE:
Sentencia DELETE 1: DELETE FROM producto WHERE productoid = ‘7x7’;
En la declaración DELETE, las palabras clave DELETE FROM van seguidas del nombre de
la tabla donde se eliminarán los registros. La parte WHERE identifica qué registro (o
registros) se eliminarán. Tenga en cuenta que la instrucción DELETE se puede emitir sin la
cláusula WHERE y, en ese caso, se eliminarían todos los registros de la tabla especificada.
En tal caso, la tabla seguirá existiendo, incluso si se han eliminado todos los registros de la
tabla. Esto es diferente de usar el comando DROP TABLE, que elimina todos los registros
de la tabla y la tabla misma.
En la práctica, al igual que las declaraciones INSERT INTO, las declaraciones DELETE y
UPDATE generalmente no las escriben directamente los usuarios finales a cargo de las
modificaciones y eliminaciones de datos. Una práctica común es que los usuarios utilicen
aplicaciones, para realizar estas operaciones.
CREATE VIEW y DROP VIEW
Una vista es un mecanismo en SQL que permite guardar la estructura de una consulta en el
administrador de la base de datos. Una vista, que también se conoce como tabla virtual, no
es una tabla real y no tiene ningún dato guardado físicamente. Cada vez que se invoca una
vista, ejecuta una consulta que recupera los datos de las tablas reales. Una vista se puede
usar en declaraciones SELECT como cualquier otra tabla de una base de datos. Por
ejemplo, se pueden seleccionar las columnas de la vista, se puede unir una vista a otras
tablas o vistas, se pueden agrupar los datos de la vista, etc.
Considere
la
siguiente
declaración
CREATE
VIEW
que
crea
la
vista
PRODUCTOS_QUE_SE_HAYAN_VENDIDO_MAS_DE_3:
Sentencia CREATE VIEW 1:

---

<!-- página 204 -->

CREATE VIEW productos_que_se_hayan_vendido_mas_de_3 AS
SELECT productoid, productonombre, productoprecio
FROM producto
WHERE productoid IN
(SELECT productoid
FROM incluye
GROUP BY productoid
HAVING SUM(cantidad) > 3));
Esta declaración guarda la consulta 30 como una vista que se puede usar en cualquier
consulta en la parte FROM de la declaración SELECT. La Consulta 30 ahora se puede
ejecutar como:
Consulta 30a: SELECT * FROM productos_que_se_hayan_vendido_mas_de_3;
El resultado de la Consulta 30a es exactamente el mismo que el resultado de ejecutar la
Consulta 30, que se muestra en la Figura 5.30.
Resultado de la consulta 30
La siguiente declaración crea la vista PRODUCTOS_EN_MULTIPLES_TRANSACCIONES.
Sentencia CREATE VIEW 2:
CREATE VIEW productos_en_multiples_transacciones AS
SELECT productoid, productonombre, productoprecio
FROM producto
WHERE productoid IN
(SELECT productoid
FROM incluye
GROUP BY productoid
HAVING COUNT(*) > 1);

---

<!-- página 205 -->

Esta vista también se puede consultar como cualquier otra tabla normal, como se ilustra en
la consulta 31a.
Consulta 31a: SELECT * FROM productos_en_multiples_transacciones;
El resultado de la Consulta 31a es exactamente el mismo que el resultado de ejecutar la
Consulta 31, que se muestra en la Figura 5.31.
Para eliminar una vista, usaríamos una instrucción DROP VIEW. Las siguientes dos
declaraciones eliminan las dos vistas creadas anteriormente.
Sentencia DROP VIEW 1: DROP VIEW productos_que_se_hayan_vendido_mas_de_3;
Sentencia DROP VIEW 2: DROP VIEW productos_en_multiples_transacciones;
Por supuesto, si quisiéramos recrear estas vistas, simplemente ejecutaríamos Create View
Statement 1 y Create View Statement 2 nuevamente.
Operadores de conjuntos: UNION, INTERSECT, EXCEPT
SQL también contiene los operadores de conjuntos estándar: unión, intersección y
diferencia. Los operadores de conjuntos de SQL se utilizan para combinar los resultados de
dos o más instrucciones SELECT que son compatibles con la unión.
Dos conjuntos de columnas son compatibles con la unión si contienen el mismo número de
columnas y si los tipos de datos de las columnas de un conjunto coinciden con los tipos de
datos de las columnas del otro conjunto. En otras palabras, la primera columna de un
conjunto tiene un tipo de datos compatible con el tipo de datos de la primera columna del
otro conjunto; la segunda columna de un conjunto tiene un tipo de datos compatible con el
tipo de datos de la segunda columna del otro conjunto; etcétera.
Los
operadores
de
conjuntos
pueden
combinar resultados de sentencias SELECT
consultando relaciones, vistas u otras consultas SELECT.
Para demostrar los operadores de conjuntos de SQL, utilizaremos las instrucciones
SELECT que consultan las vistas PRODUCTOS_QUE_SE_HAYAN_VENDIDO_MAS_DE_3
y
PRODUCTOS_EN_MULTIPLES_TRANSACCIONES
(suponga
que
las instrucciones
CREATE VIEW de la sección anterior se ejecutan nuevamente). Observe las Figuras 5.29 y
5.30
que
muestran
los
resultados
de
las
consultas
utilizando
las
vistas
PRODUCTOS_QUE_SE_HAYAN_VENDIDO_MAS_DE_3
y
PRODUCTOS_EN_MULTIPLES_TRANSACCIONES. Tenga en cuenta que estas vistas son
compatibles con la unión, ya que contienen la misma cantidad de columnas con tipos de
datos coincidentes.
La consulta 37 ilustra el uso del operador UNION.
Texto de consulta 37: recupere la identificación del producto, el nombre del producto y el
precio del producto para cada producto que tiene más de tres artículos vendidos en todas
las transacciones de ventas o cuyos artículos se vendieron en más de una transacción de
ventas.

---

<!-- página 206 -->

Consulta 37: SELECT * FROM productos_que_se_hayan_vendido_mas_de_3
UNION
SELECT * FROM productos_en_multiples_transacciones;
El resultado de la consulta 37 es mostrado en la Figura 5.37.
Figura 5.37
En la Consulta 37, la primera instrucción SELECT encuentra el conjunto de productos que
tienen más de tres artículos vendidos dentro de todas las transacciones de venta (consulte
la Figura 5.30), y la segunda instrucción SELECT encuentra el conjunto de productos cuyos
artículos se vendieron en más de una transacción de venta. (ver Figura 5.31). El operador
UNION combina esos dos conjuntos y elimina los duplicados. Si un determinado producto
tiene más de tres artículos vendidos y también aparece en más de una transacción, ese
producto seguirá apareciendo solo una vez.
La consulta 38 ilustra el uso del operador INTERSECT.
Texto de consulta 38: recupere la identificación del producto, el nombre del producto y el
precio del producto para cada producto que tiene más de tres artículos vendidos dentro de
todas las transacciones de ventas y cuyos artículos se vendieron en más de una
transacción de ventas.
Consulta 38: SELECT * FROM productos_que_se_hayan_vendido_mas_de_3
INTERSECT
SELECT * FROM productos_en_multiples_transacciones;
El resultado de la Consulta 38 se muestra en la Figura 5.38.
Figura 5.38
Al igual que en la Consulta 37, en la Consulta 38 la primera instrucción SELECT encuentra
el conjunto de productos que tienen más de tres artículos vendidos dentro de todas las
transacciones de venta, y la segunda instrucción SELECT encuentra el conjunto de

---

<!-- página 207 -->

productos cuyos artículos se vendieron en más de una transacción de venta. El operador
INTERSECT encuentra los productos que aparecen en ambos conjuntos.
La consulta 39 ilustra el uso del operador de diferencia MINUS, también conocido como
operador EXCEPT en ciertas implementaciones SQL de RDBMS.
Texto de consulta 39: recupere la identificación del producto, el nombre del producto y el
precio del producto para cada producto que tiene más de tres artículos vendidos en todas
las transacciones de ventas pero cuyos artículos no se vendieron en más de una
transacción de ventas.
Consulta 39: SELECT * FROM productos_que_se_hayan_vendido_mas_de_3
EXCEPT
SELECT * FROM productos_en_multiples_transacciones;
El resultado de la Consulta 39 se muestra en la Figura 5.39.
Figura 5.39
Como en las dos consultas anteriores, en la Consulta 38, la primera instrucción SELECT
encuentra el conjunto de productos que tienen más de tres artículos vendidos dentro de
todas las transacciones de venta, y la segunda instrucción SELECT encuentra el conjunto
de productos cuyos artículos se vendieron en más de una transacción de ventas. El
operador EXCEPT encuentra los productos que aparecen en el primer conjunto pero no en
el segundo conjunto.
Ejemplos SQL adicionales con comandos SQL adicionales
Hasta ahora, hemos brindado una descripción general e ilustraciones de los comandos y
declaraciones SQL más comúnmente utilizados utilizando el ejemplo de la base de datos
del departamento de ventas de la empresa minorista. Usaremos otra base de datos de
muestra, la base de datos de administración de propiedades, para reforzar los comandos y
declaraciones SQL presentados y para introducir algunos comandos SQL adicionales. El
diagrama ER y el esquema relacional para la base de datos de administración de
propiedades se muestran a continuación.

---

<!-- página 208 -->

Figura 5.40.a

---

<!-- página 209 -->

CREATE TABLE (Ejemplo Adicional)
Primero, observemos el conjunto de declaraciones CREATE TABLE que crean el esquema
relacional para la base de datos de administración de propiedades que se muestra en la
figura 5.40a. Las sentencias CREATE TABLE se muestran en la figura 5.40b.
Considere los siguientes comentarios sobre las instrucciones CREATE TABLE que se
muestran en la figura 5.40b.

---

<!-- página 210 -->

Figura 5.40b.
Como se muestra en la Figura 5.40a, los atributos ClienteID y ClienteNombre en la entidad
CLIENTE son únicos. En la declaración CREATE TABLE para la relación CLIENTE,
designamos la columna ClienteID como la clave principal. Para indicar que la columna de
clave candidata ClienteNombre también es única, en la declaración CREATE TABLE para la
relación CLIENTE designamos ClienteNombre como una columna única.
Como se muestra en la Figura 5.40a, los atributos Bono en la entidad ADMINISTRADOR y
ClienteID en la entidad DEPARTAMENTO son opcionales. Por lo tanto, las columnas Bono
en la relación ADMINISTRADOR y ClienteID en la relación DEPARTAMENTO son
opcionales y no tienen designación NOT NULL.
Como se muestra en la Figura 5.40a, un cliente puede pero no tiene que ser referido por
otro cliente. Por lo tanto, la clave externa ReferidoPor_ClienteID en la relación CLIENTE es
una columna opcional, y la columna ReferidoPor_ClienteID en la relación CLIENTE no tiene
la designación NOT NULL.

---

<!-- página 211 -->

Como se muestra en la Figura 5.40a, existen dos relaciones, ResideEn y Administra, entre
las entidades ADMINISTRADOR y EDIFICIO. La columna EdificioID en la relación
ADMINISTRADOR es una relación de referencia de clave externa al EDIFICIO, que
implementa la relación ResideEn. Columna AdministradorID en la relación EDIFICIO es una
relación de referencia de clave externa a ADMINISTRADOR, que implementa la relación
Administra.
Sin
embargo,
en
la
declaración
CREATE
TABLE
para
la
relación
ADMINISTRADOR, la columna EdificioID no se declara inicialmente como una columna de
clave externa. La columna EdificioID finalmente será declarada una columna de clave
externa que hace referencia a la relación EDIFICIO. Sin embargo, dado que la relación
ADMINISTRADOR se crea antes que la relación EDIFICIO, no podemos declarar claves
foráneas que se refieran a la relación EDIFICIO en la declaración CREATE TABLE para la
relación ADMINISTRADOR, porque la relación EDIFICIO no existe. En cambio, para la
creación inicial de la tabla, el EdificioID no se trata como una columna obligatoria que es
una clave externa, sino como una columna opcional que no es una clave externa. Más
adelante, demostraremos cómo se agrega la restricción de integridad referencial a una
relación ya existente.
Como se muestra en la figura 5.40a, la relación ReferidoPor es una relación unaria. La
declaración CREATE TABLE para la relación CLIENTE ilustra una implementación de una
relación unaria. La clave foránea ReferidoPor_ClienteID se refiere a la clave primaria de la
propia relación CLIENTE.
Para ilustrar que las restricciones (como las declaraciones de una clave principal o una
clave externa) pueden tener nombres, la declaración CREATE TABLE para la relación
LIMPIA
nombra
sus
restricciones.
No
es
necesario
nombrar una restricción, pero
ocasionalmente puede ser práctico. En el ejemplo de gestión de restricciones más adelante
en esta sección, ilustraremos un caso en el que la práctica de nombrar una restricción es
útil.
INSERT INTO (Ejemplo adicional)
Los registros de datos para la base de datos de administración de propiedades se muestran
en la Figura 3.60, y se repiten aquí como Figura 5.40c por conveniencia.
Observemos ahora las declaraciones INSERT INTO en la figura 5.40d, insertando los
registros de datos para la base de datos de administración de propiedades.
Como mencionamos anteriormente, el orden de ingreso de los registros es importante
porque las restricciones de integridad referencial requieren que los valores de la clave
principal a los que hace referencia una clave externa se ingresen antes de que se puedan
ingresar los valores de la clave externa. Por ejemplo, en la relación CLIENTE se insertan
registros para que un cliente que es referido por otro cliente se inserte antes del cliente
referente.
También tenga en cuenta que inicialmente no insertamos los valores en EdificioID en la
relación ADMINISTRADOR. En cambio, dejamos esas columnas temporalmente vacías. La
razón,
como
se
muestra
en
la
figura
5.40a,
es
que
hay
dos
relaciones
entre
ADMINISTRADOR y EDIFICIO. En una relación, una columna ADMINISTRADOR se refiere
al EDIFICIO, y en otra relación, una columna EDIFICIO se refiere al ADMINISTRADOR. La

---

<!-- página 212 -->

implementación de ambas relaciones en un esquema relacional provoca la denominada
dependencia de clave externa circular.
Figura 5.40c

---

<!-- página 213 -->

Figura 5.40d
No podemos tener una restricción en una tabla que se refiera a una tabla que aún no se ha
creado. Por lo tanto, elegimos crear inicialmente solo las restricciones de integridad
referencial en la relación EDIFICIO, en la que una columna de clave externa en la relación
EDIFICIO hace referencia a la columna de clave principal en la relación ADMINISTRADOR.
Las otras restricciones de integridad referencial, en las que una columna de clave externa
en la relación ADMINISTRADOR hace referencia a la columna de clave principal en
EDIFICIO, se agregan como se describe a continuación.
Si necesitamos ver la sentencia de creación de la tabla ADMINISTRADOR podemos emitir
el comando:

---

<!-- página 214 -->

Administración de restricciones
Ahora que se insertaron los datos iniciales, podemos agregar la restricción de integridad
referencial faltante, en la que la columna de clave externa EdificioID en la relación
ADMINISTRADOR se refiere a la clave principal de la relación EDIFICIO emitiendo la
siguiente declaración:
Sentencia ALTER 5:
ALTER TABLE administrador
ADD CONSTRAINT resideenfk
FOREIGN KEY (EdificioID) REFERENCES edificio (EdificioID);
Una vez que la restricción de integridad referencial resideenfk está en su lugar, podemos
agregar valores a la columna EdificioID de la relación ADMINISTRADOR ejecutando las
siguientes declaraciones UPDATE:
Sentencia UPDATE 4:
UPDATE administrador
SET EdificioID = ‘B1’
WHERE AdministradorID = ‘M12’;
Sentencia UPDATE 5:
UPDATE administrador
SET EdificioID = ‘B2’
WHERE AdministradorID = ‘M23’;
Sentencia UPDATE 6:
UPDATE administrador
SET EdificioID = ‘B4’

---

<!-- página 215 -->

WHERE AdministradorID = ‘M34’;
Después de ejecutar las sentencias UPDATE, los registros en la relación ADMINISTRADOR
tienen valores en la columna EdificioID. Todos los datos iniciales que se muestran en la
Figura 5.40c ahora se insertan en la base de datos de gestión de inmuebles.
Ahora podemos implementar completamente el requisito de que la columna EdificioID sea
obligatoria emitiendo la siguiente instrucción ALTER TABLE:
Sentencia ALTER 6:
ALTER TABLE administrador
MODIFY COLUMN EdificioID CHAR(3) NOT NULL;
Todos los registros futuros en la relación ADMINISTRADOR deberán ingresar un valor en la
columna EdificioID que coincidirá con el valor EdificioID en la relación EDIFICIO.
Debido a que la restricción resideenfk tiene un nombre, tenemos una opción, cuando sea
necesario, para descartar las tablas ADMINISTRADOR y EDIFICIO. Considere primero la
siguiente secuencia de declaraciones de tablas desplegables:
Secuencia DROP TABLE - primeras siete tablas:
DROP TABLE limpia;
DROP TABLE personal;
DROP TABLE departamento;
DROP TABLE cliente;
DROP TABLE inspecciona;
DROP TABLE inspector;
DROP TABLE administrador_celular;
Esta secuencia eliminará todas las relaciones que no sean EDIFICIO y ADMINISTRADOR.
Debido a que las relaciones EDIFICIO y ADMINISTRADOR se refieren entre sí, tampoco
esta secuencia:
Secuencia DROP TABLE - últimas dos tablas (a):
DROP TABLE edificio;
DROP TABLE administrador;
ni esta secuencia:
Secuencia DROP TABLE - últimas dos tablas (b):
DROP TABLE administrador;
DROP TABLE edificio;

---

<!-- página 216 -->

se puede ejecutar. Sin embargo, debido a que la restricción resideenfk tiene un nombre,
puede eliminarse mediante la siguiente instrucción:
Sentencia ALTER 7:
ALTER TABLE administrador
DROP CONSTRAINT resideenfk;
que a su vez nos permite ejecutar la secuencia DROP TABLE - últimas dos tablas (a).
Los comandos para eliminar las restricciones de integridad referencial en las tablas se
pueden usar para eludir por completo el problema de ordenar las declaraciones DROP
TABLE antes de ejecutar las declaraciones DROP TABLE. Por ejemplo, si eliminamos todas
las restricciones de referencia en la base de datos (suponiendo que todas tuvieran nombre),
podríamos ejecutar instrucciones DROP TABLE en cualquier orden.
SELECT (Ejemplos adicionales)
A continuación, mostraremos ejemplos de consultas SQL, demostrando funcionalidades y
comandos SQL adicionales. Estas consultas de ejemplo consultarán los registros de la base
de datos.
Unión de una relación consigo misma (self-JOIN)
Cuando una relación contiene una clave externa que hace referencia a su propia clave
principal, dicha relación se puede unir consigo misma en una consulta. Tal unión se conoce
como declaración de self-JOIN. Considere la consulta 40.
Texto Consulta 40: Para todos los clientes corporativos que fueron referidos por otros
clientes corporativos, recupere el nombre del cliente corporativo y el nombre del cliente
corporativo que lo refirió.
Consulta 40: SELECT c.clientenombre AS cliente, r.clientenombre AS recomendador
FROM cliente c, cliente r
WHERE c.clienteid = r.referidopor_clienteid
El resultado de la Consulta 40 se muestra en la Figura 5.40.
Figura 5.40

---

<!-- página 217 -->

La consulta considera la relación CLIENTE dos veces, bajo dos alias diferentes: c y r. El
alias c representa la relación CLIENTE en el rol de cliente, y el alias r representa la relación
CLIENTE en el rol de recomendador. Estas dos representaciones se unen para que el valor
ReferidoPor_ClienteID del cliente coincida con el valor ClienteID del recomendador.
Tenga en cuenta que en este caso, el uso de alias es obligatorio ya que nos referimos a la
misma relación dos veces. Si no usáramos los alias, la declaración de consulta sería
ambigua y no se ejecutaría (se devolvería un mensaje de error).
INNER and OUTER JOIN
Recuerde que la operación JOIN fusiona los registros de las relaciones donde la clave
externa de una relación coincide con la clave principal de la otra relación. La consulta 41
muestra un ejemplo de una operación JOIN sobre las relaciones DEPARTAMENTO y
CLIENTE.
Consulta 41: SELECT d.EdificioID, d.NroDepto, c.ClienteNombre
FROM departamento d, cliente c
WHERE d.ClienteID = c.ClienteID;
El resultado de la Consulta 41 se muestra en la Figura 5.41.
Figura 5.41.
Aunque la notación JOIN que mostramos en la Consulta 41 funciona en todos los RDBMS,
la mayoría de los paquetes de RDBMS ofrecen una notación JOIN alternativa utilizando
diferentes palabras clave, como se ilustra en la Consulta 41alt1.
Consulta 41alt1:
SELECT d.edificioid, d.nrodepto, c.clientenombre
FROM departamento d
JOIN cliente c
ON d.clienteid = c.clienteid;
Aunque la notación es diferente, esta consulta funciona igual que la consulta 41 y producirá
el mismo resultado que se muestra en la figura 5.41.
La sentencia JOIN regular, que une registros de dos tablas donde el valor de una columna
específica en un registro de una tabla (p. ej., d.clienteid) coincide con el valor de una

---

<!-- página 218 -->

columna específica en un registro de otra tabla (p. ej., c.clienteid), también se conoce como
INNER JOIN. De hecho, en la mayoría de los paquetes de RDBMS, la Consulta 41 también
se podría haber escrito usando una palabra clave INNER JOIN, como se ilustra en la
Consulta 41alt2.
Consulta 41alt2:
SELECT d.edificioid, d.nrodepto, c.clientenombre
FROM departamento d
INNER JOIN cliente c
ON d.clienteid = c.clienteid;
Esta consulta también funciona igual que la Consulta 41 y producirá el mismo resultado,
como se muestra en la Figura 5.41. Lo importante a tener en cuenta es que INNER JOIN es
sinónimo de JOIN normal.
INNER JOIN ignora los registros de una relación que no coinciden con la otra relación.
Observe el resultado de la consulta 41 y observe que el apartamento 41 en el edificio B1 y
el apartamento 31 en el edificio B2 no aparecen en el resultado porque sus ClienteID no
coinciden con el ClienteID de ningún cliente corporativo debido a que tienen el valor NULL.
Del mismo modo, el cliente corporativo South no aparece en el resultado porque su
ClienteID no coincide con ningún ClienteID de un apartamento.
Una instrucción OUTER JOIN es una variación de la operación JOIN que complementa los
resultados con los registros de una relación que no coinciden con la otra relación. Hay tres
variantes de OUTER JOIN: sentencia LEFT OUTER JOIN, sentencia RIGHT OUTER JOIN
y sentencia FULL OUTER JOIN.
Para ver un ejemplo de LEFT OUTER JOIN, considere la consulta 42.
Consulta 42: SELECT d.edificioid, d.nrodepto, c.clientenombre
FROM departamento d LEFT OUTER JOIN cliente c
ON d.clienteid = c.clienteid;
El resultado de la Consulta 42 se muestra en la Figura 5.42.
Figura 5.42

---

<!-- página 219 -->

En la declaración LEFT OUTER JOIN, todos los registros de la relación en la parte izquierda
de la declaración (en este caso, DEPARTAMENTO) se mostrarán en el resultado, incluso si
no tienen un valor de condición de unión que coincida con un valor en el otra relación.
Cuando un registro se une de esta manera con un registro de la otra relación, se usa un
valor NULL cuando no hay un registro coincidente en la otra relación. Como se muestra en
la Figura 5.42, cuando se usa la operación LEFT OUTER JOIN, el apartamento 41 en el
edificio B1 aparece en el resultado, al igual que el apartamento 31 en el edificio B2, aunque
no tengan un valor de ClienteID asociado. Su valor ClienteID es NULL.
Para ver un ejemplo de RIGHT OUTER JOIN, considere la Consulta 43.
Consulta 43: SELECT d.edificioid, d.nrodepto, c.clientenombre
FROM departamento d RIGHT OUTER JOIN cliente c
ON d.clienteid = c.clienteid;
El resultado de la Consulta 43 se muestra en la Figura 5.43.
Figura 5.43.
En la declaración RIGHT OUTER JOIN, todos los registros de la relación en la parte
derecha de la declaración (en este caso, CLIENTE) se mostrarán en el resultado, incluso si
no tienen una coincidencia en la relación en el lado izquierdo de la declaración. Como se
muestra en la Figura 5.43, cuando se usa RIGHT OUTER JOIN, el nombre de cliente South
aparece en el resultado, aunque no tiene valores EdificioID y NroDepto asociados. En su
lugar, se muestran valores NULL para EdificioID y NroDepto.
Para ver un ejemplo de FULL OUTER JOIN, considere la consulta 44.
Consulta 43: SELECT d.edificioid, d.nrodepto, c.clientenombre
FROM departamento d FULL OUTER JOIN cliente c
ON d.clienteid = c.clienteid;
Nota: MySQL y MariaDB no soportan consultas con FULL OUTER JOIN
El resultado de la Consulta 44 se muestra en la Figura 5.44.

---

<!-- página 220 -->

SELECT d.edificioid, d.nrodepto, c.clientenombre FROM departamento d c LEFT
OUTER JOIN cliente c ON d.clienteid = c.clienteid
UNION
SELECT d.edificioid, d.nrodepto, c.clientenombre FROM departamento d c RIGHT
OUTER JOIN cliente c ON d.clienteid = c.clienteid;
Figura 5.44.
En la declaración FULL OUTER JOIN, todos los registros de ambas relaciones se mostrarán
en el resultado incluso si no tienen una coincidencia en la otra relación.
Unir sin utilizar una combinación de clave principal/clave externa
Es posible unir dos tablas sin unir una columna de clave externa en una tabla con una
columna de clave principal de otra tabla.
Una condición JOIN puede conectar una columna de una tabla con una columna de la otra
tabla siempre que esas columnas contengan los mismos valores. La consulta 45 muestra un
ejemplo de una operación JOIN que une dos columnas que no son claves principales ni
externas.
Texto de consulta 45: para cada administrador que tenga un personal con el mismo
nombre que el nombre del administrador, muestre la identificación, el nombre y el apellido
del administrador, y la identificación del personal que tienen el mismo nombre que el
nombre del administrador.
Consulta 45: SELECT a.administradorid, a.nombres, a.apellido, p.personalid
FROM administrador a, personal p
WHERE a.nombres = p.personalnombre;
El resultado de la Consulta 45 se muestra en la Figura 5.45.

---

<!-- página 221 -->

Figura 5.45.
IS NULL
La comparación IS NULL se utiliza en consultas que contienen comparaciones con un valor
vacío en una columna de un registro. Considere la consulta 46.
Texto de Consulta 46: Recupera registros de todos los administradores que no tienen
bono.
Consulta 46: SELECT * FROM administrador WHERE bono IS NULL;
Figura 5.46.
EXISTS
En las consultas en las que la consulta interna (consulta anidada) usa columnas de las
relaciones enumeradas en la parte SELECT de la consulta externa, la consulta interna se
denomina subconsulta correlacionada. En tales casos, el operador EXISTS se puede usar
para verificar si el resultado de la consulta correlacionada interna está vacío. Considere la
consulta 47.
Texto de consulta 47: Recuperar registros de todos los clientes corporativos en nuestra
base de datos que actualmente nos alquilan uno o más departamentos.
Consulta 47: SELECT *
FROM cliente c
WHERE EXISTS
(SELECT *
FROM departamento d
WHERE c.clienteid = d.clienteid);
El resultado de la Consulta 47 se muestra en la Figura 5.47.

---

<!-- página 222 -->

Figura 5.47.
En la Consulta 47, la consulta interna utiliza la columna ClienteID de la relación CLIENTE
declarada en la consulta externa. Como resultado, la consulta interna se correlaciona con la
consulta externa. Para cada cliente X representado por un registro en la relación CLIENTE,
el operador EXISTS devuelve el valor booleano VERDADERO si existe un registro en la
relación DEPARTAMENTO de ese cliente corporativo alquilando el departamento. Si no hay
registro en la relación DEPARTAMENTO para el cliente X que alquila un departamento, el
operador EXISTS devuelve el valor booleano FALSO.
Esta consulta es un ejemplo de una consulta anidada correlacionada porque la consulta
interna hace referencia a la columna ClienteID en la tabla CLIENTE en la consulta externa
(c.clienteid), así como a la columna ClienteID en la tabla DEPARTAMENTO en la consulta
interna (a .clienteid).
NOT
El operador NOT se puede usar junto con las declaraciones de comparación de condiciones
que devuelven los valores booleanos VERDADERO o FALSO. Considere la consulta 48.
Texto de consulta 48: Recuperar registros de todos los clientes corporativos en nuestra
base de datos que actualmente no nos alquilan ningún apartamento.
Consulta 48: SELECT *
FROM cliente c
WHERE NOT EXISTS
(SELECT *
FROM departamento d
WHERE c.clienteid = d.clienteid);
El resultado de la Consulta 48 se muestra en la Figura 5.48.
Figura 5.48.

---

<!-- página 223 -->

La palabra clave NOT se puede utilizar en otros tipos de consultas mediante lógica
booleana. Por ejemplo, NOT puede combinarse con IN para formar una condición NOT IN, o
con IS NULL para formar la condición IS NOT NULL.
Consultas alternativas
En muchos casos, hay más de una opción para recuperar los datos solicitados. Por ejemplo,
considere nuevamente la Consulta 47.
Texto de consulta 47: Recuperar registros de todos los clientes corporativos en nuestra
base de datos que actualmente nos alquilan uno o más apartamentos.
Consulta 47: SELECT *
FROM cliente c
WHERE EXISTS
(SELECT *
FROM departamento d
WHERE c.clienteid = d.clienteid);
Tenga en cuenta que la consulta 47 podría haberse escrito sin usar el operador IN, en lugar
del operador EXISTS, como se muestra en la consulta 47alt1.
Consulta 47alt1:
SELECT *
FROM cliente c
WHERE c.clientid IN
(SELECT cc.clienteid
FROM departamento d, cliente cc
WHERE cc.clienteid = d.clientid);
Ahora tenga en cuenta que la Consulta 47 también se podría haber escrito sin usar una
consulta anidada, como se muestra en la figura Consulta 47alt2.
Consulta 47alt2: SELECT DISTINCT c.clienteid, c.clientenombre, c.referidopor_clienteid
FROM departamento d, cliente c
WHERE c.clientid = d.clientid;
Como acabamos de ilustrar, hay casos en los que es posible responder una pregunta en
particular usando diferentes comandos SQL. En tales casos, la decisión sobre qué consulta
usar generalmente se basa en el rendimiento de la consulta, como la velocidad de la
consulta.

---

<!-- página 224 -->

Insertar desde una consulta
Una consulta que recupera los datos de una relación se puede utilizar para completar otra
relación. Considere el siguiente escenario de ejemplo.
Nos gustaría crear una copia desnormalizada de la relación LIMPIA que, además de
contener la columna PersonalID, también contenga la columna PersonalNombre. Primero,
creamos una relación desnormalizada vacía LIMPIADESNORMALIZADA emitiendo la
siguiente instrucción CREATE TABLE:
Sentencia CREATE TABLE 1:
CREATE TABLE limpiadesnormalizada (
edificioid CHAR(3) NOT NULL,
nrodepto CHAR(5) NOT NULL,
clienteid CHAR(4) NOT NULL,
clientenombre VARCHAR(25) NOT NULL,
PRIMARY KEY (edificioid, nrodepto, clienteid));
Esta nueva relación ahora se puede completar emitiendo la siguiente declaración:
Declaración INSERT 2:
INSERT INTO limpiadesnormalizada
SELECT l.edificioid, l.nrodepto, p.personalid, p.personalnombre
FROM limpia l, personal p
WHERE l.personalid = p.personalid;
Al combinar la instrucción INSERT INTO con la consulta SELECT, hemos automatizado el
proceso de inserción de datos en la relación LIMPIADESNORMALIZADA.
Otras funcionalidades de SQL
Las características de SQL cubiertas aquí brindan una base para comprender el uso típico
de SQL. Además de lo que hemos presentado, existen otras funcionalidades de SQL. Una
vez que estás familiarizado con los comandos presentados, aprender y usar otras funciones
de SQL disponibles, cuando sea necesario, debería ser un proceso sencillo.
Hasta aquí se han presentado los temas más fundamentales relacionados con SQL. Las
siguientes notas cubren varios problemas adicionales relacionados con SQL.
Una nota sobre el uso inadecuado de los valores observados en SQL
Un error común de SQL para principiantes ocurre cuando un usuario novato crea una
consulta simplista que produce el resultado correcto al usar de manera inapropiada los

---

<!-- página 225 -->

valores observados. Considere la siguiente solicitud de recuperación de datos de la
empresa minorista:
Solicitud A: para cada producto que tenga más de tres artículos vendidos en todas las
transacciones de ventas, recupere la identificación del producto, el nombre del producto y el
precio del producto.
Considere las siguientes dos consultas SQL:
Consulta SQL A
SELECT productoid, productonombre, productoprecio
FROM producto
WHERE productoid IN
(SELECT productoid
FROM incluye
GROUP BY productid
HAVING SUM(cantidad) > 3;
Consulta SQL B
SELECT productoid, productonombre, productoprecio
FROM producto
WHERE productoid IN (‘3X3’, ‘4X4’);
Debido al hecho de que los productos cuyo valor ProductID es '3X3' y '4X4' tienen más de
tres artículos vendidos en todas las transacciones de venta, ambas consultas producirán el
mismo resultado:
Sin embargo, la Consulta A es una consulta adecuada para la Solicitud A, mientras que la
Consulta B no lo es. La Consulta A usa comandos SQL para determinar qué productos
tienen más de tres artículos vendidos dentro de todas las transacciones de ventas y
producirá el resultado correcto incluso cuando se actualicen los valores en las tablas de la
base de datos.
Por otro lado, la Consulta B se basa en la observación del autor de la consulta de que, en la
actualidad, los productos cuyo valor ProductID es '3X3' y '4X4' son los productos que tienen
más de tres artículos vendidos en todas las transacciones de venta. Cuando ese ya no sea

---

<!-- página 226 -->

el caso, debido a las actualizaciones de la base de datos (por ejemplo, la inserción de
nuevos productos que tienen más de tres artículos vendidos), la Consulta B producirá
resultados incorrectos.
Como se ilustra en este ejemplo, las consultas SQL no deben usar valores escritos
directamente en condiciones cuando se pueden usar comandos SQL en su lugar para
recuperar los valores necesarios para la condición de la base de datos. Tenga en cuenta
que la Consulta B habría sido una consulta adecuada para la Solicitud B.
Solicitud B: para productos con un valor de ProductoID de '3X3' y '4X4', recupere la
identificación del producto, el nombre del producto y el precio del producto.