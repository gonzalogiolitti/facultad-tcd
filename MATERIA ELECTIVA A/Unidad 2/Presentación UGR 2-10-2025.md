## Slide 1
- Automatización 4.0/ISA 95
- Ing. Joel Acosta

## Slide 2
- Gateway IoT
- Series SIMATIC IoT 20xx:
- Proyectos Arduino (Pilotos):
- Proyectos Maquinas Virtual IT

## Slide 3

## Slide 4
- Automatización 4.0

## Slide 5
- Automatización 4.0

## Slide 6
- ISA 95

## Slide 7
- Automatización 4.0/ISA 95

## Slide 8
- Ejemplo
- La verdadera
- Triturada
- Molienda
- Fusión
- Generador de vapor
- Molino de hueso
- Porcentaje de consumo amperaje (%)
- Velocidad de sinfín (RPM)
- Temperatura del motor
- Planta
- Firma
- Sector
- Activos
- Variables

## Slide 9
- Ejemplo
- Firma: La entidad dueña de la organización
- Planta: Establecimiento
- Área/Sector: Se refiere al lugar donde se desarrollan las actividades, muchas veces viene acompañado del área y luego el sector ejemplo Producción/Molienda
- Línea: Se refiere al conjunto de asset que realizan el proceso que puede ser 1 o mas
- Equipo: Se refiere al asset
- Descriptivo: Se refiere al nombre dentro de los sistemas SCADA o PLC
- TAG: Se refiere al código único de identificación que tiene el equipo y variables dentro del SACADA o PLC
- Unidad: Se refiere al valor de referencia de la medición puede ser %, °C, RPM y demás
- Dato: Se refiere al tipo de dato que corresponde la medición (Float,INT,Bool, UINT16

## Slide 10
- Ejemplo
- Dirección node red: Se refiere a la ubicación dentro de los nodos en los servidores con protocolo OPC-UA
- Nombre variable global: Se refiere al nombre de nuestra variable dentro de nuestra solución MES o IIoT. El prefijo L2_Marca su origen en sistemas SCADA, mientras que L3 lo marca en las plataformas en la nube.

## Slide 11
- ISA 95/Actividades de control y monitoreo de manufacturas
- Reportes de áreas de trabajo sobre variables y costos.
- Recolección  y mantenimiento sobre datos de áreas tales como producción, inventario, mantenimiento, consumo de energía y demás.
- Recolección de datos de performance y desvíos definidos
- por el área de ingeniería (Disponibilidad, Rendimiento, Calidad)

## Slide 12
- ISA 95/Actividades de control y monitoreo de manufacturas
- Estableciendo los detalles de las ordenes de producción de cada área de planta correspondiente, incluyendo, mantenimiento, estados de equipos, recetas u otras necesidades relacionadas.

## Slide 13
- Actividades de control y monitoreo de manufacturas
- Optimizar localmente, los costos de cada área individual mientras alcanza los objetivos de las ordenes de producción establecidos por la dirección.
- Modificar los objetivos de las ordenes de producción de la dirección debido a paradas de planta correspondiente a cada área.

## Slide 14
- ISA 95/Obtención de datos
- Se requiere generar un entorno virtual para controlar el proceso de cocción de aceite refinado, para ello vamos a diferencia los distintos tipos de datos que intervienen en el proceso.
- Datos de piso de planta: timeseries de mediciones sensoriales cada 5 minutos
- Sensores de temperatura de entrada y salida de los hornos.
- Consumo eléctrico de motores de recirculación de aire
- Apertura de válvula de vapor
- Velocidad del tornillo de alimentación
- Velocidad del tornillo de extracción
- Niveles de tanques de alimentación

## Slide 15
- ISA 95/Obtención de datos
- Datos de  los objetivos de la organización:
- Nro de Orden de producción.
- Numero de receta.
- Producto objetivo a producir
- Alimentación de MP.
- Estado de equipo.
- Descripción de estado de equipo.
- OEE de disponibilidad, OEE de rendimiento, OEE de calidad.
- Consumo excedente de gas.

## Slide 16
- ISA 95/Obtención de datos
- Monitoreo de consumo eléctrico de motor

## Slide 17
- ISA 95/Obtención de datos
- Monitoreo de temperatura

## Slide 18
- ISA 95/Obtención de datos
- Porcentaje de apertura de válvula de vapor
- Velocidad de alimentación y extracción

## Slide 19
- ISA 95/Obtención de datos
- Datos de objetivos recolectados al final del día operativo

## Slide 20
- ISA 95/Obtención de datos
- Desvíos de orden de producción
- Estado de cocinador

## Slide 21
- ISA 95/Obtención de datos
- Ingreso de MP
- Producción de aceite

## Slide 22
- Trabajo practico
- ABC
- Gran Buenos Aires
- Generador de vapor
- Fusión
- Triturador
- Planta
- Firma
- Sector
- Activos
- Variables

## Slide 23
- Trabajo practico
- Armar una planilla Excel que contenga
- La firma, la planta, el área/sector, la línea/celda de trabajo, asset, variables, dirección tag “xxx-1”, nombre codificado con la pirámide de automatización.
- Buscar al menos 3 variables.