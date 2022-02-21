/*06) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos.*/
const calcularJurosSimples = (capitalInicial, taxaJuros, tempoAplicacao) => {
    let juros = (capitalInicial * taxaJuros * tempoAplicacao) / 100
    let montanteJurosSimples = capitalInicial + juros    
    return console.log(`Juros Simples: ${montanteJurosSimples}`)
}

const calcularJurosCompostos = (capitalInicial, taxaJuros, tempoAplicacao) => {
    let montanteJurosComposto = capitalInicial * (1 + taxaJuros) ** tempoAplicacao
    return console.log(`Juros compostos: ${montanteJurosComposto}`)
}

console.log(calcularJurosSimples(100,10,2))
console.log(calcularJurosCompostos(100, 10, 2))