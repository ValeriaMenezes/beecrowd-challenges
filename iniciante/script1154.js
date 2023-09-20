// Beecrowd 1154 - Idades

const input = require('./scriptMain');
const lines = input.split('\n').map((num) => Number(num));

let sum = 0;
// let count = 0;
let result = 0;

for (let i = 0; i <= lines.length -1; i += 1) {
  const age = lines[i];
  if (age < 0) {
    break;
  } else {
    sum += age;
    // count += 1;
    result = (sum / (i + 1)).toFixed(2);
  }
}
console.log(result);
