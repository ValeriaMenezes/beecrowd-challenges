// Beecrowd 1071 - Soma de Impares Consecutivos I

const input = require('./scriptMain');
const lines = input.split('\n');

const x = Number(lines.shift());
const y = Number(lines.shift());

const oddSum = (x, y) => {
  let sum = 0;
  
  if (x === y) {
    sum = 0;
  } else if (x < y) {
    for (let value = x + 1; value < y; value += 1) {
      if (value % 2 !== 0) {
        sum += value;
      }
    }
  } else if (x > y) {
    for (let value = y + 1; value < x; value += 1) {
      if (value % 2 !== 0) {
        sum += value;
      }
    }
  }

  return sum;
}

console.log(oddSum(x, y));