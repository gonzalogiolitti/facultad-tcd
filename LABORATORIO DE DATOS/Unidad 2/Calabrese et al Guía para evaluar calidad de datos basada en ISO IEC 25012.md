<!-- página 1 -->

Guía para evaluar calidad de datos basada en 
ISO/IEC 25012
Julieta Calabrese 1 
, Silvia Esponda 
, Ariel Pasini 
, Marcos Boracchia 
,  
Patricia Pesado 
Instituto de Investigación en Informática LIDI (III-LIDI)* 
 Facultad de Informática - Universidad Nacional de La Plata 
50 y 120 - La Plata - Buenos Aires  
*Centro Asociado Comisión de Investigaciones Científicas de la Pcia. de Bs. As. (CIC)
1 Becaria UNLP 
{jcalabrese, sesponda, apasini, marcosb, 
ppesado}@lidi.info.unlp.edu.ar 
Abstract: En la actualidad, las organizaciones manejan un gran volumen de datos. 
Poder fomentar y mantener la calidad de los mismos es uno de los grandes retos a los 
que se enfrentan dichas organizaciones hoy en día. Existen normas, tales como 
ISO/IEC 25012, destinadas a poder medir la calidad de los datos basándose en un 
conjunto de características. Realizar dichas mediciones puede resultar costoso y 
complejo para quien cuente con poca experiencia en el área. En este contexto, el 
presente artículo propone una guía de medición basada en la ISO/IEC 25012, con el 
fin de brindar un estado actual de los datos en diferentes aspectos definidos en la 
norma. Asimismo, la guía propuesta es utilizada en una evaluación de producto bajo 
el proceso definido en ISO/IEC 25040, tomando como caso de estudio una base de 
datos de acceso libre. 
Keywords: Calidad de datos - Guía de medición - ISO/IEC 25012 - ISO/IEC 25040 
1. Introducción
Desde los inicios de la Ingeniería de Software, siempre estuvieron presentes los problemas 
relacionados con alcanzar niveles óptimos de calidad en diferentes aspectos del software. 
La calidad de un sistema informático depende esencialmente de los procesos utilizados para 
su producción junto con la posibilidad de adecuarse a determinados factores, tales como el 
tiempo de desarrollo y el costo de soluciones. Dichos factores suelen afectar el trabajo a 
realizar, siendo la calidad la primera variable de ajuste. 
La gestión de la calidad es una parte fundamental dentro de cualquier organización. Éstas 
manejan una gran variedad de información, aspecto clave para la toma de decisiones que 
dependen directamente de los datos con los que operan. Sin embargo, no suelen disponer de 
recursos que evalúen la calidad de dichos datos, siendo uno de los principales problemas a 
los que se enfrentan. No contar con datos de calidad puede generar grandes consecuencias 
en la organización al momento de querer destacarse en el mercado actual y de prestar un 
mejor servicio que cumpla con las exigencias del cliente. Dentro de este contexto, es de 
sumo interés evaluar diferentes características asociadas a los datos utilizados.  
XXV Congreso Argentino de Ciencias de la Computación
Río Cuarto, 14 al 18 de Octubre de 2019
-694-

---

<!-- página 2 -->

Esto nos lleva a centrar nuestra atención en los estándares definidos por ISO. La producción 
de software tiene a su disposición un conjunto de normas específicas destinadas a evaluar 
diferentes aspectos del software. La familia ISO/IEC 25000 (mayormente conocida como 
SQuaRE: Software Product Quality Requirements and Evaluation) nace en el año 2005 para 
dar respuesta a las necesidades actuales de las organizaciones. Su objetivo es la creación de 
un marco de trabajo común para evaluar la calidad de un producto software, sustituyendo a 
las anteriores ISO/IEC 9126 [1] e ISO/IEC 14598 [2]. Dentro de la familia ISO/IEC 25000, 
se presenta la norma ISO/IEC 25012 - “Data Quality Model” [3] y la ISO/IEC 25040 - 
“Evaluation process” [4].  
 
