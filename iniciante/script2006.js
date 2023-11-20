// Beecrowd 2006 - Identificando o Chá

const input = require('./scriptMain');
const lines = input.split('\n');

const tea = Number(lines.shift());
const options = lines.shift().split(' ').map((num) => Number(num));
let total = 0;

for (let i = 0; i <= options.length - 1; i += 1) {
  if(options[i] === tea) {
    total += 1;
  }
}

console.log(total);
