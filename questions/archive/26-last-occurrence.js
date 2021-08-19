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
  let lastIndex = -1
  for (let i = 0; i < str.length; i++) {
    if (str[i] === target) {
      lastIndex = i
    }
  }
  return lastIndex
}

module.exports = lastOccurrence;
