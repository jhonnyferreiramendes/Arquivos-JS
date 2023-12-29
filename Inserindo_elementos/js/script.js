var el = document.createElement("div");

el.classList = "div-criada";
console.log(el);

var container = document.querySelector('#container');

//inserindo um elemento na pagina
container.appendChild(el);

var el2 = document.createElement('div');
el2.classList = "div-before";

el3 = document.querySelector('#containe .div-criada');
console.log(el3);

//inserindo o elemento colocando o elemento e o elemento antecessor para ser inserido antes dele como o el3
container.insertBefore(el2, el3);


