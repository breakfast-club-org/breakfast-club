const chai = require('chai');
const assert = chai.assert;
const expect = chai.expect;
const every = require('../questions/23-every');

const isEven = (n) => n % 2;

describe('Method: every tests', function() {
  it('should return false if collection failes truth test', function() {
    const a = [];
    const errthang = every(
      a
    );

    assert.isTrue(errthang);
  });

  it('should return false if collection failes truth test', function() {
    const a = [1, 3, 5];
    const errthang = every(
      a,
      isEven
    );

    assert.isFalse(errthang);
  });

	it('should return true if collection passes truth test', function() {
		const a = [2, 4, 6];
		const errthang = every(
			a,
			isEven
		);

    assert.isTrue(errthang);
	});
});
