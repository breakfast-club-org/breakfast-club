// Implement a class called pseudoArray that has the following methods
//
// push
//  - Accepts a value and places it at the front of the object with the key being an index based on the length and the value being the value passed into the function
//  ex: 
//  pseudoArray.push('first')
//  pseudoArray.push('second')
//  should result in {0: 'first', 1: 'second'}
//
// pop
//  - removes the value from the end of the object and returns it
//  ex: 
//  pseudoArray.pop();
//  returns 'second' and the object should look like {0: 'first'}
//
// unshift
//  - Accepts a value and places it at the end of the an object with the key being an index based on the length and the value being the value passed into the function
//  ex: 
//  pseudoArray.unshift('now I am first');
//  should result in {0: 'now I am first', 1: 'first'}
//
// shift
//  - removes the value from the front of the object and returns it
//  ex: 
//  pseudoArray.shift();
//  returns 'now I am first' and the object should look like {0: 'first'}
//

class NotAnArray {
  constructor() {}
  
  push() {}
  
  pop() {}
  
  unshift() {}
  
  shift() {}
}
