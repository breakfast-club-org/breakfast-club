
// Using JS Generators write a function that can potentially calculate factorial of 100,000
const factorial = function * () {
  let n = 0;
  let store = [];

  function _factorial(n) {
    if (store[n]) {
      return store[n];
    }
    return (n < 2) ? 1 : n * _factorial(n - 1);
  }

  while (n < n+1) {
    yield store[n] = _factorial(n);
    n += 1;
  }
};

// Implement a class called BinarySearchTree using the provided Node class
class Node {
  constructor(value) {
    this.value = value;
    this.left = undefined;
    this.right = undefined;
  }
}

// A Binary Search tree is a binary tree where nodes with values lesser are stored on the left while the nodes with higher values are stored on the right
//
// Example tree
//
//    (100)
//    /  \
//   (2)  (111)
//   / \    \
// (1) (3)  (122)
//            \
//            (209)
//
// Insert
//  - Using the Node class the insert method should add the node in the correct position
//
// Search
//  - Is a method that takes a value and searches the tree for a matching value
//    - returns the node if it finds the value
//    - returns false if the value doesn't exist within the tree
//
// postOrderTraversal (using generators)
//  - Is a method that takes a node and traverse/iterates through the tree depth first
//  - Given the example tree above the function should see the values in this order [1, 3, 2, 200, 122, 111, 100]
//
// preOrderTraversal (using generators)
//  - Is a method that takes a node and traverse/iterates through the tree depth first
//  - Given the example tree above the function should see the values in this order [100, 2, 1, 3, 111, 122, 200]

function isEndNode(node) {
  return node && !node.left && !node.right;
}

class BinarySearchTree {
  constructor() {
    this.root = undefined;
  }

  insert(value) {
    const newNode = new Node(value);

    function _insert(node) {
      if (value === node.value) {
        return;
      }
      let side =  (value < node.value) ? 'left' : 'right';
      if (!node[side]) {
        node[side] = newNode;
      } else {
        _insert(node[side]);
      }
    }

    if (!this.root) {
      this.root = newNode;
    } else {
      _insert(this.root);
    }
  }

  search(value) {
    let node = this.root;

    while (node) {
      if (value === node.value) {
        break;
      }
      node = (value < node.value) ? node.left : node.right;
    }
    return node || false;
  }

  * postOrderTraversal() {

    function* visit(node) {
      if (node) {
        if (isEndNode(node)) {
          yield node.value;
          return;
        }
        if (node.left) {
          yield* visit(node.left);
        }
        if (node.right) {
          yield* visit(node.right);
        }
        yield node.value;
      }
    }

    if (this.root) {
      yield* visit(this.root);
    }
  }

  * preOrderTraversal() {
    function* visit(node) {
      if (node) {
        yield node.value;
        yield* visit(node.left);
        yield* visit(node.right);
      }
    }

    if (this.root) {
      yield* visit(this.root);
    }
  }
}

module.exports = {
  factorial: factorial,
  binaryTree: BinarySearchTree
};
