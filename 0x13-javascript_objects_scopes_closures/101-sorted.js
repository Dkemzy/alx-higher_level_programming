#!/usr/bin/node

const oldDict = require('./101-data').dict;
const newDict = {};
for (const k in oldDict) {
	if (oldDict[k] in newDict) {
		newDict[oldDict[k]].push(k);
	} else {
	newDict[oldDict[k]] = [k];
	}
}
console.log(newDict);