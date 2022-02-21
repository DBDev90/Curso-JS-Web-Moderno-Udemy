/*04) Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
e o resto da divisão destes dois valores.*/
const calculaResto = (dividendo, divisor) => {
    return console.log('O resultado da divisão é: ', Math.floor(dividendo / divisor), 'O resto da divisão é: ', Math.floor(dividendo % divisor))
}

calculaResto(5,3)
calculaResto(12, 7)
calculaResto(7, 12)
calculaResto(10,2)
