/**
 * Write a function that accepts a string and finds the first character that isn't repeated
 *
 * write a firstCharacterNotRepeated(str)
 * where:
 *   str - string
 */
 const firstCharacterNotRepeated = (str) => {
  // Gut the string of all white space
  let haystack = str.replace(/\s+/g, '');

  // Check for a second index instance of each char in string starting from the beginning - return once a second index is not found -1
  for (let i = 0, len = haystack.length; i < len; i++) {
    if(haystack.indexOf(haystack[i], haystack.indexOf(haystack[i]) + 1) === -1) {
      return haystack[i];
    }
  }
}

module.exports = firstCharacterNotRepeated;
