<!-- página 1 -->

1.​ Descuento por medio de pago y cliente: Una empresa de telefonía piensa 
implementar una serie de descuentos según el tipo de cliente y forma de pago. La 
política de descuentos es la siguiente: 
●​ Si es cliente Corporativo y paga con transferencia, 10%;  
●​ si es Minorista y con débito, 5%;  
●​ si es Corporativo con tarjeta crédito en 1 pago, 7%;  
●​ otros, 0%. 
Diseñar el algoritmo que refleje el proceso decisorio de la compañía calculando el 
monto a abonar, teniendo en cuenta que se debe ingresar tipo de cliente y forma de 
pago. El abono mensual es fijo para todos los abonados. 
2.​ Plan de producción:  
Una empresa necesita decidir cómo organizar su producción. Para ello: 
●​ Si la demanda proyectada es mayor a la capacidad de producción:​
 
○​ Si existen horas extra disponibles, se activa un turno extra.​
 
○​ Si no hay horas extra, se debe subcontratar.​
 
●​ Si la demanda proyectada es menor o igual a la capacidad de producción:​
 
○​ Si el stock disponible es menor que el stock mínimo, se produce un lote 
mínimo.​
 
○​ En caso contrario, se mantiene la producción sin cambios.​
 
El programa debe mostrar la decisión tomada en cada caso. 
 
3.​ Impuesto interno: Si producto es importado y rubro “Electrónica”, 8%; si importado 
y “Textil”, 4%; si nacional y “Electrónica”, 3%; otros, 0%. Calcular precio final. 
Dado el precio base de un producto, su origen y su rubro, calcular el impuesto aplicable y el 
precio final de acuerdo a las siguientes Reglas de Negocio:​
 
●​ Si el producto es Importado y el rubro es Electrónica → impuesto 8%.​
 
●​ Si es Importado y el rubro es Textil → impuesto 4%.​
 
●​ Si es Nacional y rubro Electrónica → impuesto 3%.​
 
●​ En cualquier otro caso → impuesto 0%.​

---

<!-- página 2 -->

Mostrar el impuesto (en porcentaje), el monto de impuesto y el precio final. 
 
4.​ Turnos de atención: Si el día es sábado y la categoría es “Premium”, abrir 9–13; si 
sábado y “Standard”, cerrado; si lunes–viernes y Premium, 9–18; si lunes–viernes y 
Standard, 10–17. 
Dado el día de la semana y la categoría de cliente, determinar el horario de atención según 
estas reglas: 
●​ Si es sábado y categoría Premium → abrir de 09:00 a 13:00.​
 
●​ Si es sábado y categoría Standard → cerrado.​
 
●​ Si es lunes a viernes y Premium → de 09:00 a 18:00.​
 
●​ Si es lunes a viernes y Standard → de 10:00 a 17:00.​
  
Mostrar el horario o "CERRADO" según corresponda. 
 
5.​ Promoción escalonada:  
Calcular el descuento aplicable a una compra según cantidad y tipo de cliente, y mostrar el 
total a pagar. 
Reglas: 
Si compra 10 unidades o más  y tipo = Corporativo → descuento 15%.​
 
Si compra 10 unidades o más y tipo = Minorista → descuento 8%.​
 
Si compra 5 unidades o más pero menos de 10 y tipo = Corporativo 
→ descuento 7%.​
 
Si compra 5 unidades o más pero menos de 10 y tipo = Minorista → 
descuento 4%.​
 
Si compra menos de 5 unidades  → no se realiza descuento.​

---

<!-- página 3 -->

6.​ Penalización por retraso: 
Calcular la penalidad por pago fuera de término de una tarjeta bancarizada según 
días de retraso y tipo de contrato. Reglas: 
●​ Si retraso > 10 y contrato = Gold → penalidad fija $50.000.​
 
●​ Si retraso > 10 y contrato = Silver → penalidad fija $30.000.​
 
●​ Si 5 <= retraso <= 10 → penalidad = 2% del monto del pedido.​
 
●​ Si retraso < 5 → sólo advertencia (sin penalidad).​
 
El programa debe leer los días de retraso, el tipo de contrato y, cuando corresponda, el 
monto del pedido; luego mostrar la penalidad (monto) o la advertencia. 
 
  
PARA 
1.​ Control de calidad​
Un taller desea auditar 50 piezas producidas. Para cada pieza leer resultado 
(“OK”/“Falla”); si es “OK” contar ok, si no contar fallas. Al final, mostrar cantidades y 
% de rechazos tanto de las piezas “OK” como de las falladas. 
 
