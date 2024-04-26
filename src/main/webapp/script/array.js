/**
 * 
 */
function generarArray(){

 var alumnos = [];
 alumnos.push("Pepe")
 alumnos.push("Alicia")
 alumnos.push("Eduardo")
 
 var comidas = ["patatas", "remolachas", "guisantes", "spaguetti"]
 
 var tipoDatoAlumno =alumnos.map(elemento =>typeof elemento)
 var tipoDatoComida =comidas.map(elemento =>typeof elemento)
 
 document.write("Tipo del array alumnos: "+ tipoDatoAlumno)
 document.write("Tipo del array comidas: "+ tipoDatoComida)
 }