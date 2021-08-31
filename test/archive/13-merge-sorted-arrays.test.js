const assert = require('chai').assert;
const mergeSortedArrays = require('../questions/13-merge-sorted-arrays');

describe('Merge Sorted Arrays', () => {
	describe('two presorted arrays', () => {
		it('it should return a merged-sorted array', () => {
			const arr1 = [1, 2, 3, 4, 5, 6, 6, 7, 8, 9, 23, 23];
			const arr2 = [2, 3, 12, 18, 19, 22, 22, 99];

			const expectedResult = [1, 2, 2, 3, 3, 4, 5, 6, 6, 7, 8, 9, 12, 18, 19, 22, 22, 23, 23, 99];

			assert.deepEqual(mergeSortedArrays(arr1, arr2), expectedResult);
		});

		it('it should return a merged-sorted array when one of the array is empty', () => {
			const arr1 = [];
			const arr2 = [2, 3, 12, 18, 19, 22, 22, 99];

			const expectedResult = arr2;

			assert.deepEqual(mergeSortedArrays(arr1, arr2), expectedResult);
		});

		it('it should return a merged-sorted array when both of the arrays are empty', () => {
			const arr1 = [];
			const arr2 = [];

			const expectedResult = [];

			assert.deepEqual(mergeSortedArrays(arr1, arr2), expectedResult);
		});

	});
});
