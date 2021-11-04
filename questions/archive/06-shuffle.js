// Shuffle
//
// - Think of as at least three different ways to randomly shuffle an array of numbers or strings
// - What is a meaningful way to test if your input array has been shuffled? Please fill these out in 06-shuffle.test.js
// READ THIS: https://bost.ocks.org/mike/shuffle/

class Shuffle {
  constructor() {
    Array.prototype.swap = function(a, b) {
      [this[a], this[b]] = [this[b], this[a]];
    }
  }

  shuffleForwards(arr) {
    for (let i = 0; i < arr.length; i++) {
      let position = Math.floor(Math.random() * (i + 1));

      arr.swap(i, position);
    }

    return arr;
  }

  shuffleBackwards(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      let position = Math.floor(Math.random() * (i + 1));

      arr.swap(i, position);
    }

    return arr;
  }

  fisherYatesShuffle(arr) {
    let m = arr.length;

    while (m) {
      let position = Math.floor(Math.random() * m--);

      arr.swap(m, position);
    }

    return arr;
  }

}

module.exports = Shuffle;