La norma ISO/IEC 25012 – “Data Quality Model” especifica un modelo general de calidad 
para aquellos datos que se encuentran definidos en un formato estructurado dentro de un 
sistema informático. Puede utilizarse para detallar requisitos, establecer medidas, como así 
también para planificar y realizar evaluaciones de calidad de datos. La norma clasifica los 
atributos de calidad en quince características analizadas desde dos puntos de vista: 
inherentes y dependientes del sistema. Dichas características tendrán una importancia y 
prioridad diferente para cada persona, siendo ésta la encargada de definir sus propias 
necesidades. 
 
 
Las características definidas en la norma poseen ejemplos de métricas que permiten obtener 
valores para establecer los niveles de dichas características mediante fórmulas. De la misma 
manera que en la norma ISO/IEC 25024 - “Measurement of data quality” [6], en donde se 
definen métricas para realizar la medición de la calidad de datos. Estas métricas requieren 
cierto nivel de análisis, ya que se componen de valores que deben ser de conocimiento por 
parte del evaluador. Esta tarea suele ser dificultosa para alguien con poca experiencia en el 
área de calidad e incluso costosa para empresas que estén interesadas en medir niveles de 
calidad y no posean un sector especializado en el tema.. 
 
 
Por otra parte, la norma ISO/IEC 25040 proporciona requisitos, recomendaciones y guías 
para llevar a cabo el proceso de evaluación del producto de software. Define un modelo de 
referencia para la evaluación, considerando las entradas, restricciones y recursos necesarios 
para obtener las salidas correspondientes. El proceso definido está formado por cinco 
secciones. 
 
El presente artículo propone una guía de medición para aquellos interesados en reconocer el 
nivel de ciertas características de calidad asociadas a sus datos, empleando su uso en el 
contexto de una evaluación de producto de software. De esta forma, una organización podrá 
obtener una retroalimentación del estado de los datos con los que opera, pudiendo 
especificar previamente cuáles son los valores esperados. Cabe destacar que la aplicación 
de la guía en una evaluación no se corresponde con una certificación.       
 
En la siguiente sección se describen en profundidad las estructuras de las normas ISO/IEC 
25012 e ISO/IEC 25040, haciendo hincapié en las características asociadas a los datos. En 
la tercera sección se define la guía de medición propuesta para medir la calidad de los 
mismos, tomando como referencia lo definido en ISO/IEC 25012. En la cuarta sección se 
realiza una evaluación de producto guiada por ISO/IEC 25040, utilizando la guía definida y 
XXV Congreso Argentino de Ciencias de la Computación
Río Cuarto, 14 al 18 de Octubre de 2019
-695-

---

<!-- página 3 -->

tomando como caso de prueba un conjunto de datos de acceso libre. Por último, se exponen 
las conclusiones y la bibliografía. 
2. ISO/IEC 25000
La familia ISO/IEC 25000 (SQuaRE) propone un conjunto de normas que tiene por 
objetivo la creación de un marco de trabajo común para evaluar la calidad del producto de 
software. En base a la problemática definida, es de interés destacar en el marco de este 
artículo las normas ISO/IEC 25012 e ISO/IEC 25040. 
2.1 ISO/IEC 25012 
La calidad de los datos es un factor clave en cualquier organización, ya que los mismos 
representan a la información de una manera formal y adecuada para la comunicación, la 
interpretación o el procesamiento. ISO/IEC 25012 define un modelo general de calidad para 
aquellos datos que están representados en un formato estructurado dentro de un sistema 
informático, y tiene como objetivo presentar una visión integrada de los mismos para 
garantizar la interoperabilidad de los sistemas. La norma está compuesta por un conjunto de 
quince características, las cuales se clasifican en dos grandes grupos:   
Calidad de Datos Inherente: Grado con el que las características tienen el potencial de 
satisfacer las necesidades establecidas y necesarias cuando los datos son utilizados bajo 
condiciones específicas. Desde el punto de vista inherente, la calidad de datos hace 
referencia a: 
x 
Valores de datos para el dominio y sus posibles restricciones (ej., Reglas de 
negocio con la calidad requerida por las características en una aplicación) 
x 
Relaciones entre valores de datos (ej., Consistencia) 
x 
Metadatos (ej., Autor, Formato, etc.) 
Calidad de Datos Dependiente del Sistema: Grado con el que la calidad de datos es 
alcanzada y preservada a través de un sistema informático cuando los datos son utilizados 
bajo condiciones específicas. Desde este punto de vista, la calidad de datos depende del 
dominio tecnológico en el que los datos se utilizan, y se alcanza mediante las capacidades 
de los componentes del sistema informático tales como: dispositivos hardware (ej., respaldo 
para alcanzar la Recuperabilidad) y software (ej., herramientas de migración para alcanzar 
la Portabilidad). Este punto de vista suele ser responsabilidad de los técnicos del sistema. 
La siguiente tabla grafica la clasificación de las características: 
Característica 
Inherente 
Dependiente del 
sistema 
Exactitud 
X 
Completitud 
X 
Consistencia 
X 
Credibilidad 
X 
Actualidad 
X 
Accesibilidad 
X 
X 
Conformidad 
X 
X 
Confidencialidad 
X 
X 
XXV Congreso Argentino de Ciencias de la Computación
Río Cuarto, 14 al 18 de Octubre de 2019
-696-

