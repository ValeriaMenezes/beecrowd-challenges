// Beecrown 1005 - Média 1

const input = require('./initialDefault');
const lines = input.split('\n');

const notaA = parseFloat(lines.shift() * 3.5);
const notaB = parseFloat(lines.shift() * 7.5);
const media = (notaA + notaB) / 11;
const message = `MEDIA = ${media.toFixed(5)}`;
console.log(message);
