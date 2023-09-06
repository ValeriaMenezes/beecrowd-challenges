// Beecrowd 1142 - PUM

const input = require('./scriptMain');
const value = Number(input);

let val1 = 1;
let val2 = 2;
let val3 = 3;

for (let i = 0; i < value; i += 1) {
  console.log(`${val1} ${val2} ${val3} PUM`);
  val1 += 4;
  val2 += 4;
  val3 += 4;
}