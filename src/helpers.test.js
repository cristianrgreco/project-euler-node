const assert = require('assert');
const _ = require('./helpers');

describe('helpers', () => {
    it('computes the sum', () => {
        assert.strictEqual([2, 2].reduce(_.sum), 4);
    });

    it('computes the product', () => {
        assert.strictEqual([3, 3].reduce(_.product), 9);
    });

    it('computes a number raised to the given power', () => {
        assert.strictEqual(_.power(3)(2), 8);
    });

    it('returns the last element of an array', () => {
        assert.strictEqual([1, 2, 3].reduce(_.last), 3);
    });

    it('returns an inclusive range', () => {
        assert.deepStrictEqual(_.range(1, 3), [1, 2, 3]);
    });

    it('returns an inclusive range while a predicate is true', () => {
        assert.deepStrictEqual(_.rangeWhile(1, x => x < 4), [1, 2, 3]);
        assert.deepStrictEqual(_.rangeWhile(1, (x, i) => i < 4), [1, 2, 3, 4]);
    });

    it('computes whether a value is even', () => {
        assert.strictEqual(_.isEven(1), false);
        assert.strictEqual(_.isEven(2), true);
    });

    it('returns a trimmed string', () => {
        assert.strictEqual(_.trim('\n a '), 'a');
    });

    it('return an array joined by a delimiter', () => {
        assert.strictEqual(['a', 'b', 'c'].reduce(_.joining(", ")), 'a, b, c');
    });

    it('returns a flattened array', () => {
        assert.deepStrictEqual([[1], [2], [3]].reduce(_.flatten), [1, 2, 3]);
    });

    it('computes whether a number is divisible by all divisors', () => {
        assert.strictEqual(_.isDivisible(6, _.allOf([1, 2, 3, 6])), true);
        assert.strictEqual(_.isDivisible(6, _.allOf([1, 2, 3, 4])), false);
    });

    it('computes whether a number is divisible by any divisors', () => {
        assert.strictEqual(_.isDivisible(6, _.anyOf([1, 2, 3, 6])), true);
        assert.strictEqual(_.isDivisible(6, _.anyOf([1, 2, 3, 4])), true);
    });

    it('computes a fibonacci range while predicate is satisfied', () => {
        assert.deepStrictEqual(_.fibWhile((x, i) => x < 3), [1, 2]);
        assert.deepStrictEqual(_.fibWhile((x, i) => i < 3), [1, 2, 3]);
    });

    it('computes the prime factors', () => {
        assert.deepStrictEqual(_.primeFactors(3), [3]);
        assert.deepStrictEqual(_.primeFactors(6), [2, 3]);
        assert.deepStrictEqual(_.primeFactors(12), [2, 2, 3]);
    });

    it('computes the factors', () => {
        assert.deepStrictEqual(_.factors(3), [1, 3]);
        assert.deepStrictEqual(_.factors(6), [1, 2, 3, 6]);
        assert.deepStrictEqual(_.factors(28), [1, 2, 4, 7, 14, 28]);
    });

    it('computes whether a value is a palindrome', () => {
        assert.strictEqual(_.isPalindrome(""), false);
        assert.strictEqual(_.isPalindrome("ab"), false);

        assert.strictEqual(_.isPalindrome("a"), true);
        assert.strictEqual(_.isPalindrome("aa"), true);
        assert.strictEqual(_.isPalindrome("aba"), true);
    });

    it('computes the prime numbers up to n', () => {
        assert.deepStrictEqual(_.primes(10), [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]);
    });

    it('computes the lowest common multiple', () => {
        assert.strictEqual([2, 3, 4, 5].reduce(_.lcm), 60);
        assert.strictEqual([420, 8].reduce(_.lcm), 840);
        assert.strictEqual(_.range(1, 10).reduce(_.lcm), 2520);
    });

    it('computes triangular numbers while predicate is satisfied', () => {
        assert.deepStrictEqual(_.triangularNumbersWhile((x, i) => x < 10), [1, 3, 6]);
        assert.deepStrictEqual(_.triangularNumbersWhile((x, i) => i < 10), [1, 3, 6, 10, 15, 21, 28, 36, 45, 55]);
    });
});
