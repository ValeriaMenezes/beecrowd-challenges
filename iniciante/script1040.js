// Beecrowd 1040 - Média 3

const input = require('./scriptMain');
const values = input.split('\n');

const [n1, n2, n3, n4] = values.shift().split(' ');
const n5 = values[0];


const calculoMedia = (n1, n2, n3, n4, n5) => {
  const nota1 = Number(n1);
  const nota2 = Number(n2);
  const nota3 = Number(n3);
  const nota4 = Number(n4);
  const notaExame = Number(n5);
  // Pesos: 2, 3, 4 e 1

  const media = ((nota1 * 2) + (nota2 * 3) + (nota3 * 4) + (nota4 * 1)) / 10;
  
  let result = `Media: ${media.toFixed(1)}`;
  
  if (media >= 7) {
    console.log(`${result}\nAluno aprovado.`);
  } else if (media < 5) {
    console.log(`${result}\nAluno reprovado.`);
  } else if (media >= 5 && media <= 6.9) {
    console.log(`${result}\nAluno em exame.`);
    console.log(`Nota do exame: ${notaExame.toFixed(1)}`);
    const mediaFinal = (media + notaExame) / 2;
    if (mediaFinal >= 5) {
      console.log(`Aluno aprovado.\nMedia final: ${mediaFinal.toFixed(1)}`);
    } else if (mediaFinal < 5) {
      console.log(`Aluno reprovado.\n${mediaFinal.toFixed(1)}`);
    }
  }
};

calculoMedia(n1, n2, n3, n4, n5);
