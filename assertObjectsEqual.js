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

const eqObjects = function (object1, object2) {

  let isEqualObjects = true;

  const obj1Array = Object.keys(object1);

  const obj2Array = Object.keys(object2);

  if (obj1Array.length !== obj2Array.length) {
    isEqualObjects = false;
    return isEqualObjects;
  }

  for (const key of obj1Array) {

    if (Array.isArray(object1[key])) {

      isEqualObjects = eqArrays(object1[key], object2[key]);

      if (!isEqualObjects) {
        isEqualObjects = false;
        return isEqualObjects;
      }

    } else if (object1[key] !== object2[key]) {

      isEqualObjects = false;
      return isEqualObjects;

    } else {
      continue;
    }
  }

  return isEqualObjects;
};


const assertObjectsEqual = function (actual, expected) {

  const inspect = require('util').inspect; // <= add this line

  const actualString = inspect(actual);

  const expectedString = inspect(expected);

  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actualString} === ${expectedString}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actualString} !== ${expectedString}`);
  }

};

assertObjectsEqual({ a: ["1", "2"], b: 2 }, { b: 2, a: ["1"] })