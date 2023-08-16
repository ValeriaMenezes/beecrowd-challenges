// Beecrowd 1064 - Positivos e Média

const input = require('./scriptMain');
const values = input.split('\n').map((num) => Number(num));

const positiveNumbers = (arrayValues) => {
  let count = 0;
  let sum = 0;

  for (let index = 0; index <= arrayValues.length; index += 1) {
    if (arrayValues[index] > 0) {
      count += 1;
      sum += arrayValues[index];
    }
  }
  const average = sum / count;

  return `${count} valores positivos\n${average.toFixed(1)}`;
}

console.log(positiveNumbers(values));