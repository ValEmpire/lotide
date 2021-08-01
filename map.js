
const eqArrays = (arr1, arr2) => {

  let isPerfectMatch = true;

  if (arr1.length !== arr2.length) {
    isPerfectMatch = false;
    return isPerfectMatch;
  }

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

const assertArraysEqual = (arr1, arr2) => {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
  }
}

const test1 = ["ground", "control", "to", "major", "tom"];

const test2 = ["lorem", "ipsum"];

const test3 = ["my name", "is", "Val"];

const map = function (array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

const results1 = map(test1, word => word[0]);
const results2 = map(test2, word => word[0]);
const results3 = map(test3, word => word[0]);

assertArraysEqual(["g", "c", "t", "m", "t"], results1);
assertArraysEqual(["l", "i"], results2);
assertArraysEqual(["m", "i", "V"], results3);




