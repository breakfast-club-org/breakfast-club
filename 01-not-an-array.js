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
		let newObj = {}
		let objLength = this._objKeys().length;

		newObj[objLength] = val

		this.storage = Object.assign(this.storage, newObj);
	}

	pop() {
		let lastOfObj = this._objKeys().length - 1;
		let lastVal = this.storage[lastOfObj]

		delete this.storage[this._objKeys()[lastOfObj]]

		return lastVal
	}

	unshift(val) {
		this.storage = Object.assign({0: val}, this._arrangeObj(1))
	}

	shift() {
		let firstVal = this.storage[0]

		delete this.storage[0]

		this.storage = this._arrangeObj(-1)

		return firstVal;
	}

	_objKeys() {
		return Object.keys(this.storage);
	}

	_arrangeObj(num) {
		let arrangedObj = {}

		for (let key in this.storage) {
			arrangedObj[parseInt(key) + num] = this.storage[key]
		}

		return arrangedObj
	}

}

module.exports = NotAnArray;