2.​ Satisfacción de clientes​
 Se desea relevar 100 encuestas de satisfacción al cliente (los mismos evalúan la 
calidad de atención con valores de 1 a 5, donde 1 es “nada conforme” y 5 es 
“excelente”). Para cada respuesta, si la evaluación e ≥ 4 contar “satisfechos”; si es  
≤2 contar “insatisfechos”. Al final, mostrar cantidades y porcentajes. 
 
3.​ Unidades vendidas por mes​
 Una concesionaria de autos desea conocer las ventas de mensuales del último año. 
Se debe solicitar cuál es la meta mensual, luego, para cada mes leer unidades 
vendidas. Si las unidades ≥ metaMensual, ese mes será un “mes con meta”. 
Acumular las unidadesTotales vendidas y al final, mostrar los “meses con meta”  y 
el total de  unidades vendidas en los 12 meses. 
 
4.​ Precios finalizados (30 productos) [Acumulador]​
 Se desea calcular el precio final de 30 productos. Para cada producto leer

---

<!-- página 4 -->

precioBase y origen (“Importado”/“Nacional”); si es “Importado”, aplicar impuesto 8%. 
Calcular el impuestoTotal de los productos importados  y contar cuántos superan el 
precio de $300.000 final. Mostrar impuestoTotal y el conteo. 
 
5.​ Temperaturas por jornada​
 Se desea controlar la temperatura máxima de un vivero durante 7 días. Para cada 
día leer temperatura; si temperatura > maxPermitida, contar “alerta”y registrar la 
máxima observada. Al final, mostrar alertas (nro de día y temperatura) y 
temperatura máxima. 
 
6.​ Lotes con reproceso​
Una metalúrgica  desea evaluar 40 lotes de una cierta pieza que fabrica. Para cada 
lote leer porcentaje de Defectuosos y costo de Reproceso; si el porcentaje de 
defectuosos > 2%, contar “con reproceso” y acumular  el costo de Reproceso. Al 
final, mostrar la cantidad de lotes con reproceso y el costo de Reproceso Total. 
 
7.​ Clientes calificados ​
 Se desea clasificar 50 clientes. Para cada cliente leer su score (0–100); si score 
≥80, contar “calificado”; si 50–79, contar “incentivar”; si <50, contar “descartar”. Al 
final, mostrar cantidades y % de calificados. 
  
  
  
MQ 
1.​ Registro de candidatos:  
Una empresa que se dedica a reclutar empleados, necesita un algoritmo para llevar 
una estadística de los candidatos. Para ello, el algoritmo debe leer candidatos hasta 
que se ingrese un nro de legajo=0. Si la persona cuenta con una experiencia ≥ 3 
años e inglés=“Sí”, contar “aptos”; contar total; mostrar cantidad de candidatos aptos 
y % de aptos. 
 
2.​ Lectura de temperaturas: Leer temperatura hasta que se ingrese el valor “ -999”. Si 
temp > maxPermitido contar alertas; ir registrando la mayor temperatura; mostrar 
cantidad de alertas y la máxima registrada.

---

<!-- página 5 -->

MAX y MIN 
1.​ Ruta más corta:  
Leer las distancias de N rutas de distribución e  informar la ruta con menor km. El fin 
de lectura se produce cuando el usuario ingresa el valor 0. 
2.​ Cliente con mayor deuda:  
Leer deudas de N clientes; encontrar el mayor y el menor saldo deudor. Al finalizar 
informar el nombre y saldo tanto del mayor como del menor deudor. 
3.​ Mejor margen por producto:  
Leer precio y costo de N productos que serán puestos a la venta. Calcular margen 
de ganancia y encontrar el máximo margen absoluto. 
4.​ Stock extremos:  
Para un código de producto que se almacena en varios depósitos distintos, leer 
stock y depósito donde está almacenado. Al finalizar mostrar los depósitos con 
mínimo y máximo stock de ese producto. 
5.​ Mayor crecimiento mensual:  
Leer ventas de 12 meses; calcular la variación mes a mes; informar el mayor 
aumento y en qué mes ocurrió. 
6.​ Entrega más puntual:  
Leer retrasos en días de las entregas de pedidos por parte de un proveedor (en días, 
pueden ser negativos si está adelantado); hallar el retraso mínimo (más adelantado) 
y el máximo (más retrasado).