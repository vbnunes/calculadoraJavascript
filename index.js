const readline = require('readline-sync');

while (true) {
  displayInfo()
  let option = readline.question('Option: ');

  console.log(`Selected operation: ${option}`);

  
// validando se input é número
  if (isNaN(option)) {   
    console.error('please input a number');
    continue;
  }
  
// opções com apenas 1 input têm função diferente
  if (option === '5') {
    var value = sqrtInput(); 
  }

  else {
    var values = getInput();
  }

  switch(option) {
    case '1': 
      let addition = parseFloat(values[0]) + parseFloat(values[1]);
      console.log(`Result: ${addition}`);
    break;

    case '2':
      let subtraction = parseFloat(values[0]) - parseFloat(values[1]);
      console.log(`Result: ${subtraction}`);
    break;

    case '3':
      let multiplication = parseFloat(values[0]) * parseFloat(values[1]);
      console.log(`Result: ${multiplication}`);
    break;

    case '4':
      let division = parseFloat(values[0]) / parseFloat(values[1]);
      console.log(`Result: ${division}`);
    break;

    case '5':
      let sqrt = Math.sqrt(value);
      console.log(`Result: ${sqrt}`);
    break;

    
    default:
      console.error('Please select a valid operation');
  }
}

function getInputs() {
  let value1 = readline.questionFloat('value 1: \n');
  let value2 = readline.questionFloat('value 2: \n');
  
  return [value1, value2];
}

function sqrtInput() {
  let sqrtValue = readline.questionFloat('sqrt value: \n');
  return sqrtValue;
}

function displayInfo() {
  console.log('Select an operation:')
  console.log('1. Addition');
  console.log('2. Subtraction');
  console.log('3. Multiplication');
  console.log('4. Division');
  console.log('5. Square root');

}