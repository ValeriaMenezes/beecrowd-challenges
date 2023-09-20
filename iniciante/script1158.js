// Beecrowd 1158 - Soma de Ímpares Consecutivos III

const input = require('./scriptMain');
const lines = input.split('\n');

const qt = Number(lines.shift());
let x = 0
let y = 0;

for (let i = 0; i < qt; i += 1) {
  let sum = 0;
  let count = 0;
  [x, y] = lines.shift().split(' ').map((num) => Number(num));

  while (count < y) {
    if (x % 2 !== 0) {
      sum += x;
      count += 1;
    }
    x += 1;
  }
  console.log(sum);
}