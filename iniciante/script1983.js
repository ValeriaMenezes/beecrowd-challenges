// Beecrowd 1983 - O Escolhido

const input = require('./scriptMain');
const lines = input.split('\n');

const qt = Number(lines.shift());
let bigger = 0;
let chosen = 0;

for (let i = 1; i <= qt; i += 1) {
  let [registration, note] = lines.shift().split(' ').map((num) => Number(num));
  
  if (note > bigger) {
    bigger = note;
    chosen = registration;
  }
}

if (bigger >= 8) {
  console.log(chosen);
} else {
  console.log('Minimum note not reached');
}