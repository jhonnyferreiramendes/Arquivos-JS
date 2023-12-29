//selecionando titulo

var titulo = document.querySelector('#titulo');


//innerHTML 
titulo.innerHTML = "Tituto de texto alterado";

//textContent ->  mais utilizado, e recomendado e performado 
var subtitulo = document.querySelector('.titulo2');
console.log(subtitulo);
subtitulo.textContent = "Alternando o subtitulo"