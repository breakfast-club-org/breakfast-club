const assert = require('chai').assert;
const SortingMethods = require('../questions/05-sorting');

describe('SortingMethods', () => {
  describe('bubbleSort()', () => {
    it('sort an array of numbers and return the sorted array', () => {
      const o = new SortingMethods;
      const unsortedArr = [8, 1, 7, 6, 9, 2, 4, 3, 5];
      const result = [1, 2, 3, 4, 5, 6, 7, 8, 9];

      const sortedArr = o.bubbleSort(unsortedArr);

      assert.deepEqual(sortedArr, result);
    });
  });

  describe('insertionSort()', () => {
    it('sort an array of numbers and return the sorted array', () => {
      const o = new SortingMethods;
      const unsortedArr = [8, 1, 7, 6, 9, 2, 4, 3, 5];
      const result = [1, 2, 3, 4, 5, 6, 7, 8, 9];

      const sortedArr = o.insertionSort(unsortedArr);

      assert.deepEqual(sortedArr, result);
    });
  });

  describe('mergeSort()', () => {
    it('sort an array of numbers and return the sorted array', () => {
      const o = new SortingMethods;
      const unsortedArr = [8, 1, 7, 6, 9, 2, 4, 3, 5];
      const result = [1, 2, 3, 4, 5, 6, 7, 8, 9];

      const sortedArr = o.mergeSort(unsortedArr);

      assert.deepEqual(sortedArr, result);
    });

    // it('something should be here', () => {
    //   // can you think of any tests for this? What else would be useful to test?
    // });
  });
});
