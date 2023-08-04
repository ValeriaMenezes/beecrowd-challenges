// Idade em dias - Beecrowd 1020

const input = require('./scriptMain');

let qtDays = parseInt(input);

const values = [365, 30, 1];
const result = [];

for (let value of values) {
  result.push(parseInt(qtDays / value));
  qtDays = qtDays % value;
}

const [ano, mes, dia] = result;

const formatMessage = `${ano} ano(s)
${mes} mes(es)
${dia} dia(s)`;

console.log(formatMessage);
