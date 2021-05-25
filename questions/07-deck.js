const Shuffle = require('./06-shuffle');

class DeckOfCards extends Shuffle {
  constructor() {
    super();

    this.deck; // whatever you want for the data structure
    this.suits = ['hearts', 'diamonds', 'clubs', 'spades'];
    this.values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'jack', 'queen', 'king', 'ace'];
  }

  // using the data provided (suits and values) construct a deck of 52 cards
  createDeck() {}

  // feel free to use the shuffle methods that we defined previously
  shuffle() {}

  // Deal five cards, when you've hit the end of the deck and there are less than 5 to deal return a notification
  dealFive() {}
}

module.exports = DeckOfCards;
