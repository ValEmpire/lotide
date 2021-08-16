const assert = require('chai').assert;
const { countLetters }   = require('../countLetters');

describe("#countLetters in strings", () => {
  it("returns 1 for [1, 2, 3]", () => {
    const result = countLetters("lighthouse in the house");
    assert.strictEqual(result["l"], 1);
    assert.strictEqual(result["e"], 3);
  });

  it("returns undefined if the arguments used is not a string", () => {
    const result = countLetters(1);
    assert.strictEqual(result, undefined); 
  });

});
