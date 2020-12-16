const assert = require('chai').assert;
const reduce = require('../questions/22-reduce');

const add = (a, b) => a + b;

describe('Method: reduce tests', function() {
	it('should reduce array', function() {
		const a = [1, 2, 3];
		const rs = reduce(
			a,
			add
		);
		const expected = a.reduce(add);

		assert.equal(rs, expected);
	});
});