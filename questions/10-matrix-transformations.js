// Write a function to return a transformed 2d array of numbers. For edge cases please look at the tests.
// const intput = [
// 	[1, 2, 3],
// 	[4, 5, 6],
// 	[7, 8, 9]
// ]
//
// const output = [
// 	[1, 4, 7],
// 	[2, 5, 8],
// 	[3, 6, 9]
// ]
//


const matrixTransformation = (arr) => {
	
let pop = [];
let store = [];

	let l = arr.length - 1;
	let a = arr;
	let al = a[l].length;
	let n = 0, i = 0;
	
	while(n<al){
		pop.push([]);
		
		a.forEach(function(e){	
			let [one, ...rest] = e;
			pop[n].push(one);
			store.push(rest);

		});

		a = store;
		store=[];
		n++;
	}
	

	return pop;

}

module.exports = matrixTransformation;
