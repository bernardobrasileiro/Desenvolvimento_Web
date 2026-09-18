let nome = prompt('Insira seu nome: ');
let idade = Number(prompt('Insira sua idade: '));
let curso = prompt('Insira seu curso: ');

let resposta = confirm('As informações acima estão corretas?');

if (resposta) {
    alert(`Prossiga!`);
}
else {
    alert(`Preencha corretamente para poder prosseguir!`);
}
