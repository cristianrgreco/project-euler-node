module.exports.sum = (a, b) => a + b;

module.exports.product = (a, b) => a * b;

module.exports.last = (a, b) => b;

module.exports.range = (start, end) => {
    const numbers = [];

    for (let i = start; i <= end; i++) {
        numbers.push(i);
    }

    return numbers;
};

module.exports.isEven = x => x % 2 === 0;

module.exports.isDivisible = (x, fn) => fn(y => x % y === 0);

module.exports.anyOf = xs => predicate => xs.some(predicate);

module.exports.allOf = xs => predicate => xs.every(predicate);

module.exports.fibWhile = predicate => {
    const fibonacciNumbers = [];

    let a = 1;
    let b = 2;
    let i = 0;

    while (predicate(a, i)) {
        fibonacciNumbers.push(a);

        i++;

        const tmp = a;
        a = b;
        b = tmp + b;
    }

    return fibonacciNumbers;
};

module.exports.primeFactors = x => {
    const primeFactors = [];

    let mutableX = x;
    for (let i = 2; i <= Math.ceil(Math.sqrt(x)); i++) {
        if (mutableX % i === 0) {
            primeFactors.push(i);
            mutableX = mutableX / i;
            i = 1;
        }
    }

    return primeFactors;
};
