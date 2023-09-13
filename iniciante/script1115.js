// Beecrowd 1115 - Quadrante

const input = require('./scriptMain');
const pontos = input.split('\n');

// ----------------- Solução 1 -----------------

let [numberX, numberY] = pontos.shift().split(' ');
let x = Number(numberX);
let y = Number(numberY);

// Q1 --> x > 0 && y > 0
// Q2 --> x < 0 && y > 0
// Q3 --> x < 0 && y < 0
// Q4 --> x > 0 && y < 0
// Origem --> x === 0 && y === 0
// Eixo X --> x > 0 && y === 0
// Eixo Y --> x === 0 && y > 0


while (x !== 0 || y !== 0) {
  if (x === 0 || y === 0) {
    return;
  } else if (x > 0 && y > 0) {
    console.log('primeiro');
  } else if (x < 0 && y > 0) {
    console.log('segundo');
  } else if (x < 0 && y < 0) {
    console.log('terceiro');
  } else if (x > 0 && y < 0) {
    console.log('quarto');
  }

  [numberX, numberY] = pontos.shift().split(' ');
  x = Number(numberX);
  y = Number(numberY);
}

// ----------------- Solução 2 -----------------

// let lines = input.split('\n');
// let l1 = input.split("\n").map((item) => parseInt(item, 10));
// let l2 = input.split(" ").map((item) => parseInt(item, 10));
// l2.shift();

// for (i = 0; i < l1.length; i++){
//     x = l1[i]
//     y = l2[i]

//     if (x > 0 && y > 0){
//         console.log("primeiro");
//     }
//     else if (x < 0 && y > 0){
//         console.log("segundo");
//     }
//     else if (x < 0 && y < 0){
//         console.log("terceiro");
//     }
//     else if (x > 0 && y < 0){
//         console.log("quarto");
//     }
//     else{
//         break;
//     }
// }
