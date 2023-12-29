var btn = document.querySelector("#btn");
console.log(btn);

//Adicionando evento ao clicar no botão

btn.addEventListener('click', function(){
    console.log("Clicou");

    console.log(this);

    this.style.color = 'red';
})

var titulo = document.querySelector("#titulo");



var subtitulo = document.createElement('h2');
var textoSub = document.createTextNode("Subtitulo TESTE");
subtitulo.appendChild(textoSub);
var body = document.querySelector('body');

body.insertBefore(subtitulo, btn);


//criando evento ao clickar no titulo da pagina para remover o subtitulo
titulo.addEventListener("click", function(){
    console.log("Testando");

    subtitulo.style.display = "none";
    
})

//Evento realizado ao dar dois click
subtitulo.addEventListener("dblclick", function(){
    console.log("Click duplo");
} );





