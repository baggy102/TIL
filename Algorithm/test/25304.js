const fs = require("fs");

const input = require("fs").readFileSync("example.txt").toString().trim().split("\n");

// const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const A = parseInt(input[0]);
const B = parseInt(input[1]);

let answer = 0;

for (let i = 2; i < B + 2; i++) {
  answer += input[i].split(" ")[0] * input[i].split(" ")[1];
}

console.log(A == answer ? "Yes" : "No");
