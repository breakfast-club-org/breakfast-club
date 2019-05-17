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

  push(v) {
    // add to tail
    const node = new Node(v);
    this.length += 1;

    let tail = this._tail();
    if (tail) {
      tail.next = node;
    } else {
      this.head = node;
    }
    return this;
  }

  pop() {
    // remove from tail
    if (this._empty()) { return null; }

    let tail = this.head;
    let prev = null;
    while (tail.next) {
      prev = tail;
      tail = tail.next;
    }

    this.length -= 1;
    if (prev) {
      prev.next = null;
    } else {
      this.head = prev; //null
    }

    return tail;
  }

  unshift() {} // add to head

  shift() {} // remove from head

  insertAt() {} // adds anywhere based on index

  deleteAt() {} // removes anywhere based on index

  // auxillaries
  _tail() {
    let tail = this.head;

    if (tail) {
      while (tail.next) {
        tail = tail.next;
      }
    }

    return tail;
  }

  _empty() {
    return this.head === null;
  }
}

module.exports = NotAnArrayLinkedList;
