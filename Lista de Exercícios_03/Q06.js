function gerarUsuario(nomeCompleto){
    return nomeCompleto.toLowerCase().trim().split(" ").join(".");
};

console.log(gerarUsuario(" Maria Clara Souza "));
console.log(gerarUsuario("JOAO LIMA"));