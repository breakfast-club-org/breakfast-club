/**
 * Assume there is no Array.prototype.reduce()
 *
 * write a reduce(collectin, reducer, initial)
 * where:
 *   collection - array like data structure
 * 	 reducer - function
 *   initial - optional initial value
 */
// const reduce = (collection, reducer, initial) => {
//   for (let i = 0; i < collection.length; i++) {
//     if (initial === undefined) {
//       initial = collection[i];
//     } else {
//       initial = reducer(initial, collection[i]);
//     }
//   }
//
//   return initial;
// }

const reduce = (collection, reducer, initial) => {
  if (collection === undefined) {
    throw new TypeError('Reduce of empty array with no initial value');
  }

  collection.forEach((item) => {
    if (initial === undefined) {
      initial = collection[0];
    } else {
      initial = reducer(initial, item)
    }
  })

  return initial
}

module.exports = reduce;
