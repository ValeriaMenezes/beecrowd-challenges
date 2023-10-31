// Beecrowd 1865 - Mjölnir

const input = require('./scriptMain');
const lines = input.split('\n');

const qt = Number(lines.shift());


for (let i = 1; i <= qt; i += 1) {
  let data = lines.shift().split(' ');
  let name = data.shift();
  let strong = Number(data.shift());

  if (name === 'Thor') {
    console.log('Y');
  } else {
    console.log('N');
  }
}
