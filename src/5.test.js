const assert = require('assert');
const solution = require('./5');

it('5', function () {
    this.timeout(5000);
    assert.strictEqual(solution(), 232792560);
});
