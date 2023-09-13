// Beecrowd 1096 - Sequência IJ 2

// let i = 1;
// 		while (i <= 9) {
// 			for (let j = 7; j > 4; j--) {
// 				console.log("I=" + i + " J=" + j);
// 			}
// 			i+=2;
// 		}

for (let i = 1; i <= 9; i += 2) {
  for (let j = 7; j >= 5; j -= 1) {
      console.log(`I=${i} J=${j}`);
  }
}
