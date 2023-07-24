const fs = require("fs");

const input = require("fs").readFileSync("example.txt").toString();

// const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

let A = parseInt(input);

for (let i = 1; i < 10; i++) {
  console.log(`${A} * ${i} = ${A * i}`);
}
