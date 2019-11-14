const Shuffle = require('./06-shuffle');

class DeckOfCards extends Shuffle {
  constructor() {
    super();

    this.deck=[]; // whatever you want for the data structure
    this.suits = ['hearts', 'diamonds', 'clubs', 'spades'];
    this.values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'jack', 'queen', 'king', 'ace'];
  }

  // using the data provided (suits and values) construct a deck of 52 cards
  createDeck(n = 0) {
      let vals = this.values;
      let s = this.suits;
      let d = this.deck;
      let q;
    
      while(n<s.length){

        vals.forEach(function(v){
            d.push([s[n],v]);
        });
        n = n+1;
      }

    return d()
       
  }

  // feel free to use the shuffle methods that we defined previously
  shuffle() {
    const shuffle = new Shuffle();
  
    let shuffledDeck = shuffle.shuffleOne(this.deck)
    
    return shuffledDeck;
     

  }

  // Deal five cards, when you've hit the end of the deck and there are less than 5 to deal return a notification
  dealFive(thisDeck, n=5) {
    
        if(thisDeck.length < n){
          return false;
        }
        let thisHand = thisDeck.splice(0,n);
        return thisHand;

  }
}

module.exports = DeckOfCards;
