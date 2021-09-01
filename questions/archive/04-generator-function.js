
// Using JS Generators write a function that can potentially calculate factorial of 100,000
const factorial = function * () {
  var initial = 1;

  for (let i = 1; i <= 100000; i++) {
    let multiplier = 1;

    if (i > 2) {
      multiplier = i - 1;
    }

    let current = initial *= multiplier;

    yield current;
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
class BinarySearchTree {
  constructor() {
    this.root = undefined;
  }

  insert(value) {
    let node = new Node(value);

    if (!this.root) {
      this.root = node;

      return;
    }

    let curr = this.root;

    while (value !== curr.value) {
      if (value < curr.value) {
        if (!curr.left) {
          curr.left = node;

          break;
        }
        curr = curr.left;
      } else if (value > curr.value) {
        if (!curr.right) {
          curr.right = node;

          break;
        }
        curr = curr.right;
      }
    }
  }

  search(value) {
    if (!this.root)  {
      return;
    }

    let curr = this.root;

    if (!curr)  {
      return;
    }

    while (curr) {
      if (value === curr.value) {
        return curr;
      } else if (value < curr.value) {
        curr = curr.left;
      } else if (value > curr.value) {
        curr = curr.right;
      }
    }

    return false;
  }

  * preOrderTraversal(node) {
    if (node === undefined) {
      node = this.root;
    }

    if (!node) {
      return;
    }

    yield * this.preOrderTraversal(node.left);
    yield * this.preOrderTraversal(node.right);
    yield node.value;
  }

  * postOrderTraversal(node) {
    if (node === undefined) {
      node = this.root;
    }

    if (!node) {
      return;
    }

    yield node.value;
    yield * this.preOrderTraversal(node.left);
    yield * this.preOrderTraversal(node.right);
  }
}

module.exports = {
  factorial: factorial,
  binaryTree: BinarySearchTree
};
