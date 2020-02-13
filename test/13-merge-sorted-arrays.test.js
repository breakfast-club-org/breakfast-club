const assert = require('chai').assert;
const mergeSortedArrays = require('../questions/13-merge-sorted-arrays');

describe('Merge Sorted Arrays', () => {
	describe('findEnd', () => {
		it('it should return a 2d array with the shortest possible path', () => {
      const arr1 = [1, 2, 3, 4, 5, 6, 6, 7, 8, 9, 23, 23];
      const arr2 = [2, 3, 12, 18, 19, 22, 22, 99];

      const expectedResult = [1, 2, 2, 3, 3, 4, 5, 6, 6, 7, 8, 9, 12, 18, 19, 22, 22, 23, 23, 99];

      mergeSortedArrays(arr1, arr2);

			assert.deepEqual(mergeSortedArrays(arr1, arr2), expectedResult);
		});
	});
});
