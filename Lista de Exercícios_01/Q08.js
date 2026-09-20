let salario = Number(prompt('Insira seu salário: '));
let reajuste = Number(prompt('Insira o percentual de reajuste: '));

let novoSalario = (1 + (reajuste / 100)) * salario;
let valorAumento = novoSalario - salario;

alert(`Valor do aumento: R$${valorAumento.toFixed(2)}`);
alert(`Novo salário: R$${novoSalario.toFixed(2)}`)