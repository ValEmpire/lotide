const flatten = (arrs) => {
  let newArr = [];
  for (let i = 0; i < arrs.length; i++) {
    if (Array.isArray(arrs[i])) {
      newArr = newArr.concat(flatten(arrs[i]));
    } else {
      newArr.push(arrs[i]);
    }
  }

  return newArr;
}

console.log(flatten([1, 2, [3, 4], 5, [6]])); // => [1, 2, 3, 4, 5, 6]