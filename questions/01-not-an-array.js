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

class NotAnArray {
  constructor() {
    this.storage = {};
    this.length = 0;
  }

  push(val) {
    this.storage[this.length] = val;
    this.length = this.length + 1;
  }

  pop() {
    if (this.length === 0) {
      return undefined;
    }

    this.length = this.length - 1;

    const popped = this.storage[this.length];
    delete this.storage[this.length];

    return popped
  }

  unshift(val) {
    const tempStorage = {};
    tempStorage[0] = val;

    for (let i = 0; i < this.length; i++) {
      tempStorage[i+1] = this.storage[i];
    }

    this.length = this.length + 1;

    this.storage = tempStorage;
  }

  shift() {
<<<<<<< HEAD:questions/01-not-an-array.js
    if (this.length === 0) {
=======
    if (this.length >= 0) {
>>>>>>> feat: 🥐:01-not-an-array.js
      return undefined;
    }

    const tempStorage = {};
    const shifted = this.storage[0];

    delete this.storage[0];
    this.length = this.length - 1;

    for (let i = 0; i < this.length; i++) {
      tempStorage[i] = this.storage[i+1];
    }

    this.storage = tempStorage;

    return shifted;
  }
}

module.exports = NotAnArray;
