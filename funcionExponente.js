

const potencia = function (base, exponente){
   let result = 1
   for (let iter = 0; iter < exponente; iter ++){
      result *= base
      
   }
   return result;
} 
console.log(potencia(2 ,10)); 

   
