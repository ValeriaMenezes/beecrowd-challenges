// Beecrowd 1164 - Número Perfeito

const input = require('./scriptMain');
const lines = input.split('\n').map((num) => Number(num));

const testCases = lines.shift();
let number = 0;
let result = '';
let sum = 0;

for (let i = 0; i < testCases; i += 1) {
  sum = 0;
  number = lines.shift();
  for (let j = 0; j < number; j += 1) {
    if (number % j === 0) {
      sum += j;
    } 
  }

  if (sum === number) {
    result = `${number} eh perfeito`;
  } else {
    result = `${number} nao eh perfeito`;
  }

  console.log(result);
}
