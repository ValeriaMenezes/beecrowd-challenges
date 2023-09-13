// Beecrowd 1114 - Senha Fixa

const input = require('./scriptMain');
const numbers = input.split('\n').map((num) => Number(num));

const senhaFixa = 2002;

// for (let index = 0; index <= numbers.length - 1; index += 1) {
//   if (numbers[index] !== senhaFixa) {
//     console.log('Senha Invalida');
//   } else if (numbers[index] === senhaFixa) {
//     console.log('Acesso Permitido');
//   }
// }

let senha = numbers.shift();

while (senha !== senhaFixa) {
  if (senha !== senhaFixa) {
    console.log('Senha Invalida');
  }
  senha = numbers.shift();
}
console.log('Acesso Permitido');
