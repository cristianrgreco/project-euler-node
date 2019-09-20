/*
 * The sum of the squares of the first ten natural numbers is,
 *
 * 1^2 + 2^2 + ... + 10^2 = 385
 *
 * The square of the sum of the first ten natural numbers is,
 *
 * (1 + 2 + ... + 10)^2 = 552^ = 3025
 *
 * Hence the difference between the sum of the squares of the first ten natural numbers
 * and the square of the sum is 3025 − 385 = 2640.
 *
 * Find the difference between the sum of the squares of the first one hundred natural numbers
 * and the square of the sum.
 */

const _ = require('./helpers');

module.exports = () => {
    const sumOfSquares = _
        .range(1, 100)
        .map(_.power(2))
        .reduce(_.sum);

    const squareOfSum = _
        .power(2)(_
            .range(1, 100)
            .reduce(_.sum));

    return squareOfSum - sumOfSquares;
};
