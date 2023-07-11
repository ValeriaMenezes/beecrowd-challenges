// Beecrowd 1006 - Média 2

const input = require('./scriptMain');
const lines = input.split('\n');

const notaA = parseFloat(lines.shift() * 2);
const notaB = parseFloat(lines.shift() * 3);
const notaC = parseFloat(lines.shift() * 5);

const media = (notaA + notaB + notaC) / 10;
const message = `MEDIA = ${media.toFixed(1)}`;

console.log(message);