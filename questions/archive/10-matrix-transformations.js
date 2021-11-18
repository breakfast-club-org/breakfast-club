// Write a function to return a transformed 2d array of numbers. For edge cases please look at the tests.
// const input = [
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

const longestArrLength = (arr) => {
	let longestArr = arr[0].length;

	for (let i = 1; i < arr.length; i++) {
		if (longestArr < arr[i].length) {
			longestArr = arr[i].length;
		}
	}

	return longestArr;
}

const fillWells = (arr) => {
	let longestArr = longestArrLength(arr);
	console.log(longestArr)

	for (let i = 0; i < arr.length; i++) {
		if (arr[i].length != longestArr) {
			let diff = longestArr - arr[i].length;

			for (let j = 0; j < diff; j++) {
				arr[i].push(null)
			}
		}
	}

	return arr;
}


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
