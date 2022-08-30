function trocaPares(arrayNumeros) {
  if (!arrayNumeros || arrayNumeros.length < 1) {
    return "-1";
  }

  for (let i = 0; i <= arrayNumeros.length; i++) {
    if (arrayNumeros[i] % 2 == 0) {
      arrayNumeros[i] = 0;
    }
  }
  return arrayNumeros;
}

console.log(trocaPares([1, 0, 9, 7, 3, 4, 5, 6, 7]));
console.log(trocaPares([]));
console.log(trocaPares());
console.log(trocaPares("ana"));
