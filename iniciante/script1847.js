// Beecrowd 1847 - Bem-vindos e Bem-vindas ao Inverno!

const input = require('./scriptMain');
const lines = input.split(' ').map((num) => Number(num));

let [firstDay, secondDay, thirdDay] = lines;
let happy = ':)';
let sad = ':(';

if (secondDay < firstDay && thirdDay >= secondDay) {
  console.log(happy);
} else if (secondDay > firstDay && thirdDay <= secondDay) {
  console.log(sad);
} else if ((secondDay > firstDay && thirdDay > secondDay) && (secondDay - firstDay) > (thirdDay - secondDay)) {
  console.log(sad);
} else if ((secondDay > firstDay && thirdDay > secondDay) && (secondDay - firstDay) <= (thirdDay - secondDay)) {
  console.log(happy);
} else if ((secondDay < firstDay && thirdDay < secondDay) && (firstDay - secondDay) > (secondDay - thirdDay)) {
  console.log(happy);
} else if ((secondDay < firstDay && thirdDay < secondDay) && (firstDay - secondDay) <= (secondDay - thirdDay)) {
  console.log(sad);
} else if (secondDay === firstDay) {
  if (thirdDay > secondDay) {
    console.log(happy);
  } else {
    console.log(sad);
  }
}