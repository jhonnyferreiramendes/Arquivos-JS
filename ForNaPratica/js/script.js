// Cria uma array chamada 'lista' com alguns itens.
var lista = ['laranja', 'uva', 'maça', 'banana', 'abacaxi'];

// Cria um novo elemento 'ul' (lista não ordenada) no DOM.
var listaUL = document.createElement('ul');

// Obtém uma coleção de elementos 'body' no DOM (pode conter mais de um, mas geralmente há apenas um).
var body = document.getElementsByTagName('body');

// Exibe no console o primeiro elemento da coleção 'body'.
console.log(body[0]);

// Adiciona a lista não ordenada ('ul') ao corpo do documento.
body[0].appendChild(listaUL);

// Obtém uma coleção de elementos 'ul' no corpo do documento após a adição.
var listaNoBody = document.getElementsByTagName('ul');

// Exibe no console a coleção de elementos 'ul'.
console.log(listaNoBody);

// Itera sobre a array 'lista'.
for (var i = 0; i < lista.length; i++) {
    // Cria um novo elemento 'li' (item de lista) para cada item na array.
    var liFor = document.createElement('li');

    // Cria um nó de texto com o conteúdo do item da array.
    var textoLi = document.createTextNode(lista[i]);

    // Adiciona o nó de texto ao elemento 'li'.
    liFor.appendChild(textoLi);

    // Adiciona o elemento 'li' à lista não ordenada no corpo do documento.
    listaNoBody[0].appendChild(liFor);
}
