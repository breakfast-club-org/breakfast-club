const fisherYatesShuffle = require('./06-shuffle').fisherYatesShuffle;

class DeckOfCards {
  constructor() {
    this.deck = this.createDeck();
    this.top = this.deck.length;
  }

  // using the data provided (suits and values) construct a deck of 52 cards
  createDeck() {
    const deck = [];
    [2, 3, 4, 5, 6, 7, 8, 9, 10, 'jack', 'queen', 'king', 'ace'].forEach(v => {
      ['hearts', 'diamonds', 'clubs', 'spades'].forEach(suite => deck.push({v, suite}));
    });

    return deck;
  }

  // feel free to use the shuffle methods that we defined previously
  shuffle() {
    this.top = this.deck.length;
    return fisherYatesShuffle(this.deck);
  }

  * deal() {
    while (this.top--) {
      yield this.deck[this.top];
    }
    return 'deck is empty';
  }

  empty() {
    return this.top < 0;
  }

  // Deal five cards, when you've hit the end of the deck and there are less than 5 to deal return a notification
  dealFive() {
    let n = 5;
    let val;
    const cards = [];
    const iter = this.deal();

    while (n--) {
      val = iter.next();
      if (val.done) {
        console.log(val.value);
        break;
      }
      cards.push(val.value);
    }

    return cards;
  }
}

module.exports = DeckOfCards;
