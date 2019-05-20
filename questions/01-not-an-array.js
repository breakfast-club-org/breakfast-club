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

  push(value) {
  	this.storage[this.length] = value;
  	this.length++;
  }

  pop() {
  	var toReturnVal = this.storage[this.length - 1];
  	delete this.storage[this.length - 1];
  	this.length--;

  	return toReturnVal;
  }

  unshift(value) {
  	for (var i = 0; i < this.length; i++) {
  		this.storage[this.length - i] = this.storage[this.length - 1 - i];
  	}
  	this.storage[0] = value;

  	this.length++;
  }

  shift() {
  	var toReturnVal = this.storage[0];
  	for (var i = 1; i < this.length; i++) {
  		this.storage[i - 1] = this.storage[i];
  	}

  	delete this.storage[this.length - 1];

  	return toReturnVal;
  }
}

module.exports = NotAnArray;
