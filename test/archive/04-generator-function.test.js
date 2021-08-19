const assert = require('chai').assert;
const Generator = require('../questions/04-generator-function');

describe('Generator', () => {
  describe('factorial()', () => {
    it('the yielded element from factorial should be an object with keys of value and done', () => {
      const o = Generator.factorial();
      const oKeys = o.next();
      const mockData = { value: 1, done: false }

      assert.deepEqual(oKeys, mockData);
    });

    it('should output the factorial of a number with each next function call', () => {
      const o = Generator.factorial();

      assert.equal(o.next().value, 1);
      assert.equal(o.next().value, 1);
      assert.equal(o.next().value, 2);
      assert.equal(o.next().value, 6);
      assert.equal(o.next().value, 24);
      assert.equal(o.next().value, 120);
    });
  });

  describe('binarySearchTree()', () => {
    it('insert should generate a tree and place the values in the correct spots', () => {
      const o = new Generator.binaryTree;
      const treeValues = [100,2,111];
      const mockData = {
        value: 100,
        left: {
          value: 2,
          left: undefined,
          right: undefined
        },
        right: {
          value: 111,
          left: undefined,
          right: undefined
        }
      };

      //    (100)
      //    /  \
      //   (2)  (111)

      for (let value of treeValues) {
        o.insert(treeValues[i]);
      }

      assert.deepEqual(o.root, mockData);
    });

    it('search should return false if it cant find the value', () => {
      const o = new Generator.binaryTree;
      const treeValues = [100,2,111];

      for (let value of treeValues) {
        o.insert(treeValues[i]);
      }

      assert.equal(o.search(99), false);
    });

    it('search should return the node if it exists within the tree', () => {
      const o = new Generator.binaryTree;
      const treeValues = [100,2,111];
      const mockData = {
        value: 111,
        left: undefined,
        right: undefined
      };

      for (let value of treeValues) {
        o.insert(treeValues[i]);
      }

      const searchResult = o.search(111);

      assert.deepEqual(searchResult, mockData);
    });

    it('postOrderTraversal should traverse depth first from left to right', () => {
      const o = new Generator.binaryTree();
      const treeValues = [100, 2, 111, 3, 1, 122, 200];
      const result = [];
      const expectedResult = [1, 3, 2, 200, 122, 111, 100];

      for (let value of treeValues) {
        o.insert(value);
      }

      // for (let value of o.postOrderTraversal()) {
      //   result.push(value);
      // }

      assert.deepEqual(result, expectedResult);
    });

    it('preOrderTraversal should traverse depth first from left to right saving each visited value if it has not seen it yet', () => {
      const o = new Generator.binaryTree();
      const treeValues = [100, 2, 111, 3, 1, 122, 200];
      const result = [];
      const expectedResult = [100, 2, 1, 3, 111, 122, 200];

      for (let value of treeValues) {
        o.insert(value);
      }

      // for (let value of o.preOrderTraversal()) {
      //   result.push(value);
      // }

      assert.deepEqual(result, expectedResult);
    });

  });
});
