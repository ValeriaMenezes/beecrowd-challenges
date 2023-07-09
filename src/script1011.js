// Beecrowd 1011 - Esfera

const input = require('./initialDefault');

const raio = Math.pow(input, 3);
const PI = 3.14159;
const volume = (4/3) * PI * raio;
const message = `VOLUME = ${volume.toFixed(3)}`

console.log(message);