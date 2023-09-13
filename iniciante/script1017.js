// Beecrowd 1017 - Gasto de combustível

const input = require('./scriptMain');

const [tempoGasto, velocidadeMedia] = input.split('\n');
const distanciaPercorrida = tempoGasto * velocidadeMedia;
const combustivelGasto = distanciaPercorrida / 12;

console.log(combustivelGasto.toFixed(3));