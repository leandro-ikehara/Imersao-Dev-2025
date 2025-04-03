idade = prompt("Qual a sua idade?")
if(idade < 18){
    alert("Você NÃO tem permissão para jogar!")
}
if(idade >= 18){
    escolhaJogador = prompt("Digite a sua opção: 1 - Pedra; 2 - Papel; 3 - Tesoura")
    escolhaComputador = Math.floor(Math.random() * 3) + 1;

    if (escolhaJogador == escolhaComputador){
        alert("Empate!")
    }

    if (escolhaJogador == 1){
        if(escolhaComputador == 2){
            alert("O Computador venceu!")
        }
        if (escolhaComputador == 3){
            alert("O Jogador venceu! O Computador escolheu Tesoura")
        }
    }
    if (escolhaJogador == 2) {
        if (escolhaComputador == 1) {
            alert("O Jogador venceu! O Computador escolheu Pedra")
        }
        if (escolhaComputador == 3) {
            alert("O Computador venceu!")
        }
    }
    if (escolhaJogador == 3) {
        if (escolhaComputador == 1) {
            alert("O Computador venceu!")
        }
        if (escolhaComputador == 2) {
            alert("O Jogador venceu! O Computador escolheu Papel")
        }
        alert("Escolha do Computador: " + escolhaComputador)
    }
}