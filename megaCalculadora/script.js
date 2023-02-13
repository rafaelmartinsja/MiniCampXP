// pega os dados do HTML
let soma = document.getElementById("soma");
let subtracaoA = document.getElementById("subtracaoA");
let subtracaoB = document.getElementById("subtracaoB");
let multiplicacao = document.getElementById("multiplicacao");
let divisaoA = document.getElementById("divisaoA");
let divisaoB = document.getElementById("divisaoB");

soma.innerHTML = 0;
subtracaoA.innerHTML = 0;
subtracaoB.innerHTML = 0;
multiplicacao.innerHTML = 0;
divisaoA.innerHTML = 0;
divisaoB.innerHTML = 0;

// fazer os cáculos
function calculoSoma(a, b) {
  return a + b;
}

const calculoSubtracao = (a, b) => a - b;

const calculoMultiplicacao = (a, b) => a * b;

const calculoDivisao = (a, b) => a / b;

const calculoPotencializacao = (a, b) => a * a;

// criar uma função ao clicar no botão calcular
const calcular = () => {
  let inputA = document.getElementById("primeiroNumero").value;
  let inputB = document.getElementById("segundoNumero").value;

  let a = parseFloat(inputA);
  let b = parseFloat(inputB);

  soma.innerHTML = calculoSoma(a, b);
  subtracaoA.innerHTML = calculoSubtracao(a, b);
  subtracaoB.innerHTML = calculoSubtracao(b, a);
  multiplicacao.innerHTML = calculoMultiplicacao(a, b);
  divisaoA.innerHTML = calculoDivisao(a, b);
  divisaoB.innerHTML = calculoDivisao(b, a);
};
