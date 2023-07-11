// Beecrowd 1010 - Cálculo Simples

const input = require('./initialDefault');
const lines = input.split('\n');

const [idItem1, qtdItem1, valorItem1] = lines.shift().split(' ');
const [idItem2, qtdItem2, valorItem2] = lines.shift().split(' ');

const totalItem1 = qtdItem1 * valorItem1;
const totalItem2 = qtdItem2 * valorItem2;
const totalItems = totalItem1 + totalItem2;

const message = `VALOR A PAGAR: R$ ${totalItems.toFixed(2)}`;

console.log(message);
