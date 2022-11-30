#!/usr/bin/node

const oldArray = require('./100-data').list;
const newArray = oldArray.map(function (num, index) {
	return num * index;
});
console.log(oldArray);
console.log(newArray);