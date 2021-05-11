/**
 * Write a function that accepts a string and a target, and returns the last occurrence of an element in a string
 * btw: you're not allowed to use `lastIndexOf`
 *
 * write a lastOccurrence(str)
 * where:
 *   str - string
 *   target - string
 */
// const lastOccurrence = (str, target) => {
//   let i=str.length - 1;
//   for (; i > -1; i-- ) {
//     if (str.charAt(i) === target) {
//       break;
//     }
//   }

//   return i;
// }

const lastOccurrence = (str, target) => {

  function check(index) {
    if (index === -1 || str.charAt(index) === target) {
      return index;
    }

    return check(index - 1);
  }

  return check(str.length - 1);
}

module.exports = lastOccurrence;
