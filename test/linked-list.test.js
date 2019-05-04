const assert = require('chai').assert;
const LinkedList = require('../linked-list');

describe('LinkedList', () => {
    describe('#push()', () => {
        it('should add nodes to the end of the list', () => {
            const l = new LinkedList();
            l.push(1)
             .push(2)
             .push(3);
            assert.deepEqual(l.values(), [1, 2, 3]);
        });
    });

    describe('#pop()', () => {
        let list;

        before(() => {
            list = new LinkedList();
            list.push(1)
                .push(2)
                .push(3);
        });

        it('shoult remove tail of the list', () => {
            let v = list.pop();
            assert.equal(v, 3);
            assert.deepEqual(list.values(), [1, 2]);

            v = list.pop();
            assert.equal(v, 2);
            
            v = list.pop();
            assert.equal(v, 1);
            assert.deepEqual(list.values(), []);

            // pop over empty
            v = list.pop();
            assert.isUndefined(v);
            assert.isTrue(list.isEmpty());
        });
    });

    describe('#unshift', () => {
        it('should prepend given value to the beginning of the list', () => {
            const list = new LinkedList();

            list.unshift(1);
            assert.deepEqual(list.values(), [1]);

            list.unshift(2)
                .unshift(3);
            assert.deepEqual(list.values(), [3, 2, 1]);
        });
    });

    describe('#shift', () => {
        it('should return undefined if empty list', () => {
            const list = new LinkedList();
            let v = list.shift();

            assert.isUndefined(v);
            assert.isTrue(list.isEmpty());
        });

        it('should remove the head for non-empty list', () => {
            const list = new LinkedList();
            list.push(1)
                .push(2)
                .push(3);
            
            let v = list.shift();
            assert.equal(v, 1);
            assert.deepEqual(list.values(), [2, 3]);

            list.shift();
            v = list.shift();
            assert.equal(v, 3);
            assert.isTrue(list.isEmpty());

            v = list.shift();
            assert.isUndefined(v);
        })
    });
});