const assert = require('chai').assert;
const tail   = require('../tail');

describe("#tail", () => {
  it("returns [2, 3] for [1, 2, 3]", () => {
    assert.deepEqual(tail([1, 2, 3]), [2, 3]);
  });

  it("returns undefined for arrays with length less or equal to 1", () => {
    assert.strictEqual(tail([1]), undefined);
  });

  it("returns undefined if passed an argument other than arrays", () => {
    assert.strictEqual(tail("not array"), undefined);
  });

  it("Original array should still have still be 3 elements", () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    assert.deepEqual(tail(words), ["Lighthouse", "Labs"]);
    assert.deepEqual(words, ["Yo Yo", "Lighthouse", "Labs"]);
  });

});