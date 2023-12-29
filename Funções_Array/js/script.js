var arr = [1, 2, 3, 4, 5];

console.log(arr.length);

//push adicionar elemento no fim do array
arr.push(6);
console.log(arr);
arr.push("Qualquer coisa");
console.log(arr);

//Remover elemento no fim do array
arr.pop();
console.log(arr);

//Adicionar elemento no começo do array
arr.unshift(0);
arr.unshift("teste")
console.log(arr);

//Remover elemento no começo do array
arr.shift();
console.log(arr);

//pegar ultimo elemento do array
console.log(arr[arr.length-1]);

//veririfcar se é um array
console.log(Array.isArray(5));
console.log(Array.isArray(arr));

//adicionar elemento entre o indice 2 e 3
arr.splice(2, 0, 99);
console.log(arr);

//removendo tre elemento na possição 2 em diante
arr.splice(2, 3)
console.log(arr);

//pegando o indice do elemento
console.log(arr.indexOf(1))

var arr2 = ["O", "rato", "roeu", "a", "roupa", "do", "rei", "de", "roma"];

//transformando array em uma string separado por virgula
console.log(arr2.join(","));

//Revertendo o array de traz pra frete
console.log(arr2.reverse());

