// Beecrowd 1179 - Preenchimento de Vetor IV

const input = require('./scriptMain');
const numbers = input.split('\n').map((num) => Number(num));

let pares = [];
let impares = [];

const imprimeResultado = (arrayParOuImpar, stringParOuImpar) => {
  arrayParOuImpar.forEach((num, i) => {
    console.log(`${stringParOuImpar}[${i}] = ${num}`);
  });
};

// arrayParOuImpar.forEach((num, i) => {
//   if (num % 2 === 0) {
//     console.log(`par[${i}] = ${num}`);
//   } else if (num % 2 !== 0) {
//     console.log(`impar[${i}] = ${num}`);
//   }
// })

for (let i = 0; i < 15; i += 1) {
  let number = numbers.shift();
  if (number % 2 === 0) {
    pares.push(number);
  } else {
    impares.push(number);
  }

  if (impares.length === 5) {
    imprimeResultado(impares, 'impar');
    impares = [];
  } else if (pares.length === 5) {
    imprimeResultado(pares, 'par');
    pares = [];
  }
}


imprimeResultado(impares, 'impar');
imprimeResultado(pares, 'par');
