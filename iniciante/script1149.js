// Beecrowd 1149 - Somando Inteiros Consecutivos

const input = require('./scriptMain');
const line = input.split(' ').map((num) => Number(num));

const a = line.shift(); // 3
const n = line.pop(); // 2
let sum = 0;

for (let i = 0; i <= n - 1; i += 1) {
  sum += a + i;
}

console.log(sum);
