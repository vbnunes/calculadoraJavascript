const readline = require('readline-sync');
var opcao = 0

while (opcao != 9) {
  displayInfo(); // mostra as opcoes de selecao
  opcao = readline.question("\nOpcao: "); //LISTA DE OPCOES \n pula linha

  console.log(`Opcao selecionada: ${opcao}`); //RETORNA O NUMERO ```usar java em uma string; ${} le um codigo javascript

if (isNaN(opcao)){ // NaN not a number
  console.error("Insira um numero valido "); // MENSAGEM DE ERRO POR NAO SER NUM
  continue; // CONTINUA O WHILE
  }

  
  switch(opcao){
  case '1':
    var valores = receberValores(); // VALORES RECEBE UM array de posicao de valores // AQUI TAVA O VALORES = RECEBER VALORES
    let resultadoAdicao = parseFloat(valores[0]) + parseFloat(valores[1]);
    console.log(`Resultado da adicao: ${resultadoAdicao}`);
    break;
  case '2':
    var valores = receberValores();
    let resultadoSubtracao = parseFloat(valores[0]) - parseFloat(valores[1]);
    console.log(`Resultado da Subtracao: ${resultadoSubtracao}`);
    break;
  case '3':
    var valores = receberValores();
    let resultadoDivisao = parseFloat(valores[0]) / parseFloat(valores[1]);
    console.log(`Resultado da Divisao: ${resultadoDivisao}`);
    break;
  case '4':
    var valores = receberValores();
    let resultadoMult = parseFloat(valores[0]) * parseFloat(valores[1]);
    console.log(`Resultado da Multiplicacao: ${resultadoMult}`);
    break;
  case '5':
    numero1 = readline.question("Insira a base da raiz ");
    raiz();

  case '9': // SAIDA DO PROGRAMA adicao
    console.log("Saindo do programa"); 
    break;
  default:
    console.error('Opcao invalida!');
  }


}

function receberValores() {
  let valor1 = readline.questionFloat('valor 1: \n');
  let valor2 = readline.questionFloat('valor 2: \n');
  
  return [valor1, valor2];

}

function displayInfo() {
  console.log('1. Adicao');
  console.log('2. Subtracao');
  console.log('3. Divisao');
  console.log('4. Mult');
  console.log('5. Raiz');
  
}


function raiz() {
  let resultadoRaiz = Math.sqrt(numero1);
  resultadoRaiz = console.log(`Resultado da Raiz: ${resultadoRaiz}`);

}
