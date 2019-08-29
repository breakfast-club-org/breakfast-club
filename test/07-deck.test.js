const assert = require('chai').assert;
const DeckOfCards = require('../questions/07-deck');

describe('DeckOfCards', () => {
  let deck;
  let cards;

  // Depending on how you construct your deck how do you think it would be best to write tests for it?
  beforeEach(function() {
    deck = new DeckOfCards();
    cards = [...deck.createDeck()];
  });

  describe('#createDeck()', () => {
    it('should contain 52 cards', () => {
      assert.lengthOf(cards, 52);
    });
  });

  describe('#shuffle()', () => {
    it('should be a shuffled deck', () => {
      const shuffled = deck.shuffle();

      assert.isArray(shuffled);
      assert.lengthOf(shuffled, cards.length);
      assert.notDeepEqual(shuffled, cards);
    });

    it('should reset the deck', () => {
      let dealt = [];
      for (const card of deck.deal()) {
        // deal all the cards
        dealt.push(card);
      }
      assert.lengthOf(dealt, cards.length);
      const shuffled = deck.shuffle();
      assert.lengthOf(shuffled, cards.length);

      dealt = [];
      for (const card of deck.deal()) {
        // deal all the cards
        dealt.push(card);
      }
      assert.lengthOf(dealt, cards.length, 'after shuffle should be able to redeal all the cards in deck');
    });
  });

  describe('#dealFive()', () => {
    it('should deal 5 cards', () => {
      const five = deck.dealFive();

      assert.lengthOf(five, 5);
    });

    it('should stop when deck is empty', () => {
      let n = 11;
      while (n--) {
        deck.dealFive();
      }
      assert.isTrue(deck.empty());
    });
  });
});
