//Criando um novo paragrafo
var novoParagrafo = document.createElement("p");

//Adicionando elemento de texto ao paragráfo
var texto = document.createTextNode("Este texto  é um conteudo do paragráfo");
novoParagrafo.appendChild(texto);

console.log(novoParagrafo);

var texto2 = document.createTextNode("Novo texto do subtitulo");
var subtitulo = document.createElement("h2");
subtitulo.appendChild(texto2);

console.log(subtitulo);

//criando um body 
var body = document.querySelector('body');
console.log(body);
 //adicionando elemento na pagina do body
body.appendChild(novoParagrafo);


var container = document.getElementById('container');
console.log(container);

var el = document.createElement('span');
el.appendChild(document.createTextNode("texto span"));
console.log(el);

container.appendChild(el);
container.appendChild(subtitulo);