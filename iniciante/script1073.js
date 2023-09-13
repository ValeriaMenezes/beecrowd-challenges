// Beecrowd 1073 - Quadrado de Pares

const input = require('./scriptMain');
const number = Number(input);

for (let value = 1; value <= number; value += 1) {
  if (value % 2 === 0) {
    console.log(`${value}^2 = ${Math.pow(value, 2)}`);
  }
}