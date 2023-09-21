// Beecrowd 1165 - Número Primo

const input = require('./scriptMain');
const lines = input.split('\n').map((num) => Number(num));

const testCases = lines.shift();
let number = 0;
let count = 0;
let result = '';

// um Número Primo é aquele que pode ser dividido somente por 1 (um) e por ele mesmo
for (let i = 0; i < testCases; i += 1) {
  number = lines.shift();

  count = 0;

  for (let divisor = 1; divisor < number; divisor += 1) {
    if (number % divisor === 0) {
      count += divisor;
    } 
  }

  if (count === 1) {
    result = `${number} eh primo`;
  } else {
    result = `${number} nao eh primo`;
  }

  console.log(result);
}
