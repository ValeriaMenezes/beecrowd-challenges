// Beecrowd 1848 - Corvo Contador

const input = require('./scriptMain');
const lines = input.split('\n');

let count = 0;
let result = 0;

while (count !== 3) {
  let value = lines.shift();
  let regex = /caw/i;

  if (regex.test(value)) {
    console.log(result);
    result = 0;
    count += 1;
  } else {
    let binary = '';
    for (let i = 0; i < value.length; i += 1) {
      if (value[i] === '*') {
        binary += 1;
      } else {
        binary += 0;
      }
    }

    let number = parseInt(binary, 2);
    result += number;
  }
}
