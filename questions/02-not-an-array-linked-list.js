// Implement a class called NotAnArrayLinkedList using the provided Node class

class Node {
  constructor(value) {
    this.element = value;
    this.next = null;
  }
}

// push
//  - accepts a value and places it at the tail of the linked list
//
// pop
//  - returns and removes a node from the tail of the linked list
//
// unshift
//  - accepts a value and places it at the head of the linked list
//
// shift
//  - returns and removes a node from the head of the linked list
//
// [if you have time]
// insertAt
//  - accepts a value and position and inserts a node at the new position
//
// [if you have time]
// deleteAt
//  - accepts a position and deletes the node at that position
//

class NotAnArrayLinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  push(value) {
    var nodeToAdd = new Node(value);
    if (!this.head) {
      this.head = nodeToAdd;
      this.head.next = null;
    } else {
      // keep going next until .next is null
      var currentNode = this.head;
      while (currentNode.next) {
        currentNode = currentNode.next;
      }

      currentNode.next = nodeToAdd;
    }

    this.length++;
  } // add to tail

  pop() {
    console.log('----------------- STARTED POP -----------------');
    var currentNode = this.head;
    var toReturnVal;
    this.length--;

    if (!this.head.next) {
      toReturnVal = this.head;
      this.head = null;
      return toReturnVal;
    }

    while (currentNode.next) {
      if (!currentNode.next.next) {
        toReturnVal = currentNode.next;
        break;
      }

      currentNode = currentNode.next;
    }

    currentNode.next = null;
    return toReturnVal;
  } // remove from tail

  unshift(value) {} // add to head

  shift() {} // remove from head

  insertAt() {} // adds anywhere based on index

  deleteAt() {} // removes anywhere based on index
}

module.exports = NotAnArrayLinkedList;