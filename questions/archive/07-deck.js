const Shuffle = require('./06-shuffle');

class DeckOfCards extends Shuffle {
  constructor() {
    super();

    this.deck = []; // whatever you want for the data structure
    this.suits = ['hearts', 'diamonds', 'clubs', 'spades'];
    this.values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'jack', 'queen', 'king', 'ace'];
  }

  // using the data provided (suits and values) construct a deck of 52 cards
  createDeck() {
    for (let i = 0; i < this.suits.length; i++) {
      for (let j = 0; j < this.values.length; j++) {
        let card = {};
        let suit = this.suits[i];
        let value = this.values[j];

        card.name = `${value} of ${suit}`;
        card.suit = suit;
        card.value = value;

        this.deck.push(card);
      }
    }

    return this.deck;
  }

  // feel free to use the shuffle methods that we defined previously
  shuffle() {
    this.deck = this.fisherYatesShuffle(this.deck);

    return this.deck;
  }

  createAndShuffle() {
    this.createDeck();
    this.shuffle();

    return this.deck
  }

  // Deal five cards, when you've hit the end of the deck and there are less than 5 to deal return a notification
  dealFive() {
    if (this.deck.length !== 0) {
      let cards = [];
      let len = this.deck.length < 5 ? this.deck.length : 5;

      for (let i = 0; i < len; i++) {
        let card = this.deck.pop();

        cards.push(card);
      }

      return cards;
    } else {
      console.log('maybe you should reshuffle');

      return [];
    }
  }
}

module.exports = DeckOfCards;
