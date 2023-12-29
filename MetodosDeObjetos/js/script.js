let pessoa = {
    nome: "jhonny",
    idade: 28,
    falar: function(){
        console.log("Ola tudo bem!")
    },

    soma: function(a, b){
        return a +b;
    }

}

console.log(pessoa);

pessoa.falar();

var soma =  pessoa.soma(5, 10);
console.log(soma);