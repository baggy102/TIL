const fs = require("fs");

const input = require("fs").readFileSync("example.txt").toString().trim().split("\n");

// const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let B = input[1].split(" ");

let count = 0;

for (let i = 0; i < B.length; i++) {
  if (B[i] == parseInt(input[2])) {
    count++;
  }
}

console.log(count);
