// given table size definition of NxN, populate a 2d array with numbers in ascending order from top to bottom then left to right
// sizeDefinition: 1, 1
// output: null;
//
// sizeDefinition: 2, 2
// output: [
//   [1, 3],
//   [2, 4]
// ]
//
// sizeDefinition: 3, 3
// output: [
//   [1, 4, 7],
//   [2, 5, 8],
//   [3, 6, 9]
// ]

const makeRow = (row, itemsInRow) => {
	const r = Array(itemsInRow).fill(0);

	r.forEach((v, i, a) => {
		// row is zero based
		a[i] = (row + 1) + i * itemsInRow;
	});

	return r;
}

const tdlr = (x, y) => {
	if (x !== y || x === 1) {
		return null;
	}

	const r = [];
	for (let i=0; i < x; i++) {
		r[i] = makeRow(i, x);
	}

	return r;
}

module.exports = tdlr;
