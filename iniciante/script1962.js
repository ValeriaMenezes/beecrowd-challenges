// Beecrowd 1962 - Há Muito, Muito Tempo Atrás

const input = require('./scriptMain');
const lines = input.split('\n').map((num) => Number(num));

const qt = lines.shift();
let currentYear = 2015;

for (let i = 0; i < qt; i += 1) {
  let year = (currentYear - lines[i]);

  if (year > 0) {
    console.log(`${year} D.C.`);
  } else {
    console.log(`${year * - 1 + 1} A.C.`);
  }
}
