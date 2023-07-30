const fs = require("fs");

const input = require("fs").readFileSync("example.txt").toString().trim();

// const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const A = parseInt(input);

for (let i = 1; i < A + 1; i++) {
  console.log(`Case #${i}: ${parseInt(input.split("\n")[i].split(" ")[0]) + parseInt(input.split("\n")[i].split(" ")[1])}`);
}
