const fs = require("fs");

const input = require("fs").readFileSync("example.txt").toString().trim().split("\n");

// const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

let A = input;

for (let i = 0; i < input.length; i++) {
  console.log(`${parseInt(A[i].split(" ")[0]) + parseInt(A[i].split(" ")[1])}`);
}
