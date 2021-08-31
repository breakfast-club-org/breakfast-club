/**
 * Check if all elements of a collection match a boolean test
 *
 * write a some(collection, cb)
 * where:
 *   collection - array like data structure
 * 	 cb - function
 */
const every = (collection, cb) => {
	/* implmentation */
	return Array.from(collection).reduce((prev, curr) => prev && cb(curr), true);
}

module.exports = every;
