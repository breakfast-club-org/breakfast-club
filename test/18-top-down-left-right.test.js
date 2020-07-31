const assert = require('chai').assert;
const tdlr = require('../questions/18-top-down-left-right');

describe('Storage Center!', () => {

  it('tdlr(1, 1) should be null', () => {
    assert.equal(tdlr(1, 1), null);
  });

	it('x and y should return an array', () => {
    assert.equal(Array.isArray(tdlr(2, 2)), true);
    assert.equal(Array.isArray(tdlr(3, 3)), true);
    assert.equal(Array.isArray(tdlr(4, 4)), true);

    assert.notEqual(Array.isArray(tdlr(2, 3)), false);
	});

  it('tdlr(2, 2) should be in the correct order', () => {
    const output = [
      [1, 3],
      [2, 4]
    ];

    assert.equal(tdlr(2, 2), output);
  });

  it('tdlr(3, 3) should be in the correct order', () => {
    const output = [
      [1, 4, 7],
      [2, 5, 8],
      [3, 6, 9]
    ];

    assert.equal(tdlr(3, 3), output);
  });
});