---

<!-- página 4 -->

Eficiencia 
X 
X 
Precisión 
X 
X 
Trazabilidad 
X 
X 
Comprensibilidad 
X 
X 
Disponibilidad 
 
X 
Portabilidad 
 
X 
Recuperabilidad 
 
X 
Tabla 1. Clasificación de características definidas en ISO/IEC 25012. 
 
El conjunto de características que conforman la Calidad de Datos Inherente está formado 
por: Exactitud (dividida en Semántica y Sintáctica), que especifica el grado en el que los 
datos representan correctamente el valor deseado en un contexto específico; Completitud, 
donde se espera que los datos obligatorios estén completos; Consistencia, haciendo 
referencia a los datos libres de contradicción y coherentes en un contexto específico; 
Credibilidad, la cual incluye el concepto de autenticidad, que define el grado en el que los 
datos se consideran ciertos y creíbles en un contexto específico; y Actualidad, la cual 
define el grado en el que los datos se encuentran actualizados. 
 
 
Por otra parte, las características que conforman la Calidad de Datos Inherente y 
Dependiente del Sistema hacen referencia a la Accesibilidad, donde se especifica el grado 
en que los datos pueden ser accedidos en un contexto específico (por ejemplo, personas que 
necesiten tecnologías de apoyo por algún tipo de discapacidad); Conformidad, donde se 
verifica que los datos correspondientes cumplen con estándares, convenciones o normativas 
vigentes; Confidencialidad (asociada a la seguridad de la información), donde se asegura 
que los datos solo son accedidos e interpretados por usuarios específicos autorizados; 
Eficiencia, donde se analiza el grado en el que los datos pueden ser procesados y 
proporcionados con los niveles de rendimiento esperados; Precisión, donde los datos 
requieren de valores exactos o con discernimiento en un contexto específico; Trazabilidad, 
donde se analiza si los datos proporcionan un registro de los acontecimientos que los 
modifican; y Comprensibilidad, en donde los datos son expresados utilizando lenguajes, 
símbolos y unidades apropiados y pueden ser leídos e interpretados por cualquier tipo de 
usuario.  
 
Por último, las características que conforman la Calidad de Datos Dependiente del Sistema 
hacen hincapié en la Disponibilidad, que define el grado de los datos para ser obtenidos 
por usuarios y/o aplicaciones autorizadas; Portabilidad, donde se analiza si los datos 
pueden ser copiados, reemplazados o eliminados al realizar un cambio de un sistema a otro, 
preservando el nivel de calidad; y Recuperabilidad, donde se comprueba que los datos 
mantienen y preservan un nivel de operaciones en caso de fallos. 
 
 
2.2 ISO/IEC 25040 
El uso de normas y estándares para lograr mayor competitividad es cada vez más habitual 
en las PyMEs desarrolladoras de software, ya sea para la obtención de una certificación o 
simplemente para lograr una mejora en el desarrollo del software a través del uso de buenas 
prácticas. ISO/IEC 25040 define el proceso para llevar a cabo la evaluación del producto de 
software mediante un modelo de referencia, considerando las entradas, restricciones y 
recursos necesarios para obtener las salidas correspondientes. El proceso para llevar a cabo 
la evaluación consta de cinco actividades:  
XXV Congreso Argentino de Ciencias de la Computación
Río Cuarto, 14 al 18 de Octubre de 2019
-697-

---

<!-- página 5 -->

