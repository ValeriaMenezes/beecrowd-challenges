// Beecrowd 1933 - Tri-du

const input = require('./scriptMain');
const [card1, card2] = input.split(' ').map((num) => Number(num));

if (card1 > card2) {
  console.log(card1);
} else {
  console.log(card2);
}