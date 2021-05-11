const chai = require('chai');
const assert = chai.assert;
const expect = chai.expect;
const lastOccurrence = require('../questions/26-last-occurrence');

describe('Method: lastOccurrence tests', function() {
  it('string "wow" target "w" should return 2', function() {
    const result = lastOccurrence('wow', 'w');
    const expected = 2;

    assert.equal(result, expected);
  });

  it('string "wow" target "o" should return 1', function() {
    const result = lastOccurrence('wow', 'o');
    const expected = 1;

    assert.equal(result, expected);
  });

  it('string "wow" target "z" should return -1', function() {
    const result = lastOccurrence('wow', 'z');
    const expected = -1;

    assert.equal(result, expected);
  });
});
