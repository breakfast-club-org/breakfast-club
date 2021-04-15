/**
 * Write a function that accepts a string and finds the first character that isn't repeated
 *
 * write a firstCharacterNotRepeated(str)
 * where:
 *   str - string
 */
const firstCharacterNotRepeated = (str) => {
  let haystack = str.replace(/\s+/g, '');
  let haystackSorted = haystack;
  let haystackLength = {
    initial: haystack.length,
    before: null,
    after: null
  };

  for (let i = 0; i < haystackLength.initial; i++) {
    haystackLength.before = haystackSorted.length;
    haystackSorted = haystackSorted.replace(new RegExp(haystack[i], 'g'), '');
    haystackLength.after = haystackSorted.length;

    if (haystackLength.before - haystackLength.after === 1) {
      return haystack[i];
    }
  }
}

module.exports = firstCharacterNotRepeated;
