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
        console.time('factorial');
        factorial(6);
        console.timeEnd('factorial');
    })
})

describe('Memoized Factorial', function() {
    let mf;

    before(function() {
        mf = memoize((n) => (n < 2)
            ? 1
            : n * mf(n - 1))
    })

    after(function() {
        mf = null;
    })

    it('memoizing a function should return a function', function() {
        assert.equal(typeof mf, "function");
    })

    it('should return the memoized factorial of a number but faster', function() {
        // these called should be faster
        assert.equal(mf(0), 1);
        assert.equal(mf(1), 1);
        assert.equal(mf(2), 2);
        assert.equal(mf(3), 6);
        assert.equal(mf(4), 24);
        assert.equal(mf(5), 120);
        console.time('memoized');
        mf(6);
        console.timeEnd('memoized');
    })
})
