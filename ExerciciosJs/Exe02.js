const leia = require("Prompt-Sync")()

let contadorPar = 0
let contadorImpar = 0

for (i = 0; i < 10; i++){
   const num = Number(leia('Digite os numeros: '))
  
if (num % 2 == 0){
    contadorPar++
}else{
    contadorImpar++
}

}


console.log(`Total numeros pares: ${contadorPar}`)
console.log(`Total numeros impares: ${contadorImpar}`)

