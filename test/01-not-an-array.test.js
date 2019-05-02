const assert = require('chai').assert;
const NotAnArray = require('../01-not-an-array');

describe('NotAnArray', () => {
    describe('#push()', () => {
        it.skip('should add an element at the front of the store with its key same as number of elements in the data store', () => {
            // add test
            const o = new NotAnArray();
            o.push('a');
            assert.deepEqual(o.storage, {0: 'a'});

            o.push('b');
            o.push('c');
            o.push('d');
            assert.deepEqual(o.storage, {3: 'd', 2: 'c', 1: 'b', 0: 'a'});
        });
    });

    describe('#pop()', () => {
        it.skip('should remove an element from the end of the store and return it', () => {
            // add test
        });
    });

    describe('#unshift()', () => {
        it.skip('should add an element at the front of the store', () => {
            // add test
        });
    });

    describe('#shift()', () => {
        it.skip('should remove the value from the front of the object and return it', () => {
            // add test
        });
    });
});