// FUNCTION IMPLEMENTATION
const countLetters = (str) => {

  if(typeof(str) !== 'string'){
    return undefined;
  }

  // init object
  let allLettersCount = {};

  for (const letter of str) {
    if (letter !== ' ') {

      if (allLettersCount[letter]) {
        allLettersCount[letter] += 1
      } else {
        allLettersCount[letter] = 1
      }
    }
  }
  return allLettersCount;
}

module.exports = { countLetters }