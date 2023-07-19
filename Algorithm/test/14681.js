const fs = require("fs");

const input = require("fs").readFileSync("example.txt").toString().split("\n");

// const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

let A = parseInt(input[0]);
let B = parseInt(input[1]);

if (A > 0 && B > 0) {
  console.log(1);
} else if (A < 0 && B > 0) {
  console.log(2);
} else if (A < 0 && B < 0) {
  console.log(3);
} else {
  console.log(4);
}
