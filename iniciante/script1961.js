// Beecrowd 1961 - Pula Sapo

const input = require('./scriptMain');
const lines = input.split('\n');

const [jumpHeight, numberPipes] = lines.shift().split(' ').map((num) => Number(num));
const pipeHeight = lines.shift().split(' ').map((num) => Number(num));
let counter = 0;

for (let i = 0; i < numberPipes - 1; i += 1) {
  if (Math.abs(pipeHeight[i] - pipeHeight[i + 1]) <= jumpHeight) {
    counter += 1;
  }
}

if (counter === numberPipes - 1) {
  console.log('YOU WIN');
} else {
  console.log('GAME OVER');
}
