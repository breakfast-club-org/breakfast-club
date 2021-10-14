// given table size definition of NxN, populate a 2d array with numbers in ascending order from top to bottom then left to rightat
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

const tdlr = (x, y) => {
  if (x !== y || x === 1 && y === 1) {
    return null;
  }

  const max = x * y;
  var count = 1;

  const grid = [...Array(x)].map(() => {
    return [...Array(y)];
  })

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid.length; j++) {
      if (count <= max) {
        grid[j][i] = count;
        count = count + 1;
      }
    }
  }

  return grid;
}

module.exports = tdlr;
