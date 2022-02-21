// par nome/valor
const saudacao = "Opa"; // contexto léxico 1 (local físico onde foi definido)

function exec(){
    const saudacao = "Falaa"; // contexto léxico 2
    return saudacao;
}

//objetos são grupos aninhados de pares nome/valor
const cliente = {
    nome: "Pedro",
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: "Rua tanto faz",
        numero: 123
    }
}
console.log(saudacao);
console.log(exec());
console.log(cliente);