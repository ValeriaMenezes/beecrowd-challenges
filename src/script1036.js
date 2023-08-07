// Fórmula de Bhaskara - Beecrowd 1036

const input = require('./scriptMain');

// A SOLUÇÃO ABAIXO TRAZ O RESULTADO ESPERADO, MAS POR ALGUMA RAZÃO NÃO PASSA NO BEECROWD
// const bhaskara = (values) => {
//   let [a, b, c] = values.split(' ').map((value) => parseFloat(value));

//   const delta = (b ** 2) - 4 * a * c;
//   if (delta <= 0 || a === 0) {
//     console.log('Impossivel calcular');
//   }

//   const r1 = (-b + Math.sqrt(delta)) / (2 * a);
//   const r2 = (-b - Math.sqrt(delta)) / (2 * a);

//   const result = `R1 = ${r1.toFixed(5)}\nR2 = ${r2.toFixed(5)}`;

//   console.log(result);
// };

// bhaskara(input);

// const lines = input.split('\n');
// const values = lines[0].split(' ');

// const bhaskara = (a, b, c) => {
//   const numberA = parseFloat(a);
//   const numberB = parseFloat(b);
//   const numberC = parseFloat(c);
  
//   const delta = (numberB * numberB) - 4 * numberA * numberC;

//   if (delta <= 0 || numberA === 0) {
//     console.log('Impossivel calcular');
//   }

//   const r1 = (-numberB + Math.sqrt(delta)) / (2 * numberA);
//   const r2 = (-numberB - Math.sqrt(delta)) / (2 * numberA);

//   const result = `R1 = ${r1.toFixed(5)}\nR2 = ${r2.toFixed(5)}`;

//   return result;
// };

// console.log(bhaskara(...values));

const lines = input.split('\n');
const [a, b, c] = lines[0].split(' ');

const numberA = parseFloat(a);
const numberB = parseFloat(b);
const numberC = parseFloat(c);
  
const delta = (numberB * numberB) - 4 * numberA * numberC;

if (delta <= 0 || numberA === 0) {
    console.log('Impossivel calcular');
}

const r1 = (-numberB + Math.sqrt(delta)) / (2 * numberA);
const r2 = (-numberB - Math.sqrt(delta)) / (2 * numberA);

const result = `R1 = ${r1.toFixed(5)}\nR2 = ${r2.toFixed(5)}`;

console.log(result);
