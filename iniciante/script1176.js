// Beecrowd 1176 - Fibonacci em Vetor

const input = require('./scriptMain');
const lines = input.split('\n').map((num) => Number(num));

const testCases = lines.shift();

let number = 0;
let sum = 0;
let previous = 0; // primeiro
let next = 1; // segundo

for (let i = 0; i < testCases; i += 1) {
  number = lines.shift();

  for (let n = 1; n < number; n += 1) {
    sum = previous + next;
    previous = next;
    next = sum;
  }

  if(number == 1){
    console.log(`Fib(${1}) = ${1}`);
  }
  else{
    console.log(`Fib(${number}) = ${sum}`);
  }

  sum = 0;
  previous = 0;
  next = 1;
}
