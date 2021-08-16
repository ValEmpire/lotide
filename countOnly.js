// FUNCTION IMPLEMENTATION
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// count all the same values in array
const countAllValuesInArray = (allItems) => {
  // init object
  let allValueCounts = {};

  // loop all the index in array and save the value as properties with value of counts
  for (let i = 0; i < allItems.length; i++) {

    if (allValueCounts[allItems[i]]) {
      allValueCounts[allItems[i]] += 1;
    } else {
      allValueCounts[allItems[i]] = 1;
    }
  }

  // return all valueCounts
  return allValueCounts;
}

const countOnly = (allItems, itemsToCount) => {

  const allValueCounts = countAllValuesInArray(allItems);

  // init object
  let totalItems = {};

  // check if allItems is Array
  if(!Array.isArray(allItems)) {
    return totalItems;
  }

  // check if itemsToCount is object
  if(!(!Array.isArray(itemsToCount) && typeof(itemsToCount) === 'object')){
    return totalItems;
  }

  // loop all prop of itemsToCount
  for (const key in itemsToCount) {

    // get only truthy properties
    if (itemsToCount[key]) {

      // save it as properties with value from returned countAllValuesInArray
      totalItems[key] = allValueCounts[key];
    }
  }
  return totalItems;
};

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);
