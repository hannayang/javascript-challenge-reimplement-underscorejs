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

console.log("all passed");
