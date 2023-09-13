// Beecrowd 1037 - Intervalo

const input = require('./scriptMain');
const value = Number(input);

let resultado = '';

if (value >= 0 && value <= 25) {
  resultado = 'Intervalo [0,25]';
} else if (value >= 25  && value <= 50) {
  resultado = 'Intervalo (25,50]';
} else if (value >= 50  && value <= 75) {
  resultado = 'Intervalo (50,75]';
} else if (value >= 75  && value <= 100) {
  resultado = 'Intervalo (75,100]';
} else {
  resultado = 'Fora de intervalo';
}

console.log(resultado);