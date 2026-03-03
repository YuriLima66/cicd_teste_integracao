function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function divide(a, b) {
    return a / b;
}

function multiply(a, b) {
    return a * b;
}

function pow(a, b) {
    return Math.pow(a, b);
}

function mod(a, b) {
    return a % b;
}

function factorial(n) {
    if (!Number.isInteger(n)) throw new Error('n must be an integer');
    if (n < 0) throw new Error('n must be non-negative');
    let res = 1;
    for (let i = 2; i <= n; i++) {
        res *= i;
    }
    return res;
}


module.exports = {
    add,
    subtract,
    divide,
    multiply
    , pow,
    mod,
    factorial
}