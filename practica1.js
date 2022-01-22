let conteo = '**'
let prin = '*'
let space = ' ';
let valorDeSpace = 12
let valorParaElArbol = 10

for(let i = 0 ; i <= 9 ;i ++){
   valorDeSpace -= 1 
   
   console.log(`${space.repeat(valorDeSpace)}${prin}`)
   prin += conteo

} 

for(let i = 0 ; i <=2 ; i++){
console.log(`${space.repeat(valorParaElArbol)}|||`)
}