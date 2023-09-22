// Beecrowd 1174 - Seleçao em Vetor I

const input = require('./scriptMain');
const lines = input.split('\n').map((num) => Number(num));
let number = 0;

for (let i = 0; i < 100; i += 1) {
  number = lines.shift();

  if (number <= 10) {
    console.log(`A[${i}] = ${number.toFixed(1)}`);
  }
}