// What is bigO notation and time complexity?
//
// Big O notation is a mathematical expression of how long an algorithm to run to completion depending on the input size.
//
// It's important to be able to evaluate Big O and subsequently time complexity because it helps us determine how efficient/performant our code is. When it comes to defining time complexity of a function we look at the input and evaluate the number of operations it takes to complete the task based on the input size.
//
// Big O informs us how much slower an algorithm will run if it’s input size grows.
//
// For example if you compare;
//
// const logAllValues = (n) => {
//   for (let i = 0; i < n.length; i++) {
//     console.log(n[i])
//   }
// }
//
// logAllValues([1,2,3])
// logAllValues([1,2,3,…100])
//
// Will the run time stay the same as the input size increases?
// Will the run time get proportionally larger as the input size increases?
// Will the run time get exponentially larger as the input size increases?
// Will the run time get shorter as the input size increases?
//
// It helps to imagine graphs of time vs input size. Where time is the y-axis and input size is the x-axis.
//
// Constant O(1) [a straight line]
// - The number of operations is not equal to the size of the input
// - The time it takes to complete a task is constant and doesn't depend on the size of the input
//
// Linear O(n) [a straight line going up]
// - The number of operations is equal to the size of the input
// - The time it takes to complete a task is porportional to the size of the input
//
// Exponential O(n^2) [a curving line up]
// - The number of operations is the square of the size of the input
//
// Logarithmic O(log n) [a curving line down]
// - The size of the input is halfed each time an operation is completed
//
// For more on it please read:
//
////////////////////////////////// READ THIS IT'S AWESOME ///////////////////////////////////////////
///// https://www.interviewcake.com/article/javascript/big-o-notation-time-and-space-complexity /////
////////////////////////////////// READ THIS IT'S AWESOME ///////////////////////////////////////////
//
// They can explain it way better than I can and they go over the steps for determining time complexity.

// Classify the following statements with what you think the time complexity is and why.

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// (1) Time Complexity:
// O(1): constant time for retrieving the first item in an array
const logFirstValue = (n) => {
  console.log(n[0])
}

// (2) Time Complexity:
// O(1): constant time for retrieving an index item in an array
const logLastValue = (n) => {
  console.log(n[n.length - 1])
}

// (3) Time Complexity:
// O(n): need to walk through each item in the array
const logAllValues = (n) => {
  for (let i = 0; i < n.length; i++) {
    console.log(n[i])
  }
}

// (4) Time Complexity:
// O(n^2): n times n loops
const logCombinations = (n) => {
  for (let i = 0; i < n.length; i++) {
    for (let j = 0; j < n.length; j++) {
      console.log(`${n[i]} and ${n[j]}`)
    }
  }
}

// (5) Time Complexity:
// O(log n)
const binarySearch = (arr, target) => {
  let startIndex = 0;
  let endIndex = arr.length - 1;

  while(startIndex <= endIndex) {
    let middleIndex = Math.floor((startIndex + endIndex) / 2);
    if(target === arr[middleIndex]) {
      return true;
    } else if(target > arr[middleIndex]) {
      startIndex = middleIndex + 1;
    } else if(target < arr[middleIndex]) {
      endIndex = middleIndex - 1;
    }
  }

  return false;
}

// (6) Time Complexity:
// O(n log n)
const quickSort = list => {
  if (list.length < 2) {
    return list;
  }

  let pivot = list[0];
  let left  = [];
  let right = [];

  for (let i = 1, total = list.length; i < total; i++){
    if (list[i] < pivot) {
      left.push(list[i]);
    } else {
      right.push(list[i]);
    }
  }

  return [
    ...quickSort(left),
    pivot,
    ...quickSort(right)
  ];
};

// (7) Time Complexity:
// O(1) - constant time operating on single array element
const firstElemEven = (array) => {
  return array[0] % 2 === 0 ? true : false;
}

