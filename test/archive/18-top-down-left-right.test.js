const assert = require('chai').assert;
const tdlr = require('../questions/18-top-down-left-right');

describe('tdlr!', () => {

  it('tdlr(1, 1) should be null', () => {
    assert.isNull(tdlr(1, 1));
  });

	it('x and y should return an array', () => {
    assert.isTrue(Array.isArray(tdlr(2, 2)));
    assert.isTrue(Array.isArray(tdlr(3, 3)));
    assert.isTrue(Array.isArray(tdlr(4, 4)));

    assert.isFalse(Array.isArray(tdlr(2, 3)));
	});

  it('tdlr(2, 2) should be in the correct order', () => {
    const output = [
      [1, 3],
      [2, 4]
    ];

    assert.deepEqual(tdlr(2, 2), output);
  });

  it('tdlr(3, 3) should be in the correct order', () => {
    const output = [
      [1, 4, 7],
      [2, 5, 8],
      [3, 6, 9]
    ];

    assert.deepEqual(tdlr(3, 3), output);
  });
});
