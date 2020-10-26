const assert = require('chai').assert;
const curry = require('../questions/19-curry');

describe('Currying tests', function() {

	describe('Curry adding 2 numbers', function() {
		const add2 = (a, b) => (a + b);
		let add = curry(add2);

		it('should return a function if argument list is not met', function() {
			assert.isFunction(add(1));
		});

		it('should add(1)(2)', function() {
			assert.equal(add(1)(2), 3);
		});

		it('should support default', function() {
			assert.equal(add(1,3), 4);
		});

		it('should support add(1)()(2)', function() {
			assert.equal(add(1)()(2), 3);
		});

		it('should support add()()(1)()(2)', function() {
			assert.equal(add()()(1)()(2), 3);
		})
	});

	describe('Curry adding 4 numbers', function() {
		const add4 = (a, b, c, d) => (a + b + c + d);
		let add = curry(add4);
		let expected = 1+2+3+4;

		it('should return a function if argument list is not met', function() {
			assert.isFunction(add(1)(2));
		});

		it('should add(1)(2)(3)(4)', function() {
			assert.equal(add(1)(2)(3)(4), expected);
		});

		it('should support default', function() {
			assert.equal(add(1,2,3,4), expected);
		});

		it('should support add(1)()(2)(3)()(4)', function() {
			assert.equal(add(1)()(2)(3)()(4), expected);
		});

		it('should support add(3)()(1)()(2)(4)', function() {
			assert.equal(add(3)()(1)()(2)(4), expected);
		})
	});

});