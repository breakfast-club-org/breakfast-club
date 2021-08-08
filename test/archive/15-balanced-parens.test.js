const assert = require('chai').assert;
const balancedParens = require('../questions/15-balanced-parens');

describe('Is Balanced', () => {
	describe('balancedParens', () => {
		it('Perfectly balanced, as all things should be', () => {
			assert.isTrue(balancedParens('()(())()'));
			assert.isTrue(balancedParens(''));
		});

		it('Not balanced', () => {			
			assert.isFalse(balancedParens("()(())("));
		});
	});
});
