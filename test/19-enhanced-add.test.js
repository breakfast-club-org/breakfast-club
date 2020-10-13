const assert = require('chai').assert;
const add = require('../questions/19-enhanced-add');

describe('enhanced add function tests', function () {
	it('should support two different invocation', function () {
		assert.equal(add(1)(2)(3), 6);
		assert.equal(add(1,2,3), 6);
	});
});