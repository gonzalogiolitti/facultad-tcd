<!-- página 1 -->

Unidad IV – Trabajo Práctico 7 
Aplicación práctica: Gestión de estudiantes 
Ejecuta los siguientes comandos en tu consola de MongoDB: 
 
use universidad; 
 
db.estudiantes.insertMany([ 
  { nombre: "Ana", edad: 21, carrera: "Ingeniería" }, 
  { nombre: "Luis", edad: 23, carrera: "Matemática" }, 
  { nombre: "Marta", edad: 20, carrera: "Física" } 
]); 
 
Realiza las siguientes consultas y operaciones: 
 
Consulta todos los estudiantes: 
db.estudiantes.find(); 
 
Consulta estudiantes que estudian Ingeniería: 
db.estudiantes.find({ carrera: "Ingeniería" }); 
 
Consulta estudiantes mayores de 20 años: 
db.estudiantes.find({ edad: { $gt: 20 } }); 
 
Actualiza la edad de Ana a 22 años: 
db.estudiantes.updateOne( 
  { nombre: "Ana" }, 
  { $set: { edad: 22 } } 
); 
 
Cambia la carrera de Marta a “Astronomía”: 
db.estudiantes.updateOne( 
  { nombre: "Marta" }, 
  { $set: { carrera: "Astronomía" } } 
); 
 
Elimina a Luis: 
db.estudiantes.deleteOne({ nombre: "Luis" }); 
 
 
1. Inserta 3 estudiantes nuevos con datos diferentes a los anteriores. 
2. Consulta todos los estudiantes. 
3. Consulta estudiantes mayores de 20 años. 
4. Actualiza la carrera de uno de los estudiantes. 
5. Elimina un estudiante por nombre.