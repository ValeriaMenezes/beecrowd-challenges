// Beecrowd 1051 - Imposto de Renda

const input = require('./scriptMain');
const salario = parseFloat(input);

// salario >= 0.00 && salario <= 2000.00 --> isento
//               faixa de 2000
// salario > 2000.00 && salario <= 3000.00 --> 8%
//              faixa de 1000
// salario > 3000.00 && salario <= 4500.00 --> 18%
//              faixa de 1500
// salario > 4500.00 --> 28%

const impostoDeRenda = (salario) => {
  let imposto;
  let diferenca;
  let faixa2000 = 2000;
  let faixa1000 = 1000;
  let faixa1500 = 1500;

  if (salario >= 0 && salario <= 2000) {
    return 'Isento';
  } else if (salario > 2000 && salario <= 3000) {
    diferenca = salario - faixa2000;
    imposto = diferenca * 0.08;
  } else if (salario > 3000 && salario <= 4500) {
    diferenca = salario - (faixa2000 + faixa1000);
    imposto = (diferenca * 0.18) + (1000 * 0.08);
  } else if (salario > 4500) {
    diferenca = salario - (faixa2000 + faixa1000 + faixa1500);
    imposto = (diferenca * 0.28) + ((1000 * 0.08) + (1500 * 0.18));
  }

  return `R$ ${imposto.toFixed(2)}`;

};

console.log(impostoDeRenda(salario));
