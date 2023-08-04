// Notas e Moedas - Beecrowd 1021

const input = require('./scriptMain');

let valor = parseFloat(input);

const notas = [100, 50, 20, 10, 5, 2];
const moedas = [1, 0.50, 0.25, 0.10, 0.05, 0.01];

console.log('NOTAS:');

for(let nota of notas) {
  let qtdNotas = parseInt(valor / nota);
  console.log(`${qtdNotas} nota(s) de R$ ${nota.toFixed(2)}`);
  valor = valor % nota;
};

console.log('MOEDAS:');

for(let moeda of moedas) {
  let qtdMoedas = parseInt(valor / moeda);
  console.log(`${qtdMoedas} moeda(s) de R$ ${moeda.toFixed(2)}`);
  valor = valor % moeda + 0.00001;
};