let numSec = Math.floor(Math.random() * 10) + 1;
console.log(numSec);


let acerto = document.getElementById("acerto");
let erro = document.getElementById("erro");
let load = document.getElementById("load");
let gameover = document.getElementById("gameOver");
let nomeUser = localStorage.getItem("nomeUser");

let jogoAtivo = true;
let tentativas = 0;
let limite = 3;

function iniciaJogo(){
    nomeUser = document.getElementById("nomeUser").value;
    
    localStorage.setItem("nomeUser", nomeUser);
    window.location.href = "game.html";
}


function start() {

    if (!jogoAtivo) return;
    console.log(nomeUser);
    document.getElementById("batata").innerText = nomeUser + " Aguardando resultado...";
    document.getElementById("cabra").src = "https://media.tenor.com/MasOG_oGxBsAAAAM/itachi-uchiha-fortnite.gif";
    load.currentTime = 0;
    load.play();
    document.addEventListener("click", function(e) {
  const firework = document.createElement("div");
  firework.classList.add("firework");
  firework.style.left = e.clientX + "px";
  firework.style.top = e.clientY + "px";
  document.body.appendChild(firework);
  // Remove o elemento após a animação
  setTimeout(() => firework.remove(), 1500);
});

    setTimeout(verificarResultado, 5005);
}



function verificarResultado() {
    
    let palpite = parseInt(document.getElementById("chute").value);
    tentativas++;
   
    

    if (numSec === palpite) {
        document.getElementById("batata").innerText = nomeUser + " Acertou Miseravi! " + tentativas + " tentativas!";
        document.getElementById("cabra").src = "https://www.gifcen.com/wp-content/uploads/2023/07/obito-gif-6.gif";
        acerto.currentTime = 0;
        acerto.play();
        jogoAtivo = false;
    }

    if(tentativas >= limite){
        document.getElementById("batata").innerText = nomeUser + " Game Over!!, Chora não";
        document.getElementById("cabra").src = "https://www.gifcen.com/wp-content/uploads/2023/07/obito-gif-6.gif";
        gameover.currentTime = 0;
        gameover.play();
        jogoAtivo = false;    
      } else if(numSec < palpite){
           document.getElementById("batata").innerText = nomeUser + " O número é menor";
           document.getElementById("cabra").src = "https://cinepop.com.br/wp-content/uploads/2021/03/smkayrt-231066.jpg";
           erro.currentTime = 0;
           erro.play();
     } else if (numSec > palpite){
        document.getElementById("batata").innerText = nomeUser + " O número é maior";
        document.getElementById("cabra").src = "audio4.mp3";
        erro.currentTime = 0;
        erro.play();
     }


}

function reset() {
    window.location.reload();
}

