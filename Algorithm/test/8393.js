const fs = require("fs");

const input = require("fs").readFileSync("example.txt").toString().trim();

// const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const A = parseInt(input);

console.log(A);

let answer = 0;

for (let i = 0; i < A + 1; i++) {
  answer += i;
}

console.log(answer);
