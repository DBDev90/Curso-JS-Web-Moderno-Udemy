for(let letra of 'Cod3r'){
    console.log(letra)
}

const assuntosEcma = ['Map','Set','Promise']

for(let i in assuntosEcma){
    console.log(i)
}

for(let assunto of assuntosEcma){
    console.log(assunto)
}

const assuntosMap = new Map([
    ['Map', {abordado: true}],
    ['Set', {abordado: true}],
    ['Promise', {abordado: false}]
])
console.log(assuntosMap)
for(let assunto of assuntosMap){
    console.log(assunto)
}
for(let valor of assuntosMap.keys()){
    console.log(valor)
}