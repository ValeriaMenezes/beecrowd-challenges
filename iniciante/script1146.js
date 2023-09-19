// Beecrowd 1146 - Sequências Crescentes

const input = require('./scriptMain');
const lines = input.split('\n').map((num) => Number(num));

for (let number = 0; number <= lines.length - 1; number += 1) {
  let current = lines[number];

  if (current === 0) {
    break;
  }
  
  let allNumbers = '';

  for (let increase = 1; increase <= current; increase += 1) {
    if (increase === current) {
      allNumbers += `${increase}`;
    } else {
      allNumbers += `${increase} `;
    }
  }

  console.log(allNumbers);
}