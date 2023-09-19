// Beecrowd 1153 - Fatorial Simples

const input = require('./scriptMain');
const number = Number(input);

if (number === 0 || number === 1) {
   console.log(1);
} else {
  let fatorial = 1;
  for (let i = 1; i <= number; i += 1) { // 5
    fatorial *= i; // 24
  }
  console.log(fatorial);
}
