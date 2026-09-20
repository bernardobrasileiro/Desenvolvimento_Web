let nome = prompt('Qual o seu nome?');
let idade = Number(prompt('Quantos anos você tem'));
let curso = prompt('Qual o seu curso?');

let resposta = confirm('As informações acima estão corretas?');

if (resposta) {
    alert(`Prossiga!`);
}
else {
    alert(`Preencha corretamente para poder prosseguir!`);
}