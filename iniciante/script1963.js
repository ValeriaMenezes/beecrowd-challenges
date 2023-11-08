// Beecrowd 1963 - O Filme

const input = require('./scriptMain');
const lines = input.split(' ').map((num) => Number(num));

let originalPrice = lines.shift();
let increasePrice = lines.shift();

let calculation = ((increasePrice - originalPrice) / originalPrice ) * 100;

console.log(`${calculation.toFixed(2)}%`);
