#!/usr/bin/node

const len = process.argv.length;
if (len < 4) {
  console.log(0);
} else {
  const sortedArray = process.argv.sort((a, b) => a - b);
  console.log(sortedArray[sortedArray.length - 2]);
}
