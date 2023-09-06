// Beecrowd 1134 - Tipo de Combustível

const input = require('./scriptMain');
const values = input.split('\n').map((num) => Number(num));

let alcool = 0;
let gasolina = 0;
let diesel = 0;

for (let i = 0; i <= values.length -1; i += 1) {
  let value = values[i];
  
  if (value === 1) {
    alcool += 1;
  } else if (value === 2) {
    gasolina += 1;
  } else if (value === 3) {
    diesel += 1;
  } else if (value === 4) {
    console.log(`MUITO OBRIGADO\nAlcool: ${alcool}\nGasolina: ${gasolina}\nDiesel: ${diesel}`);
  }
}
