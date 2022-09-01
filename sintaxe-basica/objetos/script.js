// ======Manipulando objetos======

let objetos = {
  palavra: "palavra",
  numero: 10,
  boleano: true,
  arrayExemplo: ["array"],
  outroObjeto: {
    novoObjeto: "objeto interno",
    novoNumero: 20,
    novoBoleano: false,
  },
};
console.log(objetos);
console.log("============= Objeto ^ ================");
console.log(objetos.numero);
console.log("============= Chave 'número' ^ ================");
console.log(objetos.outroObjeto);
console.log("============= Chave 'objeto interno' ^ ================");
console.log(objetos.outroObjeto.novoNumero);

// ======Estruturas condicionais======

// IF
var jogador1 = 0;
var jogador2 = 0;

jogador1 >= 0 && jogador2 >= 0
  ? console.log("Os jogadores são válidos")
  : console.log("Os jogadores são inválidos");

if (jogador1 > 0) {
  console.log("Jogador 1 marcou ponto");
  placar = jogador1 > jogador2;
} else if (jogador2 > 0) {
  console.log("Jogador 2 marcou ponto");
  placar = jogador2 > jogador1;
} else {
  placar = jogador2 = jogador1;
  console.log("Ninguém marcou ponto");
}
console.log("============= If para pontos ^ ================");

//SWITCH/CASE

switch (placar) {
  case (placar = jogador1 > jogador2):
    console.log("Jogador 1 ganhou");
    break;
  case (placar = jogador1 < jogador2):
    console.log("Jogador 2 ganhou");
    break;
  default:
    console.log("Ninguém ganhou");
}

console.log("============= Switch Case para vitória ^ ================");
// FOR

let array = ["valor1", "valor2", "valor3", "valor4", "valor5"];

for (let indice = 0; indice < array.length; indice++) {
  console.log(indice);
}
console.log("============= For ^ ================");

for (i in array) {
  console.log(i);
}
console.log("============= For in ^ ================");

for (i of array) {
  console.log(i);
}
console.log("============= For of ^ ================");

let array2 = ["a", "b", "c", "d", "e"];
let pegaElemento = array2.at(3);
console.log(array2);
console.log(pegaElemento);
console.log("============= Array.at 3 ^ ================");

//WHILE
var a = 0;
while (a < 4) {
  console.log(a);
  a++;
}
console.log("============= While ^ ================");

// DO WHILE
var a = 0;
do {
  console.log(a);
  a++;
} while (a < 4);
console.log("============= Do While ^ ================");
