const assert = require('chai').assert;
const excludeThings = require('../questions/21-exclude-things');

describe('Exclude Things', function() {
  it('should exclude values from given inputs', function() {
    const items = [
      {
        genre: 'action',
        title: 'tenet',
        rating: 3
      },
      {
        genre: 'comedy',
        title: 'ace ventura pet detective',
        rating: 1
      },
      {
        genre: 'science fiction',
        title: 'matrix',
        rating: 2
      },
      {
        genre: 'horror',
        title: 'rings',
        rating: 1
      },
      {
        genre: 'comedy',
        title: 'the mask',
        rating: 4
      }
    ];

    const excludes = [
      { k: 'genre', v: 'action' },
      { k: 'title', v: 'matrix' },
      { k: 'rating', v: 1 }
    ];

    const output = [
      {
        genre: 'comedy',
        title: 'the mask',
        rating: 4
      }
    ]

    const excluded = excludeThings(items, excludes);

    assert.deepEqual(excluded, output);
  });
});
