// Beecrowd 1930 - Tomadas

const input = require( './scriptMain');
const [t1, t2, t3, t4] = input.split(' ').map((num) => Number(num));

const qt = (t1 + t2 + t3 + t4) - 3;
console.log(qt);