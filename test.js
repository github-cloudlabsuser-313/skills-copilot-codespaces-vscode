class Calculator {
    add(a, b) {
        return a + b;
    }

    subtract(a, b) {
        return a - b;
    }

    multiply(a, b) {
        return a * b;
    }

    divide(a, b) {
        if (b === 0) {
            throw new Error("Cannot divide by zero");
        }
        return a / b;
    }
}

// Usage
const calculator = new Calculator();
console.log(`Addition: ${calculator.add(5, 3)}`);
console.log(`Subtraction: ${calculator.subtract(5, 3)}`);
console.log(`Multiplication: ${calculator.multiply(5, 3)}`);
console.log(`Division: ${calculator.divide(5, 3)}`);