// (8) Time Complexity:
// O(n) - worst case value not in the array, you have to
// check every item in the array
const hasValue = (array, value) => {
  for (var i = 0; i < array.length; i++){
    if (array[i] === value){
      return true;
    }
  }

  return false;
}

// (9) Time Complexity:
// O(n^2) - for every item compare against n - 1 elements: n * (n - 1) = n^2 - n
const findMatch = (string) => {
  for (var i = 0; i < string.length; i++){
    for (var j = i+1; j < string.length; j++){
      if (string[i] === string[j]) {
        return true;
      }
    }
  }

  return false;
}

// (10) Time Complexity:
// O(1)
data.pop()

// (11) Time Complexity:
// O(n)
data.shift()

// (12) Time Complexity:
// O(n)
data.unshift()

// (13) Time Complexity:
// O(1) - using array adding to end of it
data.push()

// (14) Time Complexity: O(n)
const merge = (left, right) => {
  let resultArray = [];
  let leftIndex = 0
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      resultArray.push(left[leftIndex]);
      leftIndex = leftIndex + 1;
    } else {
      resultArray.push(right[rightIndex]);
      rightIndex = rightIndex + 1;
    }
  }

  return resultArray
    .concat(left.slice(leftIndex))
    .concat(right.slice(rightIndex));
}

// (15) Time Complexity: O(n log n)
const mergeSort = (unsortedArray) => {
  if (unsortedArray.length <= 1) {
    return unsortedArray;
  }

  const middle = Math.floor(unsortedArray.length / 2);
  const left = unsortedArray.slice(0, middle);
  const right = unsortedArray.slice(middle);

  return merge(
    mergeSort(left),
    mergeSort(right)
  );
}

// (16) Time Complexity:
// if run for the first time then O(n!) or like O(n^2)
// all subsequent times that are below the largest run time are O(n) if you memoize
// Finding the factorial of a number
// O(n!)
const factorial = (n) => ( n < 2 ? 1 : n * factorial(n - 1) );

  if (x === 0) {
  	return 1;
  } else {
    let result = x * factorial(x - 1);
    cache[x] = result;

  	return result;
  }
};

// (17) Time Complexity: O(n^2)
// Finding all distinct subsets of a given string
// subSetsOfAString('') outputs  ['']
// subSetsOfAString('a') outputs ['', 'a']
// subSetsOfAString('ab') outputs ['', 'a', 'b', 'ab']
const subSetsOfAString = (s) => {
  const rs = [''];
  if (s) {
    for (let i = 0; i < s.length; i++) {
      rs.push(s[i]);
    }

    // O(n^2)
    for (let i = 0; i < s.length; i++) {
      for (let j = i+1; j < s.length; j++) {
        rs.push(`${s[i]}${s[j]}`);
      }
    }
  }

  return rs;
}


// (18) Time Complexity: O(n!) or like O(n^2)
// Write a function that computes all the different words that can be formed given a string
// permutationsOfAString('a') outputs [ 'a']
// permutationsOfAString('ab') outputs  [ 'ab', 'ba']
// permutationsOfAString('abc') outputs [ 'abc', 'bac', 'bca', 'acb', 'cab', 'cba' ]
function permute(s) {
  if (!s) {
    return [];
  }

  if (s.length === 1) {
    return [s];
  }

  if (s.length === 2) {
    return [s, `${s[1]}${s[0]}`];
  }

  let permutedStrings=[];
  // O(n!)
  for(let i=0; i < s.length; i++) {
    const c = s[i];
    permutedStrings = permutedStrings.concat(
      permute(s.substring(0,i)+s.substring(i+1)).map(partial => (c+partial))
    );
  }
  // handle duplicates, e.g. s = 'aab' => ['aab', 'aba', 'baa']
  const strSet = new Set();
  permutedStrings.forEach(str => {
    strSet.add(str);
  });

  return Array.from(strSet);
}

module.exports = {
  factorial,
  subSetsOfAString,
  permutationsOfAString: permute
}
