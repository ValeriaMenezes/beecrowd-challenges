// Beecrowd 1012 - Área

const input = require('./scriptMain');
const [A, B, C] = input.split(' ').map((item) => parseFloat(item));

const PI = 3.14159;
const triangle = (A * C) / 2;
const circle = PI * Math.pow(C, 2);
const trapeze = ((A + B) * C) /2;
const square = Math.pow(B, 2);
const rectangle = A * B;

const message = `TRIANGULO: ${triangle.toFixed(3)}
CIRCULO: ${circle.toFixed(3)}
TRAPEZIO: ${trapeze.toFixed(3)}
QUADRADO: ${square.toFixed(3)}
RETANGULO: ${rectangle.toFixed(3)}
`;

console.log(message);
