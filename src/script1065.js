// Beecrowd 1065 - Pares entre Cinco Números

const input = require('./scriptMain');
const numbers = input.split('\n').map((num) => Number(num));

console.log('aquii', numbers);

const pairsFiveNumbers = (numbers) => {
  let count = 0;

  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] % 2 === 0) {
      count += 1;
    }
  }

  return `${count} valores pares`;
}

console.log(pairsFiveNumbers(numbers));
