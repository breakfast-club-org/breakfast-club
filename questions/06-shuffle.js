// Shuffle
//
// - Think of as at least three different ways to randomly shuffle an array of numbers or strings
// - What is a meaningful way to test if your input array has been shuffled? Please fill these out in 06-shuffle.test.js
// READ THIS: https://bost.ocks.org/mike/shuffle/

class Shuffle {
  constructor() {}

  fisherYatesShuffle(arr) {
    let m = arr.length, t, i;
    while (m) {
      // randomly choose remaining item
      i = Math.floor(Math.random() * m--);

      // swap the choose item with the last element on of remaining array
      t = arr[m];
      arr[m] = arr[i];
      arr[i] = t;
    }
    return arr;
  }
}

module.exports = Shuffle;
