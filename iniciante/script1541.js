// Beecrowd 1541 - Construindo Casas

const input = require('./scriptMain');
const lines = input.split('\n');

let [A, B, C] = lines.shift().split(' ').map((num) => Number(num));

while (A !== 0) {
  console.log(Math.floor(Math.sqrt((A * B * 100) / C)));
  [A, B, C] = lines.shift().split(' ').map((num) => Number(num));
}