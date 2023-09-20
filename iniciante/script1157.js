// Beecrowd 1157 - Divisores I

const input = require('./scriptMain');
const number = Number(input);

for (let i = 1; i <= number; i += 1) {
  if (number % i === 0) {
    console.log(i);
  }
}
