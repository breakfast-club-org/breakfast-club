// Given two sorted arrays, merge them into a new sortedArray in linear time

// input
// const arr1 = [1, 2, 3, 4, 5, 6, 6, 7, 8, 9, 23, 23];
// const arr2 = [2, 3, 12, 18, 19, 22, 22, 99];

// output
// [1, 2, 2, 3, 3, 4, 5, 6, 6, 7, 8, 9, 12, 18, 19, 22, 22, 23, 23, 99]

const mergeSortedArrays = (arr1, arr2) => {
  const totalLength = arr1.length + arr2.length;
  const result = [];

  let pointerA = 0;
  let pointerB = 0;

  for (let i = 0; i < totalLength; i++) {
    let valueA = arr1[pointerA];
    let valueB = arr2[pointerB];

    if (valueA < valueB) {
      result[i] = valueA;
      pointerA = pointerA + 1;
    } else {
      result[i] = valueB;
      pointerB = pointerB + 1;
    }
  }

  return result;
};

module.exports = mergeSortedArrays;
