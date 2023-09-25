// Beecrowd 1180 - Menor e Posição

const input = require('./scriptMain');
const lines = input.split('\n');

// const size = Number(lines.shift());
const arrayNumbers = lines.shift().split(' ').map((num) => Number(num));
// let current = 0;
// let smaller = 0;
// let position = 0;

// for (let i = 0; i < size; i += 1) {
//   current = arrayNumbers[i];

//   if (i === 0) {
//     smaller = current;
//     position = i;
//   } else if (current < smaller) {
//     smaller = current;
//     position = i;
//   }
// }

// console.log(`Menor valor: ${smaller}\nPosicao: ${position}`);

const min = Math.min(...arrayNumbers);
const position = arrayNumbers.indexOf(Math.min(...arrayNumbers));
console.log(`Menor valor: ${min}\nPosicao: ${position}`);
