const assertArraysEqual = (arr1, arr2) => {

  if (arr1.length !== arr2.length) {
    console.log(`Assertion Failed: Arrays must be of same length`);
  }


  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] === arr2[i]) {
      console.log(`Assertion Passed: ${arr1[i]} === ${arr2[i]}`);
    } else {
      console.log(`Assertion Failed: ${arr1[i]} !== ${arr2[i]}`);
    }
  }
}

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

  console.log(`isPerfectMatch: ${isPerfectMatch}`)

  return isPerfectMatch;
}

const letterPositions = function (sentence) {

  const results = {};

  for (let i = 0; i < sentence.length; i++) {

    let character = sentence.charAt(i);

    if (character !== " ") {

      if (results[character]) {
        results[character].push(i)
      } else {
        results[character] = [i];
      }
    }

  }

  return results;
};

assertArraysEqual(letterPositions("hello").e, [1]);

eqArrays(letterPositions("lighthouse in the house").i, [1, 11])