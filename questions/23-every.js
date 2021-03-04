/**
 * Check if all elements of a collection match a boolean test
 *
 * write a some(collection, cb)
 * where:
 *   collection - array like data structure
 * 	 cb - function
 */

const collection = [0, 2, 4];
const isEven = n => n % 2 === 0;

const every = (collection, cb) => {
	if (collection.every(cb)) {
		return true; // return true if even
	} else {
		return false; // return false if not even
	}
}

module.exports = every;
