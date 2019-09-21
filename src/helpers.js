module.exports.sum = (a, b) => a + b;

module.exports.product = (a, b) => a * b;

module.exports.power = power => x => Math.pow(x, power);

module.exports.last = (a, b) => b;

module.exports.trim = str => str.trim();

module.exports.joining = delimiter => (acc, next) => acc + delimiter + next;

module.exports.toNumber = any => Number(any);

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

module.exports.flatten = (acc, next) => {
    next.forEach(e => acc.push(e));
    return acc;
};

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

module.exports.isPalindrome = x => {
    const xs = String(x);

    if (xs.length === 0) {
        return false;
    }

    let a = 0;
    let b = xs.length - 1;

    while (a <= xs.length / 2) {
        if (xs[a] !== xs[b]) {
            return false;
        }

        a++;
        b--;
    }

    return true;
};

const isPrime = x => {
    for (let i = 2; i <= Math.sqrt(x); i++) {
        if (x % i === 0) {
            return false;
        }
    }

    return true;
};

module.exports.nthPrime = n => {
    const gridSize = Math.ceil(n * Math.log(n * Math.log(n)));

    const grid = this.range(0, gridSize).fill(true);
    grid[0] = false;
    grid[1] = false;

    for (let i = 2; i <= Math.sqrt(gridSize); i++) {
        if (isPrime(i)) {
            for (let j = i + i; j < gridSize; j += i) {
                grid[j] = false;
            }
        }
    }

    const primes =  grid
        .map((x, i) => [x, i])
        .filter(([x]) => x === true)
        .map(([, i]) => i);

    return primes[n - 1];
};
