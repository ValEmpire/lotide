// FUNCTION IMPLEMENTATION
const assertEqual = function (actual, expected) {

  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }

};

const eqArrays = (arr1, arr2) => {

  let isPerfectMatch = true;

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      isPerfectMatch = false;
      break;
    } else {
      continue;
    }
  }

  return isPerfectMatch;
}

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS