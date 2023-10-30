//Iniciando as variaveis dos elemento do carrossel//
var setaDireita = window.document.getElementById("setadireita")
var filme1 = window.document.getElementById("filme1")
var filme2 = window.document.getElementById("filme2")
var filme3 = window.document.getElementById("filme3")
var filme4 = window.document.getElementById("filme4")
var filme5 = window.document.getElementById("filme5")
var filme6 = window.document.getElementById("filme6")
var filme7 = window.document.getElementById("filme7")
var setaEsquerda= window.document.getElementById("setaesquerda")

//Criando a função da seta de 'rolar'. Para isso, é indicado o que estará na tela quando a seta for clicada//
function RolarparaDireita(){
    filme1.style = "display:none"
    filme2.style ="display:none"
    filme3.style = "display:none"
    filme4.style = "display:flex"
    filme5.style = "display:flex"
    filme6.style = "display:flex"
    filme7.style = "display:flex"
    setaDireita ="display:none"
    setaEsquerda.style = "display:flex; margin-top:70px"
}
//Aqui será feito a mesma coisa, só que com a outra seta//
function RolarparaEsquerda(){
    filme1.style = "display:flex"
    filme2.style = "display:flex"
    filme3.style = "display:flex"
    filme4.style = "display:flex"
    filme5.style = "display:none"
    filme6.style ="display:none"
    filme7.style ="display:none"
    setaDireita ="display:flex"
    setaEsquerda.style = "display:none"
}