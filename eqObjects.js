const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

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


const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
eqObjects(cd, dc); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
eqObjects(cd, cd2); // => false

assertEqual(eqObjects(cd, dc), true);
assertEqual(eqObjects(cd, cd2), false);

