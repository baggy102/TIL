const fs = require("fs");

const input = require("fs").readFileSync("example.txt").toString().trim().split(" ");

// const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

let A = parseInt(input[0]);
let B = parseInt(input[1]);
let C = parseInt(input[2]);

let max = Math.max(A, B, C);

console.log(A, B, C);

if (A == B && B == C) {
  console.log(A * 1000 + 10000);
} else if (A == B && A != C) {
  console.log(A * 100 + 1000);
} else if (A == C && A != B) {
  console.log(A * 100 + 1000);
} else if (B == C && A != B) {
  console.log(1000 + B * 100);
} else {
  console.log(max * 100);
}
