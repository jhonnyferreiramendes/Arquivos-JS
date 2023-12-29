var arr = ["Mara", 18, 5550.00, false, {teste: 1, teste: 2} ];

console.log(arr);

var arr2 = [1, 2, 5, 7, 10];
console.log(arr2);

console.log("salario e: " + arr[2]);

var obj = {
    nome: "Jhonny",
    idade: 28,
    profissao: "Desenvolvedor",
    salario: 7550.00,
    estaTrabalhando: true

}

var arr3 = ["Teste", {obj}];
console.log(arr3);
console.log(arr3[1]);


arr[0] = "João";
console.log(arr);

arr2[5] = 11;
console.log(arr2);