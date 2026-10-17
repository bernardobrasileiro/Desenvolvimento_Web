const recebido = '{"produto": "Monitor", "preco": 900, "estoque": 4}'

const objeto = JSON.parse(recebido);

objeto.preco = objeto.preco * 0.9;
objeto.estoque--;

console.log(typeof objeto);

const objetoJSON = JSON.stringify(objeto);

console.log(objetoJSON);
console.log(typeof objetoJSON);
