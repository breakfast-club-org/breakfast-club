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

  push(value) {
    var nodeToAdd = new Node(value);
    if (!this.head) {
      this.head = nodeToAdd;
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

  unshift(value) {
    var oldHead = this.head;
    this.head = new Node(value);
    this.head.next = oldHead;
    this.length++;
  } // add to head

  shift() {
    var toReturnVal = this.head;
    this.head = this.head.next;
    this.length--;

    return toReturnVal;
  } // remove from head

  insertAt(insertIndex, value) {
    if (insertIndex > this.length) {
      throw "Too big of index to insert";
    } else if (insertIndex === 0) {
      this.unshift(value);
    } else if (insertIndex === this.length) {
      this.push(value);
    } else {
      var currentNode = this.head;
      var nodeToInsert = new Node(value);
      var count = 0;

      while (count < (insertIndex - 1)) {
        currentNode = currentNode.next;
        count++;
      }

      var restOfList = currentNode.next;
      currentNode.next = nodeToInsert;
      currentNode.next.next = restOfList;
      this.length++;
    }
  } // adds anywhere based on index

  deleteAt(deleteIndex) {
    if (deleteIndex === 0) {
      this.shift();
    } else if (deleteIndex === this.length - 1) {
      this.pop();
    } else {
      var currentNode = this.head;
      var count = 0;

      while (count < (deleteIndex - 1)) {
        currentNode = currentNode.next;
        count++;
      }

      currentNode.next = currentNode.next.next;

      this.length--;
    }
  } // removes anywhere based on index
}

module.exports = NotAnArrayLinkedList;