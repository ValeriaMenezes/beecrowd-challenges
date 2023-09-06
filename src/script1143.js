// Beecrowd 1143 - Quadrado e ao Cubo

const input = require('./scriptMain');
const value = Number(input);

for (let i = 1; i <= value; i += 1) {
  console.log(`${i} ${Math.pow(i, 2)} ${Math.pow(i, 3)}`);
}