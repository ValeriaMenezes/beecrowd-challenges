// Beecrowd 1985 - MacPRONALTS

const input = require('./scriptMain');
const lines = input.split('\n');

const qt = Number(lines.shift());

const obj = {
  1001: 1.50,
  1002: 2.50,
  1003: 3.50,
  1004: 4.50,
  1005: 5.50,
};

let result = 0;

for (let i = 1; i <= qt; i += 1) {
  let [number, total] = lines.shift().split(' ').map((num) => Number(num));

  const calc = (obj[number] * total);
  result += calc;
}

console.log(result.toFixed(2));
