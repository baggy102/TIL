const fs = require("fs");

const input = require("fs").readFileSync("example.txt").toString().trim().split("\n");

// const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const A = parseInt(input[0]);

for (let i = 1; i < A + 1; i++) {
  let B = parseInt(input[i].split(" ")[0]);
  let C = parseInt(input[i].split(" ")[1]);

  console.log(B + C);
}
