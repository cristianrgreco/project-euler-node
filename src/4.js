/*
 * A palindromic number reads the same both ways.
 * The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
 *
 * Find the largest palindrome made from the product of two 3-digit numbers.
 */

const _ = require('./helpers');

module.exports = () => {
    const numbers = _
        .range(1, 999)
        .map(a => _
            .range(1, 999)
            .map(b => a * b))
        .reduce(_.flatten)
        .filter(_.isPalindrome);

    return Math.max(...numbers);
};
