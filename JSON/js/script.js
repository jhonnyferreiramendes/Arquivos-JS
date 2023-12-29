const objs =[
    {
    nome: "Jhonny",
    sobreNome:"Ferreira Mendes",
    Idade: 28,
    esta_trabalhando: true,
    detalhes_da_profissao:{
        profissao: "programador",
        salario: 5500.00,
        empresa: "FAFIC"
    },
    hobbies:["programa","treinar","estudade"]
},
{
    nome: "Joao",
    sobreNome:"Antonio de Moraes",
    Idade: 18,
    esta_trabalhando: false,
    detalhes_da_profissao:{
        profissao: null,
        salario: 0,
        empresa: null
    },
    hobbies:["programa","treinar","estudade"],
},



]
console.log(objs);

//converte objeto ppara JSON
const jsonData = JSON.stringify(objs, null, 1); // 2 espaços de indentação
console.log(jsonData);

//converte JSON para objeto
const objData = JSON.parse(jsonData);
console.log(objData);

objData.map((pessoa)=>{
    console.log(pessoa.nome);
}
)