const chai = require('chai');
const assert = chai.assert;
const curry = require('../questions/28-curry-add');

describe('Method: curry tests', function() {
  describe('curry Add3', function() {
    let curried;

    before(function() {
      const add3 = (a, b, c) => a + b + c;
      curried = curry(add3);
    });

    after(function() {
      curried = null;
    })

    it('should handle (1, 1, 1)', function() {
      assert.equal(curried(1,1,1), 3);
    });

    it('should handle (1)(1)(2)', function() {
      assert.equal(curried(1)(1)(2), 4);
    });

    it('should handle (1,1)(1)', function() {
      assert.equal(curried(1,1)(1), 3);
    });

    it('should handle (1)(1,1)', function() {
      assert.equal(curried(1)(1,1), 3);
    });

    it('should handle (1)(1,1,1,1,1)', function() {
      assert.equal(curried(1)(1,1,1,1,1), 3);
    });

    it('should handle (1,1)(1,1)', function() {
      assert.equal(curried(1,1)(1,1), 3);
    });
  });

  describe('curry Add5', function() {
    let curried;

    before(function() {
      const add5 = (a, b, c, d, e) => a + b + c + d + e;
      curried = curry(add5);
    });

    after(function() {
      curried = null;
    })

    it('should handle (1, 1, 1, 1, 1)', function() {
      assert.equal(curried(1, 1, 1, 1, 1), 5);
    });

    it('should handle (1)(1)(1)(1)(1)', function() {
      assert.equal(curried(1)(1)(1)(1)(1), 5);
    });

    it('should handle (1,1)(1)(1)(1)', function() {
      assert.equal(curried(1,1)(1)(1)(1), 5);
    });

    it('should handle (1)(1,1)(1)(1)', function() {
      assert.equal(curried(1)(1,1)(1)(1), 5);
    });


    it('should handle (1)(1,1)(1,1,1,1,1)', function() {
      assert.equal(curried(1)(1,1)(1,1,1,1,1), 5);
    });
  });

  describe('curry Minus3', function() {
    before(function() {
      const Minus3 = (a, b, c) => a - b - c;
      curried = curry(Minus3);
    });

    after(function() {
      curried = null;
    });

    it('should substract numbers with (3, 2, 1)', function() {
      assert.equal(curried(3, 2, 1), 0);
    });

    it('should substract numbers with (3)(2, 1)', function() {
      assert.equal(curried(3)(2, 1), 0);
    });

    it('should substract numbers with (3)(2)(1)', function() {
      assert.equal(curried(3)(2)(1), 0);
    });
  });

  describe('mixed use of curry', function() {
    let curryAdd;
    let curryMinus;

    before(function () {
      const add = (a, b) => a + b;
      const minus = (a, b) => a - b;

      curryAdd = curry(add);
      curryMinus = curry(minus);
    });

    after(function () {
      curryAdd = null;
      curryMinus = null;
    });

    it('should not interfere between curried methods', function() {
      assert.equal(curryAdd(1, 1), 1 + 1);
      assert.equal(curryMinus(1, 1), 1 - 1);
      assert.equal(curryMinus(3, 4), 3 - 4);
      assert.equal(curryAdd(5, 6), 5 + 6);
    });
  });
});
