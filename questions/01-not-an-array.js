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

	  push(val) {
	    let key = Object.keys(this.storage).length;
	    this.storage[key]=val;
	    return this.storage;
	  }

	  pop() {
	    let key = Object.keys(this.storage).length-1;
	    let popThis = this.storage[key];
	    delete this.storage[key];
	    return popThis;
	  }

	  unshift(val) {
	      let obj = this.storage;
	      let nuObj = {};
	      nuObj[0] = val
	      Object.keys(obj).forEach(function(key,index) {
	          let nukey = index;
	          nukey++;
	          nuObj[nukey] = obj[key];
	          delete obj[key];
	      });
	      this.storage = nuObj;
	      return this.storage;
	  }

	  shift() {
	      let obj = this.storage;
	      let nuObj = {};
	      let shiftThis = this.storage[0];
	      delete this.storage[0];

	      Object.keys(obj).forEach(function(key,index) {
	          let nukey = index;
	          console.log(key +" "+nukey)
	          nuObj[nukey] = obj[key];
	          delete obj[key];
	      });
	      this.storage = nuObj;
	      return shiftThis;
	      //return this.storage;
	  }
}


module.exports = NotAnArray;
