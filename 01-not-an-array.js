// Implement a class called notAnArray that has the following methods
//
// push
//  - Accepts a value and places it at the end (the next incremented index) of the object with the key being an index based on the length and the value being the value passed into the function
//  ex:
//  notAnArray.push('first')
//  notAnArray.push('second')
//  should result in {0: 'first', 1: 'second'}
//
// pop
//  - removes the value from the end of the object and returns it
//  ex:
//  notAnArray.pop();
//  returns 'second' and the object should look like {0: 'first'}
//
// unshift
//  - Accepts a value and places it at the 0th key of the object with the the value being the value passed into the function
//  - the rest of the values should be shifted over one
//  ex:
//  notAnArray.unshift('now I am first');
//  should result in {0: 'now I am first', 1: 'first'}
//
// shift
//  - removes the value from the front of the object and returns it
//  ex:
//  notAnArray.shift();
//  returns 'now I am first' and the object should look like {0: 'first'}
//
class LinkedListNode {
  constructor(v, prev, next) {
      this.v = v;
      this.prev = prev;
      this.next = next;
  }
}

class NotAnArray {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  // add node to end of the list
  push(v) {
    const node = new LinkedListNode(v);

    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      node.prev = this.tail;
      this.tail.next = node;
      this.tail = node;
    }

    return this;
  }

  pop() {
    let last = this.tail;

    if (last) {
      this.tail = last.prev;

      if (this.tail) {
        this.tail.next = null;
      }

      if (this.head === last) {
        this.head = null;
      }
    }

    return (last) ? last.v : undefined;
  }

  unshift(v) {
    let node = new LinkedListNode(v);

    node.next = this.head;
    this.head = node;

    return this;
  }

  shift() {
    let node;

    if (this.head) {
      node = this.head;
      this.head = this.head.next;
      if (node === this.tail) {
        // single item
        this.tail = this.head;
      }
    }

    return (node) ? node.v : undefined;
  }

  // auxillaries
  isEmpty() {
      return this.head == null; // treat undefined as null
  }

  get storage() {
    let p = this.head;
    let vals = {};
    let i = 0;
    while(p) {
        vals[i] = p.v;
        p = p.next;
        i += 1;
    }

    return vals;
  }

  set storage(o) {}
}

module.exports = NotAnArray;