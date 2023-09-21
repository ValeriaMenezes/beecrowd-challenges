// Beecrowd 1160 - Crescimento Populacional

const input = require('./scriptMain');
const lines = input.split('\n');

const testCases = parseInt(lines.shift());
let years = 0;
let currentGrowthA = 0;
let currentGrowthB = 0;
let pa = 0;
let pb = 0;
let g1 = 0;
let g2 = 0;
let result = '';

for (let i = 0; i < testCases; i += 1) {
  [pa, pb, g1, g2] = lines.shift().split(' ').map((num) => Number(num));
  currentGrowthA = 0;
  currentGrowthB = 0;
  years = 0;
  result = 'Mais de 1 seculo.';

  while (years < 101) { // se pa não alcançar pb em até 100 anos, não precisa ir até o fim da contagem, apenas imprimir a mensagem
    years += 1;
    currentGrowthA = Math.floor(pa * (g1 / 100));
    currentGrowthB = Math.floor(pb * (g2 / 100));
    pa += currentGrowthA;
    pb += currentGrowthB;

    if (pa > pb) { 
      result = `${years} anos.`;
      break; // se pa alcançar pb em até 100 anos interrompemos o loop
    }
  }
  console.log(result);
}
