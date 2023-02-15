function sum(a, b){
    return a + b;
}

function calc(a, b, callback){
    return callback(a, b);
}

console.log(calc(2, 2, sum));

setTimeout(function () {
    console.log("Hola JavaScript");
}, 2000)

function gretting(name){
    console.log(`Hola ${name}`);
}

setTimeout(gretting, 2000, "Juan");