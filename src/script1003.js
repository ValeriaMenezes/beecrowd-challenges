// Beecrowd 1003 - Soma Simples

const input = require('./initialDefault');
const lines = input.split('\n');

const A = parseInt(lines.shift());
const B = parseInt(lines.shift());

const soma = A + B;
const message = `SOMA = ${soma}`;

console.log(message);