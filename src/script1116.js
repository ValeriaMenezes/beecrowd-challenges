// Beecrowd 1116 - Dividindo X por Y

const input = require('./scriptMain');
const lines = input.split('\n');

const qtTestes = Number(lines.shift());

for (let i = 0; i < qtTestes; i += 1) {
  const [numberX, numberY] = lines.shift().split(' ');
  let dividendoX = Number(numberX);
  let divisorY = Number(numberY);

  if (divisorY === 0) {
    console.log('divisao impossivel');
  } else {
    console.log((dividendoX / divisorY).toFixed(1));
  }
}