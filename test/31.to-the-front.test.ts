import { assert } from 'chai';
import toTheFront, {toTheFront2} from '../questions/31-to-the-front';

describe('To the Front', function() {
    it('should move elements to the front n number of times', function() {
        const input = [1,2,3,4,5,6,7];
        const result = [4,5,6,7,1,2,3];

        assert.deepEqual(toTheFront2(input, 4), result);
    })
});
