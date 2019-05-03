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
    this.size = 0;
    this.storage = {};
  }

  push(v) {
    this.storage[this.size++] = v;
  }

  pop() {
    if (this.size === 0) {
      return undefined;
    }
    this.size -= 1;
    const v = this.storage[this.size];
    delete this.storage[this.size];
    return v;
  }

  unshift(v) {
    for(let i = this.size - 1; i >= 0; i--) {
      const v = this.storage[i];
      this.storage[i+1] = v;
    }
    this.storage[0] = v;
    this.size += 1;
  }

  shift() {
    const v = this.storage[0];

    for(let i = 1; i < this.size; i++) {
      this.storage[i-1] = this.storage[i];
    }

    if (this.size > 0) {
      delete this.storage[this.size - 1];
      this.size -= 1;
    }
    
    return v;
  }
}

module.exports = NotAnArray;
