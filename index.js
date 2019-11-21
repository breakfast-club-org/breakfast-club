//index.js

var express = require('express');
var app = express();

app.get('/', function(req, res){
   res.send("Hello world!");
});

app.listen(3000);


const matrixTransforms = require('./questions/10-matrix-transformations');

const input = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9]
]

const fourbythree = [
	[1, 2, 3, 4],
	[5, 6, 7, 8],
	[9, 10, 11, 12]
]

const threebyfour = [
		[1, 5, 9],
		[2, 6, 10],
		[3, 7, 11],
		[4, 8, 12]
]

const threebythree = [
		[1, 2, 3],
		[4, 5],
		[6, 7, 8]
]

const expectedOutputthreebythree = [
	[1, 4, 6],
	[2, 5, 7],
	[3, null, 8]
]

// console.log(threebyfour);

// console.log(matrixTransforms(fourbythree))

// console.log(matrixTransforms(fourbythree) === threebyfour)

