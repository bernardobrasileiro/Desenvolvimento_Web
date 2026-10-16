carrinho = [
    {
        item: "Teclado", preco: 150, quantidade: 1
    },
    {
        item: "Mouse", preco: 80, quantidade: 2
    },
    {
        item: "Cabo USB", preco: 25, quantidade: 3
    }
]

const total = carrinho.reduce(
    (acumular, c) => acumular + c.preco * c.quantidade, 0);

console.log(`Total de compra: R$ ${total}`);