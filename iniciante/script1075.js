// Beecrowd 1075 - Resto 2

const input = require('./scriptMain');
const number = Number(input);

for (let val = 1; val <= 10000; val += 1) {
  if (val % number === 2) {
    console.log(val);
  }
}