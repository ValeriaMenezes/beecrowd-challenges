// Beecrowd 1009 - Salário com bônus

const input = require('./initialDefault');
const lines = input.split('\n');

const name = lines.shift();
const fixedSalary = parseFloat(lines.shift());
const sales = parseFloat(lines.shift());
const bonus = sales * 0.15;
const salaryTotal = fixedSalary + bonus;
const message = `TOTAL = R$ ${salaryTotal.toFixed(2)}`;

console.log(message);