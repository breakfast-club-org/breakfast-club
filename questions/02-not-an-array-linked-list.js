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

    let prev = this._preTail();
    let last = null;

    this.length -= 1;
    if (prev) {
      last = prev.next;
      prev.next = null;
    } else {
      last = this.head;
      this.head = prev; //null
    }

    return last;
  }

  // add to head
  unshift(v) {
    let node = new Node(v);

    node.next = this.head;
    this.head = node;
    this.length += 1;
  }

  shift() {
    // remove from head
    let node = this.head;

    if (node) {
      this.head = node.next;
      this.length -= 1;
    }
    return node;
  }

  insertAt(index, v) {
    // adds anywhere based on index
    let pre = this.head;
    let node = new Node(v);

    if (this._empty()) {
      this.head = node;
      return;
    }

    for (let i=1; i < this.length && i < index; i++) {
      pre = pre.next;
    }

    if (pre === this.head) {
      node.next = this.head;
      this.head = node;
    } else {
      node.next = pre.next;
      pre.next = node;
    }
    this.length += 1;
  }

  deleteAt(index) {
    // removes anywhere based on index
    let pre = this.head;
    let remove = null;

    if (pre && index===0) {
      remove = pre;
      this.head = pre.next;
      this.length -= 1;
      return remove;
    }

    let i = 1;
    for (; i < this.length && i < index; i++) {
      pre = pre.next;
    }

    if (pre && i >= index) {
      remove = pre.next;

      if (remove) {
        pre.next = remove.next;

        this.length -= 1;
      }
    }

    return remove;
  }

  // auxillaries

  /**
   * get node right before the tail
   */
  _preTail() {
    let node = this.head;
    let prev = null;

    if (node) {
      while (node.next) {
        prev = node;
        node = node.next;
      }
    }

    return prev;
  }

  _tail() {
    const node = this._preTail();
    let tail = this.head;

    if (node) {
      tail = node.next;
    }

    return tail;
  }

  _empty() {
    return this.head === null;
  }
}

module.exports = NotAnArrayLinkedList;
