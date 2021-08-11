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


// const assertEqual = require('../assertEqual');
// const tail = require("../tail");

// const result = tail(["Hello", "Lighthouse", "Labs"]);
// assertEqual(result.length, 2); // ensure we get back two elements
// assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
// assertEqual(result[1], "Labs"); // ensure second element is "Labs"

// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3); // original array should still have 3 elements!