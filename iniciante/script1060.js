// Beecrowd 1060 - Números Positivos

const input = require('./scriptMain');
const values = input.split('\n').map((num) => Number(num));

const positiveNumbers = (arrayValues) => {
  let count = 0;

  for (let index = 0; index <= arrayValues.length; index += 1) {
    if (arrayValues[index] > 0) {
      count += 1;
    }
  }

  return `${count} valores positivos`;
}

console.log(positiveNumbers(values));
