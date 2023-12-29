for(var i = 0; i< 10; i++){
    console.log("Valor de I: " + i);

    if( i === 5){
        break;
    }
} 
console.log("Deu break");

var x = 10;

while(x < 100){
     x += 10;

     if(x === 50 || x === 90){
        continue;
     }

     console.log("Valor de X: " + x);
}
