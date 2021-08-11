const assert = require('chai').assert;
const middle   = require('../middle');

describe("#middle", () => {
  it("returns empty array for arrays with less than or equal to 1", () => {
    assert.deepEqual(middle([1]), []);
  });

  it("returns an array with single middle element for arrays with odd number of elements ", () => {
    assert.deepEqual(middle([1,2,3]), [2]);
    assert.deepEqual(middle([1,2,3,4,5]), [3]);
  });

  it("returns an array containing the two elements in the middle for arrays with an even number of elements", () => {
    assert.deepEqual(middle([1,2,3,4]), [2,3]);
    assert.deepEqual(middle([1,2,3,4,5,6]), [3,4]);
  })

});