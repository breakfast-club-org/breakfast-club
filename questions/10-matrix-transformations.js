// Write a function to return a transformed 2d array of numbers. For edge cases please look at the tests.
// const intput = [
// 	[1, 2, 3],
// 	[4, 5, 6],
// 	[7, 8, 9]
// ]
//
// const output = [
// 	[1, 4, 7],
// 	[2, 5, 8],
// 	[3, 6, 9]
// ]
//


const matrixTransformation = (arr) => {
	let transformed = [];
	let columnLength = 0;

	arr.forEach(row => {
		if (row.length > columnLength) {
			columnLength = row.length;
		}
	})

	arr.forEach(row => {
		row.forEach((column, r) => {
			if (transformed[r]) {
				// create a row
				transformed[r].push(column);
			} else {
				transformed[r]=[column];
			}
		});
		for (let i=0; i < columnLength - row.length; i++) {
			transformed[transformed.length-1].push(null);
		}
	});

	return transformed;
}

module.exports = matrixTransformation;
