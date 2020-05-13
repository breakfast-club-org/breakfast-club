// Given an array of numbers and a range return a collection of the moving averages
// TIME: O(n)
// SPACE: O(n)
//
// For example
//     + V +   // range of 3, average of [2,3,4]
//     + V + + // range of 4, average of [2,3,4,5] (is this better than the one below?)
//   + + V +   // range of 4, average of [1,2,3,4] (is this better than the one above?)
//   + + V + + // range of 5, average of [1,2,3,4,5]
//  [1,2,3,4,5,6,7]
//
// Example;
//
// targetAverage([1,2,3,4,5,6,7], 3);
// should return [1.5,2,3,4,5,6,6.5];

const getRangeIndexes = (i, arrLength, r) => {
	const distant = Math.round((r - 1) / 2);
	const leftNumbers = Math.floor(distant);
	const rightNumbers = r - leftNumbers - 1;
	let start = 0;
	let end = 0;

	for (let k=leftNumbers; k >= 0; k--) {
		start = i - k;
		if (start >= 0) {
			break;
		}
	}

	for (let k=rightNumbers; k >= 0; k--) {
		end = i + k;
		if (end < arrLength) {
			break;
		}
	}

	return {
		start,
		end
	}
}

const getMovingAverage = (arr, start, end) => {
	let total = 0;
	if (end === start) {
		return arr[start];
	}

	for (let k=start; k <= end; k++) {
		total += arr[k];
	}

	return total/(end-start+1);
}

const targetAverage = (arr, r) => {
	let result = [];
	const len = arr.length;

	for (let i=0; i < len; i++) {
		let {start, end} = getRangeIndexes(i, len, r);
		result.push(getMovingAverage(arr, start, end));
	}

	return result;
}

module.exports = targetAverage;
