class Calculator {

    add(a, b) {
        return a + b;
    }
    multiply(a, b) {
        return a * b;
    }
    divide(a, b) {
        if (b === 0) {
            throw new Error("Division by zero is not allowed.");
        }
        return a / b;
    }   
}

module.exports = Calculator;
// Modules - Encapsulated code (only share minimum)
// CommonJS, every file is a module (by default)
// Modules - Encapsulated code (only share minimum)
// CommonJS, every file is a module (by default)