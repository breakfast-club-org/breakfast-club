const chai = require('chai');
const sinon = require('sinon');
const assert = chai.assert;
const every = require('../questions/24-budget-interval').budgetSetInterval;


describe.skip('Budget Interval', function() {

  function counter() {
    return this.count++;
  }

  before(function setup() {
    this.count = 0;
    this.clock = sinon.useFakeTimers();
  });

  after(function tearDown() {
    this.clock.restore();
  });

  it('🤷', function() {
    every(counter, 5);
    this.clock.tick(10);

    assert.equal(this.count, 2);
  });
});
