const assert = require('chai').assert;
const Shuffle = require('../questions/06-shuffle');

describe('Shuffle', () => {
  describe('fisherYatesShuffle()', () => {
    it('A shuffled array should not have the same order as the original', () => {
      const o = new Shuffle;
      const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

      const shuffledArr = o.fisherYatesShuffle([...arr]);

      assert.isArray(shuffledArr);
      assert.notDeepEqual(shuffledArr, arr);
    });
  });
});
