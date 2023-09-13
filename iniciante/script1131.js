// Beecrowd 1131 - Grenais

const input = require('./scriptMain');
const lines = input.split('\n');

let [intr, gre] = lines.shift().split(' ');
let i = Number(intr);
let g = Number(gre);
let inter = 0;
let gremio = 0;
let grenais = 0;
let empates = 0;
let resultMessage = '';
let number;

while(true) {
  if (i === g) {
    empates += 1;
  } else if (i > g) {
    inter += 1;
  } else if (i < g) {
    gremio += 1;
  }

  grenais += 1;

  console.log('Novo grenal (1-sim 2-nao)');

  number = Number(lines.shift());

  if (number === 1) {

  } else if (number === 2) {
    break;
  }

  [intr, gre] = lines.shift().split(' ');
  i = Number(intr);
  g = Number(gre);
}

if (inter > gremio) {
  resultMessage = 'Inter venceu mais';
} else if (inter < gremio) {
  resultMessage = 'Gremio venceu mais';
} else {
  resultMessage = 'Nao houve vencedor';
}

console.log(`${grenais} grenais\nInter:${inter}\nGremio:${gremio}\nEmpates:${empates}\n${resultMessage}`);
