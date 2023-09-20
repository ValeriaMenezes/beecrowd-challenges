// Beecrowd 1156 - Sequência S II

let s = 1;
let accDivisor = 2;

for (let sum = 3; sum <= 39; sum += 2) {
  s = s + (sum / accDivisor);
  accDivisor *= 2;
}

console.log(s.toFixed(2));
