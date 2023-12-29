function exibir (num){
    console.log("Valor do numero: " + num);
}

function soma (a, b, callback){
    var op = a + b;
    callback(op);
}
function mult (a, b, cb){
    var op = a * b;
    cb(op);
}

soma(7, 9, exibir);
mult(10, 78, exibir);

