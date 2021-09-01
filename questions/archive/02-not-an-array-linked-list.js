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

  push(value) { // add to tail
    const node = new Node(value);

    if (this.head === null) {
      this.head = node;
    } else {
      let current = this.head;

      while (current.next) {
        current = current.next;
      }

      current.next = node;
    }

    this.length = this.length + 1;
  }

  pop() { // remove from tail
    if (!this.head) {
      return null;
    }

    if(!this.head.next){
      let popped = this.head;

      this.head = null;
      this.length = this.length - 1;

      return popped;
    }

    let previous = this.head;
    let tail = this.head.next;

    while (tail.next !== null){
      previous = tail;
      tail = tail.next;
    }

    previous.next = null;
    this.length = this.length - 1;

    return tail;
  }

  unshift(value) { // add to head
    const node = new Node(value);

    node.next = this.head;
    this.head = node;
    this.length = this.length + 1;
  }


  shift() { // remove from head
    if (!this.head) {
      return null;
    }

    const unshifted = this.head;

    this.head = this.head.next;
    this.length = this.length - 1;

    return unshifted;
  }

  valueOf(index) { // reverse of indexOf
    let counter = 0;
    let node = this.head;

    while (node) {
      if (counter === index) {
        return node;
      }

      counter = counter + 1;
      node = node.next;
    }

    return null;
  }

  insertAt(index, value) { // insert node at target value
    const node = new Node(value);

    if (!this.head) {
      this.head = node;
      this.length = this.length + 1;

      return;
    }

    if (index === 0) {
      this.unshift(value);

      return;
    }

    const previous = this.valueOf(index - 1);

    node.next = previous.next;
    previous.next = node;

    this.length = this.length + 1;
  }

  deleteAt(index) { // delete at target index
    if (index > 0 && index > this.length) {
      return null;
    } else {
      let current = this.head;
      let prev = current;
      let item = 0;

      if (index === 0) {
        this.head = current.next;
      } else {
        while (item < index) {
          item = item + 1;
          prev = current;
          current = current.next;
        }

        prev.next = current.next;
      }

      this.length = this.length - 1;

      return current.element;
    }
  }
}

module.exports = NotAnArrayLinkedList;
