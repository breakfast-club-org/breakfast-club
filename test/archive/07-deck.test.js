const assert = require('chai').assert;
const DeckOfCards = require('../questions/07-deck');

describe('DeckOfCards', () => {
  // Depending on how you construct your deck how do you think it would be best to write tests for it?

  describe('createDeck()', () => {
    it('should be a deck of 52 cards', () => {
      const o = new DeckOfCards;
      o.createDeck();

      assert.equal(o.deck.length, 52);
    });

    it('should be a deck of playing cards', () => {
      const o = new DeckOfCards;
      o.createDeck();

      const cardNames = [
        "2 of hearts",
        "3 of hearts",
        "4 of hearts",
        "5 of hearts",
        "6 of hearts",
        "7 of hearts",
        "8 of hearts",
        "9 of hearts",
        "10 of hearts",
        "jack of hearts",
        "queen of hearts",
        "king of hearts",
        "ace of hearts",
        "2 of diamonds",
        "3 of diamonds",
        "4 of diamonds",
        "5 of diamonds",
        "6 of diamonds",
        "7 of diamonds",
        "8 of diamonds",
        "9 of diamonds",
        "10 of diamonds",
        "jack of diamonds",
        "queen of diamonds",
        "king of diamonds",
        "ace of diamonds",
        "2 of clubs",
        "3 of clubs",
        "4 of clubs",
        "5 of clubs",
        "6 of clubs",
        "7 of clubs",
        "8 of clubs",
        "9 of clubs",
        "10 of clubs",
        "jack of clubs",
        "queen of clubs",
        "king of clubs",
        "ace of clubs",
        "2 of spades",
        "3 of spades",
        "4 of spades",
        "5 of spades",
        "6 of spades",
        "7 of spades",
        "8 of spades",
        "9 of spades",
        "10 of spades",
        "jack of spades",
        "queen of spades",
        "king of spades",
        "ace of spades"
      ]

      for (let i = 0; i < o.deck.length; i++) {
        assert.include(cardNames, o.deck[i].name, 'card does not exist');
      }
    });
  });

  // describe('shuffle()', () => {
  //   it('should be a shuffled deck', () => {
  //
  //   });
  // });

  describe('dealFive()', () => {
    it('should be deal 5 cards', () => {
      const o = new DeckOfCards;
      o.createDeck();

      let cards = o.dealFive();

      assert.equal(cards.length, 5);
    });
  });
});
