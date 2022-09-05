const leia = require("Prompt-Sync")()

const idade = leia("Digite sua idade: ")

if (idade >= 1 && idade <= 14){
    console.log("Categoria infantil")
}else if (idade < 1) {
    console.log("Idade abaixo do limite permitido")
} else if (idade >= 15 && idade <= 17) {
    console.log("sua categoria é juvenil")
} else if (idade >= 18 && idade <=  25) {
    console.log("sua categoria é adulto")
}else{
    println("Idade limite atingida")
}


