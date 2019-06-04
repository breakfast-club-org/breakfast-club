// Implement a class called NotAnArrayLinkedList using the provided Node class

class Node {
  constructor(value, next=null) {
    this.value = value;
    this.next = next;
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
      let node = new Node(value)
      if(this.length === 0){
        this.head = node;
      }else{
        let current = this.head;
        while(current.next){
          current = current.next;
        }
        current.next = node;
    }
    this.length++;
    return this;


  } // add to tail

  pop() {

    if(this.head.next === null){
        let thisval = this.head;
        this.head = null;
        --this.length;
        return thisval;
    }else{
        let current = this.head;
        let tail = this.head.next;
        let n = 0;
        while(tail.next != null){
          current = current.next;
          tail = tail.next;
          n++;
        }
        current.next = null;
    
        --this.length;
        return tail.value;
    }

  } // remove from tail

  unshift(value) {
    let node;
    if(this.length === 0){
     node = new Node(value)
    }else{
      node = new Node(value, this.head);
    }
    this.length++;
    this.head = node;
    return this;

  } // add to head

  shift() {
       if(this.length === 0){
          return 'We have no head'; 
       }else{
            let head = this.head;
            let next = this.head.next;
            this.head = next;
             --this.length;
            return head;
       }

  } // remove from head

  insertAt() {} // adds anywhere based on index

  deleteAt() {} // removes anywhere based on index
}

module.exports = NotAnArrayLinkedList;



