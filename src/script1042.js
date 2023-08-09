// Beecrowd 1042 - Sort Simples

const input = require('./scriptMain');
const valuesArray = input.split(' ').map((num) => Number(num));

const sortNumbers = (valuesArray) => {
  const copy = valuesArray.slice();
  
  for (let extIndex = 0; extIndex < valuesArray.length; extIndex += 1) {
    for (let intIndex = 0; intIndex < valuesArray.length - 1 - extIndex; intIndex += 1) {
      if (valuesArray[intIndex] > valuesArray[intIndex + 1]) {
        let temp = valuesArray[intIndex]
        valuesArray[intIndex] = valuesArray[intIndex + 1];
        valuesArray[intIndex + 1] = temp;
      }
    }
  }

  // valuesArray.forEach((num) => console.log(num));
  // console.log(' ');
  // copy.forEach((i) => console.log(i));

  for (let valor of valuesArray) {
    console.log(valor);
  }

  console.log(' ');

  for (let valor of copy) {
    console.log(valor);
  }
}

sortNumbers(valuesArray);
