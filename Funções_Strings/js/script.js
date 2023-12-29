const nome = "jhonny";
console.log(nome.length);

let obj = "BOLA";
console.log(obj.length);

console.log(nome[3]);

var frase = "O rato roeu a roupa do rei de Roma";

//Pega a posiçãao da palavra roeu
console.log(frase.indexOf("roeu"));

//Pega uma frase da poição 4 ate a posição 7
var roeu = frase.slice(4,7);


console.log(roeu);

//Troca uma frase roeu por nao roeu
novaFrase = frase.replace("roeu", "não roeu");
console.log(novaFrase);

var frase2 = "eSTA frASe VAI seR ManiPULADa";

//Transforma a string em caixa alta
var fraseCaixaAlta = frase2.toUpperCase();

//Transforma a string em caisa baixa
var fraseCaixaBaixa = frase2.toLocaleLowerCase();


console.log(fraseCaixaAlta);
console.log(fraseCaixaBaixa);

var nome2 = "        Jhonny           ";
var nomeTrim = nome2.trim();

console.log(nomeTrim);

//Transformar frase em array por espaço
console.log(frase.split(" "));

var linguagens = "PHP, JavaScript, HTML, CSS";
console.log(linguagens.split(", "));


var fraseTeste = "Eu quero a ultima palvra teste dessa frase teste";

//pegando a primeira palavra teste
console.log(fraseTeste.indexOf("teste"));
//Pegando a ultima palavra teste
console.log(fraseTeste.lastIndexOf('teste'));

