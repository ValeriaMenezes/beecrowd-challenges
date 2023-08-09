// Beecrowd 1043 - Triângulo

const input = require('./scriptMain');
const [a, b, c] = input.split(' ').map((num) => Number(num));

// condições existência de triângulo
// | b - c | < a < b + c
// | a - c | < b < a + c
// | a - b | < c < a + b

const triangle = (a, b, c) => {
  let result;
  
  if ((a > (b - c) && a < (b + c)) && (b > (a -c) && b < (a + c)) && (c > (a - b) && c < (a + b))) {
    const perimetro = a + b + c;
    result = `Perimetro = ${perimetro.toFixed(1)}`;
  } else {
    const area = ((a + b) * c) / 2;
    result = `AREA = ${area.toFixed(1)}`
  }

  return result;
}

console.log(triangle(a, b, c));

// const triangle2 = (a, b, c) => {
//   let result;
  
//   if ((a > (b - c) && a < (b + c))) {
//     result = true;
//   } else if (b > (a -c) && b < (a + c)) {
//     result = true;
//   } else if (c > (a - b) && c < (a + b)) {
//     result = true;
//   }
  
//   if (result) {
//     const perimetro = a + b + c;
//     result = `Perimetro = ${perimetro.toFixed(1)}`;
//   } else {
//     const area = ((a + b) * c) / 2;
//     result = `AREA = ${area.toFixed(1)}`
//   }

//   return result;
// }

// console.log(triangle2(a, b, c));
