// Beecrowd 1118 - Várias Notas Com Validação

const input = require('./scriptMain');
const lines = input.split('\n').map((num) => Number(num));

let accNotes = 0;
let n1 = 0;
let n2 = 0;
let average = 0;

for (let i = 0; i < lines.length; i += 1) {
  let note = lines[i];
  if (note >= 0 && note <= 10) {
    accNotes += 1;

    if (accNotes === 1) {
      n1 = note;
    } else if (accNotes === 2) {
      n2 = note;
      average = ((n1 + n2) / 2);
      console.log(`media = ${average.toFixed(2)}`);
    } else if (accNotes > 2 && note === 2) {
      console.log("novo calculo (1-sim 2-nao)");
      return;
    }
  }

  if (accNotes < 2 && note < 0) {
    console.log('nota invalida');
  }

  if (accNotes < 2 && note > 10) {
    console.log('nota invalida');
  }

  if (accNotes > 2) {
    console.log("novo calculo (1-sim 2-nao)"); 
  }

  if (note === 1 && accNotes > 2) {
    accNotes = 0;
  }
}

// Loop for:

// Inicia um loop que percorre cada elemento do array lines (linhas da entrada).
// let note = lines[i];

// Atribui o valor da linha atual do array lines à variável note.
// if (note >= 0 && note <= 10) {

// Verifica se note está dentro do intervalo válido de notas (entre 0 e 10).
// accNotes += 1;

// Incrementa accNotes para rastrear o número de notas válidas lidas.
// if (accNotes === 1) {

// Se esta é a primeira nota válida, atribui o valor de note a n1.
// else if (accNotes === 2) {

// Se esta é a segunda nota válida, atribui o valor de note a n2 e calcula a média das duas notas.
// console.log(media = ${average.toFixed(2)});

// Imprime a média calculada com duas casas decimais.
// if (accNotes > 2 && note === 2) {

// Se já foram lidas duas notas e o usuário inseriu 2, o programa exibe a mensagem "novo calculo (1-sim 2-nao)" e retorna, encerrando o programa.
// Verificações de notas inválidas:

// As próximas duas if verifica se a nota é inválida (menor que 0 ou maior que 10) e imprime "nota invalida" se for o caso.
// if (accNotes > 2) {

// Se já foram lidas mais de duas notas, o programa exibe a mensagem "novo calculo (1-sim 2-nao)".
// if (note === 1 && accNotes > 2) {

// Se o usuário inserir 1 e já foram lidas mais de duas notas, o programa redefine accNotes para 0, permitindo um novo cálculo de média.
// Em resumo, este código lê notas, calcula a média quando duas notas válidas são fornecidas e lida com as mensagens de "novo calculo (1-sim 2-nao)" de acordo com a lógica do problema.
