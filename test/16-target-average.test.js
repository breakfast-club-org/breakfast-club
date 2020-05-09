const assert = require('chai').assert;
const targetAverage = require('../questions/16-target-average');

describe('Target Average How Exciting!', () => {
	describe('Given a range of 1', () => {
		const input = [1, 2, 3, 4, 5, 6, 7];
		const expectedResult = [1, 2, 3, 4, 5, 6, 7];

		assert.deepEqual(targetAverage(arr1, 1), expectedResult);
	});

	describe('Given a range of 2', () => {
		const input = [1, 2, 3, 4, 5, 6, 7];
		const expectedResult = []; // how you handle this is up to you

		assert.deepEqual(targetAverage(arr1, 2), expectedResult);
	});

	describe('Given a range of 3', () => {
		const input = [1, 2, 3, 4, 5, 6, 7];
		const expectedResult = [1.5, 2, 3, 4, 5, 6, 6.5];

		assert.deepEqual(targetAverage(arr1, 3), expectedResult);
	});

	describe('Given a range of 4', () => {
		const input = [1, 2, 3, 4, 5, 6, 7];
		const expectedResult = []; // how you handle this is up to you

		assert.deepEqual(targetAverage(arr1, 4), expectedResult);
	});

	describe('Given a range of 5', () => {
		const input = [1, 2, 3, 4, 5, 6, 7];
		const expectedResult = [2, 2.5, 3, 4, 5, 5.5, 6];

		assert.deepEqual(targetAverage(arr1, 5), expectedResult);
	});
});
