<!-- página 1 -->

Clase 6: 
Calidad de los datos
Tecnicatura en Ciencia de Datos
Abril 2026

---

<!-- página 2 -->

Unidad II: Procesamiento, calidad y 
producción de los datos

---

<!-- página 3 -->

●
Falta de información estadística para diagnósticos adecuados
●
Datos incompletos o errrores de carga
●
Escasa integración y multiplicidad de registros
●
Falta de estándares en sistemas de información
●
Interoperabilidad de sistemas
●
Discontinuidad en criterios metodológicos (cambios de gestión)
●
Falta de personal caliﬁcado
Diﬁcultades en calidad de datos

---

<!-- página 4 -->

Inteligencia artiﬁcial
garbage in - garbage out

---

<!-- página 5 -->

Las decisiones sobre políticas o 
resultados que se basan en datos 
incorrectos pueden tener graves 
consecuencias

---

<!-- página 6 -->

Inherentes del sistema
Dependientes del sistema
Exactitud, completitud, consistencia, credibilidad, actualidad
Cómo el entorno tecnológico los preserva (disponibilidad, portabilidad y 
recuperabilidad)
¿Qué es una política pública?
Calidad de los datos - ISO/IEC 25012
●
Modelo de Calidad para datos en formato estructurado dentro de los sistemas informáticos - 
“Data Quality Model” 
●
Permiten evaluar, medir y mejorar la calidad de datos en los sistemas de información

---

<!-- página 7 -->

¿Qué es una política pública?
Criterios de calidad de los datos
●
Estándares, criterios, reglas 
●
Se deben aplicar en todo el ciclo de vida del dato
●
Establecen procesos de cómo se clasiﬁcan, comparten, se accede, se gestiona y se protegen 
los datos
●
Deﬁnen cómo se adminsitran y explotan
●
Deﬁnidas por el organismo encargado de la gobernanza de datos

---

<!-- página 8 -->

¿Qué es una política pública?
Criterios de calidad de los datos

---

<!-- página 9 -->

Exactitud
Completitud
¿Qué es una política pública?
Criterios mínimos
●
Requisito indispensable para cualquier análisis 
●
Se analizan a nivel individual de cada campo de una base de datos
●
¿Los datos están completos?      /      ¿Son datos que cumplen con reglas de integridad?
●
Deben alcanzar un Umbral Límite Inferior Aceptable (ULIAm)
Grado en que los datos representan correctamente el valor real de la realidad que se busca 
descirbir 
Datos obligatorios para lograr un ﬁn determindao sin que tengan valores nulos o vacíos

---

<!-- página 10 -->

Consistencia
Credibilidad
Actualidad
¿Qué es una política pública?
Ausencia de contradicciones, coherencia lógica entre los diferentes campos o entre 
distintas fuentes 
Grado en que los usuarios consideran los datos ciertos, veraces y de fuentes ﬁables. 
Dato vigente y que represente una última versión de la situación real 
Criterios básicos

---

<!-- página 11 -->

Pertinencia
Valor 
agregado
¿Qué es una política pública?
Los datos coinciden con el tema tratado y son útiles para resolver el problema
Capacidad de traducirse en mejoras concretas para la toma de decisiones o prestación de 
un servicio 
Criterios óptimos
●
Capacidad estratégica para la toma de decisiones
●
Dato no sólo correcto, sino útil
●
Surgen con procesos de gobernanza de datos maduros

---

<!-- página 12 -->

La construcción de reglas y puntajes va a permitir 
construir un scoring de calidad del datos, con 
estándares que permiten interpretar el grado de 
conﬁabilidad del datos. 
Las deﬁne el data owner, ya que depende del 
conocimiento y objetivo de cada base de datos. 
Scoring deﬁne si se pueden usar los campos para 
construir indicadores, algoritmos, tableros, etc. 
¿Qué es una política pública?
Mecanismos y buenas prácticas

---

<!-- página 14 -->

¿Qué es una política pública?
Mecanismos y buenas prácticas
●
EXACTITUD: 
Identiﬁcar qué tipo de dato debe ser cada campo en la metadata

---

<!-- página 15 -->

¿Qué es una política pública?
Mecanismos y buenas prácticas
●
EXACTITUD: 
Identiﬁcar qué tipo de dato se espera por cada campo en la metadata

---

<!-- página 16 -->

¿Qué es una política pública?
Mecanismos y buenas prácticas
●
EXACTITUD: 
Crear reglas de integridad para cada campo de acuerdo con el tipo de dato esperado y el objetivo 
del negocio

---

<!-- página 17 -->

¿Qué es una política pública?
Mecanismos y buenas prácticas
●
EXACTITUD: 
Se evalúa que cada registro cumpla con esas reglas y se le asocia un valor de acuerdo a si cumple o 
no cumple
Se realizan una serie de fórmulas sobre estos valores que permiten determinar el grado de exactitud 
de una base de datos, con un scoring que permite comprender si esa base de datos es usable o no

---

<!-- página 18 -->

¿Qué es una política pública?
Mecanismos y buenas prácticas

---

<!-- página 19 -->

●
COMPLETITUD: 
Puede haber campos vacíos, lo cual no es razón necesariamente para no usarlo o publicarlo, siempre 
que aporte valor
Se deben identiﬁcar como NULL o N/A
¿Qué es una política pública?
Mecanismos y buenas prácticas

---

<!-- página 20 -->

¿Qué es una política pública?
Mecanismos y buenas prácticas

---

<!-- página 21 -->

●
CONSISTENCIA: 
Reglas de validación entre los campos de datos que permitan identiﬁcar que no haya inconsistencia 
Ejemplo: fecha de alta de un beneﬁcio  es anterior a la fecha de nacimiento de la persona beneﬁciaria 
INCONSISTENTE
¿Qué es una política pública?
Mecanismos y buenas prácticas

---

<!-- página 22 -->

●
CREDIBILIDAD: 
Factor que depende en gran medida de la percepción de los usuarios
Se puede comparar contra otras bases externas para validar y dar creibilidad
¿Qué es una política pública?
Mecanismos y buenas prácticas

---

<!-- página 23 -->

●
ACTUALIDAD: 
Tener iniciativas proactivas de actualización de datos
Automatizar la actualización de datos en tiempo real o con frecuencia programada (ej.. API, procesos 
automáticos).
Aclarar en metadatos en qué fecha fueron actualizados los datos y cuál fue la última fecha de 
captura de esos datos
¿Qué es una política pública?
Mecanismos y buenas prácticas

---

<!-- página 24 -->

¿Qué es una política pública?
Mecanismos y buenas prácticas

---

<!-- página 25 -->

¿Qué es una política pública?
Mecanismos y buenas prácticas

---

<!-- página 26 -->

●
PERTINENCIA: 
No publicar “a ciegas” todos los datos disponibles, sino considerar su utilidad 
Evaluar si los datos publicados son suﬁcientes para que le den sentido y valor al usuario (o si hay que 
sumar más contexto)
¿Qué es una política pública?
Mecanismos y buenas prácticas

---

<!-- página 27 -->

Ejercicio de calidad de datos
https://datosabiertos.rosario.gob.ar/dataset/da55fea3-4886-43c0-af12-e
559bb369cdf

---

<!-- página 28 -->

Carrera
¡Gracias!