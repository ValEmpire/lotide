const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');
const eqArrays = require('../eqArrays');


// TESTS
assertArraysEqual([3], middle([1, 2, 3, 4, 5]));

assertArraysEqual([true], [eqArrays([3, 4], middle([1, 2, 3, 4, 5, 6]))]);

assertArraysEqual([], middle([2]));

assertArraysEqual([], middle([]));