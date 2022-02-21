const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() //remove o ultimo elemento do array
console.log(pilotos)

pilotos.push('Vertappen')
console.log(pilotos)

pilotos.shift() //remove o primeiro elemento do array
console.log(pilotos)

pilotos.unshift('Hamilton') //adiciona elemento na primeira posição do array
console.log(pilotos)

// splice pode adicionar e remover elementos do array
//adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)
//remover
pilotos.splice(3, 1)
console.log(pilotos)

//slice - retorna um novo array
const algunsPilotos1 = pilotos.slice(2)
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2)