// Sorting Methods
//
// bubbleSort
//  - A method that accepts an array of numbers and returns the values sorted
//  - Bubble sort is a simple sorting algorithm that repeatedly steps through the list to be sorted, compares each pair of adjacent items and swaps them if they are in the wrong order. The pass through the list is repeated until no swaps are needed, which indicates that the list is sorted.
//  - https://en.wikipedia.org/wiki/Bubble_sort
//
// insertionSort
//  - A method that accepts an array of numbers and returns the values sorted
//  - Insertion sort iterates, consuming one input element each repetition, and growing a sorted output list. At each iteration, insertion sort removes one element from the input data, finds the location it belongs within the sorted list, and inserts it there. It repeats until no input elements remain.
//  https://en.wikipedia.org/wiki/Insertion_sort
//
// mergeSort
//  - A method that accepts an array of numbers and returns the values sorted
//  - Divide the unsorted list into n sublists, each containing one element (a list of one element is considered sorted).
//  - Repeatedly merge sublists to produce new sorted sublists until there is only one sublist remaining. This will be the sorted list.
//  https://en.wikipedia.org/wiki/Merge_sort

class SortingMethods {
  constructor() {}

  // Feel free to add helper methods to this class if you need it for sorting

  bubbleSort(arr) {
    const len = arr.length;

    for (let i = 0; i < len; i++) {
      for (let j = 0; j < (len - i - 1); j++) {
        if(arr[j] > arr[j+1]) {
          [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
        }
      }
    }

    return arr;
  }

  insertionSort(arr) {
    for(var i = 0; i < arr.length; i++) {
      var tmp = arr[i];
      var pointer = i - 1;

      while (pointer >= 0 && arr[pointer] > tmp) {
        arr[pointer + 1] = arr[pointer];
        pointer--;
      }

      arr[pointer + 1] = tmp;
    }
    return arr;
  }

  merge(left, right) {
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

  mergeSort(arr) {
    if (arr.length <= 1) {
      return arr;
    }

    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);

    return this.merge(
      this.mergeSort(left),
      this.mergeSort(right)
    );
  }

}

module.exports = SortingMethods;
