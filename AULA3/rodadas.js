rodada = 1
while(rodada <= 3) {
    console.log("Rodada: " + rodada)

    escolhaJogador = prompt("Nível " + rodada + ", vidro (1-3): ")
    pisoQuebrado = Math.floor(Math.random() * 3) + 1;

    if(escolhaJogador == pisoQuebrado) {
        alert("O vidro quebrou! Fim de jogo!")
        rodada = 1000
    }
    else {
        alert("Passou! O piso quebrado estava na ponte: " + pisoQuebrado)
    }
    if(rodada == 4){
        alert("Parabéns! Você venceu!")
    }
    rodada = rodada + 1
}