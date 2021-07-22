const head = function (arr) {
  if (Array.isArray(arr) && arr.length > 0) {
    return arr[0];
  }
  return undefined;
};

const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};

