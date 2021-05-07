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
  if (str.includes(target)) {
    const len = str.match(new RegExp(target, 'g')).length;
    return len === 1 ? str.indexOf(target) : str.indexOf(target, (str.indexOf(target) + len - 1));
  }

  return -1;
};

module.exports = lastOccurrence;