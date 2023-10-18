// Beecrowd 1864 - Nossos Dias Nunca Voltarão

const input = require('./scriptMain');
const number = Number(input);

const frase = 'LIFE IS NOT A PROBLEM TO BE SOLVED';
let result = '';

for (let i = 0; i < number; i += 1) {
  result += frase[i];
}

console.log(result);