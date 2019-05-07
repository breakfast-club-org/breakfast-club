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
    this.end = 0;
    this.start = 0;
    this._storage = {};
  }

  // add node to end of the list
  push(v) {
    this._storage[this.end] = v;
    this.end += 1;

    return this;
  }

  pop() {
    this.end -= 1;
    let v = this._storage[this.end];

    if (!v) {
      this.end += 1; // restore end pointer
    }

    return v;
  }

  unshift(v) {
    if (!this.isEmpty()) {
      this.start -= 1;
    } 
    this.end += 1;
    this._storage[this.start] = v;

    return this;
  }

  shift() {
    const v = this._storage[this.start];

    if (v) {
      this.start +=1;
      this.end -= 1;
    }
    
    return v;
  }

  // auxillaries
  isEmpty() {
    return this._storage[this.start] == null;
  }

  get storage() {
    let vals = {};
    let i = 0;

    for(let j=this.start; i < this.end; i++, j++) {
      vals[i] = this._storage[j];
    }

    return vals;
  }

  set storage(o) {}
}

module.exports = NotAnArray;