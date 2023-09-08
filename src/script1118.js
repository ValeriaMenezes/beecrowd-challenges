// Beecrowd 1118 - Várias Notas Com Validação

const input = require('./scriptMain');
const lines = input.split('\n').map((num) => Number(num));

let accNotes = 0;
let n1 = 0;
let n2 = 0;
let average = 0;

for (let i = 0; i < lines.length; i += 1) {
  let note = lines[i];
  if (note >= 0 && note <= 10) {
    accNotes += 1;

    if (accNotes === 1) {
      n1 = note;
    } else if (accNotes === 2) {
      n2 = note;
      average = ((n1 + n2) / 2);
      console.log(`media = ${average.toFixed(2)}`);
    } else if (accNotes > 2 && note === 2) {
      console.log("novo calculo (1-sim 2-nao)");
      return;
    }
  }

  if (accNotes < 2 && note < 0) {
    console.log('nota invalida');
  }

  if (accNotes < 2 && note > 10) {
    console.log('nota invalida');
  }

  if (accNotes > 2) {
    console.log("novo calculo (1-sim 2-nao)"); 
  }

  if (note === 1 && accNotes > 2) {
    accNotes = 0;
  }
}
