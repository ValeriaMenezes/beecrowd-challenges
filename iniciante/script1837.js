// Beecrowd 1837 - Prefácio

const input = require('./scriptMain');
const values = input.split(' ');

const [a, b] = values.map((num) => Number(num));

let resto = parseInt(a % b);

if(resto < 0) {
  resto += Math.abs(b);
}

let quociente = (a - resto) / b;

console.log(`${quociente} ${resto}`);
