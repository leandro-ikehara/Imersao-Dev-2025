venceu = 0

for (let rodada = 1; rodada <= 3; rodada++) {
    console.log("Rodada: " + rodada)

    escolhaJogador = prompt("Nível " + rodada + ", vidro (1-3): ")
    pisoQuebrado = Math.floor(Math.random() * 3) + 1;

    if (escolhaJogador == pisoQuebrado) {
        alert("O vidro " + escolhaJogador + " quebrou! Fim de jogo!")
        rodada = 1000
        venceu = 1
    } else {
        alert("Passou! O piso quebrado estava na ponte: " + pisoQuebrado)
    }
}
if (venceu == 0) {
    alert("Parabéns! Você venceu!")
}