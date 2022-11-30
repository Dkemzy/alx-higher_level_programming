#!/usr/bin/node

const SquareOne = require('./5-square');
class Square extends SquareOne {
  charPrint (c) {
    if (!c) {
      this.print();
    } else {
      for (let i = 0; i < this.width; i++) {
        console.log(c.repeat(this.width));
      }
    }
  }
}
module.exports = Square;
