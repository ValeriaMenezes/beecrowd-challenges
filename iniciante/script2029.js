// Beecrowd 2029 - Reservatório de Mel

const input = require('./scriptMain');
const lines = input.split('\n').map((num) => Number(num));

for (let i = 0; i < lines.length - 1; i += 2) {
  let volume = lines[i];
  let diametro = lines[i + 1];

  const pi = 3.14;
  const raio = diametro / 2;

  let altura = volume / (pi * Math.pow(raio, 2));
  let area = pi * Math.pow(raio, 2);

  console.log(`ALTURA = ${altura.toFixed(2)}`);
  console.log(`AREA = ${area.toFixed(2)}`);
}