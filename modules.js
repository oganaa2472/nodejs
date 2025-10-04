// const Calculator = require('./calculator');
// const calc = new Calculator();

// console.log(calc.add(2, 3));
// console.log(calc.multiply(4, 5));
// console.log(calc.divide(10, 2));

const { add, multiply, divide } = require('./calc');

console.log(add(2, 3));
console.log(multiply(4, 5));
console.log(divide(10, 2));