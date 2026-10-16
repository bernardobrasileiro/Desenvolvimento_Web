const alunos = [
    { 
        nome: "Ana", media: 8.5 
    },
    { 
        nome: "Bruno", media: 6 
    },
    { 
        nome: "Carla", media: 9 
    },
    { 
        nome: "Davi", media: 5.5 
    }
]

const primeiroMenor7 = alunos.find(c => c.media < 7);
console.log(primeiroMenor7.nome);

const maiorQue9 = alunos.some(f => f.media >= 9);
console.log(maiorQue9);

const maiorIgual7 = alunos.every(j => j.media >= 7);
console.log(maiorIgual7);