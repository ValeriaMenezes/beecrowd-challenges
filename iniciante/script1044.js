// Beecrowd 1044 - Múltiplos

const input = require('./scriptMain');
const [a, b] = input.split(' ').map((num) => Number(num));

const multiples = (a, b) => {
  let result;
  if (a % b === 0 || b % a === 0){
    result = 'Sao Multiplos';
  } else {
    result = 'Nao sao Multiplos';
  }

  return result;
};

console.log(multiples(a, b));
