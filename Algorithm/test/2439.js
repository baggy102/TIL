const fs = require("fs");

const input = require("fs").readFileSync("example.txt").toString().trim();

// const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const A = parseInt(input);

for (let i = 0; i < A; i++) {
  console.log(`${" ".repeat(A - i - 1)}${"*".repeat(i + 1)}`);
}
