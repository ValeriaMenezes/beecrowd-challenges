// Teste de Seleção 1 - Beecrowd 1035

const input = require('./scriptMain');
const lines = input.split(' ');

const A = parseInt(lines.shift());
const B = parseInt(lines.shift());
const C = parseInt(lines.shift());
const D = parseInt(lines.shift());


const condicoes = (A, B, C, D) => {
  if (B > C && D > A && (C + D > A + B) && C > 0 && D > 0 && A % 2 === 0) {
    console.log('Valores aceitos');
  } else {
    console.log('Valores nao aceitos');
  }
};

condicoes(A, B, C, D);