let distancia = Number(prompt('Insira a distância da viagem: '));
let consumoMedio = Number(prompt('Insira o consumo médio: '));
let preco = Number(prompt('Insira o preço: '));

let quantidade = distancia / consumoMedio;
let custo = quantidade * preco;

alert(`Quantidade de combustivel: ${quantidade.toFixed(2)}L`);
alert(`Custo da viagem: R$${custo.toFixed(2)}`);