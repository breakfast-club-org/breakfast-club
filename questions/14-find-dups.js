// Given an array of numbers that can only be duplciated once, return an array of the duplciates in the order you found them in
// TIME: O(n)
// SPACE: O(1) I think?
// For example if you had an array such as
// const arr = [1, 2, 2, 3, 1, 4, 6, 5, 6, 4];
// the result should be
// [2, 1, 6, 4]

const findDups = (arr) => {
	const dups = [];

	for (let i = 0; i < arr.length; i++) {
		let val = arr[Math.abs(arr[i])];

		if (val >= 0) {
			arr[Math.abs(arr[i])] = -arr[Math.abs(arr[i])];
		} else {
			dups.push(Math.abs(arr[i]));
		}
	}

	return dups;
}

module.exports = findDups;
