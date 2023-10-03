// Beecrowd 1435 - Matriz Quadrada I

const input = require('./scriptMain');
const lines = input.split('\n').map((num) => Number(num));

let number = lines.shift();
let matrizColumn = [];
let matrizLine = [];
while (number !== 0) {
  matrizLine = new Array(number);
  for (let line = 0; line < number / 2; line += 1) {
    matrizColumn = new Array(number);
    for (let column = 0; column < number / 2; column += 1) {
      const value = Math.min(line, column) + 1;
      matrizColumn[column] = value < 10 ? ` ${value}` : `${value}`; 
      matrizColumn[number - 1 - column] = matrizColumn[column];
    }
    matrizLine[line] = ` ${matrizColumn.join('  ')}`;
    matrizLine[number - 1 - line] = matrizLine[line];
  }
  console.log(`${matrizLine.join('\n')}`);

  number = lines.shift();
  console.log('');
}
