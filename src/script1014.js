// Beecrowd 1014 - Consumo

const input = require('./initialDefault');
const lines = input.split('\n');

const totalKm = parseInt(lines.shift());
const combustivel = parseFloat(lines.shift());
const consumo = totalKm / combustivel;
const message = `${consumo.toFixed(3)} km/l`;

console.log(message);