const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


var recursiveAsyncReadLine = () => {
  rl.question("Selecione o que vai ser feito:\n"
    + "1) Adição\n"
    + "2) Subtração\n"
    + "3) Exit\n"
    + "Opção: "
    , function (opcao) {

      switch (opcao) {
        case "1":
          console.log("Resultado da adição: ");
          break;
        case "3":
          rl.close();
          break;
        default:
          console.log("Opção inválida\n");
      }
      recursiveAsyncReadLine();
    });
};

recursiveAsyncReadLine();