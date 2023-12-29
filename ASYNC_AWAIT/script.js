//sintaxe

function primeeiraFuncao(){

    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log("Esperou isso aqui")
            resolve()

        }, 1000)
    })
}

async function segundaFuncao(){

    console.log("Iniciou")

    await primeeiraFuncao();

    console.log("Terminou");

}

segundaFuncao();

//Pratico
function getUser(id){

    return fetch(`http://reqres.in/api/user?id=${id}`)
    .then(data=>data.json())
    .catch(err=>console.log(err))

}

async function showUserName(){
    const user = await getUser(id)

    console.log(`O nome do usuario é: ${user.data.first_name}`)
}

showUserName(3);