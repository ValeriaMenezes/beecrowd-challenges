// Beecrowd 1051 - Imposto de Renda

const input = require('./scriptMain');
const salary = parseFloat(input);

// salary >= 0.00 && salary <= 2000.00 --> isento
//               faixa de 2000
// salary > 2000.00 && salary <= 3000.00 --> 8%
//              faixa de 1000
// salary > 3000.00 && salary <= 4500.00 --> 18%
//              faixa de 1500
// salary > 4500.00 --> 28%

const impostoDerenda = (salary) => {
  let imposto;
  let diferenca;
  let faixa2000 = 2000;
  let faixa1000 = 1000;
  let faixa1500 = 1500;

  if (salary >= 0 && salary <= 2000) {
    return 'Isento';
  } else if (salary > 2000 && salary <= 3000) {
    diferenca = salary - faixa2000;
    imposto = diferenca * 0.08;
  } else if (salary > 3000 && salary <= 4500) {
    diferenca = salary - (faixa2000 + faixa1000);
    imposto = (diferenca * 0.18) + (1000 * 0.08);
  } else if (salary > 4500) {
    diferenca = salary - (faixa2000 + faixa1000 + faixa1500);
    imposto = (diferenca * 0.28) + ((1000 * 0.08) + (1500 * 0.18));
  }

  return `R$ ${imposto.toFixed(2)}`;

};

console.log(impostoDerenda(salary));
