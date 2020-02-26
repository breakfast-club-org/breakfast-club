const assert = require('chai').assert;
const findDups = require('../questions/14-find-dups');

describe('Find duplicates', () => {
	describe('findDups', () => {
		it('it should log out an array of duplicates', () => {
			const input = [1, 2, 2, 3, 1, 4, 6, 5, 6, 4];
			const expectedResult = [2, 1, 6, 4];

			assert.deepEqual(findDups(input), expectedResult);
		});
	});
});
