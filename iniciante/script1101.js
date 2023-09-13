// Beecrowd 1101 - Sequência de Números e Soma

const input = require('./scriptMain');
const lines = input.split('\n');

let [numberM, numberN] = lines.shift().split(' ');
let m = parseInt(numberM);
let n = parseInt(numberN);
let val;
let textNumber = '';
let sum = 0;

while(true) {
  if (m <= 0 || n <= 0) {
    return;
  }

  if (m > n) {
    val = n;
    for (val; val <= m; val += 1) {
      if (val === n) {
        textNumber = `${textNumber} ${val}`;
        sum += val;
      } else {
        textNumber = `${textNumber} ${val}`;
        sum += val;
      }
    }
    console.log(`${textNumber} Sum=${sum}`);
  } else if (m < n) {
      val = m;
      for (val; val <= n; val += 1) {
        if (val === n) {
          textNumber = `${textNumber} ${val}`;
          sum += val;
        } else {
          textNumber = `${textNumber} ${val}`;
          sum += val;
        }
      }
      console.log(`${textNumber} Sum=${sum}`);
  } else if (m === n) {
      console.log(`${m} Sum=${n}`);
  }

  [numberM, numberN] = lines.shift().split(' ');
  m = parseInt(numberM);
  n = parseInt(numberN);
  textNumber = '';
  sum = 0;  
}
