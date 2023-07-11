// Beecrowd 1013 - Maior

const input = require('./initialDefault');
const [a, b, c] = input.split(' ').map((item) => parseInt(item));

const biggerAB = (a + b + Math.abs(a - b)) / 2;
const biggerXC = (c + biggerAB + Math.abs(c - biggerAB)) / 2;

console.log(`${biggerXC} eh o maior`);