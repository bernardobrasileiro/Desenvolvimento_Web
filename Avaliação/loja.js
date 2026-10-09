// ===== 1. DADOS =====
// Tarefa 1
const nomeLoja = "BernaTech"
const produtos = [
    {
        nome: "Cpu", 
        categoria: "hardware", 
        preco: 1500, 
        quantidade: 4, 
        vendidos: 1,
    },
    {
        nome: "Gpu", 
        categoria: "hardware", 
        preco: 1950, 
        quantidade: 3, 
        vendidos: 2 ,
    },
    {
        nome: "Mouse", 
        categoria: "periferico", 
        preco: 150, 
        quantidade: 23, 
        vendidos: 10,
    },
    {
        nome: "Microfone", 
        categoria: "periferico", 
        preco: 175, 
        quantidade: 12, 
        vendidos: 5,
    },
    {
        nome: "Webcam", 
        categoria: "periferico", 
        preco: 125, 
        quantidade: 10, 
        vendidos: 3,
    },
    {
        nome: "Teclado", 
        categoria: "periferico", 
        preco: 250, 
        quantidade: 15, 
        vendidos: 7,
    }
];

// ===== 2. FUNÇÕES =====
//Tarefa 2
function listarProdutos(lista){
    for(let k = 0; k < lista.length; k++){
        console.log(`${k+1}. ${lista[k].nome} | ${lista[k].categoria} | R$${lista[k].preco} | ${lista[k].quantidade} un. | ${lista[k].vendidos} vendidos`);
    }
}

//Tarefa 3
function cadastrarProduto(lista, nome, categoria, preco, quantidade){
    [
        {
            nome: nome,
            categoria: categoria,
            preco: preco,
            quantidade: quantidade,
            vendidos: 0,
        },
    ];
    lista.push(nome);
    return lista.length
}

//Tarefa 4
function calcularValorEstoque(lista){
    let soma = 0;
    for(let k = 0; k < lista.length; k++){
        soma = soma + lista[k].preco * lista[k].quantidade;
    }
    return soma;
}

//Tarefa 5
function buscarProduto(lista, termo){
    const termoLimpo = termo.trim().toLowerCase();

    for(let k = 0; k < lista.length; k++){
        if(lista[k].nome.toLowerCase() === termoLimpo){
            return lista[k];
        }
    }

    return null;
}

//Tarefa 6
function produtosEmFalta(lista, minimo){
    return lista.filter(function(produto){
        return produto.quantidade < minimo;
    });
}

//Tarefa 7
function aplicarDesconto(lista, categoria, percentual){
    let cont = 0, novoPreco;
    for(let k = 0; k < lista.length; k++){
        if(lista[k].categoria === categoria){
            novoPreco = lista[k].preco - (lista[k].preco * percentual / 100);
            lista[k].preco = novoPreco;
            cont++;
        }
    }
    return cont;
}

// ===== 3. PROGRAMA PRINCIPAL =====
console.log(`--- Tarefa 2: listar ---`);
listarProdutos(produtos);
console.log(`--- Tarefa 3: cadastrar ---`);
console.log(`Produto cadastrado! Agora a loja tem ${cadastrarProduto(produtos, "fone", "periferico", 100, 15)} produtos.`);
console.log(`--- Tarefa 4: valor do estoque ---`);
console.log(`Valor do estoque: R$${calcularValorEstoque(produtos)}.`);
console.log(`--- Tarefa 5: buscar ---`);
const encontrado = buscarProduto(produtos, " MOUSE");
if (encontrado !== null) {
    console.log(`Encontrado: ${encontrado.nome} - R$${encontrado.preco}`);
} else {
    console.log(`Produto não encontrado.`);
}
console.log(`--- Tarefa 6: em falta ---`);
const emFalta = produtosEmFalta(produtos, 5);
const nomesEmFalta = emFalta.map(function (produto) {
    return produto.nome;
});
console.log(`Produtos com menos de 5 unidades: ${nomesEmFalta.join(", ")}.`);
console.log(`--- Tarefa 7: desconto ---`);
const alterados = aplicarDesconto(produtos, "periferico", 10);
console.log(`${alterados} produtos receberam desconto.`);
console.log(`Novo preço do mouse: R$ ${buscarProduto(produtos, "mouse").preco}`);
console.log(`--- Tarefa 8: registrar venda ---`);
console.log(`--- Tarefa 9: formatar nome ---`);
console.log(`--- Tarefa 10: JSON ---`);
console.log(`--- Tarefa 11: relatório ---`);