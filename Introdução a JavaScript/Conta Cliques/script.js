const botao = document.querySelector('#botao');
const numero = document.querySelector('#numero');
let contador = 0;

botao.addEventListener('click', function () {
    contador++;
    numero.textContent = contador;
})