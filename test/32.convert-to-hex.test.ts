import { assert } from 'chai';
import convertToHex from '../questions/32-convert-to-hex';

describe('Convert to hex', function() {
    it('should convert rgb to hex', function() {
        const shouldBeWhite = convertToHex(0, 0, 0);
        const shouldBeBlack = convertToHex(255, 255, 255);
        const shouldBeSomeColor = convertToHex(98, 51, 0x4f); // hehe

        const resultShouldBeWhite = '#000000';
        const resultShouldBeBlack = '#FFFFFF';
        const resultShouldBeSomeColor = '#62334F';

        assert.equal(shouldBeWhite, resultShouldBeWhite);
        assert.equal(shouldBeBlack, resultShouldBeBlack);
        assert.equal(shouldBeSomeColor, resultShouldBeSomeColor);
    })
});
