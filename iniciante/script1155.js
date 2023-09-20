// Becrowd 1155 - Sequência S

let s = 1;

for (let i = 2; i <= 100; i += 1) {
  s += (1 / i);
}

console.log(s.toFixed(2));
