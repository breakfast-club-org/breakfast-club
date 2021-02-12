const chai = require('chai');
const assert = chai.assert;
const expect = chai.expect;
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
		console.log('expected', expected);

		assert.equal(rs, expected);
	});

	it('should reduce array with inital value', function() {
		const a = [1, 2, 3];
		const rs = reduce(
			a,
			add,
			6
		)
		const expected = a.reduce(add, 6);

		assert.equal(rs, expected);
	});

	it('should handle not enough array items', function() {
		const a = [1];
		const rs = reduce(
			a,
			add
		);
		const expected = a.reduce(add);

		assert.equal(rs, expected);
	});

	it('should handle empty array with intial value', function() {
		const a = [];
		const rs = reduce(
			a,
			add,
			6
		);

		assert.equal(rs, 6);
	});

	it('should throw Error with empty array and no intial value', function() {
		expect(reduce.bind(null, [], add)).to.throw('Reduce of empty array with no initial value');
	});
});