
// Using JS Generators write a function that can potentially calculate factorial of 100,000
const factorial = function * () {

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
//            (200)
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

class BinarySearchTree {
  constructor() {
    this.root = undefined;
  }

  insert(value) {}

  search(value) {}

  * postOrderTraversal(node) {}

  * preOrderTraversal(node) {}
}

module.exports = {
  factorial: factorial,
  binaryTree: BinarySearchTree
};
