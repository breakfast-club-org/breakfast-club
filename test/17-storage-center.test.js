const assert = require('chai').assert;
const StorageCenter = require('../questions/17-storage-center');

describe('Storage Center!', () => {
  let o = null;
  const objK1 = {
    k: 1
  }
  const objK2 = {
    k: 2
  }

  before(() => {
    o = new StorageCenter();
  });

	it('should have a value', () => {
    const thing = o.set('wow unique', 'hello');

		assert.equal(o.has('wow unique'), true);
    assert.equal(o.has(), false);
	});

  it('should get a value', () => {
    const thing = o.set('wow unique', 'hello');

    assert.equal(o.get('wow unique'), 'hello');
    assert.equal(o.get(), null);
  });

  [null, undefined, true, false, objK1, objK2].forEach(k => {
    it(`should be able to set ${k} as key`, () => {
      let v = `just added ${k} as a key`;
      o.set(k, v);

      assert.equal(o.has(k), true);
      assert.equal(o.get(k), v);
    });
  });

  it('should not overwrite different custom object keys', () => {
    o.set({key:1}, 'this is object key 1');
    o.set({key:2}, 'this is object key 2');

    assert.equal(o.get({key:1}), 'this is object key 1');
    assert.equal(o.get({key:2}), 'this is object key 2');
  });
});
