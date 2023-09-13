// Beecrowd 1144 - Sequência Lógica

const input = require('./scriptMain');
const size = Number(input);

for (let i = 1; i <= size; i += 1) {
  console.log(`${i} ${Math.pow(i, 2)} ${Math.pow(i, 3)}`);
  console.log(`${i} ${Math.pow(i, 2) + 1} ${Math.pow(i, 3) + 1}`);
}
