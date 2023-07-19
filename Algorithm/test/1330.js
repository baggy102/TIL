const fs = require("fs");

const input = require("fs").readFileSync("example.txt").toString().split(" ");

// const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

let A = parseInt(input[0]);
let B = parseInt(input[1]);

if (A > B) {
  console.log(">");
} else if (A == B) {
  console.log("==");
} else {
  console.log("<");
}
