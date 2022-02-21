console.log(this === global)
console.log(this === module)

console.log(this === module.exports)
console.log(this === exports)

function Logthis(){
    console.log('dentro de uma função')
    console.log(this === exports)
    console.log(this === module.exports)
    console.log(this === global)
}

Logthis()