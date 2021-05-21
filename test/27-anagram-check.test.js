const chai = require('chai');
const assert = chai.assert;
const anagramCheck = require('../questions/26-last-occurrence');

describe('Method: anagramCheck tests', function() {
  it('string "knee" vs "keen" should return true', function() {
    const result = anagramCheck('knee', 'keen');
    const expected = true;

    assert.equal(result, expected);
  });

  it('strings of different lengths should return false', function() {
    const result = anagramCheck('longer', 'shorter');
    const expected = false;

    assert.equal(result, expected);
  });

  it('string "wow" vs "woo" should return false', function() {
    const result = anagramCheck('wow', 'woo');
    const expected = -1;

    assert.equal(result, expected);
  });
});
