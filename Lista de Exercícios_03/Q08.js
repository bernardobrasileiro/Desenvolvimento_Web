const a = 8;
const b = 2;

function aplicarOperacao(a, b, operacao){
    return operacao(a, b);
}

function soma(a, b){
    return a + b;
}

function multiplicacao(a, b){
    return a * b;
}

console.log(aplicarOperacao(a, b, soma));
console.log(aplicarOperacao(a, b, multiplicacao));
console.log(aplicarOperacao(a, b, (x, y) => x - y));