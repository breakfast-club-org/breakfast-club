// Write a class called storage center that has three methods set, has, and get
// set should accept a node and a value and store it the data store
// has should check if the node exists within your data store
// get should retrieve the value associated with the node that was stored

class StorageCenter {
  constructor(){
    this.store = {};
  }

  set(node, val) {
    let key = this.toKey(node);
    this.store[key] = val;
  }
  has(node) {
    let key = this.toKey(node);
    return !!this.store[key];
  }

  get(node) {
    return this.store[this.toKey(node)];
  }

  toKey(node) {
    let key = node + '';
    if (key === '[object Object]') {
      key = Object.entries(node) + '';
    }

    return key;
  }
}

module.exports = StorageCenter;
