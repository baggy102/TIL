const fs = require("fs");

const input = require("fs").readFileSync("example.txt").toString().trim().split("\n");

// const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

let A = parseInt(input[0].split(" ")[0]);
let B = parseInt(input[0].split(" ")[1]);
let C = parseInt(input[1]);

H = Math.floor((A * 60 + B + C) / 60);
M = (B + C) % 60;
if (H >= 24) {
  H -= 24;
}

console.log(H, M);
