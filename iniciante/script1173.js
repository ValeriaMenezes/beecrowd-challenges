// Beecrowd 1173 - Preenchimento de Vetor I

const input = require('./scriptMain');
let valor = Number(input);
console.log(`N[0] = ${valor}`);

for (let i = 1; i < 10; i += 1) {
  console.log(`N[${i}] = ${valor *= 2}`);
}

// for (let i = 1; i < 10; i++) {
//   valor.push(valor[i - 1] * 2);
//   console.log(`N[${i}] = ${valor[i]}`);
// }