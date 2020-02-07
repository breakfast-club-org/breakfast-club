// Given two sorted arrays, merge them into a new sortedArray in linear time

// input
// const arr1 = [1, 2, 3, 4, 5, 6, 6, 7, 8, 9, 23, 23];
// const arr2 = [2, 3, 12, 18, 19, 22, 22, 99];

// output
// [1, 2, 2, 3, 3, 4, 5, 6, 6, 7, 8, 9, 12, 18, 19, 22, 22, 23, 23, 99]

const mergeSortedArrays = (arr1, arr2) => {
  const iter1 = arr1.values();
  const iter2 = arr2.values();

  let n1 = iter1.next();
  let n2 = iter2.next();
  const result = [];

  while (!(n1.done || n2.done)) {
    if (n1.value < n2.value) {
      result.push(n1.value);
      n1 = iter1.next();
    } else if (n1.value > n2.value) {
      result.push(n2.value);
      n2 = iter2.next();
    } else {
      result.push(n1.value);
      result.push(n2.value);
      n1 = iter1.next();
      n2 = iter2.next();
    }
  }

  while (!n1.done) {
    result.push(n1.value);
    n1 = iter1.next();
  }

  while (!n2.done) {
    result.push(n2.value);
    n2 = iter2.next();
  }

  return result;
};

module.exports = mergeSortedArrays;
