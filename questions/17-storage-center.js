// Write a class called storage center that has three methods set, has, and get
// set should accept a node and a value and store it the data store
// has should check if the node exists within your data store
// get should retrieve the value associated with the node that was stored

 class StorageCenter {
  constructor(){
    this.storage = [];

  }

  set(node, val) {
  	let obj = {}
    obj.node = node;
    obj.val = val;
    this.storage.push(obj);
    return obj.val;
  }
  has(node) {
  	let hasNode = this.storage.find(function(store){
  
  		return store.node === node;
  	});
  	
  	if(hasNode){
  		return true;
      }
     else{return false}
  }
  get(node) {
  	let getNode = this.storage.find(function(store){
  		if(store.node === node){
  			return store.val;
  		}else{return false};
  	});
  	 if(getNode){return  getNode.val;}
     else{return null;}

  }

}


module.exports = StorageCenter;
