const assert = require('chai').assert;
const StorageCenter = require('../questions/17-storage-center');

describe('Storage Center!', () => {
	it('should have a value', () => {
    const o = new StorageCenter();
    const thing = o.set('wow unique', 'hello');

		assert.equal(o.has('wow unique'), true);
    assert.equal(o.has(), false);
	});

  it('should get a value', () => {
    const o = new StorageCenter();
    const thing = o.set('wow unique', 'hello');

    assert.equal(o.get('wow unique'), 'hello');
    assert.equal(o.get(), null);
  });
});
