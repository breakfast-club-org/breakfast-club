// Given a 2d array where
// 's' represents the start
// 'f' represents the end
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
const END = 'f';

class MazeRunner {
	constructor() {
	}

	// return true if the maze is solveable
	findEnd(maze) {
		this.maze = maze;
		return this.visit(0, 0);
	}

	isValid(x, y) {
		const r = this.maze[x] !== undefined && this.maze[x][y] !== undefined;

		return r;
	}

	spotValue(row, column) {
		return this.maze[row][column];
	}

	visit(row, column) {
		if (!this.isValid(row, column)) { return false; }

		let spotValue = this.spotValue(row, column);

		if (spotValue === 'x') { return false; } // visited
		if (spotValue === 1) { return false }

		this.maze[row][column] = 'x'; // mark visited
		if (spotValue === END) { return true; }

		//
		// else check all directions
		//

		// else
		// check right
		if (this.visit(row, column + 1)) {
			return true;
		}

		// check up
		if (this.visit(row - 1, column)) {
			return true;
		}

		// check down
		if (this.visit(row + 1, column)) {
			return true;
		}

		// left
		if (this.visit(row, column - 1)) {
			return true;
		}

		return false;
	}
}

module.exports = MazeRunner;
