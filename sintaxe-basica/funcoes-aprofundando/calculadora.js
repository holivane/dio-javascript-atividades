function calculadora() {
  const operacao = prompt(`Escolha uma operação: 
  1 - Soma (+)
  2 - Subtração (-)
  3 - Multiplicação (*)
  4 - Divisão (/)
  5 - Divisão Inteira (%)
  6 - Potenciação (**)
  `);
  console.log(operacao);
  if (!operacao || operacao > 6) {
    alert(`Operação inválida! Digite um valor de 1 a 6`);
    calculadora();
  } else {
    let n1 = Number(prompt("Insira o primeiro valor:"));
    let n2 = Number(prompt("Insira o segundo valor:"));
    let resultado;

    if ((!n1 || !n2) || (n1 || n2) !== typeof(Number)) {
      alert("Erro - parâmetros inválidos!");
      calculadora();
    } else {
      function soma() {
        resultado = n1 + n2;
        alert(`O resultado de ${n1}+${n2} é ${resultado}`);
        novaOperacao();
      }

      function subtracao() {
        resultado = n1 - n2;
        alert(`O resultado de ${n1}-${n2} é ${resultado}`);
        novaOperacao();
      }

      function multiplicacao() {
        resultado = n1 * n2;
        alert(`O resultado de ${n1}x${n2} é ${resultado}`);
        novaOperacao();
      }

      function divisao() {
        resultado = n1 / n2;
        alert(`O resultado de ${n1}/${n2} é ${resultado}`);
        novaOperacao();
      }

      function divisaoInteira() {
        resultado = n1 % n2;
        alert(`O resto da divisão de ${n1} é ${n2} é ${resultado}`);
        novaOperacao();
      }

      function potenciacao() {
        resultado = n1 ** n2;
        alert(`O resultado de ${n1} elevado a ${n2} é ${resultado}`);
        novaOperacao();
      }
    }

    function novaOperacao() {
      let opcao = prompt(`Deseja fazer uma nova operação?
    1 - Sim
    2 - Não`);

      if (opcao == 1) {
        calculadora();
      } else if (opcao == 2) {
        alert("Até mais!");
      } else {
        alert("Digite uma opção válida!");
        novaOperacao();
      }
    }

    if (operacao == 1) {
      soma();
    } else if (operacao == 2) {
      subtracao();
    } else if (operacao == 3) {
      multiplicacao();
    } else if (operacao == 4) {
      divisao();
    } else if (operacao == 5) {
      divisaoInteira();
    } else if (operacao == 6) {
      potenciacao();
    }
  }
}

calculadora();
