// Beecrowd 1078 - Tabuada

const input = require('./scriptMain');
const number = Number(input);

for (let val = 1; val <= 10; val += 1) {
  console.log(`${val} x ${number} = ${val * number}`);
}
