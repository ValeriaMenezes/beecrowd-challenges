// Beecrowd 1042 - Sort Simples

const input = require('./scriptMain');
const valuesArray = input.split(' ').map((num) => Number(num));

const ascendingOrder = (valuesArray) => {
  const copyOriginals = valuesArray.slice();
  
  for (let extIndex = 0; extIndex < valuesArray.length; extIndex += 1) {
    for (let intIndex = 0; intIndex < valuesArray.length - 1 - extIndex; intIndex += 1) {
      if (valuesArray[intIndex] > valuesArray[intIndex + 1]) {
        let temp = valuesArray[intIndex];
        valuesArray[intIndex] = valuesArray[intIndex + 1];
        valuesArray[intIndex + 1] = temp;
      }
    }
  }

  const message = `${valuesArray.join('\n')}\n\n${copyOriginals.join('\n')}`;
  return message;
};

console.log(ascendingOrder(valuesArray));

// A SOLUÇÃO ACIMA NÃO DEPENDE DE APENAS TRÊS VALORES DE ENTRADA E POR ISSO É MAIS DINÂMICA QUE A SOLUÇÃO ABAIXO

// const ascendingOrder = (valuesArray) => {
//   const copy = valuesArray.slice();
  
//   for (let extIndex = 0; extIndex < valuesArray.length; extIndex += 1) {
//     for (let intIndex = 0; intIndex < valuesArray.length - 1 - extIndex; intIndex += 1) {
//       if (valuesArray[intIndex] > valuesArray[intIndex + 1]) {
//         let temp = valuesArray[intIndex]
//         valuesArray[intIndex] = valuesArray[intIndex + 1];
//         valuesArray[intIndex + 1] = temp;
//       }
//     }
//   }

 
//   const [value1, value2, value3] = valuesArray;
//   const [original1, original2, original3] = copy;
  
//   const message = `${value1}\n${value2}\n${value3}\n\n${original1}\n${original2}\n${original3}`
//   return message;
// }

// console.log(ascendingOrder(valuesArray));