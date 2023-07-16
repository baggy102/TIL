const fs = require("fs");

const input = require("fs").readFileSync("example.txt").toString().split("\n");

// const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

let [A, B] = input;

let [B0, B1, B2] = B.split("");

let sum1 = parseInt(A * B2);
let sum2 = parseInt(A * B1);
let sum3 = parseInt(A * B0);

console.log(sum1);
console.log(sum2);
console.log(sum3);
console.log(sum1 + 10 * sum2 + 100 * sum3);
