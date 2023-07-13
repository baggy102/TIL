const fs = require("fs");

const input = require("fs").readFileSync("example.txt").toString().split("\n");

// const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

let A = parseInt(input[0]);

console.log(A - 543);
