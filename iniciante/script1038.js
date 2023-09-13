// Beecrowd 1038 - Lanche

const input = require('./scriptMain');
const values = input.split(' ');

const itemCode = Number(values.shift());
const itemQt = Number(values.shift());
let result = 0;

if (itemCode === 1) {
  result = itemQt * 4;
} else if (itemCode === 2) {
  result = itemQt * 4.5;
} else if (itemCode === 3) {
  result = itemQt * 5;
} else if (itemCode === 4) {
  result = itemQt * 2;
} else if (itemCode === 5) {
  result = itemQt * 1.5;
}

const total = `Total: R$ ${result.toFixed(2)}`;

console.log(total);