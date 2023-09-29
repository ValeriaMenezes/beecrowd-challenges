// Beecrowd 1589 - Bob Conduite

const input = require('./scriptMain');
const lines = input.split('\n');

const testCases = lines.shift();
let sum = 0;

for (let i = 1; i <= testCases; i += 1) {
  let [r1, r2] = lines.shift().split(' ').map((num) => Number(num));
  sum = r1 + r2;
  console.log(sum);
}
