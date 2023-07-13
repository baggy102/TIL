const fs = require("fs");

const input = require("fs").readFileSync("example.txt").toString().split("\n");

// const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

let A = parseInt(input[0]);
let B = parseInt(input[1]);

console.log(A);
console.log(B);

console.log(input[0].slice(0, 1));
