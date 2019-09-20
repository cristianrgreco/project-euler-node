const assert = require('assert');
const _ = require('./helpers');

describe('helpers', () => {
    it('computes the sum', () => {
        assert.strictEqual([2, 2].reduce(_.sum), 4);
    });

    it('computes the product', () => {
        assert.strictEqual([3, 3].reduce(_.product), 9);
    });

    it('returns the last element of an array', () => {
        assert.strictEqual([1, 2, 3].reduce(_.last), 3);
    });

    it('returns an inclusive range', () => {
        assert.deepStrictEqual(_.range(1, 3), [1, 2, 3]);
    });

    it('returns whether a value is even', () => {
        assert.strictEqual(_.isEven(1), false);
        assert.strictEqual(_.isEven(2), true);
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
});
