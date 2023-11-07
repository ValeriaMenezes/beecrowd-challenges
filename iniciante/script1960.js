// Beecrowd 1960 - Numeração Romana para Números de Página

const input = require('./scriptMain');
let number = Number(input);

const romans = {
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1,
};

let result = '';
const symbols = Object.keys(romans);
console.log(symbols);

  for (let symbol of symbols) {
  while (number >= romans[symbol]) {
    console.log(romans[symbol]);
    result += symbol;
    number -= romans[symbol];
  }
}

console.log(result);
