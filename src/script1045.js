// Beecrowd 1045 - Tipos de Triângulos

const input = require('./scriptMain');
const values = input.split(' ').map((num) => parseFloat(num));

const descendingOrder = (valuesArray) => {

  for (let extIndex = 0; extIndex < valuesArray.length; extIndex += 1) {
    for (let intIndex = 0; intIndex < valuesArray.length - 1 - extIndex; intIndex += 1) {
      if (valuesArray[intIndex] < valuesArray[intIndex + 1]) {
        let temp = valuesArray[intIndex];
        valuesArray[intIndex] = valuesArray[intIndex + 1];
        valuesArray[intIndex + 1] = temp;
      }
    }
  }
  return valuesArray;
};

const typesTriangles = (values) => {
  const [A, B, C] = descendingOrder(values);
  const types = [];

  if (A >= (B + C)) {
    types.push('NAO FORMA TRIANGULO');
  } else if (Math.pow(A, 2) === (Math.pow(B, 2) + Math.pow(C, 2))) {
    types.push('TRIANGULO RETANGULO');
  } else if (Math.pow(A, 2) > (Math.pow(B, 2) + Math.pow(C, 2))) {
    types.push('TRIANGULO OBTUSANGULO');
  } else if (Math.pow(A, 2) < (Math.pow(B, 2) + Math.pow(C, 2))) {
    types.push('TRIANGULO ACUTANGULO');
  }

  if (A === B && B === C) {
    types.push('TRIANGULO EQUILATERO');
  } else if (A === B || B === C || C === A) {
    types.push('TRIANGULO ISOSCELES');
  }

  return types.join('\n');
};

console.log(typesTriangles(values));