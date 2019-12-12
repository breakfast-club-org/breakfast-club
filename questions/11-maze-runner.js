// Given a 2d array where
// 's' represents the start
// 'e' represents the end
// 0 represents a path
// 1 represents a wall
// determine if the maze is solveable and return true or false

// const exampleMaze = [
// 	['s', 0, 0, 0, 0],
// 	[1, 1, 1, 1, 0],
// 	[0, 0, 1, 0, 0],
// 	[0, 1, 0, 0, 1],
// 	[0, 1, 1, 0, 'f']
// ] // should return true

class MazeRunner {
	constructor() {}

	// return true if the maze is solveable
	findEnd(arr) {
		let maze = arr;
		let isSolveable = false;

		const traverseMaze = function(col, row) {
			if (maze[col][row] === 'f') { // goal
				isSolveable = true;
			} else if (maze[col][row] === 's' || maze[col][row] === 0) { // path
				maze[col][row] = 'visited';

				if (col > 0) {
					traverseMaze(col - 1, row); // check up
				}

				if (row < maze[col].length - 1) {
					traverseMaze(col, row + 1); // check right
				}

				if (col < maze.length - 1) {
					traverseMaze(col + 1, row); // check down
				}

				if (row > 0) {
					traverseMaze(col, row - 1); // check left
				}
			}
		};

		traverseMaze(0, 0);

		return isSolveable;
	}
}

module.exports = MazeRunner;
