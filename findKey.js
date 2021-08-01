const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const obj = {
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
};

const findKey = (obj, callback) => {
  let starKey = '';
  for (const key in obj) {
    if (callback(obj[key])) {
      starKey = key;
      break;
    }
  }
  return starKey;
}

const result1 = findKey(obj, x => x.stars === 2) // => "noma"

// TEST CODE
assertEqual("noma", result1);
