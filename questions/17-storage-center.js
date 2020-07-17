// Write a class called storage center that has three methods set, has, and get
// set should accept a node and a value and store it the data store
// has should check if the node exists within your data store
// get should retrieve the value associated with the node that was stored

class StorageCenter {
  constructor(){
    this.nodeKey = [];
    this.nodeValue = [];
  }

  set(node, val) {
    const index = this.nodeKey.indexOf(node);

    if (index === -1) {
      this.nodeKey.push(node);
      this.nodeValue.push(val);
    } else {
      this.nodeKey[index] = node;
      this.nodeValue[index] = val
    }
  }
  has(node) {
    return this.nodeKey.includes(node);
  }
  get(node) {
    const index = this.nodeKey.indexOf(node);

    return this.nodeValue[index] || null;
  }
}

module.exports = StorageCenter;
