const chai = require('chai');
const assert = chai.assert;
const anagramCheck = require('../questions/27-anagram-check');

describe('Method: anagramCheck tests', function() {
  it('string "knee" vs "keen" should return true', function() {
    const result = anagramCheck('knee', 'keen');

    assert.isTrue(result);
  });

  it('string "knee" vs "knee" should return false', function() {
    const result = anagramCheck('knee', 'knee');

    assert.isFalse(result);
  });

  it('number 1 vs 1 should return false', function() {
    const result = anagramCheck(1, 1);

    assert.isFalse(result);
  });

  it('strings of different lengths should return false', function() {
    const result = anagramCheck('longer', 'shorter');

    assert.isFalse(result);
  });

  it('string "wow" vs "woo" should return false', function() {
    const result = anagramCheck('wow', 'woo');

    assert.isFalse(result);
  });
});
