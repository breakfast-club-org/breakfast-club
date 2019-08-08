// Shuffle
//
// - Think of as at least three different ways to randomly shuffle an array of numbers or strings
// - What is a meaningful way to test if your input array has been shuffled? Please fill these out in 06-shuffle.test.js
// READ THIS: https://bost.ocks.org/mike/shuffle/

class Shuffle {
  constructor() {}

  shuffleForwards(arr) {
    for (let i = 0; i < arr.length; i++) {
      let position = Math.floor(Math.random() * (i + 1));

      // arr.swap(arr[i], arr[position]);

      [arr[i], arr[position]] = [arr[position], arr[i]];
    }

    return arr;
  }

  shuffleBackwards(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      let position = Math.floor(Math.random() * (i + 1));

      [arr[i], arr[position]] = [arr[position], arr[i]];
    }

    return arr;
  }

  fisherYatesShuffle(arr) {
    let m = arr.length;

    while (m) {
      let position = Math.floor(Math.random() * m--);

      [arr[m], arr[position]] = [arr[position], arr[m]];
    }

    return arr;
  }

}

module.exports = Shuffle;
