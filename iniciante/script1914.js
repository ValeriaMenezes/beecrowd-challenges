// Beecrowd 1914 - De quem é a vez?

const input = require('./scriptMain');
const lines = input.split('\n');

const qt = Number(lines.shift());

for (let i = 1; i <= qt; i += 1) {
  let [player1, choice1, player2, choice2] = lines.shift().split(' ');
  let [value1, value2] = lines.shift().split(" ");

  // console.log(player1, choice1, player2, choice2, value1, value2);

  let sum = Number(value1) + Number(value2);

  if (sum % 2 === 0) {
    choice1 === 'PAR' ? console.log(player1) : console.log(player2);
  } else {
    choice1 === 'IMPAR' ? console.log(player1) : console.log(player2);
  }
}
