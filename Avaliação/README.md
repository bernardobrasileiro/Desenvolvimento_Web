# Minha Loja - BernaTech

Aluno: Bernardo Brasileiro Diniz - 202612010023

Disciplina: Linguagens de Script para a Web (ADS, 2º período) - IFPB Campus Cajazeiras

## Sobre o projeto

Sistema de controle de produtos de uma loja de hardware e periféricos, feito em JavaScript e executado no terminal com o Node.js. Os produtos ficam guardados em um array de objetos, e cada produto tem nome, categoria, preço, quantidade em estoque e quantidade de vendidos.

## Como executar

Com o Node.js instalado, abra o terminal na pasta do projeto e digite:

```
node loja.js
```

## Funcionalidades

| Tarefa | Função | O que faz |
|--------|--------|-----------|
| 1 | `nomeLoja` e `produtos` | Guardam o nome da loja e o array com 6 produtos, em 2 categorias (hardware e periférico). |
| 2 | `listarProdutos(lista)` | Exibe cada produto numerado, com categoria, preço, estoque e vendidos. |
| 3 | `cadastrarProduto(lista, nome, categoria, preco, quantidade)` | Cria um produto novo (com 0 vendidos e nome formatado), adiciona ao array e retorna o total de produtos. |
| 4 | `calcularValorEstoque(lista)` | Retorna a soma de preço × quantidade de todos os produtos. |
| 5 | `buscarProduto(lista, termo)` | Busca o primeiro produto cujo nome contém o termo, sem diferenciar maiúsculas de minúsculas. Retorna o produto ou `null`. |
| 6 | `produtosEmFalta(lista, minimo)` | Retorna um novo array com os produtos de estoque menor que o mínimo informado. |
| 7 | `aplicarDesconto(lista, categoria, percentual)` | Aplica o desconto no preço dos produtos da categoria e retorna quantos foram alterados. |
| 8 | `registrarVenda(lista, nome, quantidade)` | Registra a venda usando `buscarProduto`. Retorna `false` se o produto não existir ou o estoque for insuficiente. Se der certo, diminui o estoque, aumenta os vendidos e retorna `true`. |
| 9 | `formatarNome(texto)` | Remove os espaços das pontas e deixa só a primeira letra maiúscula. |
| 10 | `converterParaJSON(lista)` e `lerJSON(texto)` | Convertem o array em texto JSON e o texto JSON de volta em array. |
| 11 | `gerarRelatorio(nome, lista)` | Exibe o relatório da loja, com o nome em maiúsculas, o total de produtos, o valor do estoque (Tarefa 4) e os produtos com estoque baixo (Tarefa 6). |

## Organização do código

O código fica em um único arquivo, `loja.js`, dividido em 3 partes:

1. **Dados:** `nomeLoja` e o array `produtos`.
2. **Funções:** todas as funções das Tarefas 2 a 11.
3. **Programa principal:** os testes de cada tarefa, com um título `--- Tarefa N: descrição ---` antes de cada um.