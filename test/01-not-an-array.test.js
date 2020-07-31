const assert = require('chai').assert;
const NotAnArray = require('../questions/01-not-an-array');

describe('NotAnArray', () => {
    describe('#push()', () => {
        it('should add an element at the end of the store with its key same as number of elements in the data store', () => {
            const o = new NotAnArray();
            o.push('a');
            assert.deepEqual(o.storage, {0: 'a'});

            o.push('b');
            o.push('c');
            o.push('d');

            assert.deepEqual(o.storage, { 0: 'a', 1: 'b', 2: 'c', 3: 'd' });
        });
    });

    describe('#pop()', () => {
        it('should return undefined if removing from an empty storage', () => {
            const o = new NotAnArray();

            assert.isUndefined(o.pop());
            assert.isEmpty(o.storage);
        });

        it('should remove an element from the end of the store and return it', () => {
            const o = new NotAnArray();
            o.push('a');
            o.push('b');
            o.push('c');
            const v = o.pop();

            assert.equal(v, 'c');
            assert.deepEqual(o.storage, { 0: 'a', 1: 'b' });
        });
    });

    describe('#unshift()', () => {
        it('should add an element at the front of the store', () => {
            const o = new NotAnArray();
            o.unshift('a');
            assert.deepEqual(o.storage, {0: 'a'});

            o.unshift('b');
            assert.deepEqual(o.storage, {0: 'b', 1: 'a'});

            o.unshift('c');
            assert.deepEqual(o.storage, { 0: 'c', 1: 'b', 2: 'a' });
        });
    });

    describe('#shift()', () => {
        it('should return undefined if object is empty', () => {
            const o = new NotAnArray();
            assert.isUndefined(o.shift());
        });

        it('should remove the value from the front of the object and return it', () => {
          const o = new NotAnArray();
          o.unshift('a');
          o.unshift('b');
          o.unshift('c');
          const v = o.shift();

          assert.deepEqual(o.storage, { 0: 'b', 1: 'a' });
          assert.equal(v, 'c');
        });
    });
});
