/**
 * Write a function that accepts a string and a target, and returns the last occurrence of an element in a string
 * btw: you're not allowed to use `lastIndexOf`
 *
 * write a lastOccurrence(str)
 * where:
 *   str - string
 *   target - string
 */
//  const lastOccurrence = (str, target) => {   
//   if (str.includes(target)) {
//     const len = str.match(new RegExp(target, 'g')).length;
//     return len === 1 ? str.indexOf(target) : str.indexOf(target, (str.indexOf(target) + len - 1));
//   }

//   return -1;
// };

const lastOccurrence = (str, target) => {   
  if (str.includes(target)) {
  	let indexOf = 0;
    
    for (let i = 0, len = str.length; i < len; i++) {
    	indexOf = (str[i] === target && i > indexOf) ? i : indexOf;
    }

    return indexOf;
  }

  return -1;
};


module.exports = lastOccurrence;