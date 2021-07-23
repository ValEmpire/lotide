const assertArraysEqual = (arr1, arr2) => {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] === arr2[i]) {
      console.log(`Assertion Passed: ${arr1[i]} === ${arr2[i]}`);
    } else {
      console.log(`Assertion Failed: ${arr1[i]} !== ${arr2[i]}`);
    }
  }
}

const without = (source, itemsToRemove) => {

  let newArr = [];

  for (let i = 0; i < source.length; i++) {
    let compareVal = source[i];

    let isIndexToBeRemoved = false;

    for (let j = 0; j < itemsToRemove.length; j++) {
      if (compareVal === itemsToRemove[j]) {
        isIndexToBeRemoved = true;
      }
    }

    if (!isIndexToBeRemoved) newArr.push(compareVal);

    isIndexToBeRemoved = false;
  }

  return newArr;
}

console.log(without(["1", "2", "3"], [1, 2, "3"]));

const words = ["hello", "world", "lighthouse"];

without(words, ["lighthouse"]); // no need to capture return value for this test case

// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);