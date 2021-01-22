/**
 * Assume there is no Array.prototype.reduce()
 *
 * write a reduce(collectin, reducer, initial)
 * where:
 *   collection - array like data structure
 * 	 reducer - function
 *   initial - optional initial value
 */
const reduce = (collection, reducer, initial) => {
  for (let i = 0; i < collection.length; i++) {
    if (initial === undefined) {
      initial = collection[i];
    } else {
      initial = reducer(initial, collection[i]);
    }
  }

  return initial;
}

module.exports = reduce;