x 
Actividad 1: Establecer los requisitos de la evaluación. Esta actividad consiste en 
establecer el propósito de la evaluación, identificando las partes interesadas en el 
producto, los riesgos posibles si los hubiese y el modelo de calidad a utilizar.  
x 
Actividad 2: Especificar la evaluación. Dentro de esta actividad se especifican los 
módulos de evaluación (métricas, herramientas y técnicas) junto con los criterios 
de decisión a aplicar. 
x 
Actividad 3: Diseñar la evaluación. En esta actividad se define el plan con las 
tareas que se deben realizar en la evaluación. 
x 
Actividad 4: Ejecutar la evaluación. Actividad destinada a la ejecución de la 
evaluación, obteniendo las métricas de calidad y aplicando los criterios de 
decisión. 
x 
Actividad 5: Concluir la evaluación. En esta última actividad se culmina la 
evaluación de la calidad, realizando un informe de resultados finales y 
conclusiones en base a los valores obtenidos. 
3. Guía de medición basada en características definidas en ISO/IEC 
25012 
Uno de los elementos claves en cualquier proceso de ingeniería es la medición. 
Particularmente en SQuaRE, las medidas se emplean para analizar el nivel de diferentes 
características asociadas a lo que se desea evaluar. El proceso de medición puede resultar 
complejo para personas con poca experiencia en el área de calidad ya que se debe llevar a 
cabo una evaluación de producto aplicando métricas, quizás sin contar con la experiencia y 
los conocimientos necesarios para ello. 
 
 
Dentro de este contexto, se presenta una guía que tiene como objetivo medir las 
características definidas en ISO/IEC 25012. Cabe mencionar que en el presente artículo 
sólo se presentan tres de ellas, pero la misma incluye todas las características de la norma. 
La guía define para cada una de las características diferentes secciones: 
x 
Tipo: Inherente | Dependiente del sistema. 
x 
Documentación previa requerida: Documentación/especificación necesaria para 
poder realizar la medición. Se indica si es necesaria para cada uno de los 
atributos1 a evaluar o genérica.  
x 
Método para la medición: En base a la documentación previa requerida, se indica 
cuál es la forma de realizar la medición. 
x 
Variables: Valores a completar en base a la medición. 
x 
Fórmula: Fórmula a resolver para obtener el valor final. 
x 
Escala: Opción a seleccionar luego de aplicar el método para la medición. 
 
La Tabla 2 especifica las secciones anteriormente definidas para las características 
Exactitud (dividida en Semántica y Sintáctica), Completitud y Actualidad. 
 
Semántica 
(Exactitud) 
Tipo 
Inherente 
Documentación 
previa 
Por cada atributo a evaluar: Especificar reglas 
semánticas.  
                                                          
1 Hace referencia a las características de una entidad en la base de datos. 
XXV Congreso Argentino de Ciencias de la Computación
Río Cuarto, 14 al 18 de Octubre de 2019
-698-

---

<!-- página 6 -->

requerida 
Método para la 
medición 
Por cada atributo, verificar si los datos cumplen con 
las reglas semánticas definidas. 
Variables 
X = Porcentaje de datos del atributo que cumplen 
con las reglas semánticas definidas. 
Fórmula 
Valor = X/100% 
Escala 
1) Casi ningún dato se corresponde con las reglas
definidas (X<=10%). 
2) Algunos datos se corresponden con las reglas,
pero se observan muchos errores (X>10% & 
X<=45%). 
3) Muchos datos se corresponden con las reglas
definidas y se observan algunos errores (X>45% & 
X<=85%). 
4) La gran totalidad de los datos se corresponden
con las reglas definidas (X>85). 
Sintáctica 
(Exactitud) 
Tipo 
Inherente 
Documentación 
previa 
requerida 
Por cada atributo a evaluar: Especificar reglas 
sintácticas.  
Método para la 
medición 
Por cada atributo, verificar si los datos cumplen con 
las reglas sintácticas definidas. 
Variables 
X = Porcentaje de datos del atributo que cumplen 
con las reglas sintácticas definidas. 
Fórmula 
Valor = X/100% 
Escala 
1) Casi ningún dato se corresponde con las reglas
definidas (X<=10%). 
2) Algunos datos se corresponden con las reglas,
pero se observan muchos errores (X>10% & 
X<=45%). 
3) Muchos datos se corresponden con las reglas
definidas y se observan algunos errores (X>45% & 
X<=85%). 
4) La gran totalidad de los datos se corresponden
con las reglas definidas (X>85%). 
Completitud 
Tipo 
Inherente 
Documentación 
previa 
requerida 
Por cada atributo a evaluar: Indicar si es 
obligatorio. 
Método para la 
medición 
Por cada atributo, verificar que no haya datos 
vacíos/en blanco. 
Variables 
X = Porcentaje de datos del atributo que se 
encuentran completos. 
Fórmula 
Valor = X/100% 
Escala 
1) Casi ningún dato se encuentra completo
(X<=10%). 
2) Algunos datos se encuentran completos, pero se
observan muchos incompletos (X>10% & 
X<=45%). 
3) Muchos datos se encuentran completos y se
observan algunos incompletos (X>45% & 
X<=85%). 
XXV Congreso Argentino de Ciencias de la Computación
Río Cuarto, 14 al 18 de Octubre de 2019
-699-

