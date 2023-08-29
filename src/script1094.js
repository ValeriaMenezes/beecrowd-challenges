// Beecrowd 1094 - Experiências

const input = require('./scriptMain');
const lines = input.split('\n');

const experience = (lines) => {
  const q = lines.shift();
  let total = 0;
  let coelhos = 0;
  let ratos = 0;
  let sapos = 0;

  for (let index = 1; index <= q; index += 1) {
    let current = lines.shift().split(' ');
    let qtNum = Number(current.shift());
    let type = current.shift();

    if (type === 'C') {
      coelhos += qtNum;
    } else if (type === 'R') {
      ratos += qtNum;
    } else if (type === 'S') {
      sapos += qtNum;
    }
  }

  total = coelhos + ratos + sapos;

  const percC = ((coelhos / total) * 100).toFixed(2);
  const percR = ((ratos / total) * 100).toFixed(2);
  const percS = ((sapos / total) * 100).toFixed(2);

  const message = `Total: ${total} cobaias
Total de coelhos: ${coelhos}
Total de ratos: ${ratos}
Total de sapos: ${sapos}
Percentual de coelhos: ${percC} %
Percentual de ratos: ${percR} %
Percentual de sapos: ${percS} %`;

  return message;
};

console.log(experience(lines));
