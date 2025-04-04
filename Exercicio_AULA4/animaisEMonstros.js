animal = ["", "", ""]
monstros = ["", "", ""]

forcaAnimal = 0
forcaMonstros = 0

for (let i = 0; i < 3; i++){
    escolhaAnimal = prompt("Digite o nome do " + (i + 1) + "º " + "animal:")
    animal[i] = escolhaAnimal
    forcaAnimal += Math.floor(Math.random() * 10) + 1

}
console.log("Animais selecionados: " + animal)

for (let i = 0; i < 3; i++){
    indiceAleatorio = Math.floor(Math.random() * 10)
    monstrosPossiveis = ["Quimera", "Kraken", "Medusa", "Cérbero", "Xenomorfo", "Hidra", "Godzilla", "Drácula", "Lúcifer", "Chupacabra"]
    monstros[i] = monstrosPossiveis[indiceAleatorio]
    forcaMonstros += Math.floor(Math.random() * 10) + 1
}
console.log("Monstros sorteados: " + monstros)

if (forcaAnimal > forcaMonstros){
    alert("Você venceu! Seu time é mais forte. Sua força foi " + forcaAnimal)
}
else {
    if (forcaAnimal < forcaMonstros){
        alert("Você perdeu! \nA força dos monstros foram de " + forcaMonstros + " | Sua força foi de " + forcaAnimal)
    }
    else {
        alert("Empate!")
    }
}