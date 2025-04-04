personagem = ["", "", ""]
viloes = ["", "", ""]

forcaPersonagem = 0
forcaViloes = 0

for (let i = 0; i < 3; i++){
    escolhaPersonagem = prompt("Digite o nome do personagem " + (i + 1))
    personagem[i] = escolhaPersonagem
    forcaPersonagem += Math.floor(Math.random() * 10) + 1

}
console.log("Personagens selecionados: " + personagem)

for (let i = 0; i < 3; i++){
    indiceAleatorio = Math.floor(Math.random() * 10)
    viloesPossiveis = ["Darth Vader", "Hannibal Lecter", "Norman Bates", "Rainha Má", "Xenomorfo", "Lord Valdemort", "Freddy Krueger", "Coringa", "Thanos", "Chucky"]
    viloes[i] = viloesPossiveis[indiceAleatorio]
    forcaViloes += Math.floor(Math.random() * 10) + 1
}
console.log("Vilões sorteados: " + viloes)

if (forcaPersonagem > forcaViloes){
    alert("Você venceu! Seu time é mais forte. Sua força foi " + forcaPersonagem)
}
else {
    if (forcaPersonagem < forcaViloes){
        alert("Você perdeu! A força dos vilões foram de " + forcaViloes)
    }
    else {
        alert("Empate!")
    }
}