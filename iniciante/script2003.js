// Beecrowd 2003 - Domingo de Manhã

const input = require('./scriptMain');
const lines = input.split('\n');

for (let i = 0; i < lines.length - 1; i += 1) {
  let time = lines[i];
  let [hour, minutes] = time.split(':').map((num) => Number(num));
  
  if (hour > 7 || (hour === 7 && minutes > 0)) {
    let lag = (hour - 7) * 60 + minutes;
    console.log(`Atraso maximo: ${lag}`);
  } else {
    console.log('Atraso maximo: 0');
  }
}
