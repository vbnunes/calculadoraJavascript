const readline = require('readline-sync');

let option = 1
let values = []
let value = 4

while (option != 9) {
  displayInfo()
  option = readline.question('Option: ');

  console.log(`Selected operation: ${option}`);

  // validando se input é número
  if (isNaN(option)) {
    console.error('Please input a number');
    continue;
  }
   
  switch(option) {
    case '1':
      multiInputs();
      console.log(`Result: ${addition()}`);
      break;

    case '2':
      multiInputs();
      console.log(`Result: ${subtraction()}`);      
      break;

    case '3':
      multiInputs();
      console.log(`Result: ${multiplication()}`);
      break;

    case '4':
      multiInputs();
      console.log(`Result: ${division()}`);
      break;

    case '5':
      singleInput();
      console.log(`Result: ${sqrt()}`);
      break;

    case '9':
      console.log('Terminating...');
      break;
    
    default:
      console.error('Please select a valid operation');
  }
}

function multiInputs() {
  let value1 = readline.questionFloat('Input value 1: \n');
  let value2 = readline.questionFloat('Input value 2: \n');
  values = [value1, value2];
  
  return values;
}

function singleInput() {
  value = readline.questionFloat('Input value: \n');
  return value;
}

function displayInfo() {
  console.log('Select an operation:')
  console.log('1. Addition');
  console.log('2. Subtraction');
  console.log('3. Multiplication');
  console.log('4. Division');
  console.log('5. Square root');

}

function addition() {
  return parseFloat(values[0]) + parseFloat(values[1]);
}

function subtraction() {
  return parseFloat(values[0]) - parseFloat(values[1]);
}

function multiplication() {
  return parseFloat(values[0]) * parseFloat(values[1]);
}

function division() {
  return parseFloat(values[0]) / parseFloat(values[1]);
}

function sqrt() {
  return Math.sqrt(value);
}
