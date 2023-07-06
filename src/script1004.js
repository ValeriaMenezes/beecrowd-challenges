// Beecrowd 1004 - Produto Simples

const input = require('./initialDefault');
const lines = input.split('\n');

const A = parseInt(lines.shift());
const B = parseInt(lines.shift());
const prod = parseInt(A * B);
console.log(`PROD = ${prod}`);
