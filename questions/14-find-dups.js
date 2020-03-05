// Given an array of numbers that can only be duplciated once, return an array of the duplciates in the order you found them in
// TIME: O(n)
// SPACE: O(1) I think?
// For example if you had an array such as
// const arr = [1, 2, 2, 3, 1, 4, 6, 5, 6, 4];
// the result should be
// [2, 1, 6, 4]

const findDups = (arr) => {

	const l = arr.length; 
	let nuArr = [];
	let n = 0;
	let i = 0;
	while(n<l){
		
		if(i != n && arr[i] == arr[n] && !nuArr.includes(arr[i])){
			nuArr.push(arr[i]);
			n = i;
			i++;
		}
		if(n == l-1 && i<l-1){
			n = i;
			i++;
		}
        
		n++;
		

		// for (let i = 0; i < l; i++) {
  //            console.log(i +" "+ n)
		// 	if(i!=n && arr[i] == arr[n] && !nuArr.includes(arr[i])){
		// 		nuArr.push(arr[i]);
		// 	}
		// }

		// n++;

	}

	 return nuArr;
	
}

module.exports = findDups;
