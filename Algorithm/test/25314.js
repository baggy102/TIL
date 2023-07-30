const fs = require("fs");

const input = require("fs").readFileSync("example.txt").toString().trim();

// const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const A = parseInt(input / 4);

console.log(A);

console.log(`${"long ".repeat(A)}int`);
