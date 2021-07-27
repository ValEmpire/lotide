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

  console.log(`arrays match: ${isPerfectMatch}`);

  return isPerfectMatch;
};

const assertArraysEqual = (arr1, arr2) => {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] === arr2[i]) {
      console.log(`✅✅✅ Assertion Passed: ${arr1[i]} === ${arr2[i]}`);
    } else {
      console.log(`🛑🛑🛑 Assertion Failed: ${arr1[i]} !== ${arr2[i]}`);
    }
  }
};

const isEven = (value) => {
  if (value % 2 === 0)
    return true;
  else
    return false;
};

const middle = (arr) => {

  if (arr.length < 3) return [];

  const isArrEven = isEven(arr.length);

  const middleIndex = Math.floor(arr.length / 2);

  if (isArrEven && arr.length > 2) {
    return [arr[middleIndex - 1], arr[middleIndex]];
  } else {
    return [arr[middleIndex]];
  }
};

// TESTS
assertArraysEqual([3], middle([1, 2, 3, 4, 5]));

eqArrays([3, 4], middle([1, 2, 3, 4, 5, 6]));