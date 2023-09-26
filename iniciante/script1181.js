// Beecrowd 1181 - Linha na Matriz

const input = require('./scriptMain');
const lines = input.split('\n');

const line = Number(lines.shift());
const letter = lines.shift();
let count = 0;
let sum = 0;

// const mtz = [];
// for (let o = 0; o < 144; o +=1) {
//   mtz.push(o);
// }

// console.log(mtz);

for (let l = 0; l < 12; l += 1) {
  for (let c = 0; c < 12; c += 1) {
    const value = parseFloat(lines.shift());
    if (l === line) {
      // console.log(value);
      count += 1;
      sum += value;
    }
  }
}

const result = letter.toUpperCase() === 'S' ? sum.toFixed(1) : (sum / count).toFixed(1);
console.log(result);
