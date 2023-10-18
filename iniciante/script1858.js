// Beecrowd 1858 - A Resposta de Theon

const input = require('./scriptMain');
const lines = input.split('\n');

const N = Number(lines.shift());
const qt = lines.shift().split(' ').map((num) => Number(num));

let smallest = qt[0];
let position = 0;

for (let i = 1; i < qt.length; i += 1) {
  if (qt[i] < smallest) {
    smallest = qt[i];
    position = i + 1;
  }
}

console.log(position);
