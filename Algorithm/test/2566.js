const fs = require("fs");

const input = require("fs").readFileSync("example.txt").toString().trim().split("\n");

// const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

let max = 0;
let maxIdx = [];

for (let i = 0; i < 9; i++) {
  for (let j = 0; j < 9; j++) {
    if (input[i].split(" ")[j] >= max) {
      max = parseInt(input[i].split(" ")[j]);
      maxIdx = [i, j];
    }
  }
}

console.log(max);
console.log(maxIdx[0] + 1, maxIdx[1] + 1);
