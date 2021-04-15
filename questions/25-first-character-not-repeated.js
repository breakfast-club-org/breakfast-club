/**
 * Write a function that accepts a string and finds the first character that isn't repeated
 *
 * write a firstCharacterNotRepeated(str)
 * where:
 *   str - string
 */
const firstCharacterNotRepeated = (str) => {
  const map = {};

  for (let c of str) {
    (map[c])
      ? map[c] = map[c] + 1
      : map[c] = 1;
  }

  for (c in map) {
    if (map[c] === 1) {
      return c;
    }
  }
}

module.exports = firstCharacterNotRepeated;
