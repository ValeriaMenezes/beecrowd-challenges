// Beecrowd 1182 - Coluna na Matriz

const input = require('./scriptMain');
const lines = input.split('\n');

const column = Number(lines.shift());
const letter = lines.shift();
let count = 0;
let sum = 0;

for (let l = 0; l < 12; l += 1) {
  for (let c = 0; c < 12; c += 1) {
    const value = parseFloat(lines.shift());
    if (c === column) {
      count += 1;
      sum += value;
    }
  }
}

const result = letter.toUpperCase() === 'S' ? sum.toFixed(1) : (sum / count).toFixed(1);
console.log(result);
