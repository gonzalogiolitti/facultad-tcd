<!-- página 1 -->

Unidad I – Trabajo Práctico 2 
Ejercicios de Práctica 
 
Estudio de Caso 1: Institución de Arte 
 
Una institución de arte desea mantener información acerca de cuadros. Para ello, 
se quiere modelar pintores, cuadros y museos. 
Se sabe que un pintor pinta cuadros y los cuadros se exponen en varios museos. 
Los pintores poseen un nombre (los nombres de los pintores no se repiten), las 
corrientes artísticas a las que pertenecieron (puede ser una o varias), su ciudad natal 
y su fecha de fallecimiento. 
En cuanto a los cuadros, podemos saber quién o quiénes fueron los que lo pintaron, 
y el título que posee la obra. 
Por último, los museos poseen un nombre (el nombre del museo no se repite), una 
dirección y la ciudad donde se encuentra. 
Tenga en cuenta que un cuadro podría ser pintado por varios pintores. Se sabe 
además que un cuadro puede ser expuesto más de una vez en el mismo museo en 
diferentes instantes de tiempo. 
 
 
 
Estudio de Caso 2: Sistemas de Reservas de Autos 
 
Se desea diseñar una base de datos sobre la información de las reservas de una 
empresa dedicada al alquiler de automóviles. La empresa cuenta con una base de 
datos de clientes, de los cuales sabe el DNI, el nombre y la dirección. 
Un determinado cliente puede realizar en un momento dado varias reservas. De una 
reserva sabemos su número (que es único), una descripción, la fecha de comienzo 
y la fecha final. 
Sabemos que una reserva la realiza un único cliente, pero puede involucrar a varios 
coches. De cada coche sabemos el modelo, la marca y la patente (que será única 
por coche). A su vez, todo coche tiene siempre asignado un determinado garage, 
que no puede cambiar. Cada garage se identifica con un número único y su 
dirección. 
Cada reserva se realiza en una determinada agencia. De cada agencia, se conoce 
el número único, el nombre y su dirección. Tenga en cuenta que en la base de datos 
pueden existir clientes que no hayan hecho ninguna reserva.

---

<!-- página 2 -->

Estudio de Caso 3: Cadena de Farmacias 
 
Se desea mantener una base de datos para una cadena de farmacias distribuida en 
diferentes ciudades. De la ciudad se sabe su nombre y su código postal. De cada 
farmacia, su ID, su dirección (calle y número) y los días que le corresponde guardia. 
Una farmacia está en una sola ciudad, pero en una ciudad hay más de una farmacia. 
A su vez, sabemos que por cada ciudad existe un único farmacéutico; es decir, en 
las ciudades en las que hubiere más de una farmacia, el mismo farmacéutico estará 
afectado a todas las farmacias de esa ciudad. 
En cada farmacia trabajan varios empleados. De cada empleado queremos saber 
su CUIT, su nombre, la fecha de ingreso y las enfermedades que tuvo (alcanza con 
el nombre de cada enfermedad). Tenga en cuenta que cada empleado trabaja en 
una sola farmacia. 
Cada farmacia tiene a su vez su stock de cada medicamento que vende. Cada 
medicamento se identifica por nombre, presentación (ej: ampollas de 5 unidades, 
jarabe de 100ml, inyecciones por 10 unidades) y precio, que es el mismo para todas 
las farmacias. También se conoce la o las monodrogas que componen cada 
medicamento, el laboratorio que lo comercializa y las acciones terapéuticas que 
tiene. De cada monodroga sabemos el nombre científico, el nombre comercial y la 
cantidad que se encuentra en cada medicamento. 
De cada laboratorio sabemos el nombre (que es único), el domicilio y el nombre y 
apellido del dueño. Un laboratorio provee varios medicamentos a esta cadena de 
farmacias. De las acciones terapéuticas conocemos el nombre y el tiempo que tarda 
en hacer efecto. 
Tenga en cuenta que una acción terapéutica puede repetirse para distintos 
medicamentos. Por ejemplo, el medicamento Dorixina Forte es un medicamento que 
cuesta $136 y su presentación es en caja de 20 comprimidos. 
Tiene como monodrogas Clonixinato de lisina (nombre científico) en 125,00 mg y 
Dextropropoxifeno napsilato (nombre científico) en 98,00 mg. Sus acciones 
terapéuticas son analgésicas y antiinflamatorias y tardan 4 horas en hacer efecto en 
la persona que toma el medicamento. 
El sistema deberá permitir consultar la base de datos de diferentes alternativas para 
medicamentos compuestos por una monodroga, medicamentos de un laboratorio, 
medicamentos con el mismo nombre y distinta presentación, entre otras.