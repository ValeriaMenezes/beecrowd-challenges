// Beecrowd 1046 - Tempo de Jogo

const input = require('./scriptMain');
const [tempoInicial, tempoFinal] = input.split(' ').map((num) => Number(num));

const tempoJogo = (tempoInicial, tempoFinal) => {
  let duracao;

  if (tempoInicial < tempoFinal) {
    duracao = tempoFinal - tempoInicial;
  } else if (tempoInicial > tempoFinal) {
    duracao = (24 - tempoInicial) + tempoFinal;
  } else {
    duracao = 24;
  }

  return `O JOGO DUROU ${duracao} HORA(S)`;
}

console.log(tempoJogo(tempoInicial, tempoFinal));
