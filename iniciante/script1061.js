// Beecrowd 1061 - Tempo de um Evento

const input = require('./scriptMain');
const lines = input.split('\n');

const eventTime = (lines) => {
  const line1 = lines.shift().split(' ');
  const line2 = lines.shift().split(' : ');
  const line3 = lines.shift().split(' ');
  const line4 = lines.shift().split(' : ');

  const diaInicial = Number(line1[1]);
  const diaFinal = Number(line3[1]);
  const horaInicial = Number(line2[0]);
  const horaFinal = Number(line4[0]);
  const minutoInicial = Number(line2[1]);
  const minutoFinal = Number(line4[1]);
  const segundoInicial = Number(line2[2]);
  const segundoFinal = Number(line4[2]);

  let segundosTotais = segundoFinal - segundoInicial;
  let minutosTotais = minutoFinal - minutoInicial;
  let horasTotais = horaFinal - horaInicial;
  let diasTotais = diaFinal - diaInicial;

  if (segundosTotais < 0) {
    segundosTotais += 60;
    minutosTotais -= 1;
  }

  if (minutosTotais < 0) {
    minutosTotais += 60;
    horasTotais -= 1;
  }

  if (horasTotais < 0) {
    horasTotais += 24;
    diasTotais -= 1;
  }

  const result = `${diasTotais} dia(s)\n${horasTotais} hora(s)\n${minutosTotais} minuto(s)\n${segundosTotais} segundo(s)`;

  return result;
}

console.log(eventTime(lines));

// const eventTime = (lines) => {
//   const line1 = lines.shift().split(' ');
//   const line2 = lines.shift().split(' : ');
//   const line3 = lines.shift().split(' ');
//   const line4 = lines.shift().split(' : ');

//   const diaInicial = Number(line1[1]);
//   const diaFinal = Number(line3[1]);
//   const horaInicial = Number(line2[0]);
//   const horaFinal = Number(line4[0]);
//   const minutoInicial = Number(line2[1]);
//   const minutoFinal = Number(line4[1]);
//   const segundoInicial = Number(line2[2]);
//   const segundoFinal = Number(line4[2]);

//   let segundosTotais = 0;
//   let minutosTotais = 0;
//   let horasTotais = 0;
//   let diasTotais = 0;

//   if (segundoFinal < segundoInicial) {
//     segundosTotais += (60 - segundoInicial) + segundoFinal;
//     minutosTotais -= 1;
//   } else if (segundoFinal > segundoInicial) {
//     segundosTotais += segundoFinal - segundoInicial;
//   } else {
//     segundosTotais = 0;
//   }

//   if (minutoFinal < minutoInicial) {
//     minutosTotais += (60 - minutoInicial) + minutoFinal;
//     horasTotais -= 1;
//   } else if (minutoFinal > minutoInicial) {
//     minutosTotais += minutoFinal - minutoInicial;
//   } else {
//     minutosTotais = 0;
//   }

//   if (horaFinal < horaInicial) {
//     diasTotais += (24 - horaInicial) + horaFinal;
//     diasTotais -= 1;
//   } else if (horaFinal > horaInicial) {
//     horasTotais += horaFinal - horaInicial;
//   } else {
//     horasTotais = 0;
//   }

//   if (diaFinal < diaInicial) {
//     diasTotais += (30 - diaInicial) + diaFinal;
//   } else if (diaFinal > diaInicial) {
//     diasTotais += diaFinal - diaInicial;
//   } else {
//     diasTotais = 0;
//   }

//   const result = `${diasTotais} dia(s)\n${horasTotais} hora(s)\n${minutosTotais} minuto(s)\n${segundosTotais} segundo(s)`;

//   return result;
// }

// console.log(eventTime(lines));
