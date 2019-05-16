// Implement a class called NotAnArrayLinkedList using the provided Node class

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// push
//  - accepts a value and places it at the tail of the linked list
//
// pop
//  - returns and removes a value from the tail of the linked list
//
// unshift
//  - accepts a value and places it at the head of the linked list
//
// shift
//  - returns and removes a value from the head of the linked list
//
// [if you have time]
// insert
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

  push() {}

  shift() {}

  unshift() {}

  pop() {}

  insert() {}

  deleteAt() {}
}

module.exports = NotAnArrayLinkedList;
