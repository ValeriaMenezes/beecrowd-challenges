// Beecrowd 1072 - Intervalo 2

const input = require('./scriptMain');
const lines = input.split('\n').map((num) => Number(num));

lines.shift();

let inside = 0;
let out = 0;

for (let index = 0; index < lines.length -1; index += 1) {
  if (lines[index] >= 10 && lines[index] <= 20) {
    inside += 1;
  } else {
    out += 1;
  }
}

console.log(`${inside} in\n${out} out`);
