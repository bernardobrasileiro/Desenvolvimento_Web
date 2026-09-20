let num1 = Number(prompt('Insira um número: '));
let num2 = Number(prompt('Insira outro número: '));

if (num1 === num2) {
    alert(`São iguais!`);
}
else {
    alert(`São diferentes!`);
    if (num1 < num2) {
        alert(`${num1} é menor que ${num2}`);
    }
    else if (num1 > num2) {
        alert(`${num1} é maior que ${num2}`);
    }
}