function verificaPalindromoPalavra(stringParaVerificar) {
  if (!stringParaVerificar) {
    return "Envie uma string";
  }
  let stringRevertida = stringParaVerificar
    .split("")
    .reverse()
    .join("")
    .replace(/ /g, "");
  let stringVerificada = stringParaVerificar.replace(/ /g, "");
  if (stringVerificada == stringRevertida) {
    return "É palindromo";
  } else {
    return "Não é palindromo";
  }
}

console.log(verificaPalindromoPalavra("ovo"));
console.log(verificaPalindromoPalavra("roma me tem amor"));
console.log(verificaPalindromoPalavra("gato"));
console.log(verificaPalindromoPalavra("ovo e ovo"));
console.log(verificaPalindromoPalavra(""))
