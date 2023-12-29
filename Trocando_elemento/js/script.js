var el = document.createElement('h3');
el.classList = ("testando-classse");


var texto = document.createTextNode("Texto como exemplo");
el.appendChild(texto);
console.log(texto);

var titulo = document.querySelector('#titulo');
console.log(titulo);

//selecionar o pai
var pai = titulo.parentNode;

//troca elemento
pai.replaceChild(el, titulo);

var body = document.querySelector('body');
body.replaceChild(titulo, el);

/*var texto = document.createTextNode("Testando elemento no h3");
var texto2 = document.createTextNode("Testando elemento no h2");;

console.log(el);


var body = document.querySelector('body');

var textoH2 = document.createElement('h2');
el.appendChild(texto)
textoH2.appendChild(texto2);

bodyappendChild(el);
body.appendChild(textoH2);*/



