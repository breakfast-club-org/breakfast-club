const assert = require('chai').assert;
const BrowserHistory = require('../questions/20-browser-history');

describe('Browser History', function() {
	it('should return an object with some methods on it', function() {
    const bh = new BrowserHistory();

		// assert.equal(TypeOf bh.historyStore, 'some storage'); // this one is up to you
	});

  it('should visit a page', function() {
    const bh = new BrowserHistory();
    bh.visit('www.apple.com');

		assert.equal(bh.visit('www.apple.com'), 'You are at www.apple.com');
	});

  it('should go back a few pages in history', function() {
    const bh = new BrowserHistory();
    bh.visit('www.apple.com');
    bh.visit('www.reddit.com');
    bh.visit('www.kotaku.com');

		assert.equal(bh.back(1), 'You are at www.reddit.com');
    assert.equal(bh.back(1), 'You are at www.apple.com');
    assert.equal(bh.back(1), 'You are at www.apple.com');
	});

  it('should go forward a few pages in history', function() {
    const bh = new BrowserHistory();
    bh.visit('www.apple.com');
    bh.visit('www.reddit.com');
    bh.visit('www.kotaku.com');
    bh.back(1);
    bh.back(1);

    assert.equal(bh.forward(1), 'You are at www.reddit.com');
    assert.equal(bh.forward(1), 'You are at www.kotaku.com');
    assert.equal(bh.forward(1), 'You are at www.kotaku.com');
  });

  it('should erase history going forward if you visit a page in the middle of history', function() {
    const bh = new BrowserHistory();
    bh.visit('www.apple.com');
    bh.visit('www.reddit.com');
    bh.visit('www.kotaku.com');
    bh.back(1); // www.reddit.com
    bh.visit('www.youtube.com'); // 'You are at www.youtube.com';

    assert.equal(bh.forward(1), 'You are at www.youtube.com');
  });
});
