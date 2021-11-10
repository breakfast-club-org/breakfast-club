const assert = require('chai').assert;
const Shuffle = require('../questions/06-shuffle');

describe('Shuffle', () => {
  describe('shuffleForwards()', () => {
    it('A sorted array should not be sorted', () => {
      const o = new Shuffle;
      const sortedArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

      const shuffledArr = o.shuffleForwards(sortedArr);
      const sortedShuffleArr = shuffledArr.sort();

      assert.deepEqual(sortedArr, sortedShuffleArr);
    });
  });

  describe('shuffleBackwards()', () => {
    it('A sorted array should not be sorted', () => {
      const o = new Shuffle;
      const sortedArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

      const shuffledArr = o.shuffleBackwards(sortedArr);
      const sortedShuffleArr = shuffledArr.sort();

      assert.deepEqual(sortedArr, sortedShuffleArr);
    });
  });

  describe('fisherYatesShuffle()', () => {
    it('A sorted array should not be sorted', () => {
      const o = new Shuffle;
      const sortedArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

      const shuffledArr = o.fisherYatesShuffle(sortedArr);
      const sortedShuffleArr = shuffledArr.sort();

      assert.deepEqual(sortedArr, sortedShuffleArr);
    });
  });
});