---

<!-- página 7 -->

4) La gran totalidad de los datos se encuentran
completos (X>85%). 
Actualidad 
Tipo 
Inherente 
Documentación 
previa 
requerida 
Fecha de la última actualización de la base de 
datos. 
Método para la 
medición 
Analizar la fecha en la cual los datos fueron 
actualizados por última vez. 
Variables 
- 
Fórmula 
- 
Escala 
1) Los datos fueron actualizados en el corriente
mes. 
2) Los datos fueron actualizados en el transcurso de
este año. 
3) Los datos fueron actualizados en el transcurso de
los últimos tres años. 
4) Desconozco cualquier dato relacionado a la
fecha de actualización de los datos. 
Tabla 2. Guía de medición. 
En la siguiente sección se lleva a cabo una evaluación de producto tomando como base el 
proceso definido en ISO/IEC 25040, utilizando la ISO/IEC 25012 para la selección de 
características. Asimismo, se utiliza la guía definida para la medición de dichas 
características explicando paso a paso su modo de aplicación. 
4. Evaluación de calidad de datos aplicando la guía de medición
Para llevar a cabo la evaluación se utilizó, a modo de guía, el proceso y la estructura 
definida en ISO/IEC 25040. Asimismo, se seleccionó una base de datos de acceso libre que 
contiene información relacionada a farmacias que dispensan medicamentos de PAMI. Los 
atributos que conforman la base de datos utilizada son: Código, Nombre, Dirección, 
Provincia, Localidad, Código Postal (CP), CUIT, Institución y Entidad [5]. 
4.1 
Establecer los requisitos de la evaluación 
En primer lugar, se define el propósito de la evaluación. 
El propósito de la evaluación es determinar si los datos considerados como obligatorios 
están presentes, analizar si los campos cumplen con los formatos esperados y considerar 
qué tan actualizados se encuentran los datos.  
Basándose en el propósito, se seleccionan las características de interés para la evaluación, 
definidas en la norma ISO/IEC 25012.  
Para el propósito planteado, se seleccionan las características: Exactitud (Semántica y 
Sintáctica), Completitud y Actualidad.    
4.2 
Especificar la evaluación 
Como se mencionó anteriormente, la guía definida en la sección 3 se utiliza como método 
de medición para las características definidas en ISO/IEC 25012. Este último define una 
XXV Congreso Argentino de Ciencias de la Computación
Río Cuarto, 14 al 18 de Octubre de 2019
-700-

---

<!-- página 8 -->

