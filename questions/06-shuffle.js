// Shuffle
//
// - Think of as at least three different ways to randomly shuffle an array of numbers or strings
// - What is a meaningful way to test if your input array has been shuffled? Please fill these out in 06-shuffle.test.js
// READ THIS: https://bost.ocks.org/mike/shuffle/

class Shuffle {
  constructor() {}

   getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min)) + min;
  }

  nameOfYourFunction(arr) {
    let shuffled = [];
    let l = arr.length;
    let n = 0;
    while(n < l){
      let s = this.getRandomInt(0,l);
      shuffled.push(arr[s]);
      arr.splice(s,1);
      l--;
    }
    return shuffled;
  }
}

module.exports = Shuffle;



