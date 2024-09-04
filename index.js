var setaDireita = window.document.getElementById("seta-direita");
var Bruna = window.document.getElementById("Bruna");
var Leonardo = window.document.getElementById("Leonardo");
var Samanta = window.document.getElementById("Samanta");
var setaEsquerda = window.document.getElementById("seta-esquerda");

function RolarParaDireita() {
    Bruna.style ="display:none"
    Samanta.style ="display:flex"
    setaDireita.style ="display:none"
    setaEsquerda.style ="display:flex; margin-top:75px"
}
function RolarParaEsquerda() {
    Bruna.style ="display:flex"
    Samanta.style ="display:none"
    setaDireita.style ="display:flex; margin-top:55px"
    setaEsquerda.style ="display:none"
}