métrica de ejemplo por cada característica, a excepción de la Exactitud que define dos 
(correspondientes a la Semántica y a la Sintáctica). La guía de medición mantiene este 
mismo lineamiento.  
En esta etapa de la evaluación, es necesario definir criterios de decisión2 para cada una de 
las características y para la evaluación final. Para ello, debe analizarse la escala de valores y 
la fórmula brindada en la guía, definiendo los rangos para los posibles resultados. 
A continuación, se definen los criterios de decisión por cada característica seleccionada 
para el propósito de la evaluación. 
Semántica (Exactitud): 
Atributo: Código 
Inaceptable 
Si Valor >= 0 y Valor < 0,4 
Mínimamente aceptable 
Si Valor >= 0,4 y Valor < 0,6 
Rango Objetivo 
Si Valor >= 0,6 y Valor < 0,9 
Excede los Requerimientos 
Si Valor >= 0,9 
Atributo: Localidad 
Inaceptable 
Si Valor >= 0 y Valor < 0,3 
Mínimamente aceptable 
Si Valor >= 0,3 y Valor < 0,6 
Rango Objetivo 
Si Valor >= 0,6 y Valor < 0,7 
Excede los Requerimientos 
Si Valor >= 0,7 
Atributo: Entidad 
Inaceptable 
Si Valor >= 0 y Valor < 0,3 
Mínimamente aceptable 
Si Valor >= 0,3 y Valor < 0,6 
Rango Objetivo 
Si Valor >= 0,6 y Valor < 0,7 
Excede los Requerimientos 
Si Valor >= 0,7 
Semántica 
Inaceptable 
Código: Mínimamente 
aceptable. 
Localidad: Inaceptable. 
Entidad: Inaceptable. 
Mínimamente aceptable 
Código: Rango Objetivo. 
Localidad: Mínimamente 
aceptable. 
Entidad: Mínimamente 
aceptable. 
Rango Objetivo 
Código: Rango Objetivo. 
Localidad: Rango Objetivo. 
Entidad: Rango Objetivo. 
Excede los Requerimientos 
Código: Excede los 
requerimientos. 
Localidad: Excede los 
requerimientos. 
Entidad: Rango Objetivo. 
Tabla 3. Criterios de decisión para la semántica. 
Sintáctica (Exactitud): 
Atributo: Código 
Inaceptable
Si Valor >= 0 y Valor < 0,4 
Mínimamente aceptable 
Si Valor >= 0,4 y Valor < 0,6 
2 Rangos de valores clasificados en Inaceptable, Mínimamente Aceptable, Rango Objetivo 
y Excede los Requerimientos. 
XXV Congreso Argentino de Ciencias de la Computación
Río Cuarto, 14 al 18 de Octubre de 2019
-701-

---

<!-- página 9 -->

Rango Objetivo 
Si Valor >= 0,6 y Valor < 0,9 
Excede los Requerimientos 
Si Valor >= 0,9 
Atributo: CP 
Inaceptable 
Si Valor >= 0 y Valor < 0,1 
Mínimamente aceptable 
Si Valor >= 0,1 y Valor < 0,3 
Rango Objetivo 
Si Valor >= 0,3 y Valor < 0,6 
Excede los Requerimientos 
Si Valor >= 0,6 
Atributo: Entidad 
Inaceptable 
Si Valor >= 0 y Valor < 0,1 
Mínimamente aceptable 
Si Valor >= 0,1 y Valor < 0,3 
Rango Objetivo 
Si Valor >= 0,3 y Valor < 0,6 
Excede los Requerimientos 
Si Valor >= 0,6 
Sintáctica 
Inaceptable 
Código: Mínimamente 
aceptable. 
CP: Inaceptable. 
Entidad: Inaceptable. 
Mínimamente aceptable 
Código: Rango Objetivo. 
CP: Mínimamente aceptable. 
Entidad: Rango objetivo. 
Rango Objetivo 
Código: Excede los 
requerimientos. 
CP: Rango objetivo. 
Entidad: Rango objetivo. 
Excede los Requerimientos 
Código: Excede los 
requerimientos. 
CP: Rango objetivo. 
Entidad: Excede los 
requerimientos. 
Tabla 4. Criterios de decisión para la sintáctica. 
 
Exactitud 
Inaceptable 
Semántica: Inaceptable. 
Sintáctica: Inaceptable. 
Mínimamente aceptable 
Semántica: Mínimamente 
aceptable. 
Sintáctica: Mínimamente 
aceptable.  
Rango Objetivo 
Semántica: Rango Objetivo. 
Sintáctica: Mínimamente 
aceptable. 
Excede los Requerimientos 
Semántica: Excede los 
requerimientos. 
Sintáctica: Excede los 
requerimientos. 
Tabla 5. Criterios de decisión para la característica “Exactitud”. 
 
