//  Beecrowd 1113 - Crescente e Decrescente

const input = require('./scriptMain');
const lines = input.split('\n');

// console.log(lines);

let [numberX, numberY] = lines.shift().split(' ');
let x = Number(numberX);
let y = Number(numberY);

// console.log(x, y);

while(x !== y) {
  if (x > y) {
    console.log('Decrescente');
  } else if (x < y) {
    console.log('Crescente');
  } else if (x === y) {
    return;
  }

  [numberX, numberY] = lines.shift().split(' ');
  x = parseInt(numberX);
  y = parseInt(numberY);
}