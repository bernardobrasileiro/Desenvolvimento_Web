//Calculadora de ICM

let pergunta = confirm('Deseja calcular o seu IMC?');

if(pergunta) {
    const nome = prompt('Insira seu nome: ');
    let peso = Number(prompt('Insira seu peso: '));
    let altura = Number(prompt('Insira sua altura: '));
    let imc = peso / (altura ** 2);
    alert(`${nome}, seu IMC é ${imc.toFixed(2)}`);
}
else {
    alert(`;(`);
}