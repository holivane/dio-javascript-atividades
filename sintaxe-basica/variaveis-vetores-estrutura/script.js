// ======Variáveis======

// var escopoGlobal = "global";
// var myNum = 3;
// var arrayExemplo = [0, 1, 2, 3, 4];

// console.log(escopoGlobal);

// function escopoLocal() {
//   let escopoLocalInterno = "palavra";
//   console.log(escopoLocalInterno);
// }

// escopoLocal();

// function alteraValor(myNum, array) {
//   myNum = 5;
//   array[0] = 99
// }

// alteraValor(myNum, arrayExemplo);

// console.log(myNum);
// console.log(arrayExemplo)

// ======Vetores ou Arrays======

// let array = ['palavra', 2, true, ['array2'], ['array3']]
// console.log(array)
// console.log(array[0][0])

// forEach
// array.forEach( item => console.log(item))

// push
// array.push('abacaxi')

// pop
// array.pop()

// shift
// array.shift()

// unshift
// array.unshift('novo item no inicio')

// indexOf
// console.log(array.indexOf(true))

// splice
// array.splice(0, 3)

//slice
// let novoArray = array.slice(0, 3)
// console.log(novoArray)

// ======Manipulando objetos======

// let objetos = {
//   palavra: "palavra",
//   numero: 10,
//   boleano: true,
//   arrayExemplo: ['array'],
//   outroObjeto: {
//     novoObjeto: "objeto interno",
//     novoNumero: 20,
//     novoBoleano: false,
//   },
// };

// console.log(objetos);
// console.log(objetos.numero);
// console.log(objetos.outroObjeto);
// console.log(objetos.outroObjeto.novoNumero);
// let testString = objetos.palavra
// console.log(testString)
// let testArray = objetos.arrayExemplo[0][4]
// console.log(testArray)

// ======Estruturas condicionais======

// // IF
// var jogador1 = 0;
// var jogador2 = 0;

// jogador1 >= 0 && jogador2 >=0 ? console.log('Os jogadores são válidos') : console.log('Os jogadores são inválidos')

// if(jogador1 > 0){
//     console.log('Jogador 1 marcou ponto')
//     placar = jogador1 > jogador2
// } else if (jogador2 >0 ) {
//     console.log('Jogador 2 marcou ponto')
//     placar = jogador2 > jogador1
// } else {
//     placar = jogador2 = jogador1
//     console.log("Ninguém marcou ponto")
// }

// //SWITCH/CASE

// switch(placar){
//     case placar = jogador1 > jogador2:
//     console.log('Jogador 1 ganhou')
//     break
//     case placar = jogador1 < jogador2:
//     console.log('Jogador 2 ganhou')
//     break
//     default:
//     console.log("Ninguém ganhou")
// }

// FOR

// let array = ["valor1", "valor2", "valor3", "valor4", "valor5"];

// for (let indice = 0; indice < array.length; indice++) {
//     console.log(array[indice]);
//     console.log(indice);
// }

// for(let i in array) {
//     console.log(array[i])
// // }

// for(i of array) {
//     console.log(i)
// }

// let array2 = ['a', 'b', 'c', 'd', 'e']
// let pegaElemento = array2.at(3)
// console.log(pegaElemento)

//WHILE

// var a = 0;

// while (a < 10) {
//   console.log(a);
//   a++;
// }

// DO WHILE

// var a = 0;

// do {
//     a++;
//     console.log(a);
// } while (a < 10);
