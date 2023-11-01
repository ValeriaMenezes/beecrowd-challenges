// Beecrowd 1929 - Triângulo

const input = require('./scriptMain');
const values = input.split(' ').map((num) => Number(num));

const sortedValues = values.sort((a, b) => a - b);
const [a, b, c, d] = sortedValues;

if (
    (Math.abs(a - b) < c && c < a + b) ||
    (Math.abs(a - b) < d && d < a + b) ||
    (Math.abs(a - c) < d && d < a + b) ||
    (Math.abs(b - c) < d && d < b + c)
   ) {
    console.log('S');
} else {
  console.log('N');
}

// (a > (b - c) && a < (b + c)) || (b > (a - c) && b < (a + c)) || (c > (a - b) && c < (a + b))