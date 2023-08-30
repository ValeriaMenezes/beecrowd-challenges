// Beecrowd 1099 - Soma de Ímpares Consecutivos II

const input = require('./scriptMain');
const lines = input.split('\n');

const oddSum = (lines) => {
  const n = parseInt(lines.shift());
  
  for (let val = 1; val <= n; val += 1) {
    let numbers = lines.shift().split(' ');
    let x = Number(numbers.shift());
    let y = Number(numbers.shift());
    let sum = 0;
    
    if (x === y) {
      sum = 0;
    } else if (x < y) {
      for (let current = x + 1; current < y; current += 1) {
        if (current % 2 !== 0) {
          sum += current;
        }
      }
    } else if (x > y) {
      for (let current = y + 1; current < x; current += 1) {
        if (current % 2 !== 0) {
          sum += current;
        }
      }
    }
  
    console.log(sum);
  }
};

oddSum(lines);
