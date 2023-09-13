// Beecrowd 1047 - Tempo de Jogo com Minutos

const input = require('./scriptMain');
const [horaInicial, minutoInicial, horaFinal, minutoFinal] = input.split(' ').map((num) => Number(num));

const tempoJogoComMinutos = (horaInicial, minutoInicial, horaFinal, minutoFinal) => {
  let totalHora = horaFinal - horaInicial;
  let totalMinuto = minutoFinal - minutoInicial;
  let result;

  if (totalHora < 0) {
    totalHora = 24 + (horaFinal - horaInicial);
  }

  if (totalMinuto < 0) {
    totalMinuto = 60 + (minutoFinal - minutoInicial);
    totalHora -= 1;
  }

  if (horaInicial === horaFinal && minutoFinal === minutoFinal) {
    result = `O JOGO DUROU 24 HORA(S) E 0 MINUTO(S)`;
  } else {
    result = `O JOGO DUROU ${totalHora} HORA(S) E ${totalMinuto} MINUTO(S)`;
  }

  return result;
};

console.log(tempoJogoComMinutos(horaInicial, minutoInicial, horaFinal, minutoFinal));