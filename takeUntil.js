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

const takeUntil = function (array, callback) {
  const results = [];
  for (let item of array) {

    if (!callback(item)) {
      results.push(item);
    } else {
      break;
    }
  }
  return results;
}

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
// console.log(results1);

// console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
// console.log(results2);



assertArraysEqual([1, 2, 5, 7, 2], results1);
assertArraysEqual(['I\'ve', 'been', 'to', 'Hollywood'], results2);