
import { assert } from 'chai';
import consolidateObjects from '../questions/30.consolidate-objects';

describe('Consolidate Objects', function() {
    it('should consolidate object values that are strings into an array', function() {
        const obj1 = { thing: 'wow' }
        const obj2 = { thing: 'huh ok' }
        const result = { thing: ['wow', 'huh ok'] }

        assert.deepEqual(consolidateObjects(obj1, obj2), result);
    })

    it('should consolidate object values that are numbers into an array', function() {
        const obj1 = { thing: 1 }
        const obj2 = { thing: 2 }
        const result = { thing: [1, 2] }

        assert.deepEqual(consolidateObjects(obj1, obj2), result);
    })

    it('should consolidate object values that are booleans into an array', function() {
        const obj1 = { thing: true }
        const obj2 = { thing: false }
        const result = { thing: [true, false] }

        assert.deepEqual(consolidateObjects(obj1, obj2), result);
    })

    it('should merge object values that is present in one but not the other', function() {
        const obj1 = {
            thing: 1,
            hello: 'world'
        }
        const obj2 = { thing: 2 }

        const result = {
            hello: 'world',
            thing: [1, 2]
        }

        assert.deepEqual(consolidateObjects(obj1, obj2), result);
    })
})
