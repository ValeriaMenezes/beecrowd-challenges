// Beecrowd 1117 - Validação de Nota

const input = require('./scriptMain');
const notas = input.split('\n').map((num) => Number(num));

// console.log(notas);
// let sumNotas = 0;

// for (let i = 0; i <= notas.length - 1; i += 1) {
//   const nota = notas[i];

//   if (nota >= 0 && nota <= 10) {
//     sumNotas += nota;
//   } else if (!nota >= 0 || !nota <= 10) {
//     console.log('nota invalida');
//   }

// }

// const media = sumNotas / 2;
// console.log(media);

let nota1 = notas.shift();
while (nota1 < 0 || nota1 > 10) {
  console.log('nota invalida');
  nota1 = notas.shift();
}

let nota2 = notas.shift();
while (nota2 < 0 || nota2 > 10) {
  console.log('nota invalida');
  nota2 = notas.shift();
}

const media = ((nota1 + nota2) / 2);
console.log(`media = ${media}`);
 