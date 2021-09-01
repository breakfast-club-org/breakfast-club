/**
 * Write a function that accepts a string and a target, and returns the last occurrence of an element in a string
 * btw: you're not allowed to use `lastIndexOf`
 *
 * write a lastOccurrence(str)
 * where:
 *   str - string
 *   target - string
 */
const lastOccurrence = (str, target) => {
  const end = str.length - 1;

  for (let i = end; i >= 0; i--) {
    if (target === str[i]) {
      return i;
    }
  }

  return -1;
}

module.exports = lastOccurrence;
