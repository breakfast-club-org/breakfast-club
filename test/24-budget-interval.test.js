const chai = require('chai');
const sinon = require('sinon');
const assert = chai.assert;
const every = require('../questions/24-budget-interval').budgetSetInterval;

let count = 0;
function inc() {
  count++;
}

describe('Budget Interval', function() {

  before(function setup() {
    this.clock = sinon.useFakeTimers();
  });

  after(function tearDown() {
    this.clock.restore();
    count = 0;
  });

  it('🤷', function() {
    every(inc, 100);
    this.clock.tick(200);

    assert.equal(count, 2);
  });
});
