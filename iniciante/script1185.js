// Beecrowd 1185 - Acima da Diagonal Secundária

const input = require('./scriptMain');
const lines = input.split('\n');

const letter = lines.shift();

let count = 0;
let sum = 0;

for (let l = 11; l >= 0; l -= 1) {
  for (let c = 0; c < 12; c += 1) {
    const value = parseFloat(lines[12 * l + c]);
    if (c < (11 - l)) { // só está acima da diagonal secundária os números cuja coluna é menor que a linha menos 11
      count += 1;
      sum += value;
    }
  }
}

const result = letter.toUpperCase() === 'S' ? sum.toFixed(1) : (sum / count).toFixed(1);
console.log(result);
