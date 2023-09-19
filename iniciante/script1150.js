// Beecrowd 1150 - Ultrapassando Z

const input = require('./scriptMain');
const lines = input.split('\n').map((num) => Number(num));

let x = lines.shift();
let z = lines.shift();
let counter = x;
let qt = 1;

while(true) {
  if (z <= x) {
    z = lines.shift();
  } else {
    break;
  }
}

while (x <= z) {
  counter += 1;
  x += counter;
  qt += 1;
}

console.log(qt);
