const funcionarios = [
    { nome: "Lia", setor: "TI" },
    { nome: "Rui", setor: "RH" },
    { nome: "Ana", setor: "TI" },
    { nome: "Caio", setor: "Vendas" }
];

const nomesTI = funcionarios.filter(c => c.setor === "TI").map(c => c.nome);
console.log(nomesTI);
console.log(funcionarios.length);
