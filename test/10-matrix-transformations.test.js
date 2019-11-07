const assert = require('chai').assert;
const matrixTransforms = require('../questions/10-matrix-transformations');

describe('Matrix Transformations', () => {
  describe('matrixTransform', () => {
    it('should transform a 3x3', () => {
			const input = [
				[1, 2, 3],
				[4, 5, 6],
				[7, 8, 9]
			]

			const expectedOutputForThreebyThree = [
				[1, 4, 7],
				[2, 5, 8],
				[3, 6, 9]
			]

			assert.deepEqual(matrixTransforms(input), expectedOutputForThreebyThree);
    });

		it('should transform a 4x3', () => {
			const fourbythree = [
				[1, 2, 3, 4],
				[5, 6, 7, 8],
				[9, 10, 11, 12]
			]

			const threebyfour = [
				[1, 5, 9],
				[2, 6, 10],
				[3, 7, 11],
				[4, 8, 12]
			]

			assert.deepEqual(matrixTransforms(fourbythree), threebyfour);
		});

		it('should transform a 4x3', () => {
			const threebythree = [
				[1, 2, 3],
				[4, 5],
				[6, 7, 8]
			]

			const expectedOutputthreebythree = [
				[1, 4, 6],
				[2, 5, 7],
				[3, null, 8]
			]
			// or you could do this output
			// const expectedOutputthreebythree = [
			// 	[1, 4, 7],
			// 	[2, 5, 8],
			// 	[3, 6]
			// ]


			assert.deepEqual(matrixTransforms(threebythree), expectedOutputthreebythree);
		});

  });
});

// potential variations
// const input = [
// 	[1, 2, 3],
// 	[4, 5],
// 	[6]
// ]
//
// const input = [
// 	[1, 4],
// 	[2, 5],
// 	[3, 6]
// ]
//
// const input = [
// 	[1, 4, 6],
// 	[2, 5],
// 	[3]
// ]
