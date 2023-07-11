// Beecrowd 1017 - Gasto de combustível

const input = require('./initialDefault');

const [tempoGasto, velocidadeMedia] = input.split('\n');
const distanciaPercorrida = tempoGasto * velocidadeMedia;
const combustivelGasto = distanciaPercorrida / 12;

console.log(combustivelGasto.toFixed(3));