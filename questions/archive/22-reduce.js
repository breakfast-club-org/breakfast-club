/**
 * Assume there is no Array.prototype.reduce()
 *
 * write a reduce(collection, reducer, initial)
 * where:
 *   collection - array like data structure
 * 	 reducer - function
 *   initial - optional initial value
 */

const collection = [1, 2, 3];
const sumReducer = (acc, val) => acc + val;

const reduce = (collection, reducer, initial) => {
	// no initial value or items in collection, throw error
	if (typeof initial === 'undefined' && collection.length === 0) {
		throw 'Reduce of empty array with no initial value';
	}
	// set initial value if value is undefined
	if (typeof initial === 'undefined') {
		initial = 0;
	}

	let value = initial;
	for (let i = 0; i < collection.length; i++) {
		let currentValue = collection[i];
		value = reducer(value, currentValue);
	}

	return value;
}

module.exports = reduce;