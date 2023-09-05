// Beecrowd 1097 - Sequência IJ 3

// 7
// 6
// 5
// 9
// 8
// 7
// 11
// 10
// 9
// 13
// 12
// 11
// 15
// 14
// 13

let i = 1;
let j = 7;

while (i <= 9) {
  for (let k = 0; k < 3; k += 1) {
    console.log(`I=${i} J=${j}`);
    j -= 1;
  }
  j += 5;
  i += 2;
}