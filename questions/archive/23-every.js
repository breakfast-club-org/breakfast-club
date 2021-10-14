const reduce = require('./questions/22-reduce');
/**
 * Check if all elements of a collection match a boolean test
 *
 * write a some(collection, cb)
 * where:
 *   collection - array like data structure
 * 	 cb - function
 */
const every = (collection, cb) => {
  const test = reduce(collection, cb, collection[0])

  if (test === undefined) {
    return true;
  }

  return test
}

module.exports = every;
