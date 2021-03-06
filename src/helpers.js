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

module.exports.rangeWhile = (start, predicate) => {
    const numbers = [];

    let num = start;
    let i = 0;

    while (predicate(num, i)) {
        numbers.push(num);
        num++;
        i++;
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

    if (mutableX > 1) {
        primeFactors.push(mutableX);
    }

    return primeFactors;
};

module.exports.ascending = (a, b) => a - b;

module.exports.factors = x => {
    const factors = new Set();

    for (let i = 1; i <= Math.ceil(Math.sqrt(x)); i++) {
        if (x % i === 0) {
            factors.add(i);
            factors.add(x / i);
        }
    }

    return Array.from(factors.values()).sort(this.ascending);
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

module.exports.primes = n => {
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

    return grid
        .map((x, i) => [x, i])
        .filter(([x]) => x === true)
        .map(([, i]) => i)
        .slice(0, n)
};

module.exports.approximateNthPrime = x => Math.ceil(x / Math.log(x / Math.log(x)));

module.exports.groupBy = groupingFn => (group, element) => groupingFn(group, element);

module.exports.frequency = (group, element) => {
    if (group[element] === undefined) {
        group[element] = 1;
    } else {
        const current = group[element];
        group[element] = current + 1;
    }

    return group;
};

module.exports.lcm = (total, next) => {
    const totalPrimeFactorsAggregate = this.primeFactors(total)
        .reduce(this.groupBy(this.frequency), {});

    const nextPrimeFactorsAggregate = this.primeFactors(next)
        .reduce(this.groupBy(this.frequency), {});

    const aggregate = {};

    Object.entries(totalPrimeFactorsAggregate).forEach(([primeFactor, count]) => {
        if (aggregate[primeFactor] === undefined) {
            aggregate[primeFactor] = count;
        } else {
            const currentCount = aggregate[primeFactor];
            if (count > currentCount) {
                aggregate[primeFactor] = count;
            }
        }
    });

    Object.entries(nextPrimeFactorsAggregate).forEach(([primeFactor, count]) => {
        if (aggregate[primeFactor] === undefined) {
            aggregate[primeFactor] = count;
        } else {
            const currentCount = aggregate[primeFactor];
            if (count > currentCount) {
                aggregate[primeFactor] = count;
            }
        }
    });

    return Object.entries(aggregate)
        .reduce((x, [primeFactor, count]) => x * Math.pow(Number(primeFactor), count), 1);
};

module.exports.triangularNumbersWhile = predicate => {
    const numbers = [];

    let x = 1;
    let i = 1;

    while (predicate(x, i - 1)) {
        numbers.push(x);

        i++;
        x = (Math.pow(i, 2) + i) / 2;
    }

    return numbers;
};
