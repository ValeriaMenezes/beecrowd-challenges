// Beecrowd 1172 - Substituição em Vetor I

const input = require('./scriptMain');
const lines = input.split('\n').map((num) => Number(num));

for (let i = 0; i < 10; i += 1) {
  let number = lines[i];
  
  if (number <= 0) {
    number = 1;
  }

  console.log(`X[${i}] = ${number}`);
}
