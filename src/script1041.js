// Beecrowd 1041 - Coordenadas de um Ponto

const input = require('./scriptMain');
const [valueX, valueY] = input.split(' ');

// Q1 --> x > 0 && y > 0
// Q2 --> x < 0 && y > 0
// Q3 --> x < 0 && y < 0
// Q4 --> x > 0 && y < 0
// Origem --> x === 0 && y === 0
// Eixo X --> x > 0 && y === 0
// Eixo Y --> x === 0 && y > 0

const cartesianCoordinates = (valueX, valueY) => {
  const x = parseFloat(valueX);
  const y = parseFloat(valueY);
  let result = '';

  if (x === 0 && y === 0) {
    result = 'Origem';
  } else if (x !== 0 && y === 0) {
    result = 'Eixo X';
  } else if (x === 0 && y !== 0) {
    result = 'Eixo Y';
  } else if (x > 0 && y > 0) {
    result = 'Q1';
  } else if (x < 0 && y > 0) {
    result = 'Q2';
  } else if (x < 0 && y < 0) {
    result = 'Q3';
  } else if (x > 0 && y < 0) {
    result = 'Q4';
  }

  console.log(result);
}

cartesianCoordinates(valueX, valueY);
