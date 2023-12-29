var titulo = document.querySelector("#titulo");

//adcionando a cor amarela ao passar com o mouse no titulo
titulo.addEventListener("mouseover", function(){

    this.style.backgroundColor = "yellow";
});

//Adicionando outra cor ao tirar o mouse do elemento
titulo.addEventListener("mouseout", function(){
    this.style.backgroundColor = "red";
});

//Mostra legenda ao passar com mouse
var subtitulo = document.querySelector(".titulo2")

subtitulo.addEventListener("mouseover", function() {
    var legenda = document.querySelector("#legenda")

    legenda.classList.remove("hide");
});

//Remover a legenda ao tirar com mouse
var subtitulo = document.querySelector(".titulo2")

subtitulo.addEventListener("mouseout", function() {
    var legenda = document.querySelector("#legenda")

    legenda.classList.add("hide");
});
