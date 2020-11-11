const assert = require('assert');
let _ = require('./lib');
// uncomment the following line to checkout the underscore's behavior
// _ = require('underscore');

// first
assert.deepEqual(_.first([1,2,3], 2), [1,2]);
assert.deepEqual(_.first([1,2,3,4], 4), [1,2,3,4]);
assert.deepEqual(_.first([], 4), []);
assert.deepEqual(_.first([], -1), []);

console.log("all passed");
