// Given a 2d array where
// 's' represents the start
// 'e' represents the end
// 0 represents a path
// 1 represents a wall
// determine if the maze is solveable and return true or false

// const exampleMaze = [
// 	['s', 0, 0, 0, 0],
// 	[1, 0, 1, 1, 0],
// 	[0, 0, 1, 0, 0],
// 	[0, 0, 0, 0, 0],
// 	[0, 1, 1, 0, 'f']
// ]

// const expected result = [
// 	['s', 'p', 0, 0, 0],
// 	[1, 'p', 1, 1, 0],
// 	[0, 'p', 1, 0, 0],
// 	[0, 'p', 'p', 'p', 0],
// 	[0, 1, 1, 'p', 'f']
// ]

class MazeRunner {
	constructor() {}

	// return true if the maze is solveable
	findEnd(arr) {}

	// return a 2d array with the shortest path
	// possibly look up the shortest path algo
	shortestPath(arr) {}
}

module.exports = MazeRunner;
