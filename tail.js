// FUNCTION IMPLEMENTATION
const tail = function (arr) {
  if (Array.isArray(arr) && arr.length > 1) {
    const newArr = [];

    for (let i = 1; i < arr.length; i++) {
      newArr.push(arr[i]);
    }

    return newArr;
  }
  return undefined;
}

module.exports = tail;