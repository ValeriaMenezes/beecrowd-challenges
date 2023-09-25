// Beecrowd 1177 - Preenchimento de Vetor II

const input = require('./scriptMain');
const t = Number(input);

let n = 0;

// maneira errada: como não está sendo feito nenhuma verificação, quando n chega em 999 o loop while é interrompido,
// mas o loop for continua, aumentando n até 1001

// while (n <= 999) {
//   for (let i = 0; i < t ; i += 1) {
//     console.log(`N[${n}] = ${i}`);
//     n += 1; 
//   }
// }

while (n <= 999) {
  for (let i = 0; i < t; i += 1) {
    if (n > 999) { 
      break;
    }

    console.log(`N[${n}] = ${i}`);
    n += 1; 
  }
}