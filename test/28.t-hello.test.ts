import { assert } from 'chai';
import { hello } from '../questions/28.t-hello';

describe('Typescript Support tests', function() {
    it('should run typescript code', function() {
        assert.equal(hello('mate'), 'hellow mate');
    })
})
