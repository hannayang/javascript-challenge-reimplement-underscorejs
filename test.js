const assert = require('assert');
let _ = require('./lib');
// uncomment the following line to checkout the underscore's behavior
if (!!process.env.USE_UNDERSCORE_JS) {
  _ = require('underscore');
}

// first
assert.deepStrictEqual(_.first([1,2,3], 2), [1,2]);
assert.deepStrictEqual(_.first([1,2,3,4], 4), [1,2,3,4]);
assert.deepStrictEqual(_.first([], 4), []);
assert.deepStrictEqual(_.first([], -1), []);
assert.deepStrictEqual(_.first([1,2,3]), 1);

// initial
assert.deepStrictEqual(_.initial([5, 4, 3, 2, 1]), [5,4,3,2]);
assert.deepStrictEqual(_.initial([5, 4, 3, 2, 1], 1), [5,4,3,2]);
assert.deepStrictEqual(_.initial([5, 4, 3, 2, 1], 2), [5,4,3]);
assert.deepStrictEqual(_.initial([5, 4, 3, 2, 1], 3), [5,4]);
assert.deepStrictEqual(_.initial([5, 4, 3, 2, 1], 4), [5]);
assert.deepStrictEqual(_.initial([5, 4, 3, 2, 1], 5), []);
debugger
assert.deepStrictEqual(_.initial([5, 4, 3, 2, 1], 6), []);  // `n` is bigger than the total number of items
assert.deepStrictEqual(_.initial([5, 4, 3, 2, 1], 0), [5,4,3,2,1]);  // `n` is 0
assert.deepStrictEqual(_.initial([5, 4, 3, 2, 1], -1), [5, 4, 3, 2, 1]);  // `n` is negative

// last
assert.deepStrictEqual(_.last([5, 4, 3, 2, 1]), 1);
assert.deepStrictEqual(_.last([5, 4, 3, 2, 1], 1), [1]);
assert.deepStrictEqual(_.last([5, 4, 3, 2, 1], 2), [2, 1]);
assert.deepStrictEqual(_.last([5, 4, 3, 2, 1], 3), [3, 2, 1]);
assert.deepStrictEqual(_.last([5, 4, 3, 2, 1], 0), []);
assert.deepStrictEqual(_.last([5, 4, 3, 2, 1], -1), []);
assert.deepStrictEqual(_.last([5, 4, 3, 2, 1], 6), [5, 4, 3, 2, 1]);

console.log("all passed");
