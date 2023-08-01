const fs = require("fs");

const input = require("fs").readFileSync("example.txt").toString().trim().split("\n");

// const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let B = input[1].split(" ");

let answer = [Math.min(...B), Math.max(...B)];

console.log(answer.join(" "));
