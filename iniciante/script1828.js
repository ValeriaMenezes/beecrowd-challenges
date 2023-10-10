// Beecrowd 1828 - Bazinga!

const input = require('./scriptMain');
const lines = input.split('\n');

const qt = Number(lines.shift());

const options = {
  pedra: ['lagarto', 'tesoura'],
  papel: ['pedra', 'spock'],
  tesoura: ['papel', 'lagarto'],
  lagarto: ['spock', 'papel'],
  spock: ['tesoura', 'pedra'],
};

for (let i = 1; i < qt; i += 1) {
  let dupla = lines.shift().split(' ');
  let sheldon = dupla[0];
  let raj = dupla[1];

  if (sheldon === raj) console.log(`Caso #${i}: De novo!`);
  else if (options[sheldon].includes(raj)) console.log(`Caso #${i}: Bazinga!`);
  else console.log(`Caso #${i}: Raj trapaceou!`);
}
