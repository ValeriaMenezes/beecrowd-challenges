// Beecrowd 1789 - A Corrida de Lesmas

const input = require( './scriptMain');
const lines = input.split('\n');

let qtLesmas = 0;
let velocidades = 0;

while (lines.length !== 0) {
  let nivel = 0;
  qtLesmas = Number(lines.shift());
  velocidades = lines.shift().split(' ').map((num) => Number(num));
 
  let lesminha = Math.max(...velocidades);
  
  if (lesminha < 10) {
    nivel = 1;
  } else if (lesminha >= 10 && lesminha < 20) {
    nivel = 2;
  } else if (lesminha >= 20) {
    nivel = 3;
  }

  console.log(nivel);
  if(lines.length == 1){
    break;
  }
}
