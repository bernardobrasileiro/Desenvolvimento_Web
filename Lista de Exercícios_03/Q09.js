function criaMultiplicador(fator){
    return function funcao(num){
        return num * fator;
    }
}

const dobrar = criaMultiplicador(2);
const triplicar = criaMultiplicador(3);

console.log(dobrar(5));
console.log(triplicar(5));
console.log(dobrar(10));