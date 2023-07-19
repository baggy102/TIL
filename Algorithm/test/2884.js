const fs = require("fs");

const input = require("fs").readFileSync("example.txt").toString().trim().split(" ");

// const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

let A = parseInt(input[0]);
let B = parseInt(input[1]);

if (B - 45 < 0) {
  if (A === 0) {
    console.log(A + 23, B + 15);
  } else {
    console.log(A - 1, B + 15);
  }
} else {
  console.log(A, B - 45);
}
