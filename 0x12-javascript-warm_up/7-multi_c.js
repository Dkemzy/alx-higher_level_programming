#!/usr/bin/node

const argNum = process.argv[2];

if (!isNaN(+process.argv[2])) {
	for (let i = 0; i < argNum; i++) {
		console.log('C is fun');
	}
} else {
	console.log('Missing number of occurrences');
}
