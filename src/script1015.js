// Beecrowd 1015 - Distância entre dois pontos

const input = require('./initialDefault');
const lines = input.split('\n');

const [x1, y1] = lines.shift().split(' ');
const [x2, y2] = lines.shift().split(' ');
const distancia = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2)).toFixed(4);

console.log(distancia);