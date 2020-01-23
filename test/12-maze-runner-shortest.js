const assert = require('chai').assert;
const MazeRunner = require('../questions/11-maze-runner');

describe('Matrix Transformations', () => {
	const mazeRunner = new MazeRunner();

	describe('findEnd', () => {
		it('it should return a 2d array with the shortest possible path', () => {
			const input = [
				['s', 0, 0, 0, 0],
				[1, 0, 1, 1, 0],
				[0, 0, 1, 0, 0],
				[0, 0, 0, 0, 0],
				[0, 1, 1, 0, 'f']
			]

			const expectedResult = [
				['s', 'p', 0, 0, 0],
				[1, 'p', 1, 1, 0],
				[0, 'p', 1, 0, 0],
				[0, 'p', 'p', 'p', 1],
				[0, 1, 1, 'p', 'f']
			]

			assert.deepEqual(mazeRunner.shortestPath(input), expectedResult);
		});
	});
});
