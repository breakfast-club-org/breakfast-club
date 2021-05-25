const assert = require('chai').assert;
const MazeRunner = require('../questions/11-maze-runner');

describe('Matrix Transformations', () => {
	const mazeRunner = new MazeRunner();

	describe('findEnd', () => {
		it('it should return true if it is solveable', () => {
			const input = [
				['s', 0, 0, 0, 0],
				[1, 1, 1, 1, 0],
				[0, 0, 0, 0, 0],
				[0, 1, 1, 1, 1],
				[0, 0, 0, 0, 'f']
			]

			assert.isTrue(mazeRunner.findEnd(input), 'Yay!');
		});

		it('it should return false if it is not solveable', () => {
			const input = [
				['s', 0, 0, 0, 0],
				[1, 1, 1, 1, 1],
				[0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0],
				[0, 0, 0, 0, 'f']
			]

			assert.isFalse(mazeRunner.findEnd(input), 'Boo!');
		});
	});
});
