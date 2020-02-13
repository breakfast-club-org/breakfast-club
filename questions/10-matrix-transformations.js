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
	const reSort = [];
	const evenArr = fillWells(arr);

	for (let i = 0; i < evenArr.length; i++) {
		for (let j = 0; j < evenArr[i].length; j++) {
			let item = evenArr[i][j];

			if (i === 0) {
				reSort.push([item]);
			} else {
				reSort[j].push(item);
			}
		}
	}

	return reSort;
}

module.exports = matrixTransformation;
