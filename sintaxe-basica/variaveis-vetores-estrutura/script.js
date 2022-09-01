// ======Variáveis======

var escopoGlobal = "global";
var myNum = 3;
var arrayExemplo = [0, 1, 2, 3, 4];
console.log(escopoGlobal);
console.log("============== Imprime variável global ^ ===============")

function escopoLocal() {
  let escopoLocalInterno = "palavra";
  console.log(escopoLocalInterno);
}
escopoLocal();
console.log("============== Imprime variável local ^ ===============")

// ======Vetores ou Arrays======

let array = ['palavra', 2, true, "cobra", ['array1']]
console.log(array)
console.log("============== Imprime Valores do Array ^ ===============")
console.log(array[0][0])
console.log("============== Imprime Valor específico ^ ===============")

// indexOf
console.log(array.indexOf(true))
console.log("============= indexOf ^ ================")

// forEach
array.forEach( item => console.log(item))
console.log(array)
console.log("============= For Each ^ ================")

// push
array.push('abacaxi', 'canela', 4, 5, 6)
console.log(array)
console.log("============= Push ^ 'abacaxi', 'canela', 4, 5, 6 ================")

// pop
array.pop()
console.log(array)
console.log("============= Pop ^ ================")

// shift
array.shift()
console.log(array)
console.log("============= Shift ^ ================")

// unshift
array.unshift('novo item no inicio')
console.log(array)
console.log("============= Unshift ^ ================")

// splice
array.splice(1, 3)
console.log(array)
console.log("============= splice de 1, 3 ^ ================")

// slice
let novoArray = array.slice(1, 3)
console.log(novoArray)
console.log("============= slice de 1, 3 ^ ================")

