const interacao = document.querySelectorAll('.interacao');
const soma = document.querySelector('#soma');
const igual = document.querySelector('#igual');
const resultado = document.querySelector('#resultado');

let valorFinal = '';
let valores = [];

interacao.forEach(function (botao) {
    botao.addEventListener('click', function () {
        if (botao === soma) {
            valores.push(Number(valorFinal));
            valorFinal = '';
        }
        else if (botao === igual) {
            valores.push(Number(valorFinal));
            const soma_total = valores.reduce(function (acumulado, numero) {
                return acumulado + numero;
            }, 0);
            const media = soma_total / valores.length;

            resultado.textContent = media;

            valorFinal = '';
            valores = [];
        }
        else {
            valorFinal = valorFinal + botao.textContent;
        }
    })
}); 