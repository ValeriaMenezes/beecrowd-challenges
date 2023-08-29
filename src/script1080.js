// Beecrowd 1080 - Maior e Posição

const input = require('./scriptMain');
const lines = input.split('\n').map((num) => Number(num));

let bigger = 0;
let position = 0;

for (let i = 0; i <= lines.length; i += 1) {
  if (lines[i] > bigger) {
    bigger = lines[i];
    position = i + 1;
  }
}

console.log(`${bigger}\n${position}`);
