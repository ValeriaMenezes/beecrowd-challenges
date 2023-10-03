// Beecrowd 1478 - Matriz Quadrada II

const input = require('./scriptMain');
const lines = input.split('\n').map((num) => Number(num));

let number = lines.shift();

while (number !== 0) {
  for (let line = 0; line < number; line += 1) {
    let matriz = [];

    for (let column = 0; column < number; column += 1) {
      let temp = (1 + Math.abs(line - column)).toFixed(0);
      matriz.push(temp.padStart(3));
    }
    console.log(matriz.join(" "));
  }

  console.log('');
  number = lines.shift();
}
