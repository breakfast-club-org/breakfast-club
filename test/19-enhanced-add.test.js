const assert = require('chai').assert;
const add = require('../questions/19-enhanced-add');

describe('enhanced add function tests', function() {

	describe('single argument format', function() {

		it('should return 0 if first call without params', function() {
			assert.equal(add(), 0);
		});

		it('should support calling with one number', function() {
			assert.equal(add(10)(), 10);
			assert.equal(add(2)(), 2);
		});

		it('should support multiple calls', function() {
			assert.equal(add(1)(2)(3)(), 6);
		});
	});

	describe('mutliple argument format', function() {

		it('should return the sum of the arugment list', function() {
			assert.equal(add(1, 2, 3), 6);
		});
	});
});