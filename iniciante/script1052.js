// Beecrowd 1052 - Mês

const input = require('./scriptMain');
const value = Number(input);

const month = (value) => {
  const months = [
    "January", "February", "March", "April",
    "May", "June", "July", "August",
    "September", "October", "November", "December"
  ];

  if (value >= 1 && value <= 12) {
    const name = months[value - 1];
    return name;
  }

}

console.log(month(value));
