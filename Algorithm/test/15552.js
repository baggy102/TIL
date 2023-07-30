const fs = require("fs");

const input = require("fs").readFileSync("example.txt").toString().trim().split("\n");

// const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const A = parseInt(input);

let answer = "";

for (let i = 1; i < A + 1; i++) {
  answer += Number(input[i].split(" ")[0]) + Number(input[i].split(" ")[1]) + "\n";
}

console.log(answer);
