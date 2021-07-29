const assertArraysEqual = (arr1, arr2) => {

  if (arr1.length !== arr2.length) {
    console.log(`Assertion Failed: Arrays must be of same length`);
  }


  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] === arr2[i]) {
      console.log(`✅✅✅ Assertion Passed: ${arr1[i]} === ${arr2[i]}`);
    } else {
      console.log(`🛑🛑🛑 Assertion Failed: ${arr1[i]} !== ${arr2[i]}`);
    }
  }
}