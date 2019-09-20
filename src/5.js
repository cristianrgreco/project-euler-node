/*
 * 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
 * What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
 */

const _ = require('./helpers');

module.exports = () => {
    const divisors = _.range(1, 20);
    const multiple = divisors.reduce(_.product);

    for (let i = 1; i < multiple; i++) {
        if (_.isDivisible(i, _.allOf(divisors))) {
            return i;
        }
    }
};
