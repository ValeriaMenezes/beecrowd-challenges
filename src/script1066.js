// Beecrowd 1066 - Pares, Ímpares, Positivos e Negativos

const input = require('./scriptMain');
const numbers = input.split('\n').map((num) => Number(num));

const verifyNumbers = (numbers) => {
  let positive = 0;
  let negative = 0;
  let pair = 0;
  let odd = 0;

  for (let index = 0; index < numbers.length -1; index += 1) {
    let number = numbers[index];

    if (number % 2 === 0) {
      pair += 1;
    } else {
      odd += 1;
    }

    if (number > 0) {
      positive += 1;
    } else if (number < 0) {
      negative += 1;
    }
  }

  const message = `${pair} valor(es) par(es)
${odd} valor(es) impar(es)
${positive} valor(es) positivo(s)
${negative} valor(es) negativo(s)`;

  return message;
}

console.log(verifyNumbers(numbers));

// positivo 
//  -> par ou impar
// negativo
//  -> par ou impar

    // if (number > 0) {
    //   positive += 1;
    //   if (number % 2 === 0) {
    //     pair += 1;
    //   } else {
    //     odd += 1;
    //   }
    // } else {
    //   negative += 1;
    //   if (number % 2 === 0) {
    //     pair += 1;
    //   } else {
    //     odd += 1;
    //   }
    // }