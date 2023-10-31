// Beecrowd 1866 - Conta

const input = require('./scriptMain');
const lines = input.split('\n').map((num) => Number(num));

const qt = lines.shift();

for (let i = 1; i <= qt; i += 1) {
  let number = Number(lines.shift());

  if (number % 2 !== 0) {
    console.log(1);
  } else {
    console.log(0);
  }
}
