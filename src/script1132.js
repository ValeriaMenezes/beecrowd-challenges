// Beecrowd 1132 - Múltiplos de 13

const input = require('./scriptMain');
const [x, y] = input.split('\n').map((num) => Number(num));

let sum = 0;

if (x < y) {
  for (let i = x; i <= y; i += 1) {
    if (i % 13 !== 0) {
      sum += i;
    }
  }

  console.log(sum);
} else if (x > y) {
  for (let i = y; i <= x; i += 1) {
    if (i % 13 !== 0) {
      sum += i;
    }
  }

  console.log(sum);
}
