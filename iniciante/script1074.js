// Beecrowd 1070 - Par ou Ímpar

const input = require('./scriptMain');
const lines = input.split('\n').map((num) => Number(num));

const n = lines.shift(); // remove primeiro elemento do array que corresponde a quantidade restante

for (let index = 1; index <= n; index += 1) {
  let number = lines.shift();
  if (number === 0) {
    console.log('NULL');
  } else if (number > 0 && number % 2 === 0) {
    // positivo e par 
    console.log('EVEN POSITIVE');
  } else if (number < 0 && number % 2 === 0) {
    // negativo e par
    console.log('EVEN NEGATIVE');
  } else if (number > 0 && number % 2 !== 0) {
    // positivo e impar
    console.log('ODD POSITIVE');
  } else if (number < 0 && number % 2 !== 0) {
    // negativo e impar
    console.log('ODD NEGATIVE');
  }
}
