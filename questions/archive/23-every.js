/**
 * Check if all elements of a collection match a boolean test
 *
 * write a some(collection, cb)
 * where:
 *   collection - array like data structure
 * 	 cb - function
 */

const collection = [1,3,5];
const isEven = n => n % 2 === 0;

const every = (collection, cb) => {
	return collection.every(cb)
}

module.exports = every;
