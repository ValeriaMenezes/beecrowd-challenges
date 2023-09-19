// Beecrowd 1151 - Fibonacci Fácil

const input = require('./scriptMain');
const number = Number(input);

// 0 1 1 2 3 5 8 13 21

// let sum = 0;
// let previous = 0; // primeiro
// let next = 1; // segundo
// let result = '';

// for (let i = 0; i < number; i += 1) {
//   if (i === 0 || i === 1) {
//     result += `${i} `;
//   } else {
//       sum = previous + next;
//       previous = next;
//       next = sum;

//       if (i === 2) {
//         result += `${sum}`;
//       } else {
//         result += ` ${sum}`;
//       }
//   }
// }

// console.log(result);

let fibonacciSequence = [];

for (let i = 0; i < number; i += 1) {
  if (i === 0) {
    fibonacciSequence.push(0);
  } else if (i === 1) {
    fibonacciSequence.push(1);
  } else {
    const result = fibonacciSequence[i - 1] + fibonacciSequence[i - 2];
    fibonacciSequence.push(result);
  }
}

console.log(fibonacciSequence.join(' '));
