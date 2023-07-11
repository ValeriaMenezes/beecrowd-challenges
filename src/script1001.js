const input = require('./scriptMain');
const lines = input.split('\n');
// retorna array de string

const A = parseInt(lines.shift());
const B = parseInt(lines.shift());
// shift remove o primeiro elemento de um array e retorna ele

const X = A + B;

const message = `X = ${X}`;
console.log(message);