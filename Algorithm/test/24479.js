const fs = require("fs");

const input = require("fs").readFileSync("example.txt").toString().split("\n");

// const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const [N, M, R] = input[0].split(" ").map((i) => Number(i));
const edge = input.slice(1).map((e) => e.split(" ").map(Number));

console.log(N, M, R);
console.log(edge);