Completitud: 
Atributo: CP 
Inaceptable 
Si Valor >= 0 y Valor < 0,3 
Mínimamente aceptable 
Si Valor >= 0,3 y Valor < 0,6 
Rango Objetivo 
Si Valor >= 0,6 y Valor < 0,7 
Excede los Requerimientos 
Si Valor >= 0,7 
Atributo: Nombre 
Inaceptable 
Si Valor >= 0 y Valor < 0,4 
Mínimamente aceptable 
Si Valor >= 0,4 y Valor < 0,7 
XXV Congreso Argentino de Ciencias de la Computación
Río Cuarto, 14 al 18 de Octubre de 2019
-702-

---

<!-- página 10 -->

Rango Objetivo 
Si Valor >= 0,7 y Valor < 0,9 
Excede los Requerimientos 
Si Valor >= 0,9 
Completitud 
Inaceptable 
CP: Mínimamente aceptable. 
Nombre: Mínimamente 
aceptable. 
Mínimamente aceptable 
CP: Rango objetivo. 
Nombre: Rango objetivo. 
Rango Objetivo 
CP: Excede los 
requerimientos. 
Nombre: Excede los 
requerimientos. 
Excede los Requerimientos 
CP: Excede los requerim. 
Nombre: Excede los requerim. 
Tabla 6. Criterios de decisión para la característica “Completitud”. 
Actualidad: 
Actualidad 
Inaceptable 
Opción 4 
Mínimamente aceptable 
Opción 3 
Rango Objetivo 
Opción 2 
Excede los Requerimientos 
Opción 1 
Tabla 7. Criterios de decisión para la característica “Actualidad”. 
Por último, se definen los criterios de decisión para la evaluación final. Cabe mencionar 
que cada característica debe tomar COMO MÍNIMO el valor definido (a modo de ejemplo, 
la evaluación se considera en un “Rango Objetivo” si la Exactitud posee como mínimo un 
rango objetivo, si la Completitud como mínimo excede los requerimientos, y así 
sucesivamente).  
Evaluación final:  
Resultado 
evaluación 
Inaceptable 
Exactitud:  Inaceptable. 
Completitud: Inaceptable. 
Actualidad: Inaceptable. 
Mínimamente aceptable 
Exactitud: Min aceptable. 
Completitud: Rango Objetivo. 
Actualidad: Min aceptable. 
Rango Objetivo 
Exactitud: Rango Objetivo. 
Completitud: Excede los 
requerimientos. 
Actualidad: Rango Objetivo. 
Excede los Requerimientos 
Exactitud: Excede los 
requerimientos. 
Completitud: Excede los 
requerimientos. 
Actualidad: Excede los 
requerimientos. 
Tabla 8. Criterios de decisión para la evaluación final. 
XXV Congreso Argentino de Ciencias de la Computación
Río Cuarto, 14 al 18 de Octubre de 2019
-703-

---

<!-- página 11 -->

4.3 
Diseñar la evaluación 
Al momento de diseñar la evaluación, debe especificarse la documentación previa requerida 
en la guía para cada una de las características seleccionadas. La Tabla 9 ilustra esta 
situación. 
 Característica 
Documentación previa requerida 
Semántica (Exactitud) 
Atributos sobre los cuales se analizará la semántica: 
Código -> Se esperan números que comiencen con 9. 
Localidad -> Se esperan ciudades de Argentina. 
Entidad -> Se esperan “FACAF, FEFARA, COFA, 
SINDICAL”. 
Sintáctica (Exactitud) 
Atributos sobre los cuales se analizará la sintáctica: 
Código -> Deben tener 9 dígitos. 
CP -> 4 dígitos.  
Entidad -> Deben escribirse en mayúscula. 
Completitud 
CP -> Dato obligatorio. 
Nombre -> Dato obligatorio. 
Actualidad 
Fecha de actualización de los datos: 19 de Julio de 2019. 
Tabla 9. Documentación previa requerida. 
4.4 
Ejecutar la evaluación 
Para ejecutar la evaluación, por cada una de las características se debe analizar la guía de 
medición y llevar a cabo un conjunto de pasos: 
1) Aplicar el método para la medición. 
2) Seleccionar un valor de la escala, definiendo el valor de X en el caso que sea 
necesario. 
3) Resolver la fórmula planteada.  
4) Analizar los valores resultantes en conjunto con los criterios de decisión definidos, 
obteniendo un resultado final. 
Se ejecutó la evaluación según lo planificado y se obtuvieron los siguientes resultados: 
Exactitud: 
Atributo: Código 
Opción 3 (X = 85%) 
Valor = 85/100 = 0,85 
(Rango Objetivo) 
Atributo: Localidad 
Opción 4 (X = 90%) 
Valor = 90/100 = 0,90 
(Excede los requerimientos) 
Atributo: Entidad 
Opción 3 (X = 80%) 
Valor = 80/100 = 0,80 
(Excede los requerimientos) 
Semántica 
 
