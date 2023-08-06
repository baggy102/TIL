const fs = require("fs");

const input = require("fs").readFileSync("example.txt").toString().trim().split("\n");

// const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

let max = parseInt(input[0]);
let maxIdx = 0;

for (let i = 0; i < 9; i++) {
  if (max < parseInt(input[i])) {
    max = parseInt(input[i]);
    maxIdx = i;
  }
}

console.log(max);
console.log(maxIdx + 1);
