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

module.exports = middle;