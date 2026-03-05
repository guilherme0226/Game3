// ===============================
// CONFIGURAÇÃO INICIAL
// ===============================

let nomeUser = localStorage.getItem("nomeUser");
let nivel = localStorage.getItem("nivel");

// se abrir game.html direto sem iniciar jogo
if(!nivel){
    window.location.href = "index.html";
}

let max = 10;
let limite = 3;

// garante que o valor não venha com espaços ou maiúsculas
if(nivel){
    nivel = nivel.toLowerCase().trim();
}

if(nivel === "facil"){
    max = 10;
    limite = 5;
}
else if(nivel === "medio"){
    max = 50;
    limite = 5;
}
else if(nivel === "dificil"){
    max = 100;
    limite = 7;
}
else if(nivel === "insano"){
    max = 1000;
    limite = 3;
}

// gera número secreto baseado no nível
let numSec = Math.floor(Math.random() * max) + 1;

console.log("Nível:", nivel);
console.log("Máximo:", max);
console.log("Número secreto:", numSec);

let jogoAtivo = true;
let tentativas = 0;

// Áudios
let acerto = document.getElementById("acerto");
let erro = document.getElementById("erro");
let load = document.getElementById("load");
let gameover = document.getElementById("gameOver");

// ===============================
// TELA INICIAL
// ===============================

function iniciaJogo(){

    let nomeUser = document.getElementById("nomeUser").value;
    let nivelSelecionado = document.getElementById("nivel").value;

    console.log("Nome:", nomeUser);
    console.log("Nivel:", nivelSelecionado);

    localStorage.setItem("nomeUser", nomeUser);
    localStorage.setItem("nivel", nivelSelecionado);

    window.location.href = "game.html";
}

// ===============================
// INICIAR RODADA
// ===============================

function start(){

    if(!jogoAtivo) return;

    document.getElementById("batata").innerText =
        nomeUser + " aguardando resultado...";

    if(load){
        load.currentTime = 0;
        load.play();
    }

    setTimeout(verificarResultado, 2000);
}

// ===============================
// VERIFICAR RESULTADO
// ===============================

function verificarResultado(){

    let palpite = parseInt(document.getElementById("chute").value);

    if(isNaN(palpite)){
        document.getElementById("batata").innerText = "Digite um número válido!";
        return;
    }

    tentativas++;

    if(numSec === palpite){

        document.getElementById("batata").innerText =
        nomeUser + " acertou em " + tentativas + " tentativa(s)! 🔥";

        if(acerto){
            acerto.currentTime = 0;
            acerto.play();
        }

        jogoAtivo = false;
    }

    else{

        if(tentativas >= limite){

            document.getElementById("batata").innerText =
            "Game Over, " + nomeUser + "! O número era " + numSec;

            if(gameover){
                gameover.currentTime = 0;
                gameover.play();
            }

            jogoAtivo = false;
        }

        else if(numSec > palpite){

            document.getElementById("batata").innerText = "O número é MAIOR";

            if(erro){
                erro.currentTime = 0;
                erro.play();
            }
        }

        else{

            document.getElementById("batata").innerText = "O número é MENOR";

            if(erro){
                erro.currentTime = 0;
                erro.play();
            }
        }
    }
}

// ===============================
// RESET
// ===============================

function reset(){
    window.location.reload();
}