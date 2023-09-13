// Beecrowd 1079 - Médias Ponderadas

const input = require('./scriptMain');
const lines = input.split('\n');

const n = lines.shift();

for(let val = 1; val <= n; val += 1) {
  let setNotes = lines.shift().split(' ');
  
  let note1 = parseFloat(setNotes.shift()); // peso 2
  let note2 = parseFloat(setNotes.shift()); // peso 3
  let note3 = parseFloat(setNotes.shift()); // peso 5

  let average = (note1 * 2 + note2 * 3 + note3 * 5) / 10;
  console.log(average.toFixed(1));
}
