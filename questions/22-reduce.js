/**
 * Assume there is no Array.prototype.reduce()
 *
 * write a reduce(collection, reducer, initial)
 * where:
 *   collection - array like data structure
 * 	 reducer - function
 *   initial - optional initial value
 */

const collection = [1, 2, 3, 4, 5];
const initial = 0;
const sumReducer = (acc, val) => acc + val;

const reduce = (collection, reducer, initial) => {
	let value = initial;

	for (let i = 0; i < collection.length; i++) {
		let currentValue = collection[i];
		value = reducer(value, currentValue);
	}

	return value;
}

console.log('reduce:', reduce(collection, sumReducer, initial));

module.exports = reduce;