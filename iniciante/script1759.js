// Beecrowd 1759 - Ho Ho Ho

const input = require('./scriptMain');
const number = Number(input);

let result = '';

for (let ho = 1; ho <= number; ho += 1) {
  if (ho === number) {
    result += 'Ho!';
  } else {
    result += 'Ho ';
  }
}

console.log(result);