Rango Objetivo 
Atributo: Código 
Opción 3 (X = 80%) 
Valor = 80/100 = 0,80 
(Rango Objetivo) 
Atributo: CP 
Opción 4 (X = 100%) 
Valor = 100/100 = 1 
(Excede los requerimientos) 
Atributo: Entidad 
Opción 3 (X = 55%) 
Valor = 55/100 = 0,55 
(Rango Objetivo) 
Sintáctica 
 
Mínimamente aceptable 
Tabla 10. Valores obtenidos en la medición de la semántica y sintáctica. 
XXV Congreso Argentino de Ciencias de la Computación
Río Cuarto, 14 al 18 de Octubre de 2019
-704-

---

<!-- página 12 -->

Semántica 
- 
Rango Objetivo 
Sintáctica 
- 
Mínimamente aceptable 
Exactitud 
Rango Objetivo 
Tabla 11. Valores obtenidos en la medición de la Exactitud. 
Completitud: 
Atributo: CP 
Opción 3 (80%) 
Valor = 80/100 = 0,80 
(Excede los requerimientos) 
Atributo: Nombre 
Opción 4 (100%) 
Valor = 100/100 = 1 
(Excede los requerimientos) 
Completitud 
Excede los requerimientos 
Tabla 12. Valores obtenidos en la medición de la Completitud. 
Actualidad: 
- 
Opción 1 
Los datos fueron actualizados 
en el corriente mes 
(Excede los requerimientos) 
Actualidad 
Excede los requerimientos 
Tabla 13. Valores obtenidos en la medición de la Actualidad. 
4.5 
Finalización de la evaluación  
En base a los valores obtenidos y a los criterios de decisión definidos, se determina el 
resultado de la evaluación. 
Exactitud 
- 
Rango Objetivo 
Completitud 
- 
Excede los requerimientos 
Actualidad 
- 
Excede los requerimientos 
Resultado 
Evaluación 
Rango Objetivo 
Tabla 14. Valores obtenidos para la evaluación final. 
5. Conclusiones
Se diseñó y presentó una guía de medición para cada una de las características definidas en 
ISO/IEC 25012, cuya medición actualmente requiere de un análisis que puede resultar 
complejo y costoso para una persona con poca experiencia en el área. Se hizo hincapié en 
que sea de fácil aplicación y lectura por cualquier tipo de usuario. 
Como caso de prueba, se llevó a cabo una evaluación basada en el proceso definido en 
ISO/IEC 25040 utilizando la guía de medición. Para realizar la evaluación fue necesario 
contar con una base de datos, la cual se obtuvo de un sitio de Datos Abiertos de Argentina. 
6. Bibliografía
[1] ISO/IEC 9126. Software enginnering -- Product quality. 
XXV Congreso Argentino de Ciencias de la Computación
Río Cuarto, 14 al 18 de Octubre de 2019
-705-

---

<!-- página 13 -->

[2] ISO/IEC 14598. Information technology -- Software product evaluation. 
[3] ISO/IEC 25012:2008. Software engineering -- Software product Quality Requirements 
and Evaluation (SQuaRE) -- Data quality model. 
[4] ISO/IEC 25040:2011. Systems and software engineering -- Systems and software 
Quality Requirements and Evaluation (SQuaRE) -- Evaluation process. 
[5] Datos obtenidos en http://datos.gob.ar  
[6] ISO/IEC 25024:2015.Systems and software engineering -- Systems and software 
Quality Requirements and Evaluation (SQuaRE) -- Measurement of data quality 
. 
 
 
XXV Congreso Argentino de Ciencias de la Computación
Río Cuarto, 14 al 18 de Octubre de 2019
-706-