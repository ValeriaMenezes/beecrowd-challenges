// Beecrowd 1048 - Aumento de Salário

const input = require('./scriptMain');
const value = parseFloat(input);

// 0 - 400.00             15%
// 400.01 - 800.00        12%
// 800.01 - 1200.00       10%
// 1200.01 - 2000.00      7%
// Acima de 2000.00       4%

const salaryIncrease = (value) => {
  let newSalary;
  let percentage;
  let increase;

  if (value >= 0 && value <= 400.00) {
    percentage = (15 / 100);
    increase = value * percentage;
    newSalary = value + increase;
  } else if (value >= 400.01 && value <= 800.00) {
    percentage = (12 / 100);
    increase = value * percentage;
    newSalary = value + increase;
  } else if (value >= 800.01 && value <= 1200.00) {
    percentage = (10 / 100);
    increase = value * percentage;
    newSalary = value + increase;
  } else if (value >= 1200.01 && value <= 2000.00) {
    percentage = (7 / 100);
    increase = value * percentage;
    newSalary = value + increase;
  } else {
    percentage = (4 / 100);
    increase = value * percentage;
    newSalary = value + increase;
  }

  const message = `Novo salario: ${newSalary.toFixed(2)}\nReajuste ganho: ${increase.toFixed(2)}\nEm percentual: ${(percentage * 100).toFixed(0)} %`;
  return message;
};

console.log(salaryIncrease(value));
