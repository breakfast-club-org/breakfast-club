const assert = require('chai').assert;
const NotAnArrayLinkedList = require('../questions/02-not-an-array-linked-list');

describe('NotAnArrayLinkedList', () => {
    describe('#push()', () => {
        it('should add to the tail', () => {
          const o = new NotAnArrayLinkedList();

          o.push('never');
          o.push('gonna');
          o.push('give');
          o.push('you');
          o.push('up');

          const stringO = JSON.stringify(o);
          const mock = '{"head":{"value":"never","next":{"value":"gonna","next":{"value":"give","next":{"value":"you","next":{"value":"up","next":null}}}}},"length":5}';

          assert.equal(o.length, 5);
          assert.equal(stringO, mock);
        });
    });

    describe('#pop()', () => {
        it('should return node from the tail', () => {
          const o = new NotAnArrayLinkedList();

          o.push('never');
          o.push('gonna');
          o.push('give');
          o.push('you');
          o.push('up');
          o.pop();
          o.pop();
          o.pop();
          o.pop();

          const finalElement = o.pop();
          const stringO = JSON.stringify(o);
          const mock = '{"head":null,"length":0}';

          assert.equal(finalElement.value, 'never');
          assert.equal(o.length, 0);
          assert.equal(stringO, mock);
        });
    });

    describe('#unshift()', () => {
        it('should add to the head', () => {
          const o = new NotAnArrayLinkedList();

          o.unshift('never');
          o.unshift('gonna');
          o.unshift('give');
          o.unshift('you');
          o.unshift('up');

          const stringO = JSON.stringify(o);
          const mock = '{"head":{"value":"up","next":{"value":"you","next":{"value":"give","next":{"value":"gonna","next":{"value":"never","next":null}}}}},"length":5}';

          assert.equal(o.length, 5);
          assert.equal(stringO, mock);
        });
    });

    describe('#shift()', () => {
        it('should remove the node from the head and return it', () => {
          const o = new NotAnArrayLinkedList();

          o.unshift('never');
          o.unshift('gonna');
          o.unshift('give');
          o.unshift('you');
          o.unshift('up');
          o.shift();
          o.shift();
          o.shift();
          o.shift();

          const finalElement = o.shift();
          const stringO = JSON.stringify(o);
          const mock = '{"head":null,"length":0}';

          assert.equal(finalElement.value, 'never');
          assert.equal(o.length, 0);
          assert.equal(stringO, mock);
        });
    });

    describe('#insertAt()', () => {
        it('should insert a node at a given index', () => {
          const o = new NotAnArrayLinkedList();

          o.push('gonna');
          o.push('you');

          o.insertAt(0, 'never');
          o.insertAt(3, 'down');
          o.insertAt(2, 'let');

          const string0 = JSON.stringify(o);
          const mock = '{"head":{"value":"never","next":{"value":"gonna","next":{"value":"let","next":{"value":"you","next":{"value":"down","next":null}}}}},"length":5}';
          assert.equal(o.length, 5);
          assert.equal(string0, mock);
        });
    });

    describe('#deleteAt()', () => {
        it('should delete a node at a given index', () => {
          const o = new NotAnArrayLinkedList();

          o.push('first');
          o.push('never');
          o.push('gonna');
          o.push('run');
          o.push('middle');
          o.push('around');
          o.push('and');
          o.push('desert');
          o.push('you');
          o.push('last');

          o.deleteAt(0);
          o.deleteAt(3);
          o.deleteAt(o.length - 1);

          const string0 = JSON.stringify(o);
          const mock = '{"head":{"value":"never","next":{"value":"gonna","next":{"value":"run","next":{"value":"around","next":{"value":"and","next":{"value":"desert","next":{"value":"you","next":null}}}}}}},"length":7}';
          assert.equal(o.length, 7);
          assert.equal(string0, mock);
        });
    });
});
