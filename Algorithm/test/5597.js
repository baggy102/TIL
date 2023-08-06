const fs = require("fs");

const input = require("fs").readFileSync("example.txt").toString().trim().split("\n");

// const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

let A = Array(30)
  .fill()
  .map((v, i) => i + 1);

for (let i = 0; i < input.length; i++) {
  A.splice(A.indexOf(parseInt(input[i])), 1);
}

console.log(A[0]);
console.log(A[1]);
