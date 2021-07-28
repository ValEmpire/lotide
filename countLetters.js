// FUNCTION IMPLEMENTATION
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = (str) => {

  // init object
  let allLettersCount = {};

  for (const letter of str) {
    if (letter !== ' ') {

      if (allLettersCount[letter]) {
        allLettersCount[letter] += 1
      } else {
        allLettersCount[letter] = 1
      }
    }
  }
  return allLettersCount;
}

const result1 = countLetters("lighthouse in the house");

assertEqual(result1["l"], 1);
assertEqual(result1["g"], 1);
assertEqual(result1["e"], 3);
assertEqual(result1["u"], 2);
