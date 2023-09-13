// Beecrowd 1133 - Resto da divisão

const input = require('./scriptMain');
const lines = input.split('\n').map((num) => Number(num));

const x = lines.shift();
const y = lines.shift();

if (x < y) {
  for (let i = x + 1; i < y; i += 1) {
    if (i % 5 === 2 || i % 5 === 3) {
      console.log(i);
    }
  }
} else if (x > y) {
  for (let i = y + 1; i < x; i += 1) {
    if (i % 5 === 2 || i % 5 === 3) {
      console.log(i);
    }
  }
}
