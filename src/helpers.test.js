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
        assert.deepStrictEqual(_.fibWhile((x, i) => i < 3), [1, 2, 3]);
        assert.deepStrictEqual(_.fibWhile((x, i) => x < 3), [1, 2]);
    });

    it('computes the prime factors', () => {
        assert.deepStrictEqual(_.primeFactors(6), [2, 3]);
        assert.deepStrictEqual(_.primeFactors(12), [2, 2, 3]);
    });

    it('computes whether a value is a palindrome', () => {
        assert.strictEqual(_.isPalindrome(""), false);
        assert.strictEqual(_.isPalindrome("ab"), false);

        assert.strictEqual(_.isPalindrome("a"), true);
        assert.strictEqual(_.isPalindrome("aa"), true);
        assert.strictEqual(_.isPalindrome("aba"), true);
    });
});
