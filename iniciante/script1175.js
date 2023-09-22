// Beecrowd 1175 - Troca em Vetor I

const input = require( './scriptMain');
const lines = input.split('\n').map((num) => Number(num));

let number = 0;
let arrayOrder = [];

for (let i = 0; i <= 19; i += 1) {
  number = lines.shift();
  arrayOrder.push(number);
}

for (let inicial = 0, final = 19; inicial < 10; inicial += 1, final -= 1) {
  let atual = arrayOrder[inicial];
  arrayOrder[inicial] = arrayOrder[final];
  arrayOrder[final] = atual;
}

for (let i = 0; i < arrayOrder.length; i += 1) {
  console.log(`N[${i}] = ${arrayOrder[i]}`);
}