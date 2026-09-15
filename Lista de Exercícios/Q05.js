let preco = Number(prompt('Insira o preço'));
let quantidade = Number(prompt('Insira a quantidade: '));
let percentual = Number(prompt('Insira o desconto: '));

let subTotal = preco * quantidade;
let desconto = (percentual / 100) * subTotal;
let valorFinal = subTotal - desconto;

alert(`Subtotal: R$${subTotal}`);
alert(`Desconto: R$${desconto.toFixed(2)}`);
alert(`Valor Final: R$${valorFinal}`);
