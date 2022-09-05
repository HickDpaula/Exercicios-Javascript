const leia = require("prompt-sync")()

let vetor = new Array(4)
for (let i = 0; i < 5; i++) {

    vetor[i] = leia("digite um numero: ")

}

console.log(vetor)