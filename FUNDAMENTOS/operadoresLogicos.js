/*
v e v -> v
v e f -> f
f e v -> f
f e f -> f

v ou v -> v
v ou f -> v
f ou v -> v
f ou f -> f

v xor v -> f
v xor f -> v
f xor v -> v
f xor f -> f
*/

function compras(trab1, trab2){
    const comprarSorvete = trab1 || trab2
    const comprarTv50 = trab1 && trab2
    // const comprarTv32 = !!(trab1 ^ trab2) //bitwise xor
    const comprarTv32 = trab1 != trab2 // xor
    const manterSaudavel = !comprarSorvete //operador unario

    return {comprarSorvete, comprarTv50, comprarTv32, manterSaudavel}
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))