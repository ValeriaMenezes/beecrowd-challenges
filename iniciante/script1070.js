// Beecrowd 1070- Seis Números Ímpares

const input = require('./scriptMain');
let number = Number(input);

if (number % 2 === 0) {
  number += 1; // se for par, somamos com 1 para se tornar ímpar
  // console.log(number);
  for (let value = 0; value < 6; value += 1) {
    // a cada uma das seis iterações somamos com 2 para sempre termos ímpares
    console.log(number);
    number += 2;
  }
} else if (number % 2 !== 0) {
    for (let value = 0; value < 6; value += 1) {
      console.log(number);
      number += 2;
  }
}
