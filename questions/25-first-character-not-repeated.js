/**
 * Write a function that accepts a string and finds the first character that isn't repeated
 *
 * write a firstCharacterNotRepeated(str)
 * where:
 *   str - string
 */
 const firstCharacterNotRepeated = (str) => {
  // Gut the string of all white space & special chars
  let haystack = str.replace(/[^a-zA-Z0-9]/g, '');

  // Check for a second index instance of each char in string starting from the beginning, return once a second index is not found -1
  for (needle of haystack) {
      if(haystack.indexOf(needle, haystack.indexOf(needle) + 1) === -1) {
        return needle;
      }
  }
}

module.exports = firstCharacterNotRepeated;