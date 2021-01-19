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
  }

  length() {
    return Object.keys(this.storage).length;
  }

  push(value) {
    const i = this.length();
    this.storage[i] = value;
  }

  pop() {
    if (this.length() === 0) return undefined;
    const lastItem = this.length() - 1;
    let removedLastItem = this.storage[lastItem];
    delete this.storage[lastItem];
    return removedLastItem;
  }

  unshift(value) {
    let duplicateObj = {};
    duplicateObj[0] = value;
    Object.keys(this.storage).map((key, i) => {
      duplicateObj[i + 1] = this.storage[i]
    });
    this.storage = {...duplicateObj}
  }

  shift() {
    if (this.length() === 0) return undefined;
    let firstItem = this.storage[0];
    let lastItem = this.length() - 1;
    Object.keys(this.storage).map((key, i) => {
      this.storage[i] = this.storage[i + 1]
    });
    delete this.storage[lastItem];
    return firstItem;
  }
}

module.exports = NotAnArray;

const o = new NotAnArray();