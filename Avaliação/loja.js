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
    const novoProduto = {
            nome: formatarNome(nome),
            categoria: categoria,
            preco: preco,
            quantidade: quantidade,
            vendidos: 0,
        };
    lista.push(novoProduto);
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
        if(lista[k].nome.toLowerCase().includes(termoLimpo)){
            return lista[k];
        }
    }
    return null;
}

//Tarefa 6
function produtosEmFalta(lista, minimo) {
    const emFalta = [];
    for (let k = 0; k < lista.length; k++) {
        if (lista[k].quantidade < minimo) {
            emFalta.push(lista[k]);
        }
    }
    return emFalta;
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

//Tarefa 8
function registrarVenda(lista, nome, quantidade){
    const produto = buscarProduto(lista, nome);
    if (produto === null || produto.quantidade < quantidade) {
        return false;
    }
    produto.quantidade = produto.quantidade - quantidade;
    produto.vendidos = produto.vendidos + quantidade
    return true
}

//Tarefa 9
function formatarNome(texto){
    const limpo = texto.trim();
    return limpo.charAt(0).toUpperCase() + limpo.slice(1).toLowerCase();
}

//Tarefa 10
function converterParaJSON(lista){
    return JSON.stringify(lista);
}   
function lerJSON(texto){
    return JSON.parse(texto)
}

//Tarefa 11
function gerarRelatorio(nome, lista){
    const novoNome = nome.toUpperCase();
    const valorEstoque = calcularValorEstoque(lista);
    const emFalta = produtosEmFalta(lista, 5)
    console.log(`===== RELATÓRIO: ${novoNome} =====`);
    console.log(`Produtos cadastrados: ${lista.length}`);
    console.log(`Valor total em estoque: R$${valorEstoque}`);
    console.log(`Produtos com estoque baixo: ${emFalta.length}`);
    for(let k = 0; k < emFalta.length; k++){
        console.log(`- ${emFalta[k].nome} (${emFalta[k].quantidade} un.)`);
    }
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
const naoExiste = buscarProduto(produtos, "monitor");
if (naoExiste === null) {
    console.log(`Produto não encontrado.`);
}

console.log(`--- Tarefa 6: em falta ---`);
console.log(`Produtos com menos de 5 unidades: ${produtosEmFalta(produtos, 5).length}`);

console.log(`--- Tarefa 7: desconto ---`);
const alterados = aplicarDesconto(produtos, "periferico", 10);
console.log(`${alterados} produtos receberam desconto.`);
console.log(`Novo preço do mouse: R$ ${buscarProduto(produtos, "mouse").preco}`);

console.log(`--- Tarefa 8: registrar venda ---`);
if (registrarVenda(produtos, "mouse", 3)) {
    const mouse = buscarProduto(produtos, "mouse");
    console.log(`Venda realizada! ${mouse.nome}: ${mouse.quantidade} un. em estoque, ${mouse.vendidos} vendidos.`);
}
if (!registrarVenda(produtos, "gpu", 10)) {
    console.log(`Venda não realizada: estoque insuficiente ou produto inexistente.`);
}

console.log(`--- Tarefa 9: formatar nome ---`);
console.log(`${formatarNome("  weBcAM ")}`);

console.log(`--- Tarefa 10: JSON ---`);
const texto = converterParaJSON(produtos);
console.log(typeof texto);
const recuperados = lerJSON(texto);
console.log(`Itens recuperados: ${recuperados.length} | Primeiro: ${recuperados[0].nome}`);

console.log(`--- Tarefa 11: relatório ---`);
gerarRelatorio(nomeLoja, produtos);
