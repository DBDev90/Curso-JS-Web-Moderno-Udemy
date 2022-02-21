const obj = { a:1, b:2, c: 3}
console.log(Object.values(obj))
console.log(Object.entries(obj))

//melhorias na notação
const nome = 'Carla'
const pessoa = {
    nome,
    ola(){
        return 'Oi'
    }
}

console.log(pessoa.nome, pessoa.ola())

//class
class Animal {}
class Cachorro extends Animal{
    falar(){
        return 'blabla'
    }
}
console.log(new Cachorro().falar())