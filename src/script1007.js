// Beecrowd 1007 - Diferença

const input = require('./scriptMain');
const lines = input.split('\n');

const A = parseInt(lines.shift());
const B = parseInt(lines.shift());
const C = parseInt(lines.shift());
const D = parseInt(lines.shift());

const diferenca = (A * B) - (C * D);
const message = `DIFERENCA = ${diferenca}`;
console.log(message);
