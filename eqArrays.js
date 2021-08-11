const eqArrays = (arr1, arr2) => {

  let isPerfectMatch = true;

  if(arr1.length !== arr2.length){
    return isPerfectMatch = false;
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

module.exports = eqArrays;