// Beecrowd 1008 - Salário

const input = require('./initialDefault');
const lines = input.split('\n');

const number = parseInt(lines.shift());
const totalHours = parseInt(lines.shift());
const value = parseFloat(lines.shift());
const salary = totalHours * value;

const message = `NUMBER = ${number}
SALARY = U$ ${salary.toFixed(2)}`;

console.log(message);
