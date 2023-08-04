// Conversão de tempo - Beecrowd 1019

const input = require('./scriptMain');

let qtSeconds = parseInt(input);

const values = [3600, 60, 1];
const result = [];

for (let value of values) {
  result.push(parseInt(qtSeconds / value));
  qtSeconds = qtSeconds % value;
}

console.log(result.join(':'));

// const qtHours = parseInt(qtSeconds / 3600);
// qtSeconds = qtSeconds % 3600;

// const qtMinutes = parseInt(qtSeconds / 60);
// qtSeconds = qtSeconds % 60;

// console.log(`${qtHours}:${qtMinutes}:${qtSeconds}`);
