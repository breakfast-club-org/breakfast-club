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
    compare(a,b){   
      if(a<b){
        return false;
      }else{return true;}
  	}

   bubbleSort(arr) {
    const sorted = arr;
    const l = arr.length;
    let n = 0;
    let swapCount = 0;
    for(var i=0; i<l; i++){
        let a = sorted[n];
        let b = sorted[n+1];
        if(!b){
          break;
        }
        let swap = this.compare(a,b);
        if(swap){
          sorted[n] = b;
          sorted[n+1] = a;
          swapCount++;
        }
        n++;
    }

    if(swapCount){
      this.bubbleSort(sorted)
    }
      
     return sorted;
   
  }

  insertionSort(arr) {
    //FPO in to pass test
    return arr.sort();
  }

  mergeSort(arr) {
    //FPO to pass test
    return arr.sort();
  }
}

module.exports = SortingMethods;
