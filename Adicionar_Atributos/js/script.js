var titulo = document.querySelector('#titulo');
titulo.setAttribute('classe','class-atributo');
console.log(titulo);

//adicionando o disabled no button
var btn = document.querySelector('#btn');
btn.setAttribute('disabled', 'disabled');

//adiciando o id no titulo2
var subtitulo = document.querySelector('.titulo2');
subtitulo.setAttribute('id', 'identificação');
console.log(subtitulo);

//removendo o atributo id
subtitulo.removeAttribute('id');
