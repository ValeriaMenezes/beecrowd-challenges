// Beecrowd 1159 - Soma de Pares Consecutivos

const input = require('./scriptMain');
const lines = input.split('\n').map((num) => Number(num));

let x = lines.shift();

// while (true) {
//   let sum = 0;

//   if (x <= 0) {
//     break;
//   }

//   if (x % 2 !== 0) {
//     x += 1;
//   }

//   for (let i = 0; i < 5; i += 1) {
//     sum += x + (i * 2);
//   }

//   console.log(sum);
//   x = lines.shift();
// }

while (x !== 0) {
  let sum = 0;
  let count = 0;

  while (count < 5) {
    if (x % 2 === 0) {
      sum += x;
      count += 1;
    }

    x += 1;
  }

  console.log(sum);
  x = lines.shift();
}
