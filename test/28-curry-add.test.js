const chai = require('chai');
const assert = chai.assert;
const curryAdd = require('../questions/28-curry-add');

describe('Method: curryAdd tests', function() {
  describe('curry Add3', function() {
    let curried;

    before(function() {
      const add3 = (a, b, c) => a + b + c;
      curried = curryAdd(add3);
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
      curried = curryAdd(add5);
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
});
