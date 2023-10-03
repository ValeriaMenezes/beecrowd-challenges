// Beecrowd 1478 - Matriz Quadrada III

const input = require('./scriptMain');
const lines = input.split('\n').map((num) => Number(num));

let number = lines.shift();

while (number !== 0) {
  let t = Math.pow(4, number - 1);
  t = t.toFixed(0).length;

  for (let line = 0; line < number; line += 1) {
    let matriz = [];

    for (let column = 0; column < number; column += 1) {
      let temp = Math.pow(2, line + column).toFixed(0);
      matriz.push(temp.padStart(t));
    }
    console.log(matriz.join(" "));
  }

  console.log('');
  number = lines.shift();
}
