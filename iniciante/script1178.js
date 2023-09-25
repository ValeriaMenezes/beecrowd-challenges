// Beecrowd 1178 - Preenchimento de Vetor III

const input = require('./scriptMain');
let x = Number(input);

console.log(`N[0] = ${(x).toFixed(4)}`);

let n = 1;
x /= 2;

while (n <= 99) {
  for (let i = x; i > 0; i /= 2) {
    if (n > 99) break;
    
    console.log(`N[${n}] = ${(i).toFixed(4)}`);
    n += 1; 
  }
}

// outra solução, mas ambas não passam no beecrowd
// for (let i = 1; i <= 99; i += 1) {
//   x = x / 2;
//   console.log(`N[${i}] = ${parseFloat(x).toFixed(4)}`);
// }