/**
 * Assume there is no Array.prototype.reduce()
 *
 * write a reduce(collectin, reducer, initial)
 * where:
 *   collection - array like data structure
 * 	 reducer - function
 *   initial - optional initial value
 */
const withValue = v => fn => arr => {
	function recur([acc, current, ...rest]) {
		if (!current) {
			return acc;
		}

		let newAcc = fn(acc, current);

		if (!rest.length) {
			return newAcc;
		}

		return recur([newAcc, ...rest]);
	}

	if (v === undefined && arr.length === 0) {
		throw new TypeError('Reduce of empty array with no initial value');
	}

	if (v !== undefined) {
		arr = [v, ...arr];
	}

	return recur(arr);
};

function reduce(collection, reducer, intial) {
	/* implmentation */
	return withValue(intial)(reducer)(Array.from(collection));
}

module.exports = reduce;
