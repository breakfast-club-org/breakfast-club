const assert = require('chai').assert;
const Shuffle = require('../questions/06-shuffle');

describe('Shuffle', () => {
  describe('nameOfYourFunction()', () => {
    it('A sorted array should not be sorted', () => {
      const o = new Shuffle;
      const sortedArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

      const shuffledArr = o.nameOfYourFunction(sortedArr);

      assert.notDeepEqual(sortedArr, shuffledArr);
    });
  });
});
