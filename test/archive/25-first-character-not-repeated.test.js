const chai = require('chai');
const assert = chai.assert;
const expect = chai.expect;
const firstCharacterNotRepeated = require('../questions/25-first-character-not-repeated');

describe.skip('Method: firstCharacterNotRepeated tests', function() {
  it('string "wow" should return string "o"', function() {
    const result = firstCharacterNotRepeated('wow');
    const expected = 'o';

    assert.equal(result, expected);
  });

  it('string sentence "never gonna to let you go" should return string "v"', function() {
    const result = firstCharacterNotRepeated('never gonna to let you go');
    const expected = 'v';

    assert.equal(result, expected);
  });

  it('string of all repeated characters should return undefined', function() {
    const result = firstCharacterNotRepeated('www');

    assert.equal(result, undefined);
  });
});
