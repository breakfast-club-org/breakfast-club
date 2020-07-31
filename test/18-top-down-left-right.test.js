const assert = require('chai').assert;
const tldr = require('../questions/18-top-down-left-right');

describe('Storage Center!', () => {
	describe('x and y should return an array', () => {
    assert.equal(Array.isArray(tldr(2, 2)), true);
    assert.equal(Array.isArray(tldr(3, 3)), true);
    assert.equal(Array.isArray(tldr(3, 3)), true);

    assert.notEqual(Array.isArray(tldr(2, 3)), false);
	});

  describe('tldr(1, 1) should be null', () => {
    assert.equal(Array.isArray(tldr(1, 1)), null);
  });

  describe('tldr(2, 2) should be in the correct order', () => {
    const output = [
      [1, 3],
      [2, 4]
    ];

    assert.equal(tldr(2, 2), output);
  });

  describe('tldr(3, 3) should be in the correct order', () => {
    const output = [
      [1, 4, 7],
      [2, 5, 8],
      [3, 6, 9]
    ];

    assert.equal(tldr(3, 3), output);
  });
});
