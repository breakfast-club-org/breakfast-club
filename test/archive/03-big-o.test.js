const assert = require('chai').assert;
const BigO = require('../questions/03-big-o');

describe('BigO', () => {
  describe('factorial()', () => {
    it('should output the factorial of a number', () => {
      const o = BigO.factorial;

      assert.equal(o(1), 1);
      assert.equal(o(2), 2);
      assert.equal(o(3), 6);
      assert.equal(o(4), 24);
      assert.equal(o(5), 120);
    });
  });

  describe('subSetsOfAString()', () => {
    it('should output an array', () => {
      const o = BigO.subSetsOfAString;

      assert.equal(Array.isArray(o([''])), true);
    });

    it('should output subsets of a string', () => {
      const o = BigO.subSetsOfAString;

      assert.deepEqual(o(''), ['']);
      assert.deepEqual(o('a'), [ '', 'a' ]);
      assert.deepEqual(o('ab'), ['', 'a', 'b', 'ab']);
    });
  });

  describe('permutationsOfAString()', () => {
    it('should output an array', () => {
      const o = BigO.permutationsOfAString;

      assert.equal(Array.isArray(o([''])), true);
    });

    it('should output subsets of a string', () => {
      const o = BigO.permutationsOfAString;

      assert.deepEqual(o(''), ['']);
      assert.deepEqual(o('a'), ['a']);
      assert.deepEqual(o('ab'), ['ab', 'ba']);
      assert.deepEqual(o('abc'), ['abc', 'acb', 'bac', 'bca', 'cab', 'cba']);
    });
  });
});
