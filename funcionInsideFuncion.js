//esta funcion muestra los ingredientes necesarios para hacer un lote de humus -- tiene otra funcion dentro de ella
const humus = function(factor) {
   const ingrediente = function(cantidad , unidad , nombre) {
      let cantidadIngrediente = cantidad * factor;
      if (cantidadIngrediente > 1) {
         unidad += "s";
      }
      console.log(`${cantidadIngrediente} ${unidad} ${nombre}`)
   }
   ingrediente(1 ,"lata", "garbanzos")
}
console.log(humus(3))


//esto es pra crear recursividada
function gallina() {
   return "huevo"   
}
function huevo() {
   return gallina
}
comsole.log(gallina() + "vino primero")
//nunca ejecutarlo por que consumirá capacidad de la pc

// ###############################################
// anulando un parametro 
function probar(a , b) {

   if (b === undefined) return -a;
   else return a-b;
   }
//dentro de la funcion podemos omitir las llaves al retornar un valor
console.log(probar(10))


//
function envolveValor(n) {
   let local = n;
   return ()=> local;
}
//guardando las funciones en cada vinculacion diferente 
let valor1 = envolveValor(2);
let valor2 = envolveValor(4);
//los valores no dejan de ser funciones 
//por eso se tiene que llamar con los dos parentesis 
console.log(valor1());
console.log(valor2());
//funcion de recursividad
//donde  el string se está acumulando en historia 
//el que genera el bucle en encontrar 
function encontrarSolucion(objetivo){
   function encontrar(actual , historia){
      if (actual == objetivo){
         return historia;
      }else if (actual > objetivo){
         //null hace que se active el or 
         return null;
      }else{
         return encontrar(actual + 5 , `(${historia} + 5 )` )|| encontrar(actual * 3 ,`(${historia} * 3)`);
      }
   }
   return encontrar(1 , "1");
}
console.log(encontrarSolucion(24));
//fin
// queremos escribir un programa que imprima dos número , los número de vacas y pollos en una graja  , con las palabras vacas y pollos despues de ellos , y ceros acolchados antes de ambos número para que siempre tengan tres dígitos de largo

function numerosAcolchados(vacas , pollos) {
   let newVacas = String(vacas);
   while(newVacas.length < 3){
      newVacas = "0"+ newVacas
   }
   console.log(`${newVacas} vacas `)
   let newPollos =String(pollos)
   while(newPollos.length < 3){
      newPollos= "0" + newPollos
   }
   console.log(`${newPollos} pollos`)
}
numerosAcolchados(7 , 12 )
//pero justo cuando esatamos por enviar el código a la agricultura(junto con una considerable factura)ella nos llama y nos dice que ella también comenzó a criar cerdos , y que si no podriamos extender el software para imprimir cerdos tambien?

function cerosAcolchados(numeroDeAnimales , etiqueta) {
   let StringAnimal = String(numeroDeAnimales)
   while(StringAnimal.length < 3 ){
      StringAnimal = "0" + StringAnimal
   }
   console.log(`${StringAnimal} ${etiqueta}`)
}
function numeroDeanimales(vaca , pollo , cerdo){
   console.log(cerosAcolchados(`${vaca}`, 'vaca'))
   console.log(cerosAcolchados(`${pollo}`, 'pollo'))
   console.log(cerosAcolchados(`${cerdo}`, 'cerdo'))
}

numeroDeanimales(7,3,20)
// probandp max min