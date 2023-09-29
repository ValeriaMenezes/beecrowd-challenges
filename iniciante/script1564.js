// Beecrowd 1564 - Vai Ter Copa?

const input = require('./scriptMain');
const lines = input.split('\n').map((num) => Number(num));

for (let i = 0; i < lines.length - 1; i += 1) {
  if (lines[i] === 0) {
    console.log('vai ter copa!');
  } else {
    console.log('vai ter duas!');
  }
}

// let number = lines.shift();

// while(lines.length !== 0) {
//  console.log(number === 0 ? 'vai ter copa!' : 'vai ter duas!');

//   number = lines.shift();
// }