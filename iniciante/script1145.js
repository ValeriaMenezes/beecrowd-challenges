// Beecrowd 1145 - Sequência Lógica 2

const input = require('./scriptMain');
const lines = input.split(' ').map((num) => Number(num));

const size = lines.shift();
const max = lines.shift();

let numbers = [];

for (let number = 1; number <= max; number += 1) {
  numbers.push(number);

  if (numbers.length >= size || number >= max) {
    console.log(numbers.join(' '));
    numbers = [];
  }
}