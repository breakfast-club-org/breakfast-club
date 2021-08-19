import { assert } from 'chai';
import { factorial, memoize } from '../questions/29.factorial-memoization';

describe('Factorial', function() {
    it('should return the factorial of a number', function() {
        assert.equal(factorial(0), 1);
        assert.equal(factorial(1), 1);
        assert.equal(factorial(2), 2);
        assert.equal(factorial(3), 6);
        assert.equal(factorial(4), 24);
        assert.equal(factorial(5), 120);
    })
})

describe('Memoized Factorial', function() {
    it('memoizing a function should return a function', function() {
        const memoizedFactorial = memoize(factorial);

        assert.equal(typeof memoizedFactorial, "function");
    })

    it('should return the memoized factorial of a number but faster', function() {
        const memoizedFactorial = memoize(factorial);

        assert.equal(memoizedFactorial(5), 120);

        // these called should be faster
        assert.equal(memoizedFactorial(0), 1);
        assert.equal(memoizedFactorial(1), 1);
        assert.equal(memoizedFactorial(2), 2);
        assert.equal(memoizedFactorial(3), 6);
        assert.equal(memoizedFactorial(4), 24);
        assert.equal(memoizedFactorial(5), 120);
    })
})
