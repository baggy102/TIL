const fs = require("fs");

const input = require("fs").readFileSync("example.txt").toString().trim().split("\n");

// const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let A = parseInt(input[0].split(" ")[1]);
let B = input[1].split(" ");

console.log(A);

let answer = B.filter((a) => A > a);

console.log(answer.join(" "));
